import { Card, CardContent } from "@/components/ui/card"
import { Brain, BookOpen, Users } from "lucide-react"
import { COLORS } from "@/lib/constants"

const features = [
  {
    title: "AI-Powered Testing",
    description: "Take adaptive tests that adjust to your learning pace and identify areas for improvement with phone support.",
    icon: Brain,
    color: COLORS.primary.blue
  },
  {
    title: "Comprehensive Courses",
    description: "Access courses in Economics, Political Science, History, Psychology, Sociology, and English.",
    icon: BookOpen,
    color: COLORS.primary.orange
  },
  {
    title: "Community Support",
    description: "Join our Telegram community and connect with fellow learners and expert mentors.",
    icon: Users,
    color: COLORS.primary.blue
  }
]

export function FeaturesSection() {
  return (
    <section className="w-full bg-gray-50 py-16 lg:py-24 rounded-3xl">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-blue-900">Everything You Need to Succeed</h2>
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto">
            Our platform combines cutting-edge AI technology with expert-curated content to provide you with the ultimate learning experience.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-7 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow border-0 flex flex-col items-center text-center">
              <CardContent className="p-0 flex flex-col items-center">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-sm"
                  style={{ backgroundColor: `${feature.color}10` }}
                >
                  <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-blue-900">{feature.title}</h3>
                <p className="text-gray-500 text-base">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 