package com.greenfoxacademy.TeachingMaterialQueryService.Infrastructure;

import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;
import com.amazonaws.services.dynamodbv2.model.*;
import com.amazonaws.services.dynamodbv2.util.TableUtils;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.ClassPathScanningCandidateComponentProvider;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.core.type.filter.AnnotationTypeFilter;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class AutoCreateDynamoDBTables implements ApplicationRunner {
  private DynamoDBMapper dynamoDBMapper;
  private AmazonDynamoDB amazonDynamoDB;
  private Logger logger;
  private static final long READ_CAPACITY_UNITS = 25L;
  private static final long WRITE_CAPACITY_UNITS = 25L;

  public AutoCreateDynamoDBTables(DynamoDBMapper dynamoDBMapper, AmazonDynamoDB amazonDynamoDB, Logger logger) {
    this.dynamoDBMapper = dynamoDBMapper;
    this.amazonDynamoDB = amazonDynamoDB;
    this.logger = logger;
  }

  @Override
  public void run(ApplicationArguments args) throws Exception {
    findEntityClasses()
      .forEach(this::createDynamoDBTable);
  }

  private List<Class<?>> findEntityClasses() {
    ClassPathScanningCandidateComponentProvider provider = new ClassPathScanningCandidateComponentProvider(false);
    provider.addIncludeFilter(new AnnotationTypeFilter(DynamoDBTable.class));

    Set<BeanDefinition> candidateComponents = provider.findCandidateComponents("com.greenfoxacademy.TeachingMaterialQueryService");

    return candidateComponents.stream()
      .map(BeanDefinition::getBeanClassName)
      .map(this::toClass)
      .collect(Collectors.toList());
  }

  private Class<?> toClass(String className) {
    try {
      return Class.forName(className);
    } catch (ClassNotFoundException e) {
      logger.logError("Entity class was not found for entity: `" + className + "`", e);
    }

    return null;
  }

  private void createDynamoDBTable(Class<?> entityClass) {
    CreateTableResult createTableResult = sendCreateTableRequest(entityClass);

    if (createTableResult == CreateTableResult.FAILED) {
      logger.logError("Failed to create DynamoDB entity: " + entityClass.getName());
    }
  }

  private CreateTableResult sendCreateTableRequest(Class<?> entityClass) {
    CreateTableRequest createTableRequest = dynamoDBMapper.generateCreateTableRequest(entityClass);

    CreateTableResult createTableResult = createTableIfNotExists(createTableRequest);

    if (createTableResult == CreateTableResult.IN_PROGRESS) {
      return waitForTableToBeCreated(createTableRequest);
    }

    return createTableResult;
  }

  private CreateTableResult waitForTableToBeCreated(CreateTableRequest createTableRequest) {
    String tableName = createTableRequest.getTableName();

    try {
      TableUtils.waitUntilActive(amazonDynamoDB, tableName);
    } catch (InterruptedException e) {
      logger.logError("`waitUntilActive()` method timed out. Table name: `" + tableName + "`", e);

      return CreateTableResult.FAILED;
    }

    return CreateTableResult.SUCCEEDED;
  }

  private CreateTableResult createTableIfNotExists(CreateTableRequest createTableRequest) {
    createTableRequest.setProvisionedThroughput(new ProvisionedThroughput(READ_CAPACITY_UNITS, WRITE_CAPACITY_UNITS));

    boolean created = TableUtils.createTableIfNotExists(amazonDynamoDB, createTableRequest);

    if (!created) {
      return CreateTableResult.ALREADY_EXISTED;
    }

    return CreateTableResult.IN_PROGRESS;
  }
}

enum CreateTableResult {
  SUCCEEDED,
  FAILED,
  IN_PROGRESS,
  ALREADY_EXISTED
}
