import { Module } from '@nestjs/common';
import { PrePromptController } from './pre-prompt.controller';
import { OpenAiModule } from 'src/open-ai/open-ai.module';
import { PrePromptService } from './pre-prompt.service';

@Module({
  imports: [OpenAiModule],
  controllers: [PrePromptController],
  providers: [PrePromptService],
})
export class PrePromptModule {}
