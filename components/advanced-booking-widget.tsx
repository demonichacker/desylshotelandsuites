"use client"

import type React from "react"

import { useState } from "react"
import { AlertCircle } from "lucide-react"

export default function AdvancedBookingWidget() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    roomType: "",
    specialRequests: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone is required"
    if (!formData.checkIn) newErrors.checkIn = "Check-in date is required"
    if (!formData.checkOut) newErrors.checkOut = "Check-out date is required"

    if (formData.checkIn && formData.checkOut) {
      if (new Date(formData.checkIn) >= new Date(formData.checkOut)) {
        newErrors.checkOut = "Check-out must be after check-in"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Send booking to backend
      await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      // Show success message
      alert("Thank you for your booking request! We will contact you shortly.")

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        guests: "1",
        roomType: "",
        specialRequests: "",
      })
    } catch (error) {
      console.error("Booking error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-accent p-8 rounded-lg">
      <h3 className="text-2xl font-serif font-bold mb-6">Book Your Stay</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold mb-2">Full Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.name ? "border-red-500" : "border-border"
            }`}
            placeholder="Your name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.email ? "border-red-500" : "border-border"
              }`}
              placeholder="your@email.com"
              aria-label="Email address"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Phone</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.phone ? "border-red-500" : "border-border"
              }`}
              placeholder="Your phone"
              aria-label="Phone number"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
        </div>

        {/* Check-in & Check-out */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Check-in Date</label>
            <input
              type="date"
              value={formData.checkIn}
              onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.checkIn ? "border-red-500" : "border-border"
              }`}
              aria-label="Check-in date"
            />
            {errors.checkIn && <p className="text-red-500 text-sm mt-1">{errors.checkIn}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Check-out Date</label>
            <input
              type="date"
              value={formData.checkOut}
              onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.checkOut ? "border-red-500" : "border-border"
              }`}
              aria-label="Check-out date"
            />
            {errors.checkOut && <p className="text-red-500 text-sm mt-1">{errors.checkOut}</p>}
          </div>
        </div>

        {/* Guests & Room Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Number of Guests</label>
            <select
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Number of guests"
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? "Guest" : "Guests"}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Room Type</label>
            <select
              value={formData.roomType}
              onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
              className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Room type"
            >
              <option value="">Any Room Type</option>
              <option value="Executive Suite">Executive Suite</option>
              <option value="Deluxe Room">Deluxe Room</option>
              <option value="Family Suite">Family Suite</option>
              <option value="Standard Single">Standard Single</option>
            </select>
          </div>
        </div>

        {/* Special Requests */}
        <div>
          <label className="block text-sm font-semibold mb-2">Special Requests (Optional)</label>
          <textarea
            value={formData.specialRequests}
            onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
            className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary h-24 resize-none"
            placeholder="Any special requests or preferences..."
          />
        </div>

        {/* Info */}
        <div className="flex gap-2 p-3 bg-blue-50 rounded text-sm text-blue-800">
          <AlertCircle size={16} className="shrink-0 mt-0.5" />
          <p>Your booking request will be processed. We will contact you shortly to confirm details.</p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-secondary py-3 rounded font-semibold hover:opacity-80 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? "Processing..." : "SUBMIT BOOKING REQUEST"}
        </button>
      </form>
    </div>
  )
}
