"use client"

import { ExternalLink, ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Tool } from "@/lib/types"

interface ToolCardProps {
  tool: Tool
  isLink?: boolean
}

export default function ToolCard({ tool, isLink = false }: ToolCardProps) {
  return (
    <div className="glass-card glass-card-hover rounded-xl overflow-hidden h-full flex flex-col group">
      <div className="p-6 flex-grow">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all duration-300">
            {tool.name}
          </h3>
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 group-hover:bg-neon-green/10 transition-colors duration-300">
            <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-neon-green transition-colors duration-300" />
          </span>
        </div>

        <p className="text-gray-400 mb-4">{tool.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tool.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-white/5 border-white/10 text-gray-300 hover:bg-white/10">
              {tag}
            </Badge>
          ))}
        </div>

        {tool.features && tool.features.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              {tool.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-neon-green/50"></div>
                  <span>{feature}</span>
                </li>
              ))}
              {tool.features.length > 3 && (
                <li className="text-neon-green text-xs">+{tool.features.length - 3} more features</li>
              )}
            </ul>
          </div>
        )}
      </div>

      <div className="px-6 pb-6 pt-0 mt-auto">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">{tool.pricing || "Free"}</span>
          {!isLink && (
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-neon-green hover:text-white"
              onClick={(e) => e.stopPropagation()}
            >
              Visit site
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          )}
          {isLink && (
            <span className="inline-flex items-center text-neon-green">
              View details
              <ArrowUpRight className="ml-1 h-3 w-3" />
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
