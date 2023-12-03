import { Configuration, OpenAIApi } from 'openai-edge'
import { env } from "@/env.mjs";
import { NextRequest } from 'next/server';
import { type ChatCompletionRequestMessage } from 'openai-edge';

export const runtime = 'edge'

const configuration = new Configuration({
  apiKey: env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

export async function GET(req: NextRequest) {
  const messages: (ChatCompletionRequestMessage)[] = [{
    content: 'Generate a random fact about climate change. Just reply with the fact, for other word at start or end, just the fact',
    role: 'user',
  }]

  const res = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages,
    temperature: 1.6,
  })

  const response = await res.json()

  try {
    const fact = response.choices[0].message.content
    return new Response(fact)
  } catch (error) {
    console.log(error)
    return new Response('Sorry, I could not generate a fact about climate change. Please try again.')
  }
}