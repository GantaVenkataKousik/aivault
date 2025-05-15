import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-gradient">AI Tools Directory</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              A comprehensive directory of AI tools across various sectors. Find the perfect solution to enhance your
              productivity, creativity, and workflow.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-neon-green hover:bg-white/10 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-neon-green hover:bg-white/10 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-neon-green hover:bg-white/10 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:venkatakousikcse01@gmail.com"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-neon-green hover:bg-white/10 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-400 hover:text-neon-green transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-400 hover:text-neon-green transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/trending" className="text-gray-400 hover:text-neon-green transition-colors">
                  Trending
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-neon-green transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/submit" className="text-gray-400 hover:text-neon-green transition-colors">
                  Submit a Tool
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Categories</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/categories/development" className="text-gray-400 hover:text-neon-green transition-colors">
                  Development
                </Link>
              </li>
              <li>
                <Link href="/categories/design" className="text-gray-400 hover:text-neon-green transition-colors">
                  Design
                </Link>
              </li>
              <li>
                <Link href="/categories/writing" className="text-gray-400 hover:text-neon-green transition-colors">
                  Writing & Content
                </Link>
              </li>
              <li>
                <Link href="/categories/productivity" className="text-gray-400 hover:text-neon-green transition-colors">
                  Productivity
                </Link>
              </li>
              <li>
                <Link href="/categories/marketing" className="text-gray-400 hover:text-neon-green transition-colors">
                  Marketing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2025 AI Tools Directory. Developed by Venkata Kousik.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-500 hover:text-neon-green text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-neon-green text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
