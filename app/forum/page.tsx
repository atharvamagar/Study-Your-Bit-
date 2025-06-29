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
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  MessageSquare, 
  TrendingUp, 
  Users, 
  Clock, 
  Target, 
  BookOpen, 
  AlertTriangle,
  CheckCircle,
  Star,
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
  LineChart,
  ThumbsUp,
  ThumbsDown,
  Share2,
  MoreHorizontal,
  Search,
  Filter,
  Plus,
  Reply,
  Edit,
  Trash2,
  Flag,
  Pin,
  User
} from "lucide-react"

// Mock data for forum
const forumCategories = [
  {
    id: "general",
    name: "General Discussion",
    description: "General academic discussions and topics",
    icon: MessageSquare,
    topics: 156,
    posts: 1247,
    lastActivity: "2 hours ago"
  },
  {
    id: "mathematics",
    name: "Mathematics",
    description: "Math problems, solutions, and discussions",
    icon: Brain,
    topics: 89,
    posts: 567,
    lastActivity: "1 hour ago"
  },
  {
    id: "physics",
    name: "Physics",
    description: "Physics concepts, problems, and experiments",
    icon: Zap,
    topics: 67,
    posts: 423,
    lastActivity: "3 hours ago"
  },
  {
    id: "chemistry",
    name: "Chemistry",
    description: "Chemistry topics, reactions, and lab discussions",
    icon: Lightbulb,
    topics: 45,
    posts: 298,
    lastActivity: "5 hours ago"
  },
  {
    id: "exam-prep",
    name: "Exam Preparation",
    description: "Exam tips, strategies, and study materials",
    icon: Target,
    topics: 234,
    posts: 1892,
    lastActivity: "30 minutes ago"
  },
  {
    id: "career",
    name: "Career Guidance",
    description: "Career advice, internships, and job opportunities",
    icon: GraduationCap,
    topics: 78,
    posts: 445,
    lastActivity: "4 hours ago"
  }
]

const recentDiscussions = [
  {
    id: "discussion-1",
    title: "Help with Calculus Integration Problem",
    author: {
      name: "Priya Sharma",
      avatar: "/placeholder-user.jpg",
      reputation: 1250,
      isVerified: true
    },
    category: "Mathematics",
    replies: 8,
    views: 156,
    likes: 12,
    isPinned: false,
    isSolved: false,
    lastReply: "2 hours ago",
    tags: ["Calculus", "Integration", "Help Needed"],
    content: "I'm stuck on this integration problem. Can anyone help me solve it? The problem is ∫(x²+2x+1)dx. I've tried substitution but I'm not getting the right answer..."
  },
  {
    id: "discussion-2",
    title: "Best Study Strategies for JEE Main 2024",
    author: {
      name: "Rahul Patel",
      avatar: "/placeholder-user.jpg",
      reputation: 890,
      isVerified: true
    },
    category: "Exam Preparation",
    replies: 23,
    views: 445,
    likes: 34,
    isPinned: true,
    isSolved: false,
    lastReply: "1 hour ago",
    tags: ["JEE Main", "Study Tips", "Strategy"],
    content: "With JEE Main 2024 approaching, I wanted to share my study strategy and get feedback from others. Here's what I'm doing..."
  },
  {
    id: "discussion-3",
    title: "Physics Lab Report Help - Thermodynamics",
    author: {
      name: "Anjali Singh",
      avatar: "/placeholder-user.jpg",
      reputation: 567,
      isVerified: false
    },
    category: "Physics",
    replies: 5,
    views: 89,
    likes: 7,
    isPinned: false,
    isSolved: true,
    lastReply: "3 hours ago",
    tags: ["Physics", "Lab Report", "Thermodynamics"],
    content: "I need help writing my thermodynamics lab report. I'm not sure how to present the data and calculations..."
  },
  {
    id: "discussion-4",
    title: "Career Options After B.Sc. Computer Science",
    author: {
      name: "Vikram Kumar",
      avatar: "/placeholder-user.jpg",
      reputation: 2340,
      isVerified: true
    },
    category: "Career Guidance",
    replies: 15,
    views: 234,
    likes: 28,
    isPinned: false,
    isSolved: false,
    lastReply: "4 hours ago",
    tags: ["Career", "Computer Science", "B.Sc."],
    content: "I'm in my final year of B.Sc. Computer Science and confused about career options. Should I go for higher studies or start working?"
  }
]

const forumStats = {
  totalMembers: 15420,
  totalTopics: 669,
  totalPosts: 4872,
  activeToday: 234,
  solvedTopics: 445,
  moderators: 12
}

const replies = [
  {
    id: "reply-1",
    author: {
      name: "Dr. Samriddhi Sengupta",
      avatar: "/placeholder-user.jpg",
      reputation: 5000,
      isVerified: true,
      isModerator: true
    },
    content: "Great question! For this integration problem, you can use the power rule. ∫(x²+2x+1)dx = ∫x²dx + ∫2xdx + ∫1dx = (x³/3) + x² + x + C. The key is to integrate each term separately.",
    timestamp: "2 hours ago",
    likes: 8,
    isAccepted: true
  },
  {
    id: "reply-2",
    author: {
      name: "Amit Kumar",
      avatar: "/placeholder-user.jpg",
      reputation: 1200,
      isVerified: true,
      isModerator: false
    },
    content: "I agree with Dr. Sengupta's solution. Here's a step-by-step breakdown: 1) Split the integral into three parts 2) Apply power rule to each term 3) Add the constant of integration C.",
    timestamp: "1 hour ago",
    likes: 5,
    isAccepted: false
  }
]

export default function ForumPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [showNewPost, setShowNewPost] = useState(false)
  const [selectedDiscussion, setSelectedDiscussion] = useState<string | null>(null)

  const handleLoginToggle = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  const handleCreatePost = () => {
    setShowNewPost(true)
  }

  const handleViewDiscussion = (discussionId: string) => {
    setSelectedDiscussion(discussionId)
  }

  const handleLikePost = (postId: string) => {
    console.log(`Liking post: ${postId}`)
  }

  const handleReply = (postId: string) => {
    console.log(`Replying to post: ${postId}`)
  }

  const handleShare = (postId: string) => {
    console.log(`Sharing post: ${postId}`)
  }

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'mathematics': return 'bg-blue-100 text-blue-800'
      case 'physics': return 'bg-purple-100 text-purple-800'
      case 'chemistry': return 'bg-green-100 text-green-800'
      case 'exam preparation': return 'bg-orange-100 text-orange-800'
      case 'career guidance': return 'bg-pink-100 text-pink-800'
      default: return 'bg-gray-100 text-gray-800'
    }
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
            <Marquee text="💬 Join the discussion! Connect with fellow students and share knowledge! 🧠" />

            {/* Main Content Container */}
            <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Page Header */}
              <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Discussion Forum</h1>
                <p className="text-lg text-gray-600">Connect with fellow students, ask questions, and share knowledge</p>
              </div>

              {/* Forum Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Total Members</CardTitle>
                      <Users className="w-6 h-6" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-2">{forumStats.totalMembers.toLocaleString()}</div>
                    <div className="text-blue-100 text-sm">Active community</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Total Topics</CardTitle>
                      <MessageSquare className="w-6 h-6" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-2">{forumStats.totalTopics}</div>
                    <div className="text-green-100 text-sm">Discussions created</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Total Posts</CardTitle>
                      <FileText className="w-6 h-6" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-2">{forumStats.totalPosts.toLocaleString()}</div>
                    <div className="text-purple-100 text-sm">Replies and comments</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Active Today</CardTitle>
                      <Activity className="w-6 h-6" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-2">{forumStats.activeToday}</div>
                    <div className="text-orange-100 text-sm">Members online</div>
                  </CardContent>
                </Card>
              </div>

              {/* Search and Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search discussions, topics, or users..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                  <Button 
                    className="bg-orange-500 hover:bg-orange-600"
                    onClick={handleCreatePost}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    New Post
                  </Button>
                </div>
              </div>

              {/* Main Content Tabs */}
              <Tabs defaultValue="discussions" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="discussions">Discussions</TabsTrigger>
                  <TabsTrigger value="categories">Categories</TabsTrigger>
                  <TabsTrigger value="trending">Trending</TabsTrigger>
                  <TabsTrigger value="my-posts">My Posts</TabsTrigger>
                </TabsList>

                {/* Discussions Tab */}
                <TabsContent value="discussions" className="space-y-6">
                  <div className="space-y-4">
                    {recentDiscussions.map((discussion) => (
                      <Card key={discussion.id} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <Avatar className="w-12 h-12">
                              <AvatarImage src={discussion.author.avatar} />
                              <AvatarFallback>{discussion.author.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h3 className="font-semibold text-lg cursor-pointer hover:text-orange-600" 
                                        onClick={() => handleViewDiscussion(discussion.id)}>
                                      {discussion.title}
                                    </h3>
                                    {discussion.isPinned && <Pin className="w-4 h-4 text-orange-500" />}
                                    {discussion.isSolved && <CheckCircle className="w-4 h-4 text-green-500" />}
                                  </div>
                                  
                                  <div className="flex items-center gap-2 mb-2">
                                    <Badge className={`text-xs ${getCategoryColor(discussion.category)}`}>
                                      {discussion.category}
                                    </Badge>
                                    <div className="flex items-center gap-1 text-xs text-gray-600">
                                      <span>by {discussion.author.name}</span>
                                      {discussion.author.isVerified && <Star className="w-3 h-3 text-blue-500" />}
                                    </div>
                                  </div>
                                  
                                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                    {discussion.content}
                                  </p>
                                  
                                  <div className="flex flex-wrap gap-1 mb-3">
                                    {discussion.tags.map((tag, idx) => (
                                      <Badge key={idx} variant="outline" className="text-xs">
                                        {tag}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                                
                                <div className="flex items-center gap-2">
                                  <Button variant="ghost" size="sm">
                                    <MoreHorizontal className="w-4 h-4" />
                                  </Button>
                                </div>
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-sm text-gray-600">
                                  <div className="flex items-center gap-1">
                                    <MessageSquare className="w-4 h-4" />
                                    {discussion.replies} replies
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Eye className="w-4 h-4" />
                                    {discussion.views} views
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <ThumbsUp className="w-4 h-4" />
                                    {discussion.likes} likes
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {discussion.lastReply}
                                  </div>
                                </div>
                                
                                <div className="flex items-center gap-2">
                                  <Button 
                                    variant="ghost" 
                                    size="sm"
                                    onClick={() => handleLikePost(discussion.id)}
                                  >
                                    <ThumbsUp className="w-4 h-4" />
                                  </Button>
                                  <Button 
                                    variant="ghost" 
                                    size="sm"
                                    onClick={() => handleReply(discussion.id)}
                                  >
                                    <Reply className="w-4 h-4" />
                                  </Button>
                                  <Button 
                                    variant="ghost" 
                                    size="sm"
                                    onClick={() => handleShare(discussion.id)}
                                  >
                                    <Share2 className="w-4 h-4" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Categories Tab */}
                <TabsContent value="categories" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {forumCategories.map((category) => {
                      const IconComponent = category.icon
                      return (
                        <Card key={category.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                          <CardHeader>
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-orange-100 rounded-lg">
                                <IconComponent className="w-6 h-6 text-orange-600" />
                              </div>
                              <div className="flex-1">
                                <CardTitle className="text-lg">{category.name}</CardTitle>
                                <CardDescription>{category.description}</CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              <div className="flex items-center justify-between text-sm">
                                <span>Topics:</span>
                                <span className="font-medium">{category.topics}</span>
                              </div>
                              <div className="flex items-center justify-between text-sm">
                                <span>Posts:</span>
                                <span className="font-medium">{category.posts}</span>
                              </div>
                              <div className="flex items-center justify-between text-sm">
                                <span>Last Activity:</span>
                                <span className="text-gray-600">{category.lastActivity}</span>
                              </div>
                            </div>
                            <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600">
                              Browse Category
                            </Button>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </TabsContent>

                {/* Trending Tab */}
                <TabsContent value="trending" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-orange-500" />
                        Trending Discussions
                      </CardTitle>
                      <CardDescription>Most popular and active discussions this week</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentDiscussions.slice(0, 3).map((discussion, index) => (
                          <div key={discussion.id} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                            <div className="text-2xl font-bold text-orange-500">#{index + 1}</div>
                            <div className="flex-1">
                              <h4 className="font-medium cursor-pointer hover:text-orange-600">
                                {discussion.title}
                              </h4>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge className={`text-xs ${getCategoryColor(discussion.category)}`}>
                                  {discussion.category}
                                </Badge>
                                <span className="text-xs text-gray-600">{discussion.replies} replies</span>
                                <span className="text-xs text-gray-600">{discussion.views} views</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-medium">{discussion.likes} likes</div>
                              <div className="text-xs text-gray-600">{discussion.lastReply}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* My Posts Tab */}
                <TabsContent value="my-posts" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <User className="w-5 h-5 text-blue-500" />
                        My Posts
                      </CardTitle>
                      <CardDescription>Your discussions and contributions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-8 text-gray-500">
                        <MessageSquare className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                        <h3 className="text-lg font-medium mb-2">No posts yet</h3>
                        <p className="mb-4">Start your first discussion to connect with the community!</p>
                        <Button 
                          className="bg-orange-500 hover:bg-orange-600"
                          onClick={handleCreatePost}
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Create Your First Post
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