"use client"

import { useEffect, useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { AlertCircle, CheckCircle } from "lucide-react"


const roomPrices = {
  "executive-class": 100000,
  "business-class": 85000,
  "delux-class": 75000,
}

const roomNames = {
  "executive-class": "Executive Class",
  "business-class": "Business Class",
  "delux-class": "Delux Class",
}

function PaymentPageContent() {
  const searchParams = useSearchParams()
  const room = searchParams.get("room") || ""
  const email = searchParams.get("email") || ""
  const priceParam = searchParams.get("price")
  const price = priceParam ? parseInt(priceParam) : roomPrices[room as keyof typeof roomPrices] || 0

  const [paymentEmail, setPaymentEmail] = useState(email)
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    // Load Paystack script
    const script = document.createElement("script")
    script.src = "https://js.paystack.co/v1/inline.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const validateForm = () => {
    if (!paymentEmail.trim() || !paymentEmail.includes("@")) {
      setErrorMessage("Please enter a valid email address")
      return false
    }
    return true
  }

  const handlePayment = () => {
    if (!validateForm()) return

    setIsProcessing(true)
    setErrorMessage("")

    // Paystack integration
    const paystack = (window as any).PaystackPop
    if (!paystack) {
      setErrorMessage("Payment system not loaded. Please refresh and try again.")
      setIsProcessing(false)
      return
    }

    const handler = paystack.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
      email: paymentEmail,
      amount: price * 100, // Paystack expects amount in kobo (multiply by 100)
      currency: 'NGN',
      callback: function(response: any) {
        // Payment successful
        setPaymentStatus("success")
        setIsProcessing(false)
      },
      onClose: function() {
        setIsProcessing(false)
        setErrorMessage("Payment was cancelled")
      }
    })

    handler.openIframe()
  }


  if (paymentStatus === "success") {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-linear-to-br from-accent via-background to-accent flex items-center justify-center px-4">
          <div className="max-w-lg mx-auto bg-card p-8 rounded-2xl shadow-2xl text-center border border-border animate-fade-in-up">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">Payment Successful!</h2>
            <p className="text-muted-foreground mb-8 text-lg">Your booking has been confirmed.</p>
            <button
              onClick={() => window.location.assign("/")}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Return to Home
            </button>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-linear-to-br from-accent via-background to-accent py-12 px-4 flex items-center justify-center">
        <div className="max-w-4xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Booking Summary Card */}
            <div className="bg-card p-8 rounded-2xl shadow-2xl border border-border animate-fade-in-up">
              <h2 className="text-2xl font-serif font-bold mb-6 text-foreground">Booking Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-accent rounded-xl">
                  <span className="font-semibold text-muted-foreground">Room Type</span>
                  <span className="font-bold text-foreground">{roomNames[room as keyof typeof roomNames] || "Unknown Room"}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-accent rounded-xl">
                  <span className="font-semibold text-muted-foreground">Total Amount</span>
                  <span className="text-2xl font-serif font-bold text-primary">₦{price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-accent rounded-xl">
                  <span className="font-semibold text-muted-foreground">Email</span>
                  <span className="text-foreground">{paymentEmail}</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-primary/10 rounded-xl border border-primary/20">
                <p className="text-sm text-muted-foreground">
                  <strong>Secure Payment:</strong> Your payment is processed securely through Paystack with bank-level encryption.
                </p>
              </div>
            </div>

            {/* Payment Form Card */}
            <div className="bg-card p-8 rounded-2xl shadow-2xl border border-border animate-fade-in-up [animation-delay:0.2s]">
              <h1 className="text-3xl font-serif font-bold mb-2 text-foreground">Complete Payment</h1>
              <p className="text-muted-foreground mb-6">Enter your email to proceed with secure payment</p>

              {/* Payment Form */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-3 text-foreground">Email Address</label>
                  <input
                    type="email"
                    value={paymentEmail}
                    onChange={(e) => setPaymentEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground placeholder-muted-foreground transition-all duration-300"
                    placeholder="your@email.com"
                    aria-label="Email address"
                  />
                </div>

                {errorMessage && (
                  <div className="flex gap-3 p-4 bg-destructive/10 border border-destructive/20 rounded-xl text-destructive">
                    <AlertCircle size={20} className="shrink-0 mt-0.5" />
                    <p className="text-sm">{errorMessage}</p>
                  </div>
                )}

                <button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
                >
                  {isProcessing ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                      Processing Payment...
                    </div>
                  ) : (
                    `Pay ₦${price.toLocaleString()} Now`
                  )}
                </button>

                <div className="text-center">
                  <p className="text-xs text-muted-foreground">
                    By proceeding, you agree to our terms and conditions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default function PaymentPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentPageContent />
    </Suspense>
  )
}
