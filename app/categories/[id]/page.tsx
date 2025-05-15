import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import ToolCard from "@/components/tool-card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { getCategoryById, getToolsByCategory } from "@/lib/data"

export default async function CategoryPage({ params }: { params: { id: string } }) {
  const category = await getCategoryById(params.id)
  const tools = await getToolsByCategory(params.id)

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950">
        <h1 className="text-3xl font-bold text-white mb-4">Category not found</h1>
        <p className="text-slate-400 mb-6">The category you're looking for doesn't exist or has been removed.</p>
        <Link href="/categories">
          <Button className="bg-gradient-to-r from-emerald-500 to-teal-600">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Categories
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navbar activeItem="categories" />

      <div className="container mx-auto px-4 py-12 pt-32">
        <Link href="/categories" className="inline-flex items-center text-slate-400 hover:text-emerald-400 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all categories
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-3xl">
            {category.icon}
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">{category.name}</h1>
            <p className="text-slate-400">{category.description}</p>
          </div>
        </div>

        {tools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tools.map((tool) => (
              <Link key={tool.id} href={`/tool/${tool.id}`}>
                <ToolCard tool={tool} isLink={true} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-white mb-4">No tools found</h2>
            <p className="text-slate-400 mb-6">There are no tools in this category yet.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
