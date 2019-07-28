package com.greenfoxacademy.TeachingMaterialQueryService.Entities.SyllabusAPIEntities;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBDocument;
import java.util.List;

@DynamoDBDocument
public class WeeklySchedule {

  private List<Week> weeks;

  public WeeklySchedule() {
  }

  public WeeklySchedule(List<Week> weeks) {
    this.weeks = weeks;
  }

  public List<Week> getWeeks() {
    return weeks;
  }

  public void setWeeks(List<Week> weeks) {
    this.weeks = weeks;
  }

}
