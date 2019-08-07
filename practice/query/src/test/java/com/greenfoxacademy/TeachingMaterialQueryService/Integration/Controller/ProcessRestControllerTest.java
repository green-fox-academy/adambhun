package com.greenfoxacademy.TeachingMaterialQueryService.Integration.Controller;

import com.greenfoxacademy.TeachingMaterialQueryService.Entities.MaterialsAPIEntities.Material;
import com.greenfoxacademy.TeachingMaterialQueryService.Entities.SyllabusAPIEntities.Syllabus;
import com.greenfoxacademy.TeachingMaterialQueryService.Entities.Workshop;
import com.greenfoxacademy.TeachingMaterialQueryService.Infrastructure.AutoCreateDynamoDBTables;
import com.greenfoxacademy.TeachingMaterialQueryService.Repositories.MaterialRepository;
import com.greenfoxacademy.TeachingMaterialQueryService.Repositories.SyllabusRepository;
import com.greenfoxacademy.TeachingMaterialQueryService.Repositories.WorkshopRepository;
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
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.Matchers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
public class ProcessRestControllerTest {

  @Autowired
  private MockMvc mockMvc;

  @MockBean
  private MaterialRepository materialRepository;

  @MockBean
  private SyllabusRepository syllabusRepository;

  @MockBean
  private WorkshopRepository workshopRepository;

  @MockBean
  private AutoCreateDynamoDBTables autoCreateDynamoDBTables;

  private Material testMaterial;
  private Workshop testWorkshop;
  private Syllabus testSyllabus;
  private List<Material> testMaterials;

  @Before
  public void init() {
    testMaterial = new Material("test material title", "test material url");
    testWorkshop = new Workshop();
    testSyllabus = new Syllabus();
    testMaterials = new ArrayList<Material>() {{
      add(testMaterial);
    }};

    Mockito.when(materialRepository.findAll()).thenReturn(testMaterials);
    Mockito.doAnswer(invocation -> {
      testMaterials.clear();
      return null;
    }).when(materialRepository).deleteAll();
  }

  @Test
  public void executeProcess_returnResponseWithStateStarted() throws Exception {

    mockMvc.perform(MockMvcRequestBuilders.get("/api/materials"))
            .andExpect(jsonPath("$.materials", hasSize(1)));

    mockMvc.perform(MockMvcRequestBuilders.post("/api/process")
            .contentType(MediaType.APPLICATION_JSON)
            .content("{\"action\": \"reset\"}"))
            .andExpect(status().isOk());

    mockMvc.perform(MockMvcRequestBuilders.get("/api/materials"))
            .andExpect(jsonPath("$.materials", hasSize(0)));
  }
}
