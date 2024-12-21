import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeAssistantModule } from './modules/home-assistant.module';

@Module({
  imports: [HomeAssistantModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
