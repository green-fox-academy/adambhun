package com.greenfoxacademy.TeachingMaterialQueryService.Service;

import com.greenfoxacademy.TeachingMaterialQueryService.Dtos.MaterialParser.MaterialChanged;
import com.greenfoxacademy.TeachingMaterialQueryService.Dtos.MaterialParser.MaterialParserResult;

public interface TeachingMaterialParser {

  MaterialParserResult parseTeachingMaterial(MaterialChanged materialChanged);
}
