"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const portfolioItems = [
  {
    category: "Wedding",
    image: "/pakistani-wedding-ceremony-beautiful-couple-tradit.jpg",
    title: "Ahmed & Fatima",
  },
  {
    category: "Couple Shoot",
    image: "/pakistani-couple-romantic-outdoor-photoshoot.jpg",
    title: "Romantic Sessions",
  },
  {
    category: "Cinematic",
    image: "/pakistani-wedding-cinematic-photography-dramatic-l.jpg",
    title: "Cinematic Moments",
  },
  {
    category: "Drone",
    image: "/pakistani-wedding-aerial-drone-shot-venue.jpg",
    title: "Aerial Views",
  },
]

export function PortfolioPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">Our Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 text-balance">Featured Work</h2>
          </div>
          <Link href="/portfolio" className="mt-4 md:mt-0">
            <Button variant="outline" className="rounded-full bg-transparent">
              View All Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-primary text-xs uppercase tracking-wider font-medium">{item.category}</span>
                <h3 className="text-white text-lg font-semibold mt-1">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
