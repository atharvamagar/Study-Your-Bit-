import { Button } from "@/components/ui/button"
import { MessageCircle, Users, Brain } from "lucide-react"
import { COLORS } from "@/lib/constants"

const communityFeatures = [
  {
    title: "24/7 Support",
    description: "Get help whenever you need it through our Telegram channel and support system.",
    icon: MessageCircle,
    color: COLORS.primary.blue
  },
  {
    title: "Peer Learning",
    description: "Learn from your peers and share your knowledge with the community.",
    icon: Users,
    color: COLORS.primary.orange
  },
  {
    title: "Expert Guidance",
    description: "Get insights from subject matter experts and experienced educators.",
    icon: Brain,
    color: COLORS.primary.blue
  }
]

export function CommunitySection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 rounded-3xl">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-blue-900">Join Our Learning Community</h2>
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto">
            Connect with thousands of students, share knowledge, and get support from our expert community.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {communityFeatures.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl shadow-sm p-7 flex flex-col items-start text-left">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow"
                style={{ backgroundColor: `${feature.color}10` }}
              >
                <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-blue-900">{feature.title}</h3>
              <p className="text-gray-500 text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center">
          <Button 
            size="lg" 
            className="text-lg px-8 text-white font-semibold shadow-md hover:scale-105 transition-transform" 
            style={{ backgroundColor: COLORS.primary.blue }}
          >
            Join Telegram Community
          </Button>
          <p className="text-sm text-gray-400 mt-4">Free to join • 10,000+ active members</p>
        </div>
      </div>
    </section>
  )
} 