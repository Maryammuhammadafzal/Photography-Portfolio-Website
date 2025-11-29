// Sample admin data for demonstration

export interface Booking {
  id: string
  name: string
  phone: string
  secondaryPhone?: string
  eventDate: string
  location: string
  package: "silver" | "gold" | "premium"
  status: "pending" | "confirmed" | "completed"
  paymentScreenshot?: string
  createdAt: string
}

export interface SupportTicket {
  id: string
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  status: "open" | "resolved"
  createdAt: string
}

export interface AdminBlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featuredImage: string
  category: string
  status: "draft" | "published"
  publishedAt: string
}

export interface AdminPortfolioItem {
  id: string
  title: string
  category: string
  type: "image" | "video"
  src: string
  order: number
}

export interface PackageSettings {
  silver: {
    price: string
    features: string[]
  }
  gold: {
    price: string
    features: string[]
  }
  premium: {
    price: string
    features: string[]
  }
}

export const sampleBookings: Booking[] = [
  {
    id: "1",
    name: "Ali Hassan",
    phone: "+92 300 1234567",
    secondaryPhone: "+92 321 9876543",
    eventDate: "2024-12-15",
    location: "Lahore, Royal Palm",
    package: "premium",
    status: "confirmed",
    createdAt: "2024-11-01",
  },
  {
    id: "2",
    name: "Sara Khan",
    phone: "+92 333 4567890",
    eventDate: "2024-12-20",
    location: "Karachi, Pearl Continental",
    package: "gold",
    status: "pending",
    createdAt: "2024-11-05",
  },
  {
    id: "3",
    name: "Bilal Ahmed",
    phone: "+92 345 6789012",
    eventDate: "2024-11-25",
    location: "Islamabad, Serena Hotel",
    package: "silver",
    status: "completed",
    createdAt: "2024-10-20",
  },
  {
    id: "4",
    name: "Ayesha Malik",
    phone: "+92 312 3456789",
    eventDate: "2025-01-10",
    location: "Lahore, Haveli Khalil Khan",
    package: "premium",
    status: "pending",
    createdAt: "2024-11-10",
  },
  {
    id: "5",
    name: "Usman Shah",
    phone: "+92 300 9876543",
    eventDate: "2025-01-05",
    location: "Faisalabad, Chenab Club",
    package: "gold",
    status: "confirmed",
    createdAt: "2024-11-08",
  },
]

export const sampleSupportTickets: SupportTicket[] = [
  {
    id: "1",
    name: "Fatima Ali",
    email: "fatima@email.com",
    phone: "+92 300 1111222",
    subject: "Question about Premium Package",
    message:
      "I would like to know if the outdoor couple shoot can be done at a different location than the wedding venue?",
    status: "open",
    createdAt: "2024-11-10",
  },
  {
    id: "2",
    name: "Hassan Raza",
    email: "hassan@email.com",
    subject: "Payment Inquiry",
    message: "Can I pay the advance in two installments?",
    status: "resolved",
    createdAt: "2024-11-08",
  },
  {
    id: "3",
    name: "Nadia Iqbal",
    email: "nadia@email.com",
    phone: "+92 321 5556666",
    subject: "Delivery Timeline",
    message: "When can I expect to receive my edited photos and video?",
    status: "open",
    createdAt: "2024-11-12",
  },
]
