import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg p-6 group relative">
      <div className="flex justify-center items-center mb-4">
        <div className="bg-black p-4 rounded-full">
          <Icon className="h-8 w-8 text-purple-500" />
        </div>
      </div>
      <h3 className="text-center font-medium mb-2">{title}</h3>
      <div className="absolute inset-0 bg-gray-800 rounded-lg p-6 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  )
}
