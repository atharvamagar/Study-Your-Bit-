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
import { Calendar } from "@/components/ui/calendar"
import { 
  Calendar as CalendarIcon,
  Clock, 
  Target, 
  TrendingUp, 
  Award, 
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
  MapPin,
  Bell,
  BookOpen,
  GraduationCap,
  Building,
  Clock3
} from "lucide-react"

// Mock data for exam schedule
const examCategories = [
  {
    id: "upcoming",
    name: "Upcoming Exams",
    description: "Exams scheduled in the next 30 days",
    icon: Clock,
    exams: [
      {
        id: "jee-main-2024",
        title: "JEE Main 2024 - January Session",
        type: "National",
        subject: "Engineering",
        date: "2024-01-27",
        time: "09:00 AM - 12:00 PM",
        duration: "3 hours",
        venue: "Multiple Centers",
        status: "upcoming",
        daysLeft: 12,
        registrationDeadline: "2024-01-20",
        syllabus: ["Physics", "Chemistry", "Mathematics"],
        importantNotes: ["Admit card required", "Valid ID proof needed", "No calculators allowed"]
      },
      {
        id: "neet-2024",
        title: "NEET 2024 - Main Exam",
        type: "National",
        subject: "Medical",
        date: "2024-02-15",
        time: "02:00 PM - 05:00 PM",
        duration: "3.5 hours",
        venue: "Multiple Centers",
        status: "upcoming",
        daysLeft: 31,
        registrationDeadline: "2024-02-08",
        syllabus: ["Biology", "Chemistry", "Physics"],
        importantNotes: ["Admit card required", "Valid ID proof needed", "No electronic devices"]
      },
      {
        id: "cat-2024",
        title: "CAT 2024 - Management",
        type: "National",
        subject: "Management",
        date: "2024-02-25",
        time: "10:00 AM - 12:00 PM",
        duration: "2 hours",
        venue: "Multiple Centers",
        status: "upcoming",
        daysLeft: 41,
        registrationDeadline: "2024-02-18",
        syllabus: ["Quantitative Aptitude", "Verbal Ability", "Logical Reasoning"],
        importantNotes: ["Admit card required", "Valid ID proof needed", "No calculators allowed"]
      }
    ]
  },
  {
    id: "university",
    name: "University Exams",
    description: "Regular university semester examinations",
    icon: GraduationCap,
    exams: [
      {
        id: "mu-sem1-2024",
        title: "Mumbai University - Semester 1",
        type: "University",
        subject: "B.Sc. Computer Science",
        date: "2024-01-30",
        time: "10:00 AM - 01:00 PM",
        duration: "3 hours",
        venue: "University Campus",
        status: "upcoming",
        daysLeft: 15,
        registrationDeadline: "2024-01-25",
        syllabus: ["Programming Fundamentals", "Mathematics", "Computer Architecture"],
        importantNotes: ["Hall ticket required", "University ID mandatory", "Dress code applicable"]
      },
      {
        id: "du-sem2-2024",
        title: "Delhi University - Semester 2",
        type: "University",
        subject: "B.A. Economics",
        date: "2024-02-10",
        time: "02:00 PM - 05:00 PM",
        duration: "3 hours",
        venue: "University Campus",
        status: "upcoming",
        daysLeft: 26,
        registrationDeadline: "2024-02-05",
        syllabus: ["Microeconomics", "Macroeconomics", "Statistics"],
        importantNotes: ["Hall ticket required", "University ID mandatory", "No mobile phones"]
      }
    ]
  },
  {
    id: "competitive",
    name: "Competitive Exams",
    description: "Government and competitive examinations",
    icon: Target,
    exams: [
      {
        id: "upsc-prelims-2024",
        title: "UPSC Civil Services Prelims 2024",
        type: "Government",
        subject: "Civil Services",
        date: "2024-03-15",
        time: "09:00 AM - 11:00 AM",
        duration: "2 hours",
        venue: "Multiple Centers",
        status: "upcoming",
        daysLeft: 59,
        registrationDeadline: "2024-03-08",
        syllabus: ["General Studies", "CSAT"],
        importantNotes: ["Admit card required", "Valid ID proof needed", "Black ball pen only"]
      },
      {
        id: "ssc-cgl-2024",
        title: "SSC CGL Tier 1 2024",
        type: "Government",
        subject: "Staff Selection",
        date: "2024-03-25",
        time: "10:00 AM - 12:00 PM",
        duration: "2 hours",
        venue: "Multiple Centers",
        status: "upcoming",
        daysLeft: 69,
        registrationDeadline: "2024-03-18",
        syllabus: ["General Intelligence", "General Knowledge", "Quantitative Aptitude"],
        importantNotes: ["Admit card required", "Valid ID proof needed", "No calculators allowed"]
      }
    ]
  }
]

const recentExams = [
  {
    id: "recent-1",
    title: "JEE Advanced 2023",
    date: "2023-12-15",
    status: "completed",
    score: "85%",
    rank: "12,450"
  },
  {
    id: "recent-2",
    title: "NEET 2023",
    date: "2023-11-20",
    status: "completed",
    score: "78%",
    rank: "45,230"
  },
  {
    id: "recent-3",
    title: "CAT 2023",
    date: "2023-11-05",
    status: "completed",
    score: "92%",
    rank: "8,750"
  }
]

const examStats = {
  totalExams: 15,
  upcomingExams: 8,
  completedExams: 7,
  averageScore: 82,
  nextExam: "JEE Main 2024 - January Session",
  daysToNext: 12,
  totalRegistrations: 25
}

export default function SchedulePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  const handleLoginToggle = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  const handleRegisterExam = (examId: string, examTitle: string) => {
    console.log(`Registering for exam: ${examTitle} (${examId})`)
    alert(`Registering for exam: ${examTitle}`)
  }

  const handleViewDetails = (examId: string, examTitle: string) => {
    console.log(`Viewing details for exam: ${examTitle} (${examId})`)
    alert(`Viewing details for exam: ${examTitle}`)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-100 text-blue-800'
      case 'completed': return 'bg-green-100 text-green-800'
      case 'cancelled': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'National': return 'bg-purple-100 text-purple-800'
      case 'University': return 'bg-orange-100 text-orange-800'
      case 'Government': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const getDaysLeft = (dateString: string) => {
    const examDate = new Date(dateString)
    const today = new Date()
    const diffTime = examDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
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
            <Marquee text="📅 Stay updated with your exam schedule and never miss an important date! ⏰" />

            {/* Main Content Container */}
            <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Page Header */}
              <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Exam Schedule</h1>
                <p className="text-lg text-gray-600">Track your upcoming exams and important dates</p>
              </div>

              {/* Exam Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Total Exams</CardTitle>
                      <FileText className="w-6 h-6" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-2">{examStats.totalExams}</div>
                    <div className="text-blue-100 text-sm">Scheduled exams</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Upcoming</CardTitle>
                      <Clock className="w-6 h-6" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-2">{examStats.upcomingExams}</div>
                    <div className="text-orange-100 text-sm">Next 30 days</div>
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
                    <div className="text-3xl font-bold mb-2">{examStats.averageScore}%</div>
                    <div className="text-green-100 text-sm">Your performance</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Next Exam</CardTitle>
                      <AlertTriangle className="w-6 h-6" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-lg font-bold mb-2">{examStats.daysToNext} days</div>
                    <div className="text-purple-100 text-sm">JEE Main 2024</div>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content Tabs */}
              <Tabs defaultValue="schedule" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="schedule">Schedule</TabsTrigger>
                  <TabsTrigger value="calendar">Calendar</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                  <TabsTrigger value="reminders">Reminders</TabsTrigger>
                </TabsList>

                {/* Schedule Tab */}
                <TabsContent value="schedule" className="space-y-8">
                  {examCategories.map((category) => (
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
                        {category.exams.map((exam) => (
                          <Card key={exam.id} className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <CardTitle className="text-lg mb-2">{exam.title}</CardTitle>
                                  <div className="flex items-center gap-2 mb-2">
                                    <Badge className={`text-xs ${getTypeColor(exam.type)}`}>
                                      {exam.type}
                                    </Badge>
                                    <Badge variant="outline" className="text-xs">
                                      {exam.subject}
                                    </Badge>
                                    <Badge className={`text-xs ${getStatusColor(exam.status)}`}>
                                      {exam.status}
                                    </Badge>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="text-2xl font-bold text-orange-500">
                                    {getDaysLeft(exam.date)}
                                  </div>
                                  <div className="text-xs text-gray-600">days left</div>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-3 mb-4">
                                <div className="flex items-center gap-2 text-sm">
                                  <CalendarIcon className="w-4 h-4 text-gray-500" />
                                  <span className="font-medium">{formatDate(exam.date)}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                  <Clock3 className="w-4 h-4 text-gray-500" />
                                  <span>{exam.time} ({exam.duration})</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                  <MapPin className="w-4 h-4 text-gray-500" />
                                  <span>{exam.venue}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                  <Bell className="w-4 h-4 text-gray-500" />
                                  <span>Registration Deadline: {exam.registrationDeadline}</span>
                                </div>
                              </div>

                              <div className="mb-4">
                                <h4 className="text-sm font-medium mb-2">Syllabus:</h4>
                                <div className="flex flex-wrap gap-1">
                                  {exam.syllabus.map((topic, idx) => (
                                    <Badge key={idx} variant="secondary" className="text-xs">
                                      {topic}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <div className="mb-4">
                                <h4 className="text-sm font-medium mb-2">Important Notes:</h4>
                                <ul className="text-xs text-gray-600 space-y-1">
                                  {exam.importantNotes.map((note, idx) => (
                                    <li key={idx} className="flex items-center gap-1">
                                      <AlertTriangle className="w-3 h-3 text-orange-500" />
                                      {note}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="flex gap-2">
                                <Button 
                                  className="flex-1 bg-orange-500 hover:bg-orange-600"
                                  onClick={() => handleRegisterExam(exam.id, exam.title)}
                                >
                                  Register Now
                                </Button>
                                <Button 
                                  variant="outline"
                                  onClick={() => handleViewDetails(exam.id, exam.title)}
                                >
                                  View Details
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </TabsContent>

                {/* Calendar Tab */}
                <TabsContent value="calendar" className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <CalendarIcon className="w-5 h-5 text-blue-500" />
                            Exam Calendar
                          </CardTitle>
                          <CardDescription>View your exam schedule in calendar format</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            className="rounded-md border"
                          />
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Quick Actions</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <Button className="w-full" variant="outline">
                            <Bell className="w-4 h-4 mr-2" />
                            Set Reminder
                          </Button>
                          <Button className="w-full" variant="outline">
                            <BookOpen className="w-4 h-4 mr-2" />
                            View Syllabus
                          </Button>
                          <Button className="w-full" variant="outline">
                            <MapPin className="w-4 h-4 mr-2" />
                            Find Center
                          </Button>
                          <Button className="w-full" variant="outline">
                            <FileText className="w-4 h-4 mr-2" />
                            Download Admit Card
                          </Button>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Today's Exams</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-center py-4 text-gray-500">
                            No exams scheduled for today
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                {/* Completed Tab */}
                <TabsContent value="completed" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        Completed Exams
                      </CardTitle>
                      <CardDescription>Your past exam performances and results</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentExams.map((exam) => (
                          <div key={exam.id} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                            <div className="p-2 bg-green-100 rounded-full">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            </div>
                            
                            <div className="flex-1">
                              <div className="font-medium">{exam.title}</div>
                              <div className="text-sm text-gray-600">{exam.date}</div>
                            </div>
                            
                            <div className="text-right">
                              <div className="text-lg font-bold text-green-600">{exam.score}</div>
                              <div className="text-xs text-gray-500">Rank: {exam.rank}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Reminders Tab */}
                <TabsContent value="reminders" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Bell className="w-5 h-5 text-orange-500" />
                        Exam Reminders
                      </CardTitle>
                      <CardDescription>Set and manage your exam reminders</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-4 border rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <div className="font-medium">JEE Main 2024 - January Session</div>
                            <Badge className="bg-orange-100 text-orange-800">12 days</Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">Reminder set for 3 days before exam</div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">Edit</Button>
                            <Button size="sm" variant="outline">Delete</Button>
                          </div>
                        </div>

                        <div className="p-4 border rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <div className="font-medium">NEET 2024 - Main Exam</div>
                            <Badge className="bg-blue-100 text-blue-800">31 days</Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">Reminder set for 1 week before exam</div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">Edit</Button>
                            <Button size="sm" variant="outline">Delete</Button>
                          </div>
                        </div>

                        <Button className="w-full" variant="outline">
                          <Bell className="w-4 h-4 mr-2" />
                          Add New Reminder
                        </Button>
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