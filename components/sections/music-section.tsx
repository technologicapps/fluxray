"use client"

import { Card } from "@/components/ui/card"
import { Play } from "lucide-react"
import Image from "next/image"

const releases = [
  {
    title: "Aureo",
    type: "Album",
    artist: "Fluxray",
    spotifyUrl: "https://open.spotify.com/album/6lJjEIqec23SygYJXuwM25?si=kNIkfpYQTJSAafk41D17Sg",
    image: "/images/aureo-album.png",
  },
  {
    title: "Eternity",
    type: "Single",
    artist: "Fluxray, Johavannah",
    spotifyUrl: "https://open.spotify.com/track/6W2gCUilL8gHyKwCCbfFBq?si=1a5aa327b78148d1",
    image: "/images/eternity-single.png",
  },
]

export function MusicSection() {
  return (
    <section id="music" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-5xl w-full space-y-12">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neon-pink to-transparent" />
          <h2 className="text-3xl font-bold text-neon-pink glow-pink">◆ MY MUSIC</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neon-pink to-transparent" />
        </div>

        <Card className="bg-card/50 backdrop-blur-md border-neon-pink/30 p-8 hover:border-neon-pink/60 transition-all duration-300 hover:border-glow-pink">
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {releases.map((release, index) => (
                <a key={index} href={release.spotifyUrl} target="_blank" rel="noopener noreferrer" className="block">
                  <Card className="bg-secondary/50 border-neon-purple/30 p-6 hover:border-neon-purple/60 transition-all duration-300 hover:scale-105 group cursor-pointer">
                    <div className="aspect-square rounded-lg mb-4 relative overflow-hidden">
                      <Image
                        src={release.image || "/placeholder.svg"}
                        alt={`${release.title} cover art`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <Play className="h-12 w-12 text-white group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                    <h4 className="font-bold text-neon-cyan mb-1">{release.title}</h4>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{release.type}</span>
                      <span className="text-neon-purple font-mono">{release.artist}</span>
                    </div>
                  </Card>
                </a>
              ))}
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-4 text-neon-cyan font-mono text-sm">
                <span>═══</span>
                <span>MORE RELEASES COMING SOON</span>
                <span>═══</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
