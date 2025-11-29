"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Phone, Mail, MessageCircle, Clock, CheckCircle2, Send } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "How far in advance should I book your services?",
    answer:
      "We recommend booking at least 2-3 months in advance, especially during peak wedding season (November to February). Popular dates tend to fill up quickly, so early booking ensures availability and gives us time to understand your vision.",
  },
  {
    question: "What areas do you cover for wedding photography?",
    answer:
      "We cover all major cities in Pakistan including Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, and surrounding areas. Travel charges may apply for destinations outside our base city.",
  },
  {
    question: "How long does it take to receive the final photos and videos?",
    answer:
      "For photography, edited photos are delivered within 2-3 weeks. Cinematic videos and full films typically take 4-6 weeks depending on the complexity and length of coverage.",
  },
  {
    question: "Can I customize my package?",
    answer:
      "Our packages are flexible and can be customized to meet your specific needs. Contact us to discuss your requirements, and we'll create a personalized package for you.",
  },
  {
    question: "What is your payment policy?",
    answer:
      "We require a 50% advance payment to confirm your booking. The remaining 50% is due before the event or upon delivery of the final products. We accept bank transfers, JazzCash, and EasyPaisa.",
  },
  {
    question: "Do you provide raw/unedited photos and footage?",
    answer:
      "Raw files are not included in our standard packages as they don't represent our final quality. However, we can provide them upon special request for an additional fee.",
  },
  {
    question: "What happens if there's bad weather on the event day?",
    answer:
      "We're experienced in handling various weather conditions. For outdoor shoots, we always have backup plans and indoor alternatives. Our team comes prepared with weather-appropriate equipment.",
  },
  {
    question: "Can you provide a photographer/videographer for destination weddings?",
    answer:
      "Yes! We love destination weddings. Travel and accommodation costs are quoted separately based on the location. Contact us with your destination details for a custom quote.",
  },
]

export default function SupportPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">Get In Touch</span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-4">Support & Contact</h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Have questions? We're here to help. Reach out to us through any of the channels below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Phone,
                title: "Call Us",
                description: "Available Mon-Sat, 9am-8pm",
                action: "+92 300 1234567",
                href: "tel:+923001234567",
              },
              {
                icon: MessageCircle,
                title: "WhatsApp",
                description: "Quick responses within minutes",
                action: "Chat Now",
                href: "https://wa.me/923001234567",
              },
              {
                icon: Mail,
                title: "Email Us",
                description: "We'll respond within 24 hours",
                action: "info@capturemoments.pk",
                href: "mailto:info@capturemoments.pk",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-colors group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                <span className="text-primary font-medium">{item.action}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & FAQ */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-card border border-border rounded-2xl p-8 text-center"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                      <CheckCircle2 className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-4">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)} className="rounded-full">
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="bg-card border border-border rounded-2xl p-8 space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name *</Label>
                        <Input id="name" name="name" placeholder="Enter your name" required className="h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          required
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="+92 300 1234567" className="h-12" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input id="subject" name="subject" placeholder="What's this about?" required className="h-12" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more about your inquiry..."
                        required
                        rows={5}
                        className="resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>

              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
                  >
                    <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-4">Business Hours</h2>
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-muted-foreground">Monday - Friday</div>
                <div className="font-medium text-foreground">9:00 AM - 8:00 PM</div>
                <div className="text-muted-foreground">Saturday</div>
                <div className="font-medium text-foreground">10:00 AM - 6:00 PM</div>
                <div className="text-muted-foreground">Sunday</div>
                <div className="font-medium text-foreground">By Appointment</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
