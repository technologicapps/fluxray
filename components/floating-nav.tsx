"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const navItems = [
  { id: "personal", label: "PERSONAL", icon: "◆" },
  { id: "projects", label: "PROJECTS", icon: "◥" },
  { id: "music", label: "MUSIC", icon: "⟡" },
]

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("personal")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)

    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + window.innerHeight / 3

      sections.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(navItems[index].id)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-8 right-8 z-40 transition-all duration-500 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
      }`}
    >
      <div className="flex flex-col gap-2 bg-card/80 backdrop-blur-md border border-neon-cyan/30 rounded-lg p-2">
        {navItems.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection(item.id)}
            className={`justify-start gap-2 font-mono transition-all duration-300 ${
              activeSection === item.id
                ? "bg-neon-cyan/20 text-neon-cyan border-glow-cyan"
                : "text-muted-foreground hover:text-neon-cyan hover:bg-neon-cyan/10"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="hidden md:inline text-xs">{item.label}</span>
          </Button>
        ))}
      </div>
    </nav>
  )
}
