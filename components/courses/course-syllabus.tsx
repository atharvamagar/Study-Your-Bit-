"use client"

import { useState } from "react"
import { ChevronDown, Play, FileText, HelpCircle, BookOpen, Clock } from "lucide-react"
import { SyllabusModule } from "@/lib/types"

interface CourseSyllabusProps {
  syllabus: SyllabusModule[]
}

export function CourseSyllabus({ syllabus }: CourseSyllabusProps) {
  const [openModules, setOpenModules] = useState<Set<string>>(new Set())

  const toggleModule = (moduleId: string) => {
    const newOpenModules = new Set(openModules)
    if (newOpenModules.has(moduleId)) {
      newOpenModules.delete(moduleId)
    } else {
      newOpenModules.add(moduleId)
    }
    setOpenModules(newOpenModules)
  }

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Play className="w-4 h-4" />
      case 'reading':
        return <FileText className="w-4 h-4" />
      case 'quiz':
        return <HelpCircle className="w-4 h-4" />
      case 'assignment':
        return <BookOpen className="w-4 h-4" />
      default:
        return <Play className="w-4 h-4" />
    }
  }

  const totalLessons = syllabus.reduce((total, module) => total + module.lessons.length, 0)
  const totalDuration = syllabus.reduce((total, module) => {
    const moduleDuration = module.lessons.reduce((sum, lesson) => {
      const minutes = parseInt(lesson.duration.split(' ')[0])
      return sum + minutes
    }, 0)
    return total + moduleDuration
  }, 0)

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Course Content
        </h2>
        <div className="text-sm text-gray-500">
          {totalLessons} lessons • {Math.round(totalDuration / 60)}h {totalDuration % 60}m total length
        </div>
      </div>

      <div className="space-y-2">
        {syllabus.map((module, moduleIndex) => (
          <div key={module.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleModule(module.id)}
              className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-500">
                    Module {moduleIndex + 1}
                  </span>
                  <span className="text-sm text-gray-400">•</span>
                  <span className="text-sm text-gray-500">{module.duration}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">
                  {module.lessons.length} lessons
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openModules.has(module.id) ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </button>

            {openModules.has(module.id) && (
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-gray-900 mb-2">{module.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{module.description}</p>
                
                <div className="space-y-2">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <div key={lesson.id} className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-50">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 text-gray-500">
                          {getLessonIcon(lesson.type)}
                          <span className="text-sm">
                            {moduleIndex + 1}.{lessonIndex + 1}
                          </span>
                        </div>
                        <span className="text-sm text-gray-700">{lesson.title}</span>
                        {lesson.isPreview && (
                          <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium">
                            Preview
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-3 h-3" />
                        <span>{lesson.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
} 