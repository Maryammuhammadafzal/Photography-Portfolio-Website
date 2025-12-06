"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Search, Edit, Trash2, Eye, FileText, Calendar } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  featured_image: string
  author: string
  author_image: string
  published_at: string
  read_time: string
  category: string
}

export default function AdminBlog() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "",
    featured_image: "",
  })

  // Fetch all posts
  const fetchPosts = async () => {
    setLoading(true)
    try {
      const res = await fetch(`http://localhost/photography-portfolio-backend/posts.php`)
      const data = await res.json()
      setPosts(data.posts || [])
    } catch (error) {
      console.error("Failed to load posts:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  }

  // ADD POST
  const handleAdd = async () => {
    if (!form.title || !form.content) return

    const newPost = {
      title: form.title,
      slug: form.slug || generateSlug(form.title),
      excerpt: form.excerpt,
      content: form.content,
      featured_image: form.featured_image,
      category: form.category,
      author: "Admin",
      author_image: "/placeholder.svg",
      published_at: new Date().toISOString().split("T")[0],
      read_time: `${Math.ceil(form.content.split(" ").length / 200)} min read`,
    }

    const res = await fetch("http://localhost/photography-portfolio-backend/add-post.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    })

    const result = await res.json()
    if (result.success) {
      setIsAddDialogOpen(false)
      setForm({ title: "", slug: "", excerpt: "", content: "", category: "", featured_image: "" })
      fetchPosts()
    } else {
      console.error("Add failed:", result.error)
    }
  }

  // EDIT POST
  const openEdit = (post: BlogPost) => {
    setEditingPost(post)
    setForm({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      featured_image: post.featured_image,
    })
    setIsEditDialogOpen(true)
  }

  const handleUpdate = async () => {
    if (!editingPost || !form.title || !form.content) return

    const updated = {
      id: editingPost.id,
      title: form.title,
      slug: form.slug || generateSlug(form.title),
      excerpt: form.excerpt,
      content: form.content,
      featured_image: form.featured_image,
      category: form.category,
    }
console.log(updated);

    const res = await fetch("http://localhost/photography-portfolio-backend/posts-update.php", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    })

    const result = await res.json()
    if (result.success) {
      setIsEditDialogOpen(false)
      window.location.reload();
      fetchPosts()
    } else {
      console.error("Update failed:", result.error)
    }
  }

  // DELETE POST
  const handleDelete = async (id: string) => {
    if (!confirm("Delete this post?")) return

    const res = await fetch(`http://localhost/photography-portfolio-backend/delete-post.php?id=${id}`, {
      method: "DELETE",
    })

    const result = await res.json()
    if (result.success) {
      fetchPosts()
    } else {
      console.error("Delete failed:", result.error)
    }
  }

  if (loading) {
    return <div className="p-8 text-center">Loading posts...</div>
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Blog Posts</h1>
          <p className="text-muted-foreground mt-1">Create and manage blog content</p>
        </div>

        {/* ADD DIALOG */}
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              New Post
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create Blog Post</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label>Title *</Label>
                <Input
                  placeholder="Enter post title"
                  value={form.title}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      title: e.target.value,
                      slug: generateSlug(e.target.value),
                    })
                  }}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>URL Slug</Label>
                  <Input
                    placeholder="post-url-slug"
                    value={form.slug}
                    onChange={(e) => setForm({ ...form, slug: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select
                    value={form.category}
                    onValueChange={(v) => setForm({ ...form, category: v })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Photography Tips">Photography Tips</SelectItem>
                      <SelectItem value="Venues">Venues</SelectItem>
                      <SelectItem value="Ceremonies">Ceremonies</SelectItem>
                      <SelectItem value="Technology">Technology</SelectItem>
                      <SelectItem value="Videography">Videography</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Featured Image URL</Label>
                <Input
                  placeholder="https://..."
                  value={form.featured_image}
                  onChange={(e) => setForm({ ...form, featured_image: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Excerpt *</Label>
                <Textarea
                  placeholder="Brief description..."
                  value={form.excerpt}
                  onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <Label>Content * (HTML supported)</Label>
                <Textarea
                  placeholder="Write your post..."
                  value={form.content}
                  onChange={(e) => setForm({ ...form, content: e.target.value })}
                  rows={10}
                  className="font-mono text-sm"
                />
              </div>
              <Button onClick={handleAdd} className="w-full" disabled={!form.title || !form.content}>
                Publish Post
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* EDIT DIALOG */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Edit Blog Post</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label>Title *</Label>
                <Input
                  placeholder="Enter post title"
                  value={form.title}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      title: e.target.value,
                      slug: generateSlug(e.target.value),
                    })
                  }}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>URL Slug</Label>
                  <Input
                    placeholder="post-url-slug"
                    value={form.slug}
                    onChange={(e) => setForm({ ...form, slug: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select
                    value={form.category}
                    onValueChange={(v) => setForm({ ...form, category: v })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Photography Tips">Photography Tips</SelectItem>
                      <SelectItem value="Venues">Venues</SelectItem>
                      <SelectItem value="Ceremonies">Ceremonies</SelectItem>
                      <SelectItem value="Technology">Technology</SelectItem>
                      <SelectItem value="Videography">Videography</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Featured Image URL</Label>
                <Input
                  placeholder="https://..."
                  value={form.featured_image}
                  onChange={(e) => setForm({ ...form, featured_image: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Excerpt *</Label>
                <Textarea
                  placeholder="Brief description..."
                  value={form.excerpt}
                  onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <Label>Content * (HTML supported)</Label>
                <Textarea
                  placeholder="Write your post..."
                  value={form.content}
                  onChange={(e) => setForm({ ...form, content: e.target.value })}
                  rows={10}
                  className="font-mono text-sm"
                />
              </div>
              <Button onClick={handleUpdate} className="w-full" disabled={!form.title || !form.content}>
                Update Post
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Posts List */}
      <div className="space-y-4">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-48 h-32 md:h-auto">
                <img
                  src={post.featured_image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="flex-1 p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <span className="text-primary text-xs font-medium uppercase tracking-wider">{post.category}</span>
                    <h3 className="text-lg font-semibold text-foreground mt-1">{post.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.published_at).toLocaleDateString()}
                      </span>
                      <span>{post.read_time}</span>
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <Button variant="ghost" size="icon" asChild>
                      <a href={`/blog/${encodeURIComponent(post.slug)}`} target="_blank" rel="noopener">
                        <Eye className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => openEdit(post)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-destructive hover:text-destructive"
                      onClick={() => handleDelete(post.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12 bg-card rounded-lg border border-border">
          <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">No blog posts found.</p>
          <Button variant="outline" className="mt-4" onClick={() => setIsAddDialogOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Create Your First Post
          </Button>
        </div>
      )}
    </div>
  )
}

// "use client"

// import { useState } from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Plus, Search, Edit, Trash2, Eye, FileText, Calendar } from "lucide-react"
// import { blogPosts, type BlogPost } from "@/lib/blog-data"
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

// export default function AdminBlog() {
//   const [posts, setPosts] = useState(blogPosts)
//   const [searchQuery, setSearchQuery] = useState("")
//   const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
//   const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
//   const [newPost, setNewPost] = useState({
//     title: "",
//     slug: "",
//     excerpt: "",
//     content: "",
//     category: "",
//     featuredImage: "",
//   })

//   const filteredPosts = posts.filter(
//     (post) =>
//       post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       post.category.toLowerCase().includes(searchQuery.toLowerCase()),
//   )

//   const handleDelete = (id: string) => {
//     setPosts(posts.filter((post) => post.id !== id))
//   }

//   const handleAdd = () => {
//     if (!newPost.title || !newPost.content) return

//     const post: BlogPost = {
//       id: `new-${Date.now()}`,
//       ...newPost,
//       author: "Admin",
//       authorImage: "/placeholder.svg?height=100&width=100",
//       publishedAt: new Date().toISOString().split("T")[0],
//       readTime: `${Math.ceil(newPost.content.split(" ").length / 200)} min read`,
//     }
//     setPosts([post, ...posts])
//     setNewPost({
//       title: "",
//       slug: "",
//       excerpt: "",
//       content: "",
//       category: "",
//       featuredImage: "",
//     })
//     setIsAddDialogOpen(false)
//   }

//   const generateSlug = (title: string) => {
//     return title
//       .toLowerCase()
//       .replace(/[^a-z0-9]+/g, "-")
//       .replace(/(^-|-$)/g, "")
//   }

//   return (
//     <div className="space-y-6">
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//         <div>
//           <h1 className="text-3xl font-bold text-foreground">Blog Posts</h1>
//           <p className="text-muted-foreground mt-1">Create and manage blog content</p>
//         </div>
//         <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
//           <DialogTrigger asChild>
//             <Button className="bg-primary hover:bg-primary/90">
//               <Plus className="h-4 w-4 mr-2" />
//               New Post
//             </Button>
//           </DialogTrigger>
//           <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
//             <DialogHeader>
//               <DialogTitle>Create Blog Post</DialogTitle>
//             </DialogHeader>
//             <div className="space-y-4 pt-4">
//               <div className="space-y-2">
//                 <Label>Title *</Label>
//                 <Input
//                   placeholder="Enter post title"
//                   value={newPost.title}
//                   onChange={(e) => {
//                     setNewPost({
//                       ...newPost,
//                       title: e.target.value,
//                       slug: generateSlug(e.target.value),
//                     })
//                   }}
//                 />
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <Label>URL Slug</Label>
//                   <Input
//                     placeholder="post-url-slug"
//                     value={newPost.slug}
//                     onChange={(e) => setNewPost({ ...newPost, slug: e.target.value })}
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label>Category</Label>
//                   <Select
//                     value={newPost.category}
//                     onValueChange={(value) => setNewPost({ ...newPost, category: value })}
//                   >
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select category" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="Photography Tips">Photography Tips</SelectItem>
//                       <SelectItem value="Venues">Venues</SelectItem>
//                       <SelectItem value="Ceremonies">Ceremonies</SelectItem>
//                       <SelectItem value="Technology">Technology</SelectItem>
//                       <SelectItem value="Videography">Videography</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <Label>Featured Image URL</Label>
//                 <Input
//                   placeholder="Enter image URL"
//                   value={newPost.featuredImage}
//                   onChange={(e) => setNewPost({ ...newPost, featuredImage: e.target.value })}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label>Excerpt *</Label>
//                 <Textarea
//                   placeholder="Brief description of the post..."
//                   value={newPost.excerpt}
//                   onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
//                   rows={2}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label>Content * (HTML supported)</Label>
//                 <Textarea
//                   placeholder="Write your post content..."
//                   value={newPost.content}
//                   onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
//                   rows={10}
//                   className="font-mono text-sm"
//                 />
//               </div>
//               <Button onClick={handleAdd} className="w-full" disabled={!newPost.title || !newPost.content}>
//                 Publish Post
//               </Button>
//             </div>
//           </DialogContent>
//         </Dialog>
//       </div>

//       {/* Search */}
//       <Card>
//         <CardContent className="p-4">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//             <Input
//               placeholder="Search posts..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="pl-10"
//             />
//           </div>
//         </CardContent>
//       </Card>

//       {/* Posts List */}
//       <div className="space-y-4">
//         {filteredPosts.map((post) => (
//           <Card key={post.id} className="overflow-hidden">
//             <div className="flex flex-col md:flex-row">
//               <div className="md:w-48 h-32 md:h-auto">
//                 <img
//                   src={post.featuredImage || "/placeholder.svg"}
//                   alt={post.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <CardContent className="flex-1 p-6">
//                 <div className="flex items-start justify-between">
//                   <div className="flex-1">
//                     <span className="text-primary text-xs font-medium uppercase tracking-wider">{post.category}</span>
//                     <h3 className="text-lg font-semibold text-foreground mt-1">{post.title}</h3>
//                     <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{post.excerpt}</p>
//                     <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
//                       <span className="flex items-center gap-1">
//                         <Calendar className="h-3 w-3" />
//                         {new Date(post.publishedAt).toLocaleDateString()}
//                       </span>
//                       <span>{post.readTime}</span>
//                       <span>{post.author}</span>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-2 ml-4">
//                     <Button variant="ghost" size="icon" asChild>
//                       <a href={`/blog/${post.slug}`} target="_blank" rel="noreferrer">
//                         <Eye className="h-4 w-4" />
//                       </a>
//                     </Button>
//                     <Button variant="ghost" size="icon">
//                       <Edit className="h-4 w-4" />
//                     </Button>
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       className="text-destructive hover:text-destructive"
//                       onClick={() => handleDelete(post.id)}
//                     >
//                       <Trash2 className="h-4 w-4" />
//                     </Button>
//                   </div>
//                 </div>
//               </CardContent>
//             </div>
//           </Card>
//         ))}
//       </div>

//       {filteredPosts.length === 0 && (
//         <div className="text-center py-12 bg-card rounded-lg border border-border">
//           <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
//           <p className="text-muted-foreground">No blog posts found.</p>
//           <Button variant="outline" className="mt-4 bg-transparent" onClick={() => setIsAddDialogOpen(true)}>
//             <Plus className="h-4 w-4 mr-2" />
//             Create Your First Post
//           </Button>
//         </div>
//       )}
//     </div>
//   )
// }