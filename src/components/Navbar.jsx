import { Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="backdrop-blur-xl bg-white/60 dark:bg-neutral-900/60 border border-white/50 dark:border-white/10 shadow-lg rounded-2xl">
          <div className="flex items-center justify-between px-6 py-3">
            <a href="#home" className="text-xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Your Name
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#projects" className="text-sm text-neutral-700 dark:text-neutral-200 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#contact" className="text-sm text-neutral-700 dark:text-neutral-200 hover:text-blue-600 transition-colors">Contact</a>
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-full px-4 py-2 transition-colors">
                <Mail className="h-4 w-4" /> Hire Me
              </a>
            </nav>
            <div className="md:hidden flex items-center gap-3">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/70 dark:bg-white/10 hover:bg-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/70 dark:bg-white/10 hover:bg-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
