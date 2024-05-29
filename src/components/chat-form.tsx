'use client'

import { useChat } from 'ai/react'

export function ChatForm() {
  const { input, handleInputChange, handleSubmit, isLoading, messages } =
    useChat()
  console.log(messages)
  return (
    <form onSubmit={handleSubmit}>
      <label className="flex flex-col">
        <textarea
          onChange={handleInputChange}
          placeholder="Escribe un mensaje para empezar a interactuar con el chatbot"
          className="rounded p-2 bg-transparent text-white border border-slate-900 w-full resize-none focus:outline-none focus:border-slate-800"
        ></textarea>
      </label>

      <div className="flex justify-end items-center mt-3">
        <button
          disabled={isLoading || !input}
          className="bg-indigo-600 hover:bg-indigo-400 px-4 py-2 rounded hover:scale-105 transition-all ease-in-out cursor-pointer disabled:opacity-40"
        >
          Enviar
        </button>
      </div>
    </form>
  )
}
