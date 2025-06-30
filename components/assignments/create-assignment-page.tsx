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
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { 
  Plus, 
  Save, 
  Eye, 
  Copy, 
  Trash2, 
  Upload, 
  Calendar,
  Clock,
  FileText,
  CheckCircle,
  AlertCircle,
  BookOpen,
  Users,
  Target,
  Settings,
  Paperclip,
  Link,
  Image,
  Video,
  Code,
  Brain,
  Timer,
  Award,
  Send,
  Preview
} from "lucide-react"

// Mock data for assignments
const mockAssignments = [
  {
    id: "1",
    title: "Political Theory Essay",
    course: "Political Science",
    type: "essay",
    dueDate: "2024-02-15",
    status: "draft",
    submissions: 0,
    totalStudents: 45,
    points: 100,
    description: "Write a comprehensive essay on classical political thinkers and their influence on modern governance."
  },
  {
    id: "2",
    title: "Economic Analysis Quiz",
    course: "Economics",
    type: "quiz",
    dueDate: "2024-02-10",
    status: "published",
    submissions: 23,
    totalStudents: 38,
    points: 50,
    description: "Multiple choice quiz covering supply and demand principles."
  },
  {
    id: "3",
    title: "Historical Research Paper",
    course: "History",
    type: "research",
    dueDate: "2024-02-20",
    status: "published",
    submissions: 15,
    totalStudents: 42,
    points: 150,
    description: "Research paper on the impact of industrial revolution on society."
  }
]

const assignmentTypes = [
  { value: "essay", label: "Essay", icon: FileText },
  { value: "quiz", label: "Quiz", icon: Brain },
  { value: "research", label: "Research Paper", icon: BookOpen },
  { value: "presentation", label: "Presentation", icon: Users },
  { value: "project", label: "Project", icon: Target },
  { value: "discussion", label: "Discussion", icon: Users }
]

export function CreateAssignmentPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeTab, setActiveTab] = useState("create")
  const [assignmentForm, setAssignmentForm] = useState({
    title: "",
    course: "",
    type: "",
    description: "",
    dueDate: "",
    dueTime: "",
    points: "",
    instructions: "",
    attachments: [],
    allowLateSubmission: false,
    allowResubmission: false,
    requirePeerReview: false,
    rubric: ""
  })

  const handleLoginToggle = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'draft':
        return <Badge className="bg-yellow-100 text-yellow-800">Draft</Badge>
      case 'published':
        return <Badge className="bg-green-100 text-green-800">Published</Badge>
      case 'archived':
        return <Badge className="bg-gray-100 text-gray-800">Archived</Badge>
      default:
        return <Badge className="bg-blue-100 text-blue-800">Active</Badge>
    }
  }

  const getTypeIcon = (type: string) => {
    const typeData = assignmentTypes.find(t => t.value === type)
    return typeData ? <typeData.icon className="w-4 h-4" /> : <FileText className="w-4 h-4" />
  }

  const handleFormChange = (field: string, value: any) => {
    setAssignmentForm(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSave = () => {
    // Handle save logic
    console.log("Saving assignment:", assignmentForm)
  }

  const handlePublish = () => {
    // Handle publish logic
    console.log("Publishing assignment:", assignmentForm)
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen bg-emerald-50">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <div className="min-h-screen bg-emerald-50 flex flex-col">
            {/* Header */}
            <Header isLoggedIn={isLoggedIn} onLoginToggle={handleLoginToggle} />

            {/* Marquee */}
            <Marquee text="📝 Create and manage assignments for your students! ✨" />

            {/* Main Content Container */}
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Page Header */}
              <div className="mb-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-2">Create Assignment</h1>
                    <p className="text-lg text-emerald-700">Design engaging assignments and track student submissions</p>
                  </div>
                  <div className="flex space-x-3">
                    <Button variant="outline">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button variant="outline">
                      <Copy className="w-4 h-4 mr-2" />
                      Duplicate
                    </Button>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                      <Save className="w-4 h-4 mr-2" />
                      Save Draft
                    </Button>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <Card className="border-l-4 border-l-emerald-500">
                    <CardContent className="p-4">
                      <div className="flex items-center">
                        <div className="p-2 bg-emerald-100 rounded-lg">
                          <FileText className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-emerald-600">Total Assignments</p>
                          <p className="text-xl font-semibold">{mockAssignments.length}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-blue-500">
                    <CardContent className="p-4">
                      <div className="flex items-center">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-blue-600">Published</p>
                          <p className="text-xl font-semibold">2</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-purple-500">
                    <CardContent className="p-4">
                      <div className="flex items-center">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <Users className="w-5 h-5 text-purple-600" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-purple-600">Total Students</p>
                          <p className="text-xl font-semibold">125</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-orange-500">
                    <CardContent className="p-4">
                      <div className="flex items-center">
                        <div className="p-2 bg-orange-100 rounded-lg">
                          <Award className="w-5 h-5 text-orange-600" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-orange-600">Avg. Score</p>
                          <p className="text-xl font-semibold">87%</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Assignment Creation Tabs */}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="create">Create Assignment</TabsTrigger>
                  <TabsTrigger value="manage">Manage Assignments</TabsTrigger>
                  <TabsTrigger value="templates">Templates</TabsTrigger>
                </TabsList>

                <TabsContent value="create" className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Assignment Form */}
                    <div className="lg:col-span-2 space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Assignment Details</CardTitle>
                          <CardDescription>Fill in the basic information for your assignment</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="title">Assignment Title</Label>
                              <Input
                                id="title"
                                placeholder="Enter assignment title"
                                value={assignmentForm.title}
                                onChange={(e) => handleFormChange("title", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="course">Course</Label>
                              <Select value={assignmentForm.course} onValueChange={(value) => handleFormChange("course", value)}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select course" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="political-science">Political Science</SelectItem>
                                  <SelectItem value="economics">Economics</SelectItem>
                                  <SelectItem value="history">History</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <Label htmlFor="type">Assignment Type</Label>
                              <Select value={assignmentForm.type} onValueChange={(value) => handleFormChange("type", value)}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent>
                                  {assignmentTypes.map((type) => (
                                    <SelectItem key={type.value} value={type.value}>
                                      <div className="flex items-center space-x-2">
                                        <type.icon className="w-4 h-4" />
                                        <span>{type.label}</span>
                                      </div>
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor="points">Points</Label>
                              <Input
                                id="points"
                                type="number"
                                placeholder="100"
                                value={assignmentForm.points}
                                onChange={(e) => handleFormChange("points", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="dueDate">Due Date</Label>
                              <Input
                                id="dueDate"
                                type="date"
                                value={assignmentForm.dueDate}
                                onChange={(e) => handleFormChange("dueDate", e.target.value)}
                              />
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                              id="description"
                              placeholder="Describe the assignment requirements..."
                              value={assignmentForm.description}
                              onChange={(e) => handleFormChange("description", e.target.value)}
                              rows={4}
                            />
                          </div>

                          <div>
                            <Label htmlFor="instructions">Detailed Instructions</Label>
                            <Textarea
                              id="instructions"
                              placeholder="Provide detailed instructions for students..."
                              value={assignmentForm.instructions}
                              onChange={(e) => handleFormChange("instructions", e.target.value)}
                              rows={6}
                            />
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Attachments & Resources</CardTitle>
                          <CardDescription>Add files, links, or other resources</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Upload className="w-4 h-4 mr-2" />
                              Upload File
                            </Button>
                            <Button variant="outline" size="sm">
                              <Link className="w-4 h-4 mr-2" />
                              Add Link
                            </Button>
                            <Button variant="outline" size="sm">
                              <Image className="w-4 h-4 mr-2" />
                              Add Image
                            </Button>
                          </div>
                          <div className="text-sm text-gray-500">
                            No attachments added yet
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Settings Panel */}
                    <div className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Assignment Settings</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label>Allow Late Submission</Label>
                              <p className="text-sm text-gray-500">Students can submit after due date</p>
                            </div>
                            <Switch
                              checked={assignmentForm.allowLateSubmission}
                              onCheckedChange={(checked) => handleFormChange("allowLateSubmission", checked)}
                            />
                          </div>
                          <Separator />
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label>Allow Resubmission</Label>
                              <p className="text-sm text-gray-500">Students can submit multiple times</p>
                            </div>
                            <Switch
                              checked={assignmentForm.allowResubmission}
                              onCheckedChange={(checked) => handleFormChange("allowResubmission", checked)}
                            />
                          </div>
                          <Separator />
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label>Peer Review</Label>
                              <p className="text-sm text-gray-500">Enable peer review system</p>
                            </div>
                            <Switch
                              checked={assignmentForm.requirePeerReview}
                              onCheckedChange={(checked) => handleFormChange("requirePeerReview", checked)}
                            />
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Rubric</CardTitle>
                          <CardDescription>Define grading criteria</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Textarea
                            placeholder="Enter rubric criteria..."
                            value={assignmentForm.rubric}
                            onChange={(e) => handleFormChange("rubric", e.target.value)}
                            rows={4}
                          />
                        </CardContent>
                      </Card>

                      <div className="flex space-x-2">
                        <Button onClick={handleSave} variant="outline" className="flex-1">
                          <Save className="w-4 h-4 mr-2" />
                          Save Draft
                        </Button>
                        <Button onClick={handlePublish} className="bg-emerald-600 hover:bg-emerald-700 flex-1">
                          <Send className="w-4 h-4 mr-2" />
                          Publish
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="manage" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Assignments</CardTitle>
                      <CardDescription>Manage existing assignments and track submissions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {mockAssignments.map((assignment) => (
                          <div key={assignment.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-emerald-50 transition-colors">
                            <div className="flex items-center space-x-4">
                              <div className="p-2 bg-emerald-100 rounded-lg">
                                {getTypeIcon(assignment.type)}
                              </div>
                              <div>
                                <div className="flex items-center space-x-2">
                                  <h3 className="font-semibold text-emerald-900">{assignment.title}</h3>
                                  {getStatusBadge(assignment.status)}
                                </div>
                                <p className="text-sm text-emerald-600">{assignment.course}</p>
                                <p className="text-sm text-emerald-500">Due: {assignment.dueDate}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-4">
                              <div className="text-center">
                                <p className="text-sm text-emerald-600">Submissions</p>
                                <p className="font-semibold text-emerald-900">{assignment.submissions}/{assignment.totalStudents}</p>
                              </div>
                              <div className="text-center">
                                <p className="text-sm text-emerald-600">Points</p>
                                <p className="font-semibold text-emerald-900">{assignment.points}</p>
                              </div>
                              <div className="flex space-x-2">
                                <Button size="sm" variant="outline">
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button size="sm" variant="outline">
                                  <Copy className="w-4 h-4" />
                                </Button>
                                <Button size="sm" variant="outline">
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="templates" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Assignment Templates</CardTitle>
                      <CardDescription>Use pre-built templates to create assignments quickly</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {assignmentTypes.map((type) => (
                          <Card key={type.value} className="cursor-pointer hover:shadow-md transition-shadow">
                            <CardContent className="p-4">
                              <div className="flex items-center space-x-3">
                                <div className="p-2 bg-emerald-100 rounded-lg">
                                  <type.icon className="w-5 h-5 text-emerald-600" />
                                </div>
                                <div>
                                  <h3 className="font-semibold text-emerald-900">{type.label}</h3>
                                  <p className="text-sm text-emerald-600">Template</p>
                                </div>
                              </div>
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