"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
    dataLayer: any[];
  }
}

export default function Analytics() {
  useEffect(() => {
    // Google Analytics
    if (typeof window !== "undefined") {
      // Track page views
      const handleRouteChange = () => {
        if (window.gtag) {
          window.gtag("config", "G-XXXXXXXXXX", {
            page_path: window.location.pathname,
          })
        }
      }

      window.addEventListener("popstate", handleRouteChange)
      return () => window.removeEventListener("popstate", handleRouteChange)
    }
  }, [])

  return null
}
