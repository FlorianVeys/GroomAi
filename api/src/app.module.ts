import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrePromptController } from './pre-prompt/pre-prompt.controller';
import { PrePromptModule } from './pre-prompt/pre-prompt.module';

@Module({
  imports: [PrePromptModule],
  controllers: [AppController, PrePromptController],
  providers: [AppService],
})
export class AppModule {}
