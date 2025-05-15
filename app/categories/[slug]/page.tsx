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
    'ai-assistants': 'AI Assistants',
    'video-generation': 'Video Generation',
    'image-generation': 'Image Generation',
    'writing-grammar': 'Writing & Grammar',
    'coding-development': 'Coding & Development',
    'voice-audio': 'Voice & Audio',
    'social-media': 'Social Media',
    'productivity': 'Productivity',
    'marketing': 'Marketing',
    'seo-tools': 'SEO Tools',
    'customer-service': 'Customer Service',
    'email-assistants': 'Email Assistants'
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
    'ai-assistants': 'AI Assistants',
    'video-generation': 'Video Generation',
    'image-generation': 'Image Generation',
    'writing-grammar': 'Writing & Grammar',
    'coding-development': 'Coding & Development',
    'voice-audio': 'Voice & Audio',
    'social-media': 'Social Media',
    'productivity': 'Productivity',
    'marketing': 'Marketing',
    'seo-tools': 'SEO Tools',
    'customer-service': 'Customer Service',
    'email-assistants': 'Email Assistants'
  }
  
  const categoryName = categoryMap[slug]
  if (!categoryName) {
    notFound()
  }

  // Map category names to descriptions
  const categoryDescriptions: Record<string, string> = {
    'AI Assistants': 'Conversational AI tools for various tasks and assistance',
    'Video Generation': 'Tools for creating and editing videos using AI capabilities',
    'Image Generation': 'Tools for AI-powered image creation and editing',
    'Writing & Grammar': 'Tools for improving writing, grammar checking, and content creation',
    'Coding & Development': 'AI tools for software development, coding, and programming',
    'Voice & Audio': 'Tools for voice generation, music creation, and audio editing',
    'Social Media': 'Tools for social media management and content creation',
    'Productivity': 'Tools to enhance workflow, organization, and efficiency',
    'Marketing': 'Tools for digital marketing, campaigns, and automation',
    'SEO Tools': 'Tools for search engine optimization and website analysis',
    'Customer Service': 'AI chatbots and tools for customer support and engagement',
    'Email Assistants': 'Tools for managing, composing, and optimizing emails'
  }

  // Map category to icon
  const categoryIcons: Record<string, string> = {
    'AI Assistants': '🤖',
    'Video Generation': '🎬',
    'Image Generation': '🖼️',
    'Writing & Grammar': '✍️',
    'Coding & Development': '💻',
    'Voice & Audio': '🔊',
    'Social Media': '📱',
    'Productivity': '⚡',
    'Marketing': '📈',
    'SEO Tools': '🔍',
    'Customer Service': '💬',
    'Email Assistants': '📧'
  }

  // Map to category-specific recommended tools based on our enhanced Best AI Tools list
  const recommendedToolsByCategory: Record<string, string[]> = {
    'AI Assistants': ["ChatGPT", "Claude", "Gemini", "DeepSeek", "Grok", "Perplexity", "Anthropic", "YouChat", "Bard"],
    'Video Generation': ["Synthesia", "Runway", "D-ID", "Lumen5", "DeepBrain AI", "InVideo", "Elai.io"],
    'Image Generation': ["Midjourney", "DALL-E", "Stable Diffusion", "Leonardo AI", "Canva Magic", "Nightcafe", "Adobe Firefly", "Dream by WOMBO", "Bing Image Creator"],
    'Writing & Grammar': ["Jasper", "Grammarly", "QuillBot", "Wordtune", "Hemingway Editor", "Sudowrite", "ProWritingAid", "Copy.ai", "Rytr", "Writesonic"],
    'Coding & Development': ["GitHub Copilot", "Cursor", "Tabnine", "Codeium", "OpenAI Codex", "Replit Ghostwriter", "CodeWhisperer", "DeepCode", "CodeGPT"],
    'Voice & Audio': ["ElevenLabs", "Play.ht", "Murf", "Suno", "Podcastle", "Udio", "Resemble.ai", "Descript", "Listnr", "WellSaid Labs"],
    'Social Media': ["Buffer", "Hootsuite", "Vista Social", "FeedHive", "Later", "Sprout Social", "Agorapulse", "Planoly", "MeetEdgar", "Loomly"],
    'Productivity': ["Notion AI", "Reclaim", "Clockwise", "Mem", "Taskade", "Otter.ai", "Motion", "Sunsama", "Akiflow", "Timeular"],
    'Marketing': ["AdCreative", "MarketMuse", "Anyword", "Lately", "Persado", "Phrasee", "Unbounce", "Concured", "Pathfactory", "Drift"],
    'SEO Tools': ["Surfer SEO", "Clearscope", "Frase", "MarketMuse", "GrowthBar", "SEMrush", "Ahrefs", "Moz", "Serpstat", "SE Ranking"],
    'Customer Service': ["Intercom", "Tidio AI", "Hiver", "Drift", "Zendesk", "Freshchat", "Kommunicate", "Ada", "Kustomer", "LivePerson"],
    'Email Assistants': ["Superhuman", "SaneBox", "Shortwave", "Lavender", "Flowrite", "Gmelius", "Mailbutler", "Mailchimp", "Grammarly", "Front"]
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
    "Runway": "Creative toolkit with AI video editing, effects, and generation capabilities.",
    "D-ID": "Platform for creating talking head videos from text using AI avatars.",
    "Lumen5": "AI-powered video creation platform that turns blog posts and text into engaging videos.",
    "DeepBrain AI": "Platform for creating AI avatars and human-like digital presenters for videos.",
    "InVideo": "Online video creation platform with AI-powered templates and editing tools.",
    "Elai.io": "AI video generation platform that creates videos from text without any video production skills.",
    
    // Writing & Grammar
    "Jasper": "AI content platform that helps create marketing copy, blog posts, and other content.",
    "Grammarly": "AI writing assistant that helps with grammar, clarity, and writing style.",
    "QuillBot": "AI-powered paraphrasing tool that helps rewrite and enhance text.",
    "Wordtune": "AI writing companion that helps rewrite, rephrase, and reword your text.",
    "Hemingway Editor": "Writing tool that helps make your writing bold and clear by highlighting complex sentences.",
    "Sudowrite": "AI writing tool designed specifically for fiction writers and creative writing.",
    "ProWritingAid": "Grammar checker, style editor, and writing mentor in one package.",
    
    // Coding & Development
    "GitHub Copilot": "AI pair programmer that suggests code completions based on context.",
    "Cursor": "AI-first code editor that helps developers write, understand, and fix code faster.",
    "Tabnine": "AI code completion assistant that helps developers code faster with whole-line and full-function code completions.",
    "Codeium": "Free AI-powered code completion tool that integrates with many IDEs and supports multiple languages.",
    "OpenAI Codex": "AI system that translates natural language to code across many programming languages.",
    "Replit Ghostwriter": "AI pair programmer integrated directly into Replit's development environment.",
    
    // Email Assistants
    "Superhuman": "Email client with AI-powered features that helps you work through your inbox twice as fast.",
    "SaneBox": "Email management tool that uses AI to filter unimportant emails out of your inbox.",
    "Shortwave": "Smart email client that organizes your inbox automatically.",
    "Lavender": "Email AI assistant that helps you write better emails that get responses.",
    "Flowrite": "AI writing tool that turns short instructions into ready-to-send emails and messages.",
    "Gmelius": "Gmail enhancement suite with AI features for email collaboration and automation.",
    "Mailbutler": "Email productivity tool with smart AI features for Apple Mail, Gmail, and Outlook.",
  }

  return descriptions[name] || 
    `AI-powered ${name} tool for ${category.toLowerCase()} tasks and workflows.`
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