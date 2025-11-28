"use client"

import { useState } from "react"

export default function BookingWidget() {
  const [roomType, setRoomType] = useState("")

  const handleBooking = () => {
    const message = `Hello DE-SYLS HOTELS & SUITES,
I would like to make a reservation.

Room Type: ${roomType || "Any"}
Guests: 1 Guest
Contact Email: [Your Email]
Phone: [Your Phone]`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/2348080987422?text=${encodedMessage}`, "_blank")
  }

  return (
    <div className="flex flex-col md:flex-row gap-3 items-center justify-center md:justify-start">
      <div className="flex flex-col gap-1">
        <label className="text-xs text-white font-semibold">Room Type</label>
        <select
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
          className="bg-white bg-opacity-20 text-white px-3 py-2 rounded outline-none text-sm border border-white border-opacity-30 focus:bg-opacity-30 focus:border-opacity-50"
          aria-label="Room Type"
        >
          <option value="" className="text-foreground">
            Any Room
          </option>
          <option value="Executive Suite" className="text-foreground">
            Executive Suite
          </option>
          <option value="Deluxe Room" className="text-foreground">
            Deluxe Room
          </option>
          <option value="Family Suite" className="text-foreground">
            Family Suite
          </option>
          <option value="Standard Single" className="text-foreground">
            Standard Single
          </option>
        </select>
      </div>

      <button
        onClick={handleBooking}
        className="bg-primary text-black px-6 py-2 rounded font-semibold hover:opacity-80 transition-colors whitespace-nowrap"
      >
        book now
      </button>
    </div>
  )
}
