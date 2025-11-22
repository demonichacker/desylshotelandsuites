"use client"

import { useEffect, useState, Suspense } from "react"
import { usePathname, useSearchParams } from "next/navigation"

function PageLoaderContent() {
  const [isLoading, setIsLoading] = useState(false)
  const [isFading, setIsFading] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    setIsLoading(true)
    setIsFading(false)
    const fadeTimer = setTimeout(() => {
      setIsFading(true)
    }, 800)
    const hideTimer = setTimeout(() => {
      setIsLoading(false)
    }, 1300)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [pathname, searchParams])

  if (!isLoading) return null

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-sm transition-opacity duration-500 ${isFading ? "opacity-0" : "opacity-100"}`}>
      <div className="flex flex-col items-center gap-4">
        {/* Hotel-themed loader spinner */}
        <div className="relative w-20 h-20">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 border-4 border-transparent border-t-primary border-r-primary rounded-full animate-spin"></div>
          
          {/* Middle rotating ring with delay */}
          <div 
            className="absolute inset-2 border-3 border-transparent border-b-primary/60 rounded-full animate-[spin_2s_linear_infinite_reverse_0.5s]"
          ></div>
          
          {/* Inner hotel icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg 
              className="w-8 h-8 text-primary"
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M3 2h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm1 2v16h16V4H4zm3 2h2v2H7V6zm6 0h2v2h-2V6zm-6 4h2v2H7v-2zm6 0h2v2h-2v-2zm-6 4h2v2H7v-2zm6 0h2v2h-2v-2z"/>
            </svg>
          </div>
        </div>
        
        {/* Loading text with animation */}
        <div className="flex items-center gap-1">
          <span className="text-primary font-semibold">Loading</span>
          <span className="flex gap-1">
            <span className="inline-block w-1 h-1 bg-primary rounded-full animate-bounce [animation-delay:0s]"></span>
            <span className="inline-block w-1 h-1 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></span>
            <span className="inline-block w-1 h-1 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></span>
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </div>
  )
}

export default function PageLoader() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageLoaderContent />
    </Suspense>
  )
}