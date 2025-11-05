import { ExternalLink, Code } from 'lucide-react'

const projects = [
  {
    title: 'NeoPay Dashboard',
    description:
      'Glass-morphic analytics dashboard for a fintech startup. Real-time charts, accounts, and card management.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'Card Vault UI Kit',
    description:
      'Premium component library themed around digital cards. Focus on accessibility and delightful motion.',
    tags: ['Design System', 'Accessibility', 'Animations'],
    link: '#',
  },
  {
    title: 'Payments Onboarding',
    description:
      'Streamlined KYC onboarding with step transitions, validation, and API integration.',
    tags: ['UX', 'Forms', 'API'],
    link: '#',
  },
]

function ProjectCard({ title, description, tags, link }) {
  return (
    <div className="group relative rounded-2xl border border-white/60 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl p-6 shadow-xl overflow-hidden">
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/10 blur-3xl" />
      <div className="relative">
        <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 text-white shadow-md">
          <Code className="h-5 w-5" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-neutral-900">{title}</h3>
        <p className="mt-2 text-sm text-neutral-600">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white border border-neutral-200 text-neutral-700">
              {t}
            </span>
          ))}
        </div>
        <a
          href={link}
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-800"
        >
          View Case Study <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Selected Work</h2>
            <p className="mt-2 text-neutral-600 max-w-2xl">
              A few highlights from the past two years. Clean design, strong UX, and performant, accessible
              code.
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
