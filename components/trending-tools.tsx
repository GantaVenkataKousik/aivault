import Link from "next/link"
import { ArrowUpRight, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Tool } from "@/lib/types"
import { Badge } from "@/components/ui/badge"

interface TrendingToolsProps {
  tools: Tool[]
}

export default function TrendingTools({ tools }: TrendingToolsProps) {
  return (
    <section className="py-20" id="trending">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-card border border-white/10 text-sm font-medium text-neon-orange mb-4">
              <TrendingUp className="mr-2 h-4 w-4" />
              Most Popular This Week
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient-orange">Trending</span> AI Tools
            </h2>
            <p className="text-gray-400 max-w-2xl">
              Discover the most popular AI tools that are making waves in the industry right now.
            </p>
          </div>
          <Link href="/trending">
            <Button variant="ghost" className="text-neon-orange hover:text-white hover:bg-white/5 mt-4 md:mt-0">
              View all trending
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div
              key={tool.id}
              className="glass-card glass-card-hover rounded-xl overflow-hidden h-full flex flex-col group"
            >
              <div className="p-4 flex-grow">
                <div className="absolute top-3 left-3 flex items-center space-x-1 bg-black/40 backdrop-blur-md rounded-full px-3 py-1">
                  <span className="text-white text-xs font-bold">#{index + 1}</span>
                </div>

                <div className="flex items-start justify-between mb-1 mt-4">
                  <h3 className="text-lg font-bold text-white group-hover:text-gradient-orange transition-all duration-300">
                    {tool.name}
                  </h3>
                </div>

                <p className="text-gray-400 text-sm mb-2">{tool.description}</p>

                <div className="flex flex-wrap gap-1 mb-2">
                  {tool.tags.slice(0, 2).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 text-xs px-2 py-0"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="text-xs text-gray-500 mt-2">{tool.pricing || "Free"}</div>

                <Link href={`/tool/${tool.id}`} className="mt-3 inline-flex items-center text-neon-orange text-xs">
                  View details
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
