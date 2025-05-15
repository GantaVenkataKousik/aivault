export interface Tool {
  id: string
  name: string
  description: string
  category: string
  tags: string[]
  url: string
  pricing?: string
  features?: string[]
  compatibility?: string[]
  lastUpdated?: string
  rating?: number
}

export interface Category {
  id: string
  name: string
  description: string
  icon: string
}
