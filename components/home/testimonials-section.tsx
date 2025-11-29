"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sara & Bilal",
    location: "Lahore",
    image: "/pakistani-couple-happy-portrait.jpg",
    text: "Capture Moments exceeded all our expectations! The team was professional, creative, and captured every beautiful moment of our wedding. We couldn't be happier with our photos and video.",
    rating: 5,
  },
  {
    name: "Ayesha & Omar",
    location: "Karachi",
    image: "/pakistani-bride-groom-smiling-portrait.jpg",
    text: "From the mehndi to the walima, every event was captured perfectly. The cinematic video still brings tears to our eyes. Highly recommended for anyone looking for quality work!",
    rating: 5,
  },
  {
    name: "Hira & Ali",
    location: "Islamabad",
    image: "/pakistani-wedding-couple-portrait-elegant.jpg",
    text: "The drone shots were absolutely stunning! The team understood exactly what we wanted and delivered beyond our imagination. Our wedding album is truly a work of art.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 text-balance">What Our Clients Say</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background/5 backdrop-blur-sm rounded-2xl p-8 border border-background/10"
            >
              <Quote className="h-10 w-10 text-primary/50 mb-4" />
              <p className="text-background/80 leading-relaxed mb-6">{testimonial.text}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-background/60 text-sm">{testimonial.location}</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
