import { OpenAI } from 'openai';
import { Module } from '@nestjs/common';
import { PrePromptController } from './pre-prompt/pre-prompt.controller';
import { PrePromptModule } from './pre-prompt/pre-prompt.module';
import { OpenAiService } from './open-ai/open-ai.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), PrePromptModule],
  controllers: [PrePromptController],
  providers: [
    {
      provide: OpenAI,
      useValue: new OpenAI(),
    },
    OpenAiService,
  ],
})
export class AppModule {}
