package com.greenfoxacademy.TeachingMaterialQueryService.Service;

import com.greenfoxacademy.TeachingMaterialQueryService.Dtos.Process.ProcessAPIResponse;
import com.greenfoxacademy.TeachingMaterialQueryService.Dtos.Process.Process;
import com.greenfoxacademy.TeachingMaterialQueryService.Dtos.Process.ProcessState;
import com.greenfoxacademy.TeachingMaterialQueryService.Repositories.MaterialRepository;
import com.greenfoxacademy.TeachingMaterialQueryService.Repositories.SyllabusRepository;
import com.greenfoxacademy.TeachingMaterialQueryService.Repositories.WorkshopRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProcessServiceImpl implements ProcessService {

  private List<CrudRepository> repositories;

  @Autowired
  public ProcessServiceImpl(MaterialRepository materialRepository, SyllabusRepository syllabusRepository, WorkshopRepository workshopRepository) {
    this.repositories = new ArrayList<CrudRepository>() {{
      add(materialRepository);
      add(syllabusRepository);
      add(workshopRepository);
    }};
  }

  @Override
  public ProcessState reset() {
    repositories.forEach(CrudRepository::deleteAll);
    return ProcessState.STARTED;
  }

  @Override
  public ProcessAPIResponse executeProcess(Process process){

    ProcessAPIResponse response = new ProcessAPIResponse();

    if (process.getAction().equalsIgnoreCase("reset")){
      response.setState(this.reset());
      response.setProcessId("123");
    }
    return response;
  }
}
