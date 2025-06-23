// Chat message interface
export interface ChatMessage {
  text: string
  isUser: boolean
  timestamp?: Date
}

// Navigation item interface
export interface NavigationItem {
  label: string
  icon: string
  href: string
  children?: NavigationItem[]
}

// Feature card interface
export interface FeatureCard {
  title: string
  description: string
  icon: string
  color: string
}

// Social link interface
export interface SocialLink {
  platform: string
  url: string
  icon: string
}

// Contact info interface
export interface ContactInfo {
  type: 'phone' | 'email' | 'address'
  value: string
  icon: string
}

// Footer section interface
export interface FooterSection {
  title: string
  links: Array<{
    label: string
    href: string
  }>
}

// Course-related types
export interface Course {
  id: string
  title: string
  description: string
  thumbnail: string
  tags: string[]
  duration: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  rating: number
  reviewCount: number
  price: number
  instructor: Instructor
  learningOutcomes: string[]
  syllabus: SyllabusModule[]
  demoVideo?: string
  demoThumbnail?: string
  enrolledStudents: number
  lastUpdated: string
  language: string
  certificate: boolean
}

export interface Instructor {
  id: string
  name: string
  role: string
  bio: string
  photo: string
  rating: number
  reviewCount: number
  coursesCount: number
  studentsCount: number
  expertise: string[]
}

export interface SyllabusModule {
  id: string
  title: string
  description: string
  lessons: Lesson[]
  duration: string
  isCompleted?: boolean
}

export interface Lesson {
  id: string
  title: string
  duration: string
  type: 'video' | 'reading' | 'quiz' | 'assignment'
  isCompleted?: boolean
  isPreview?: boolean
}

export interface Review {
  id: string
  user: {
    name: string
    photo: string
  }
  rating: number
  comment: string
  date: string
  helpful: number
} 