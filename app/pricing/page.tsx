"use client"

import { useState } from "react"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Header } from "@/components/header"
import { Marquee } from "@/components/marquee"
import { Footer } from "@/components/footer"
import { ChatBot } from "@/components/chatbot"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Crown, BookOpen, Users, Clock, Target } from "lucide-react"

const pricingPlans = [
  {
    id: "basic",
    name: "Basic Plan",
    price: "₹999",
    originalPrice: "₹1,499",
    duration: "3 months",
    description: "Perfect for students starting their learning journey",
    icon: BookOpen,
    features: [
      "Access to 5 core subjects",
      "Basic practice tests",
      "Email support",
      "Mobile app access",
      "Progress tracking",
      "Study materials"
    ],
    popular: false,
    color: "bg-blue-500"
  },
  {
    id: "standard",
    name: "Standard Plan",
    price: "₹1,999",
    originalPrice: "₹2,999",
    duration: "6 months",
    description: "Most popular choice for serious learners",
    icon: Zap,
    features: [
      "Access to all subjects",
      "Advanced practice tests",
      "Priority email support",
      "Mobile app access",
      "Progress tracking",
      "Study materials",
      "Mock exams",
      "Performance analytics",
      "Doubt clearing sessions"
    ],
    popular: true,
    color: "bg-orange-500"
  },
  {
    id: "premium",
    name: "Premium Plan",
    price: "₹3,999",
    originalPrice: "₹5,999",
    duration: "12 months",
    description: "Complete learning experience with personal guidance",
    icon: Crown,
    features: [
      "Access to all subjects",
      "Unlimited practice tests",
      "24/7 priority support",
      "Mobile app access",
      "Progress tracking",
      "Study materials",
      "Mock exams",
      "Performance analytics",
      "Doubt clearing sessions",
      "Personal mentor",
      "Custom study plans",
      "Exam strategy sessions",
      "Career counseling"
    ],
    popular: false,
    color: "bg-purple-500"
  }
]

const templates = [
  {
    name: "Engineering Students",
    subjects: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
    duration: "4 years",
    price: "₹2,499",
    features: ["Core engineering subjects", "Practical labs", "Industry projects"]
  },
  {
    name: "Medical Students",
    subjects: ["Anatomy", "Physiology", "Biochemistry", "Pathology"],
    duration: "5.5 years",
    price: "₹3,999",
    features: ["Clinical rotations", "Case studies", "Medical ethics"]
  },
  {
    name: "Commerce Students",
    subjects: ["Accounting", "Economics", "Business Law", "Marketing"],
    duration: "3 years",
    price: "₹1,999",
    features: ["Business simulations", "Financial modeling", "Market analysis"]
  },
  {
    name: "Arts & Humanities",
    subjects: ["Literature", "History", "Philosophy", "Psychology"],
    duration: "3 years",
    price: "₹1,499",
    features: ["Research projects", "Creative workshops", "Cultural studies"]
  }
]

export default function PricingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)

  const handleLoginToggle = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  const handleBuyNow = (planId: string, planName: string) => {
    setSelectedPlan(planId)
    // Here you would typically redirect to payment gateway
    console.log(`Buying ${planName} (${planId})`)
    alert(`Redirecting to payment for ${planName}...`)
  }

  const handleTemplateBuy = (templateName: string, price: string) => {
    setSelectedTemplate(templateName)
    // Here you would typically redirect to payment gateway
    console.log(`Buying template: ${templateName}`)
    alert(`Redirecting to payment for ${templateName} template (${price})...`)
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen bg-white">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <div className="min-h-screen bg-white flex flex-col">
            {/* Header */}
            <Header isLoggedIn={isLoggedIn} onLoginToggle={handleLoginToggle} />

            {/* Marquee */}
            <Marquee text="💰 Choose your perfect learning plan and start your educational journey today! 🎓" />

            {/* Main Content Container */}
            <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Page Header */}
              <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Choose Your Learning Path</h1>
                <p className="text-lg text-gray-600">Flexible pricing plans designed to fit every student's needs and budget</p>
              </div>

              {/* Pricing Plans Section */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Pricing Plans</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Choose the perfect plan that matches your learning goals and timeline
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {pricingPlans.map((plan) => {
                    const IconComponent = plan.icon
                    return (
                      <Card 
                        key={plan.id} 
                        className={`relative ${plan.popular ? 'ring-2 ring-orange-500 scale-105' : ''}`}
                      >
                        {plan.popular && (
                          <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white">
                            Most Popular
                          </Badge>
                        )}
                        <CardHeader className="text-center">
                          <div className="flex justify-center mb-4">
                            <div className={`p-3 rounded-full ${plan.color} text-white`}>
                              <IconComponent className="w-6 h-6" />
                            </div>
                          </div>
                          <CardTitle className="text-2xl">{plan.name}</CardTitle>
                          <CardDescription className="text-base">{plan.description}</CardDescription>
                          <div className="mt-4">
                            <div className="flex items-center justify-center gap-2">
                              <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                              <span className="text-lg text-gray-500 line-through">{plan.originalPrice}</span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">for {plan.duration}</p>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3 mb-6">
                            {plan.features.map((feature, index) => (
                              <li key={index} className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <Button 
                            className={`w-full ${plan.popular ? 'bg-orange-500 hover:bg-orange-600' : 'bg-blue-500 hover:bg-blue-600'}`}
                            onClick={() => handleBuyNow(plan.id, plan.name)}
                          >
                            Buy Now
                          </Button>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>

              {/* Templates Section */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Study Templates</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Pre-designed learning paths for specific academic streams
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                  {templates.map((template, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">{template.name}</CardTitle>
                        <CardDescription>{template.duration} program</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-4">
                          <h4 className="font-semibold text-sm mb-2">Subjects:</h4>
                          <div className="flex flex-wrap gap-1">
                            {template.subjects.map((subject, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {subject}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="mb-4">
                          <h4 className="font-semibold text-sm mb-2">Features:</h4>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {template.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-1">
                                <Target className="w-3 h-3 text-orange-500" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-2xl font-bold text-orange-500">{template.price}</span>
                          <Badge variant="outline" className="text-xs">
                            <Clock className="w-3 h-3 mr-1" />
                            {template.duration}
                          </Badge>
                        </div>
                        <Button 
                          className="w-full bg-orange-500 hover:bg-orange-600"
                          onClick={() => handleTemplateBuy(template.name, template.price)}
                        >
                          Buy Now
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* FAQ Section */}
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-2">Can I upgrade my plan later?</h3>
                      <p className="text-gray-600 text-sm">Yes, you can upgrade your plan at any time. The remaining balance will be adjusted accordingly.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                      <p className="text-gray-600 text-sm">We accept all major credit cards, debit cards, UPI, and net banking.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Is there a money-back guarantee?</h3>
                      <p className="text-gray-600 text-sm">Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service.</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-2">Can I access content offline?</h3>
                      <p className="text-gray-600 text-sm">Yes, you can download study materials for offline access through our mobile app.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Do you offer group discounts?</h3>
                      <p className="text-gray-600 text-sm">Yes, we offer special discounts for groups of 5 or more students.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">How do I get support?</h3>
                      <p className="text-gray-600 text-sm">You can reach us via email, live chat, or phone. Premium users get priority support.</p>
                    </div>
                  </div>
                </div>
              </div>
            </main>

            {/* Footer */}
            <Footer />
          </div>
          <ChatBot />
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
} 