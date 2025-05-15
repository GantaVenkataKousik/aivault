import Link from "next/link"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import type { Category } from "@/lib/types"

interface CategoryShowcaseProps {
  categories: Category[]
}

export default function CategoryShowcase({ categories }: CategoryShowcaseProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Browse by <span className="text-gradient">Category</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our comprehensive collection of AI tools organized by category to find the perfect solution for your
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 custom-scrollbar">
          {categories.map((category) => (
            <Link key={category.id} href={`/categories/${category.slug}`}>
              <div className="glass-card glass-card-hover rounded-xl p-4 md:p-6 h-full group">
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl bg-gradient-to-br from-neon-green/20 to-neon-blue/20 backdrop-blur-md border border-white/10">
                    {category.icon}
                  </div>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 group-hover:bg-neon-green/10 transition-colors duration-300">
                    <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-neon-green transition-colors duration-300" />
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all duration-300 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-400 text-sm">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/categories">
            <button className="inline-flex items-center text-neon-green hover:text-white font-medium">
              View all categories
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
