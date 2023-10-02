import { Module } from '@nestjs/common';
import { PrePromptController } from './pre-prompt/pre-prompt.controller';
import { PrePromptModule } from './pre-prompt/pre-prompt.module';

@Module({
  imports: [PrePromptModule],
  controllers: [PrePromptController],
  providers: [],
})
export class AppModule {}
