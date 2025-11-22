"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Star, Wifi, Tv, Coffee, Lock, Utensils, Wind } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const roomsData = {
  "executive-class": {
    name: "Executive Class",
    roomNumbers: [201, 202, 301, 302],
    price: 100000,
    size: 42,
    sleeps: 2,
    images: [
      "/exe1.jpg",
      "/exe2.jpg",
      "/exe3.jpg",
      "/exe4.jpg",
      "/exe5.jpg",
    ],
    description:
      "Spacious suite with king bed, work desk, mini-bar, and private balcony. Perfect for business travelers.",
    longDescription:
      "Our Executive Class offers the perfect blend of comfort and functionality. Featuring a spacious bedroom with a premium king bed, a dedicated work area with high-speed internet, and a private balcony overlooking the city. The suite includes a mini-bar, safe, and marble bathroom with premium toiletries.",
    amenities: [
      { icon: Wifi, name: "Free Wi-Fi", description: "High-speed internet" },
      { icon: Wind, name: "AC", description: "Climate control" },
      { icon: Tv, name: "TV", description: '55" Smart TV' },
      { icon: Coffee, name: "Mini-bar", description: "Complimentary beverages" },
      { icon: Lock, name: "Safe", description: "In-room safe" },
      { icon: Utensils, name: "Room service", description: "24/7 available" },
    ],
    policies: {
      checkin: "2:00 PM",
      checkout: "12:00 PM",
      cancellation: "Free cancellation up to 48 hours before arrival",
    },
    rating: 4.8,
    reviews: 124,
  },
  "business-class": {
    name: "Business Class",
    roomNumbers: [101, 102, 204, 303, 304, 305],
    price: 85000,
    size: 28,
    sleeps: 2,
    images: [
      "/business1.jpg",
      "/business1.jpg",
      "/business2.jpg",
      "/business3.jpg",
    ],
    description: "Comfortable room with plush bedding and elegant décor.",
    longDescription:
      "The Business Class combines comfort with style. Featuring a queen bed with premium linens, modern furnishings, and elegant décor. Perfect for couples or business travelers seeking a comfortable stay with all essential amenities.",
    amenities: [
      { icon: Wifi, name: "Free Wi-Fi", description: "High-speed internet" },
      { icon: Wind, name: "AC", description: "Climate control" },
      { icon: Tv, name: "TV", description: '43" Smart TV' },
      { icon: Coffee, name: "Tea/coffee station", description: "Complimentary beverages" },
    ],
    policies: {
      checkin: "2:00 PM",
      checkout: "12:00 PM",
      cancellation: "Free cancellation up to 48 hours before arrival",
    },
    rating: 4.7,
    reviews: 98,
  },
  "delux-class": {
    name: "Delux Class",
    roomNumbers: [103, 203, 205, 206, 306],
    price: 75000,
    size: 28,
    sleeps: 2,
    images: [
      "/deluxe1.jpg",
      "/deluxe2.jpg",
      "/deluxe3.jpg",
      "/deluxe4.jpg",
      "/deluxe1.jpg",
      "/deluxe-room-interior.jpg",
    ],
    description: "Elegant room with premium amenities and comfortable accommodations.",
    longDescription:
      "Our Delux Class offers elegant accommodations with premium amenities. Featuring a comfortable queen bed with premium linens, modern furnishings, and sophisticated décor. Ideal for travelers seeking comfort and style.",
    amenities: [
      { icon: Wifi, name: "Free Wi-Fi", description: "High-speed internet" },
      { icon: Wind, name: "AC", description: "Climate control" },
      { icon: Tv, name: "TV", description: '43" Smart TV' },
      { icon: Coffee, name: "Tea/coffee station", description: "Complimentary beverages" },
    ],
    policies: {
      checkin: "2:00 PM",
      checkout: "12:00 PM",
      cancellation: "Free cancellation up to 48 hours before arrival",
    },
    rating: 4.7,
    reviews: 98,
  },
}

export default function RoomDetailPageClient({ params }: { params: { id: string } }) {
  const room = roomsData[params.id as keyof typeof roomsData]

  if (!room) {
    // Redirect to rooms page if room not found
    if (typeof window !== 'undefined') {
      window.location.replace('/rooms');
    }
    return null;
  }

  const [email, setEmail] = useState("")

  const handleBooking = () => {
    if (!email.trim()) {
      // Replace alert with better UX - show error message
      const errorDiv = document.createElement('div')
      errorDiv.className = 'fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded shadow-lg z-50'
      errorDiv.textContent = 'Please enter your email address.'
      document.body.appendChild(errorDiv)
      setTimeout(() => errorDiv.remove(), 3000)
      return
    }
    // Navigate to payment unavailable page with query params
    const query = new URLSearchParams({
      room: params.id,
      email: email,
      price: room.price.toString()
    }).toString()
    window.location.assign(`/payment-unavailable?${query}`)
  }

  const scrollToBookingForm = () => {
    const bookingForm = document.getElementById('booking-form')
    if (bookingForm) {
      bookingForm.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <Header />

      {/* Breadcrumbs */}
      <section className="bg-accent py-4 border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 text-sm">
            <Link href="/" className="text-primary hover:opacity-80">
              Home
            </Link>
            <span className="text-muted">/</span>
            <Link href="/rooms" className="text-primary hover:opacity-80">
              Rooms
            </Link>
            <span className="text-muted">/</span>
            <span className="text-foreground">{room.name}</span>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <img
                src={room.images[0] || "/placeholder.svg"}
                alt={room.name}
                className="w-full h-96 object-cover rounded"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {room.images.slice(1, 5).map((image, i) => (
                <img
                  key={i}
                  src={image || "/placeholder.svg"}
                  alt={`${room.name} ${i + 2}`}
                  className="w-full h-44 object-cover rounded"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Book Now Section */}
      <section className="py-12 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Ready to Book?</h2>
          <p className="text-xl mb-8 opacity-90">Experience the luxury and comfort of our {room.name}</p>
          <button
            onClick={scrollToBookingForm}
            className="bg-white text-primary px-12 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            BOOK NOW
          </button>
        </div>
      </section>

      {/* Room Info */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            <h1 className="text-4xl font-serif font-bold mb-4">{room.name}</h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < Math.floor(room.rating) ? "fill-primary text-primary" : "text-border"}
                  />
                ))}
              </div>
              <span className="font-semibold">{room.rating}</span>
              <span className="text-muted">({room.reviews} reviews)</span>
            </div>

            <p className="text-lg text-muted mb-6">{room.longDescription}</p>

            {/* Available Room Numbers */}
            <div className="mb-8 p-6 bg-accent rounded-lg">
              <h2 className="text-2xl font-serif font-bold mb-4">Available Rooms</h2>
              <div className="flex flex-wrap gap-3">
                {room.roomNumbers.map((roomNum) => (
                  <div key={roomNum} className="bg-primary text-white px-4 py-2 rounded-full font-semibold text-center">
                    Room {roomNum}
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <h2 className="text-2xl font-serif font-bold mb-6">Amenities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {room.amenities.map((amenity) => {
                  const Icon = amenity.icon
                  return (
                    <div key={amenity.name} className="flex gap-4 p-4 bg-accent rounded">
                      <Icon size={24} className="text-primary shrink-0" />
                      <div>
                        <h3 className="font-semibold">{amenity.name}</h3>
                        <p className="text-sm text-muted">{amenity.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Policies */}
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6">Policies</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-accent rounded">
                  <h3 className="font-semibold mb-2">Check-in</h3>
                  <p className="text-muted">{room.policies.checkin}</p>
                </div>
                <div className="p-4 bg-accent rounded">
                  <h3 className="font-semibold mb-2">Check-out</h3>
                  <p className="text-muted">{room.policies.checkout}</p>
                </div>
                <div className="p-4 bg-accent rounded">
                  <h3 className="font-semibold mb-2">Cancellation</h3>
                  <p className="text-muted">{room.policies.cancellation}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="md:col-span-1">
            <div id="booking-form" className="bg-accent p-8 rounded sticky top-24">
              <p className="text-primary font-semibold text-sm mb-2">Price per night</p>
              <p className="text-4xl font-serif font-bold mb-2">₦{room.price.toLocaleString()}</p>
              <p className="text-muted text-sm mb-6">Taxes and fees may apply</p>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded"
                    aria-label="Email address"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <button
                onClick={handleBooking}
                className="w-full bg-primary text-secondary py-3 rounded font-semibold hover:opacity-80 transition-colors mb-3"
              >
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
