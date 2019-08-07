package com.greenfoxacademy.TeachingMaterialQueryService.Integration.Controller;

import com.greenfoxacademy.TeachingMaterialQueryService.Controller.MaterialRestController;
import com.greenfoxacademy.TeachingMaterialQueryService.Entities.MaterialsAPIEntities.Material;
import com.greenfoxacademy.TeachingMaterialQueryService.Infrastructure.AutoCreateDynamoDBTables;
import com.greenfoxacademy.TeachingMaterialQueryService.Repositories.MaterialRepository;
import com.greenfoxacademy.TeachingMaterialQueryService.Service.MaterialService;
import com.greenfoxacademy.TeachingMaterialQueryService.Service.SyllabusService;
import com.greenfoxacademy.TeachingMaterialQueryService.TeachingMaterialQueryServiceApplication;
import org.hamcrest.Matchers;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
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

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
@SpringBootTest(
  webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT,
  classes = {
    MaterialService.class,
    MaterialRestController.class,
    TeachingMaterialQueryServiceApplication.class
  }
)

@AutoConfigureMockMvc
@ActiveProfiles("test")
public class MaterialRESTControllerTest {

  @Autowired
  private MockMvc mockMvc;

  @MockBean
  private MaterialRepository materialRepository;

  @MockBean
  private SyllabusService syllabusService;

  @MockBean
  private AutoCreateDynamoDBTables autoCreateDynamoDBTables;

  private List<Material> materialList;
  private Material testMaterial1;
  private Material testMaterial2;

  @Before
  public void setup() {
    materialList = new ArrayList<>();

    testMaterial1 = new Material();
    testMaterial1.setId("1");
    testMaterial1.setTitle("testMaterial1");
    testMaterial1.setUrl("www.testing.stuff");

    testMaterial2 = new Material();
    testMaterial2.setId("2");
    testMaterial2.setTitle("testMaterial2");
    testMaterial2.setUrl("www.testinganother.stuff");

    materialList = Arrays.asList(testMaterial1, testMaterial2);
  }

  @Test
  public void getAllMaterialsEndpointTest() throws Exception{

    when(materialRepository.findAll()).thenReturn(materialList);

    mockMvc.perform(get("/api/materials")
      .contentType(MediaType.APPLICATION_JSON))
      .andExpect(status().isOk())
      .andExpect(jsonPath("$.materials", Matchers.hasSize(2)))
      .andExpect(jsonPath("$.materials[0].title", is("testMaterial1")))
      .andExpect(jsonPath("$.materials[1].title", is("testMaterial2")));
  }
}
