// Color constants for the application
export const COLORS = {
  primary: {
    blue: "#004aad",
    orange: "#ff914d",
    header: "#ff5300"
  },
  text: {
    primary: "#1f3554",
    secondary: "#6b7280",
    white: "#ffffff"
  },
  background: {
    primary: "#ffffff",
    secondary: "#f9fafb",
    gradient: "linear-gradient(-45deg, #ff914d, #004aad, #ff914d, #004aad)"
  },
  secondary: {
    lightBlue: "#e6f3ff",
    lightOrange: "#fff4e6"
  }
} as const

// Navigation data
export const NAVIGATION = {
  subjects: ["Political Science", "History", "Psychology", "Sociology", "English"],
  years: ["FY", "SY", "TY"],
  semesters: ["Sem 1", "Sem 2"],
  chapters: ["Chapter 1", "Chapter 2"],
  universities: ["Mumbai University", "Delhi University", "Kolkata University"],
  blogCategories: ["Exam Prep", "Study Tips", "Theory Connect (current affairs & theories)"],
  grievancesCategories: ["Register a complaint"],
  profileOptions: [
    "My Account",
    "My progress", 
    "Ask a Mentor",
    "Achievements",
    "My Course",
    "My Plan",
    "Saved"
  ]
} as const

// Sidebar navigation items
export const SIDEBAR_ITEMS = {
  student: [
    { label: "My Courses", icon: "BookOpen", href: "/courses" },
    { label: "Quizzes", icon: "FileText", href: "/quizzes" },
    { label: "Exam Schedule", icon: "Calendar", href: "/schedule" },
    { label: "Grades", icon: "Award", href: "/grades" },
    { label: "Discussion Forum", icon: "MessageSquare", href: "/forum" },
    { label: "Newsletter Signup", icon: "Mail", href: "/newsletter" }
  ],
  professor: [
    { label: "Course Management", icon: "BookOpen", href: "/manage-courses" },
    { label: "Student Analytics", icon: "Users", href: "/analytics" },
    { label: "Create Assignment", icon: "FileText", href: "/assignments" },
    { label: "Grade Management", icon: "Award", href: "/grade-management" }
  ]
} as const

// Contact information
export const CONTACT_INFO = {
  phone: "+91 98765 43210",
  email: "info@studyyourbit.com",
  address: "Mumbai, Maharashtra, India"
} as const

// Social media links
export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/studyyourbit",
  linkedin: "https://linkedin.com/company/studyyourbit",
  youtube: "https://youtube.com/@studyyourbit",
  twitter: "https://twitter.com/studyyourbit"
} as const

// Sample course data
export const SAMPLE_COURSES = [
  {
    id: "political-science-101",
    title: "Introduction to Political Science",
    description: "A comprehensive course covering the fundamental concepts, theories, and practices of political science. Perfect for beginners and intermediate students.",
    thumbnail: "/placeholder.jpg",
    tags: ["Political Science", "Beginner", "University Level"],
    duration: "12 weeks",
    level: "Beginner" as const,
    rating: 4.8,
    reviewCount: 1247,
    price: 2999,
    enrolledStudents: 15420,
    lastUpdated: "2024-01-15",
    language: "English",
    certificate: true,
    instructor: {
      id: "prof-smith",
      name: "Dr. Samriddhi Sengupta",
      role: "Associate Professor",
      bio: "Dr. Samriddhi Sengupta is an Associate Professor of Political Science with over 15 years of teaching experience. She specializes in comparative politics and international relations.",
      photo: "/placeholder-user.jpg",
      rating: 4.9,
      reviewCount: 892,
      coursesCount: 8,
      studentsCount: 25000,
      expertise: ["Comparative Politics", "International Relations", "Political Theory"]
    },
    learningOutcomes: [
      "Understand fundamental political concepts and theories",
      "Analyze different political systems and their structures",
      "Develop critical thinking skills for political analysis",
      "Learn research methods in political science",
      "Apply theoretical knowledge to real-world political scenarios",
      "Prepare for advanced studies in political science"
    ],
    syllabus: [
      {
        id: "module-1",
        title: "Introduction to Political Science",
        description: "Basic concepts and scope of political science",
        duration: "2 weeks",
        lessons: [
          { id: "lesson-1", title: "What is Political Science?", duration: "45 min", type: "video" as const },
          { id: "lesson-2", title: "Key Concepts and Definitions", duration: "60 min", type: "video" as const },
          { id: "lesson-3", title: "Reading Assignment", duration: "30 min", type: "reading" as const },
          { id: "lesson-4", title: "Quiz: Basic Concepts", duration: "20 min", type: "quiz" as const }
        ]
      },
      {
        id: "module-2",
        title: "Political Systems and Institutions",
        description: "Understanding different types of political systems",
        duration: "3 weeks",
        lessons: [
          { id: "lesson-5", title: "Democracy and Its Variants", duration: "50 min", type: "video" as const },
          { id: "lesson-6", title: "Authoritarian Regimes", duration: "45 min", type: "video" as const },
          { id: "lesson-7", title: "Political Institutions", duration: "55 min", type: "video" as const },
          { id: "lesson-8", title: "Case Study Analysis", duration: "40 min", type: "reading" as const }
        ]
      },
      {
        id: "module-3",
        title: "Political Theory",
        description: "Classical and modern political theories",
        duration: "3 weeks",
        lessons: [
          { id: "lesson-9", title: "Classical Political Thinkers", duration: "60 min", type: "video" as const },
          { id: "lesson-10", title: "Modern Political Theories", duration: "55 min", type: "video" as const },
          { id: "lesson-11", title: "Contemporary Debates", duration: "45 min", type: "video" as const },
          { id: "lesson-12", title: "Theory Application Assignment", duration: "90 min", type: "assignment" as const }
        ]
      },
      {
        id: "module-4",
        title: "International Relations",
        description: "Global politics and international systems",
        duration: "2 weeks",
        lessons: [
          { id: "lesson-13", title: "International System", duration: "50 min", type: "video" as const },
          { id: "lesson-14", title: "Foreign Policy Analysis", duration: "45 min", type: "video" as const },
          { id: "lesson-15", title: "Global Issues", duration: "40 min", type: "video" as const }
        ]
      },
      {
        id: "module-5",
        title: "Research Methods",
        description: "How to conduct political science research",
        duration: "2 weeks",
        lessons: [
          { id: "lesson-16", title: "Research Design", duration: "55 min", type: "video" as const },
          { id: "lesson-17", title: "Data Collection Methods", duration: "50 min", type: "video" as const },
          { id: "lesson-18", title: "Final Research Project", duration: "120 min", type: "assignment" as const }
        ]
      }
    ],
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    demoThumbnail: "/placeholder.jpg"
  }
] as const

// Sample reviews
export const SAMPLE_REVIEWS = [
  {
    id: "review-1",
    user: {
      name: "Priya Sharma",
      photo: "/placeholder-user.jpg"
    },
    rating: 5,
    comment: "Excellent course! Dr. Smith explains complex political concepts in a very clear and engaging way. The course structure is well-organized and the assignments are practical.",
    date: "2024-01-10",
    helpful: 24
  },
  {
    id: "review-2",
    user: {
      name: "Rahul Patel",
      photo: "/placeholder-user.jpg"
    },
    rating: 4,
    comment: "Great introduction to political science. The instructor is knowledgeable and the content is relevant. Would recommend for anyone interested in politics.",
    date: "2024-01-08",
    helpful: 18
  },
  {
    id: "review-3",
    user: {
      name: "Anjali Desai",
      photo: "/placeholder-user.jpg"
    },
    rating: 5,
    comment: "This course exceeded my expectations. The real-world examples and case studies make the theoretical concepts easy to understand. Highly recommended!",
    date: "2024-01-05",
    helpful: 31
  }
] as const 