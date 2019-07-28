package com.greenfoxacademy.TeachingMaterialQueryService.Repositories;

import com.greenfoxacademy.TeachingMaterialQueryService.Entities.ProjectsAPIEntities.Project;
import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

@EnableScan
public interface ProjectRepository extends CrudRepository<Project, String> {

  List<Project> findAll();
}
