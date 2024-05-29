import { ChatForm } from '@/components'

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-md flex justify-center items-center h-screen">
      <section className="w-full">
        <ChatForm />
      </section>
    </main>
  )
}
