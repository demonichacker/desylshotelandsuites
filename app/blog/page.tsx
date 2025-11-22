import Header from "@/components/header"
import Footer from "@/components/footer"

import Link from "next/link"

export const metadata = {
  title: "Blog | DE-SYLS HOTELS & SUITES",
  description: "Read our latest blog posts about travel, hospitality, and local attractions.",
}

const blogPosts = [
  {
    id: "top-5-attractions",
    title: "Top 5 Attractions Near Festac Town",
    excerpt:
      "Discover the best places to visit and things to do near DE-SYLS HOTELS & SUITES. From cultural landmarks to modern entertainment venues.",
    date: "October 15, 2024",
    author: "Travel Team",
    image: "/placeholder.svg?key=blog1",
    content: `Festac Town is a vibrant community with plenty to explore. Here are the top 5 attractions you shouldn't miss during your stay:

1. Lekki Conservation Centre - A beautiful nature reserve perfect for bird watching and nature walks.

2. Ikoyi Club - An exclusive recreational facility with golf, tennis, and swimming facilities.

3. Elegushi Beach - A pristine beach perfect for relaxation and water sports.

4. Nike Art Gallery - Showcasing contemporary African art and sculptures.

5. Festac Town Market - Experience local culture and shop for authentic Nigerian crafts and souvenirs.

Each of these attractions is within a short drive from our hotel. Our concierge team can help arrange transportation and provide recommendations.`,
  },
  {
    id: "exclusive-comfort",
    title: "How DE-SYLS Ensures EXCLUSIVE COMFORT",
    excerpt: "Learn about our commitment to providing the highest standards of comfort and hospitality to every guest.",
    date: "September 28, 2024",
    author: "Management",
    image: "/placeholder.svg?key=blog2",
    content: `At DE-SYLS HOTELS & SUITES, we believe that true luxury is about more than just beautiful rooms. It's about creating an experience that exceeds expectations.

Our Commitment to Excellence:
- Personalized service tailored to each guest's needs
- Attention to detail in every aspect of your stay
- Continuous training of our staff to maintain the highest standards
- Regular maintenance and upgrades of our facilities

From the moment you arrive, our team is dedicated to ensuring your comfort. Whether it's a special request, dietary preference, or local recommendation, we go the extra mile to make your stay memorable.

Our guests consistently rate us highly for our hospitality, cleanliness, and service quality. We take pride in these reviews and use them to continuously improve our offerings.`,
  },
  {
    id: "conference-services",
    title: "Host Your Meeting with Style — Our Conference Services",
    excerpt: "Discover how DE-SYLS can be the perfect venue for your next corporate event or conference.",
    date: "September 10, 2024",
    author: "Events Team",
    image: "/placeholder.svg?key=blog3",
    content: `Planning a corporate event? DE-SYLS HOTELS & SUITES offers comprehensive conference and meeting facilities designed to make your event a success.

Why Choose DE-SYLS for Your Event:
- Flexible event spaces that can accommodate 50 to 250 guests
- State-of-the-art AV equipment and high-speed internet
- Professional catering services with customizable menus
- Dedicated event coordinator to manage all details
- Comfortable accommodation for out-of-town attendees

Our Conference Hall features:
- Flexible seating arrangements (banquet, theatre, classroom style)
- Professional sound and projection systems
- Video conferencing capabilities
- Breakout rooms for workshops and discussions

Whether you're hosting a small business meeting or a large conference, our team has the expertise and facilities to ensure your event runs smoothly. Contact us today to discuss your event requirements and receive a customized quote.`,
  },
]

export default function BlogPage() {
  return (
    <>
      <Header />
      

      {/* Page Header */}
      <section className="bg-accent py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Blog & News</h1>
          <p className="text-lg text-muted">Latest updates and insights from DE-SYLS</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-12">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <article className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-accent p-8 rounded hover:shadow-lg transition-shadow cursor-pointer">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded md:col-span-1"
                  />
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-4 mb-3 text-sm text-muted">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>By {post.author}</span>
                    </div>
                    <h2 className="text-2xl font-serif font-bold mb-3">{post.title}</h2>
                    <p className="text-muted mb-4">{post.excerpt}</p>
                    <span className="text-primary font-semibold hover:opacity-80">Read More →</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
