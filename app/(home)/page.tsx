"use client"
import Hero from "@/components/sections/hero"
import { SparklesCore } from "@/components/utility/sparkles"
import Features from "@/components/sections/features"
import Stats from "@/components/stats"
import Testimonials from "@/components/sections/testimonials"
import CTA from "@/components/cta"
import { Providers } from "./providers"
import Commands from "@/components/sections/commands"
import { FloatingClock } from "@/components/utility/floating-clock"
import FAQ from "@/components/sections/faq"

export default function Home() {
  return (
    <Providers>
      <main className="min-h-screen bg-black antialiased bg-grid-white/[0.02] relative">
        {/* Ambient background with moving particles */}
        <div className="h-screen w-full absolute inset-0 z-0">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={600}
            className="w-full h-full"
            particleColor="#FFFFFF"
            particleHeight={800}
          />
        </div>

        <div className="relative z-10">
          <Hero />
          <Features />
          <Commands />
          <Stats />
          <Testimonials />
          <FAQ />
          <CTA />
        </div>
        <div className="relative h-[400px] overflow-hidden">
          <FloatingClock count={8} />
        </div>
      </main>
    </Providers>
  )
}

