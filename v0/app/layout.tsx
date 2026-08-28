import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Libre_Baskerville } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const libreBaskerville = Libre_Baskerville({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-libre-baskerville' })

export const metadata: Metadata = {
  title: 'Mercado Cooperativo Primero de Mayo | San Juan de Miraflores',
  description: 'Mercado Cooperativo Primero de Mayo: 50 años de historia, fe, tradición y compromiso con la comunidad de San Juan de Miraflores, Lima.',
  generator: 'v0.app',
  keywords: ['Mercado Primero de Mayo', 'San Juan de Miraflores', 'mercado cooperativo', 'Bodas de Oro', 'Santa Rosa de Lima'],
  openGraph: { title: 'Mercado Cooperativo Primero de Mayo · 50 años', description: 'Celebramos 50 años de historia, fe y comunidad en San Juan de Miraflores.', type: 'website', locale: 'es_PE' },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#315d3a', userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className={`${geist.variable} ${libreBaskerville.variable}`}><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
