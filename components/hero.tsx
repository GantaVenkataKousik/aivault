import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="relative pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-80 -z-10 min-h-[90vh]"></div>

      {/* Animated shapes */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-neon-green/10 rounded-full blur-[60px] animate-float -z-10"></div>
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-neon-blue/10 rounded-full blur-[80px] animate-float-delay-1 -z-10"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-neon-purple/10 rounded-full blur-[100px] animate-float-delay-2 -z-10"></div>

      <div className="container mx-auto px-4 py-16 sm:py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 sm:px-6 py-2 mb-4 sm:mb-6 rounded-full glass-card border border-white/10 text-xs sm:text-sm font-medium text-gray-300">
            Discover 100+ AI Tools Across 10+ Categories
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="block text-white">The Ultimate</span>
            <span className="text-gradient">AI Tools Directory</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-10 max-w-3xl mx-auto">
            Explore cutting-edge AI tools to enhance your productivity, creativity, and workflow. Find the perfect
            solution for your needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button className="bg-gradient-cta hover:bg-gradient-cta btn-glow text-white rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg">
              Explore Tools
              <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-white/10 hover:bg-white/5 text-white rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg"
            >
              Submit a Tool
            </Button>
          </div>

          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-bold text-gradient mb-1 sm:mb-2">100+</span>
              <span className="text-gray-400 text-sm sm:text-base">AI Tools</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-bold text-gradient-blue mb-1 sm:mb-2">10+</span>
              <span className="text-gray-400 text-sm sm:text-base">Categories</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-bold text-gradient-purple mb-1 sm:mb-2">1000+</span>
              <span className="text-gray-400 text-sm sm:text-base">Monthly Users</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-bold text-gradient-orange mb-1 sm:mb-2">4.2</span>
              <span className="text-gray-400 text-sm sm:text-base">User Rating</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-dark-100 to-transparent"></div>
    </div>
  )
}
