import { Controller, Post, Body, Res, HttpCode } from '@nestjs/common';
import { ApplyPrePromptDto } from './dto/apply-pre-prompt.dto';
import { PrePromptService } from './pre-prompt.service';
import { Response } from 'express';
import { InvalidContextError } from './models/invalidContextError';

@Controller('pre-prompt')
export class PrePromptController {
  constructor(private prePromptService: PrePromptService) {}
  @HttpCode(200)
  @Post()
  async applyPrePrompt(
    @Body() prePromptTemplate: ApplyPrePromptDto,
    @Res() res: Response,
  ) {
    try {
      const result =
        await this.prePromptService.applyPrePrompt(prePromptTemplate);

      if (result === null) {
        res.sendStatus(404);
      }

      return res.send(result);
    } catch (error) {
      if (error instanceof InvalidContextError) {
        return res.status(400).send({ status: 400, message: error.message });
      }
      throw error;
    }
  }
}
