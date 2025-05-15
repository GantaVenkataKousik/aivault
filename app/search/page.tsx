import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import ToolCard from "@/components/tool-card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { getAllTools } from "@/lib/data"

export default async function SearchPage({ searchParams }: { searchParams: { q: string } }) {
  const query = searchParams.q || ""
  const allTools = await getAllTools()

  const filteredTools = allTools.filter((tool) => {
    const searchText = `${tool.name} ${tool.description} ${tool.tags.join(" ")} ${tool.category}`.toLowerCase()
    return searchText.includes(query.toLowerCase())
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navbar />

      <div className="container mx-auto px-4 py-12 pt-32">
        <Link href="/" className="inline-flex items-center text-slate-400 hover:text-emerald-400 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Search Results: "{query}"</h1>
          <p className="text-slate-400">Found {filteredTools.length} tools matching your search</p>
        </div>

        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <div key={tool.id} className="relative">
                <Link href={`/tool/${tool.id}`} className="block">
                  <ToolCard tool={tool} isLink={true} />
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 glass-card rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-4">No tools found</h2>
            <p className="text-slate-400 mb-6">We couldn't find any tools matching your search query.</p>
            <Link href="/">
              <Button className="bg-gradient-to-r from-emerald-500 to-teal-600">Browse All Tools</Button>
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
