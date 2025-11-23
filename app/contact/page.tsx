"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <Header />

      {/* Page Header */}
      <section className="bg-accent py-12 md:py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-muted">Get in touch with DE-SYLS HOTELS & SUITES</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-muted">We're here to help you plan your perfect stay</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border">
              <Phone size={32} className="text-primary mb-4" />
              <h3 className="font-semibold mb-2 text-lg">Phone</h3>
              <div className="space-y-2">
                <a href="tel:+23470078113737" className="block text-muted hover:text-primary transition-colors">
                  070 0781 1373
                </a>
                <a href="tel:+23480809874222" className="block text-muted hover:text-primary transition-colors">
                  080 8098 7422
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border">
              <Mail size={32} className="text-primary mb-4" />
              <h3 className="font-semibold mb-2 text-lg">Email</h3>
              <a href="mailto:desylshotelandsuites@gmail.com" className="text-muted hover:text-primary transition-colors">
                desylshotelandsuites@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4 p-6 bg-card rounded-lg border">
              <MapPin size={24} className="text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-muted">
                  1st Avenue, Beside Fidelity Bank
                  <br />
                  Festac Town, Lagos, Nigeria
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-card rounded-lg border">
              <Clock size={24} className="text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Hours</h3>
                <p className="text-muted">
                  Monday - Sunday
                  <br />
                  7:00 AM - 11:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 bg-accent rounded-lg overflow-hidden h-64 max-w-4xl mx-auto">
            <iframe
              title="Desyls Hotel Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.8234567890123!2d3.3456789!3d6.4567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjcnMjQuNiJOIDPCsDIwJzQ0LjQiRQ!5e0!3m2!1sen!2sng!4v1234567890"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
