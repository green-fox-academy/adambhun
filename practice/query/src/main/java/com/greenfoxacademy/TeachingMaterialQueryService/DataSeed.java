package com.greenfoxacademy.TeachingMaterialQueryService;

import com.greenfoxacademy.TeachingMaterialQueryService.Entities.Workshop;
import com.greenfoxacademy.TeachingMaterialQueryService.Service.WorkshopService;
import com.greenfoxacademy.TeachingMaterialQueryService.Entities.SyllabusAPIEntities.*;
import com.greenfoxacademy.TeachingMaterialQueryService.Infrastructure.ConsoleLogger;
import com.greenfoxacademy.TeachingMaterialQueryService.Service.SyllabusService;
import com.greenfoxacademy.TeachingMaterialQueryService.Repositories.MaterialRepository;
import com.greenfoxacademy.TeachingMaterialQueryService.Repositories.ProjectRepository;
import com.greenfoxacademy.TeachingMaterialQueryService.Service.MaterialService;
import com.greenfoxacademy.TeachingMaterialQueryService.Service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
@Profile("!test")
public class DataSeed implements CommandLineRunner {

  private WorkshopService workshopService;
  private MaterialRepository materialRepository;
  private MaterialService materialService;
  private SyllabusService syllabusService;
  private ProjectService projectService;
  private ProjectRepository projectRepository;
  private ConsoleLogger consoleLogger = new ConsoleLogger();

  @Autowired
  public DataSeed(MaterialRepository materialRepository, MaterialService materialService,
                  SyllabusService syllabusService, WorkshopService workshopService,
                  ProjectService projectService, ProjectRepository projectRepository) {
    this.materialRepository = materialRepository;
    this.materialService = materialService;
    this.syllabusService = syllabusService;
    this.workshopService = workshopService;
    this.projectService = projectService;
    this.projectRepository = projectRepository;
  }

  @Override
  public void run(String... args) throws Exception {

    if (!workshopService.hasAnyWorkshops()) {

      List<Workshop> workshops = Arrays.asList(
              new Workshop("expressions-and-control-flow*java", "Expressions and Control Flow", "/api/workshops/expressions-and-control-flow*java"),
              new Workshop("oo*cs", "Object Oriented Programming", "/api/materials/oo*cs"));

      workshopService.saveWorkshop(workshops);
    }

    com.greenfoxacademy.TeachingMaterialQueryService.Entities.MaterialsAPIEntities.Material material = new com.greenfoxacademy.TeachingMaterialQueryService.Entities.MaterialsAPIEntities.Material("test material", "test url");

    if (materialService.isEmpty()) {
      materialRepository.save(material);
    }

    if (projectService.isEmpty()) {
      projectRepository.save(new com.greenfoxacademy.TeachingMaterialQueryService.Entities.ProjectsAPIEntities.Project("test project", "test url"));
    }

    if (syllabusService.hasAnySyllabuses()) {
      return;
    }

    List<Material> materials = Arrays.asList(new Material("test material", "test url"));
    List<Day> days = Arrays.asList(new Day("day 1", materials));
    List<Week> weeks = Arrays.asList(new Week("week 1", "week description", days, new Project("test project", "test url")));
    List<WeeklySchedule> weeklySchedules = Arrays.asList(new WeeklySchedule(weeks));
    Syllabus syllabus = new Syllabus("test title", "java", weeklySchedules);

    try {
      syllabusService.saveSyllabus(syllabus);
    } catch (NullPointerException e) {
      consoleLogger.logError("No syllabus to save.");
    } catch (IllegalArgumentException e) {
      consoleLogger.logError("The id and title should not be empty.");
    }
  }
}
