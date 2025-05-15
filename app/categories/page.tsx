import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { getCategories } from '@/lib/data'

export default async function CategoriesPage() {
  const categories = await getCategories()
  
  // Define all of our categories with metadata
  const categoryData = [
    {
      name: 'AI Assistants',
      slug: 'ai-assistants',
      icon: '🤖',
      color: 'from-neon-blue to-neon-green',
      description: 'Conversational AI tools for various tasks and assistance',
      count: '9+ tools'
    },
    {
      name: 'Video & Audio',
      slug: 'video-audio',
      icon: '🎬',
      color: 'from-neon-purple to-neon-pink',
      description: 'Tools for video and audio creation and editing',
      count: '10+ tools'
    },
    {
      name: 'Image Generation',
      slug: 'image-generation',
      icon: '🖼️',
      color: 'from-neon-orange to-neon-yellow',
      description: 'Tools for AI-powered image creation and editing',
      count: '9+ tools'
    },
    {
      name: 'Writing & Content',
      slug: 'writing',
      icon: '✍️',
      color: 'from-neon-green to-neon-blue',
      description: 'Tools for content creation, writing, and editing',
      count: '10+ tools'
    },
    {
      name: 'Development',
      slug: 'development',
      icon: '💻',
      color: 'from-neon-blue to-neon-purple',
      description: 'Tools for software development, coding, and programming',
      count: '10+ tools'
    },
    {
      name: 'Voice & Audio',
      slug: 'voice-audio',
      icon: '🔊',
      color: 'from-neon-pink to-neon-orange',
      description: 'Tools for voice generation, music creation, and audio editing',
      count: '10+ tools'
    },
    {
      name: 'Social Media',
      slug: 'social-media',
      icon: '📱',
      color: 'from-neon-green to-neon-blue',
      description: 'Tools for social media management and content creation',
      count: '10+ tools'
    },
    {
      name: 'Productivity',
      slug: 'productivity',
      icon: '⚡',
      color: 'from-neon-yellow to-neon-orange',
      description: 'Tools to enhance workflow and productivity',
      count: '10+ tools'
    },
    {
      name: 'Marketing',
      slug: 'marketing',
      icon: '📈',
      color: 'from-neon-blue to-neon-purple',
      description: 'Tools for digital marketing, SEO, and advertising',
      count: '10+ tools'
    },
    {
      name: 'SEO Tools',
      slug: 'seo',
      icon: '🔍',
      color: 'from-neon-orange to-neon-pink',
      description: 'Tools for search engine optimization and website analysis',
      count: '10+ tools'
    },
    {
      name: 'Customer Service',
      slug: 'customer-service',
      icon: '💬',
      color: 'from-neon-purple to-neon-green',
      description: 'AI tools for customer support and service',
      count: '10+ tools'
    },
    {
      name: 'Email Assistants',
      slug: 'email',
      icon: '📧',
      color: 'from-neon-pink to-neon-blue',
      description: 'Tools to enhance email productivity and management',
      count: '10+ tools'
    },
    {
      name: 'Design',
      slug: 'design',
      icon: '🎨',
      color: 'from-neon-green to-neon-blue',
      description: 'Tools for graphic design, UI/UX, and creative work',
      count: '5+ tools'
    }
  ]

  return (
    <main className="min-h-screen overflow-hidden">
      <div className="absolute inset-0 grid-pattern -z-10"></div>
      <div className="absolute inset-0 noise-bg -z-10"></div>

      <Navbar activeItem="categories" />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Browse AI Tools by Category</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our comprehensive collection of AI tools organized by category to find the perfect solution for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryData.map((category) => (
              <Link key={category.slug} href={`/categories/${category.slug}`}>
                <div className="glass-card glass-card-hover rounded-xl p-6 h-full flex flex-col group">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl bg-gradient-to-br ${category.color} backdrop-blur-md border border-white/10`}>
                      {category.icon}
                    </div>
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 ml-auto group-hover:bg-neon-green/10 transition-colors duration-300">
                      <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-neon-green transition-colors duration-300" />
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all duration-300 mb-2">
                    {category.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm flex-grow">
                    {category.description}
                  </p>
                  
                  <div className="text-xs text-gray-500 mt-4">
                    {category.count}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
