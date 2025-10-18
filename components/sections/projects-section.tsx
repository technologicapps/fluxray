"use client"

import { Card } from "@/components/ui/card"

const projects = [
  {
    title: "Lyrix Lab",
    tagline: "Lyric video maker right in your browser",
    description:
      "Create professional lyric videos without leaving your browser. No downloads, no complicated software - just pure creative freedom.",
    tech: ["React", "TypeScript", "Canvas API", "Web Audio"],
    gradient: "from-neon-cyan to-neon-blue",
  },
  {
    title: "Aureo",
    tagline: "A fork of Firefox, reimagined",
    description: "Firefox, but better. Custom modifications for enhanced privacy, performance, and user experience.",
    tech: ["C++", "JavaScript", "XUL", "Rust"],
    gradient: "from-neon-purple to-neon-pink",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full space-y-12">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent" />
          <h2 className="text-3xl font-bold text-neon-cyan glow-cyan">◆ MY PROJECTS</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group bg-card/50 backdrop-blur-md border-neon-cyan/30 p-8 hover:border-neon-cyan/60 transition-all duration-500 hover:scale-105 hover:border-glow-cyan overflow-hidden relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div className="relative z-10 space-y-6 flex flex-col h-full">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl text-neon-pink">◥</span>
                    <h3 className="text-2xl font-bold text-neon-cyan group-hover:glow-cyan transition-all duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-neon-purple font-mono text-sm">{project.tagline}</p>
                </div>

                <p className="text-foreground/80 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-mono bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="w-full py-3 text-center border border-neon-purple/50 rounded-lg bg-neon-purple/5 mt-auto">
                  <span className="text-neon-purple font-mono text-sm">⟡ IN DEVELOPMENT ⟡</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4 text-neon-purple font-mono text-sm">
            <span>━━━</span>
            <span>MORE PROJECTS COMING SOON</span>
            <span>━━━</span>
          </div>
        </div>
      </div>
    </section>
  )
}
