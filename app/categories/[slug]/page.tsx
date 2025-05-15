import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { getAllTools, getCategories } from '@/lib/data'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/badge'

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const categoryMap: Record<string, string> = {
    'development': 'Development',
    'design': 'Design',
    'writing': 'Writing & Content',
    'productivity': 'Productivity',
    'marketing': 'Marketing',
    'video-audio': 'Video & Audio',
    'image-generation': 'Image Generation',
    'ai-assistants': 'AI Assistants',
    'social-media': 'Social Media',
    'seo': 'SEO Tools',
    'customer-service': 'Customer Service',
    'email': 'Email Assistants',
    'voice-audio': 'Voice & Audio'
  }
  
  return Object.keys(categoryMap).map(slug => ({
    slug
  }))
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params
  const tools = await getAllTools()
  const categories = await getCategories()
  
  // Map slug to category name
  const categoryMap: Record<string, string> = {
    'development': 'Development',
    'design': 'Design',
    'writing': 'Writing & Content',
    'productivity': 'Productivity',
    'marketing': 'Marketing',
    'video-audio': 'Video & Audio',
    'image-generation': 'Image Generation',
    'ai-assistants': 'AI Assistants',
    'social-media': 'Social Media',
    'seo': 'SEO Tools',
    'customer-service': 'Customer Service',
    'email': 'Email Assistants',
    'voice-audio': 'Voice & Audio'
  }
  
  const categoryName = categoryMap[slug]
  if (!categoryName) {
    notFound()
  }

  // Map category names to descriptions
  const categoryDescriptions: Record<string, string> = {
    'Development': 'Tools for software development, coding, and programming',
    'Design': 'Tools for graphic design, UI/UX, and creative work',
    'Writing & Content': 'Tools for content creation, writing, and editing',
    'Productivity': 'Tools to enhance workflow and productivity',
    'Marketing': 'Tools for digital marketing, SEO, and advertising',
    'Video & Audio': 'Tools for video and audio creation and editing',
    'Image Generation': 'Tools for AI-powered image creation and editing',
    'AI Assistants': 'Conversational AI tools for various tasks and assistance',
    'Social Media': 'Tools for social media management and content creation',
    'SEO Tools': 'Tools for search engine optimization and website analysis',
    'Customer Service': 'AI tools for customer support and service',
    'Email Assistants': 'Tools to enhance email productivity and management',
    'Voice & Audio': 'Tools for voice generation, music creation, and audio editing'
  }

  // Map category to icon
  const categoryIcons: Record<string, string> = {
    'Development': '💻',
    'Design': '🎨',
    'Writing & Content': '✍️',
    'Productivity': '⚡',
    'Marketing': '📈',
    'Video & Audio': '🎬',
    'Image Generation': '🖼️',
    'AI Assistants': '🤖',
    'Social Media': '📱',
    'SEO Tools': '🔍',
    'Customer Service': '💬',
    'Email Assistants': '📧',
    'Voice & Audio': '🔊'
  }

  // Map to category-specific recommended tools based on our enhanced Best AI Tools list
  const recommendedToolsByCategory: Record<string, string[]> = {
    'AI Assistants': ["ChatGPT", "Claude", "Gemini", "DeepSeek", "Grok", "Perplexity", "Anthropic", "YouChat", "Bard"],
    'Video & Audio': ["Synthesia", "Runway", "Filmora", "OpusClip", "Lumen5", "Pictory", "Vyond", "InVideo", "Descript", "Moovly"],
    'Image Generation': ["Midjourney", "DALL-E", "Stable Diffusion", "Leonardo AI", "Canva Magic", "Nightcafe", "Adobe Firefly", "Dream by WOMBO", "Bing Image Creator"],
    'Writing & Content': ["Jasper", "Rytr", "Sudowrite", "Grammarly", "Wordtune", "Copy.ai", "QuillBot", "Anyword", "Writesonic", "Hemingway Editor"],
    'Development': ["GitHub Copilot", "Cursor", "Replit", "Bubble", "v0", "CodeWhisperer", "Tabnine", "DeepCode", "CodeGPT", "Codeium"],
    'Voice & Audio': ["ElevenLabs", "Play.ht", "Murf", "Suno", "Podcastle", "Udio", "Resemble.ai", "Descript Audio", "Listnr", "WellSaid Labs"],
    'Social Media': ["Buffer", "Hootsuite", "Vista Social", "FeedHive", "Later", "Sprout Social", "Agorapulse", "Planoly", "MeetEdgar", "Loomly"],
    'Productivity': ["Notion AI", "Reclaim", "Clockwise", "Mem", "Taskade", "Otter.ai", "Motion", "Sunsama", "Akiflow", "Timeular"],
    'Marketing': ["AdCreative", "MarketMuse", "Anyword", "Lately", "Persado", "Phrasee", "Unbounce", "Concured", "Pathfactory", "Drift"],
    'SEO Tools': ["Surfer SEO", "Clearscope", "Frase", "MarketMuse", "GrowthBar", "SEMrush", "Ahrefs", "Moz", "Serpstat", "SE Ranking"],
    'Customer Service': ["Intercom", "Tidio AI", "Hiver", "Drift", "Zendesk", "Freshchat", "Kommunicate", "Ada", "Kustomer", "LivePerson"],
    'Email Assistants': ["Superhuman", "SaneBox", "Shortwave", "Lavender", "Vero", "Flowrite", "Mailchimp", "Grammarly", "Front", "Postaga"],
    'Design': ["Midjourney", "Canva", "Figma", "Adobe Firefly", "Framer"]
  }

  // Get recommended tools for this category
  const recommendedTools = recommendedToolsByCategory[categoryName] || []

  // Find tools from the database or use pre-defined recommendations
  const categoryTools = recommendedTools.map(toolName => {
    const foundTool = tools.find(t => t.name === toolName || t.name.includes(toolName))
    
    return foundTool || {
      id: toolName.toLowerCase().replace(/\s+/g, '-'),
      name: toolName,
      description: getToolDescription(toolName, categoryName),
      category: categoryName,
      tags: getToolTags(toolName, categoryName),
      url: "#",
      pricing: Math.random() > 0.5 ? "Free" : "Premium"
    }
  })

  // Get next and previous categories for navigation
  const categoryNames = Object.values(categoryMap)
  const currentIndex = categoryNames.indexOf(categoryName)
  const nextCategory = currentIndex < categoryNames.length - 1 ? categoryNames[currentIndex + 1] : null
  const prevCategory = currentIndex > 0 ? categoryNames[currentIndex - 1] : null
  
  // Reverse the category map to go from name to slug
  const reverseMap: Record<string, string> = {}
  Object.entries(categoryMap).forEach(([slug, name]) => {
    reverseMap[name] = slug
  })

  return (
    <main className="min-h-screen overflow-hidden">
      <div className="absolute inset-0 grid-pattern -z-10"></div>
      <div className="absolute inset-0 noise-bg -z-10"></div>

      <Navbar activeItem="categories" />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Link href="/categories" className="text-gray-400 hover:text-white flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to all categories
            </Link>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-blue to-neon-green flex items-center justify-center text-3xl">
                {categoryIcons[categoryName] || '🔧'}
              </div>
              <div className="ml-5">
                <h1 className="text-3xl md:text-4xl font-bold">{categoryName}</h1>
                <p className="text-gray-400 mt-2">{categoryDescriptions[categoryName]}</p>
              </div>
            </div>
            <div className="flex space-x-4 mt-6 md:mt-0">
              {prevCategory && (
                <Link href={`/categories/${reverseMap[prevCategory]}`} className="text-gray-400 hover:text-white flex items-center">
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  {prevCategory}
                </Link>
              )}
              {nextCategory && (
                <Link href={`/categories/${reverseMap[nextCategory]}`} className="text-gray-400 hover:text-white flex items-center">
                  {nextCategory}
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {categoryTools.map((tool) => (
              <Link key={tool.id} href={`/tool/${tool.id}`}>
                <div className="glass-card glass-card-hover rounded-xl p-6 h-full flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{tool.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
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
                  </div>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <div className="text-xs text-gray-500">{tool.pricing}</div>
                    <span className="flex items-center text-xs text-neon-green">
                      View details
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/categories" className="text-neon-green hover:text-white inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              View all categories
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

// Helper function to get descriptions for specific tools
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
    
    // Image Generation
    "Midjourney": "AI art generator creating stunning images from text descriptions with artistic flair.",
    "DALL-E": "OpenAI's image generation system that creates realistic images from text prompts.",
    "Stable Diffusion": "Open-source AI art generator for creating images from text descriptions.",
    "Leonardo AI": "Advanced AI image generator with fine-tuning capabilities for consistent styles.",
    
    // Design
    "Canva": "Online design platform with AI-powered design tools and templates.",
    "Figma": "Collaborative design platform with AI-enhanced prototyping capabilities.",
    "Framer": "Web design and interactive prototyping tool with AI components."
  }
  
  return descriptions[name] || `Advanced AI tool for ${category.toLowerCase()} that enhances productivity and creativity.`
}

// Helper function to get tags for specific tools
function getToolTags(name: string, category: string): string[] {
  const baseTags = [category.toLowerCase().replace(/\s+/g, ''), 'ai']
  
  const specificTags: Record<string, string[]> = {
    "ChatGPT": ["chatbot", "language model", "openai"],
    "Claude": ["chatbot", "anthropic", "reasoning"],
    "DALL-E": ["image", "art", "openai"],
    "Midjourney": ["art", "design", "image generation"],
    "GitHub Copilot": ["coding", "programming", "developer"],
    "Notion AI": ["workspace", "productivity", "notes"],
  }
  
  return specificTags[name] || [...baseTags, 'productivity', 'tool']
} 