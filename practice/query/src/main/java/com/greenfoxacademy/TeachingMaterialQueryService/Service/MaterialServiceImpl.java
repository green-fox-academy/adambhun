package com.greenfoxacademy.TeachingMaterialQueryService.Service;

import com.greenfoxacademy.TeachingMaterialQueryService.Dtos.MaterialDto;
import com.greenfoxacademy.TeachingMaterialQueryService.Entities.MaterialsAPIEntities.Material;
import com.greenfoxacademy.TeachingMaterialQueryService.Repositories.MaterialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MaterialServiceImpl implements MaterialService {

  private MaterialRepository materialRepository;

  @Autowired
  public MaterialServiceImpl(MaterialRepository materialRepository) {
    this.materialRepository = materialRepository;
  }

  public MaterialDto materialToDto(Material material) {
    MaterialDto dto = new MaterialDto();
    dto.id = material.getId();
    dto.title = material.getTitle();
    dto.url = material.getUrl();
    return dto;
  }

  @Override
  public List<MaterialDto> getAll() {
    return materialRepository.findAll().stream().map(this::materialToDto).collect(Collectors.toList());
  }

  @Override
  public boolean isEmpty() {
    return materialRepository.findAll().isEmpty();
  }
}
