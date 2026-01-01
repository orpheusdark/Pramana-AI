"use client"

import { AlertTriangle, Wifi, Clock, User } from "lucide-react"

export default function ProblemSection() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Deepfake Threats",
      description: "Deepfake audio and video threaten field operations and evidence integrity",
    },
    {
      icon: Wifi,
      title: "No Connectivity",
      description: "Internet access is unreliable or unavailable in real environments",
    },
    {
      icon: Clock,
      title: "Slow Systems",
      description: "Cloud processing introduces delays when speed matters most",
    },
    {
      icon: User,
      title: "Manual Labor",
      description: "Manual verification is slow and prone to human error",
    },
  ]

  return (
    <section id="problem" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The Problem</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Detection must be instant, offline, and actionable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <div
                key={index}
                className="group glass rounded-xl p-6 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
                    <p className="text-foreground/60">{problem.description}</p>
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
