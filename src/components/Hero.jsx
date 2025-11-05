import Spline from '@splinetool/react-spline'
import { ArrowRight, Briefcase } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays for depth - ensure they don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />
      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 bg-gradient-to-br from-blue-500/20 to-purple-500/10 blur-3xl" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-white/70 backdrop-blur border border-white/60 shadow-sm">
              <Briefcase className="h-3.5 w-3.5 text-blue-600" />
              2+ years experience — Fintech & Modern Web
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-neutral-900">
              I build elegant, performant web experiences
            </h1>
            <p className="mt-5 text-neutral-600 text-base sm:text-lg max-w-2xl">
              Front‑end developer crafting premium, glass‑morphic interfaces with a focus on accessibility, motion and real business impact.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 text-sm font-medium shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 backdrop-blur px-5 py-3 text-sm font-medium text-neutral-800 hover:bg-white">
                Get in touch
              </a>
            </div>
          </div>
          <div className="lg:col-span-6" />
        </div>
      </div>
    </section>
  )
}
