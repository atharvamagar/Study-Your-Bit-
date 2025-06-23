"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu"
import {
  ChevronDown,
  Menu,
  X,
  Bell,
  HelpCircle,
  User,
} from "lucide-react"
import { COLORS, NAVIGATION } from "@/lib/constants"

interface HeaderProps {
  isLoggedIn: boolean
  onLoginToggle: () => void
}

export function Header({ isLoggedIn, onLoginToggle }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="shadow-sm border-b" style={{ backgroundColor: COLORS.primary.header }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center space-x-6 flex-1">
            <a href="/" className="hover:text-white text-sm text-center py-2 text-white transition-colors">
              Home
            </a>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-white text-sm text-center py-2 text-white transition-colors">
                <span>Courses</span>
                <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {NAVIGATION.subjects.map((subject) => (
                  <DropdownMenuSub key={subject}>
                    <DropdownMenuSubTrigger className="text-center">
                      <span>{subject}</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent className="w-48">
                        {NAVIGATION.universities.map((university) => (
                          <DropdownMenuSub key={university}>
                            <DropdownMenuSubTrigger className="text-center">
                              <span>{university}</span>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                              <DropdownMenuSubContent className="w-48">
                                {NAVIGATION.years.map((year) => (
                                  <DropdownMenuSub key={year}>
                                    <DropdownMenuSubTrigger className="text-center">
                                      <span>{year}</span>
                                    </DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                      <DropdownMenuSubContent className="w-48">
                                        {NAVIGATION.semesters.map((semester) => (
                                          <DropdownMenuSub key={semester}>
                                            <DropdownMenuSubTrigger className="text-center">
                                              <span>{semester}</span>
                                            </DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                              <DropdownMenuSubContent className="w-48">
                                                {NAVIGATION.chapters.map((chapter) => (
                                                  <DropdownMenuItem key={chapter} className="text-center">
                                                    <span>{chapter}</span>
                                                  </DropdownMenuItem>
                                                ))}
                                              </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                          </DropdownMenuSub>
                                        ))}
                                      </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                  </DropdownMenuSub>
                                ))}
                              </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                          </DropdownMenuSub>
                        ))}
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#exam-ai" className="hover:text-white text-sm text-center py-2 text-white transition-colors">
              Exam AI
            </a>
            <a href="#program" className="hover:text-white text-sm text-center py-2 text-white transition-colors">
              Program
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-white text-sm text-center py-2 text-white transition-colors">
                <span>Resources</span>
                <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {NAVIGATION.blogCategories.map((category) => (
                  <DropdownMenuItem key={category} className="text-center">{category}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#about" className="hover:text-white text-sm text-center py-2 text-white transition-colors">
              About Us
            </a>
            <a href="#contact" className="hover:text-white text-sm text-center py-2 text-white transition-colors">
              Contact Us
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-white text-sm text-center py-2 text-white transition-colors">
                <span>Grievances</span>
                <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {NAVIGATION.grievancesCategories.map((category) => (
                  <DropdownMenuItem key={category} className="text-center">{category}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* User Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="h-10 px-3 text-white hover:bg-white/10" aria-label="Notifications">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="h-10 px-3 text-white hover:bg-white/10">
              <HelpCircle className="w-4 h-4" />
            </Button>

            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-10 px-3 text-white hover:bg-white/10">
                    <User className="w-4 h-4 mr-1" />
                    <span className="text-sm text-center">Profile</span>
                    <ChevronDown className="w-3 h-3 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {NAVIGATION.profileOptions.map((option) => (
                    <DropdownMenuItem key={option} className="text-center">{option}</DropdownMenuItem>
                  ))}
                  <DropdownMenuItem className="text-center">QnA Forum</DropdownMenuItem>
                  <DropdownMenuItem className="text-center">Feedback</DropdownMenuItem>
                  <DropdownMenuItem onClick={onLoginToggle} className="text-center">Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex space-x-3">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onLoginToggle}
                  className="h-10 px-4 text-sm text-center text-white hover:bg-white/10"
                >
                  Login
                </Button>
                <Button 
                  size="sm" 
                  className="h-10 px-4 text-sm text-center text-white bg-white/20 hover:bg-white/30" 
                >
                  Sign Up
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden h-10 px-3 text-white hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/20">
            <div className="space-y-4">
              {/* Mobile navigation items */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2 text-white">Courses</h3>
                  <div className="pl-4 space-y-2">
                    {NAVIGATION.subjects.map((subject) => (
                      <div key={subject} className="space-y-1">
                        <div className="font-medium text-white/90">{subject}</div>
                        <div className="pl-3 space-y-1">
                          {NAVIGATION.years.map((year) => (
                            <div key={year} className="space-y-1">
                              <div className="text-sm text-white/80">{year}</div>
                              <div className="pl-3 space-y-1">
                                {NAVIGATION.semesters.map((semester) => (
                                  <div key={semester} className="space-y-1">
                                    <div className="text-sm text-white/80">{semester}</div>
                                    <div className="pl-3 space-y-1">
                                      {NAVIGATION.chapters.map((chapter) => (
                                        <a
                                          key={chapter}
                                          href="#"
                                          className="block text-sm text-white/70 hover:text-white transition-colors"
                                        >
                                          {chapter}
                                        </a>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <a href="#exam-ai" className="block text-white/90 hover:text-white transition-colors">
                  Exam AI
                </a>
                <a href="#program" className="block text-white/90 hover:text-white transition-colors">
                  Program
                </a>
                
                <div>
                  <h3 className="font-semibold mb-2 text-white">Resources</h3>
                  <div className="pl-4 space-y-2">
                    {NAVIGATION.blogCategories.map((category) => (
                      <a
                        key={category}
                        href="#"
                        className="block text-white/70 hover:text-white transition-colors"
                      >
                        {category}
                      </a>
                    ))}
                  </div>
                </div>
                
                <a href="#about" className="block text-white/90 hover:text-white transition-colors">
                  About Us
                </a>
                <a href="#contact" className="block text-white/90 hover:text-white transition-colors">
                  Contact Us
                </a>
                <a href="#grievances" className="block text-white/90 hover:text-white transition-colors">
                  Grievances
                </a>

                <div className="pt-4 border-t border-white/20">
                  {isLoggedIn ? (
                    <div className="space-y-2">
                      {NAVIGATION.profileOptions.map((option) => (
                        <a key={option} href="#" className="block text-white/90 hover:text-white transition-colors">
                          {option}
                        </a>
                      ))}
                      <a href="#" className="block text-white/90 hover:text-white transition-colors">QnA Forum</a>
                      <a href="#" className="block text-white/90 hover:text-white transition-colors">Feedback</a>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={onLoginToggle}
                        className="w-full justify-start text-white/90 hover:text-white hover:bg-white/10"
                      >
                        Logout
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={onLoginToggle}
                        className="w-full text-white/90 hover:text-white hover:bg-white/10"
                      >
                        Login
                      </Button>
                      <Button size="sm" className="w-full text-white bg-white/20 hover:bg-white/30">
                        Sign Up
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 