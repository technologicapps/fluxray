"use client"

import { useEffect, useState } from "react"
import { PersonalSection } from "@/components/sections/personal-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { MusicSection } from "@/components/sections/music-section"
import { FloatingNav } from "@/components/floating-nav"
import { LoadingScreen } from "@/components/loading-screen"
import { BackgroundEffects } from "@/components/background-effects"
import { Footer } from "@/components/footer"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [konamiCode, setKonamiCode] = useState<string[]>([])
  const [easterEggActivated, setEasterEggActivated] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const konamiSequence = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ]

    const handleKeyDown = (e: KeyboardEvent) => {
      // Allow ESC to exit easter egg mode
      if (e.key === "Escape" && easterEggActivated) {
        setEasterEggActivated(false)
        return
      }

      const newCode = [...konamiCode, e.key].slice(-10)
      setKonamiCode(newCode)

      if (newCode.join(",") === konamiSequence.join(",")) {
        setEasterEggActivated(true)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [konamiCode, easterEggActivated])

  useEffect(() => {
    if (easterEggActivated) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [easterEggActivated])

  useEffect(() => {
    if (!easterEggActivated) return

    const canvas = document.getElementById("easter-egg-canvas") as HTMLCanvasElement
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size to window size
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Load Rick Astley image
    const img = new Image()
    img.src = "/images/rick-astley.png"

    const isDrawing = false

    const handleMouseMove = (e: MouseEvent) => {
      if (!img.complete) return

      const x = e.clientX
      const y = e.clientY

      // Calculate which part of the image to draw based on mouse position
      const imgX = (x / canvas.width) * img.width
      const imgY = (y / canvas.height) * img.height

      // Draw a circular portion of the image at mouse position
      const brushSize = 50

      ctx.save()
      ctx.beginPath()
      ctx.arc(x, y, brushSize, 0, Math.PI * 2)
      ctx.clip()

      // Draw the corresponding part of the image
      ctx.drawImage(
        img,
        imgX - brushSize,
        imgY - brushSize,
        brushSize * 2,
        brushSize * 2,
        x - brushSize,
        y - brushSize,
        brushSize * 2,
        brushSize * 2,
      )

      ctx.restore()
    }

    const handleClick = () => {
      setEasterEggActivated(false)
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("click", handleClick)

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("click", handleClick)
    }
  }, [easterEggActivated])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <BackgroundEffects />
      <FloatingNav />

      {easterEggActivated && (
        <div className="fixed inset-0 z-50 bg-black">
          <canvas id="easter-egg-canvas" className="absolute inset-0 cursor-crosshair" />
          <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center pointer-events-none">
            <p className="text-neon-cyan text-xl glow-cyan animate-pulse">
              Move your mouse to reveal... Press ESC or click to exit
            </p>
          </div>
        </div>
      )}

      <div className="relative z-10">
        <PersonalSection />
        <ProjectsSection />
        <MusicSection />
        <Footer />
      </div>
    </main>
  )
}
