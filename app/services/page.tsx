"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Code, Database, Globe, BarChart3, Smartphone, Server, Shield, Headphones } from "lucide-react"
import PageTransition from "@/components/page-transition"
import AnimatedCard from "@/components/animated-card"
import { motion } from "framer-motion"

export default function Services() {
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
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
              Our Services
            </motion.h1>
            <motion.p
              className="text-xl max-w-3xl mx-auto opacity-90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Comprehensive technology solutions tailored to your business needs
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a5e] mb-4">What We Offer</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                AITIK Software provides end-to-end solutions across various industry sectors to help businesses thrive
                in the digital era.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: <Globe className="h-12 w-12 text-red-600" />,
                  title: "Web Development",
                  description: "Custom web applications and responsive websites tailored to your business needs.",
                  features: [
                    "Responsive Design",
                    "E-commerce Solutions",
                    "Content Management Systems",
                    "Progressive Web Apps",
                  ],
                },
                {
                  icon: <Smartphone className="h-12 w-12 text-red-600" />,
                  title: "Mobile Solutions",
                  description: "Native and cross-platform mobile applications for iOS and Android.",
                  features: [
                    "iOS & Android Development",
                    "Cross-platform Solutions",
                    "Mobile UI/UX Design",
                    "App Maintenance & Support",
                  ],
                },
                {
                  icon: <Code className="h-12 w-12 text-red-600" />,
                  title: "Software Development",
                  description: "Scalable, secure, and efficient software solutions for complex business problems.",
                  features: [
                    "Custom Software Development",
                    "Legacy System Modernization",
                    "API Development & Integration",
                    "Quality Assurance & Testing",
                  ],
                },
                {
                  icon: <Database className="h-12 w-12 text-red-600" />,
                  title: "Database Solutions",
                  description: "Robust database design, development, and management services.",
                  features: [
                    "Database Design & Architecture",
                    "Data Migration & Integration",
                    "Performance Optimization",
                    "Database Administration",
                  ],
                },
                {
                  icon: <BarChart3 className="h-12 w-12 text-red-600" />,
                  title: "Data Analytics",
                  description: "Transform your data into actionable insights to drive business decisions.",
                  features: [
                    "Business Intelligence",
                    "Data Visualization",
                    "Predictive Analytics",
                    "Big Data Solutions",
                  ],
                },
                {
                  icon: <Server className="h-12 w-12 text-red-600" />,
                  title: "Cloud Services",
                  description: "Secure, scalable, and cost-effective cloud solutions for your business.",
                  features: [
                    "Cloud Migration",
                    "Infrastructure as a Service",
                    "Platform as a Service",
                    "Cloud Security & Compliance",
                  ],
                },
                {
                  icon: <Shield className="h-12 w-12 text-red-600" />,
                  title: "Cybersecurity",
                  description: "Protect your business with comprehensive security solutions.",
                  features: [
                    "Security Assessments",
                    "Vulnerability Management",
                    "Compliance & Governance",
                    "Security Monitoring",
                  ],
                },
                {
                  icon: <Headphones className="h-12 w-12 text-red-600" />,
                  title: "IT Consulting",
                  description: "Strategic technology consulting to help you achieve your business goals.",
                  features: [
                    "Technology Strategy",
                    "Digital Transformation",
                    "IT Roadmap Development",
                    "Technology Assessment",
                  ],
                },
              ].map((service, index) => (
                <AnimatedCard
                  key={index}
                  delay={index}
                  className="border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="mb-4">{service.icon}</div>
                      <CardTitle className="text-2xl text-[#0a0a5e]">{service.title}</CardTitle>
                      <CardDescription className="text-gray-600">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a5e] mb-4">Industries We Serve</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We have expertise across various industry sectors, delivering tailored solutions to meet specific needs.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { title: "Communication", description: "Unified communication solutions for seamless connectivity." },
                {
                  title: "Retail & E-commerce",
                  description: "Digital solutions to enhance customer experience and drive sales.",
                },
                {
                  title: "Media & Advertising",
                  description: "Creative technology solutions for engaging content delivery.",
                },
                {
                  title: "Healthcare & Life Science",
                  description: "Innovative solutions for improved patient care and research.",
                },
                {
                  title: "Transportation & Logistics",
                  description: "Smart solutions for efficient operations and tracking.",
                },
                {
                  title: "Finance & Banking",
                  description: "Secure and compliant solutions for financial institutions.",
                },
              ].map((industry, index) => (
                <AnimatedCard
                  key={index}
                  delay={index}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <h3 className="text-xl font-bold text-[#0a0a5e] mb-3">{industry.title}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </AnimatedCard>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a5e] mb-4">Our Process</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We follow a structured approach to deliver high-quality solutions that meet your business needs.
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
                { number: "01", title: "Discovery", description: "We understand your business needs and objectives." },
                { number: "02", title: "Planning", description: "We create a detailed roadmap and project plan." },
                {
                  number: "03",
                  title: "Development",
                  description: "We build your solution using the latest technologies.",
                },
                {
                  number: "04",
                  title: "Delivery",
                  description: "We deploy, test, and ensure everything works perfectly.",
                },
              ].map((step, index) => (
                <AnimatedCard
                  key={index}
                  delay={index}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl opacity-90 mb-8">
                Contact us today to discuss how we can help transform your business with our technology solutions.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  Request a Consultation
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
