"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Save, Upload, Plus, Trash2, Package, ImageIcon, Phone } from "lucide-react"

export default function AdminSettings() {
  const [heroSettings, setHeroSettings] = useState({
    title: "Capturing Your Timeless Moments",
    subtitle: "Premium Wedding Services",
    description:
      "Transform your wedding into a cinematic masterpiece. Professional photography and videography services that tell your unique love story.",
    backgroundImage: "/placeholder.svg?height=1080&width=1920",
  })

  const [contactSettings, setContactSettings] = useState({
    phone: "+92 300 1234567",
    email: "info@capturemoments.pk",
    whatsapp: "+92 300 1234567",
    address: "Lahore, Punjab, Pakistan",
    instagram: "https://instagram.com/capturemoments",
    facebook: "https://facebook.com/capturemoments",
    youtube: "https://youtube.com/capturemoments",
  })

  const [packages, setPackages] = useState({
    silver: {
      price: "80,000",
      features: [
        "3 Days — 1 Videographer (4K Mirrorless Camera)",
        "3 Days — 1 Photographer (Portrait or Journalistic Style)",
        "1 Day Drone Coverage",
        "1 Photo Album",
        "Full Event Coverage",
      ],
    },
    gold: {
      price: "140,000",
      features: [
        "3 Days — 1 Videographer (4K Mirrorless Camera)",
        "3 Days — 2 Photographers (Portrait or Cinematic)",
        "3 Days Drone Coverage",
        "4 Photo Albums",
        "Teaser + Cinematic Shots",
        "Full Album + Cinematic Film",
        "Full-Day Coverage",
      ],
    },
    premium: {
      price: "240,000",
      features: [
        "3 Days — 2 Videographers (4K Mirrorless Cameras)",
        "3 Days — 1 Dedicated TikTok/Reels Videographer",
        "3 Days — 3 Photographers (Portrait, Cinematic & General)",
        "3 Days Drone Coverage",
        "6 Photo Albums",
        "Outdoor Couple Shoot + Song",
        "Full Event Coverage",
        "Drone + Teaser + Cinematic Shots",
        "Full Album + Cinematic Film",
      ],
    },
  })

  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
  }

  const addFeature = (pkg: "silver" | "gold" | "premium") => {
    setPackages({
      ...packages,
      [pkg]: {
        ...packages[pkg],
        features: [...packages[pkg].features, ""],
      },
    })
  }

  const removeFeature = (pkg: "silver" | "gold" | "premium", index: number) => {
    setPackages({
      ...packages,
      [pkg]: {
        ...packages[pkg],
        features: packages[pkg].features.filter((_, i) => i !== index),
      },
    })
  }

  const updateFeature = (pkg: "silver" | "gold" | "premium", index: number, value: string) => {
    const newFeatures = [...packages[pkg].features]
    newFeatures[index] = value
    setPackages({
      ...packages,
      [pkg]: {
        ...packages[pkg],
        features: newFeatures,
      },
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground mt-1">Manage your website content and configuration</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90" onClick={handleSave} disabled={isSaving}>
          <Save className="h-4 w-4 mr-2" />
          {isSaving ? "Saving..." : "Save Changes"}
        </Button>
      </div>

      <Tabs defaultValue="hero" className="space-y-6">
        <TabsList className="bg-secondary">
          <TabsTrigger value="hero" className="flex items-center gap-2">
            <ImageIcon className="h-4 w-4" />
            Hero Section
          </TabsTrigger>
          <TabsTrigger value="packages" className="flex items-center gap-2">
            <Package className="h-4 w-4" />
            Packages
          </TabsTrigger>
          <TabsTrigger value="contact" className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            Contact Info
          </TabsTrigger>
        </TabsList>

        {/* Hero Section Settings */}
        <TabsContent value="hero">
          <Card>
            <CardHeader>
              <CardTitle>Hero Section</CardTitle>
              <CardDescription>Customize the main hero section on your homepage</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Subtitle</Label>
                <Input
                  value={heroSettings.subtitle}
                  onChange={(e) => setHeroSettings({ ...heroSettings, subtitle: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Main Title</Label>
                <Input
                  value={heroSettings.title}
                  onChange={(e) => setHeroSettings({ ...heroSettings, title: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  value={heroSettings.description}
                  onChange={(e) => setHeroSettings({ ...heroSettings, description: e.target.value })}
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label>Background Image</Label>
                <div className="flex gap-4">
                  <Input
                    value={heroSettings.backgroundImage}
                    onChange={(e) => setHeroSettings({ ...heroSettings, backgroundImage: e.target.value })}
                    className="flex-1"
                  />
                  <Button variant="outline">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload
                  </Button>
                </div>
                <div className="mt-4 aspect-video max-w-md rounded-lg overflow-hidden">
                  <img
                    src={heroSettings.backgroundImage || "/placeholder.svg"}
                    alt="Hero Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Packages Settings */}
        <TabsContent value="packages">
          <div className="grid gap-6">
            {(["silver", "gold", "premium"] as const).map((pkg) => (
              <Card key={pkg}>
                <CardHeader>
                  <CardTitle className="capitalize">{pkg} Package</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Price (PKR)</Label>
                    <Input
                      value={packages[pkg].price}
                      onChange={(e) =>
                        setPackages({
                          ...packages,
                          [pkg]: { ...packages[pkg], price: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Features</Label>
                    <div className="space-y-2">
                      {packages[pkg].features.map((feature, index) => (
                        <div key={index} className="flex gap-2">
                          <Input
                            value={feature}
                            onChange={(e) => updateFeature(pkg, index, e.target.value)}
                            placeholder="Enter feature..."
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-destructive hover:text-destructive"
                            onClick={() => removeFeature(pkg, index)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" onClick={() => addFeature(pkg)}>
                      <Plus className="h-4 w-4 mr-2" />
                      Add Feature
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Contact Settings */}
        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Update your business contact details and social links</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Phone Number</Label>
                  <Input
                    value={contactSettings.phone}
                    onChange={(e) => setContactSettings({ ...contactSettings, phone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>WhatsApp Number</Label>
                  <Input
                    value={contactSettings.whatsapp}
                    onChange={(e) => setContactSettings({ ...contactSettings, whatsapp: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Email Address</Label>
                  <Input
                    type="email"
                    value={contactSettings.email}
                    onChange={(e) => setContactSettings({ ...contactSettings, email: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Address</Label>
                  <Input
                    value={contactSettings.address}
                    onChange={(e) => setContactSettings({ ...contactSettings, address: e.target.value })}
                  />
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h4 className="font-medium mb-4">Social Media Links</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label>Instagram</Label>
                    <Input
                      value={contactSettings.instagram}
                      onChange={(e) => setContactSettings({ ...contactSettings, instagram: e.target.value })}
                      placeholder="https://instagram.com/..."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Facebook</Label>
                    <Input
                      value={contactSettings.facebook}
                      onChange={(e) => setContactSettings({ ...contactSettings, facebook: e.target.value })}
                      placeholder="https://facebook.com/..."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>YouTube</Label>
                    <Input
                      value={contactSettings.youtube}
                      onChange={(e) => setContactSettings({ ...contactSettings, youtube: e.target.value })}
                      placeholder="https://youtube.com/..."
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
