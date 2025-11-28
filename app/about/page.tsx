import Header from "@/components/header"
import Footer from "@/components/footer"



export const metadata = {
  title: "About Us | DE-SYLS HOTELS & SUITES",
  description: "Learn about DE-SYLS HOTELS & SUITES, our mission, history, and commitment to excellence.",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      

      {/* Page Header */}
      <section className="bg-accent py-12 md:py-16 mt-20">
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
            <img src="/herologo.jpg" alt="DE-SYLS Hotel" className="w-full h-96 object-cover rounded" />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">OUR VISION & MISSION</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted mb-6">
              Our goal is to become the most trusted and sought-after hotel brand in West Africa.
            </p>
            <p className="text-lg text-muted mb-6">
              We strive to deliver an experience that goes beyond what our guests expect.
            </p>
            <p className="text-lg text-muted mb-6">
              We are devoted to offering top-tier facilities and tailored services that make every stay memorable.
            </p>
            <p className="text-lg text-muted mb-6">
              We take pride in creating an atmosphere of genuine comfort, warmth, and care for everyone who walks through our doors.
            </p>
            <p className="text-lg text-muted mb-6">
              We believe in continuous improvement and growth through constant learning and innovation.
            </p>
            <p className="text-lg text-muted mb-6">
              We remain flexible and forward-thinking as we navigate an ever-evolving world.
            </p>
            <p className="text-lg text-muted font-semibold">
              De-Syls Hotels & Suites… Blending Global Standards with True African Hospitality.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">OUR VALUES</h2>
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-4 text-lg text-muted">
              <li>• Excellence in everything we do</li>
              <li>• Continuous growth and improvement</li>
              <li>• Authentic care for our guests</li>
              <li>• Strong dedication to our purpose</li>
              <li>• Creativity that inspires better solutions</li>
              <li>• Passion that drives exceptional service</li>
              <li>• Pride in our brand and our people</li>
              <li>• Integrity, discipline, and professionalism</li>
              <li>• Responsibility to our community and environment</li>
            </ul>
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


      <Footer />
    </>
  )
}
