import Header from "@/components/header"
import Footer from "@/components/footer"


export const metadata = {
  title: "Policies | DE-SYLS HOTELS & SUITES",
  description: "Read our cancellation, privacy, and terms & conditions policies.",
}

export default function PoliciesPage() {
  return (
    <>
      <Header />
      

      {/* Page Header */}
      <section className="bg-accent py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Policies</h1>
          <p className="text-lg text-muted">Our terms, conditions, and policies</p>
        </div>
      </section>

      {/* Policies Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 space-y-12">
          {/* Cancellation Policy */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">Cancellation Policy</h2>
            <div className="space-y-4 text-muted">
              <p>
                At DE-SYLS HOTELS & SUITES, we understand that plans can change. Our cancellation policy is designed to
                be fair to both our guests and our business.
              </p>
              <h3 className="font-semibold text-foreground">Refundable Bookings:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Free cancellation up to 48 hours before arrival</li>
                <li>Full refund will be processed within 5-7 business days</li>
                <li>Cancellations within 48 hours will incur a charge equal to one night's stay</li>
              </ul>
              <h3 className="font-semibold text-foreground">Non-Refundable Bookings:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Non-refundable rates are offered at a discounted price</li>
                <li>No refunds are available for cancellations</li>
                <li>Bookings can be modified up to 48 hours before arrival</li>
              </ul>
              <p>
                For special circumstances or group bookings, please contact us directly on WhatsApp to discuss
                alternative arrangements.
              </p>
            </div>
          </div>

          {/* Privacy Policy */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">Privacy Policy</h2>
            <div className="space-y-4 text-muted">
              <p>
                DE-SYLS HOTELS & SUITES is committed to protecting your privacy. This policy explains how we collect,
                use, and protect your personal information.
              </p>
              <h3 className="font-semibold text-foreground">Information We Collect:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Contact information (name, email, phone number)</li>
                <li>Booking details (dates, room type, number of guests)</li>
                <li>Payment information (processed securely)</li>
                <li>Special requests and preferences</li>
              </ul>
              <h3 className="font-semibold text-foreground">How We Use Your Information:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>To process your booking and provide services</li>
                <li>To communicate about your reservation</li>
                <li>To improve our services and guest experience</li>
                <li>To send promotional offers (with your consent)</li>
              </ul>
              <h3 className="font-semibold text-foreground">Data Retention:</h3>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this
                policy, typically for 2 years after your stay.
              </p>
              <h3 className="font-semibold text-foreground">Security:</h3>
              <p>
                We implement industry-standard security measures to protect your information from unauthorized access,
                alteration, or disclosure.
              </p>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">Terms & Conditions</h2>
            <div className="space-y-4 text-muted">
              <p>
                By booking with DE-SYLS HOTELS & SUITES, you agree to the following terms and conditions. Please read
                them carefully.
              </p>
              <h3 className="font-semibold text-foreground">Booking & Reservation:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>All bookings are subject to availability</li>
                <li>Prices are quoted in Nigerian Naira (₦)</li>
                <li>Taxes and fees may apply and will be disclosed before confirmation</li>
                <li>Booking confirmation will be sent via WhatsApp or email</li>
              </ul>
              <h3 className="font-semibold text-foreground">Guest Responsibilities:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Guests must be at least 18 years old to book</li>
                <li>Valid identification is required at check-in</li>
                <li>Guests are responsible for any damage to hotel property</li>
                <li>Guests must comply with hotel rules and regulations</li>
              </ul>
              <h3 className="font-semibold text-foreground">Hotel Liability:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>The hotel is not responsible for lost, stolen, or damaged personal items</li>
                <li>Use of the safe is recommended for valuables</li>
                <li>The hotel reserves the right to refuse service to disruptive guests</li>
              </ul>
              <h3 className="font-semibold text-foreground">Modifications:</h3>
              <p>
                DE-SYLS HOTELS & SUITES reserves the right to modify these terms and conditions at any time. Changes
                will be effective immediately upon posting to our website.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
