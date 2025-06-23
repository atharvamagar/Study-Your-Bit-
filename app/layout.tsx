import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Study Your Bit - AI-Powered Learning Platform',
  description: 'Master your studies with AI-powered learning tools, comprehensive courses, and expert community support. Join thousands of students excelling in their academics.',
  keywords: 'education, AI learning, online courses, study platform, academic support, student resources',
  authors: [{ name: 'Study Your Bit Team' }],
  creator: 'Study Your Bit',
  publisher: 'Study Your Bit',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://studyyourbit.com'),
  openGraph: {
    title: 'Study Your Bit - AI-Powered Learning Platform',
    description: 'Master your studies with AI-powered learning tools and comprehensive educational resources.',
    url: 'https://studyyourbit.com',
    siteName: 'Study Your Bit',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study Your Bit - AI-Powered Learning Platform',
    description: 'Master your studies with AI-powered learning tools and comprehensive educational resources.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
