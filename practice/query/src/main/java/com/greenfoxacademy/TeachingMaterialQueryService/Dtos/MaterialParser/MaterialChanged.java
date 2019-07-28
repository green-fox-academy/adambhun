package com.greenfoxacademy.TeachingMaterialQueryService.Dtos.MaterialParser;

public class MaterialChanged {

  private String url;

  public MaterialChanged(String url) {
    this.url = url;
  }

  public String getUrl() {
    return this.url;
  }

  public void setUrl(String url) {
    this.url = url;
  }
}
