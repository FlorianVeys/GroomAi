import { Module } from '@nestjs/common';
import { PrePromptController } from './pre-prompt/pre-prompt.controller';
import { PrePromptModule } from './pre-prompt/pre-prompt.module';
import { OpenAiService } from './open-ai/open-ai.service';

@Module({
  imports: [PrePromptModule],
  controllers: [PrePromptController],
  providers: [OpenAiService],
})
export class AppModule {}
