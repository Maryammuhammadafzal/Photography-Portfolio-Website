"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { motion } from "framer-motion"
import type { PortfolioItem } from "@/lib/portfolio-data"
import { Lightbox } from "./lightbox"

interface GalleryGridProps {
  items: PortfolioItem[]
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? items.length - 1 : selectedIndex - 1)
    }
  }

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === items.length - 1 ? 0 : selectedIndex + 1)
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer bg-muted"
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={item.type === "video" ? item.thumbnail || item.src : item.src}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {item.type === "video" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary/90 rounded-full p-4 transform scale-100 group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-6 w-6 text-primary-foreground fill-current" />
                </div>
              </div>
            )}

            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      <Lightbox
        item={selectedIndex !== null ? items[selectedIndex] : null}
        onClose={() => setSelectedIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  )
}
