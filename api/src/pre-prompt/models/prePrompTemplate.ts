import Ajv, { ValidateFunction } from 'ajv';
import Mustache from 'mustache';

export class PrePromptTemplate {
  protected ajv: Ajv;
  protected contextValidator: ValidateFunction<unknown>;
  protected resultValidator: ValidateFunction<unknown>;

  constructor(
    protected name: string,
    protected contextSchema: string,
    protected resultSchema: string,
    protected promptTemplate: string,
  ) {
    this.ajv = new Ajv();

    // TODO - add more security
    this.contextValidator = this.ajv.compile(JSON.parse(this.contextSchema));
    this.resultValidator = this.ajv.compile(JSON.parse(this.resultSchema));
  }

  generatePrePrompt(context: unknown): string {
    if (!this.contextValidator(context)) {
      throw new Error('Invalid context');
    }

    return Mustache.render(this.promptTemplate, context);
  }
}
