import Link from "next/link"
import { ArrowUpRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Tool } from "@/lib/types"

interface AIToolsShowcaseProps {
  tools: Tool[]
}

export default function AIToolsShowcase({ tools }: AIToolsShowcaseProps) {
  // Expanded use cases based on research
  const useCases = [
    { 
      name: "Content Creation", 
      icon: "✍️", 
      color: "from-neon-blue to-neon-purple",
      tags: ["writing", "content", "text", "blog"],
      examples: ["Rytr", "Sudowrite", "Wordtune"]
    },
    { 
      name: "Image Generation", 
      icon: "🎨", 
      color: "from-neon-orange to-neon-pink",
      tags: ["image", "art", "design", "visual"],
      examples: ["Midjourney", "DALL-E", "Stable Diffusion"]
    },
    { 
      name: "Video Creation", 
      icon: "🎬", 
      color: "from-neon-green to-neon-blue",
      tags: ["video", "editing", "animation"],
      examples: ["Synthesia", "Runway", "Filmora", "OpusClip"]
    },
    { 
      name: "Research & Learning", 
      icon: "🔍", 
      color: "from-neon-yellow to-neon-orange",
      tags: ["research", "learning", "education", "study"],
      examples: ["Deep Research", "NotebookLM", "Perplexity"]
    },
    { 
      name: "Voice & Audio", 
      icon: "🔊", 
      color: "from-neon-purple to-neon-red",
      tags: ["voice", "audio", "speech", "sound"],
      examples: ["ElevenLabs", "Murf", "Suno", "Udio"]
    },
    { 
      name: "Development & Coding", 
      icon: "💻", 
      color: "from-neon-blue to-neon-green",
      tags: ["coding", "development", "programming"],
      examples: ["Cursor", "v0", "Bubble", "Bolt"]
    }
  ]

  return (
    <section className="py-20" id="ai-tools-by-use-case">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card border border-white/10 text-sm font-medium text-neon-green mb-4">
            <Zap className="mr-2 h-4 w-4" />
            Powerful Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI Tools by <span className="text-gradient">Use Case</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover specialized AI tools tailored for specific tasks and workflows to enhance your productivity.
          </p>
        </div>

        <div className="space-y-12">
          {useCases.map((useCase, index) => (
            <div key={index} className="glass-card rounded-xl p-6 lg:p-8 mb-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl bg-gradient-to-br ${useCase.color} backdrop-blur-md`}>
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold ml-4">{useCase.name}</h3>
                </div>
                <Link href={`/search?q=${encodeURIComponent(useCase.name)}`}>
                  <Button variant="ghost" className="text-neon-green hover:text-white hover:bg-white/5 mt-4 md:mt-0">
                    View all
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Try to find matching tools from database or use examples */}
                {getToolsForUseCase(tools, useCase).map((tool, idx) => (
                  <Link key={`${index}-${idx}`} href={`/tool/${tool.id}`}>
                    <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors duration-300 border border-white/5 flex flex-col h-full">
                      <h4 className="font-medium mb-1">{tool.name}</h4>
                      <p className="text-gray-400 text-sm mb-2 flex-grow">{tool.description.length > 80 ? `${tool.description.substring(0, 80)}...` : tool.description}</p>
                      <div className="text-xs text-gray-500">{tool.pricing || "Free"}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Function to get tools for a use case (either from database or create placeholders)
function getToolsForUseCase(tools: Tool[], useCase: any): Tool[] {
  // First try to find matching tools from the database
  const matchingTools = tools.filter(tool => 
    useCase.tags.some((tag: string) => tool.tags.some(t => t.toLowerCase().includes(tag.toLowerCase())))
  ).slice(0, 3)
  
  // If we have enough matching tools, return them
  if (matchingTools.length >= 3) {
    return matchingTools
  }
  
  // Otherwise, supplement with example tools
  const exampleTools = useCase.examples.slice(0, 3 - matchingTools.length).map((name: string, idx: number) => ({
    id: `${useCase.name.toLowerCase().replace(/\s+/g, '-')}-${idx}`,
    name: name,
    description: getToolDescription(name, useCase.name),
    category: useCase.name,
    tags: useCase.tags,
    url: "#",
    pricing: idx % 2 === 0 ? "Free" : "Premium"
  }))
  
  return [...matchingTools, ...exampleTools]
}

// Helper function to get descriptions for example tools
function getToolDescription(name: string, category: string): string {
  const descriptions: Record<string, string> = {
    "Rytr": "AI writing assistant that helps create high-quality content for blogs, emails, and more.",
    "Sudowrite": "AI creative writing tool that helps authors overcome writer's block and craft compelling stories.",
    "Wordtune": "AI writing companion that helps rephrase, rewrite, and enhance your text.",
    "Midjourney": "AI art generation tool that creates stunning images from text descriptions.",
    "DALL-E": "OpenAI's image generation system that creates realistic images from text prompts.",
    "Stable Diffusion": "Open-source AI art generator for creating images from text descriptions.",
    "Synthesia": "AI video creation platform with virtual avatars that speak in over 140 languages.",
    "Runway": "AI creative suite for video editing, generation, and visual effects.",
    "Filmora": "AI-powered video editing software with automated features and effects.",
    "OpusClip": "AI video editing tool that automatically creates short clips from longer videos.",
    "Deep Research": "AI research assistant that compiles sources and synthesizes information.",
    "NotebookLM": "Google's AI-powered research notebook for organizing and analyzing information.",
    "Perplexity": "AI-powered search engine that provides comprehensive, sourced answers.",
    "ElevenLabs": "AI voice generation platform with natural-sounding voices and cloning capabilities.",
    "Murf": "AI voice generator for creating voiceovers and narration in multiple languages.",
    "Suno": "AI music generation tool that creates original songs from text prompts.",
    "Udio": "AI music creation platform for generating custom soundtracks and audio.",
    "Cursor": "AI-enhanced code editor that helps developers write and understand code faster.",
    "v0": "AI development tool for building applications using natural language instructions.",
    "Bubble": "No-code platform with AI features for building web applications without coding.",
    "Bolt": "AI-powered development environment for building applications faster."
  }
  
  return descriptions[name] || `Advanced AI tool for ${category.toLowerCase()} that enhances productivity and creativity.`
} 