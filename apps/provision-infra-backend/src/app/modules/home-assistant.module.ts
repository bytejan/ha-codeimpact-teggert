import { Module } from '@nestjs/common';
import { HomeAssistantController } from './home-assistant/home-assistant.controller';

@Module({
  controllers: [HomeAssistantController],
})
export class HomeAssistantModule {}
