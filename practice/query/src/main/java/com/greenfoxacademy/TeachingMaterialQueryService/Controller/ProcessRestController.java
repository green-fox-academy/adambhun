package com.greenfoxacademy.TeachingMaterialQueryService.Controller;

import com.greenfoxacademy.TeachingMaterialQueryService.Dtos.Process.ProcessAPIResponse;
import com.greenfoxacademy.TeachingMaterialQueryService.Dtos.Process.Process;
import com.greenfoxacademy.TeachingMaterialQueryService.Service.ProcessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProcessRestController {

  private ProcessService processService;

  @Autowired
  public ProcessRestController (ProcessService processService){
    this.processService = processService;
  }

  @PostMapping(path = "/api/process")
  public ResponseEntity<ProcessAPIResponse> executeProcess(@RequestBody Process process){
    return ResponseEntity.ok(processService.executeProcess(process));
  }
}
