import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import FeaturedTools from "@/components/featured-tools"
import CategoryShowcase from "@/components/category-showcase"
import TrendingTools from "@/components/trending-tools"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"
import DeveloperProfile from "@/components/developer-profile"
import AIToolsShowcase from "@/components/ai-tools-showcase"
import NewReleases from "@/components/new-releases"
import BestAITools from "@/components/best-ai-tools"
import { getAllTools, getCategories } from "@/lib/data"

export default async function Home() {
  const tools = await getAllTools()
  const categories = await getCategories()

  return (
    <main className="min-h-screen overflow-hidden">
      <div className="absolute inset-0 grid-pattern -z-10"></div>
      <div className="absolute inset-0 noise-bg -z-10"></div>

      <Navbar activeItem="home" />
      <Hero />

      <div className="relative">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-neon-green/20 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-neon-blue/20 rounded-full blur-[120px] -z-10"></div>
        <FeaturedTools tools={tools.filter((tool) => tool.features && tool.features.length > 2).slice(0, 6)} />
      </div>

      <div className="relative">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-neon-purple/20 rounded-full blur-[150px] -z-10"></div>
        <CategoryShowcase categories={categories} />
      </div>

      <div className="relative">
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-neon-orange/20 rounded-full blur-[100px] -z-10"></div>
        <TrendingTools tools={tools.sort((a, b) => b.id.length - a.id.length).slice(0, 8)} />
      </div>

      <div className="relative">
        <div className="absolute top-1/4 left-1/2 w-80 h-80 bg-neon-blue/20 rounded-full blur-[120px] -z-10"></div>
        <BestAITools tools={tools} />
      </div>

      <div className="relative">
        <div className="absolute top-1/3 left-1/2 w-80 h-80 bg-neon-green/20 rounded-full blur-[120px] -z-10"></div>
        <AIToolsShowcase tools={tools} />
      </div>

      <NewReleases tools={tools} />

      <DeveloperProfile />

      <Newsletter />
      <Footer />
    </main>
  )
}
