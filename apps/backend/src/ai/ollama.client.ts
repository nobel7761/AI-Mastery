import OpenAI from 'openai';

export const ollama = new OpenAI({
  baseURL: 'http://127.0.0.1:11434/v1',
  apiKey: 'ollama',
});
