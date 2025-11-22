"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

import { useState } from "react"
import { X } from "lucide-react"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    { id: 1, alt: "Executive Suite", category: "rooms", url: "/exe1.jpg" },
    { id: 2, alt: "Deluxe Room", category: "rooms", url: "/deluxe1.jpg" },
    { id: 3, alt: "Family Suite", category: "rooms", url: "/business1.jpg" },
    { id: 4, alt: "Restaurant", category: "dining", url: "/res1.jpg" },
    { id: 5, alt: "Lounge", category: "dining", url: "/lounge1.jpg" },
    { id: 6, alt: "Pool", category: "facilities", url: "/roof.jpg" },
    { id: 7, alt: "Spa", category: "facilities", url: "/business2.jpg" },
    { id: 8, alt: "Gym", category: "facilities", url: "/business3.jpg" },
    { id: 9, alt: "Conference Hall", category: "events", url: "/deluxe2.jpg" },
    { id: 10, alt: "Wedding Setup", category: "events", url: "/deluxe3.jpg" },
    { id: 11, alt: "Lobby", category: "facilities", url: "/deluxe4.jpg" },
    { id: 12, alt: "Entrance", category: "facilities", url: "/exe2.jpg" },
    { id: 13, alt: "Room Detail", category: "rooms", url: "/exe3.jpg" },
    { id: 14, alt: "Dining Area", category: "dining", url: "/exe4.jpg" },
    { id: 15, alt: "Event Space", category: "events", url: "/exe5.jpg" },
    { id: 16, alt: "Bathroom", category: "rooms", url: "/lounge2.jpg" },
    { id: 17, alt: "Bar", category: "dining", url: "/lounge1.jpg" },
    { id: 18, alt: "Wellness", category: "facilities", url: "/res1.jpg" },
    { id: 19, alt: "Terrace", category: "facilities", url: "/res2.jpg" },
    { id: 20, alt: "Suite View", category: "rooms", url: "/roof.jpg" },
  ]

  return (
    <>
      <Header />
      

      {/* Page Header */}
      <section className="bg-accent py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Gallery</h1>
          <p className="text-lg text-muted">Explore our facilities and accommodations</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <button
                key={image.id}
                onClick={() => setSelectedImage(image.url)}
                className="relative overflow-hidden rounded h-48 hover:opacity-80 transition-opacity group cursor-pointer bg-gray-200"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  priority-hint="high"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">View</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <img src={selectedImage || "/placeholder.svg"} alt="Gallery" className="max-w-4xl max-h-96 object-contain" />
        </div>
      )}

      <Footer />
    </>
  )
}
