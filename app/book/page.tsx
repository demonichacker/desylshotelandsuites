import Header from "@/components/header"
import Footer from "@/components/footer"

import AdvancedBookingWidget from "@/components/advanced-booking-widget"

export const metadata = {
  title: "Book Your Stay | DE-SYLS HOTELS & SUITES",
  description: "Book your room at DE-SYLS HOTELS & SUITES. Easy booking process with WhatsApp confirmation.",
}

export default function BookPage() {
  return (
    <>
      <Header />
      

      {/* Page Header */}
      <section className="bg-accent py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Book Your Stay</h1>
          <p className="text-lg text-muted">Reserve your room at DE-SYLS HOTELS & SUITES</p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4">
          <AdvancedBookingWidget />
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Fill the Form",
                description: "Enter your details, dates, and room preferences",
              },
              {
                step: "2",
                title: "Confirm on WhatsApp",
                description: "Review your booking details and confirm via WhatsApp",
              },
              {
                step: "3",
                title: "Receive Confirmation",
                description: "Get your booking confirmation and payment details",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-primary text-secondary rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">{item.title}</h3>
                <p className="text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
