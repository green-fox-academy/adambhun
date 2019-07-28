package com.greenfoxacademy.TeachingMaterialQueryService.Service;

import com.greenfoxacademy.TeachingMaterialQueryService.Dtos.MaterialDto;

import java.util.List;

public interface MaterialService {
  List<MaterialDto> getAll();
  boolean isEmpty();
}
