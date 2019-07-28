package com.greenfoxacademy.TeachingMaterialQueryService.Infrastructure;

import org.springframework.stereotype.Component;

@Component
public class ConsoleLogger implements Logger {
  @Override
  public void logError(String message, Exception exception) {
    logError(message);
  }

  @Override
  public void logError(String message) {
    System.out.println(message);
  }
}
