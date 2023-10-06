import { PrePromptTemplate } from './prePromptTemplate';
import { InvalidContextError } from './invalidContextError';

describe('PrePromptTemplate', () => {
  describe('generatePrePrompt', () => {
    it('should render the prompt template with the provided context', () => {
      const template = new PrePromptTemplate(
        'test',
        '{ "type": "object" }',
        '{ "type": "string" }',
        '<p>{{ value }}</p>',
      );

      const context = { value: 'Hello, world!' };
      const result = template.generatePrePrompt(context);

      expect(result).toBe('<p>Hello, world!</p>');
    });

    it('should throw an InvalidContextError if the context is invalid', () => {
      const template = new PrePromptTemplate(
        'test',
        '{ "type": "object", "properties": { "value": { "type": "string" } } }',
        '{ "type": "string" }',
        '<p>{{ value }}</p>',
      );

      const context = { value: 42 };

      expect(() => {
        template.generatePrePrompt(context);
      }).toThrowError(InvalidContextError);
    });
  });
});
