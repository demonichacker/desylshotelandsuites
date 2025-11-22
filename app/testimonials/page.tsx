"use client"

import type React from "react"

import Header from "@/components/header"
import Footer from "@/components/footer"

import { Star } from "lucide-react"
import { useState } from "react"

export default function TestimonialsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 5,
    review: "",
  })

  const testimonials = [
    {
      name: "Chioma Okafor",
      date: "October 2024",
      rating: 5,
      review:
        "Absolutely stunning hotel! The service was impeccable and the rooms are beautifully designed. Highly recommended!",
    },
    {
      name: "Tunde Adeyemi",
      date: "September 2024",
      rating: 5,
      review: "Best hotel experience in Festac Town. The staff went above and beyond to make our stay memorable.",
    },
    {
      name: "Amara Nwosu",
      date: "August 2024",
      rating: 5,
      review: "Luxury at its finest. The attention to detail is remarkable. Will definitely be back!",
    },
    {
      name: "Adekunle Bello",
      date: "July 2024",
      rating: 5,
      review: "Perfect for business travel. Great location, excellent facilities, and outstanding service.",
    },
    {
      name: "Zainab Hassan",
      date: "June 2024",
      rating: 5,
      review: "We celebrated our anniversary here and it was perfect. The romance package was amazing!",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your review! We appreciate your feedback.")
    setFormData({ name: "", email: "", rating: 5, review: "" })
  }

  return (
    <>
      <Header />
      

      {/* Page Header */}
      <section className="bg-accent py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Guest Reviews & Testimonials</h1>
          <p className="text-lg text-muted">What our guests are saying about DE-SYLS</p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-12">Recent Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-accent p-8 rounded">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={18} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted mb-6 italic">"{testimonial.review}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Form */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-8">Share Your Experience</h2>
          <p className="text-muted mb-8">
            We'd love to hear about your stay at DE-SYLS HOTELS & SUITES. Your feedback helps us improve.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setFormData({ ...formData, rating: star })}
                    className="focus:outline-none"
                  >
                    <Star
                      size={32}
                      className={
                        star <= formData.rating
                          ? "fill-primary text-primary cursor-pointer"
                          : "text-border cursor-pointer"
                      }
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Your Review</label>
              <textarea
                required
                value={formData.review}
                onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary h-32 resize-none"
                placeholder="Tell us about your experience..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-secondary py-3 rounded font-semibold hover:opacity-80 transition-colors"
            >
              SUBMIT REVIEW
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  )
}
