"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, Briefcase, Users, Clock, MapPin } from "lucide-react"
import PageTransition from "@/components/page-transition"
import AnimatedCard from "@/components/animated-card"
import { motion } from "framer-motion"

export default function Careers() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const applicationFormRef = useRef<HTMLDivElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true)
    }, 1000)
  }

  const scrollToApplicationForm = () => {
    applicationFormRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const jobOpenings = [
    {
      title: "Senior Full Stack Developer",
      type: "Full-time",
      location: "Mumbai, India (Hybrid)",
      department: "Engineering",
      description:
        "We're looking for an experienced Full Stack Developer to join our growing team. You'll be responsible for developing and maintaining web applications using modern technologies.",
      requirements: [
        "5+ years of experience in web development",
        "Proficiency in React, Node.js, and TypeScript",
        "Experience with database design and management",
        "Strong problem-solving skills and attention to detail",
      ],
    },
    {
      title: "UX/UI Designer",
      type: "Full-time",
      location: "Remote",
      department: "Design",
      description:
        "Join our design team to create intuitive and engaging user experiences for our clients' digital products. You'll collaborate with developers and stakeholders to bring designs to life.",
      requirements: [
        "3+ years of experience in UX/UI design",
        "Proficiency in Figma, Adobe XD, or similar tools",
        "Strong portfolio demonstrating user-centered design",
        "Experience with design systems and component libraries",
      ],
    },
    {
      title: "DevOps Engineer",
      type: "Full-time",
      location: "Mumbai, India",
      department: "Operations",
      description:
        "Help us build and maintain our cloud infrastructure and deployment pipelines. You'll work closely with the development team to ensure smooth operations.",
      requirements: [
        "3+ years of experience in DevOps or similar role",
        "Experience with AWS, Azure, or GCP",
        "Knowledge of containerization and orchestration tools",
        "Familiarity with CI/CD pipelines and automation",
      ],
    },
    {
      title: "Project Manager",
      type: "Full-time",
      location: "Mumbai, India (Hybrid)",
      department: "Management",
      description:
        "Lead project teams to deliver high-quality solutions on time and within budget. You'll be responsible for planning, execution, and client communication.",
      requirements: [
        "4+ years of experience in project management",
        "PMP certification or equivalent",
        "Strong communication and leadership skills",
        "Experience in software development lifecycle",
      ],
    },
  ]

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
              Join Our Team
            </motion.h1>
            <motion.p
              className="text-xl max-w-3xl mx-auto opacity-90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover exciting career opportunities at AITIK Software
            </motion.p>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a5e] mb-4">Why Join AITIK Software?</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We offer a dynamic work environment where innovation thrives and your career can grow.
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
                  title: "Innovative Projects",
                  description: "Work on cutting-edge technologies and challenging projects across various industries.",
                  icon: <Briefcase className="h-10 w-10 text-red-600" />,
                },
                {
                  title: "Growth Opportunities",
                  description: "Continuous learning and career advancement paths tailored to your goals and interests.",
                  icon: <Users className="h-10 w-10 text-red-600" />,
                },
                {
                  title: "Work-Life Balance",
                  description: "Flexible work arrangements and policies that respect your personal time and wellbeing.",
                  icon: <Clock className="h-10 w-10 text-red-600" />,
                },
                {
                  title: "Collaborative Culture",
                  description: "A supportive team environment where ideas are valued and collaboration is encouraged.",
                  icon: <Users className="h-10 w-10 text-red-600" />,
                },
                {
                  title: "Competitive Benefits",
                  description: "Comprehensive benefits package including health insurance, retirement plans, and more.",
                  icon: <CheckCircle2 className="h-10 w-10 text-red-600" />,
                },
                {
                  title: "Modern Workspace",
                  description: "State-of-the-art facilities designed to inspire creativity and productivity.",
                  icon: <MapPin className="h-10 w-10 text-red-600" />,
                },
              ].map((benefit, index) => (
                <AnimatedCard
                  key={index}
                  delay={index}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#0a0a5e] mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </AnimatedCard>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Current Openings */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a5e] mb-4">Current Openings</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Explore our current job opportunities and find the perfect role for your skills and interests.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {jobOpenings.map((job, index) => (
                <AnimatedCard
                  key={index}
                  delay={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-2xl text-[#0a0a5e]">{job.title}</CardTitle>
                          <CardDescription className="text-red-600 font-medium">{job.department}</CardDescription>
                        </div>
                        <div className="bg-blue-100 text-[#0a0a5e] px-3 py-1 rounded-full text-sm font-medium">
                          {job.type}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-gray-600 mb-4">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{job.location}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      <div className="mt-4">
                        <h4 className="font-semibold text-[#0a0a5e] mb-2">Requirements:</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6">
                        <Button className="bg-[#0a0a5e] hover:bg-[#1a1a7a] w-full" onClick={scrollToApplicationForm}>
                          Apply Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20 bg-white" ref={applicationFormRef} id="application-form">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a5e] mb-4">Apply Now</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Fill out the form below to apply for a position at AITIK Software. We'll review your application and get
                back to you soon.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
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
                      <h3 className="text-2xl font-bold text-[#0a0a5e] mb-2">Application Submitted!</h3>
                      <p className="text-gray-600 mb-6">
                        Thank you for your interest in joining AITIK Software. We'll review your application and contact
                        you soon.
                      </p>
                      <Button
                        onClick={() => setFormSubmitted(false)}
                        variant="outline"
                        className="border-[#0a0a5e] text-[#0a0a5e] hover:bg-[#0a0a5e] hover:text-white"
                      >
                        Submit Another Application
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
                        <Label htmlFor="position">Position</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a position" />
                          </SelectTrigger>
                          <SelectContent>
                            {jobOpenings.map((job, index) => (
                              <SelectItem key={index} value={job.title}>
                                {job.title}
                              </SelectItem>
                            ))}
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="experience">Years of Experience</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select years of experience" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-1">0-1 years</SelectItem>
                            <SelectItem value="1-3">1-3 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="5-10">5-10 years</SelectItem>
                            <SelectItem value="10+">10+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="resume">Resume/CV</Label>
                        <Input id="resume" type="file" className="cursor-pointer" />
                        <p className="text-sm text-gray-500">Upload your resume in PDF or DOCX format (max 5MB)</p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="coverLetter">Cover Letter</Label>
                        <Textarea
                          id="coverLetter"
                          placeholder="Tell us why you're interested in this position and what makes you a great fit"
                          className="min-h-[150px]"
                        />
                      </div>

                      <div className="pt-4">
                        <Button type="submit" className="bg-red-600 hover:bg-red-700 w-full">
                          Submit Application
                        </Button>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Not Finding the Right Role?</h2>
              <p className="text-xl opacity-90 mb-8">
                We're always looking for talented individuals to join our team. Send us your resume and we'll keep you
                in mind for future opportunities.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button size="lg" className="bg-red-600 hover:bg-red-700" onClick={scrollToApplicationForm}>
                  Send Your Resume
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
