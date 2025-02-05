import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import { SparklesCore } from "@/components/sparkles"
import Features from "@/components/features"
import Stats from "@/components/stats"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import { Suspense } from "react"
import Loading from "@/components/loading"
import { Providers } from "./providers"

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
            particleDensity={400}
            className="w-full h-full"
            particleColor="#FFFFFF"
            particleHeight={800}
          />
        </div>

        <div className="relative z-10">
        <Suspense fallback={<Loading />}>
            <Navbar />
          </Suspense>
        <Suspense fallback={<Loading />}>
            <Hero />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <Features />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <Stats />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <Testimonials />
          </Suspense>
          <CTA />
          <Footer />
        </div>
      </main>
    </Providers>
  )
}

