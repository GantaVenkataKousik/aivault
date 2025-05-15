import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ToolCard from "@/components/tool-card"
import type { Tool } from "@/lib/types"

interface FeaturedToolsProps {
  tools: Tool[]
}

export default function FeaturedTools({ tools }: FeaturedToolsProps) {
  return (
    <section className="py-20" id="featured">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Featured</span> AI Tools
            </h2>
            <p className="text-gray-400 max-w-2xl">
              Discover our handpicked selection of the most powerful and innovative AI tools that are transforming
              industries.
            </p>
          </div>
          <Link href="/featured">
            <Button variant="ghost" className="text-neon-green hover:text-white hover:bg-white/5 mt-4 md:mt-0">
              View all featured
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link key={tool.id} href={`/tool/${tool.id}`}>
              <ToolCard tool={tool} isLink={true} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
