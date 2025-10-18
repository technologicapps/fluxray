"use client"

import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [text, setText] = useState("INITIALIZING")

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 25)

    const textSequence = ["INITIALIZING", "LOADING ASSETS", "READY"]
    let textIndex = 0
    const textInterval = setInterval(() => {
      textIndex = (textIndex + 1) % textSequence.length
      setText(textSequence[textIndex])
    }, 600)

    return () => {
      clearInterval(progressInterval)
      clearInterval(textInterval)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center space-y-8 max-w-md px-4">
        <div className="relative">
          <h1 className="text-5xl font-bold text-neon-cyan glow-cyan glitch mb-2">◆ TECHNOLOGIC ◆</h1>
          <p className="text-sm text-neon-purple font-mono">v3.14.159</p>
        </div>

        <div className="space-y-4">
          <div className="h-2 w-full bg-secondary rounded-full overflow-hidden border border-neon-cyan/30">
            <div
              className="h-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-sm font-mono">
            <span className="text-neon-cyan">{text}</span>
            <span className="text-neon-pink">{progress}%</span>
          </div>
        </div>

        <div className="flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
