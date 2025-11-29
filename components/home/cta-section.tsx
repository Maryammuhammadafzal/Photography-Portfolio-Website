"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Phone, MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/placeholder.svg?height=800&width=1920" alt="Wedding Venue" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">Let's Connect</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
              Ready to Capture Your Special Day?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Don't let your precious moments slip away. Contact us today to discuss your wedding photography and
              videography needs. Let's create something beautiful together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/booking">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                  Book Now
                </Button>
              </Link>
              <Link href="https://wa.me/923001234567" target="_blank">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10 rounded-full px-8 bg-transparent"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp Us
                </Button>
              </Link>
              <Link href="tel:+923001234567">
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-muted-foreground hover:text-foreground rounded-full px-8"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
