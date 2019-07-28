package com.greenfoxacademy.TeachingMaterialQueryService.Service;

import com.greenfoxacademy.TeachingMaterialQueryService.Dtos.APIResponseProjectsDto;
import com.greenfoxacademy.TeachingMaterialQueryService.Repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectServiceImpl implements ProjectService {

  private ProjectRepository projectRepository;

  @Autowired
  public ProjectServiceImpl(ProjectRepository projectRepository) {
    this.projectRepository = projectRepository;
  }

  public APIResponseProjectsDto getAll() {
    APIResponseProjectsDto apiResponse = new APIResponseProjectsDto();
    apiResponse.projects = projectRepository.findAll();
    return apiResponse;
  }

  @Override
  public boolean isEmpty() {
    return projectRepository.findAll().isEmpty();
  }
}
