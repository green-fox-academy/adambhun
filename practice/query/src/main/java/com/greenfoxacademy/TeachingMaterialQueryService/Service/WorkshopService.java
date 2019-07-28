package com.greenfoxacademy.TeachingMaterialQueryService.Service;

import com.greenfoxacademy.TeachingMaterialQueryService.Dtos.WorkshopDto;
import com.greenfoxacademy.TeachingMaterialQueryService.Entities.Workshop;
import java.util.List;

public interface WorkshopService {

  List<WorkshopDto> getAll();
  boolean hasAnyWorkshops();
  void saveWorkshop(List<Workshop> workshops);

}
