"use client"

import { motion } from "framer-motion"
import { Camera, Video, Sparkles, Award } from "lucide-react"

const features = [
  {
    icon: Camera,
    title: "Professional Photography",
    description: "Capturing every emotion with artistic precision using state-of-the-art equipment.",
  },
  {
    icon: Video,
    title: "Cinematic Videography",
    description: "Creating stunning 4K films that tell your love story in the most beautiful way.",
  },
  {
    icon: Sparkles,
    title: "Creative Excellence",
    description: "Bringing unique artistic vision to every shot, making your memories extraordinary.",
  },
  {
    icon: Award,
    title: "Award-Winning Team",
    description: "Our experienced team has been recognized for outstanding wedding coverage.",
  },
]

export function AboutSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img
                src="/pakistani-bride-in-red-bridal-dress-mehndi.jpg"
                alt="Pakistani Bride"
                className="w-full rounded-2xl object-cover h-48"
              />
              <img
                src="/pakistani-couple-wedding-celebration-traditional.jpg"
                alt="Wedding Celebration"
                className="w-full rounded-2xl object-cover h-64"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="/pakistani-groom-baraat-ceremony.jpg"
                alt="Baraat Ceremony"
                className="w-full rounded-2xl object-cover h-64"
              />
              <img src="/pakistani-wedding-photography-drone-shot.jpg" alt="Drone Shot" className="w-full rounded-2xl object-cover h-48" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 text-balance">
                Turning Your Special Day Into Timeless Art
              </h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                With over a decade of experience capturing Pakistani weddings, we understand the rich traditions,
                emotions, and moments that make your celebration unique. Our passionate team combines technical
                expertise with artistic vision to create stunning visual narratives.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl h-fit">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
