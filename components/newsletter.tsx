import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="glass-card rounded-xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-neon-green/20 rounded-full blur-[100px] -z-10"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-neon-blue/20 rounded-full blur-[120px] -z-10"></div>

          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with the <span className="text-gradient">Latest AI Tools</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Subscribe to our newsletter to receive updates on new AI tools, industry trends, and exclusive content.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border-white/10 focus:border-neon-green/50 rounded-full text-base py-6 px-6 flex-grow"
              />
              <Button className="bg-gradient-cta hover:bg-gradient-cta btn-glow text-white rounded-full px-8 py-6">
                Subscribe
              </Button>
            </div>

            <p className="text-gray-500 text-sm mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
