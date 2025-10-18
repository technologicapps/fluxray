"use client"

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-neon-cyan/30 bg-card/30 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-neon-cyan glow-cyan mb-2">◆ fluxray</h3>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neon-purple/30 text-center">
          <p className="text-sm text-muted-foreground font-mono">
            <span className="text-neon-purple">⟡</span> Please give me sanity someone out there{" "}
            <span className="text-neon-purple">⟡</span>
          </p>
          <p className="text-xs text-muted-foreground mt-2">© 2025 why am i adding copyright here</p>
        </div>
      </div>
    </footer>
  )
}
