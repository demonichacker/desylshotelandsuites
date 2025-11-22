import Header from "@/components/header"
import Footer from "@/components/footer"


export const metadata = {
  title: "Accessibility Statement | DE-SYLS HOTELS & SUITES",
  description: "Our commitment to accessibility and inclusive design.",
}

export default function AccessibilityPage() {
  return (
    <>
      <Header />
      

      {/* Page Header */}
      <section className="bg-accent py-12 md:py-16" role="banner">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Accessibility Statement</h1>
          <p className="text-lg text-muted">Our commitment to inclusive hospitality</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background" role="main">
        <div className="max-w-3xl mx-auto px-4 space-y-8">
          <div>
            <h2 className="text-2xl font-serif font-bold mb-4">Our Commitment</h2>
            <p className="text-muted mb-4">
              DE-SYLS HOTELS & SUITES is committed to providing an accessible and inclusive experience for all guests,
              including those with disabilities. We believe that everyone deserves to enjoy our facilities and services
              without barriers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold mb-4">Accessible Facilities</h2>
            <ul className="space-y-2 text-muted">
              <li>• Wheelchair-accessible rooms with grab bars and accessible bathrooms</li>
              <li>• Accessible parking spaces near the main entrance</li>
              <li>• Elevators with braille markings and audio announcements</li>
              <li>• Accessible dining areas and restaurant facilities</li>
              <li>• Accessible conference and event spaces</li>
              <li>• Service animal accommodations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold mb-4">Website Accessibility</h2>
            <p className="text-muted mb-4">
              We strive to make our website accessible to all users. Our website is designed to comply with WCAG 2.1
              Level AA standards, including:
            </p>
            <ul className="space-y-2 text-muted">
              <li>• Proper heading structure and semantic HTML</li>
              <li>• Alt text for all images</li>
              <li>• Keyboard navigation support</li>
              <li>• Color contrast compliance</li>
              <li>• Readable fonts and adjustable text sizes</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold mb-4">Assistance & Support</h2>
            <p className="text-muted mb-4">
              If you need any assistance or accommodations during your stay, please don't hesitate to contact us:
            </p>
            <ul className="space-y-2 text-muted">
              <li>• Phone: 070 0781 1373 or 080 8098 7422</li>
              <li>• Email: desylshotelandsuites@gmail.com</li>
              <li>• WhatsApp: https://wa.me/23470078113737</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold mb-4">Feedback</h2>
            <p className="text-muted">
              We welcome feedback on our accessibility efforts. If you encounter any barriers or have suggestions for
              improvement, please contact us. Your feedback helps us serve you better.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
