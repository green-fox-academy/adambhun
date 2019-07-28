package com.greenfoxacademy.TeachingMaterialQueryService.Service.Mock;

import com.greenfoxacademy.TeachingMaterialQueryService.Dtos.MaterialParser.MaterialChanged;
import com.greenfoxacademy.TeachingMaterialQueryService.Dtos.MaterialParser.MaterialParserResult;
import com.greenfoxacademy.TeachingMaterialQueryService.Service.TeachingMaterialParser;
import org.springframework.stereotype.Service;

@Service
public class TeachingMaterialParserMockImpl implements TeachingMaterialParser {

  @Override
  public MaterialParserResult parseTeachingMaterial(MaterialChanged materialChanged) {
    return new MaterialParserResult("Started parsing the teaching materials with url "
            + materialChanged.getUrl(), true);
  }
}
