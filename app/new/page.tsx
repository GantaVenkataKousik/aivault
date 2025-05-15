import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ToolCard from "@/components/tool-card"
import { getAllTools } from "@/lib/data"

export default async function NewToolsPage() {
  const tools = await getAllTools()
  // In a real app, you would sort by date added
  const newTools = tools.slice(0, 9)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navbar activeItem="new" />

      <div className="container mx-auto px-4 py-12 pt-32">
        <Link href="/" className="inline-flex items-center text-slate-400 hover:text-emerald-400 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">New AI Tools</h1>
          <p className="text-slate-400">The latest additions to our AI tools directory</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {newTools.map((tool) => (
            <div key={tool.id} className="relative">
              <Link href={`/tool/${tool.id}`} className="block">
                <ToolCard tool={tool} isLink={true} />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
