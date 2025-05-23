"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react"
import PageTransition from "@/components/page-transition"
import AnimatedCard from "@/components/animated-card"
import { motion } from "framer-motion"

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Google Maps Embed URL - generated from the "Share" or "Embed a map" option on Google Maps
  // Make sure to get the "Embed a map" HTML and extract the src URL.
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.791399995178!2d73.07621497506817!3d19.03648488216574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c20d3e4bdf33%3A0x6233e94401a34a5b!2sJuhi%20Niharika%20Mirage%20Kharghar!5e0!3m2!1sen!2sin!4v1716387000000!5m2!1sen!2sin" // Replace with your actual generated embed URL if different

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true)
    }, 1000)
  }

  return (
    <PageTransition>
      <main className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#0a0a5e] to-[#1a1a7a] text-white py-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="animate-float absolute -right-20 top-20 w-64 h-64 bg-red-600 rounded-3xl opacity-20 rotate-12"></div>
            <div className="animate-float-delay absolute -left-20 bottom-20 w-80 h-80 bg-red-600 rounded-full opacity-10"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contact Us
            </motion.h1>
            <motion.p
              className="text-xl max-w-3xl mx-auto opacity-90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Get in touch with our team for any inquiries or support
            </motion.p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-[#0a0a5e] mb-6">Get In Touch</h2>
                <p className="text-gray-600 mb-8">
                  Have questions about our services or want to discuss a project? Our team is here to help. Fill out the
                  form and we'll get back to you as soon as possible.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-red-100 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-red-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-[#0a0a5e]">Our Location</h3>
                      <p className="text-gray-600 mt-1">
                      Branch 1 - Shop no. F 38, Destination centre 1, Nanded city, Sinhgad road, Pune 411041
                        <br />
                      Branch 2 - Juhi Niharika Mirage, 9th Floor, office no. 911,  Sector -10, Kharghar- 410210
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-red-100 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-red-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-[#0a0a5e]">Email Us</h3>
                      <p className="text-gray-600 mt-1">
                        info@aitiksoftware.com
                        <br />
                        support@aitiksoftware.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-red-100 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-red-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-[#0a0a5e]">Call Us</h3>
                      <p className="text-gray-600 mt-1">
                        +91 96534 18049
                        <br />
                        +91 98606 07791
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-red-100 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-red-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-[#0a0a5e]">Business Hours</h3>
                      <p className="text-gray-600 mt-1">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 2:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card>
                  <CardContent className="pt-6">
                    {formSubmitted ? (
                      <motion.div
                        className="text-center py-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                          <CheckCircle2 className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#0a0a5e] mb-2">Message Sent!</h3>
                        <p className="text-gray-600 mb-6">
                          Thank you for contacting AITIK Software. We'll get back to you as soon as possible.
                        </p>
                        <Button
                          onClick={() => setFormSubmitted(false)}
                          variant="outline"
                          className="border-[#0a0a5e] text-[#0a0a5e] hover:bg-[#0a0a5e] hover:text-white"
                        >
                          Send Another Message
                        </Button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" placeholder="Enter your full name" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="Enter your email" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone (Optional)</Label>
                          <Input id="phone" placeholder="Enter your phone number" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="support">Technical Support</SelectItem>
                              <SelectItem value="sales">Sales</SelectItem>
                              <SelectItem value="partnership">Partnership</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            placeholder="How can we help you?"
                            className="min-h-[150px]"
                            required
                          />
                        </div>

                        <div className="pt-4">
                          <Button type="submit" className="bg-red-600 hover:bg-red-700 w-full">
                            Send Message
                          </Button>
                        </div>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section -- MODIFIED HERE */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a5e] mb-4">Our Location</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Visit our office in Kharghar, Navi Mumbai. We're conveniently located in Sector 10.
              </p>
            </motion.div>

            <motion.div
              className="rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* aspect-video maintains a 16:9 aspect ratio for the map container */}
              <div className="aspect-video w-full">
                <iframe
                  src={googleMapsEmbedUrl}
                  width="100%"
                  height="100%" // Make iframe fill its container
                  style={{ border: 0 }}
                  allowFullScreen={false} // Can be true if you want users to fullscreen map
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AITIK Software Location Map"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a5e] mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about our services and processes.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    question: "What services does AITIK Software provide?",
                    answer:
                      "AITIK Software provides a wide range of IT services including web development, mobile app development, software development, data analytics, cloud services, cybersecurity, and IT consulting.",
                  },
                  {
                    question: "How can I request a quote for my project?",
                    answer:
                      "You can request a quote by filling out the contact form on this page, sending an email to info@aitiksoftware.com, or calling our sales team directly. We'll get back to you within 24 hours to discuss your project requirements.",
                  },
                  {
                    question: "What is your typical project timeline?",
                    answer:
                      "Project timelines vary depending on the scope and complexity of the project. After our initial consultation, we'll provide you with a detailed project plan including milestones and expected delivery dates.",
                  },
                  {
                    question: "Do you provide ongoing support after project completion?",
                    answer:
                      "Yes, we offer various support and maintenance packages to ensure your solution continues to run smoothly after launch. Our support team is available to address any issues or questions you may have.",
                  },
                  {
                    question: "Can you work with clients outside of India?",
                    answer:
                      "We work with clients globally and have experience collaborating with businesses across different time zones. We use various communication tools to ensure smooth project coordination regardless of location.",
                  },
                ].map((faq, index) => (
                  <AnimatedCard
                    key={index}
                    delay={index}
                    className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
                  >
                    <h3 className="text-lg font-semibold text-[#0a0a5e] mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#0a0a5e] to-[#1a1a7a] text-white relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="animate-float absolute right-10 top-10 w-40 h-40 bg-red-600 rounded-full opacity-20"></div>
            <div className="animate-float-delay absolute left-10 bottom-10 w-60 h-60 bg-red-600 rounded-3xl opacity-10 rotate-12"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-xl opacity-90 mb-8">
                Contact us today to discuss how we can help transform your business with our technology solutions.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  Schedule a Consultation
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}