"use client"

import { Sparkles, Zap, Clock, Award } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function OurCleaningServices() {
  const features = [
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "Industry-leading standards with attention to every detail"
    },
    {
      icon: Zap,
      title: "Urgent Cleaning",
      description: "Emergency cleaning services available when you need them most"
    },
    {
      icon: Clock,
      title: "Always On Time",
      description: "Reliable scheduling that respects your valuable time"
    },
    {
      icon: Award,
      title: "Satisfaction Guaranteed",
      description: "100% satisfaction or we'll make it right"
    }
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
  <motion.div
  className="absolute inset-0"
  initial={{ scale: 1.1, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
>
  <Image
    src="/cleaning-supplies.png"
    alt="Cleaning Supplies"
    fill // makes it cover parent
    style={{ objectFit: "cover", objectPosition: "center" }}
    priority // optional: if you want it to load immediately
  />
</motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/50 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="max-w-3xl">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Cleaning Services
          </motion.h2>
          
          <motion.p 
            className="text-xl text-blue-100 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the difference with Stunning LCS - where professional excellence meets unmatched reliability. Our
            comprehensive cleaning solutions are designed to exceed your expectations every single time.
          </motion.p>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.8 + index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    x: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <IconComponent className="w-5 h-5 text-blue-900" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-blue-100 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.button 
            className="bg-gradient-to-r from-cyan-400 to-cyan-500 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-300 hover:to-cyan-400 transition-all duration-300 shadow-lg hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ 
              y: -3,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            whileTap={{ 
              scale: 0.98,
              transition: { duration: 0.1 }
            }}
          >
            Get Your Free Quote Today
          </motion.button>
        </div>
      </div>
    </section>
  )
}