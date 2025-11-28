"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Star, MapPin, Wifi, Users, Utensils, Armchair } from "lucide-react"
import Link from "next/link"

export default function ClientPage() {
  return (
    <>
      <Header />
      <div className="pt-16">

      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-screen flex items-end md:items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/herologo.jpg')" }}>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center pb-8 md:pb-0">
          <div className="animate-fade-in-up">
            <div className="flex flex-row gap-4 md:gap-6 justify-center">
              <Link href="/rooms">
                <button className="group bg-primary text-white px-6 py-3 md:px-10 md:py-4 rounded-full font-bold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl font-montserrat text-sm md:text-base">
                  <span className="relative z-10">CHECK AVAILABILITY</span>
                  <div className="absolute inset-0 bg-linear-to-r from-primary to-primary/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </Link>
              <a href="https://wa.me/07078113727" target="_blank" rel="noopener noreferrer">
                <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 md:px-10 md:py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105 text-sm md:text-base">
                  BOOK NOW
                </button>
              </a>
            </div>
          </div>
        </div>


      </section>

      {/* Featured Rooms */}
      <section className="py-20 md:py-32 bg-linear-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-slate-800 mb-6">Featured Rooms</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Discover our exquisite collection of luxury accommodations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Executive Class",
                price: "₦100,000",
                image: "/exe1.jpg",
                description: "Spacious suite with king bed, work desk, mini-bar, and private balcony.",
                features: ["King Bed", "Work Desk", "Mini Bar", "Private Balcony"]
              },
              {
                name: "Business Class",
                price: "₦85,000",
                image: "/business1.jpg",
                description: "Comfortable room with plush bedding and elegant décor.",
                features: ["Queen Bed", "City View", "Luxury Amenities", "24/7 Service"]
              },
              {
                name: "Delux Class",
                price: "₦75,000",
                image: "/deluxe1.jpg",
                description: "Elegant room with premium amenities and comfortable accommodations.",
                features: ["Queen Bed", "Premium Décor", "Modern Amenities", "Comfort Assured"]
              },
            ].map((room, index) => {
              const roomId = room.name === "Delux Class" ? "delux-class" :
                            room.name === "Executive Class" ? "executive-class" :
                            room.name === "Business Class" ? "business-class" :
                            room.name.toLowerCase().replace(/\s+/g, "-");
              return (
              <Link key={room.name} href={`/rooms/${roomId}`}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      src={room.image || "/placeholder.svg"}
                      alt={room.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {room.price}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-serif font-bold mb-3 text-slate-800">{room.name}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{room.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {room.features.map((feature, i) => (
                        <span key={i} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <button className="w-full bg-linear-to-r from-primary to-primary/80 text-white py-3 rounded-full font-semibold hover:from-primary/90 hover:to-primary/70 transition-all duration-300 transform hover:scale-105">
                      View Details
                    </button>
                  </div>
                </div>
              </Link>
            );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-linear-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">Why Choose Us</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">Experience the difference that sets us apart</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Impeccable Service",
                description: "Personalized attention 24/7 to ensure your comfort and satisfaction.",
              },
              {
                icon: MapPin,
                title: "Prime Location",
                description: "Steps from Fidelity Bank, Festac Town. Convenient access to everything.",
              },
              {
                icon: Star,
                title: "Exclusive Comfort",
                description: "Elegant rooms, curated amenities, and world-class facilities.",
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="group text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-500 transform hover:scale-105">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-primary/20 rounded-full group-hover:bg-primary/30 transition-colors duration-300">
                      <Icon size={48} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4">{item.title}</h3>
                  <p className="text-white/80 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Facilities Teaser */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-slate-800 mb-6">Our Facilities</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">World-class amenities designed for your comfort and convenience</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              { icon: Utensils, title: "Fine Dining", description: "Award-winning restaurant and lounge with exquisite cuisine" },
              { icon: Armchair, title: "Executive Lounge", description: "Premium lounge with comfortable seating, refreshments, and business facilities" },
            ].map((facility, i) => {
              const Icon = facility.icon
              return (
                <div key={i} className="group bg-linear-to-br from-slate-50 to-white p-10 rounded-3xl text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-200/50">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-linear-to-br from-primary/20 to-primary/10 rounded-2xl group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                      <Icon size={48} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4 text-slate-800">{facility.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{facility.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-linear-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-slate-800 mb-6">Guest Reviews</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Hear what our valued guests have to say about their experience</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Chioma Okafor",
                date: "October 2024",
                rating: 5,
                review:
                  "Absolutely stunning hotel! The service was impeccable and the rooms are beautifully designed. Highly recommended!",
                avatar: "👩‍💼"
              },
              {
                name: "Tunde Adeyemi",
                date: "September 2024",
                rating: 5,
                review:
                  "Best hotel experience in Festac Town. The staff went above and beyond to make our stay memorable.",
                avatar: "👨‍💼"
              },
              {
                name: "Amara Nwosu",
                date: "August 2024",
                rating: 5,
                review: "Luxury at its finest. The attention to detail is remarkable. Will definitely be back!",
                avatar: "👩‍🎨"
              },
            ].map((review, i) => (
              <div key={i} className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-linear-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white text-xl">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">{review.name}</p>
                    <p className="text-sm text-slate-500">{review.date}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed italic">"{review.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </>
  )
}
