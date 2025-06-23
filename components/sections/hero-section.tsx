import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { COLORS } from "@/lib/constants"

export function HeroSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-6 lg:py-10">
      <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-16 items-center justify-between">
        <div className="flex-1 flex flex-col items-start justify-center text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-2" style={{ color: COLORS.primary.blue }}>
            Master Your Studies with <span className="text-orange-500">AI-Powered</span> Learning
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 mb-4 max-w-xl">
            Join thousands of students excelling in their academics with our comprehensive platform featuring AI assistance, expert content, and community support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="text-lg px-8 text-white font-semibold shadow-md hover:scale-105 transition-transform" 
              style={{ backgroundColor: COLORS.primary.blue }}
            >
              Start Learning Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 font-semibold border-2 hover:scale-105 transition-transform"
              style={{ color: COLORS.primary.orange, borderColor: COLORS.primary.orange }}
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center">
            <div className="h-[220px] w-full bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <Play className="w-16 h-16 text-orange-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-blue-900">How to Use Our Platform</h3>
            <p className="text-gray-500 text-center">
              Get started in minutes with our comprehensive video guide that walks you through all features.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 