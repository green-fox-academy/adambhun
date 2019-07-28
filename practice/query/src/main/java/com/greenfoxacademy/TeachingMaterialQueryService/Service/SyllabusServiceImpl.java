package com.greenfoxacademy.TeachingMaterialQueryService.Service;

import com.greenfoxacademy.TeachingMaterialQueryService.Dtos.SyllabusDto;
import com.greenfoxacademy.TeachingMaterialQueryService.Entities.SyllabusAPIEntities.Syllabus;
import com.greenfoxacademy.TeachingMaterialQueryService.Repositories.SyllabusRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Service
public class SyllabusServiceImpl implements SyllabusService {

  private SyllabusRepository syllabusRepository;

  public SyllabusServiceImpl(SyllabusRepository syllabusRepository) {
    this.syllabusRepository = syllabusRepository;
  }

  @Override
  public Syllabus getById(String id) {

    return syllabusRepository
            .findById(id)
            .orElseThrow(NoSuchElementException::new);
  }

  @Override
  public void saveSyllabus(Syllabus syllabus) {
    if (syllabus == null) {
      throw new NullPointerException();
    }

    if (syllabus.getTitle() != null) {
      syllabusRepository.save(syllabus);
    } else {
      throw new IllegalArgumentException();
    }
  }

  @Override
  public boolean hasAnySyllabuses() {
    return syllabusRepository.count() > 0;
  }

  @Override
  public SyllabusDto createSyllabusDto(Syllabus syllabus) {
    SyllabusDto syllabusDto = new SyllabusDto();
    syllabusDto.id = syllabus.getId();
    syllabusDto.title = syllabus.getTitle();
    syllabusDto.url = "/api/syllabuses/" + syllabus.getId();
    return syllabusDto;
  }

  @Override
  public List<SyllabusDto> getAll() {
    return syllabusRepository.findAll().stream().map(this::createSyllabusDto).collect(Collectors.toList());
  }
}
