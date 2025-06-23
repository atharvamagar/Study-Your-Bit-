import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Clock, Users, BookOpen } from "lucide-react"
import { Course } from "@/lib/types"
import { COLORS } from "@/lib/constants"
import Link from "next/link"

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white rounded-2xl overflow-hidden">
      <div className="relative">
        <img 
          src={course.thumbnail} 
          alt={course.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            {course.level}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
            ₹{course.price}
          </span>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            {course.tags.slice(0, 2).map((tag, index) => (
              <span 
                key={index}
                className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {course.title}
          </h3>
          
          <p className="text-gray-600 text-sm line-clamp-3 mb-4">
            {course.description}
          </p>
        </div>

        <div className="space-y-3 mb-6">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(course.rating) 
                      ? 'text-yellow-400 fill-current' 
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {course.rating} ({course.reviewCount} reviews)
            </span>
          </div>

          {/* Course Stats */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{course.enrolledStudents.toLocaleString()} students</span>
            </div>
          </div>

          {/* Instructor */}
          <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
            <img 
              src={course.instructor.photo} 
              alt={course.instructor.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium text-gray-900">{course.instructor.name}</p>
              <p className="text-xs text-gray-500">{course.instructor.role}</p>
            </div>
          </div>
        </div>

        <Link href={`/courses/${course.id}`}>
          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-200 hover:scale-105"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            View Course
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
} 