package com.greenfoxacademy.TeachingMaterialQueryService.Entities.SyllabusAPIEntities;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBDocument;
import java.util.List;

@DynamoDBDocument
public class Week {

  private String title;
  private String description;
  private List<Day> days;
  private Project project;

  public Week() {
  }

  public Week(String title, String description, List<Day> days, Project project) {
    this.title = title;
    this.description = description;
    this.days = days;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public List<Day> getDays() {
    return days;
  }

  public void setDays(List<Day> days) {
    this.days = days;
  }

  public Project getProject() {
    return project;
  }

  public void setProject(Project project) {
    this.project = project;
  }

}
