import { NextResponse, type NextRequest } from 'next/server'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { openai } from '@/lib'

export async function POST(req: NextRequest) {
  const { messages } = await req.json()

  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages,
    })

    const stream = OpenAIStream(response)
    return new StreamingTextResponse(stream)
  } catch (error) {
    console.log(error)
    NextResponse.json('Internal server error', { status: 500 })
  }
}
