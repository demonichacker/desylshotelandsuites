"use client"

import { useState, useEffect } from "react"
import { Download, MessageCircle } from "lucide-react"

export default function AdminBookings() {
  const [bookings, setBookings] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchBookings()
  }, [])

  const fetchBookings = async () => {
    try {
      const response = await fetch("/api/bookings")
      const data = await response.json()
      setBookings(data)
    } catch (error) {
      console.error("Error fetching bookings:", error)
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = (id: string, status: string) => {
    setBookings(bookings.map((b) => (b.id === id ? { ...b, status } : b)))
  }

  const exportCSV = () => {
    const headers = ["ID", "Name", "Email", "Phone", "Check-in", "Check-out", "Room Type", "Guests", "Status"]
    const rows = bookings.map((b) => [
      b.id,
      b.name,
      b.email,
      b.phone,
      b.checkIn,
      b.checkOut,
      b.roomType,
      b.guests,
      b.status,
    ])

    const csv = [headers, ...rows].map((row) => row.join(",")).join("\n")
    const blob = new Blob([csv], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "bookings.csv"
    a.click()
  }

  if (loading) {
    return <div className="text-center py-8">Loading bookings...</div>
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-serif font-bold">Bookings</h2>
        <button
          onClick={exportCSV}
          className="flex items-center gap-2 bg-primary text-secondary px-4 py-2 rounded font-semibold hover:opacity-80 transition-colors"
        >
          <Download size={20} />
          Export CSV
        </button>
      </div>

      {bookings.length === 0 ? (
        <div className="text-center py-8 text-muted">No bookings yet</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-accent border-b border-border">
                <th className="px-4 py-3 text-left font-semibold">Name</th>
                <th className="px-4 py-3 text-left font-semibold">Email</th>
                <th className="px-4 py-3 text-left font-semibold">Check-in</th>
                <th className="px-4 py-3 text-left font-semibold">Check-out</th>
                <th className="px-4 py-3 text-left font-semibold">Room</th>
                <th className="px-4 py-3 text-left font-semibold">Status</th>
                <th className="px-4 py-3 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="border-b border-border hover:bg-accent transition-colors">
                  <td className="px-4 py-3">{booking.name}</td>
                  <td className="px-4 py-3 text-sm">{booking.email}</td>
                  <td className="px-4 py-3">{booking.checkIn}</td>
                  <td className="px-4 py-3">{booking.checkOut}</td>
                  <td className="px-4 py-3">{booking.roomType}</td>
                  <td className="px-4 py-3">
                    <select
                      value={booking.status}
                      onChange={(e) => updateStatus(booking.id, e.target.value)}
                      className="px-2 py-1 border border-border rounded text-sm"
                    >
                      <option>Pending</option>
                      <option>Contacted</option>
                      <option>Confirmed</option>
                      <option>Cancelled</option>
                    </select>
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href={`https://wa.me/${booking.phone}?text=Hello%20${booking.name}%2C%20regarding%20your%20booking...`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:text-green-600 flex items-center gap-1"
                    >
                      <MessageCircle size={18} />
                      Chat
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
