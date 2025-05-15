import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ToolCard from "@/components/tool-card"
import type { Category, Tool } from "@/lib/types"

interface CategorySectionProps {
  category: Category
  tools: Tool[]
}

export default function CategorySection({ category, tools }: CategorySectionProps) {
  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center">
            <span className="inline-block w-8 h-8 mr-3 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              {category.icon}
            </span>
            {category.name}
          </h2>
          <p className="text-slate-400 mt-1">{category.description}</p>
        </div>
        <Button variant="ghost" className="text-emerald-400 hover:text-emerald-300 hover:bg-slate-800">
          View all
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tools.slice(0, 4).map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  )
}
