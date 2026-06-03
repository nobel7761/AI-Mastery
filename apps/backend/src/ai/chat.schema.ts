import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Chat {
  @Prop({
    required: true,
  })
  question: string;

  @Prop({
    required: true,
  })
  answer: string;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
