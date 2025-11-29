"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Star, Crown, Gem } from "lucide-react"
import { motion } from "framer-motion"

const packages = [
  {
    name: "Silver",
    price: "80,000",
    icon: Star,
    image: "/pakistani-wedding-photography-silver-package-elega.jpg",
    features: [
      "3 Days — 1 Videographer (4K Mirrorless Camera)",
      "3 Days — 1 Photographer (Portrait or Journalistic Style)",
      "1 Day Drone Coverage",
      "1 Photo Album",
      "Full Event Coverage",
    ],
    popular: false,
  },
  {
    name: "Gold",
    price: "140,000",
    icon: Crown,
    image: "/pakistani-wedding-photography-gold-package-cinemat.jpg",
    features: [
      "3 Days — 1 Videographer (4K Mirrorless Camera)",
      "3 Days — 2 Photographers (Portrait or Cinematic)",
      "3 Days Drone Coverage",
      "4 Photo Albums",
      "Teaser + Cinematic Shots",
      "Full Album + Cinematic Film",
      "Full-Day Coverage",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "240,000",
    icon: Gem,
    image: "/pakistani-wedding-photography-premium-package-luxu.jpg",
    features: [
      "3 Days — 2 Videographers (4K Mirrorless Cameras)",
      "3 Days — 1 Dedicated TikTok/Reels Videographer",
      "3 Days — 3 Photographers (Portrait, Cinematic & General)",
      "3 Days Drone Coverage",
      "6 Photo Albums",
      "Outdoor Couple Shoot + Song",
      "Full Event Coverage",
      "Drone + Teaser + Cinematic Shots",
      "Full Album + Cinematic Film",
    ],
    popular: false,
  },
]

export function PackagesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">Our Packages</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 text-balance">
            Choose Your Perfect Package
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We offer flexible packages tailored to your needs. Each package is designed to capture every precious moment
            of your special day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-card rounded-2xl overflow-hidden border ${
                pkg.popular ? "border-primary shadow-xl scale-105" : "border-border"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full z-10">
                  Most Popular
                </div>
              )}

              {/* Package Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pkg.image || "/placeholder.svg"}
                  alt={`${pkg.name} Package`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <pkg.icon className="h-6 w-6 text-primary" />
                  <span className="text-xl font-bold text-foreground">{pkg.name}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">PKR {pkg.price}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={`/booking?package=${pkg.name.toLowerCase()}`}>
                  <Button
                    className={`w-full rounded-full ${
                      pkg.popular
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                    }`}
                  >
                    Book Now
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
