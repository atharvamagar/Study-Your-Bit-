"use client"

import { useState } from "react"
import { Play, ExternalLink } from "lucide-react"

interface DemoClassProps {
  videoUrl: string
  thumbnail: string
  title: string
}

export function DemoClass({ videoUrl, thumbnail, title }: DemoClassProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
        Preview this course
      </h2>
      
      <div className="relative">
        {!isPlaying ? (
          <div className="relative">
            <img 
              src={thumbnail} 
              alt={`${title} preview`}
              className="w-full h-64 sm:h-80 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center">
              <button
                onClick={handlePlay}
                className="bg-white/90 backdrop-blur-sm hover:bg-white transition-colors p-4 rounded-full shadow-lg"
              >
                <Play className="w-8 h-8 text-gray-900 fill-current ml-1" />
              </button>
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm font-medium">Watch a free preview</p>
              <p className="text-xs opacity-90">Get a taste of what you'll learn</p>
            </div>
          </div>
        ) : (
          <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden">
            <iframe
              src={videoUrl}
              title={`${title} demo`}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-gray-600">
          This preview gives you a glimpse into the course content and teaching style.
        </p>
        <a 
          href={videoUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
        >
          <ExternalLink className="w-4 h-4" />
          Open in new tab
        </a>
      </div>
    </div>
  )
} 