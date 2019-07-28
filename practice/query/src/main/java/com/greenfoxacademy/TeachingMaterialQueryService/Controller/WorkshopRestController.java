package com.greenfoxacademy.TeachingMaterialQueryService.Controller;

import com.greenfoxacademy.TeachingMaterialQueryService.Dtos.WorkshopDto;
import com.greenfoxacademy.TeachingMaterialQueryService.Service.WorkshopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class WorkshopRestController {

  private WorkshopService workshopService;

  @Autowired
  public WorkshopRestController(WorkshopService workshopService) {
    this.workshopService = workshopService;
  }

  @GetMapping("/api/workshops")
  public ResponseEntity<APIResponseWorkshopDto> getAllWorkshops() {
    APIResponseWorkshopDto apiResponseWorkshopDto = new APIResponseWorkshopDto();
    apiResponseWorkshopDto.workshops = workshopService.getAll();
    return new ResponseEntity<>(apiResponseWorkshopDto, HttpStatus.OK);
  }

  public static class APIResponseWorkshopDto {
    public List<WorkshopDto> workshops;
  }
}
