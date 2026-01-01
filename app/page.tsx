"use client"
import HeroSection from "@/components/hero-section"
import ProblemSection from "@/components/problem-section"
import IdeaSection from "@/components/idea-section"
import SolutionSection from "@/components/solution-section"
import AgenticSection from "@/components/agentic-section"
import PrototypeSection from "@/components/prototype-section"
import FeasibilitySection from "@/components/feasibility-section"
import ImpactSection from "@/components/impact-section"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="relative">
        <HeroSection />
        <ProblemSection />
        <IdeaSection />
        <SolutionSection />
        <AgenticSection />
        <PrototypeSection />
        <FeasibilitySection />
        <ImpactSection />
      </main>
      <Footer />
    </div>
  )
}
