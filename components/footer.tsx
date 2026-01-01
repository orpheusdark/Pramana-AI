"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative border-t border-primary/20 bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4 text-gradient-ai">Pramana</h3>
            <p className="text-foreground/60 text-sm">Evidence-based verification of digital truth</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#problem" className="text-foreground/60 hover:text-foreground transition-colors">
                  Problem
                </Link>
              </li>
              <li>
                <Link href="#solution" className="text-foreground/60 hover:text-foreground transition-colors">
                  Solution
                </Link>
              </li>
              <li>
                <Link href="#impact" className="text-foreground/60 hover:text-foreground transition-colors">
                  Impact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Team</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/team" className="text-foreground/60 hover:text-foreground transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/" className="text-foreground/60 hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-lg glass text-foreground/60 hover:text-foreground hover:border-primary/50 transition-colors border border-primary/20"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg glass text-foreground/60 hover:text-foreground hover:border-primary/50 transition-colors border border-primary/20"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg glass text-foreground/60 hover:text-foreground hover:border-primary/50 transition-colors border border-primary/20"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/60">
              © 2025 Team Pramana. Agentic AI for Deepfake Detection & Authenticity Verification.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
