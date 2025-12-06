"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, ImageIcon, FileText, MessageSquare } from "lucide-react"
import { sampleBookings, sampleSupportTickets } from "@/lib/admin-data"
import { getAllPosts } from "@/lib/blog-data"
import { portfolioItems } from "@/lib/portfolio-data"
import { useEffect, useState } from "react"



export default function AdminDashboard() {
  const [blogPosts , setBlogPosts] = useState(null)
  const [loading , setLoading] = useState(false)
  const pendingBookings = sampleBookings.filter((b) => b.status === "pending")
  const confirmedBookings = sampleBookings.filter((b) => b.status === "confirmed")

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      try {
        const { data , posts } = await getAllPosts()
        // console.log(data);

        setBlogPosts(posts)
        console.log("Posts loaded:", posts) // ← SEE DATA HERE
      } catch (error) {
        console.error("Failed to load posts:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const stats = [
    {
      label: "Total Bookings",
      value: sampleBookings.length.toString(),
      icon: Calendar,
      change: "+12%",
      changeType: "positive" as const,
    },
    {
      label: "Portfolio Items",
      value: portfolioItems.length.toString(),
      icon: ImageIcon,
      change: "+8",
      changeType: "positive" as const,
    },
    {
      label: "Blog Posts",
      value: blogPosts?.length.toString(),
      icon: FileText,
      change: "+2",
      changeType: "positive" as const,
    },
    {
      label: "Open Tickets",
      value: sampleSupportTickets.filter((t) => t.status === "open").length.toString(),
      icon: MessageSquare,
      change: "-3",
      changeType: "negative" as const,
    },
  ]
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Here's an overview of your business.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground mt-1">{stat.value}</p>
                  <p className={`text-sm mt-1 ${stat.changeType === "positive" ? "text-green-600" : "text-red-600"}`}>
                    {stat.change} this month
                  </p>
                </div>
                <div className="bg-primary/10 p-3 rounded-xl">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Bookings */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Bookings</CardTitle>
            <span className="text-sm text-muted-foreground">{pendingBookings.length} pending</span>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sampleBookings.slice(0, 5).map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">{booking.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(booking.eventDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}{" "}
                      • {booking.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${booking.status === "confirmed"
                          ? "bg-green-100 text-green-700"
                          : booking.status === "pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                    >
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </span>
                    <p className="text-sm text-muted-foreground mt-1 capitalize">{booking.package}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Support Tickets */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Support Tickets</CardTitle>
            <span className="text-sm text-muted-foreground">
              {sampleSupportTickets.filter((t) => t.status === "open").length} open
            </span>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sampleSupportTickets.map((ticket) => (
                <div key={ticket.id} className="flex items-start justify-between p-4 bg-secondary rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{ticket.subject}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {ticket.name} • {ticket.email}
                    </p>
                    <p className="text-sm text-muted-foreground line-clamp-1 mt-2">{ticket.message}</p>
                  </div>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ml-4 ${ticket.status === "open" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"
                      }`}
                  >
                    {ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Add Blog Post", icon: FileText, href: "/admin/blog" },
              { label: "Upload Portfolio", icon: ImageIcon, href: "/admin/portfolio" },
              { label: "View Bookings", icon: Calendar, href: "/admin/bookings" },
              { label: "Check Messages", icon: MessageSquare, href: "/admin/support" },
            ].map((action, index) => (
              <a
                key={index}
                href={action.href}
                className="flex flex-col items-center justify-center p-6 bg-secondary rounded-xl hover:bg-primary/10 transition-colors group"
              >
                <action.icon className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium text-foreground mt-2">{action.label}</span>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
