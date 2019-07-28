package com.greenfoxacademy.TeachingMaterialQueryService.Infrastructure;

public interface Logger {
  void logError(String message, Exception exception);
  void logError(String message);
}
