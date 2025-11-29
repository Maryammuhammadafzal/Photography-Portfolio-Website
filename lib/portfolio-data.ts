export type PortfolioCategory = "wedding" | "couple-shoot" | "indian-album" | "drones" | "teaser" | "song-films"

export interface PortfolioItem {
  id: string
  title: string
  category: PortfolioCategory
  type: "image" | "video"
  src: string
  thumbnail?: string
  description?: string
}

export const categories: { id: PortfolioCategory; label: string; description: string }[] = [
  { id: "wedding", label: "Wedding", description: "Beautiful moments from Pakistani weddings" },
  { id: "couple-shoot", label: "Couple Shoot", description: "Romantic couple photography sessions" },
  { id: "indian-album", label: "Indian Album", description: "Traditional Indian style wedding albums" },
  { id: "drones", label: "Drones", description: "Stunning aerial photography and videography" },
  { id: "teaser", label: "Teaser", description: "Short cinematic wedding teasers" },
  { id: "song-films", label: "Song Films", description: "Romantic song videos with cinematic storytelling" },
]

export const portfolioItems: PortfolioItem[] = [
  // Wedding
  { id: "w1", title: "Ahmed & Fatima's Nikkah", category: "wedding", type: "image", src: "/pakistani-wedding-nikkah-ceremony-beautiful-couple.jpg" },
  { id: "w2", title: "Baraat Celebration", category: "wedding", type: "image", src: "/pakistani-baraat-ceremony-groom-horse-decoration.jpg" },
  { id: "w3", title: "Mehndi Night", category: "wedding", type: "image", src: "/pakistani-mehndi-ceremony-colorful-celebration.jpg" },
  { id: "w4", title: "Walima Reception", category: "wedding", type: "image", src: "/pakistani-walima-reception-elegant-couple.jpg" },
  { id: "w5", title: "Dholki Night", category: "wedding", type: "image", src: "/pakistani-dholki-ceremony-traditional-celebration.jpg" },
  { id: "w6", title: "Rukhsati Moment", category: "wedding", type: "image", src: "/pakistani-wedding-emotional-rukhsati-ceremony.jpg" },
  { id: "w7", title: "Bride Getting Ready", category: "wedding", type: "image", src: "/pakistani-bride-getting-ready-makeup-bridal.jpg" },
  { id: "w8", title: "Wedding Decor", category: "wedding", type: "image", src: "/pakistani-wedding-decoration-flowers-elegant.jpg" },

  // Couple Shoot
  {
    id: "c1",
    title: "Pre-Wedding Garden Shoot",
    category: "couple-shoot",
    type: "image",
    src: "/pakistani-couple-garden-photoshoot-romantic.jpg",
  },
  { id: "c2", title: "Sunset Romance", category: "couple-shoot", type: "image", src: "/pakistani-couple-sunset-romantic-photography.jpg" },
  { id: "c3", title: "Traditional Attire", category: "couple-shoot", type: "image", src: "/pakistani-couple-traditional-dress-photoshoot.jpg" },
  { id: "c4", title: "Urban Love Story", category: "couple-shoot", type: "image", src: "/pakistani-couple-urban-city-photoshoot-modern.jpg" },
  { id: "c5", title: "Palace Grounds", category: "couple-shoot", type: "image", src: "/pakistani-couple-palace-heritage-photoshoot.jpg" },
  { id: "c6", title: "Candid Moments", category: "couple-shoot", type: "image", src: "/pakistani-couple-candid-laughing-romantic.jpg" },

  // Indian Album
  {
    id: "i1",
    title: "Royal Album Collection",
    category: "indian-album",
    type: "image",
    src: "/indian-wedding-album-royal-photography.jpg",
  },
  {
    id: "i2",
    title: "Sangeet Ceremony",
    category: "indian-album",
    type: "image",
    src: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "i3",
    title: "Haldi Ceremony",
    category: "indian-album",
    type: "image",
    src: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "i4",
    title: "Traditional Rituals",
    category: "indian-album",
    type: "image",
    src: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "i5",
    title: "Bridal Portrait",
    category: "indian-album",
    type: "image",
    src: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "i6",
    title: "Seven Vows",
    category: "indian-album",
    type: "image",
    src: "/placeholder.svg?height=600&width=800",
  },

  // Drones
  {
    id: "d1",
    title: "Venue Aerial View",
    category: "drones",
    type: "image",
    src: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "d2",
    title: "Baraat from Above",
    category: "drones",
    type: "image",
    src: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "d3",
    title: "Garden Wedding",
    category: "drones",
    type: "image",
    src: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "d4",
    title: "Grand Entrance",
    category: "drones",
    type: "image",
    src: "/placeholder.svg?height=600&width=800",
  },
  { id: "d5", title: "Beach Wedding", category: "drones", type: "image", src: "/placeholder.svg?height=600&width=800" },
  { id: "d6", title: "Palace Venue", category: "drones", type: "image", src: "/placeholder.svg?height=600&width=800" },

  // Teaser
  {
    id: "t1",
    title: "Sara & Bilal Teaser",
    category: "teaser",
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "t2",
    title: "Ayesha & Omar Teaser",
    category: "teaser",
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "t3",
    title: "Hira & Ali Teaser",
    category: "teaser",
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "t4",
    title: "Nadia & Hassan Teaser",
    category: "teaser",
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/placeholder.svg?height=600&width=800",
  },

  // Song Films
  {
    id: "s1",
    title: "Eternal Love - Music Video",
    category: "song-films",
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "s2",
    title: "Forever Yours - Song Film",
    category: "song-films",
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "s3",
    title: "Love Story - Cinematic Song",
    category: "song-films",
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "s4",
    title: "Destined Hearts",
    category: "song-films",
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/placeholder.svg?height=600&width=800",
  },
]
