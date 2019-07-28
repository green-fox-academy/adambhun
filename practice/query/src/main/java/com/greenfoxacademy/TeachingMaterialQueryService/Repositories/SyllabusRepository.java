package com.greenfoxacademy.TeachingMaterialQueryService.Repositories;

import com.greenfoxacademy.TeachingMaterialQueryService.Entities.SyllabusAPIEntities.Syllabus;
import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

@EnableScan
public interface SyllabusRepository extends CrudRepository<Syllabus, String> {
  List<Syllabus> findAll();
}
