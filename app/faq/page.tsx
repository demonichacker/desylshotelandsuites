"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What are the check-in and check-out times?",
      answer:
        "Check-in is at 2:00 PM and check-out is at 12:00 PM. Early check-in and late check-out are available upon request, subject to availability.",
    },
    {
      question: "Do you accept children?",
      answer:
        "Yes, we welcome children! Children under 6 years old stay free when sharing a room with adults. We offer family-friendly rooms and special amenities for families.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We offer free cancellation up to 48 hours before your arrival date. Cancellations made within 48 hours of arrival may incur a charge equal to one night's stay.",
    },
    {
      question: "Is parking available?",
      answer:
        "Yes, complimentary secure parking is available for all guests. We have 150+ parking spaces with 24/7 security and surveillance.",
    },
    {
      question: "Is breakfast included?",
      answer:
        "Breakfast is not included in standard room rates, but it can be added for ₦2,500 per person per day. Some packages include complimentary breakfast.",
    },
    {
      question: "Is Wi-Fi available?",
      answer:
        "Yes, high-speed Wi-Fi is complimentary for all guests throughout the hotel for seamless connectivity.",
    },
    {
      question: "Do you accept pets?",
      answer:
        "We do not allow pets in our rooms. However, we can recommend nearby pet-friendly accommodations if needed.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We primarily accept bookings through WhatsApp. Payment can be made via bank transfer, card, or cash upon arrival. We do not store payment cards on our system.",
    },
    {
      question: "What are the ID requirements?",
      answer:
        "All guests must present a valid form of identification (passport, driver's license, or national ID) at check-in. This is a standard security requirement.",
    },
    {
      question: "Do you have accessibility features?",
      answer:
        "Yes, we have wheelchair-accessible rooms and facilities. Please inform us of any special accessibility needs when booking so we can make appropriate arrangements.",
    },
  ]

  return (
    <>
      <Header />
      

      {/* Page Header */}
      <section className="bg-accent py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-muted">Find answers to common questions about your stay</p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-border rounded overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-accent hover:bg-border transition-colors text-left"
                >
                  <h3 className="font-semibold">{faq.question}</h3>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-background border-t border-border">
                    <p className="text-muted">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Still have questions?</h2>
          <p className="text-lg text-muted mb-8">Contact us on WhatsApp for immediate assistance</p>
          <a
            href="https://wa.me/23470078113737?text=Hello%20DE-SYLS%20HOTELS%20%26%20SUITES%2C%20I%20have%20a%20question."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-secondary px-8 py-3 rounded font-semibold hover:opacity-80 transition-colors"
          >
            CHAT WITH US
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
