package com.greenfoxacademy.TeachingMaterialQueryService.Dtos.Process;

public class ProcessAPIResponse {

  private ProcessState state;
  private String processId;

  public ProcessAPIResponse() {
  }

  public ProcessAPIResponse(ProcessState state, String processId) {
    this.state = state;
    this.processId = processId;
  }

  public ProcessState getState() {
    return state;
  }

  public void setState(ProcessState state) {
    this.state = state;
  }

  public String getProcessId() {
    return processId;
  }

  public void setProcessId(String processId) {
    this.processId = processId;
  }
}
