"use client"

import { useState } from "react"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "../app-sidebar"
import { Header } from "../header"
import { Marquee } from "../marquee"
import { Footer } from "../footer"
import { ChatBot } from "../chatbot"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Users, 
  TrendingUp, 
  TrendingDown, 
  Clock, 
  BookOpen, 
  Award,
  Search,
  Filter,
  Download,
  Eye,
  AlertTriangle,
  CheckCircle,
  XCircle,
  BarChart3,
  PieChart,
  Activity,
  Target,
  Calendar,
  Star,
  Zap
} from "lucide-react"

// Mock data for student analytics
const mockStudentData = {
  overview: {
    totalStudents: 15420,
    activeStudents: 12850,
    newStudents: 2340,
    dropoutRate: 8.5,
    averageCompletion: 76.2,
    averageScore: 82.4
  },
  topStudents: [
    {
      id: "1",
      name: "Priya Sharma",
      email: "priya.sharma@email.com",
      avatar: "/placeholder-user.jpg",
      course: "Political Science",
      progress: 95,
      score: 94,
      lastActive: "2 hours ago",
      status: "active"
    },
    {
      id: "2",
      name: "Rahul Patel",
      email: "rahul.patel@email.com",
      avatar: "/placeholder-user.jpg",
      course: "Economics",
      progress: 88,
      score: 91,
      lastActive: "1 day ago",
      status: "active"
    },
    {
      id: "3",
      name: "Anjali Desai",
      email: "anjali.desai@email.com",
      avatar: "/placeholder-user.jpg",
      course: "History",
      progress: 92,
      score: 89,
      lastActive: "3 hours ago",
      status: "active"
    },
    {
      id: "4",
      name: "Vikram Singh",
      email: "vikram.singh@email.com",
      avatar: "/placeholder-user.jpg",
      course: "Political Science",
      progress: 78,
      score: 85,
      lastActive: "5 hours ago",
      status: "at-risk"
    },
    {
      id: "5",
      name: "Meera Iyer",
      email: "meera.iyer@email.com",
      avatar: "/placeholder-user.jpg",
      course: "Economics",
      progress: 82,
      score: 87,
      lastActive: "1 day ago",
      status: "active"
    }
  ],
  coursePerformance: [
    {
      course: "Political Science",
      enrolled: 5420,
      completed: 4120,
      averageScore: 84.2,
      completionRate: 76.0,
      trend: "up"
    },
    {
      course: "Economics",
      enrolled: 4230,
      completed: 3150,
      averageScore: 79.8,
      completionRate: 74.5,
      trend: "up"
    },
    {
      course: "History",
      enrolled: 3890,
      completed: 2980,
      averageScore: 81.5,
      completionRate: 76.6,
      trend: "down"
    }
  ],
  recentActivity: [
    {
      type: "enrollment",
      student: "Priya Sharma",
      course: "Political Science",
      time: "2 hours ago",
      action: "enrolled"
    },
    {
      type: "completion",
      student: "Rahul Patel",
      course: "Economics",
      time: "4 hours ago",
      action: "completed"
    },
    {
      type: "assignment",
      student: "Anjali Desai",
      course: "History",
      time: "6 hours ago",
      action: "submitted"
    },
    {
      type: "quiz",
      student: "Vikram Singh",
      course: "Political Science",
      time: "1 day ago",
      action: "scored 85%"
    }
  ]
}

export function StudentAnalyticsPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [courseFilter, setCourseFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  const handleLoginToggle = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800">Active</Badge>
      case 'at-risk':
        return <Badge className="bg-yellow-100 text-yellow-800">At Risk</Badge>
      case 'inactive':
        return <Badge className="bg-red-100 text-red-800">Inactive</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-800">Unknown</Badge>
    }
  }

  const getTrendIcon = (trend: string) => {
    return trend === "up" ? 
      <TrendingUp className="w-4 h-4 text-green-600" /> : 
      <TrendingDown className="w-4 h-4 text-red-600" />
  }

  const filteredStudents = mockStudentData.topStudents.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || student.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen bg-slate-50">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <div className="min-h-screen bg-slate-50 flex flex-col">
            {/* Header */}
            <Header isLoggedIn={isLoggedIn} onLoginToggle={handleLoginToggle} />

            {/* Marquee */}
            <Marquee text="📊 Student Analytics Dashboard - Monitor performance and track engagement! 👥" />

            {/* Main Content Container */}
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Page Header */}
              <div className="mb-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">Student Analytics</h1>
                    <p className="text-lg text-slate-600">Monitor student performance, engagement, and course completion rates</p>
                  </div>
                  <div className="flex space-x-3">
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Export Data
                    </Button>
                    <Button className="bg-indigo-600 hover:bg-indigo-700">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Generate Report
                    </Button>
                  </div>
                </div>

                {/* Overview Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <Card className="border-l-4 border-l-blue-500">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-slate-600">Total Students</p>
                          <p className="text-2xl font-bold text-slate-900">{mockStudentData.overview.totalStudents.toLocaleString()}</p>
                        </div>
                        <div className="p-3 bg-blue-100 rounded-full">
                          <Users className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                      <div className="mt-4 flex items-center text-sm">
                        <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                        <span className="text-green-600">+12.5%</span>
                        <span className="text-slate-500 ml-1">from last month</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-slate-600">Active Students</p>
                          <p className="text-2xl font-bold text-slate-900">{mockStudentData.overview.activeStudents.toLocaleString()}</p>
                        </div>
                        <div className="p-3 bg-green-100 rounded-full">
                          <Activity className="w-6 h-6 text-green-600" />
                        </div>
                      </div>
                      <div className="mt-4 flex items-center text-sm">
                        <span className="text-slate-500">{Math.round((mockStudentData.overview.activeStudents / mockStudentData.overview.totalStudents) * 100)}%</span>
                        <span className="text-slate-500 ml-1">of total students</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-purple-500">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-slate-600">Avg. Completion</p>
                          <p className="text-2xl font-bold text-slate-900">{mockStudentData.overview.averageCompletion}%</p>
                        </div>
                        <div className="p-3 bg-purple-100 rounded-full">
                          <Target className="w-6 h-6 text-purple-600" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <Progress value={mockStudentData.overview.averageCompletion} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-orange-500">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-slate-600">Avg. Score</p>
                          <p className="text-2xl font-bold text-slate-900">{mockStudentData.overview.averageScore}%</p>
                        </div>
                        <div className="p-3 bg-orange-100 rounded-full">
                          <Award className="w-6 h-6 text-orange-600" />
                        </div>
                      </div>
                      <div className="mt-4 flex items-center text-sm">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-slate-500">Good performance</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Analytics Tabs */}
              <Tabs defaultValue="students" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="students">Top Students</TabsTrigger>
                  <TabsTrigger value="courses">Course Performance</TabsTrigger>
                  <TabsTrigger value="activity">Recent Activity</TabsTrigger>
                  <TabsTrigger value="insights">Insights</TabsTrigger>
                </TabsList>

                <TabsContent value="students" className="space-y-6">
                  {/* Filters */}
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                          <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                            <Input
                              placeholder="Search students..."
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                              className="pl-10"
                            />
                          </div>
                        </div>
                        <Select value={statusFilter} onValueChange={setStatusFilter}>
                          <SelectTrigger className="w-full sm:w-48">
                            <SelectValue placeholder="Filter by status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Status</SelectItem>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="at-risk">At Risk</SelectItem>
                            <SelectItem value="inactive">Inactive</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="outline" className="w-full sm:w-auto">
                          <Filter className="w-4 h-4 mr-2" />
                          More Filters
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Students List */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Top Performing Students</CardTitle>
                      <CardDescription>Students with highest engagement and performance</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {filteredStudents.map((student) => (
                          <div key={student.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50 transition-colors">
                            <div className="flex items-center space-x-4">
                              <Avatar>
                                <AvatarImage src={student.avatar} />
                                <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="flex items-center space-x-2">
                                  <h3 className="font-semibold text-slate-900">{student.name}</h3>
                                  {getStatusBadge(student.status)}
                                </div>
                                <p className="text-sm text-slate-600">{student.email}</p>
                                <p className="text-sm text-slate-500">{student.course}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-6">
                              <div className="text-center">
                                <p className="text-sm text-slate-600">Progress</p>
                                <p className="font-semibold text-slate-900">{student.progress}%</p>
                              </div>
                              <div className="text-center">
                                <p className="text-sm text-slate-600">Score</p>
                                <p className="font-semibold text-slate-900">{student.score}%</p>
                              </div>
                              <div className="text-center">
                                <p className="text-sm text-slate-600">Last Active</p>
                                <p className="text-sm text-slate-500">{student.lastActive}</p>
                              </div>
                              <Button size="sm" variant="outline">
                                <Eye className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="courses" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Course Performance Overview</CardTitle>
                      <CardDescription>Performance metrics across all courses</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {mockStudentData.coursePerformance.map((course, index) => (
                          <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center space-x-4">
                              <div className="p-2 bg-indigo-100 rounded-lg">
                                <BookOpen className="w-5 h-5 text-indigo-600" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-slate-900">{course.course}</h3>
                                <p className="text-sm text-slate-600">{course.enrolled.toLocaleString()} enrolled</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-6">
                              <div className="text-center">
                                <p className="text-sm text-slate-600">Completion</p>
                                <p className="font-semibold text-slate-900">{course.completionRate}%</p>
                              </div>
                              <div className="text-center">
                                <p className="text-sm text-slate-600">Avg. Score</p>
                                <p className="font-semibold text-slate-900">{course.averageScore}%</p>
                              </div>
                              <div className="flex items-center space-x-2">
                                {getTrendIcon(course.trend)}
                                <span className="text-sm text-slate-600">Trend</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="activity" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Student Activity</CardTitle>
                      <CardDescription>Latest student actions and engagement</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {mockStudentData.recentActivity.map((activity, index) => (
                          <div key={index} className="flex items-center space-x-4 p-3 border rounded-lg">
                            <div className="p-2 bg-slate-100 rounded-full">
                              {activity.type === 'enrollment' && <Users className="w-4 h-4 text-blue-600" />}
                              {activity.type === 'completion' && <CheckCircle className="w-4 h-4 text-green-600" />}
                              {activity.type === 'assignment' && <BookOpen className="w-4 h-4 text-purple-600" />}
                              {activity.type === 'quiz' && <Award className="w-4 h-4 text-orange-600" />}
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-slate-900">
                                {activity.student} {activity.action} in {activity.course}
                              </p>
                              <p className="text-xs text-slate-500">{activity.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="insights" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <AlertTriangle className="w-5 h-5 text-yellow-500" />
                          At-Risk Students
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center py-8">
                          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <AlertTriangle className="w-8 h-8 text-yellow-600" />
                          </div>
                          <h3 className="text-lg font-semibold text-slate-900 mb-2">234 Students</h3>
                          <p className="text-slate-600">Need attention due to low engagement</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Zap className="w-5 h-5 text-green-500" />
                          High Performers
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center py-8">
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Zap className="w-8 h-8 text-green-600" />
                          </div>
                          <h3 className="text-lg font-semibold text-slate-900 mb-2">1,247 Students</h3>
                          <p className="text-slate-600">Consistently high performance</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
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