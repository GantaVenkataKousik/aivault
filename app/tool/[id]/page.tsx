import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getToolById, getCategoryById } from "@/lib/data"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default async function ToolPage({ params }: { params: { id: string } }) {
  const tool = await getToolById(params.id)

  if (!tool) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="absolute inset-0 grid-pattern -z-10"></div>
        <div className="absolute inset-0 noise-bg -z-10"></div>

        <h1 className="text-3xl font-bold text-white mb-4">Tool not found</h1>
        <p className="text-gray-400 mb-6">The tool you're looking for doesn't exist or has been removed.</p>
        <Link href="/">
          <Button className="bg-gradient-cta hover:bg-gradient-cta btn-glow text-white rounded-full">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    )
  }

  const category = await getCategoryById(tool.category)

  return (
    <div className="min-h-screen">
      <div className="absolute inset-0 grid-pattern -z-10"></div>
      <div className="absolute inset-0 noise-bg -z-10"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-neon-green/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-neon-blue/20 rounded-full blur-[120px] -z-10"></div>

      <Navbar />

      <div className="container mx-auto px-4 pt-32 pb-20">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-neon-green mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all tools
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{tool.name}</h1>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              {category && (
                <Badge className="bg-neon-green/10 text-neon-green hover:bg-neon-green/20 px-3 py-1 rounded-full">
                  {category.icon} {category.name}
                </Badge>
              )}

              {tool.pricing && (
                <Badge variant="outline" className="border-white/10 text-gray-300 rounded-full">
                  {tool.pricing}
                </Badge>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {tool.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 rounded-full"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="glass-card rounded-xl p-6 mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Description</h2>
              <p className="text-gray-300 leading-relaxed">{tool.description}</p>
            </div>

            {tool.features && tool.features.length > 0 && (
              <div className="glass-card rounded-xl p-6 mb-8">
                <h2 className="text-xl font-semibold text-white mb-4">Key Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tool.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 mt-1 h-5 w-5 rounded-full bg-neon-green/20 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-neon-green"></div>
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="glass-card rounded-xl p-6 mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Use Cases</h2>
              <p className="text-gray-300 mb-4">{tool.name} is particularly useful for the following scenarios:</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-5 w-5 rounded-full bg-neon-green/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-neon-green"></div>
                  </div>
                  <span>
                    {category?.name === "development"
                      ? "Automating repetitive coding tasks and improving developer productivity"
                      : category?.name === "design"
                        ? "Creating professional designs without extensive design experience"
                        : category?.name === "writing"
                          ? "Generating high-quality content for various purposes"
                          : "Streamlining workflows and improving efficiency"}
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-5 w-5 rounded-full bg-neon-green/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-neon-green"></div>
                  </div>
                  <span>
                    {category?.name === "development"
                      ? "Assisting with code debugging and optimization"
                      : category?.name === "design"
                        ? "Quickly prototyping design concepts and ideas"
                        : category?.name === "writing"
                          ? "Improving existing content with AI-powered suggestions"
                          : "Enhancing decision-making with AI-driven insights"}
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-5 w-5 rounded-full bg-neon-green/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-neon-green"></div>
                  </div>
                  <span>
                    {category?.name === "development"
                      ? "Learning new programming concepts and techniques"
                      : category?.name === "design"
                        ? "Generating creative assets for marketing and branding"
                        : category?.name === "writing"
                          ? "Overcoming writer's block with AI-generated ideas"
                          : "Automating routine tasks to focus on strategic work"}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="glass-card rounded-xl p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-white mb-6">Tool Information</h2>

              <div className="space-y-6">
                <a href={tool.url} target="_blank" rel="noopener noreferrer" className="block w-full">
                  <Button className="w-full bg-gradient-cta hover:bg-gradient-cta btn-glow text-white rounded-full py-6">
                    Visit Website
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>

                <div className="glass-card rounded-xl p-4">
                  <h3 className="text-sm font-medium text-gray-400 mb-2">Category</h3>
                  <p className="text-white">{category?.name || tool.category}</p>
                </div>

                {tool.pricing && (
                  <div className="glass-card rounded-xl p-4">
                    <h3 className="text-sm font-medium text-gray-400 mb-2">Pricing</h3>
                    <p className="text-white">{tool.pricing}</p>
                  </div>
                )}

                <div className="glass-card rounded-xl p-4">
                  <h3 className="text-sm font-medium text-gray-400 mb-2">Last Updated</h3>
                  <p className="text-white">May 10, 2025</p>
                </div>

                <div className="glass-card rounded-xl p-4">
                  <h3 className="text-sm font-medium text-gray-400 mb-2">Compatibility</h3>
                  <p className="text-white">Web, iOS, Android</p>
                </div>

                <div className="pt-4">
                  <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 text-white rounded-full">
                    Add to Favorites
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
