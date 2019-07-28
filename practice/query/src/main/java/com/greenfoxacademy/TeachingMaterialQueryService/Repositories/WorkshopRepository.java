package com.greenfoxacademy.TeachingMaterialQueryService.Repositories;

import com.greenfoxacademy.TeachingMaterialQueryService.Entities.Workshop;
import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

@EnableScan
public interface WorkshopRepository extends CrudRepository<Workshop, String> {
  List<Workshop> findAll();

}
