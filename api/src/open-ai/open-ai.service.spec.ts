import { createMockInstance } from 'jest-create-mock-instance';
import { OpenAI } from 'openai';
import { Test, TestingModule } from '@nestjs/testing';
import { OpenAiService } from './open-ai.service';

describe('OpenAiService', () => {
  let service: OpenAiService;
  let openAiMocked;

  beforeEach(async () => {
    openAiMocked = createMockInstance(OpenAI);
    openAiMocked.chat = {
      completions: {
        create: jest.fn().mockResolvedValue({
          choices: [
            {
              message: {
                content: 'toto',
              },
            },
          ],
        }),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: OpenAI,
          useValue: openAiMocked,
        },
        OpenAiService,
      ],
    }).compile();
    service = module.get<OpenAiService>(OpenAiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a chat completion message', () => {
    service.completion('say toto');
    expect(openAiMocked.chat.completions.create).toHaveBeenCalledWith({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: 'say toto',
        },
      ],
      n: 1,
      temperature: 0.7,
      max_tokens: 256,
    });
  });
});
