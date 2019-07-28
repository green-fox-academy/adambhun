package com.greenfoxacademy.TeachingMaterialQueryService.Service;

import com.greenfoxacademy.TeachingMaterialQueryService.Dtos.SyllabusDto;
import com.greenfoxacademy.TeachingMaterialQueryService.Entities.SyllabusAPIEntities.Syllabus;

import java.util.List;

public interface SyllabusService {

  Syllabus getById(String id);
  void saveSyllabus(Syllabus syllabus);
  boolean hasAnySyllabuses();
  SyllabusDto createSyllabusDto(Syllabus syllabus);
  List<SyllabusDto> getAll();
}
