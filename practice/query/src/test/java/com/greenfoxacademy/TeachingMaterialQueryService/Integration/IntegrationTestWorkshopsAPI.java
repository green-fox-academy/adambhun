package com.greenfoxacademy.TeachingMaterialQueryService.Integration;

import com.greenfoxacademy.TeachingMaterialQueryService.Entities.*;
import com.greenfoxacademy.TeachingMaterialQueryService.Infrastructure.AutoCreateDynamoDBTables;
import com.greenfoxacademy.TeachingMaterialQueryService.Repositories.WorkshopRepository;
import com.greenfoxacademy.TeachingMaterialQueryService.TeachingMaterialQueryServiceApplication;
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
import java.util.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = TeachingMaterialQueryServiceApplication.class)
@AutoConfigureMockMvc
@ActiveProfiles("test")
public class IntegrationTestWorkshopsAPI {

  @Autowired
  private MockMvc mockMvc;

  @MockBean
  private WorkshopRepository workshopRepository;

  @MockBean
  AutoCreateDynamoDBTables autoCreateDynamoDBTables;

  @Test
  public void getAll() throws Exception {
    List<Workshop> workshops = new ArrayList<>(Arrays.asList(
                    new Workshop("intTest-for-Java", "intTestExpressions", "intTestUrl"),
                    new Workshop("intTestCss", "intTestOOP", "intTestUrlCSS")));
    Mockito.when(workshopRepository.findAll()).thenReturn((workshops));

    mockMvc.perform(get("/api/workshops", "1"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE));
  }

}
