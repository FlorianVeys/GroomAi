import { Test, TestingModule } from '@nestjs/testing';
import { PrePromptController } from './pre-prompt.controller';

describe('PrePromptController', () => {
  let controller: PrePromptController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrePromptController],
    }).compile();

    controller = module.get<PrePromptController>(PrePromptController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
