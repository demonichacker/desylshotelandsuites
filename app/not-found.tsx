import { Suspense } from 'react'
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

function NotFoundContent() {
  return (
    <>
      <Header />
      <section className="min-h-screen flex items-center justify-center bg-background">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-serif font-bold mb-4">404</h1>
          <h2 className="text-3xl font-serif font-bold mb-6">Page Not Found</h2>
          <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
            Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-primary text-secondary px-8 py-3 rounded font-semibold hover:opacity-80 transition-colors"
            >
              Go Home
            </Link>
            <Link
              href="/rooms"
              className="bg-secondary text-white px-8 py-3 rounded font-semibold hover:bg-opacity-90 transition-colors"
            >
              Browse Rooms
            </Link>
            <Link
              href="/contact"
              className="bg-accent text-foreground px-8 py-3 rounded font-semibold border border-border hover:bg-border transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default function NotFound() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NotFoundContent />
    </Suspense>
  )
}
