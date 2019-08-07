package com.greenfoxacademy.TeachingMaterialQueryService.Integration.Controller;

import com.greenfoxacademy.TeachingMaterialQueryService.Entities.ProjectsAPIEntities.Project;
import com.greenfoxacademy.TeachingMaterialQueryService.Infrastructure.AutoCreateDynamoDBTables;
import com.greenfoxacademy.TeachingMaterialQueryService.Repositories.ProjectRepository;
import org.hamcrest.Matchers;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.core.Is.is;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
public class ProjectRestControllerTest {

  @Autowired
  private MockMvc mockMvc;

  @MockBean
  private ProjectRepository projectRepository;

  @MockBean
  private AutoCreateDynamoDBTables autoCreateDynamoDBTables;

  private List<Project> testProjects;

  @Before
  public void init() {
    Project testProject1 = new Project("first test project", "test url 1");
    Project testProject2 = new Project("second test project", "test url 2");
    testProjects = new ArrayList<Project>() {{
      add(testProject1);
      add(testProject2);
    }};
  }

  @Test
  public void getProjects_returnAllProjects_whenPresentInDatabase() throws Exception {

    Mockito.when(projectRepository.findAll()).thenReturn(testProjects);
    mockMvc.perform(MockMvcRequestBuilders.get("/api/projects"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.projects", Matchers.hasSize(2)))
            .andExpect(jsonPath("$.projects[0].title", is("first test project")))
            .andExpect(jsonPath("$.projects[0].url", is("test url 1")))
            .andExpect(jsonPath("$.projects[1].title", is("second test project")))
            .andExpect(jsonPath("$.projects[1].url", is("test url 2")));
  }

  @Test
  public void getProjects_returnEmptyProjectList_whenDataIsNotPresentInDatabase() throws Exception {

    mockMvc.perform(MockMvcRequestBuilders.get("/api/projects"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.projects", Matchers.hasSize(0)));
  }
}
