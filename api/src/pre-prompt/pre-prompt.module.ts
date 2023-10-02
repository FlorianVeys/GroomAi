import { Module } from '@nestjs/common';
import { PrePromptController } from './pre-prompt.controller';
import { OpenAiModule } from 'src/open-ai/open-ai.module';

@Module({
  imports: [OpenAiModule],
  controllers: [PrePromptController],
  providers: [],
})
export class PrePromptModule {}
