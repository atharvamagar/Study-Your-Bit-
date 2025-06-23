"use client"

import { useState } from "react"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "../app-sidebar"
import { Header } from "../header"
import { Marquee } from "../marquee"
import { Footer } from "../footer"
import { ChatBot } from "../chatbot"
import { CourseHeader } from "./course-header"
import { CourseReviews } from "./course-reviews"
import { LearningOutcomes } from "./learning-outcomes"
import { CourseSyllabus } from "./course-syllabus"
import { InstructorBio } from "./instructor-bio"
import { DemoClass } from "./demo-class"
import { EnrollButton } from "./enroll-button"
import { SAMPLE_COURSES, SAMPLE_REVIEWS } from "@/lib/constants"
import { Course } from "@/lib/types"

interface IndividualCoursePageProps {
  courseId: string
}

export function IndividualCoursePage({ courseId }: IndividualCoursePageProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLoginToggle = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  // Find the course data (in a real app, this would be an API call)
  const course = SAMPLE_COURSES.find(c => c.id === courseId) as Course

  if (!course) {
    return (
      <SidebarProvider defaultOpen={true}>
        <div className="flex min-h-screen bg-white">
          <AppSidebar />
          <SidebarInset className="flex-1">
            <div className="min-h-screen bg-white flex flex-col">
              <Header isLoggedIn={isLoggedIn} onLoginToggle={handleLoginToggle} />
              <main className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
                  <p className="text-gray-600">The course you're looking for doesn't exist.</p>
                </div>
              </main>
              <Footer />
            </div>
            <ChatBot />
          </SidebarInset>
        </div>
      </SidebarProvider>
    )
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
            <Marquee text="🎓 Enroll now and start your learning journey with expert guidance! 📚" />

            {/* Main Content Container */}
            <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Course Header */}
              <CourseHeader course={course} />

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Learning Outcomes */}
                  <LearningOutcomes outcomes={course.learningOutcomes} />

                  {/* Course Syllabus */}
                  <CourseSyllabus syllabus={course.syllabus} />

                  {/* Demo Class */}
                  {course.demoVideo && (
                    <DemoClass 
                      videoUrl={course.demoVideo} 
                      thumbnail={course.demoThumbnail || course.thumbnail}
                      title={course.title}
                    />
                  )}

                  {/* Course Reviews */}
                  <CourseReviews reviews={SAMPLE_REVIEWS} courseRating={course.rating} reviewCount={course.reviewCount} />
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Instructor Bio */}
                  <InstructorBio instructor={course.instructor} />

                  {/* Enroll Button - Fixed on mobile, sticky on desktop */}
                  <div className="lg:sticky lg:top-8">
                    <EnrollButton course={course} isLoggedIn={isLoggedIn} />
                  </div>
                </div>
              </div>
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