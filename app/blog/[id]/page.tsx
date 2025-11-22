import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

const blogPosts = {
  "top-5-attractions": {
    title: "Top 5 Attractions Near Festac Town",
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
  "exclusive-comfort": {
    title: "How DE-SYLS Ensures EXCLUSIVE COMFORT",
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
  "conference-services": {
    title: "Host Your Meeting with Style — Our Conference Services",
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
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts[params.id as keyof typeof blogPosts]

  if (!post) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-serif font-bold mb-4">Post not found</h1>
            <Link href="/blog" className="text-primary hover:opacity-80">
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />

      {/* Breadcrumbs */}
      <section className="bg-accent py-4 border-b border-border">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex gap-2 text-sm">
            <Link href="/" className="text-primary hover:opacity-80">
              Home
            </Link>
            <span className="text-muted">/</span>
            <Link href="/blog" className="text-primary hover:opacity-80">
              Blog
            </Link>
            <span className="text-muted">/</span>
            <span className="text-foreground">{post.title}</span>
          </div>
        </div>
      </section>

      {/* Blog Post */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4">
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-96 object-cover rounded mb-8"
          />

          <h1 className="text-4xl font-serif font-bold mb-4">{post.title}</h1>

          <div className="flex items-center gap-4 text-muted mb-8 pb-8 border-b border-border">
            <span>{post.date}</span>
            <span>•</span>
            <span>By {post.author}</span>
          </div>

          <div className="prose prose-lg max-w-none">
            {post.content.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-muted mb-6 whitespace-pre-wrap">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link href="/blog" className="text-primary hover:opacity-80 font-semibold">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
