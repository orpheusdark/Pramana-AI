"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Zap } from "lucide-react"

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 w-full z-50 glass-dark border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-lg group-hover:shadow-lg group-hover:shadow-primary/50 transition-all">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl text-gradient-ai">Pramana</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/#problem" className="text-foreground/70 hover:text-foreground transition-colors">
              Problem
            </Link>
            <Link href="/#idea" className="text-foreground/70 hover:text-foreground transition-colors">
              Idea
            </Link>
            <Link href="/#solution" className="text-foreground/70 hover:text-foreground transition-colors">
              Solution
            </Link>
            <Link
              href="/team"
              className={`transition-colors ${pathname === "/team" ? "text-primary" : "text-foreground/70 hover:text-foreground"}`}
            >
              Team
            </Link>
          </div>

          <Link
            href="/team"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 text-sm"
          >
            Meet Team
          </Link>
        </div>
      </div>
    </nav>
  )
}
