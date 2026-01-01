"use client"
import { Github, Linkedin } from "lucide-react"

interface TeamMemberProps {
  member: {
    name: string
    role: string
    bio: string
    image: string
    skills: string[]
    github?: string
    linkedin?: string
  }
  delay: number
}

export default function TeamMember({ member, delay }: TeamMemberProps) {
  return (
    <div className="group animate-slide-up" style={{ animationDelay: `${delay}s` }}>
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
        <div className="relative rounded-2xl overflow-hidden border border-primary/30 group-hover:border-accent/50 transition-all">
          <img
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-100 mx-0 my-0 px-0 border-0 leading-7 font-normal border-t-0 border-b-0"></div>
        </div>
      </div>

      <div className="glass rounded-xl p-6 border border-primary/30 group-hover:border-accent/50 transition-all">
        <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
        <p className="text-primary font-semibold mb-3">{member.role}</p>
        <p className="text-foreground/70 text-sm leading-relaxed mb-4">{member.bio}</p>

        {/* Skills */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {member.skills.map((skill, idx) => (
              <span
                key={idx}
                className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 border border-primary/30 text-foreground/80"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3 pt-4 border-t border-primary/20">
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-foreground/70 hover:text-foreground transition-all border border-primary/20"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-foreground/70 hover:text-foreground transition-all border border-primary/20"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
