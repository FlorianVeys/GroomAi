import { Test, TestingModule } from '@nestjs/testing';
import { PrePromptController } from './pre-prompt.controller';
import { PrePromptService } from './pre-prompt.service';
import { OpenAiModule } from './../open-ai/open-ai.module';

describe('PrePromptController', () => {
  let controller: PrePromptController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [OpenAiModule],
      controllers: [PrePromptController],
      providers: [PrePromptService],
    }).compile();

    controller = module.get<PrePromptController>(PrePromptController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
