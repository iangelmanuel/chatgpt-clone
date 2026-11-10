import { ChatForm } from "@/components"

export default function Home() {
  return (
    <main className="mx-auto flex h-screen max-w-screen-md items-center justify-center">
      <section className="w-full">
        <ChatForm />
      </section>
    </main>
  )
}
