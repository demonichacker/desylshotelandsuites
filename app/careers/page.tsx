"use client"

import type React from "react"

import Header from "@/components/header"
import Footer from "@/components/footer"

import { Briefcase, MapPin } from "lucide-react"
import { useState } from "react"

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    resume: null as File | null,
  })

  const jobs = [
    {
      id: 1,
      title: "Front Desk Officer",
      department: "Guest Services",
      location: "Festac Town",
      type: "Full-time",
      description: "We are looking for a professional and courteous Front Desk Officer to join our team.",
      responsibilities: [
        "Greet and check-in guests",
        "Handle guest inquiries and requests",
        "Manage reservations and bookings",
        "Process payments and maintain records",
        "Provide information about hotel facilities and local attractions",
      ],
      requirements: [
        "High school diploma or equivalent",
        "1-2 years of customer service experience",
        "Excellent communication skills",
        "Proficiency in English",
        "Computer literacy",
      ],
    },
    {
      id: 2,
      title: "Housekeeping Supervisor",
      department: "Housekeeping",
      location: "Festac Town",
      type: "Full-time",
      description: "Join our housekeeping team as a Supervisor and ensure the highest standards of cleanliness.",
      responsibilities: [
        "Supervise housekeeping staff",
        "Ensure rooms meet quality standards",
        "Manage cleaning schedules and inventory",
        "Train and mentor housekeeping team members",
        "Report maintenance issues and coordinate repairs",
      ],
      requirements: [
        "High school diploma or equivalent",
        "3+ years of housekeeping experience",
        "Leadership and supervisory skills",
        "Attention to detail",
        "Physical ability to perform cleaning tasks",
      ],
    },
  ]

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, resume: e.target.files[0] })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your application! We will review your resume and contact you shortly.")
    setFormData({ name: "", email: "", phone: "", position: "", resume: null })
  }

  return (
    <>
      <Header />
      

      {/* Page Header */}
      <section className="bg-accent py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Careers</h1>
          <p className="text-lg text-muted">Join our team and be part of something special</p>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-12">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobs.map((job) => (
              <div key={job.id} className="bg-accent p-8 rounded">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-2">{job.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted">
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {job.location}
                      </span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <Briefcase size={24} className="text-primary" />
                </div>

                <p className="text-muted mb-6">{job.description}</p>

                <button
                  onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                  className="text-primary font-semibold hover:opacity-80"
                >
                  {selectedJob === job.id ? "Hide Details" : "View Details"} →
                </button>

                {selectedJob === job.id && (
                  <div className="mt-6 pt-6 border-t border-border space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Responsibilities:</h4>
                      <ul className="space-y-1 text-sm text-muted">
                        {job.responsibilities.map((resp) => (
                          <li key={resp}>• {resp}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Requirements:</h4>
                      <ul className="space-y-1 text-sm text-muted">
                        {job.requirements.map((req) => (
                          <li key={req}>• {req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-8">Apply Now</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your full name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your phone number"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Position Applied For</label>
              <select
                required
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select a position</option>
                {jobs.map((job) => (
                  <option key={job.id} value={job.title}>
                    {job.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Upload Resume (PDF or DOC)</label>
              <input
                type="file"
                required
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-secondary py-3 rounded font-semibold hover:opacity-80 transition-colors"
            >
              SUBMIT APPLICATION
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  )
}
