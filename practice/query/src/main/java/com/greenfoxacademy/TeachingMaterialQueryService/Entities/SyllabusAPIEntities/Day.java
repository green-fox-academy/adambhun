package com.greenfoxacademy.TeachingMaterialQueryService.Entities.SyllabusAPIEntities;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBDocument;

import java.util.List;

@DynamoDBDocument
public class Day {

  private String name;
  private List<Material> materials;

  public Day() {
  }

  public Day(String name, List<Material> materials) {
    this.name = name;
    this.materials = materials;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public List<Material> getMaterials() {
    return materials;
  }

  public void setMaterials(List<Material> materials) {
    this.materials = materials;
  }

}
