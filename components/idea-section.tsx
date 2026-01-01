"use client"

import { Brain } from "lucide-react"

export default function IdeaSection() {
  return (
    <section id="idea" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-2xl p-8 md:p-12 border border-primary/30 animate-slide-up">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent flex-shrink-0">
              <Brain className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Idea</h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Pramana is an edge-based agentic AI system that verifies media authenticity directly on the device. It
                does not act as a passive classifier. It functions as an autonomous agent that analyses, decides, and
                assists in real time.
              </p>

              <div className="inline-block px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 mb-6">
                <p className="text-sm text-primary italic">
                  <span className="font-semibold">Pramana</span> means "valid knowledge or proof" in Indian philosophy
                </p>
              </div>

              <p className="text-foreground/70">
                By combining audio and video signals with intelligent reasoning, Pramana autonomously determines the
                next action without relying on cloud infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
