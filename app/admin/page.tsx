"use client"

import type React from "react"

import { useState } from "react"
import { LogOut, Menu, X } from "lucide-react"
import AdminRooms from "@/components/admin/admin-rooms"
import AdminOffers from "@/components/admin/admin-offers"
import AdminBookings from "@/components/admin/admin-bookings"
import AdminBlog from "@/components/admin/admin-blog"

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [activeTab, setActiveTab] = useState("bookings")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple password check (in production, use proper authentication)
    if (password === "desyls2025") {
      setIsAuthenticated(true)
      setPassword("")
    } else {
      alert("Invalid password")
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="bg-accent p-8 rounded-lg max-w-md w-full">
          <h1 className="text-3xl font-serif font-bold mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter admin password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-secondary py-2 rounded font-semibold hover:opacity-80 transition-colors"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    )
  }

  const tabs = [
    { id: "bookings", label: "Bookings" },
    { id: "rooms", label: "Rooms" },
    { id: "offers", label: "Offers" },
    { id: "blog", label: "Blog" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-secondary text-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-serif font-bold">DE-SYLS Admin</h1>
          <div className="flex items-center gap-4">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <LogOut size={20} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-secondary border-t border-gray-700">
            <div className="flex flex-col gap-2 p-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id)
                    setMobileMenuOpen(false)
                  }}
                  className={`px-4 py-2 rounded text-left ${
                    activeTab === tab.id ? "bg-primary text-secondary" : "hover:bg-gray-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:block w-48 bg-accent border-r border-border min-h-screen">
          <nav className="p-4 space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full px-4 py-2 rounded text-left font-semibold transition-colors ${
                  activeTab === tab.id ? "bg-primary text-secondary" : "hover:bg-border"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8">
          {activeTab === "bookings" && <AdminBookings />}
          {activeTab === "rooms" && <AdminRooms />}
          {activeTab === "offers" && <AdminOffers />}
          {activeTab === "blog" && <AdminBlog />}
        </main>
      </div>
    </div>
  )
}
