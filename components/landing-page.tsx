"use client"

import { useState } from "react"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "./app-sidebar"
import { Header } from "./header"
import { Marquee } from "./marquee"
import { HeroSection } from "./sections/hero-section"
import { FeaturesSection } from "./sections/features-section"
import { CommunitySection } from "./sections/community-section"
import { Footer } from "./footer"
import { ChatBot } from "./chatbot"
import TestimonialSlider from "@/components/ui/testimonial-slider"

export function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLoginToggle = () => {
    setIsLoggedIn(!isLoggedIn)
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
            <Marquee text="🎉 Welcome to Study Your Bit! New courses launching soon. Enroll now and boost your learning journey! 🎓" />

            {/* Main Content Container */}
            <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 mt-8">
              {/* Hero Section */}
              <HeroSection />

              {/* Testimonials Section */}
              <TestimonialSlider />

              {/* Features Section */}
              <FeaturesSection />

              {/* Community Section */}
              <CommunitySection />

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