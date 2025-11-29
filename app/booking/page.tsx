"use client"

import type React from "react"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, MapPin, Phone, Upload, CheckCircle2, Star, Crown, Gem } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const packages = [
  { id: "silver", name: "Silver", price: "80,000", icon: Star },
  { id: "gold", name: "Gold", price: "140,000", icon: Crown },
  { id: "premium", name: "Premium", price: "240,000", icon: Gem },
]

function BookingFormContent() {
  const searchParams = useSearchParams()
  const [selectedPackage, setSelectedPackage] = useState<string>("gold")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)

  useEffect(() => {
    const pkg = searchParams.get("package")
    if (pkg && packages.some((p) => p.id === pkg)) {
      setSelectedPackage(pkg)
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-20"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                  <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Booking Request Submitted!</h1>
                <p className="text-muted-foreground max-w-md mx-auto mb-8">
                  Thank you for your booking request. Our team will contact you within 24 hours to confirm your
                  reservation and discuss the details.
                </p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline" className="rounded-full">
                  Submit Another Booking
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {/* Header */}
                <div className="text-center mb-12">
                  <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">Book Your Date</span>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4">Reserve Your Special Day</h1>
                  <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                    Fill out the form below to book our services. We'll get back to you within 24 hours to confirm your
                    booking.
                  </p>
                </div>

                {/* Package Selection */}
                <div className="mb-10">
                  <Label className="text-base font-semibold mb-4 block">Select Package</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {packages.map((pkg) => (
                      <button
                        key={pkg.id}
                        type="button"
                        onClick={() => setSelectedPackage(pkg.id)}
                        className={cn(
                          "p-6 rounded-xl border-2 transition-all text-left",
                          selectedPackage === pkg.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50",
                        )}
                      >
                        <pkg.icon
                          className={cn(
                            "h-8 w-8 mb-3",
                            selectedPackage === pkg.id ? "text-primary" : "text-muted-foreground",
                          )}
                        />
                        <h3 className="font-semibold text-foreground">{pkg.name}</h3>
                        <p className="text-primary font-bold mt-1">PKR {pkg.price}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Booking Form */}
                <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-2xl border border-border">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" name="name" placeholder="Enter your full name" required className="h-12" />
                  </div>

                  {/* Phone Numbers */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+92 300 1234567"
                          required
                          className="h-12 pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="secondaryPhone">Secondary Phone (Optional)</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                          id="secondaryPhone"
                          name="secondaryPhone"
                          type="tel"
                          placeholder="+92 300 1234567"
                          className="h-12 pl-10"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="eventDate">Event Date *</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input id="eventDate" name="eventDate" type="date" required className="h-12 pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Event Location *</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                          id="location"
                          name="location"
                          placeholder="City, Venue Name"
                          required
                          className="h-12 pl-10"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Screenshot */}
                  <div className="space-y-2">
                    <Label htmlFor="payment">Advance Payment Screenshot (Optional)</Label>
                    <div className="relative">
                      <input
                        type="file"
                        id="payment"
                        name="payment"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="payment"
                        className="flex items-center justify-center gap-3 h-32 border-2 border-dashed border-border rounded-xl cursor-pointer hover:border-primary/50 transition-colors"
                      >
                        <Upload className="h-6 w-6 text-muted-foreground" />
                        <span className="text-muted-foreground">
                          {fileName || "Click to upload payment screenshot"}
                        </span>
                      </label>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Upload a screenshot of your advance payment (JazzCash, EasyPaisa, or Bank Transfer)
                    </p>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-base"
                    disabled={isLoading}
                  >
                    {isLoading ? "Submitting..." : "Submit Booking Request"}
                  </Button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default function BookingPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-background">
          <Navbar />
          <div className="pt-32 pb-24 text-center">
            <p className="text-muted-foreground">Loading...</p>
          </div>
          <Footer />
        </main>
      }
    >
      <BookingFormContent />
    </Suspense>
  )
}
