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
import { Progress } from "@/components/ui/progress"
import { 
  Award, 
  TrendingUp, 
  TrendingDown,
  Clock, 
  Target, 
  BookOpen, 
  AlertTriangle,
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
  Lightbulb,
  GraduationCap,
  ChartBar,
  PieChart,
  LineChart
} from "lucide-react"

// Mock data for grades
const gradeCategories = [
  {
    id: "current-semester",
    name: "Current Semester",
    description: "Grades for the ongoing semester",
    icon: BookOpen,
    courses: [
      {
        id: "math-101",
        title: "Mathematics - Calculus",
        subject: "Mathematics",
        grade: "A+",
        percentage: 95,
        credits: 4,
        assignments: 8,
        completed: 8,
        tests: 3,
        average: 92,
        lastUpdated: "2024-01-15",
        assignments: [
          { name: "Assignment 1", score: 95, maxScore: 100, date: "2024-01-10" },
          { name: "Assignment 2", score: 88, maxScore: 100, date: "2024-01-12" },
          { name: "Assignment 3", score: 92, maxScore: 100, date: "2024-01-15" }
        ],
        tests: [
          { name: "Midterm 1", score: 89, maxScore: 100, date: "2024-01-08" },
          { name: "Midterm 2", score: 94, maxScore: 100, date: "2024-01-14" }
        ]
      },
      {
        id: "physics-101",
        title: "Physics - Mechanics",
        subject: "Physics",
        grade: "A",
        percentage: 88,
        credits: 4,
        assignments: 6,
        completed: 5,
        tests: 2,
        average: 85,
        lastUpdated: "2024-01-14",
        assignments: [
          { name: "Lab Report 1", score: 85, maxScore: 100, date: "2024-01-09" },
          { name: "Assignment 1", score: 90, maxScore: 100, date: "2024-01-11" },
          { name: "Lab Report 2", score: 82, maxScore: 100, date: "2024-01-13" }
        ],
        tests: [
          { name: "Midterm 1", score: 87, maxScore: 100, date: "2024-01-07" }
        ]
      },
      {
        id: "chemistry-101",
        title: "Chemistry - Organic",
        subject: "Chemistry",
        grade: "B+",
        percentage: 82,
        credits: 3,
        assignments: 7,
        completed: 6,
        tests: 2,
        average: 79,
        lastUpdated: "2024-01-13",
        assignments: [
          { name: "Lab Report 1", score: 78, maxScore: 100, date: "2024-01-08" },
          { name: "Assignment 1", score: 85, maxScore: 100, date: "2024-01-10" },
          { name: "Lab Report 2", score: 80, maxScore: 100, date: "2024-01-12" }
        ],
        tests: [
          { name: "Midterm 1", score: 75, maxScore: 100, date: "2024-01-06" }
        ]
      }
    ]
  },
  {
    id: "previous-semester",
    name: "Previous Semester",
    description: "Grades from the last semester",
    icon: GraduationCap,
    courses: [
      {
        id: "math-100",
        title: "Mathematics - Algebra",
        subject: "Mathematics",
        grade: "A",
        percentage: 89,
        credits: 4,
        assignments: 10,
        completed: 10,
        tests: 4,
        average: 87,
        lastUpdated: "2023-12-15",
        assignments: [
          { name: "Assignment 1", score: 88, maxScore: 100, date: "2023-11-10" },
          { name: "Assignment 2", score: 92, maxScore: 100, date: "2023-11-15" },
          { name: "Assignment 3", score: 85, maxScore: 100, date: "2023-11-20" }
        ],
        tests: [
          { name: "Midterm 1", score: 86, maxScore: 100, date: "2023-11-08" },
          { name: "Midterm 2", score: 89, maxScore: 100, date: "2023-11-22" },
          { name: "Final", score: 90, maxScore: 100, date: "2023-12-10" }
        ]
      },
      {
        id: "english-101",
        title: "English - Literature",
        subject: "English",
        grade: "A-",
        percentage: 86,
        credits: 3,
        assignments: 8,
        completed: 8,
        tests: 3,
        average: 84,
        lastUpdated: "2023-12-12",
        assignments: [
          { name: "Essay 1", score: 88, maxScore: 100, date: "2023-11-12" },
          { name: "Essay 2", score: 85, maxScore: 100, date: "2023-11-25" },
          { name: "Essay 3", score: 90, maxScore: 100, date: "2023-12-05" }
        ],
        tests: [
          { name: "Midterm", score: 82, maxScore: 100, date: "2023-11-18" },
          { name: "Final", score: 88, maxScore: 100, date: "2023-12-08" }
        ]
      }
    ]
  }
]

const gradeStats = {
  currentGPA: 3.75,
  overallGPA: 3.68,
  totalCredits: 45,
  completedCredits: 42,
  totalCourses: 15,
  completedCourses: 13,
  averageScore: 87,
  improvement: "+0.12",
  highestGrade: "A+",
  lowestGrade: "B-"
}

const recentGrades = [
  {
    id: "recent-1",
    course: "Mathematics - Calculus",
    assignment: "Assignment 3",
    score: 92,
    maxScore: 100,
    date: "2024-01-15",
    type: "assignment"
  },
  {
    id: "recent-2",
    course: "Physics - Mechanics",
    assignment: "Midterm 2",
    score: 94,
    maxScore: 100,
    date: "2024-01-14",
    type: "test"
  },
  {
    id: "recent-3",
    course: "Chemistry - Organic",
    assignment: "Lab Report 2",
    score: 80,
    maxScore: 100,
    date: "2024-01-13",
    type: "lab"
  }
]

const achievements = [
  {
    name: "Dean's List",
    description: "Achieved GPA of 3.75+ for current semester",
    icon: Trophy,
    earned: "2024-01-15",
    type: "academic"
  },
  {
    name: "Perfect Score",
    description: "Scored 100% in Mathematics Assignment 1",
    icon: Star,
    earned: "2024-01-10",
    type: "performance"
  },
  {
    name: "Consistent Performer",
    description: "Maintained A grade in 5 consecutive courses",
    icon: TrendingUp,
    earned: "2024-01-08",
    type: "consistency"
  }
]

export default function GradesPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [selectedSemester, setSelectedSemester] = useState("current-semester")

  const handleLoginToggle = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  const handleViewDetails = (courseId: string, courseTitle: string) => {
    console.log(`Viewing details for course: ${courseTitle} (${courseId})`)
    alert(`Viewing detailed grades for ${courseTitle}`)
  }

  const handleDownloadTranscript = () => {
    console.log("Downloading transcript")
    alert("Downloading your academic transcript...")
  }

  const getGradeColor = (grade: string) => {
    if (grade.includes('A')) return 'text-green-600'
    if (grade.includes('B')) return 'text-blue-600'
    if (grade.includes('C')) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getGradeBadgeColor = (grade: string) => {
    if (grade.includes('A')) return 'bg-green-100 text-green-800'
    if (grade.includes('B')) return 'bg-blue-100 text-blue-800'
    if (grade.includes('C')) return 'bg-yellow-100 text-yellow-800'
    return 'bg-red-100 text-red-800'
  }

  const getPercentageColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600'
    if (percentage >= 80) return 'text-blue-600'
    if (percentage >= 70) return 'text-yellow-600'
    return 'text-red-600'
  }

  const calculateGPA = (courses: any[]) => {
    const gradePoints = { 'A+': 4.0, 'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7, 'C+': 2.3, 'C': 2.0, 'C-': 1.7, 'D+': 1.3, 'D': 1.0, 'F': 0.0 }
    const totalPoints = courses.reduce((sum, course) => sum + (gradePoints[course.grade as keyof typeof gradePoints] * course.credits), 0)
    const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0)
    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : '0.00'
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
            <Marquee text="📊 Track your academic performance and celebrate your achievements! 🎓" />

            {/* Main Content Container */}
            <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Page Header */}
              <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">My Grades</h1>
                <p className="text-lg text-gray-600">Track your academic performance and achievements</p>
              </div>

              {/* Grade Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Current GPA</CardTitle>
                      <Award className="w-6 h-6" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-2">{gradeStats.currentGPA}</div>
                    <div className="text-blue-100 text-sm">This semester</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Overall GPA</CardTitle>
                      <TrendingUp className="w-6 h-6" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-2">{gradeStats.overallGPA}</div>
                    <div className="text-green-100 text-sm">{gradeStats.improvement} from last semester</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Credits</CardTitle>
                      <GraduationCap className="w-6 h-6" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-2">{gradeStats.completedCredits}/{gradeStats.totalCredits}</div>
                    <div className="text-purple-100 text-sm">Completed credits</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Average Score</CardTitle>
                      <BarChart className="w-6 h-6" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-2">{gradeStats.averageScore}%</div>
                    <div className="text-orange-100 text-sm">Across all courses</div>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content Tabs */}
              <Tabs defaultValue="overview" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="courses">Course Grades</TabsTrigger>
                  <TabsTrigger value="achievements">Achievements</TabsTrigger>
                  <TabsTrigger value="transcript">Transcript</TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Recent Grades */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Activity className="w-5 h-5 text-blue-500" />
                          Recent Grades
                        </CardTitle>
                        <CardDescription>Your latest assignment and test scores</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {recentGrades.map((grade) => (
                            <div key={grade.id} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                              <div className="p-2 bg-orange-100 rounded-full">
                                {grade.type === 'assignment' && <FileText className="w-4 h-4 text-orange-600" />}
                                {grade.type === 'test' && <Brain className="w-4 h-4 text-orange-600" />}
                                {grade.type === 'lab' && <Lightbulb className="w-4 h-4 text-orange-600" />}
                              </div>
                              
                              <div className="flex-1">
                                <div className="font-medium text-sm">{grade.course}</div>
                                <div className="text-xs text-gray-600">{grade.assignment}</div>
                              </div>
                              
                              <div className="text-right">
                                <div className={`text-lg font-bold ${getPercentageColor(grade.score)}`}>
                                  {grade.score}/{grade.maxScore}
                                </div>
                                <div className="text-xs text-gray-500">{grade.date}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Grade Distribution */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <PieChart className="w-5 h-5 text-green-500" />
                          Grade Distribution
                        </CardTitle>
                        <CardDescription>Breakdown of your grades this semester</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                              <span className="text-sm">A Grades</span>
                            </div>
                            <span className="text-sm font-medium">60%</span>
                          </div>
                          <Progress value={60} className="h-2" />
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                              <span className="text-sm">B Grades</span>
                            </div>
                            <span className="text-sm font-medium">30%</span>
                          </div>
                          <Progress value={30} className="h-2" />
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                              <span className="text-sm">C Grades</span>
                            </div>
                            <span className="text-sm font-medium">10%</span>
                          </div>
                          <Progress value={10} className="h-2" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                {/* Course Grades Tab */}
                <TabsContent value="courses" className="space-y-8">
                  {gradeCategories.map((category) => (
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

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {category.courses.map((course) => (
                          <Card key={course.id} className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <CardTitle className="text-lg mb-2">{course.title}</CardTitle>
                                  <div className="flex items-center gap-2 mb-2">
                                    <Badge variant="outline" className="text-xs">
                                      {course.subject}
                                    </Badge>
                                    <Badge className="text-xs bg-gray-100 text-gray-800">
                                      {course.credits} credits
                                    </Badge>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className={`text-2xl font-bold ${getGradeColor(course.grade)}`}>
                                    {course.grade}
                                  </div>
                                  <div className={`text-sm ${getPercentageColor(course.percentage)}`}>
                                    {course.percentage}%
                                  </div>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-3 mb-4">
                                <div className="flex items-center justify-between text-sm">
                                  <span>Assignments:</span>
                                  <span>{course.completed}/{course.assignments} completed</span>
                                </div>
                                <Progress value={(course.completed / course.assignments) * 100} className="h-2" />
                                
                                <div className="flex items-center justify-between text-sm">
                                  <span>Tests:</span>
                                  <span>{course.tests} taken</span>
                                </div>
                                
                                <div className="flex items-center justify-between text-sm">
                                  <span>Average Score:</span>
                                  <span className={getPercentageColor(course.average)}>{course.average}%</span>
                                </div>
                                
                                <div className="flex items-center justify-between text-sm">
                                  <span>Last Updated:</span>
                                  <span>{course.lastUpdated}</span>
                                </div>
                              </div>

                              <div className="mb-4">
                                <h4 className="text-sm font-medium mb-2">Recent Assignments:</h4>
                                <div className="space-y-2">
                                  {course.assignments.slice(0, 3).map((assignment, idx) => (
                                    <div key={idx} className="flex items-center justify-between text-xs">
                                      <span>{assignment.name}</span>
                                      <span className={getPercentageColor(assignment.score)}>
                                        {assignment.score}/{assignment.maxScore}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <Button 
                                className="w-full bg-orange-500 hover:bg-orange-600"
                                onClick={() => handleViewDetails(course.id, course.title)}
                              >
                                View Detailed Grades
                              </Button>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </TabsContent>

                {/* Achievements Tab */}
                <TabsContent value="achievements" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-yellow-500" />
                        Academic Achievements
                      </CardTitle>
                      <CardDescription>Celebrate your academic milestones and accomplishments</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {achievements.map((achievement, index) => {
                          const IconComponent = achievement.icon
                          return (
                            <Card key={index} className="border-yellow-200 bg-yellow-50">
                              <CardHeader>
                                <div className="flex items-center gap-2 mb-2">
                                  <IconComponent className="w-5 h-5 text-yellow-600" />
                                  <span className="text-sm font-medium text-yellow-700">{achievement.type}</span>
                                </div>
                                <CardTitle className="text-lg">{achievement.name}</CardTitle>
                                <CardDescription>{achievement.description}</CardDescription>
                              </CardHeader>
                              <CardContent>
                                <div className="text-xs text-gray-600">Earned: {achievement.earned}</div>
                              </CardContent>
                            </Card>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Transcript Tab */}
                <TabsContent value="transcript" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-blue-500" />
                        Academic Transcript
                      </CardTitle>
                      <CardDescription>Download your complete academic record</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="text-center p-4 border rounded-lg">
                            <div className="text-2xl font-bold text-blue-600">{gradeStats.overallGPA}</div>
                            <div className="text-sm text-gray-600">Overall GPA</div>
                          </div>
                          <div className="text-center p-4 border rounded-lg">
                            <div className="text-2xl font-bold text-green-600">{gradeStats.totalCredits}</div>
                            <div className="text-sm text-gray-600">Total Credits</div>
                          </div>
                          <div className="text-center p-4 border rounded-lg">
                            <div className="text-2xl font-bold text-purple-600">{gradeStats.totalCourses}</div>
                            <div className="text-sm text-gray-600">Total Courses</div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h3 className="font-semibold">Semester Summary</h3>
                          {gradeCategories.map((category) => (
                            <div key={category.id} className="border rounded-lg p-4">
                              <div className="flex items-center justify-between mb-3">
                                <h4 className="font-medium">{category.name}</h4>
                                <Badge className={getGradeBadgeColor(calculateGPA(category.courses))}>
                                  GPA: {calculateGPA(category.courses)}
                                </Badge>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {category.courses.map((course) => (
                                  <div key={course.id} className="flex items-center justify-between text-sm">
                                    <span>{course.title}</span>
                                    <div className="flex items-center gap-2">
                                      <span className={getGradeColor(course.grade)}>{course.grade}</span>
                                      <span className="text-gray-600">({course.credits} cr)</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="flex gap-4">
                          <Button 
                            className="bg-blue-500 hover:bg-blue-600"
                            onClick={handleDownloadTranscript}
                          >
                            <FileText className="w-4 h-4 mr-2" />
                            Download Transcript
                          </Button>
                          <Button variant="outline">
                            <Eye className="w-4 h-4 mr-2" />
                            Preview Transcript
                          </Button>
                        </div>
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