package com.greenfoxacademy.TeachingMaterialQueryService.Service;

import com.greenfoxacademy.TeachingMaterialQueryService.Dtos.Process.ProcessAPIResponse;
import com.greenfoxacademy.TeachingMaterialQueryService.Dtos.Process.Process;
import com.greenfoxacademy.TeachingMaterialQueryService.Dtos.Process.ProcessState;

public interface ProcessService {

  ProcessState reset();
  ProcessAPIResponse executeProcess(Process process);
}
