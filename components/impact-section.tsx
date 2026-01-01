"use client"

import { Eye, TrendingUp, Shield, Lock } from "lucide-react"

export default function ImpactSection() {
  const impacts = [
    {
      icon: Eye,
      title: "Trust in Media",
      description: "Improves trust in field-captured media authenticity",
    },
    {
      icon: TrendingUp,
      title: "Combat Misinformation",
      description: "Reduces misinformation at the source",
    },
    {
      icon: Shield,
      title: "Safer Decisions",
      description: "Enables faster and safer operational decisions",
    },
    {
      icon: Lock,
      title: "Evidence Integrity",
      description: "Strengthens digital evidence integrity for justice",
    },
  ]

  return (
    <section id="impact" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why It Matters</h2>
          <p className="text-lg text-foreground/60">Transforming digital trust in field operations</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {impacts.map((impact, index) => {
            const Icon = impact.icon
            return (
              <div
                key={index}
                className="group glass rounded-xl p-6 border border-primary/20 hover:border-accent/50 transition-all animate-slide-up hover:shadow-lg hover:shadow-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-accent to-secondary flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{impact.title}</h3>
                    <p className="text-foreground/60">{impact.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
