package com.greenfoxacademy.TeachingMaterialQueryService.Messaging;

import com.greenfoxacademy.TeachingMaterialQueryService.Dtos.MaterialParser.MaterialChanged;
import com.greenfoxacademy.TeachingMaterialQueryService.Service.TeachingMaterialParser;
import org.springframework.amqp.rabbit.annotation.RabbitHandler;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@RabbitListener(queues = "queue")
public class Receiver {

  private TeachingMaterialParser teachingMaterialParser;

  @Autowired
  public Receiver(TeachingMaterialParser teachingMaterialParser) {
    this.teachingMaterialParser = teachingMaterialParser;
  }

  @RabbitHandler
  public void receiveMessage(String message) {
    System.out.println("Received message <" + message + ">");
    System.out.println(teachingMaterialParser.parseTeachingMaterial(new MaterialChanged("test " +
            "url")).getMessage());
  }
}
