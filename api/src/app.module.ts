import { Module } from '@nestjs/common';
import { PrePromptController } from './pre-prompt/pre-prompt.controller';
import { PrePromptModule } from './pre-prompt/pre-prompt.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), PrePromptModule],
  controllers: [PrePromptController],
  providers: [],
})
export class AppModule {}
