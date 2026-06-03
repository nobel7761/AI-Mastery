import { Injectable } from '@nestjs/common';
import { ollama } from './ollama.client';
import { InjectModel } from '@nestjs/mongoose';
import { Chat } from 'openai/resources.js';
import { Model } from 'mongoose';

@Injectable()
export class AiService {
  constructor(
    @InjectModel(Chat.name)
    private readonly chatModel: Model<Chat>,
  ) {}
  async ask(question: string) {
    const response = await ollama.chat.completions.create({
      model: 'llama3.2',
      messages: [
        {
          role: 'user',
          content: question,
        },
      ],
    });

    const answer = response.choices[0].message.content || '';

    await this.chatModel.create({
      question,
      answer,
    });

    return answer;
  }
}
