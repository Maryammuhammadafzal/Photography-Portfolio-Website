"use client"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { blogPosts } from "@/lib/blog-data"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const POSTS_PER_PAGE = 4

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const paginatedPosts = blogPosts.slice(startIndex, startIndex + POSTS_PER_PAGE)
  const featuredPost = currentPage === 1 ? blogPosts[0] : null
  const regularPosts = currentPage === 1 ? paginatedPosts.slice(1) : paginatedPosts

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">Our Blog</span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-4">Wedding Insights & Tips</h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Discover photography tips, venue guides, and inspiration for your special day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Link href={`/blog/${featuredPost.slug}`}>
                <div className="group relative overflow-hidden rounded-3xl bg-card border border-border">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                      <img
                        src={featuredPost.featuredImage || "/placeholder.svg"}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <span className="text-primary text-sm font-medium uppercase tracking-wider">
                        {featuredPost.category}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-3 group-hover:text-primary transition-colors text-balance">
                        {featuredPost.title}
                      </h2>
                      <p className="text-muted-foreground mt-4 line-clamp-3">{featuredPost.excerpt}</p>
                      <div className="flex items-center gap-4 mt-6">
                        <img
                          src={featuredPost.authorImage || "/placeholder.svg"}
                          alt={featuredPost.author}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="text-sm">
                          <p className="font-medium text-foreground">{featuredPost.author}</p>
                          <div className="flex items-center gap-3 text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {new Date(featuredPost.publishedAt).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {featuredPost.readTime}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6">
                        <span className="inline-flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all">
                          Read Article
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <article className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors h-full flex flex-col">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={post.featuredImage || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="text-primary text-xs font-medium uppercase tracking-wider">{post.category}</span>
                      <h3 className="text-lg font-bold text-foreground mt-2 group-hover:text-primary transition-colors line-clamp-2 text-balance">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-2 line-clamp-2 flex-grow">{post.excerpt}</p>
                      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border">
                        <img
                          src={post.authorImage || "/placeholder.svg"}
                          alt={post.author}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div className="text-xs">
                          <p className="font-medium text-foreground">{post.author}</p>
                          <p className="text-muted-foreground">{post.readTime}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="icon"
                  onClick={() => setCurrentPage(page)}
                  className={`rounded-full ${currentPage === page ? "bg-primary text-primary-foreground" : ""}`}
                >
                  {page}
                </Button>
              ))}

              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
