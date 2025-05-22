"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Users, Target, Lightbulb, Award } from "lucide-react"
import PageTransition from "@/components/page-transition"
import AnimatedCard from "@/components/animated-card"
import { motion } from "framer-motion"

export default function About() {
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
              About Us
            </motion.h1>
            <motion.p
              className="text-xl max-w-3xl mx-auto opacity-90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Learn about our journey, mission, and the team behind AITIK Software Pvt. Ltd.
            </motion.p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/logo.png"
                  alt="AITIK Software Logo"
                  width={400}
                  height={400}
                  className="object-contain mx-auto"
                />
              </motion.div>
              <motion.div
                className="md:w-1/2 space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-[#0a0a5e]">Our Story</h2>
                <p className="text-gray-600">
                  Incepted in 2022, AITIK Software Pvt. Ltd. is headquartered in Mumbai, India. Our journey began with a
                  vision to transform businesses through innovative technology solutions.
                </p>
                <p className="text-gray-600">
                  We have quickly established ourselves as a trusted technology partner for businesses across various
                  industries. Our commitment to delivering cost-effective, high-quality, and result-oriented IT
                  solutions has helped us build strong relationships with clients worldwide.
                </p>
                <p className="text-gray-600">
                  Today, we continue to grow and evolve, staying at the forefront of technological advancements to
                  provide cutting-edge solutions that help our clients succeed in an increasingly digital world.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a5e] mb-4">Mission & Vision</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our guiding principles that drive everything we do at AITIK Software.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedCard className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <Target className="h-10 w-10 text-red-600 mr-4" />
                  <h3 className="text-2xl font-bold text-[#0a0a5e]">Our Mission</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  To transform businesses, improve performance, and help organizations respond more quickly and
                  intuitively to changing market dynamics through innovative technology solutions.
                </p>
                <ul className="space-y-3">
                  {[
                    "Deliver high-quality, cost-effective IT solutions",
                    "Build long-term partnerships with our clients",
                    "Stay at the forefront of technological innovation",
                    "Provide exceptional value through our services",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedCard>

              <AnimatedCard
                delay={2}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <Lightbulb className="h-10 w-10 text-red-600 mr-4" />
                  <h3 className="text-2xl font-bold text-[#0a0a5e]">Our Vision</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  To be a globally recognized technology company known for delivering innovative solutions that drive
                  digital transformation and create lasting value for our clients.
                </p>
                <ul className="space-y-3">
                  {[
                    "Become a leader in next-generation business solutions",
                    "Expand our global footprint across diverse industries",
                    "Foster a culture of innovation and excellence",
                    "Create positive impact through technology",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a5e] mb-4">Our Core Values</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                The principles that guide our work and relationships with clients, partners, and team members.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: <Award className="h-10 w-10 text-red-600" />,
                  title: "Excellence",
                  description: "We strive for excellence in everything we do, from code quality to client service.",
                },
                {
                  icon: <Users className="h-10 w-10 text-red-600" />,
                  title: "Collaboration",
                  description: "We believe in the power of teamwork and partnership to achieve exceptional results.",
                },
                {
                  icon: <Lightbulb className="h-10 w-10 text-red-600" />,
                  title: "Innovation",
                  description: "We embrace creativity and forward-thinking to solve complex challenges.",
                },
                {
                  icon: <Target className="h-10 w-10 text-red-600" />,
                  title: "Integrity",
                  description: "We conduct business with honesty, transparency, and ethical standards.",
                },
              ].map((value, index) => (
                <AnimatedCard
                  key={index}
                  delay={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center border border-gray-100"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0a0a5e] mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
              <p className="text-xl opacity-90 mb-8">
                We're always looking for talented individuals to join our growing team. Check out our current openings.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  View Career Opportunities
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
