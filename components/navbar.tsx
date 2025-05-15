"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import Logo from "@/components/logo"

interface NavbarProps {
  activeItem?: string
}

export default function Navbar({ activeItem }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()
  const pathname = usePathname()

  // Determine active path based on pathname or prop
  const getActivePath = () => {
    if (activeItem) return activeItem

    if (pathname === "/") return "home"
    if (pathname.includes("/categories")) return "categories"
    if (pathname.includes("/trending")) return "trending"
    if (pathname.includes("/new")) return "new"
    if (pathname.includes("/about")) return "about"
    if (pathname.includes("/submit")) return "submit"

    return ""
  }

  const activePath = getActivePath()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const isActive = (path: string) => {
    return activePath === path
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/30 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Logo size="md" />
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            <div className="relative group px-3 py-2">
              <Link
                href="/categories"
                className={`flex items-center font-medium ${
                  isActive("categories") ? "text-emerald-400" : "text-gray-300 hover:text-white"
                }`}
              >
                Categories
                <ChevronDown className="ml-1 h-4 w-4 opacity-70" />
              </Link>
              <div className="absolute left-0 mt-2 w-48 rounded-md glass-card overflow-hidden transform opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 origin-top-left z-50">
                <div className="py-1">
                  <Link
                    href="/categories/ai-assistants"
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5"
                  >
                    AI Assistants
                  </Link>
                  <Link
                    href="/categories/video-generation"
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5"
                  >
                    Video Generation
                  </Link>
                  <Link
                    href="/categories/image-generation"
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5"
                  >
                    Image Generation
                  </Link>
                  <Link
                    href="/categories/writing-grammar"
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5"
                  >
                    Writing & Grammar
                  </Link>
                  <Link
                    href="/categories/coding-development"
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5"
                  >
                    Coding & Development
                  </Link>
                  <Link
                    href="/categories/voice-audio"
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5"
                  >
                    Voice & Audio
                  </Link>
                  <Link
                    href="/categories/marketing"
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5"
                  >
                    Marketing
                  </Link>
                  <Link
                    href="/categories/productivity"
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5"
                  >
                    Productivity
                  </Link>
                  <Link href="/categories" className="block px-4 py-2 text-sm text-gradient">
                    View All
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/trending"
              className={`px-3 py-2 font-medium ${
                isActive("trending") ? "text-emerald-400" : "text-gray-300 hover:text-white"
              }`}
            >
              Trending
            </Link>
            <Link
              href="/new"
              className={`px-3 py-2 font-medium ${
                isActive("new") ? "text-emerald-400" : "text-gray-300 hover:text-white"
              }`}
            >
              New
            </Link>
            <Link
              href="/about"
              className={`px-3 py-2 font-medium ${
                isActive("about") ? "text-emerald-400" : "text-gray-300 hover:text-white"
              }`}
            >
              About
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search AI tools..."
                className="pl-10 w-64 bg-white/5 border-white/10 focus:border-neon-green/50 rounded-full text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            <Link href="/submit">
              <Button
                className={`${
                  isActive("submit")
                    ? "bg-emerald-600 hover:bg-emerald-700"
                    : "bg-gradient-cta hover:bg-gradient-cta btn-glow"
                } text-white rounded-full px-6`}
              >
                Submit Tool
              </Button>
            </Link>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden glass-card border-t border-white/5">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search AI tools..."
                className="pl-10 w-full bg-white/5 border-white/10 focus:border-neon-green/50 rounded-full text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            <div className="space-y-1 pt-2">
              <Link
                href="/categories"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  isActive("categories")
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                Categories
              </Link>
              <Link
                href="/trending"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  isActive("trending")
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                Trending
              </Link>
              <Link
                href="/new"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  isActive("new")
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                New
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  isActive("about")
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                About
              </Link>
            </div>
            <div className="pt-4">
              <Link href="/submit" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-gradient-cta hover:bg-gradient-cta btn-glow text-white rounded-full">
                  Submit Tool
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
