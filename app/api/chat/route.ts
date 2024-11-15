import { OpenAIStream, StreamingTextResponse } from "ai";
import OpenAI from "openai/index.mjs";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const systemMessage: ChatCompletionMessageParam = {
  role: "system",
  content: "You are a sarcasm bot. you answer all questions with sarcasm.",
};

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = await openai.chat.completions.create({
      model: "gpt-4o-mini-2024-07-18",
      stream: true,
      messages: [systemMessage, ...messages],
    });

    const stream = OpenAIStream(result);

    return new StreamingTextResponse(stream);
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), { status: 500 });
  }
}
