"use client"

import { Zap } from "lucide-react"

export default function FeasibilitySection() {
  const stats = [
    {
      icon: Zap,
      label: "Sub-second Latency",
      value: "< 1s",
    },
  ]

  const tools = [
    {
      name: "Python",
      description: "Core development",
      icon: "🐍",
    },
    {
      name: "PyTorch / TensorFlow Lite",
      description: "Deepfake detection models",
      icon: "🧠",
    },
    {
      name: "OpenCV",
      description: "Video and image processing",
      icon: "📹",
    },
    {
      name: "ONNX Runtime",
      description: "Optimized edge inference",
      icon: "⚡",
    },
    {
      name: "Rule-Based Agent Logic",
      description: "Autonomous decision-making",
      icon: "🤖",
    },
    {
      name: "Android / Desktop Environment",
      description: "Edge deploy",
      icon: "📱",
    },
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Practical & Buildable</h2>
          <p className="text-lg text-foreground/60">Built with open-source tools and optimized models</p>
        </div>

        <div className="grid md:grid-cols-1 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="glass rounded-xl p-8 border border-primary/30 text-center animate-slide-up hover:border-accent/50 transition-all group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-lg bg-gradient-to-br from-primary to-accent group-hover:shadow-lg group-hover:shadow-primary/50 transition-all">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <p className="text-foreground/70 text-sm mb-2">{stat.label}</p>
                <p className="text-3xl font-bold text-gradient-ai">{stat.value}</p>
              </div>
            )
          })}
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Open Source Tools</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 border border-primary/30 hover:border-accent/50 transition-all animate-slide-up group"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{tool.icon}</div>
                <h4 className="font-semibold text-lg mb-2">{tool.name}</h4>
                <p className="text-foreground/60 text-sm">{tool.description}</p>
                <div className="mt-4 h-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full group-hover:from-primary/50 group-hover:to-accent/50 transition-all"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-xl p-8 border border-primary/20 animate-slide-up">
          <h3 className="font-semibold mb-4">Key Advantages</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
              <p className="text-foreground/70">Lightweight models optimized for edge</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
              <p className="text-foreground/70">Low power consumption</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
              <p className="text-foreground/70">Built using open-source tools</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
              <p className="text-foreground/70">Production-ready implementation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
