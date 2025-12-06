"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Upload, Trash2, ImageIcon, Video, Edit } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

interface PortfolioItem {
  id: string
  title: string
  slug: string
  type: "image" | "video"
  src: string
  thumbnail?: string
  category: string
}

const categories = [
  { id: "wedding", label: "Wedding" },
  { id: "mehndi", label: "Mehndi" },
  { id: "baraat", label: "Baraat" },
  { id: "portrait", label: "Portrait" },
]

export default function AdminPortfolio() {
  const [items, setItems] = useState<PortfolioItem[]>([])
  const [activeCategory, setActiveCategory] = useState<string | "all">("all")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<PortfolioItem | null>(null)
  const [loading, setLoading] = useState(true)

  const [form, setForm] = useState({
    title: "",
    category: "wedding",
    type: "image" as "image" | "video",
    src: "",
    thumbnail: "",
  })

  const fetchItems = async () => {
    setLoading(true)
    try {
      const res = await fetch(`http://localhost/photography-portfolio-backend/portfolio-get.php?category=${activeCategory}`)
      const data = await res.json()
      setItems(data)
    } catch (error) {
      console.error("Failed to load items:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchItems()
  }, [activeCategory])

  const filteredItems = activeCategory === "all" ? items : items.filter(i => i.category === activeCategory)

  const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
  }

  // ADD
  const handleAdd = async () => {
    if (!form.title || !form.src) return

    const newItem = {
      ...form,
      slug: generateSlug(form.title),
      thumbnail: form.type === "video" ? form.thumbnail : null,
    }

    const res = await fetch("http://localhost/photography-portfolio-backend/portfolio-add.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    })

    if (res.ok) {
      setIsAddDialogOpen(false)
      setForm({ title: "", category: "wedding", type: "image", src: "", thumbnail: "" })
      fetchItems()
    }
  }

  // UPDATE
  const openEdit = (item: PortfolioItem) => {
    setEditingItem(item)
    setForm({
      title: item.title,
      category: item.category,
      type: item.type,
      src: item.src,
      thumbnail: item.thumbnail || "",
    })
    setIsEditDialogOpen(true)
  }

  const handleUpdate = async () => {
    if (!editingItem) return

    const updated = {
      id: editingItem.id,
      ...form,
      slug: generateSlug(form.title),
      thumbnail: form.type === "video" ? form.thumbnail : null,
    }

    const res = await fetch("http://localhost/photography-portfolio-backend/portfolio-update.php", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    })

    if (res.ok) {
      setIsEditDialogOpen(false)
      fetchItems()
    }
  }

  // DELETE
  const handleDelete = async (id: string) => {
    if (!confirm("Delete this item?")) return
    await fetch(`http://localhost/photography-portfolio-backend/portfolio-delete.php?id=${id}`, { method: "DELETE" })
    fetchItems()
  }

  if (loading) return <div className="p-8 text-center">Loading...</div>

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Portfolio</h1>
          <p className="text-muted-foreground">Manage your portfolio images and videos</p>
        </div>

        {/* ADD DIALOG */}
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button><Plus className="h-4 w-4 mr-2" /> Add Item</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>Add Item</DialogTitle></DialogHeader>
            <div className="space-y-4">
              <div><Label>Title</Label><Input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><Label>Category</Label>
                  <Select value={form.category} onValueChange={v => setForm({ ...form, category: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>{categories.map(c => <SelectItem key={c.id} value={c.id}>{c.label}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div><Label>Type</Label>
                  <Select value={form.type} onValueChange={v => setForm({ ...form, type: v as any })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent><SelectItem value="image">Image</SelectItem><SelectItem value="video">Video</SelectItem></SelectContent>
                  </Select>
                </div>
              </div>
              <div><Label>{form.type === "image" ? "Image URL" : "Video URL"}</Label><Input value={form.src} onChange={e => setForm({ ...form, src: e.target.value })} /></div>
              {form.type === "video" && (
                <div><Label>Thumbnail URL</Label><Input value={form.thumbnail} onChange={e => setForm({ ...form, thumbnail: e.target.value })} /></div>
              )}
              <Button onClick={handleAdd} className="w-full">Add</Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* EDIT DIALOG */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent>
            <DialogHeader><DialogTitle>Edit Item</DialogTitle></DialogHeader>
            <div className="space-y-4">
              <div><Label>Title</Label><Input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} /></div>
              {/* Same fields as Add */}
              <Button onClick={handleUpdate} className="w-full">Update</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2">
        <button onClick={() => setActiveCategory("all")} className={cn("px-4 py-2 rounded-full", activeCategory === "all" ? "bg-primary text-white" : "bg-secondary")}>All</button>
        {categories.map(c => (
          <button key={c.id} onClick={() => setActiveCategory(c.id)} className={cn("px-4 py-2 rounded-full", activeCategory === c.id ? "bg-primary text-white" : "bg-secondary")}>{c.label}</button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredItems.map(item => (
          <Card key={item.id} className="group">
            <div className="aspect-square relative">
              <img src={item.type === "video" ? (item.thumbnail || item.src) : item.src} alt={item.title} className="w-full h-full object-cover" />
              {item.type === "video" && <div className="absolute inset-0 flex items-center justify-center bg-black/30"><Video className="h-8 w-8 text-white" /></div>}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex gap-2 justify-center items-center">
                <Button size="icon" variant="destructive" onClick={() => handleDelete(item.id)}><Trash2 className="h-4 w-4" /></Button>
                <Button size="icon" onClick={() => openEdit(item)}><Edit className="h-4 w-4" /></Button>
              </div>
            </div>
            <CardContent className="p-2">
              <p className="text-sm font-medium truncate">{item.title}</p>
              <p className="text-xs text-muted-foreground">{item.category}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}