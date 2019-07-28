package com.greenfoxacademy.TeachingMaterialQueryService.Messaging;

import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MessageQueueConfig {

  @Value("${direct-exchange.name.teaching-material-changed}")
  private String teachingMaterialChangedExchangeName;

  @Value("${queue.name.teaching-material-changed}")
  private String teachingMaterialChangedQueueName;

  @Bean
  Queue queue() {
    return new Queue(teachingMaterialChangedQueueName);
  }

  @Bean
  DirectExchange directExchange() {
    return new DirectExchange(teachingMaterialChangedExchangeName);
  }

  @Bean
  Binding binding(DirectExchange directExchange, Queue queue) {
    return BindingBuilder.bind(queue).to(directExchange).with("Teaching Material Changed");
  }
}
