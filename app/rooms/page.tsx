"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

import { Star } from "lucide-react"
import Link from "next/link"
import { useState, useMemo } from "react"

const roomsData = [
  {
    id: "executive-class",
    name: "Executive Class",
    roomNumbers: [201, 202, 301, 302],
    price: 100000,
    size: 42,
    sleeps: 2,
    image: "/exe1.jpg",
    description:
      "Spacious suite with king bed, work desk, mini-bar, and private balcony. Perfect for business travelers.",
    amenities: ["Free Wi-Fi", "AC", "TV", "Mini-bar", "Safe", "Room service"],
    rating: 4.8,
    reviews: 124,
    category: "luxury",
  },
  {
    id: "business-class",
    name: "Business Class",
    roomNumbers: [101, 102, 204, 303, 304, 305],
    price: 85000,
    size: 28,
    sleeps: 2,
    image: "/business1.jpg",
    description: "Comfortable room with plush bedding and elegant décor.",
    amenities: ["Free Wi-Fi", "AC", "TV", "Tea/coffee station"],
    rating: 4.7,
    reviews: 98,
    category: "mid-range",
  },
  {
    id: "delux-class",
    name: "Delux Class",
    roomNumbers: [103, 203, 205, 206, 306],
    price: 75000,
    size: 28,
    sleeps: 2,
    image: "/deluxe1.jpg",
    description: "Elegant room with premium amenities and comfortable accommodations.",
    amenities: ["Free Wi-Fi", "AC", "TV", "Tea/coffee station"],
    rating: 4.7,
    reviews: 98,
    category: "budget",
  },
]

export default function RoomsPage() {
  const [filter, setFilter] = useState("all")
  const [sortBy, setSortBy] = useState("price-low")

  const filteredAndSortedRooms = useMemo(() => {
    let filtered = roomsData

    // Apply filter
    if (filter === "budget") {
      filtered = filtered.filter((room) => room.price <= 75000)
    } else if (filter === "mid-range") {
      filtered = filtered.filter((room) => room.price > 75000 && room.price <= 90000)
    } else if (filter === "luxury") {
      filtered = filtered.filter((room) => room.price > 90000)
    }

    // Apply sort
    const sorted = [...filtered]
    if (sortBy === "price-low") {
      sorted.sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-high") {
      sorted.sort((a, b) => b.price - a.price)
    } else if (sortBy === "rating") {
      sorted.sort((a, b) => b.rating - a.rating)
    }

    return sorted
  }, [filter, sortBy])

  return (
    <>
      <Header />
      

      {/* Page Header */}
      <section className="bg-accent py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Rooms & Suites</h1>
          <p className="text-lg text-muted">Discover our collection of luxurious accommodations</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-background py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded font-semibold hover:opacity-80 transition-colors ${
                  filter === "all"
                    ? "bg-primary text-secondary"
                    : "bg-accent text-foreground border border-border"
                }`}
              >
                All Rooms
              </button>
              <button
                onClick={() => setFilter("budget")}
                className={`px-4 py-2 rounded font-semibold hover:opacity-80 transition-colors ${
                  filter === "budget"
                    ? "bg-primary text-secondary"
                    : "bg-accent text-foreground border border-border"
                }`}
              >
                Budget
              </button>
              <button
                onClick={() => setFilter("mid-range")}
                className={`px-4 py-2 rounded font-semibold hover:opacity-80 transition-colors ${
                  filter === "mid-range"
                    ? "bg-primary text-secondary"
                    : "bg-accent text-foreground border border-border"
                }`}
              >
                Mid-Range
              </button>
              <button
                onClick={() => setFilter("luxury")}
                className={`px-4 py-2 rounded font-semibold hover:opacity-80 transition-colors ${
                  filter === "luxury"
                    ? "bg-primary text-secondary"
                    : "bg-accent text-foreground border border-border"
                }`}
              >
                Luxury
              </button>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-border rounded bg-background"
              aria-label="Sort rooms"
            >
              <option value="price-low">Sort by: Price (Low to High)</option>
              <option value="price-high">Sort by: Price (High to Low)</option>
              <option value="rating">Sort by: Rating</option>
            </select>
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredAndSortedRooms.map((room) => (
              <Link key={room.id} href={`/rooms/${room.id}`}>
                <div className="bg-accent rounded overflow-hidden hover:shadow-xl transition-shadow cursor-pointer h-full">
                  <img src={room.image || "/placeholder.svg"} alt={room.name} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-serif font-bold">{room.name}</h3>
                      <div className="flex items-center gap-1">
                        <Star size={16} className="fill-primary text-primary" />
                        <span className="font-semibold">{room.rating}</span>
                        <span className="text-sm text-muted">({room.reviews})</span>
                      </div>
                    </div>

                    <p className="text-primary font-semibold text-lg mb-3">₦{room.price.toLocaleString()} / night</p>

                    <div className="flex gap-4 text-sm text-muted mb-4">
                      <span>{room.size} m²</span>
                      <span>•</span>
                      <span>Sleeps {room.sleeps}</span>
                    </div>

                    <p className="text-muted mb-4">{room.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {room.amenities.slice(0, 3).map((amenity) => (
                        <span key={amenity} className="text-xs bg-primary text-secondary px-3 py-1 rounded">
                          {amenity}
                        </span>
                      ))}
                      {room.amenities.length > 3 && (
                        <span className="text-xs bg-border text-foreground px-3 py-1 rounded">
                          +{room.amenities.length - 3} more
                        </span>
                      )}
                    </div>

                    <button className="w-full bg-primary text-secondary py-3 rounded font-semibold hover:opacity-80 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
