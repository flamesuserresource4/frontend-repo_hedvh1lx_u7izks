import { Github, Linkedin, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">
              Let’s build something great
            </h2>
            <p className="mt-3 text-neutral-600 max-w-xl">
              I’m available for freelance and full‑time opportunities. If you have a project in mind,
              let’s connect.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 text-sm font-medium shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all"
              >
                <Mail className="h-4 w-4" /> Email Me
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 backdrop-blur px-5 py-3 text-sm font-medium text-neutral-800 hover:bg-white"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 backdrop-blur px-5 py-3 text-sm font-medium text-neutral-800 hover:bg-white"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl border border-white/60 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl p-6 shadow-xl">
              <form
                className="grid grid-cols-1 gap-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  const form = e.currentTarget
                  const name = form.name.value
                  const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`)
                  const body = encodeURIComponent(form.message.value)
                  window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`
                }}
              >
                <div>
                  <label className="text-sm text-neutral-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="mt-1 w-full rounded-xl border border-neutral-200 bg-white/80 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="text-sm text-neutral-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-1 w-full rounded-xl border border-neutral-200 bg-white/80 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="text-sm text-neutral-700">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="mt-1 w-full rounded-xl border border-neutral-200 bg-white/80 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 text-sm font-medium shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="pointer-events-none absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
