"use client"

import { CheckCircle, AlertCircle, HelpCircle } from "lucide-react"

export default function AgenticSection() {
  const decisions = [
    {
      icon: CheckCircle,
      label: "High Confidence Fake",
      action: "Immediate Alert",
      color: "from-red-500 to-rose-500",
    },
    {
      icon: AlertCircle,
      label: "Low Confidence",
      action: "Secondary Verification",
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: HelpCircle,
      label: "Borderline Result",
      action: "Manual Review Flagged",
      color: "from-blue-500 to-cyan-500",
    },
  ]

  return (
    <section id="agentic" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Makes It Agentic</h2>
          <p className="text-lg text-foreground/60">Intelligent decision-making powered by reasoning</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {decisions.map((decision, index) => {
            const Icon = decision.icon
            return (
              <div
                key={index}
                className="group glass rounded-xl p-6 border border-primary/20 hover:border-primary/50 transition-all animate-slide-up hover:shadow-lg hover:shadow-primary/20"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`p-3 rounded-lg bg-gradient-to-br ${decision.color} mb-4 w-fit`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{decision.label}</h3>
                <p className="text-foreground/60 text-sm mb-4">{decision.action}</p>
                <div className="h-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full group-hover:from-primary/50 group-hover:to-accent/50 transition-all"></div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 glass rounded-xl p-8 border border-primary/20 animate-slide-up">
          <h3 className="text-xl font-semibold mb-4">Combines Multiple Intelligence Signals</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
              <p className="text-foreground/70">Audio confidence signals analysis</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
              <p className="text-foreground/70">Video authenticity detection</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
              <p className="text-foreground/70">Rule-based reasoning engine</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
              <p className="text-foreground/70">Autonomous decision making</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
