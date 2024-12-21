import { Test, TestingModule } from '@nestjs/testing';
import { HomeAssistantController } from './home-assistant.controller';

describe('HomeAssistantController', () => {
  let controller: HomeAssistantController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomeAssistantController],
    }).compile();

    controller = module.get<HomeAssistantController>(HomeAssistantController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
