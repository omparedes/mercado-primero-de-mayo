'use client'

import { useState } from 'react'
import { ArrowRight, CalendarDays, MapPin, Menu, Phone, Sparkles, Store, X } from 'lucide-react'

const posterUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-24%20at%205.30.05%20PM%20%281%29-wHETJLNmFTqO8lA5el2CtAEhCk9MNO.jpeg'
const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo2-z3UmQilfXEaOg61dYZYDH39dXiUuVW.png'

const gallery = [
  { src: posterUrl, alt: 'Afiche de las Bodas de Oro del Mercado Primero de Mayo', label: 'Bodas de Oro' },
  { src: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1000&q=85', alt: 'Puesto de frutas frescas en un mercado', label: 'Productos frescos' },
  { src: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1000&q=85', alt: 'Comerciante atendiendo su puesto', label: 'Nuestra gente' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="bg-primary px-5 py-2 text-center text-xs font-semibold tracking-[0.16em] text-primary-foreground">
        CELEBRAMOS 50 AÑOS DE HISTORIA, FE Y COMUNIDAD
      </div>
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Mercado Primero de Mayo, inicio">
            <img src={logoUrl} alt="Logo del Mercado Cooperativo Primero de Mayo" className="size-14 object-contain" />
            <div className="hidden leading-tight sm:block">
              <p className="font-serif text-base font-bold text-primary">Mercado Cooperativo</p>
              <p className="text-xs font-bold tracking-[0.2em] text-muted-foreground">PRIMERO DE MAYO</p>
            </div>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold md:flex" aria-label="Navegación principal">
            <a className="transition-colors hover:text-accent" href="#historia">Nuestra historia</a>
            <a className="transition-colors hover:text-accent" href="#celebracion">Celebración</a>
            <a className="transition-colors hover:text-accent" href="#galeria">Galería</a>
            <a className="transition-colors hover:text-accent" href="#ubicacion">Ubicación</a>
          </nav>
          <a href="#ubicacion" className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground shadow-sm transition-transform hover:-translate-y-0.5 md:block">Visítanos</a>
          <button aria-label="Abrir menú" className="rounded-lg p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="flex flex-col gap-4 border-t border-border px-5 py-5 text-sm font-semibold md:hidden"><a href="#historia" onClick={() => setMenuOpen(false)}>Nuestra historia</a><a href="#celebracion" onClick={() => setMenuOpen(false)}>Celebración</a><a href="#galeria" onClick={() => setMenuOpen(false)}>Galería</a><a href="#ubicacion" onClick={() => setMenuOpen(false)}>Ubicación</a></nav>}
      </header>

      <section id="inicio" className="relative isolate bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-24 lg:gap-16 lg:py-28">
          <div className="relative z-10">
            <p className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent"><Sparkles className="size-4" /> Desde 1976</p>
            <h1 className="max-w-3xl font-serif text-5xl font-bold leading-[0.98] tracking-tight md:text-7xl">Un mercado que vive en el corazón de <span className="text-accent">San Juan.</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-primary-foreground/80">Somos encuentro, trabajo cooperativo y tradición. Cada día abrimos nuestras puertas para servir a las familias de San Juan de Miraflores.</p>
            <div className="mt-9 flex flex-wrap gap-3"><a href="#celebracion" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-bold text-accent-foreground transition-transform hover:-translate-y-0.5">Conoce nuestra celebración <ArrowRight className="size-4" /></a><a href="#historia" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10">Nuestra historia</a></div>
          </div>
          <div className="relative mx-auto w-full max-w-lg md:justify-self-end"><div className="absolute -inset-3 rounded-[2rem] border border-accent/40" /><img src={posterUrl} alt="Afiche oficial: 50 años Bodas de Oro y Fiesta Patronal de Santa Rosa de Lima" className="relative aspect-[4/5] w-full rounded-2xl object-cover object-top shadow-2xl" /></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-background [clip-path:polygon(0_100%,100%_0,100%_100%)]" />
      </section>

      <section id="celebracion" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Una fecha para recordar</p><h2 className="mt-4 max-w-xl font-serif text-4xl font-bold leading-tight text-primary md:text-5xl">Bodas de Oro: 50 años compartiendo contigo</h2></div><p className="max-w-xl text-lg leading-8 text-muted-foreground">Este 2026 celebramos cinco décadas de esfuerzo, unión y servicio. Te invitamos a ser parte de nuestra fiesta central en honor a Santa Rosa de Lima, patrona de nuestro mercado.</p></div><div className="mt-12 grid gap-5 md:grid-cols-3"><div className="rounded-2xl bg-secondary p-7"><CalendarDays className="size-7 text-accent" /><p className="mt-8 text-sm font-bold uppercase tracking-widest text-muted-foreground">Fiesta central</p><p className="mt-2 font-serif text-3xl font-bold text-primary">29 y 30</p><p className="mt-1 font-semibold">de agosto de 2026</p></div><div className="rounded-2xl bg-primary p-7 text-primary-foreground"><Store className="size-7 text-accent" /><p className="mt-8 text-sm font-bold uppercase tracking-widest text-primary-foreground/65">Nuestro compromiso</p><p className="mt-2 font-serif text-3xl font-bold">Comercio justo</p><p className="mt-1 text-primary-foreground/70">Trabajo cooperativo para nuestra comunidad.</p></div><div className="rounded-2xl border border-border p-7"><MapPin className="size-7 text-accent" /><p className="mt-8 text-sm font-bold uppercase tracking-widest text-muted-foreground">Encuéntranos</p><p className="mt-2 font-serif text-2xl font-bold text-primary">Av. Vargas Machuca 306</p><p className="mt-1 font-semibold">Zona B · San Juan de Miraflores</p></div></div></section>

      <section id="historia" className="bg-secondary"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-2 lg:items-center"><div className="relative order-2 lg:order-1"><img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=85" alt="Manos de una comerciante atendiendo su negocio" className="aspect-[4/3] w-full rounded-2xl object-cover" /><div className="absolute -bottom-6 right-5 rounded-xl bg-accent px-6 py-4 text-center text-accent-foreground shadow-lg"><p className="font-serif text-4xl font-bold">50</p><p className="text-xs font-bold uppercase tracking-widest">años de historia</p></div></div><div className="order-1 lg:order-2"><p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Nuestra esencia</p><h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-primary md:text-5xl">Crecer juntos es nuestra forma de avanzar.</h2><p className="mt-6 text-lg leading-8 text-muted-foreground">El Mercado Cooperativo Primero de Mayo nació con una visión sencilla y poderosa: organizarnos para brindar un mejor servicio a nuestras familias y construir oportunidades para todos.</p><p className="mt-5 text-lg leading-8 text-muted-foreground">Hoy seguimos siendo un punto de encuentro donde la confianza se construye puesto a puesto, generación tras generación.</p><a href="#ubicacion" className="mt-8 inline-flex items-center gap-2 font-bold text-primary underline decoration-accent decoration-2 underline-offset-8">Ven a conocernos <ArrowRight className="size-4" /></a></div></div></section>

      <section id="galeria" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28"><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Momentos que nos unen</p><h2 className="mt-3 font-serif text-4xl font-bold text-primary md:text-5xl">Así se vive nuestro mercado</h2></div><button className="hidden items-center gap-2 font-semibold text-primary md:flex">Ver todas las fotos <ArrowRight className="size-4" /></button></div><div className="mt-10 grid gap-5 md:grid-cols-3">{gallery.map((item, index) => <button key={item.label} onClick={() => setSelectedImage(item.src)} className={`group relative overflow-hidden rounded-2xl text-left ${index === 0 ? 'md:row-span-2' : ''}`}><img src={item.src} alt={item.alt} className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${index === 0 ? 'aspect-[4/5] h-full' : 'aspect-[4/3]'}`} /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent px-5 pb-5 pt-14 text-primary-foreground"><span className="font-serif text-xl font-bold">{item.label}</span></div></button>)}</div></section>

      <section id="ubicacion" className="bg-primary text-primary-foreground"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-[1fr_1.1fr] lg:items-center"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Estamos cerca de ti</p><h2 className="mt-4 font-serif text-4xl font-bold md:text-5xl">Pasa por el Primero de Mayo.</h2><p className="mt-5 max-w-lg text-lg leading-8 text-primary-foreground/75">Te esperamos con productos frescos, atención cercana y la calidez de siempre.</p><div className="mt-8 flex flex-col gap-4"><div className="flex items-center gap-3"><MapPin className="size-5 text-accent" /><span>Av. Vargas Machuca 306, Zona B<br />San Juan de Miraflores, Lima</span></div><div className="flex items-center gap-3"><Phone className="size-5 text-accent" /><span>Atención a nuestros socios y vecinos</span></div></div></div><div className="flex min-h-72 flex-col items-center justify-center rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-8 text-center"><MapPin className="size-10 text-accent" /><p className="mt-4 font-serif text-2xl font-bold">Mercado Cooperativo<br />Primero de Mayo</p><p className="mt-3 text-primary-foreground/65">San Juan de Miraflores · Lima, Perú</p><a href="https://www.google.com/maps/search/Av.+Vargas+Machuca+306+San+Juan+de+Miraflores" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-bold text-accent-foreground">Cómo llegar <ArrowRight className="size-4" /></a></div></div></section>

      <footer className="bg-background"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8"><div className="flex items-center gap-3"><img src={logoUrl} alt="Logo Mercado Primero de Mayo" className="size-12 object-contain" /><div><p className="font-serif font-bold text-primary">Mercado Cooperativo Primero de Mayo</p><p className="text-xs text-muted-foreground">50 años sirviendo a nuestra comunidad</p></div></div><div className="flex items-center gap-4 text-sm text-muted-foreground"><a href="#inicio" className="hover:text-primary">Inicio</a><a href="#historia" className="hover:text-primary">Historia</a><a href="#ubicacion" className="hover:text-primary">Contacto</a><a href="#inicio" aria-label="Facebook" className="rounded-full border border-border px-2.5 py-2 text-xs font-bold hover:text-primary">f</a><a href="#inicio" aria-label="Instagram" className="rounded-full border border-border px-2.5 py-2 text-xs font-bold hover:text-primary">ig</a></div></div><div className="border-t border-border px-5 py-5 text-center text-xs text-muted-foreground">© 2026 Mercado Cooperativo Primero de Mayo Ltda. · San Juan de Miraflores, Lima</div></footer>

      {selectedImage && <div role="dialog" aria-modal="true" aria-label="Vista ampliada de la imagen" className="fixed inset-0 z-50 flex items-center justify-center bg-primary/90 p-5" onClick={() => setSelectedImage(null)}><button aria-label="Cerrar imagen" className="absolute right-5 top-5 rounded-full bg-primary-foreground/10 p-3 text-primary-foreground"><X /></button><img src={selectedImage} alt="Vista ampliada" className="max-h-[88vh] max-w-full rounded-xl object-contain" onClick={(e) => e.stopPropagation()} /></div>}
    </main>
  )
}
