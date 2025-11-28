import Header from "@/components/header"
import Footer from "@/components/footer"

import { Clock, Users, MapPin, Utensils } from "lucide-react"

export const metadata = {
  title: "Dining & Facilities | DE-SYLS HOTELS & SUITES",
  description: "Explore our fine dining restaurant, Executive Lounge, pool, and premium parking facilities.",
}

export default function DiningPage() {
  return (
    <>
      <Header />
      

      {/* Page Header */}
      <section className="bg-accent py-12 md:py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Dining & Facilities</h1>
          <p className="text-lg text-muted">World-class amenities for your comfort</p>
        </div>
      </section>

      {/* Restaurant */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">Fine Dining Restaurant</h2>
              <p className="text-lg text-muted mb-6">
                Experience culinary excellence at our award-winning restaurant. Our expert chefs prepare international
                and local cuisines using the finest ingredients.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-primary" />
                  <div>
                    <p className="font-semibold">Opening Hours</p>
                    <p className="text-muted">6:00 AM - 11:00 PM Daily</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users size={20} className="text-primary" />
                  <div>
                    <p className="font-semibold">Capacity</p>
                    <p className="text-muted">120 guests</p>
                  </div>
                </div>
              </div>

            </div>
            <img
              src="/res1.jpg"
              alt="Fine Dining Restaurant"
              className="w-full h-96 object-cover rounded"
            />
          </div>
        </div>
      </section>

      {/* Lounge & Bar */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <img
              src="/lounge1.jpg"
              alt="Lounge & Bar"
              className="w-full h-96 object-cover rounded order-2 md:order-1"
            />
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-serif font-bold mb-6">Lounge & Bar</h2>
              <p className="text-lg text-muted mb-6">
                Unwind in our sophisticated lounge with premium cocktails and an extensive wine selection. Perfect for
                business meetings or evening relaxation.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-primary" />
                  <div>
                    <p className="font-semibold">Opening Hours</p>
                    <p className="text-muted">11:00 AM - 2:00 AM Daily</p>
                  </div>
                </div>
              </div>

              <div className="bg-background p-6 rounded mb-8">
                <h3 className="font-semibold mb-4">Signature Cocktails</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Festac Sunset - Vodka, Passion Fruit, Lime</li>
                  <li>• Golden Hour - Rum, Ginger, Honey</li>
                  <li>• Exclusive Blend - Premium Whiskey, Bitters</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roof Top Garden */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">Roof Top Garden</h2>
              <p className="text-lg text-muted mb-6">
                Experience breathtaking panoramic views from our exclusive rooftop garden. Enjoy stunning ocean vistas and city skyline views while relaxing in our serene garden setting. Perfect for evening strolls and unforgettable moments.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-primary" />
                  <div>
                    <p className="font-semibold">Rooftop Deck</p>
                    <p className="text-muted">Open 7:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-accent p-6 rounded mb-8">
                <h3 className="font-semibold mb-4">Garden Amenities</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Panoramic Ocean View</li>
                  <li>• Lounge Seating Area</li>
                  <li>• Sunset Viewing Deck</li>
                </ul>
              </div>
            </div>
            <img src="/roof.jpg" alt="Roof Top Garden" className="w-full h-96 object-cover rounded" />
          </div>
        </div>
      </section>



      <Footer />
    </>
  )
}
