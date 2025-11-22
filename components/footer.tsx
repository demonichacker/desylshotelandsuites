import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <Image
              src="/logo.png"
              alt="DE-SYLS Logo"
              width={600}
              height={300}
              className="h-20 w-auto mb-4"
            />
            <p className="text-gray-300 text-sm">
              Exclusive comfort in Festac Town. Your destination for luxury accommodation and unforgettable experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/rooms" className="hover:text-primary">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link href="/dining" className="hover:text-primary">
                  Dining
                </Link>
              </li>
              <li>

              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+23470078113737">070 0781 1373</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+23480809874222">080 8098 7422</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:desylshotelandsuites@gmail.com">desylshotelandsuites@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <div className="flex items-start gap-2 text-sm text-gray-300">
              <Clock size={16} className="mt-1 shrink-0" />
              <div>
                <p>Monday - Sunday</p>
                <p>7:00 AM - 11:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2025 DE-SYLS HOTELS & SUITES. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/policies" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/policies" className="hover:text-primary">
              Terms & Conditions
            </Link>
            <Link href="/accessibility" className="hover:text-primary">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
