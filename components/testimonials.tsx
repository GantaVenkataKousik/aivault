import { ArrowLeft, ArrowRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Happy<span className="text-gradient">ness</span> Clients Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Dive into the headlines and stories as our directory gains acclaim for successful discoveries.
          </p>
        </div>

        <div className="relative">
          <div className="glass-card rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="absolute top-8 left-8 text-neon-green opacity-20">
              <Quote size={60} />
            </div>

            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-blue to-neon-green flex items-center justify-center text-white font-bold text-lg mr-4">
                  A
                </div>
                <div>
                  <h4 className="text-white font-bold">Alex Chen</h4>
                  <p className="text-gray-400 text-sm">Product Designer, Figma</p>
                </div>
              </div>

              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
                "This AI tools directory has been a game-changer for my workflow. I've discovered tools I never knew
                existed, and they've helped me automate tedious tasks and focus on the creative aspects of my job. The
                detailed reviews and ratings made it easy to find exactly what I needed."
              </p>

              <div className="flex justify-between items-center">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" size="icon" className="rounded-full border-white/10 hover:bg-white/5">
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full border-white/10 hover:bg-white/5">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-neon-green" : "bg-white/20"}`}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
