import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class OpenAiService {
  constructor(private openAi: OpenAI) {}

  async completion(prompt: string): Promise<string | null> {
    try {
      // TODO - Aggregate potential previous messages for reconstruction of context
      const {
        choices: [choice],
      } = await this.openAi.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
        n: 1,
        temperature: 0.7,
        max_tokens: 256,
      });

      return choice.message.content;
    } catch (e) {
      // TODO - react to error events accordingly
      if (e instanceof OpenAI.APIError) {
        console.error({
          type: 'OpenAIError',
          error: e,
        });
      } else {
        console.error({
          type: 'UnknownError',
          error: e,
        });
      }

      throw e;
    }
  }
}
