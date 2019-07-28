package com.greenfoxacademy.TeachingMaterialQueryService.Service;

import com.greenfoxacademy.TeachingMaterialQueryService.Dtos.WorkshopDto;
import com.greenfoxacademy.TeachingMaterialQueryService.Entities.Workshop;
import com.greenfoxacademy.TeachingMaterialQueryService.Repositories.WorkshopRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.*;

@Service
public class WorkshopServiceImpl implements WorkshopService {

  private WorkshopRepository workshopRepository;

  @Autowired
  public WorkshopServiceImpl(WorkshopRepository workshopRepository) {
    this.workshopRepository = workshopRepository;
  }

  public WorkshopDto workshopToDto(Workshop workshop) {
    WorkshopDto dto = new WorkshopDto();
    dto.id = workshop.getId();
    dto.title = workshop.getTitle();
    dto.url = workshop.getUrl();
    return dto;
  }

  @Override
  public List<WorkshopDto> getAll() {
    return workshopRepository.findAll().stream().map(this::workshopToDto).collect(Collectors.toList());
  }

  @Override
  public boolean hasAnyWorkshops() {
    return workshopRepository.count() > 0;
  }

  @Override
  public void saveWorkshop(List<Workshop> workshops) {
    workshopRepository.saveAll(workshops);
  }

}
