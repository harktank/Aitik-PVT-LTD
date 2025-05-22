"use client"

import type React from "react" // 'type React' is fine, or just 'React'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, Briefcase, Users, Code, BarChart3, Database, Server } from "lucide-react"
import PageTransition from "@/components/page-transition" // Import statement
import AnimatedCard from "@/components/animated-card"
import { motion } from "framer-motion"

export default function GetInTouch() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true)
    }, 1000)
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <PageTransition> {/* Usage of the component */}
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
              Let's Work Together
            </motion.h1>
            <motion.p
              className="text-xl max-w-3xl mx-auto opacity-90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Partner with AITIK Software to bring your business ideas to life
            </motion.p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a5e] mb-4">How We Can Help</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive range of services designed to meet your business needs.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: <Briefcase className="h-10 w-10 text-red-600" />,
                  title: "Business Consulting",
                  description:
                    "Strategic technology consulting to help you achieve your business goals and digital transformation.",
                },
                {
                  icon: <Code className="h-10 w-10 text-red-600" />,
                  title: "Custom Development",
                  description:
                    "Tailored software solutions designed specifically for your unique business requirements.",
                },
                {
                  icon: <Users className="h-10 w-10 text-red-600" />,
                  title: "Team Augmentation",
                  description: "Extend your team with our skilled professionals to accelerate your project delivery.",
                },
                {
                  icon: <Database className="h-10 w-10 text-red-600" />,
                  title: "Data Solutions",
                  description:
                    "Comprehensive data management, migration, and analytics services for informed decision-making.",
                },
                {
                  icon: <Server className="h-10 w-10 text-red-600" />,
                  title: "Cloud Services",
                  description: "Secure, scalable cloud solutions to modernize your infrastructure and reduce costs.",
                },
                {
                  icon: <BarChart3 className="h-10 w-10 text-red-600" />,
                  title: "Digital Transformation",
                  description:
                    "End-to-end digital transformation services to keep your business competitive in the digital age.",
                },
              ].map((service, index) => (
                <AnimatedCard
                  key={index}
                  delay={index} // Assuming AnimatedCard handles this prop
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#0a0a5e] mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </AnimatedCard>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Project Inquiry Form */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-[#0a0a5e] mb-6">Start Your Project</h2>
                <p className="text-gray-600 mb-8">
                  Ready to transform your business with innovative technology solutions? Fill out the form to tell us
                  about your project, and our team will get back to you within 24 hours to discuss how we can help.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-red-600 mt-0.5" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-semibold text-[#0a0a5e]">Free Consultation</h3>
                      <p className="text-gray-600 mt-1">
                        Schedule a free consultation with our experts to discuss your project requirements.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-red-600 mt-0.5" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-semibold text-[#0a0a5e]">Detailed Proposal</h3>
                      <p className="text-gray-600 mt-1">
                        Receive a comprehensive proposal outlining scope, timeline, and cost estimates.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-red-600 mt-0.5" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-semibold text-[#0a0a5e]">Flexible Engagement Models</h3>
                      <p className="text-gray-600 mt-1">
                        Choose from various engagement models including fixed price, time & material, or dedicated team.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-red-600 mt-0.5" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-semibold text-[#0a0a5e]">Transparent Communication</h3>
                      <p className="text-gray-600 mt-1">
                        Enjoy clear, regular updates throughout your project with our transparent communication process.
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
                        <h3 className="text-2xl font-bold text-[#0a0a5e] mb-2">Request Received!</h3>
                        <p className="text-gray-600 mb-6">
                          Thank you for your interest in working with AITIK Software. Our team will review your project
                          details and contact you within 24 hours.
                        </p>
                        <Button
                          onClick={() => setFormSubmitted(false)}
                          variant="outline"
                          className="border-[#0a0a5e] text-[#0a0a5e] hover:bg-[#0a0a5e] hover:text-white"
                        >
                          Submit Another Request
                        </Button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" placeholder="Enter your first name" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" placeholder="Enter your last name" required />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Enter your email" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input id="phone" placeholder="Enter your phone number" required />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input id="company" placeholder="Enter your company name" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="serviceType">Service Type</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select service type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="webDev">Web Development</SelectItem>
                              <SelectItem value="mobileDev">Mobile Development</SelectItem>
                              <SelectItem value="softwareDev">Software Development</SelectItem>
                              <SelectItem value="dataAnalytics">Data Analytics</SelectItem>
                              <SelectItem value="cloudServices">Cloud Services</SelectItem>
                              <SelectItem value="consulting">IT Consulting</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="budget">Estimated Budget</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="less5k">Less than $5,000</SelectItem>
                              <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                              <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                              <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                              <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                              <SelectItem value="more100k">More than $100,000</SelectItem>
                              <SelectItem value="notSure">Not sure yet</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="projectDetails">Project Details</Label>
                          <Textarea
                            id="projectDetails"
                            placeholder="Please describe your project requirements, goals, and timeline"
                            className="min-h-[150px]"
                            required
                          />
                        </div>

                        <div className="pt-4">
                          <Button type="submit" className="bg-red-600 hover:bg-red-700 w-full">
                            Submit Request
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

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a5e] mb-4">Our Engagement Process</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We follow a structured approach to ensure successful project delivery and client satisfaction.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  number: "01",
                  title: "Discovery",
                  description:
                    "We understand your business needs, goals, and project requirements through detailed discussions.",
                },
                {
                  number: "02",
                  title: "Planning",
                  description:
                    "We create a comprehensive project plan including scope, timeline, resources, and deliverables.",
                },
                {
                  number: "03",
                  title: "Execution",
                  description:
                    "Our team develops your solution using agile methodologies with regular updates and feedback.",
                },
                {
                  number: "04",
                  title: "Delivery",
                  description:
                    "We deliver the final solution, provide training, and ensure a smooth transition to operations.",
                },
              ].map((step, index) => (
                <AnimatedCard
                  key={index}
                  delay={index} // Assuming AnimatedCard handles this prop
                  className="relative p-8 rounded-xl bg-white border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xl">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-[#0a0a5e] mb-3 mt-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </AnimatedCard>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a5e] mb-4">What Our Clients Say</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Hear from businesses that have successfully partnered with AITIK Software.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  name: "John Smith",
                  company: "TechCorp Inc.",
                  quote:
                    "AITIK Software delivered an exceptional e-commerce platform that has significantly increased our online sales. Their team was professional, responsive, and delivered on time and within budget.",
                },
                {
                  name: "Sarah Johnson",
                  company: "HealthPlus",
                  quote:
                    "The healthcare management system developed by AITIK has transformed our patient care processes. The team's understanding of our industry needs was impressive, and they provided innovative solutions to our challenges.",
                },
                {
                  name: "Michael Chen",
                  company: "Global Logistics",
                  quote:
                    "Working with AITIK Software on our logistics tracking app was a great experience. They understood our complex requirements and delivered a solution that has improved our operational efficiency by 40%.",
                },
              ].map((testimonial, index) => (
                <AnimatedCard
                  key={index}
                  delay={index} // Assuming AnimatedCard handles this prop
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  {/* Make sure AnimatedCard children structure is correct */}
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold text-[#0a0a5e]">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </AnimatedCard>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}