package com.greenfoxacademy.TeachingMaterialQueryService.Controller;

import com.greenfoxacademy.TeachingMaterialQueryService.Dtos.SyllabusDto;
import com.greenfoxacademy.TeachingMaterialQueryService.Entities.SyllabusAPIEntities.Syllabus;
import com.greenfoxacademy.TeachingMaterialQueryService.Infrastructure.ConsoleLogger;
import com.greenfoxacademy.TeachingMaterialQueryService.Service.SyllabusService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
public class SyllabusRestController {

  private SyllabusService syllabusService;
  private ConsoleLogger consoleLogger = new ConsoleLogger();

  public SyllabusRestController(SyllabusService syllabusService)
  {
    this.syllabusService = syllabusService;
  }

  @GetMapping("/api/syllabuses/{id}")
  public ResponseEntity<Syllabus> querySyllabus(@PathVariable String id) {

    if (id == null) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    try {
      Syllabus syllabus = syllabusService.getById(id);
      return ResponseEntity.ok(syllabus);
    } catch (NoSuchElementException exception) {
      consoleLogger.logError("Syllabus with given id " + id + " not found.");
      return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
  }

  @GetMapping("/api/syllabuses")
  public ResponseEntity<APIResponseSyllabusesDto> getSyllabuses() {
    APIResponseSyllabusesDto apiResponseSyllabusesDto = new APIResponseSyllabusesDto();
    apiResponseSyllabusesDto.syllabuses = syllabusService.getAll();

    return new ResponseEntity<>(apiResponseSyllabusesDto, HttpStatus.OK);
  }

  public static class APIResponseSyllabusesDto {
    public List<SyllabusDto> syllabuses;
  }
}
