import { Test, TestingModule } from '@nestjs/testing';
import { PrePromptService } from './pre-prompt.service';

describe('PrePromptService', () => {
  let service: PrePromptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrePromptService],
    }).compile();

    service = module.get<PrePromptService>(PrePromptService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
