package com.greenfoxacademy.TeachingMaterialQueryService.Repositories;

import com.greenfoxacademy.TeachingMaterialQueryService.Entities.MaterialsAPIEntities.Material;
import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

@EnableScan
public interface MaterialRepository extends CrudRepository<Material, String> {
  List<Material> findAll();
}
