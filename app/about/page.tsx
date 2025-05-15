import Link from "next/link"
import { Github, Linkedin, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navbar activeItem="about" />

      <div className="container mx-auto px-4 pt-32 pb-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">About AI Tools Directory</h1>

          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-slate-300 text-lg">
              AI Tools Directory is a comprehensive resource for discovering and evaluating artificial intelligence
              tools across various sectors. Our mission is to help users find the perfect AI solutions to enhance their
              productivity, creativity, and workflow.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Our Mission</h2>
            <p className="text-slate-300">
              In today's rapidly evolving technological landscape, AI tools are becoming increasingly essential for
              businesses and individuals alike. However, with the vast number of options available, finding the right
              tool can be overwhelming. Our mission is to simplify this process by providing a curated directory of AI
              tools, complete with detailed information and use cases.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Features</h2>
            <ul className="text-slate-300 space-y-2">
              <li>Comprehensive categorization of AI tools by sector</li>
              <li>Detailed information about each tool, including features and pricing</li>
              <li>Regular updates to ensure the most current information</li>
              <li>Responsive design for seamless browsing on any device</li>
              <li>Easy tool submission process for developers and users</li>
            </ul>
          </div>

          <div className="glass-card rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">The Developer</h2>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-emerald-500/30">
                <img
                  src="/images/developer-profile.jpg"
                  alt="Ganta Venkata Kousik"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-white mb-1">Ganta Venkata Kousik</h3>
                <p className="text-emerald-400 mb-3">
                  Full Stack Developer | UI/UX Designer | DevOps Engineer | AI & Automation
                </p>
                <p className="text-slate-300 mb-4">
                  A versatile professional with expertise in full-stack development, UI/UX design, DevOps, and AI-driven
                  automation. Experienced in delivering high-performance digital solutions across various domains,
                  focusing on scalability, efficiency, and user experience.
                </p>

                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <Link
                    href="https://linktr.ee/GantaVenkataKousik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full text-white text-sm hover:from-teal-600 hover:to-emerald-600 transition-colors"
                  >
                    <Globe className="h-4 w-4" />
                    <span>Linktree</span>
                  </Link>

                  <Link
                    href="https://www.linkedin.com/in/gantavenkatakousik/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-white text-sm hover:from-blue-600 hover:to-blue-700 transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span>LinkedIn</span>
                  </Link>

                  <Link
                    href="https://github.com/GantaVenkataKousik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 bg-gray-700 rounded-full text-white text-sm hover:bg-gray-800 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-slate-300 mb-4">
              Have questions, suggestions, or feedback? We'd love to hear from you! Feel free to reach out to us at{" "}
              <a href="mailto:venkatakousikcse01@gmail.com" className="text-emerald-400 hover:underline">
                venkatakousikcse01@gmail.com
              </a>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link href="/">
                <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 w-full sm:w-auto">
                  Explore Tools
                </Button>
              </Link>
              <Link href="/submit">
                <Button variant="outline" className="border-slate-700 hover:bg-slate-800 w-full sm:w-auto">
                  Submit a Tool
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
