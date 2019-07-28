package com.greenfoxacademy.TeachingMaterialQueryService.Controller;

import com.greenfoxacademy.TeachingMaterialQueryService.Dtos.MaterialDto;
import com.greenfoxacademy.TeachingMaterialQueryService.Service.MaterialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MaterialRestController {

  private MaterialService materialService;

  @Autowired
  public MaterialRestController(MaterialService materialService) {
    this.materialService = materialService;
  }

  @GetMapping("/api/materials")
  public ResponseEntity<APIResponseMaterialsDto> getListOfAllMaterials() {
    APIResponseMaterialsDto apiResponseMaterialsDto = new APIResponseMaterialsDto();
    apiResponseMaterialsDto.materials = materialService.getAll();

    return new ResponseEntity<>(apiResponseMaterialsDto, HttpStatus.OK);
  }

  public static class APIResponseMaterialsDto {
    public List<MaterialDto> materials;
  }
}
