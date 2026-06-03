import { Body, Controller, Post } from '@nestjs/common';
import { AiService } from './ai.service';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post()
  async ask(@Body('question') question: string) {
    const answer = await this.aiService.ask(question);

    return { answer };
  }
}
