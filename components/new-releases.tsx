import Link from "next/link"
import { ArrowUpRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Tool } from "@/lib/types"
import { Badge } from "@/components/ui/badge"

interface NewReleasesProps {
  tools: Tool[]
}

export default function NewReleases({ tools }: NewReleasesProps) {
  // Define newest AI tools based on research (expanded list)
  const newToolNames = [
    { name: "GPT-4o", date: "2025-03-15", category: "AI Assistants" },
    { name: "Claude 3", date: "2025-02-10", category: "AI Assistants" }, 
    { name: "Suno AI", date: "2025-01-20", category: "Music Generation" },
    { name: "Gemini Pro", date: "2025-01-05", category: "AI Assistants" },
    { name: "o1 by OpenAI", date: "2024-12-15", category: "AI Assistants" },
    { name: "Synthesia Studio", date: "2024-12-01", category: "Video Generation" },
    { name: "Harvey AI", date: "2024-11-15", category: "Legal AI" },
    { name: "Fathom Analytics", date: "2024-11-01", category: "Meeting Assistant" },
    { name: "Nyota AI", date: "2024-10-15", category: "Meeting Assistant" },
    { name: "Udio Music", date: "2024-10-01", category: "Music Generation" }
  ]
  
  // Find tools from our data or create placeholders with more details
  const newTools = newToolNames.map((tool, index) => {
    return tools.find(t => t.name.toLowerCase().includes(tool.name.toLowerCase())) || {
      id: `new-${index}`,
      name: tool.name,
      description: getToolDescription(tool.name),
      category: tool.category,
      tags: getTagsForTool(tool.name, tool.category),
      url: "#",
      pricing: index % 3 === 0 ? "Free" : index % 3 === 1 ? "Freemium" : "Premium",
      lastUpdated: tool.date
    }
  })
  
  return (
    <section className="py-20 relative" id="new-releases">
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-neon-purple/20 rounded-full blur-[120px] -z-10"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-card border border-white/10 text-sm font-medium text-neon-purple mb-4">
              <Sparkles className="mr-2 h-4 w-4" />
              Fresh Innovations
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient-purple">New</span> Releases
            </h2>
            <p className="text-gray-400 max-w-2xl">
              Stay ahead of the curve with the latest AI tools that have just been released to the public in 2025.
            </p>
          </div>
          <Link href="/new">
            <Button variant="ghost" className="text-neon-purple hover:text-white hover:bg-white/5 mt-4 md:mt-0">
              View all new releases
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newTools.slice(0, 6).map((tool) => (
            <Link key={tool.id} href={`/tool/${tool.id}`}>
              <div className="glass-card glass-card-hover rounded-xl overflow-hidden h-full flex flex-col group">
                <div className="absolute top-3 right-3">
                  <Badge variant="outline" className="bg-neon-purple/10 border-neon-purple/30 text-neon-purple">
                    New
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white group-hover:text-gradient-purple transition-all duration-300 mb-2">
                    {tool.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{tool.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {tool.tags.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 text-xs px-2 py-0"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <div className="text-xs text-gray-500">{tool.pricing || "Free"}</div>
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 group-hover:bg-neon-purple/10 transition-colors duration-300">
                      <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-neon-purple transition-colors duration-300" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/new">
            <Button variant="outline" className="border-white/10 hover:bg-white/5">
              See All New Releases
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

// Helper function to get descriptions for tools
function getToolDescription(name: string): string {
  const descriptions: Record<string, string> = {
    "GPT-4o": "OpenAI's multimodal AI model that processes images, audio, and text with high-quality conversational abilities.",
    "Claude 3": "Anthropic's advanced AI assistant with strong reasoning and safety capabilities.",
    "Suno AI": "AI music creation platform that generates original songs from text prompts in various genres and styles.",
    "Gemini Pro": "Google's advanced multimodal AI system excelling in text, images, audio, and video understanding.",
    "o1 by OpenAI": "OpenAI's specialized advanced reasoning model for complex problem-solving, coding, and mathematics.",
    "Synthesia Studio": "AI video creation platform with virtual avatars that speak in over 140 languages with enhanced studio capabilities.",
    "Harvey AI": "Specialized AI assistant for legal professionals that helps with contract drafting and review.",
    "Fathom Analytics": "AI notetaker that automatically records, transcribes, and summarizes meetings with advanced analytics.",
    "Nyota AI": "Meeting intelligence platform that captures meeting content and turns it into structured knowledge.",
    "Udio Music": "AI music generation tool that creates original compositions based on text prompts with advanced control."
  }
  return descriptions[name] || `Latest AI tool for enhanced productivity and creativity.`
}

// Helper function to get tags for tools
function getTagsForTool(name: string, category: string): string[] {
  const tagMappings: Record<string, string[]> = {
    "GPT-4o": ["ai assistant", "multimodal", "chatbot", "openai"],
    "Claude 3": ["ai assistant", "chatbot", "anthropic", "reasoning"],
    "Suno AI": ["music", "audio", "generation", "creativity"],
    "Gemini Pro": ["ai assistant", "multimodal", "google", "chatbot"],
    "o1 by OpenAI": ["reasoning", "coding", "mathematics", "openai"],
    "Synthesia Studio": ["video", "avatar", "presentation", "multilingual"],
    "Harvey AI": ["legal", "contract", "law", "assistant"],
    "Fathom Analytics": ["meetings", "transcription", "analytics", "productivity"],
    "Nyota AI": ["meetings", "transcription", "knowledge", "collaboration"],
    "Udio Music": ["music", "audio", "generation", "creativity"]
  }
  return tagMappings[name] || [category.toLowerCase(), "ai", "productivity", "new release"]
} 