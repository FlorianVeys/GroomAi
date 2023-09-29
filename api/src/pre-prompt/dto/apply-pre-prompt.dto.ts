import { IsString, IsObject } from 'class-validator';

export class ApplyPrePromptDto<TContext = object> {
  @IsString()
  readonly name: string;
  @IsObject()
  readonly context: TContext;
}
