"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight, Code, Globe, BarChart3, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageTransition from "@/components/page-transition"
import AnimatedCard from "@/components/animated-card"
import { motion } from "framer-motion"

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }

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
        <section className="relative bg-gradient-to-r from-[#0a0a5e] to-[#1a1a7a] text-white py-20 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="animate-float absolute -right-20 top-20 w-64 h-64 bg-red-600 rounded-3xl opacity-20 rotate-12"></div>
            <div className="animate-float-delay absolute -left-20 bottom-20 w-80 h-80 bg-red-600 rounded-full opacity-10"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <motion.div
                className="md:w-1/2 space-y-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Transforming Businesses with Next-Gen Solutions
                </h1>
                <p className="text-lg md:text-xl opacity-90">
                  AITIK Software partners with clients worldwide to deliver innovative technology solutions that drive
                  growth and efficiency.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/contact" passHref legacyBehavior>
    <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
      <a>
        Get Started <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </Button>
  </Link>

  <Link href="/services" passHref legacyBehavior>
    <Button asChild size="lg" className="text-white border-white hover:bg-white/10">
      <a>
        Our Services
      </a>
    </Button>
  </Link>
                </div>
              </motion.div>
              <motion.div
                className="md:w-1/2 flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* === MODIFIED LOGO CONTAINER FOR TOUCHABLE ANIMATION START === */}
                <motion.div
                  className="relative w-92 h-92 animate-pulse-slow bg-white rounded-xl p-6 shadow-lg flex items-center justify-center cursor-pointer" // Added cursor-pointer
                  whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }} // Scale up and enhance shadow on hover
                  whileTap={{ scale: 0.95 }} // Scale down on tap/click
                  transition={{ type: "spring", stiffness: 300, damping: 15 }} // Springy transition
                >
                  <Image
                    src="/logo.png"
                    alt="AITIK Software Logo"
                    width={400}
                    height={400}
                    className="object-contain"
                  />
                </motion.div>
                {/* === MODIFIED LOGO CONTAINER FOR TOUCHABLE ANIMATION END === */}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a5e] mb-4">Our Services</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We provide end-to-end solutions across various industry sectors to help businesses thrive in the digital
                era.
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
                  icon: <Globe className="h-10 w-10 text-red-600" />,
                  title: "Web Development",
                  description: "Custom web applications and responsive websites tailored to your business needs.",
                },
                {
                  icon: <Smartphone className="h-10 w-10 text-red-600" />,
                  title: "Mobile Solutions",
                  description: "Native and cross-platform mobile applications for iOS and Android.",
                },
                {
                  icon: <Code className="h-10 w-10 text-red-600" />,
                  title: "Software Development",
                  description: "Scalable, secure, and efficient software solutions for complex business problems.",
                },
              ].map((service, index) => (
                <AnimatedCard
                  key={index}
                  delay={index}
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-[#0a0a5e] mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-red-600 font-medium group-hover:text-red-700"
                  >
                    Learn more <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </AnimatedCard>
              ))}
            </motion.div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button asChild className="bg-[#0a0a5e] hover:bg-[#1a1a7a]">
                <Link href="/services">View All Services</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-full h-full border-2 border-red-600 rounded-xl"></div>
                  <div className="relative bg-white p-6 rounded-xl shadow-lg">
                    <h2 className="text-3xl font-bold text-[#0a0a5e] mb-4">About AITIK Software</h2>
                    <p className="text-gray-600 mb-4">
                      Incepted in 2022 and headquartered in Mumbai, India, AITIK Software Pvt. Ltd. is committed to
                      delivering cost-effective, high-quality, and result-oriented IT solutions to global businesses.
                    </p>
                    <p className="text-gray-600 mb-6">
                      We have spearheaded ourselves in providing end-to-end solutions and services in different industry
                      sections like Communication, Retail & Ecommerce, Media & Advertising, Healthcare & Life Science,
                      and Transportation.
                    </p>
                    <Button asChild className="bg-[#0a0a5e] hover:bg-[#1a1a7a]">
                      <Link href="/about">Learn More About Us</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "Projects Completed", value: "200+" },
                    { title: "Happy Clients", value: "50+" },
                    { title: "Team Members", value: "30+" },
                    { title: "Years Experience", value: "2+" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
                    >
                      <div className="text-3xl font-bold text-red-600 mb-2">{stat.value}</div>
                      <div className="text-[#0a0a5e] font-medium">{stat.title}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl opacity-90 mb-8">
                Let's work together to create innovative solutions that drive your business forward.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  Contact Us Today
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}