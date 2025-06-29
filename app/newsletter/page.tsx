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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { 
  Mail, 
  Bell, 
  BookOpen, 
  Target, 
  TrendingUp, 
  Award,
  CheckCircle,
  Star,
  Users,
  Calendar,
  FileText,
  Lightbulb,
  Zap,
  Gift
} from "lucide-react"

const newsletterCategories = [
  {
    id: "study-tips",
    name: "Study Tips & Strategies",
    description: "Weekly study techniques and productivity hacks",
    icon: Lightbulb,
    subscribers: 12450
  },
  {
    id: "exam-updates",
    name: "Exam Updates & Notifications",
    description: "Latest exam dates, syllabus changes, and important announcements",
    icon: Bell,
    subscribers: 18920
  },
  {
    id: "course-recommendations",
    name: "Course Recommendations",
    description: "Personalized course suggestions based on your interests",
    icon: BookOpen,
    subscribers: 9870
  },
  {
    id: "career-guidance",
    name: "Career Guidance",
    description: "Career advice, internship opportunities, and job market insights",
    icon: Target,
    subscribers: 7560
  },
  {
    id: "academic-resources",
    name: "Academic Resources",
    description: "Free study materials, practice papers, and reference books",
    icon: FileText,
    subscribers: 11230
  },
  {
    id: "success-stories",
    name: "Student Success Stories",
    description: "Inspirational stories from top performers and achievers",
    icon: Award,
    subscribers: 6540
  }
]

const recentNewsletters = [
  {
    id: "nl-1",
    title: "Top 10 Study Techniques for JEE Main 2024",
    category: "Study Tips & Strategies",
    date: "2024-01-15",
    readTime: "5 min read",
    excerpt: "Discover proven study techniques that helped thousands of students crack JEE Main. From time management to effective revision strategies..."
  },
  {
    id: "nl-2",
    title: "New Course Alert: Advanced Political Science",
    category: "Course Recommendations",
    date: "2024-01-14",
    readTime: "3 min read",
    excerpt: "Dr. Samriddhi Sengupta's new course on Advanced Political Science is now live! Early bird discount available for first 100 students..."
  },
  {
    id: "nl-3",
    title: "Career Opportunities in Data Science",
    category: "Career Guidance",
    date: "2024-01-13",
    readTime: "7 min read",
    excerpt: "Explore the booming field of data science. Learn about required skills, salary expectations, and how to break into this industry..."
  }
]

export default function NewsletterPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [frequency, setFrequency] = useState("weekly")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleLoginToggle = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  const handleSubscribe = () => {
    if (email && selectedCategories.length > 0) {
      setIsSubscribed(true)
      // Here you would typically send the data to your backend
      console.log("Subscribing:", { email, selectedCategories, frequency })
    }
  }

  const handleUnsubscribe = () => {
    setIsSubscribed(false)
    setEmail("")
    setSelectedCategories([])
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
            <Marquee text="📧 Stay updated with our newsletter! Get exclusive study tips, exam updates, and more! 🎓" />

            {/* Main Content Container */}
            <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Page Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <Mail className="w-8 h-8 text-orange-600" />
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Newsletter Signup</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Stay connected with the latest study tips, exam updates, course recommendations, and exclusive content delivered to your inbox
                </p>
              </div>

              {/* Newsletter Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold">67,770+</div>
                        <div className="text-blue-100 text-sm">Active Subscribers</div>
                      </div>
                      <Users className="w-8 h-8" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold">156</div>
                        <div className="text-green-100 text-sm">Newsletters Sent</div>
                      </div>
                      <Mail className="w-8 h-8" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold">94.2%</div>
                        <div className="text-purple-100 text-sm">Open Rate</div>
                      </div>
                      <TrendingUp className="w-8 h-8" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Signup Form */}
                <Card className="lg:col-span-1">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-orange-500" />
                      Subscribe to Our Newsletter
                    </CardTitle>
                    <CardDescription>
                      Choose your preferences and get personalized content delivered to your inbox
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {!isSubscribed ? (
                      <>
                        {/* Email Input */}
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full"
                          />
                        </div>

                        {/* Frequency Selection */}
                        <div className="space-y-2">
                          <Label>Email Frequency</Label>
                          <div className="grid grid-cols-2 gap-2">
                            <Button
                              variant={frequency === "weekly" ? "default" : "outline"}
                              onClick={() => setFrequency("weekly")}
                              className="justify-start"
                            >
                              <Calendar className="w-4 h-4 mr-2" />
                              Weekly
                            </Button>
                            <Button
                              variant={frequency === "monthly" ? "default" : "outline"}
                              onClick={() => setFrequency("monthly")}
                              className="justify-start"
                            >
                              <Calendar className="w-4 h-4 mr-2" />
                              Monthly
                            </Button>
                          </div>
                        </div>

                        {/* Category Selection */}
                        <div className="space-y-3">
                          <Label>Select Categories (Choose at least one)</Label>
                          <div className="space-y-2 max-h-60 overflow-y-auto">
                            {newsletterCategories.map((category) => {
                              const IconComponent = category.icon
                              return (
                                <div key={category.id} className="flex items-center space-x-3">
                                  <Checkbox
                                    id={category.id}
                                    checked={selectedCategories.includes(category.id)}
                                    onCheckedChange={() => handleCategoryToggle(category.id)}
                                  />
                                  <div className="flex items-center gap-3 flex-1">
                                    <div className="p-2 bg-orange-100 rounded-lg">
                                      <IconComponent className="w-4 h-4 text-orange-600" />
                                    </div>
                                    <div className="flex-1">
                                      <Label htmlFor={category.id} className="font-medium cursor-pointer">
                                        {category.name}
                                      </Label>
                                      <p className="text-xs text-gray-600">{category.description}</p>
                                    </div>
                                    <Badge variant="secondary" className="text-xs">
                                      {category.subscribers.toLocaleString()}
                                    </Badge>
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        </div>

                        {/* Subscribe Button */}
                        <Button 
                          className="w-full bg-orange-500 hover:bg-orange-600"
                          onClick={handleSubscribe}
                          disabled={!email || selectedCategories.length === 0}
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          Subscribe to Newsletter
                        </Button>

                        <p className="text-xs text-gray-500 text-center">
                          By subscribing, you agree to receive emails from StudyYourBit. 
                          You can unsubscribe at any time.
                        </p>
                      </>
                    ) : (
                      /* Success State */
                      <div className="text-center py-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                          <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Successfully Subscribed!</h3>
                        <p className="text-gray-600 mb-4">
                          Welcome to our newsletter! You'll receive updates on: {selectedCategories.length} categories
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center mb-6">
                          {selectedCategories.map(catId => {
                            const category = newsletterCategories.find(c => c.id === catId)
                            return category ? (
                              <Badge key={catId} variant="outline">
                                {category.name}
                              </Badge>
                            ) : null
                          })}
                        </div>
                        <Button 
                          variant="outline" 
                          onClick={handleUnsubscribe}
                          className="bg-orange-500 hover:bg-orange-600 text-white"
                        >
                          <Gift className="w-4 h-4 mr-2" />
                          Get Welcome Gift
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Recent Newsletters Preview */}
                <Card className="lg:col-span-1">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-blue-500" />
                      Recent Newsletters
                    </CardTitle>
                    <CardDescription>
                      Preview of our latest newsletter content
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentNewsletters.map((newsletter) => (
                        <div key={newsletter.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-medium text-blue-900 cursor-pointer hover:text-orange-600">
                              {newsletter.title}
                            </h4>
                            <Badge variant="outline" className="text-xs">
                              {newsletter.readTime}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">
                            {newsletter.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>{newsletter.category}</span>
                            <span>{newsletter.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Gift className="w-5 h-5 text-orange-600" />
                        <h4 className="font-medium text-orange-900">Welcome Gift</h4>
                      </div>
                      <p className="text-sm text-orange-800 mb-3">
                        New subscribers get instant access to our "Study Success Guide" - a comprehensive PDF with proven study techniques!
                      </p>
                      <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                        Download Guide
                      </Button>
                    </div>
                  </CardContent>
                </Card>
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