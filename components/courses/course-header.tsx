import { Star, Clock, Users, Globe, Award, Calendar } from "lucide-react"
import { Course } from "@/lib/types"

interface CourseHeaderProps {
  course: Course
}

export function CourseHeader({ course }: CourseHeaderProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Course Thumbnail */}
      <div className="relative h-64 sm:h-80">
        <img 
          src={course.thumbnail} 
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Course Level Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {course.level}
          </span>
        </div>

        {/* Price Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-white/95 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-lg font-bold">
            ₹{course.price}
          </span>
        </div>
      </div>

      {/* Course Info */}
      <div className="p-6 sm:p-8">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {course.tags.map((tag, index) => (
            <span 
              key={index}
              className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {course.title}
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          {course.description}
        </p>

        {/* Course Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
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
            <span className="text-sm font-medium text-gray-900">
              {course.rating}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">{course.duration}</span>
          </div>

          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">
              {course.enrolledStudents.toLocaleString()} students
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">{course.language}</span>
          </div>
        </div>

        {/* Additional Info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 border-t border-gray-100 pt-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>Last updated: {new Date(course.lastUpdated).toLocaleDateString()}</span>
          </div>
          
          {course.certificate && (
            <div className="flex items-center gap-1">
              <Award className="w-4 h-4" />
              <span>Certificate included</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 