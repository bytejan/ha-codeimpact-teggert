import { Controller, Get } from '@nestjs/common';

@Controller('home-assistant')
export class HomeAssistantController {

  @Get()
  index() {
    return "hi"
  }
}
