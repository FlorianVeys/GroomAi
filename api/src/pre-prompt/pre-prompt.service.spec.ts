import { Test, TestingModule } from '@nestjs/testing';
import { PrePromptService } from './pre-prompt.service';
import { OpenAiModule } from './../open-ai/open-ai.module';

describe('PrePromptService', () => {
  let service: PrePromptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [OpenAiModule],
      providers: [PrePromptService],
    }).compile();

    service = module.get<PrePromptService>(PrePromptService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
