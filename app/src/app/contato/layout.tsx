import '../globals.css'
import { Inter } from 'next/font/google'
import Menu from '@/components/Menu'

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
        <nav>
            Menu do Contato
        </nav>
        {children}
    </section>
  )
}
