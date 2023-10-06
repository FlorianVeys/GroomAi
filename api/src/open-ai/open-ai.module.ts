import { OpenAI } from 'openai';
import { Module } from '@nestjs/common';
import { OpenAiService } from './open-ai.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [
    {
      provide: OpenAI,
      useValue: new OpenAI(),
    },
    OpenAiService,
  ],
  exports: [OpenAiService],
})
export class OpenAiModule {}
