"use client"

import { ChevronRight } from "lucide-react"

export default function SolutionSection() {
  const steps = [
    { label: "Media Input", icon: "📹" },
    { label: "Feature Analysis", icon: "🔍" },
    { label: "Edge AI Models", icon: "🧠" },
    { label: "Agent Decision", icon: "⚡" },
    { label: "Alert / Assist", icon: "✓" },
  ]

  return (
    <section id="solution" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How Pramana Works</h2>
          <p className="text-lg text-foreground/60">A complete edge-based detection pipeline</p>
        </div>

        <div className="relative mb-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="glass rounded-lg p-6 text-center border border-primary/30 hover:border-accent/50 transition-all group">
                  <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform">{step.icon}</div>
                  <p className="text-sm font-medium">{step.label}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                    <ChevronRight className="w-6 h-6 text-primary/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-xl p-8 border border-primary/20 animate-slide-up">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2 text-accent">✓ Works Fully Offline</h3>
              <p className="text-foreground/60 text-sm">No cloud dependency, complete privacy</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-accent">✓ Runs on Any Device</h3>
              <p className="text-foreground/60 text-sm">Smartphones, body-cams, handheld devices</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-accent">✓ Real-time Alerts</h3>
              <p className="text-foreground/60 text-sm">Sub-second detection latency</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
