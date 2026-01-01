"use client"

export default function PrototypeSection() {
  const features = [
    "Offline deepfake detection",
    "Edge inference on real devices",
    "Agent-based decision logic",
    "Real-time alerts",
  ]

  return (
    <section id="prototype" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-2xl p-8 md:p-12 border border-primary/30 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Prototype Scope</h2>

          <div className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <p className="text-foreground/80">{feature}</p>
              </div>
            ))}
          </div>

          <p className="text-foreground/70 text-sm italic border-l-2 border-primary/30 pl-4">
            The prototype focuses on feasibility and real-world constraints, not cloud infrastructure.
          </p>
        </div>
      </div>
    </section>
  )
}
