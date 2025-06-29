"use client"

import { useState } from "react"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Header } from "@/components/header"
import { Marquee } from "@/components/marquee"
import { Footer } from "@/components/footer"
import { ChatBot } from "@/components/chatbot"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  BarChart3, 
  Clock, 
  Target, 
  TrendingUp, 
  BookOpen, 
  Award, 
  Calendar,
  Play,
  CheckCircle,
  AlertCircle,
  Star,
  Users,
  Activity,
  Zap,
  Trophy,
  Bookmark,
  Eye,
  Brain,
  Timer,
  BarChart
} from "lucide-react"

// Mock data for analytics
const mockAnalytics = {
  overallStats: {
    totalCourses: 12,
    completedCourses: 8,
    totalTimeWatched: 156, // hours
    averageScore: 87,
    completionRate: 67,
    currentStreak: 15, // days
    totalMarks: 2340,
    maxMarks: 2800
  },
  subjectPerformance: [
    { subject: "Mathematics", score: 92, timeSpent: 45, completion: 85, testsTaken: 12 },
    { subject: "Physics", score: 88, timeSpent: 38, completion: 78, testsTaken: 10 },
    { subject: "Chemistry", score: 85, timeSpent: 32, completion: 72, testsTaken: 8 },
    { subject: "Biology", score: 90, timeSpent: 41, completion: 88, testsTaken: 15 },
    { subject: "Computer Science", score: 94, timeSpent: 28, completion: 95, testsTaken: 6 }
  ],
  weeklyProgress: [
    { week: "Week 1", hours: 12, tests: 3, score: 85 },
    { week: "Week 2", hours: 15, tests: 4, score: 88 },
    { week: "Week 3", hours: 18, tests: 5, score: 92 },
    { week: "Week 4", hours: 14, tests: 3, score: 87 },
    { week: "Week 5", hours: 20, tests: 6, score: 90 },
    { week: "Week 6", hours: 16, tests: 4, score: 89 },
    { week: "Week 7", hours: 22, tests: 7, score: 93 }
  ],
  recentActivity: [
    { type: "test", subject: "Mathematics", score: 95, date: "2024-01-15", time: "2 hours ago" },
    { type: "video", subject: "Physics", duration: "45 min", date: "2024-01-14", time: "1 day ago" },
    { type: "assignment", subject: "Chemistry", status: "completed", date: "2024-01-13", time: "2 days ago" },
    { type: "quiz", subject: "Biology", score: 88, date: "2024-01-12", time: "3 days ago" },
    { type: "practice", subject: "Computer Science", questions: 25, date: "2024-01-11", time: "4 days ago" }
  ],
  achievements: [
    { name: "Perfect Score", description: "Scored 100% in Mathematics", icon: Star, earned: "2024-01-15" },
    { name: "Study Streak", description: "15 days of continuous study", icon: Zap, earned: "2024-01-14" },
    { name: "Course Completion", description: "Completed Physics Fundamentals", icon: CheckCircle, earned: "2024-01-10" },
    { name: "Time Master", description: "Watched 100+ hours of content", icon: Clock, earned: "2024-01-08" }
  ]
}

export default function AnalyticsPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [selectedPeriod, setSelectedPeriod] = useState("7d")

  const handleLoginToggle = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 80) return "text-blue-600"
    if (score >= 70) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreBadgeColor = (score: number) => {
    if (score >= 90) return "bg-green-100 text-green-800"
    if (score >= 80) return "bg-blue-100 text-blue-800"
    if (score >= 70) return "bg-yellow-100 text-yellow-800"
    return "bg-red-100 text-red-800"
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
            <Marquee text="📊 Track your learning progress and performance metrics! 🎯" />

            {/* Main Content Container */}
            <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Page Header */}
              <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">My Progress Analytics</h1>
                <p className="text-lg text-gray-600">Track your learning journey and performance metrics</p>
              </div>

              {/* Overall Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Total Score</CardTitle>
                      <Award className="w-6 h-6" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-2">
                      {mockAnalytics.overallStats.totalMarks}/{mockAnalytics.overallStats.maxMarks}
                    </div>
                    <div className="text-blue-100 text-sm">
                      {Math.round((mockAnalytics.overallStats.totalMarks / mockAnalytics.overallStats.maxMarks) * 100)}% of total marks
                    </div>
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
                    <div className="text-3xl font-bold mb-2">{mockAnalytics.overallStats.averageScore}%</div>
                    <div className="text-green-100 text-sm">Across all subjects</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Time Watched</CardTitle>
                      <Clock className="w-6 h-6" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-2">{mockAnalytics.overallStats.totalTimeWatched}h</div>
                    <div className="text-purple-100 text-sm">Total learning time</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Completion Rate</CardTitle>
                      <Target className="w-6 h-6" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-2">{mockAnalytics.overallStats.completionRate}%</div>
                    <div className="text-orange-100 text-sm">
                      {mockAnalytics.overallStats.completedCourses}/{mockAnalytics.overallStats.totalCourses} courses
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content Tabs */}
              <Tabs defaultValue="overview" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="subjects">Subject Performance</TabsTrigger>
                  <TabsTrigger value="progress">Progress Timeline</TabsTrigger>
                  <TabsTrigger value="activity">Recent Activity</TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Study Streak & Achievements */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Zap className="w-5 h-5 text-yellow-500" />
                          Study Streak & Achievements
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
                          <div>
                            <div className="text-2xl font-bold text-yellow-600">{mockAnalytics.overallStats.currentStreak}</div>
                            <div className="text-sm text-gray-600">Days streak</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-600">Keep it up!</div>
                            <div className="text-xs text-gray-500">🔥 On fire</div>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <h4 className="font-semibold text-sm">Recent Achievements</h4>
                          {mockAnalytics.achievements.slice(0, 3).map((achievement, index) => {
                            const IconComponent = achievement.icon
                            return (
                              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                <div className="p-2 bg-orange-100 rounded-full">
                                  <IconComponent className="w-4 h-4 text-orange-600" />
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium text-sm">{achievement.name}</div>
                                  <div className="text-xs text-gray-600">{achievement.description}</div>
                                </div>
                                <div className="text-xs text-gray-500">{achievement.earned}</div>
                              </div>
                            )
                          })}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Performance Summary */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <BarChart3 className="w-5 h-5 text-blue-500" />
                          Performance Summary
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Course Completion</span>
                            <span className="text-sm text-gray-600">{mockAnalytics.overallStats.completionRate}%</span>
                          </div>
                          <Progress value={mockAnalytics.overallStats.completionRate} className="h-2" />
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Average Score</span>
                            <span className="text-sm text-gray-600">{mockAnalytics.overallStats.averageScore}%</span>
                          </div>
                          <Progress value={mockAnalytics.overallStats.averageScore} className="h-2" />
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Study Consistency</span>
                            <span className="text-sm text-gray-600">85%</span>
                          </div>
                          <Progress value={85} className="h-2" />
                        </div>
                        
                        <div className="pt-4 border-t">
                          <div className="grid grid-cols-2 gap-4 text-center">
                            <div>
                              <div className="text-2xl font-bold text-blue-600">{mockAnalytics.overallStats.totalCourses}</div>
                              <div className="text-xs text-gray-600">Total Courses</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-green-600">{mockAnalytics.overallStats.completedCourses}</div>
                              <div className="text-xs text-gray-600">Completed</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                {/* Subject Performance Tab */}
                <TabsContent value="subjects" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-green-500" />
                        Subject-wise Performance
                      </CardTitle>
                      <CardDescription>Detailed breakdown of your performance across different subjects</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {mockAnalytics.subjectPerformance.map((subject, index) => (
                          <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                                  {subject.subject.charAt(0)}
                                </div>
                                <div>
                                  <h3 className="font-semibold">{subject.subject}</h3>
                                  <p className="text-sm text-gray-600">{subject.testsTaken} tests taken</p>
                                </div>
                              </div>
                              <Badge className={getScoreBadgeColor(subject.score)}>
                                {subject.score}%
                              </Badge>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                  <span>Score</span>
                                  <span className={getScoreColor(subject.score)}>{subject.score}%</span>
                                </div>
                                <Progress value={subject.score} className="h-2" />
                              </div>
                              
                              <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                  <span>Time Spent</span>
                                  <span className="text-blue-600">{subject.timeSpent}h</span>
                                </div>
                                <Progress value={(subject.timeSpent / 50) * 100} className="h-2" />
                              </div>
                              
                              <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                  <span>Completion</span>
                                  <span className="text-green-600">{subject.completion}%</span>
                                </div>
                                <Progress value={subject.completion} className="h-2" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Progress Timeline Tab */}
                <TabsContent value="progress" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Activity className="w-5 h-5 text-purple-500" />
                        Weekly Progress Timeline
                      </CardTitle>
                      <CardDescription>Your learning progress over the last 7 weeks</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {mockAnalytics.weeklyProgress.map((week, index) => (
                          <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                            <div className="w-16 text-center">
                              <div className="font-semibold text-sm">{week.week}</div>
                              <div className="text-xs text-gray-600">{week.hours}h</div>
                            </div>
                            
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium">Study Hours</span>
                                <span className="text-sm text-gray-600">{week.hours} hours</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" 
                                  style={{ width: `${(week.hours / 25) * 100}%` }}
                                ></div>
                              </div>
                            </div>
                            
                            <div className="text-center">
                              <div className="text-sm font-medium">{week.tests} tests</div>
                              <div className="text-xs text-gray-600">taken</div>
                            </div>
                            
                            <div className="text-center">
                              <div className={`text-sm font-medium ${getScoreColor(week.score)}`}>
                                {week.score}%
                              </div>
                              <div className="text-xs text-gray-600">avg score</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Recent Activity Tab */}
                <TabsContent value="activity" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Eye className="w-5 h-5 text-indigo-500" />
                        Recent Learning Activity
                      </CardTitle>
                      <CardDescription>Your latest learning activities and achievements</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {mockAnalytics.recentActivity.map((activity, index) => (
                          <div key={index} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                            <div className="p-2 bg-orange-100 rounded-full">
                              {activity.type === 'test' && <Brain className="w-4 h-4 text-orange-600" />}
                              {activity.type === 'video' && <Play className="w-4 h-4 text-orange-600" />}
                              {activity.type === 'assignment' && <CheckCircle className="w-4 h-4 text-orange-600" />}
                              {activity.type === 'quiz' && <Target className="w-4 h-4 text-orange-600" />}
                              {activity.type === 'practice' && <BookOpen className="w-4 h-4 text-orange-600" />}
                            </div>
                            
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="font-medium capitalize">{activity.type}</span>
                                <span className="text-gray-600">•</span>
                                <span className="text-gray-600">{activity.subject}</span>
                              </div>
                              <div className="text-sm text-gray-600">
                                {activity.type === 'test' && `Scored ${activity.score}%`}
                                {activity.type === 'video' && `Watched ${activity.duration}`}
                                {activity.type === 'assignment' && `Status: ${activity.status}`}
                                {activity.type === 'quiz' && `Scored ${activity.score}%`}
                                {activity.type === 'practice' && `Completed ${activity.questions} questions`}
                              </div>
                            </div>
                            
                            <div className="text-right">
                              <div className="text-sm text-gray-600">{activity.date}</div>
                              <div className="text-xs text-gray-500">{activity.time}</div>
                            </div>
                          </div>
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