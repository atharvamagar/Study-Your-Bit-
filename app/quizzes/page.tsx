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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  BookOpen, 
  Clock, 
  Target, 
  TrendingUp, 
  Award, 
  Play,
  CheckCircle,
  Star,
  Users,
  Activity,
  Zap,
  Brain,
  Timer,
  BarChart,
  FileText,
  Bookmark,
  Eye,
  Calendar,
  Trophy,
  Lightbulb
} from "lucide-react"

// Mock data for quizzes
const quizCategories = [
  {
    id: "subject-wise",
    name: "Subject-wise Quizzes",
    description: "Test your knowledge in specific subjects",
    icon: BookOpen,
    quizzes: [
      {
        id: "math-basic",
        title: "Mathematics Fundamentals",
        subject: "Mathematics",
        questions: 25,
        duration: "30 min",
        difficulty: "Beginner",
        attempts: 1247,
        avgScore: 78,
        topics: ["Algebra", "Geometry", "Calculus"],
        isCompleted: false
      },
      {
        id: "physics-mechanics",
        title: "Physics: Mechanics",
        subject: "Physics",
        questions: 30,
        duration: "45 min",
        difficulty: "Intermediate",
        attempts: 892,
        avgScore: 72,
        topics: ["Kinematics", "Dynamics", "Energy"],
        isCompleted: true
      },
      {
        id: "chemistry-organic",
        title: "Organic Chemistry",
        subject: "Chemistry",
        questions: 20,
        duration: "25 min",
        difficulty: "Advanced",
        attempts: 567,
        avgScore: 65,
        topics: ["Alkanes", "Alkenes", "Reactions"],
        isCompleted: false
      }
    ]
  },
  {
    id: "exam-pattern",
    name: "Exam Pattern Quizzes",
    description: "Practice with real exam-style questions",
    icon: Target,
    quizzes: [
      {
        id: "jee-main",
        title: "JEE Main Mock Test",
        subject: "Engineering",
        questions: 75,
        duration: "3 hours",
        difficulty: "Advanced",
        attempts: 2341,
        avgScore: 68,
        topics: ["Physics", "Chemistry", "Mathematics"],
        isCompleted: false
      },
      {
        id: "neet-mock",
        title: "NEET Mock Test",
        subject: "Medical",
        questions: 180,
        duration: "3.5 hours",
        difficulty: "Advanced",
        attempts: 1892,
        avgScore: 71,
        topics: ["Biology", "Chemistry", "Physics"],
        isCompleted: false
      },
      {
        id: "cat-mock",
        title: "CAT Mock Test",
        subject: "Management",
        questions: 66,
        duration: "2 hours",
        difficulty: "Advanced",
        attempts: 945,
        avgScore: 74,
        topics: ["Quantitative", "Verbal", "Logical"],
        isCompleted: true
      }
    ]
  },
  {
    id: "topic-wise",
    name: "Topic-wise Practice",
    description: "Focus on specific topics and concepts",
    icon: Lightbulb,
    quizzes: [
      {
        id: "algebra-basics",
        title: "Algebra Basics",
        subject: "Mathematics",
        questions: 15,
        duration: "20 min",
        difficulty: "Beginner",
        attempts: 2156,
        avgScore: 82,
        topics: ["Linear Equations", "Quadratic Equations"],
        isCompleted: true
      },
      {
        id: "thermodynamics",
        title: "Thermodynamics",
        subject: "Physics",
        questions: 18,
        duration: "25 min",
        difficulty: "Intermediate",
        attempts: 1234,
        avgScore: 69,
        topics: ["Laws", "Processes", "Cycles"],
        isCompleted: false
      },
      {
        id: "biochemistry",
        title: "Biochemistry Fundamentals",
        subject: "Biology",
        questions: 22,
        duration: "30 min",
        difficulty: "Intermediate",
        attempts: 876,
        avgScore: 73,
        topics: ["Proteins", "Carbohydrates", "Lipids"],
        isCompleted: false
      }
    ]
  }
]

const recentQuizzes = [
  {
    id: "recent-1",
    title: "Mathematics Fundamentals",
    subject: "Mathematics",
    score: 85,
    date: "2024-01-15",
    time: "2 hours ago",
    questions: 25,
    correct: 21
  },
  {
    id: "recent-2",
    title: "Physics: Mechanics",
    subject: "Physics",
    score: 78,
    date: "2024-01-14",
    time: "1 day ago",
    questions: 30,
    correct: 23
  },
  {
    id: "recent-3",
    title: "Organic Chemistry",
    subject: "Chemistry",
    score: 92,
    date: "2024-01-13",
    time: "2 days ago",
    questions: 20,
    correct: 18
  }
]

const quizStats = {
  totalQuizzes: 45,
  completedQuizzes: 23,
  averageScore: 76,
  totalTime: 28, // hours
  currentStreak: 7, // days
  totalQuestions: 1250,
  correctAnswers: 950
}

export default function QuizzesPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLoginToggle = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  const handleStartQuiz = (quizId: string, quizTitle: string) => {
    console.log(`Starting quiz: ${quizTitle} (${quizId})`)
    alert(`Starting quiz: ${quizTitle}`)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'bg-green-100 text-green-800'
      case 'intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600'
    if (score >= 80) return 'text-blue-600'
    if (score >= 70) return 'text-yellow-600'
    return 'text-red-600'
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
            <Marquee text="🧠 Test your knowledge with our comprehensive quiz collection! 📝" />

            {/* Main Content Container */}
            <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Page Header */}
              <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Quizzes & Practice Tests</h1>
                <p className="text-lg text-gray-600">Enhance your learning with interactive quizzes and mock tests</p>
              </div>

              {/* Quiz Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Total Quizzes</CardTitle>
                      <FileText className="w-6 h-6" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-2">{quizStats.totalQuizzes}</div>
                    <div className="text-blue-100 text-sm">Available quizzes</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Average Score</CardTitle>
                      <TrendingUp className="w-6 h-6" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-2">{quizStats.averageScore}%</div>
                    <div className="text-green-100 text-sm">Your performance</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Study Time</CardTitle>
                      <Clock className="w-6 h-6" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-2">{quizStats.totalTime}h</div>
                    <div className="text-purple-100 text-sm">Total practice time</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Current Streak</CardTitle>
                      <Zap className="w-6 h-6" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-2">{quizStats.currentStreak}</div>
                    <div className="text-orange-100 text-sm">Days of practice</div>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content Tabs */}
              <Tabs defaultValue="all" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="all">All Quizzes</TabsTrigger>
                  <TabsTrigger value="recent">Recent Activity</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                  <TabsTrigger value="recommended">Recommended</TabsTrigger>
                </TabsList>

                {/* All Quizzes Tab */}
                <TabsContent value="all" className="space-y-8">
                  {quizCategories.map((category) => (
                    <div key={category.id} className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-orange-100 rounded-lg">
                          <category.icon className="w-6 h-6 text-orange-600" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
                          <p className="text-gray-600">{category.description}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.quizzes.map((quiz) => (
                          <Card key={quiz.id} className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <CardTitle className="text-lg mb-2">{quiz.title}</CardTitle>
                                  <div className="flex items-center gap-2 mb-2">
                                    <Badge variant="outline" className="text-xs">
                                      {quiz.subject}
                                    </Badge>
                                    <Badge className={`text-xs ${getDifficultyColor(quiz.difficulty)}`}>
                                      {quiz.difficulty}
                                    </Badge>
                                  </div>
                                </div>
                                {quiz.isCompleted && (
                                  <CheckCircle className="w-5 h-5 text-green-500" />
                                )}
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-3 mb-4">
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-gray-600">Questions:</span>
                                  <span className="font-medium">{quiz.questions}</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-gray-600">Duration:</span>
                                  <span className="font-medium">{quiz.duration}</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-gray-600">Attempts:</span>
                                  <span className="font-medium">{quiz.attempts.toLocaleString()}</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-gray-600">Avg Score:</span>
                                  <span className="font-medium">{quiz.avgScore}%</span>
                                </div>
                              </div>

                              <div className="mb-4">
                                <h4 className="text-sm font-medium mb-2">Topics:</h4>
                                <div className="flex flex-wrap gap-1">
                                  {quiz.topics.map((topic, idx) => (
                                    <Badge key={idx} variant="secondary" className="text-xs">
                                      {topic}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <Button 
                                className="w-full bg-orange-500 hover:bg-orange-600"
                                onClick={() => handleStartQuiz(quiz.id, quiz.title)}
                              >
                                {quiz.isCompleted ? 'Retake Quiz' : 'Start Quiz'}
                              </Button>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </TabsContent>

                {/* Recent Activity Tab */}
                <TabsContent value="recent" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Activity className="w-5 h-5 text-blue-500" />
                        Recent Quiz Activity
                      </CardTitle>
                      <CardDescription>Your latest quiz attempts and scores</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentQuizzes.map((quiz) => (
                          <div key={quiz.id} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                            <div className="p-2 bg-orange-100 rounded-full">
                              <Brain className="w-4 h-4 text-orange-600" />
                            </div>
                            
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium">{quiz.title}</span>
                                <Badge variant="outline" className="text-xs">
                                  {quiz.subject}
                                </Badge>
                              </div>
                              <div className="text-sm text-gray-600">
                                {quiz.correct}/{quiz.questions} questions correct
                              </div>
                            </div>
                            
                            <div className="text-right">
                              <div className={`text-lg font-bold ${getScoreColor(quiz.score)}`}>
                                {quiz.score}%
                              </div>
                              <div className="text-xs text-gray-500">{quiz.time}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Completed Quizzes Tab */}
                <TabsContent value="completed" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        Completed Quizzes
                      </CardTitle>
                      <CardDescription>Quizzes you have successfully completed</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {quizCategories.flatMap(category => 
                          category.quizzes.filter(quiz => quiz.isCompleted)
                        ).map((quiz) => (
                          <Card key={quiz.id} className="border-green-200 bg-green-50">
                            <CardHeader className="pb-2">
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-sm">{quiz.title}</CardTitle>
                                <CheckCircle className="w-4 h-4 text-green-500" />
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="text-xs text-gray-600 mb-2">
                                {quiz.subject} • {quiz.difficulty}
                              </div>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="w-full text-xs"
                                onClick={() => handleStartQuiz(quiz.id, quiz.title)}
                              >
                                Retake Quiz
                              </Button>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Recommended Quizzes Tab */}
                <TabsContent value="recommended" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-500" />
                        Recommended for You
                      </CardTitle>
                      <CardDescription>Personalized quiz recommendations based on your performance</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {quizCategories[0].quizzes.slice(0, 3).map((quiz) => (
                          <Card key={quiz.id} className="border-orange-200 bg-orange-50">
                            <CardHeader>
                              <div className="flex items-center gap-2 mb-2">
                                <Star className="w-4 h-4 text-orange-500" />
                                <span className="text-xs font-medium text-orange-700">Recommended</span>
                              </div>
                              <CardTitle className="text-lg">{quiz.title}</CardTitle>
                              <CardDescription>{quiz.subject} • {quiz.difficulty}</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-2 mb-4">
                                <div className="flex items-center justify-between text-sm">
                                  <span>Questions:</span>
                                  <span className="font-medium">{quiz.questions}</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                  <span>Duration:</span>
                                  <span className="font-medium">{quiz.duration}</span>
                                </div>
                              </div>
                              <Button 
                                className="w-full bg-orange-500 hover:bg-orange-600"
                                onClick={() => handleStartQuiz(quiz.id, quiz.title)}
                              >
                                Start Quiz
                              </Button>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
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