import Link from "next/link"
import { ArrowUpRight, Stars } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Tool } from "@/lib/types"
import { Badge } from "@/components/ui/badge"

interface BestAIToolsProps {
  tools: Tool[]
}

export default function BestAITools({ tools }: BestAIToolsProps) {
  // Define categories based on research from synthesia.io and insidr.ai
  const categories = [
    { 
      name: "AI Assistants", 
      icon: "🤖", 
      color: "from-neon-blue to-neon-green",
      slug: "ai-assistants",
      tools: ["ChatGPT", "Claude", "Gemini", "DeepSeek", "Grok", "Perplexity", "Anthropic", "Jasper", "YouChat", "Bard"]
    },
    {
      name: "Video Generation", 
      icon: "🎬", 
      color: "from-neon-purple to-neon-pink",
      slug: "video-generation",
      tools: ["Synthesia", "Runway", "Filmora", "OpusClip", "Lumen5", "Pictory", "Vyond", "InVideo", "Descript", "Moovly"]
    },
    {
      name: "Image Generation", 
      icon: "🎨", 
      color: "from-neon-orange to-neon-yellow",
      slug: "image-generation",
      tools: ["Midjourney", "DALL-E", "Stable Diffusion", "Leonardo AI", "Canva Magic", "Nightcafe", "Adobe Firefly", "Dream by WOMBO", "Bing Image Creator", "Playground AI"]
    },
    {
      name: "Writing & Grammar", 
      icon: "✍️", 
      color: "from-neon-green to-neon-blue",
      slug: "writing",
      tools: ["Jasper", "Rytr", "Sudowrite", "Grammarly", "Wordtune", "Copy.ai", "QuillBot", "Anyword", "Writesonic", "Hemingway Editor"]
    },
    {
      name: "Coding & Development", 
      icon: "💻", 
      color: "from-neon-blue to-neon-purple",
      slug: "development",
      tools: ["GitHub Copilot", "Cursor", "Replit", "Bubble", "v0", "CodeWhisperer", "Tabnine", "DeepCode", "CodeGPT", "Codeium"]
    },
    {
      name: "Voice & Audio", 
      icon: "🔊", 
      color: "from-neon-pink to-neon-orange",
      slug: "voice-audio",
      tools: ["ElevenLabs", "Play.ht", "Murf", "Suno", "Podcastle", "Udio", "Resemble.ai", "Descript Audio", "Listnr", "WellSaid Labs"]
    },
    {
      name: "Social Media", 
      icon: "📱", 
      color: "from-neon-green to-neon-blue",
      slug: "social-media",
      tools: ["Buffer", "Hootsuite", "Vista Social", "FeedHive", "Later", "Sprout Social", "Agorapulse", "Planoly", "MeetEdgar", "Loomly"]
    },
    {
      name: "Productivity", 
      icon: "⚡", 
      color: "from-neon-yellow to-neon-orange",
      slug: "productivity",
      tools: ["Notion AI", "Reclaim", "Clockwise", "Mem", "Taskade", "Otter.ai", "Motion", "Sunsama", "Akiflow", "Timeular"]
    },
    {
      name: "Marketing", 
      icon: "📈", 
      color: "from-neon-blue to-neon-purple",
      slug: "marketing",
      tools: ["AdCreative", "MarketMuse", "Anyword", "Lately", "Persado", "Phrasee", "Unbounce", "Concured", "Pathfactory", "Drift"]
    },
    {
      name: "SEO Tools", 
      icon: "🔍", 
      color: "from-neon-orange to-neon-pink",
      slug: "seo",
      tools: ["Surfer SEO", "Clearscope", "Frase", "MarketMuse", "GrowthBar", "SEMrush", "Ahrefs", "Moz", "Serpstat", "SE Ranking"]
    },
    {
      name: "Customer Service", 
      icon: "💬", 
      color: "from-neon-purple to-neon-green",
      slug: "customer-service",
      tools: ["Intercom", "Tidio AI", "Hiver", "Drift", "Zendesk", "Freshchat", "Kommunicate", "Ada", "Kustomer", "LivePerson"]
    },
    {
      name: "Email Assistants", 
      icon: "📧", 
      color: "from-neon-pink to-neon-blue",
      slug: "email",
      tools: ["Superhuman", "SaneBox", "Shortwave", "Lavender", "Vero", "Flowrite", "Mailchimp", "Grammarly", "Front", "Postaga"]
    }
  ]

  // Display all categories
  const displayCategories = categories

  return (
    <section className="py-20" id="best-ai-tools">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card border border-white/10 text-sm font-medium text-neon-blue mb-4">
            <Stars className="mr-2 h-4 w-4" />
            Top-Rated Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Best <span className="text-gradient-blue">AI Tools</span> by Category
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover the most powerful AI tools across various categories, carefully selected and tested for quality and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayCategories.map((category, index) => (
            <div key={index} className="glass-card glass-card-hover rounded-xl p-6 h-full flex flex-col">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl bg-gradient-to-br ${category.color} backdrop-blur-md`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold ml-4">{category.name}</h3>
              </div>
              
              <div className="space-y-3 mb-6 flex-grow max-h-[300px] overflow-y-auto custom-scrollbar">
                {category.tools.slice(0, 5).map((toolName, idx) => {
                  // Try to find the tool in our database
                  const toolInfo = tools.find(t => t.name.toLowerCase().includes(toolName.toLowerCase())) || {
                    id: `placeholder-${index}-${idx}`,
                    name: toolName,
                    description: getToolDescription(toolName, category.name),
                    tags: []
                  }
                  
                  return (
                    <div key={idx} className="bg-white/5 border border-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">{toolName}</h4>
                        {idx === 0 && (
                          <Badge variant="outline" className="bg-amber-500/10 border-amber-500/30 text-amber-400 text-xs">
                            Top Pick
                          </Badge>
                        )}
                      </div>
                      {toolInfo.description && (
                        <p className="text-gray-400 text-xs mt-1">
                          {toolInfo.description.length > 60 ? `${toolInfo.description.substring(0, 60)}...` : toolInfo.description}
                        </p>
                      )}
                    </div>
                  )
                })}
                {category.tools.length > 5 && (
                  <div className="pt-2 text-center">
                    <span className="text-xs text-gray-400">
                      +{category.tools.length - 5} more tools
                    </span>
                  </div>
                )}
              </div>
              
              <div className="mt-auto">
                <Link href={`/categories/${category.slug}`}>
                  <Button variant="ghost" className="w-full justify-center text-neon-blue hover:text-white hover:bg-white/5">
                    Explore {category.name}
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Helper function to get descriptions for tools
function getToolDescription(name: string, category: string): string {
  const descriptions: Record<string, string> = {
    // AI Assistants
    "ChatGPT": "OpenAI's powerful conversational AI that can understand and generate human-like text.",
    "Claude": "Anthropic's AI assistant with strong reasoning and safety capabilities.",
    "Gemini": "Google's advanced multimodal AI system for text, images, audio, and video understanding.",
    "DeepSeek": "Advanced AI model with exceptional reasoning and problem-solving capabilities.",
    "Grok": "Xai's conversational AI with real-time information access and a touch of humor.",
    "Perplexity": "AI-powered search engine that provides comprehensive answers with citations.",
    "Anthropic": "Leading AI research company focused on AI safety and helpful assistants.",
    "YouChat": "Integrated AI search and chat assistant with real-time information.",
    "Bard": "Google's conversational AI developed to help with creative text generation.",
    
    // Video Generation
    "Synthesia": "AI video creation platform with virtual avatars that speak in over 140 languages.",
    "Runway": "AI creative suite for video editing, generation, and visual effects.",
    "Filmora": "AI-powered video editing software with automated features and effects.",
    "OpusClip": "AI video editing tool that automatically creates short clips from longer videos.",
    "Lumen5": "AI-powered video creation platform that transforms text content into engaging videos.",
    "Pictory": "Converts text to video using AI with automated scene selection.",
    "Vyond": "Animation studio that uses AI to help create professional animated videos.",
    "InVideo": "Online video creation platform with AI-powered templates and editing tools.",
    "Descript": "All-in-one audio/video editing with AI transcription and voice cloning.",
    "Moovly": "Video creation platform with automated text-to-video features.",
    
    // Image Generation
    "Midjourney": "AI art generator creating stunning images from text descriptions with artistic flair.",
    "DALL-E": "OpenAI's image generation system that creates realistic images from text prompts.",
    "Stable Diffusion": "Open-source AI art generator for creating images from text descriptions.",
    "Leonardo AI": "Advanced AI image generator with fine-tuning capabilities for consistent styles.",
    "Canva Magic": "AI image generation and editing tools integrated into Canva's design platform.",
    "Nightcafe": "AI art generator with multiple algorithms and styles for creative expression.",
    "Adobe Firefly": "Adobe's suite of generative AI tools for creating and editing images.",
    "Dream by WOMBO": "Mobile app for creating AI art from text prompts with various styles.",
    "Bing Image Creator": "Microsoft's AI image generation tool powered by DALL-E.",
    "Playground AI": "Web-based platform for generating and editing AI art with various models.",
    
    // Writing & Grammar
    "Jasper": "AI content creation platform for marketing copy, blogs, social media, and more.",
    "Rytr": "AI writing assistant that helps create high-quality content for blogs, emails, and more.",
    "Sudowrite": "AI creative writing tool that helps authors overcome writer's block.",
    "Grammarly": "AI-powered writing assistant that checks grammar, clarity, and tone.",
    "Wordtune": "AI writing companion that helps rephrase, rewrite, and enhance your text.",
    "Copy.ai": "AI copywriting tool that generates marketing copy, emails, and social media content.",
    "QuillBot": "AI paraphrasing tool that helps rewrite and enhance content.",
    "Anyword": "AI copywriting platform with performance prediction for marketing content.",
    "Writesonic": "AI writer that creates SEO-friendly blog posts, ads, and product descriptions.",
    "Hemingway Editor": "Writing tool that highlights complex sentences and common errors.",
    
    // Social Media
    "Buffer": "Social media management platform with AI-powered content suggestions.",
    "Hootsuite": "Comprehensive social media management tool with scheduling and analytics.",
    "Vista Social": "All-in-one social media management platform with AI content creation.",
    "FeedHive": "AI-powered social media scheduling and optimization tool.",
    "Later": "Visual social media planner with AI content recommendations.",
    "Sprout Social": "Social media management platform with advanced analytics and AI insights.",
    "Agorapulse": "Social media management tool with inbox, publishing, and reporting features.",
    "Planoly": "Visual planner for Instagram and Pinterest with AI assistance.",
    "MeetEdgar": "Social media scheduler that automatically recycles your best content.",
    "Loomly": "Brand management platform with post suggestions and collaborative tools.",
    
    // Productivity
    "Notion AI": "AI-powered workspace that enhances note-taking, documents, and databases.",
    "Reclaim": "AI calendar assistant that automatically schedules tasks and meetings.",
    "Clockwise": "AI meeting scheduler that optimizes your calendar for focus time.",
    "Mem": "AI-powered personal knowledge management system.",
    "Taskade": "AI-enhanced productivity platform for task management and collaboration.",
    "Otter.ai": "AI meeting assistant that records, transcribes, and summarizes meetings.",
    "Motion": "AI-powered calendar and task management tool for optimal scheduling.",
    "Sunsama": "Daily planner that combines tasks, calendar, and focus techniques.",
    "Akiflow": "Productivity tool that centralizes tasks and calendar across apps.",
    "Timeular": "Time tracking device and app with AI-powered insights."
  }
  
  return descriptions[name] || `Advanced AI tool for ${category.toLowerCase()} that enhances productivity and creativity.`
} 