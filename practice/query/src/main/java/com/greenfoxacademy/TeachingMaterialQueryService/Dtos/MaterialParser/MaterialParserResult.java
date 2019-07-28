package com.greenfoxacademy.TeachingMaterialQueryService.Dtos.MaterialParser;

public class MaterialParserResult {

  private String message;
  private boolean isSucceeded;

  public MaterialParserResult(String message, boolean isSucceeded) {
    this.message = message;
    this.isSucceeded = isSucceeded;
  }

  public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }

  public boolean isSucceeded() {
    return isSucceeded;
  }

  public void setSucceeded(boolean succeeded) {
    isSucceeded = succeeded;
  }
}
