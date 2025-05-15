"use client"

import type React from "react"

import { useState } from "react"
import { Github, Linkedin, Mail, Globe } from "lucide-react"
import Link from "next/link"

export default function DeveloperProfile() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-20 bg-[#0f111a]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-4xl mx-auto">
          <div className="relative">
            <div
              className={`absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 via-purple-500 to-blue-500 blur-md transition-all duration-500 ${isHovered ? "opacity-100 scale-105" : "opacity-80"}`}
            ></div>
            <div
              className="relative w-64 h-64 rounded-full overflow-hidden border-2 border-white/10"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src="https://i.postimg.cc/sfNKHrM2/gvk-p-dp.jpg"
                alt="Ganta Venkata Kousik"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-white mb-2">Ganta Venkata Kousik</h2>
            <p className="text-[#10b981] text-lg font-medium mb-4">
              Software Developer | Entrepreneur
            </p>
            <p className="text-gray-300 mb-6 max-w-xl">
              A versatile professional with expertise in full-stack development, UI/UX design, DevOps, and AI-driven
              automation. Experienced in delivering high-performance digital solutions across various domains, focusing
              on scalability, efficiency, and user experience.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <SocialButton
                href="https://linktr.ee/GantaVenkataKousik"
                icon={<Globe />}
                label="Linktree"
                primary={true}
              />
              <SocialButton
                href="https://www.linkedin.com/in/gantavenkatakousik/"
                icon={<Linkedin />}
                label="LinkedIn"
                primary={true}
              />
              <SocialButton
                href="https://github.com/GantaVenkataKousik"
                icon={<Github />}
                label="GitHub"
                primary={true}
              />
              <SocialButton
                href="mailto:venkatakousikcse01@gmail.com"
                icon={<Mail />}
                label="venkatakousikcse01@gmail.com"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialButton({
  href,
  icon,
  label,
  primary = false,
}: {
  href: string
  icon: React.ReactNode
  label: string
  primary?: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
        primary
          ? isHovered
            ? "bg-gradient-to-r from-teal-600 to-emerald-600 text-white transform scale-105"
            : "bg-gradient-to-r from-teal-500 to-emerald-500 text-white"
          : isHovered
            ? "bg-white/15 transform scale-105"
            : "bg-white/10"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="text-white">{icon}</span>
      <span className="text-white">{label}</span>
    </Link>
  )
}
