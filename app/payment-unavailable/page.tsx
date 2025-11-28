"use client"

import { useEffect, useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { MessageCircle, AlertCircle } from "lucide-react"

const roomNames = {
  "executive-class": "Executive Class",
  "business-class": "Business Class",
  "delux-class": "Delux Class",
}

function PaymentUnavailableContent() {
  const searchParams = useSearchParams()
  const room = searchParams.get("room") || ""
  const email = searchParams.get("email") || ""
  const priceParam = searchParams.get("price")
  const price = priceParam ? parseInt(priceParam) : 0

    const handleWhatsAppBooking = () => {
    const roomName = roomNames[room as keyof typeof roomNames] || room
    const message = `Hi, I would like to book a room.\n\nRoom Type: ${roomName}\nEmail: ${email}\nPrice per night: ₦${price.toLocaleString()}\n\nPlease confirm availability and proceed with the booking.`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/2348080987422?text=${encodedMessage}`, "_blank")
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-linear-to-br from-accent via-background to-accent py-12 px-4 flex items-center justify-center">
        <div className="max-w-2xl mx-auto w-full">
          <div className="bg-card p-8 rounded-2xl shadow-2xl border border-border animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <AlertCircle className="w-8 h-8 text-primary" />
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-foreground">
              Online Payment Unavailable
            </h1>

            <p className="text-center text-muted-foreground mb-8 text-lg">
              We're temporarily unable to process online payments. However, you can still complete your booking through WhatsApp!
            </p>

            {/* Booking Summary */}
            <div className="bg-accent p-6 rounded-xl mb-8 space-y-4">
              <h2 className="text-xl font-semibold text-foreground mb-4">Booking Details</h2>
              
              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span className="font-medium text-muted-foreground">Room Type</span>
                <span className="font-semibold text-foreground">
                  {roomNames[room as keyof typeof roomNames] || "Unknown Room"}
                </span>
              </div>

              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span className="font-medium text-muted-foreground">Email</span>
                <span className="font-semibold text-foreground">{email}</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-background rounded">
                <span className="font-medium text-muted-foreground">Price per Night</span>
                <span className="text-2xl font-serif font-bold text-primary">₦{price.toLocaleString()}</span>
              </div>
            </div>

            {/* WhatsApp Option */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded mb-8">
              <h3 className="font-semibold text-green-900 mb-2">Book via WhatsApp</h3>
              <p className="text-green-800 mb-4">
                Click the button below to start a WhatsApp conversation with our booking team. They will help you complete your reservation.
              </p>
              
              <button
                onClick={handleWhatsAppBooking}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
              >
                <MessageCircle size={20} />
                Contact us on WhatsApp
              </button>
            </div>

            {/* Alternative Contact */}
            <div className="bg-muted/50 p-6 rounded-lg text-center">
              <p className="text-sm text-muted-foreground mb-3">
                Or reach out directly to our booking team
              </p>
              <a
                href="https://wa.me/2348080987422"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-primary font-semibold hover:underline"
              >
                08080987422
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default function PaymentUnavailablePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentUnavailableContent />
    </Suspense>
  )
}
