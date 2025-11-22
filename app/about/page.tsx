import Header from "@/components/header"
import Footer from "@/components/footer"

import { Award, Users, MapPin } from "lucide-react"

export const metadata = {
  title: "About Us | DE-SYLS HOTELS & SUITES",
  description: "Learn about DE-SYLS HOTELS & SUITES, our mission, history, and commitment to excellence.",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      

      {/* Page Header */}
      <section className="bg-accent py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About DE-SYLS</h1>
          <p className="text-lg text-muted">Our story of excellence and hospitality</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted mb-6">
                DE-SYLS HOTELS & SUITES was founded with a vision to bring luxury and comfort to Festac Town. What
                started as a dream has grown into one of the most sought-after hospitality destinations in the region.
              </p>
              <p className="text-lg text-muted mb-6">
                Our commitment to excellence, personalized service, and attention to detail has made us the preferred
                choice for travelers, business professionals, and event organizers.
              </p>
              <p className="text-lg text-muted">
                Every guest who walks through our doors becomes part of the DE-SYLS family, and we take pride in
                creating unforgettable memories.
              </p>
            </div>
            <img src="/logo.png" alt="DE-SYLS Hotel" className="w-full h-96 object-cover rounded" />
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Our Mission</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-muted mb-8">
              To provide EXCLUSIVE COMFORT through exceptional hospitality, world-class facilities, and personalized
              service that exceeds expectations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Award, title: "Excellence", description: "Highest standards in everything we do" },
                { icon: Users, title: "Hospitality", description: "Genuine care for our guests" },
                { icon: MapPin, title: "Community", description: "Proud members of Festac Town" },
              ].map((value) => {
                const Icon = value.icon
                return (
                  <div key={value.title} className="bg-background p-6 rounded">
                    <Icon size={32} className="text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            {[
              { year: "2025", milestone: "DE-SYLS HOTELS & SUITES founded" },
              { year: "2025", milestone: "Expanded to 15 rooms and suites" },
              { year: "2025", milestone: "Opened fine dining restaurant" },
              { year: "2025", milestone: "Opened Executive Lounge with premium facilities" },
              { year: "2025", milestone: "Recognized as Best Hotel in Festac Town" },
              { year: "2025", milestone: "Continuing to set new standards" },
            ].map((item, i) => (
              <div key={i} className="flex gap-8 mb-8 relative">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  {i < 5 && <div className="w-1 h-16 bg-border mt-2"></div>}
                </div>
                <div className="pb-8">
                  <p className="font-semibold text-primary">{item.year}</p>
                  <p className="text-lg">{item.milestone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Leadership</h2>
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-background p-8 rounded">
              <img
                src="/placeholder.svg?key=manager"
                alt="General Manager"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-2xl font-serif font-bold mb-2">Mr. Chukwu Okafor</h3>
              <p className="text-primary font-semibold mb-4">General Manager</p>
              <p className="text-muted">
                With over 15 years of experience in luxury hospitality, Mr. Okafor leads DE-SYLS with a passion for
                excellence and guest satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
