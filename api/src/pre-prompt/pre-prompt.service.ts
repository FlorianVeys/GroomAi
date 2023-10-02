import { Injectable } from '@nestjs/common';
import { PrePromptTemplate } from './models/prePrompTemplate';
import { ApplyPrePromptDto } from './dto/apply-pre-prompt.dto';
import { OpenAiService } from 'src/open-ai/open-ai.service';

// TODO - datas should come from datasource
const translateContextSchema = JSON.stringify({
  type: 'object',
  properties: {
    text: {
      type: 'string',
    },
    iso: {
      type: 'string',
    },
  },
  required: ['text', 'iso'],
});
const translateResultSchema = JSON.stringify({
  type: 'string',
});
const prePromptTemplate =
  'I give you a text surrounded by [] translate the text into the language iso {{iso}} [{{text}}]';

@Injectable()
export class PrePromptService {
  // TODO - construct on demand using datasource
  private prePrompts: Map<string, PrePromptTemplate> = new Map([
    [
      'translate',
      new PrePromptTemplate(
        'translate',
        translateContextSchema,
        translateResultSchema,
        prePromptTemplate,
      ),
    ],
  ]);

  constructor(private openAi: OpenAiService) {}

  async applyPrePrompt(
    prePromptRequest: ApplyPrePromptDto,
  ): Promise<string | null> {
    if (!this.prePrompts.has(prePromptRequest.name)) {
      return null;
    }

    const templater = this.prePrompts.get(
      prePromptRequest.name,
    ) as PrePromptTemplate;
    const prompt = templater.generatePrePrompt(prePromptRequest.context);

    return this.openAi.completion(prompt);
  }
}
