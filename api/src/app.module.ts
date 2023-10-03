import { Module } from '@nestjs/common';
import { PrePromptModule } from './pre-prompt/pre-prompt.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), PrePromptModule],
})
export class AppModule {}
