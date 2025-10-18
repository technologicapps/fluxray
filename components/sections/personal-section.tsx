"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

export function PersonalSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const stats = [
    { label: "COKE LEVEL", value: "99%", color: "text-neon-cyan" },
    { label: "SLEEP SCHEDULE", value: "ERROR", color: "text-neon-pink" },
    { label: "SOCIAL BATTERY", value: "0%", color: "text-neon-purple" },
  ]

  return (
    <section
      id="personal"
      className={`min-h-screen flex items-center justify-center px-4 py-20 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-4xl w-full space-y-12">
        <div className="text-center space-y-6">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-3 text-sm font-mono text-neon-purple mb-2">
              <span>◆</span>
              <span className="text-xs text-muted-foreground">CEO & FOUNDER OF TECHNOLOGIC</span>
              <span>◆</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-neon-cyan glitch">fluxray</h1>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
            <h2 className="text-2xl font-bold text-neon-pink glow-pink">◆ PERSONAL</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
          </div>

          <Card className="bg-card/50 backdrop-blur-md border-neon-cyan/30 p-8 hover:border-neon-cyan/60 transition-all duration-300 hover:border-glow-cyan">
            <h3 className="text-xl font-bold text-neon-purple mb-6 flex items-center gap-2">
              <span className="text-2xl">◥</span>
              ABOUT ME
            </h3>
            <p className="text-foreground/90 leading-relaxed text-lg">
              I have no more sanity left. No sleep schedule, no social battery, and somehow am the founder and ceo of
              the company <span className="text-neon-cyan">Technologic</span>. Oh yeah. I also make music sometimes
            </p>
          </Card>

          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-4 max-w-3xl">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-md border-neon-purple/30 p-6 text-center hover:border-neon-purple/60 transition-all duration-300 hover:border-glow-purple"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-sm font-mono text-muted-foreground mb-2">{stat.label}</div>
                  <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="text-neon-cyan text-2xl animate-bounce">◣ ◢</div>
        </div>
      </div>
    </section>
  )
}
