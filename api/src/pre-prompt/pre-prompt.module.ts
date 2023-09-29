import { Module } from '@nestjs/common';
import { PrePromptController } from './pre-prompt.controller';
import { PrePromptService } from './pre-prompt.service';

@Module({
  controllers: [PrePromptController],
  providers: [PrePromptService]
})
export class PrePromptModule {}
