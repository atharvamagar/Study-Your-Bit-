"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageSquare, Send, X } from "lucide-react"
import { COLORS } from "@/lib/constants"
import { ChatMessage } from "@/lib/types"

interface ChatBotProps {
  className?: string
}

export function ChatBot({ className }: ChatBotProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    { text: "Hello! How can I help you today?", isUser: false, timestamp: new Date() }
  ])
  const [inputMessage, setInputMessage] = useState("")

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      // Add user message
      setMessages(prev => [...prev, { 
        text: inputMessage, 
        isUser: true, 
        timestamp: new Date() 
      }])
      
      // Simulate bot response (replace with actual API call)
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: "I'm SYB Bot, your study assistant. I can help you with course content, exam preparation, and more!", 
          isUser: false,
          timestamp: new Date()
        }])
      }, 1000)
      
      setInputMessage("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl p-4 w-80 h-96 mb-4 flex flex-col border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
                <MessageSquare className="w-4 h-4" style={{ color: COLORS.primary.blue }} />
              </div>
              <div>
                <h3 className="font-semibold text-sm" style={{ color: COLORS.primary.blue }}>SYB Bot</h3>
                <p className="text-xs text-gray-500">Online</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="hover:bg-gray-100"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="flex-1 overflow-y-auto mb-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.isUser
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  {message.timestamp && (
                    <p className={`text-xs mt-1 ${
                      message.isUser ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Button
              onClick={handleSendMessage}
              className="rounded-full p-2 hover:scale-105 transition-transform"
              style={{ backgroundColor: COLORS.primary.blue }}
            >
              <Send className="w-4 h-4 text-white" />
            </Button>
          </div>
        </div>
      )}
      
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full shadow-lg hover:shadow-xl transition-all duration-200 bg-white p-0 flex items-center justify-center hover:scale-105"
        style={{ width: 56, height: 56 }}
      >
        <img 
          src="/chatbot.png" 
          alt="Chatbot" 
          className="w-12 h-12 rounded-full object-cover border-2 border-gray-200" 
        />
      </Button>
    </div>
  )
} 