import { Controller, Post, Body } from '@nestjs/common';
import { ApplyPrePromptDto } from './dto/apply-pre-prompt.dto';

@Controller('pre-prompt')
export class PrePromptController {
  @Post()
  async applyPrePrompt<T>(@Body() prePromptTemplate: ApplyPrePromptDto) {}
}
