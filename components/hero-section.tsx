"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
              <p className="text-sm text-primary font-medium">Edge-Based Agentic AI</p>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient-ai">Pramana</span>
            </h1>

            <p className="text-xl text-foreground/70 mb-4 font-semibold">
              Verifying audio and video authenticity in real time
            </p>

            <p className="text-lg text-foreground/60 mb-8 leading-relaxed">
              Detection must be instant, offline, and actionable. Directly on field devices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#solution"
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/50 transition-all flex items-center justify-center gap-2 group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/team"
                className="px-8 py-4 rounded-lg glass text-foreground font-medium hover:bg-white/10 transition-all border border-primary/30 flex items-center justify-center"
              >
                Meet Our Team
              </Link>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative glass rounded-2xl p-8 border border-primary/30">
                <div className="space-y-4">
                  <div className="h-32 bg-gradient-ai rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gradient-ai mb-2">✓</div>
                      <p className="text-foreground/70 text-sm">Verified</p>
                    </div>
                  </div>
                  <div className="h-16 bg-primary/10 rounded-lg flex items-center px-4">
                    <div className="flex items-center gap-3 w-full">
                      <div className="w-3 h-3 rounded-full bg-accent animate-pulse"></div>
                      <p className="text-foreground/60 text-sm">Real-time analysis</p>
                    </div>
                  </div>
                  <div className="h-16 bg-primary/5 rounded-lg flex items-center px-4">
                    <div className="flex items-center gap-3 w-full">
                      <div
                        className="w-3 h-3 rounded-full bg-accent animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                      <p className="text-foreground/60 text-sm">Offline detection</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
