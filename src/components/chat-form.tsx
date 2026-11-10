"use client"

import { useState } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"

export function ChatForm() {
  const [input, setInput] = useState("")
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" })
  })
  const isLoading = status === "submitted" || status === "streaming"
  console.log(messages)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!input) return
    sendMessage({ text: input })
    setInput("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="flex flex-col">
        <textarea
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Escribe un mensaje para empezar a interactuar con el chatbot"
          className="w-full resize-none rounded border border-slate-900 bg-transparent p-2 text-white focus:border-slate-800 focus:outline-none"
        ></textarea>
      </label>

      <div className="mt-3 flex items-center justify-end">
        <button
          disabled={isLoading || !input}
          className="cursor-pointer rounded bg-indigo-600 px-4 py-2 transition-all ease-in-out hover:scale-105 hover:bg-indigo-400 disabled:opacity-40"
        >
          Enviar
        </button>
      </div>
    </form>
  )
}
