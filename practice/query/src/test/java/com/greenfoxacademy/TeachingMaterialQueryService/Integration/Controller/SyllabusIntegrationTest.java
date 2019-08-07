package com.greenfoxacademy.TeachingMaterialQueryService.Integration.Controller;

import com.greenfoxacademy.TeachingMaterialQueryService.Entities.SyllabusAPIEntities.*;
import com.greenfoxacademy.TeachingMaterialQueryService.Infrastructure.AutoCreateDynamoDBTables;
import com.greenfoxacademy.TeachingMaterialQueryService.Repositories.SyllabusRepository;
import com.greenfoxacademy.TeachingMaterialQueryService.TeachingMaterialQueryServiceApplication;
import org.hamcrest.Matchers;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import static org.hamcrest.core.Is.is;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.mockito.ArgumentMatchers.anyString;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = TeachingMaterialQueryServiceApplication.class)
@AutoConfigureMockMvc
@ActiveProfiles("test")
public class SyllabusIntegrationTest {

  @Autowired
  private MockMvc mockMvc;

  @MockBean
  private SyllabusRepository syllabusRepository;

  @MockBean
  AutoCreateDynamoDBTables autoCreateDynamoDBTables;

  private List<Syllabus> syllabuses;
  private Syllabus testSyllabus1;
  private Syllabus testSyllabus2;

  @Before
  public void init() {
    syllabuses = new ArrayList<>();
    List<Material> materials = Arrays.asList(new Material("test material", "test url"));
    List<Day> days = Arrays.asList(new Day("day 1", materials));
    List<Week> weeks = Arrays.asList(new Week("week 1", "week description", days, null));
    List<WeeklySchedule> weeklySchedules = Arrays.asList(new WeeklySchedule(weeks));
    testSyllabus1 = new Syllabus("test title1", "java", weeklySchedules);
    testSyllabus2 = new Syllabus("test title2", "javaScript", weeklySchedules);
    syllabuses.add(testSyllabus1);
    syllabuses.add(testSyllabus2);
  }

  @Test
  public void getByIdSuccess() throws Exception {
    Syllabus syllabus = new Syllabus("test title", "java", Arrays.asList());
    Mockito.when(syllabusRepository.findById(anyString())).thenReturn(Optional.ofNullable(syllabus));
    mockMvc.perform(get("/api/syllabuses/{id}", "1"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE));

  }

  @Test
  public void getSyllabuses_returnsSyllabusList() throws Exception {
    Mockito.when(syllabusRepository.findAll()).thenReturn(syllabuses);
    mockMvc.perform(get("/api/syllabuses"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.syllabuses", Matchers.hasSize(2)))
            .andExpect(jsonPath("$.syllabuses[0].title", is("test title1")))
            .andExpect(jsonPath("$.syllabuses[1].title", is("test title2")));
  }
}
