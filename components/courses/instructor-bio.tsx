import { Star, Users, BookOpen, Award } from "lucide-react"
import { Instructor } from "@/lib/types"

interface InstructorBioProps {
  instructor: Instructor
}

export function InstructorBio({ instructor }: InstructorBioProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Your Instructor</h2>
      
      <div className="text-center mb-4">
        <img 
          src={instructor.photo} 
          alt={instructor.name}
          className="w-20 h-20 rounded-full object-cover mx-auto mb-3 border-4 border-gray-100"
        />
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{instructor.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{instructor.role}</p>
        
        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(instructor.rating) 
                  ? 'text-yellow-400 fill-current' 
                  : 'text-gray-300'
              }`}
            />
          ))}
          <span className="text-sm text-gray-600 ml-1">
            {instructor.rating} ({instructor.reviewCount} reviews)
          </span>
        </div>
      </div>

      {/* Bio */}
      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
        {instructor.bio}
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-center gap-1 mb-1">
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-900">{instructor.coursesCount}</span>
          </div>
          <span className="text-xs text-gray-500">Courses</span>
        </div>
        
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Users className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-gray-900">
              {instructor.studentsCount.toLocaleString()}
            </span>
          </div>
          <span className="text-xs text-gray-500">Students</span>
        </div>
      </div>

      {/* Expertise */}
      <div>
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Expertise</h4>
        <div className="flex flex-wrap gap-2">
          {instructor.expertise.map((skill, index) => (
            <span 
              key={index}
              className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
} 