"use client"

import { FileText, Calendar, AirVentIcon as Vacuum, CreditCard } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function CleaningProcess() {
  const steps = [
    {
      icon: FileText,
      title: "Complete Form",
      description: "Fill out our simple quote form with your cleaning needs",
    },
    {
      icon: Calendar,
      title: "Schedule It",
      description: "Choose your preferred date and time that works for you",
    },
    {
      icon: Vacuum,
      title: "Professional Cleaning",
      description: "Our expert team delivers exceptional cleaning results",
    },
    {
      icon: CreditCard,
      title: "Easy Payment",
      description: "Secure payment options for your convenience",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-4">Stunning LCS Cleaning Process</h2>
        <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto text-lg">
          Our streamlined 4-step process makes professional cleaning simple and stress-free
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div 
                  key={index} 
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.4,
                    ease: "easeOut"
                  }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.4 + 0.2,
                      ease: "easeOut"
                    }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <motion.span 
                        className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center text-sm font-bold"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.4, 
                          delay: index * 0.4 + 0.3,
                          type: "spring",
                          stiffness: 300
                        }}
                      >
                        {index + 1}
                      </motion.span>
                      <h3 className="text-xl font-semibold text-slate-800">{step.title}</h3>
                    </div>
                    <p className="text-slate-600 ml-11">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Staff Image and Sales Text */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-6">
              <Image
                src="/smiling-cleaner.png"
                alt="Professional cleaning staff member"
                className="w-80 h-96 object-cover rounded-2xl border-4 border-white shadow-2xl"
                width={300}
                height={300}
              />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <Vacuum className="w-10 h-10 text-white" />
              </div>
            </div>

            <div className="max-w-md mx-auto lg:mx-0">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Meet Our Expert Team</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our professionally trained staff brings years of experience and genuine care to every cleaning job. Each
                team member is thoroughly vetted, insured, and committed to delivering the exceptional results that have
                made Stunning LCS the trusted choice for discerning clients.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border-l-4 border-cyan-400">
                <p className="text-slate-700 font-medium italic">
                  "We don't just clean - we transform your space into a spotless sanctuary you'll love coming home to."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}