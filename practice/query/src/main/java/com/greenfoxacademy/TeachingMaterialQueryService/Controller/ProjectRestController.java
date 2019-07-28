package com.greenfoxacademy.TeachingMaterialQueryService.Controller;

import com.greenfoxacademy.TeachingMaterialQueryService.Service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProjectRestController {

  private ProjectService projectService;

  @Autowired
  public ProjectRestController(ProjectService projectService) {
    this.projectService = projectService;
  }

  @GetMapping(path = "/api/projects")
  public ResponseEntity getProjects() {
    return new ResponseEntity<>(projectService.getAll(), HttpStatus.OK);
  }
}
