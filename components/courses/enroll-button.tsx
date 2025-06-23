import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Clock, Award, Users, Shield } from "lucide-react"
import { Course } from "@/lib/types"
import { COLORS } from "@/lib/constants"

interface EnrollButtonProps {
  course: Course
  isLoggedIn: boolean
}

export function EnrollButton({ course, isLoggedIn }: EnrollButtonProps) {
  const handleEnroll = () => {
    if (!isLoggedIn) {
      // In a real app, this would redirect to login/signup
      alert("Please log in to enroll in this course")
      return
    }
    
    // In a real app, this would handle enrollment
    alert(`Enrolling in ${course.title}`)
  }

  return (
    <Card className="border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white">
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <div className="text-3xl font-bold text-gray-900 mb-2">
            ₹{course.price}
          </div>
          <p className="text-sm text-gray-600">One-time payment</p>
        </div>

        <Button 
          onClick={handleEnroll}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl text-lg transition-all duration-200 hover:scale-105 mb-4"
        >
          <BookOpen className="w-5 h-5 mr-2" />
          {isLoggedIn ? 'Enroll Now' : 'Login to Enroll'}
        </Button>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Clock className="w-4 h-4 text-blue-600" />
            <span>Full lifetime access</span>
          </div>
          
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Award className="w-4 h-4 text-green-600" />
            <span>Certificate of completion</span>
          </div>
          
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Users className="w-4 h-4 text-purple-600" />
            <span>Access on mobile and TV</span>
          </div>
          
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Shield className="w-4 h-4 text-orange-600" />
            <span>30-Day money-back guarantee</span>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-500">
            Join {course.enrolledStudents.toLocaleString()} students already enrolled
          </p>
        </div>
      </CardContent>
    </Card>
  )
} 