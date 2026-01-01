"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import TeamMember from "@/components/team-member"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Nirant Chavda",
      role: "AI/ML Engineer",
      bio: "Passionate about building agentic AI systems and edge computing solutions for real-world problems.",
      image: "/images/nirant-chavda.jpg",
      skills: ["Machine Learning", "Edge AI", "Python", "Deep Learning"],
      github: "https://github.com/orpheusdark",
      linkedin: "https://www.linkedin.com/in/orpheusdark",
    },
    {
      name: "Rhythm Chavda",
      role: "Full-Stack Developer",
      bio: "Dedicated to creating seamless user experiences and building scalable systems for next-generation applications.",
      image: "/images/whatsapp-20image-202025-01-07-20at-208.jpg",
      skills: ["React", "Node.js", "System Design", "DevOps"],
      github: "https://github.com/nyx73",
      linkedin: "https://www.linkedin.com/in/rhythmchavda/",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-gradient-ai">Meet Our Team</span>
            </h1>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Innovators building the future of digital truth verification
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} member={member} delay={index * 0.2} />
            ))}
          </div>

          {/* Team Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-20">
            <div className="glass rounded-xl p-8 text-center border border-primary/20 animate-slide-up">
              <p className="text-4xl font-bold text-gradient-ai mb-2">2</p>
              <p className="text-foreground/70">Core Team Members</p>
            </div>
            <div
              className="glass rounded-xl p-8 text-center border border-primary/20 animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <p className="text-4xl font-bold text-gradient-ai mb-2">100%</p>
              <p className="text-foreground/70">Committed to Innovation</p>
            </div>
            <div
              className="glass rounded-xl p-8 text-center border border-primary/20 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <p className="text-4xl font-bold text-gradient-ai mb-2">∞</p>
              <p className="text-foreground/70">Passion for Impact</p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mt-20 glass rounded-2xl p-12 border border-primary/30 animate-slide-up">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-foreground/80 text-center leading-relaxed mb-6">
              We are dedicated to building cutting-edge AI solutions that verify digital truth at the edge. By combining
              advanced machine learning with practical engineering, we aim to create systems that are faster, more
              secure, and more trustworthy than ever before.
            </p>
            <p className="text-lg text-foreground/80 text-center leading-relaxed">
              Pramana represents our commitment to making authenticity verification accessible, offline, and empowering
              field operations worldwide.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
