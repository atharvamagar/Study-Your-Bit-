import { IndividualCoursePage } from "@/components/courses/individual-course-page"

interface CoursePageProps {
  params: {
    courseId: string
  }
}

export default function CoursePage({ params }: CoursePageProps) {
  return <IndividualCoursePage courseId={params.courseId} />
} 