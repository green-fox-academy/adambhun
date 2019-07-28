package com.greenfoxacademy.TeachingMaterialQueryService.Service;

import com.greenfoxacademy.TeachingMaterialQueryService.Dtos.APIResponseProjectsDto;

public interface ProjectService {

  APIResponseProjectsDto getAll();

  boolean isEmpty();
}
