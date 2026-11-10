import { NextResponse } from "next/server"
import { openai } from "@ai-sdk/openai"
import { type UIMessage, convertToModelMessages, streamText } from "ai"

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  try {
    const result = streamText({
      model: openai("gpt-3.5-turbo"),
      messages: await convertToModelMessages(messages)
    })

    return result.toUIMessageStreamResponse()
  } catch (error) {
    console.log(error)
    return NextResponse.json("Internal server error", { status: 500 })
  }
}
