"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Office Manager",
    image: "/professional-woman-smiling.png",
    rating: 5,
    text: "Stunning LCS transformed our office space completely. Their attention to detail is incredible and the team is always professional and reliable. I wouldn't trust anyone else with our cleaning needs.",
  },
  {
    name: "Michelle Singh",
    role: "Restaurant Owner",
    image: "/smiling-woman-chef.png",
    rating: 5,
    text: "Best cleaning service in the city! They cleaned our restaurant after renovation and it looked brand new. Same-day service was a lifesaver when we had an emergency.",
  },
  {
    name: "Dr. Mark Rodriguez",
    role: "Medical Practice Owner",
    image: "/professional-man-suit.png",
    rating: 5,
    text: "Their medical-grade cleaning protocols give us complete confidence. Patients always comment on how clean and fresh our facility feels. Truly exceptional service.",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Longer duration for better reading

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-teal-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            What Our Customers Say
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-96">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20 w-full">
                  {/* Stars */}
                  <motion.div
                    className="flex justify-center mb-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, rotate: -180 }}
                          animate={{ opacity: 1, rotate: 0 }}
                          transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                        >
                          <Star className="w-6 h-6 fill-yellow-400 text-yellow-400 mx-1" />
                        </motion.div>
                      )
                    )}
                  </motion.div>

                  {/* Testimonial text */}
                  <motion.blockquote
                    className="text-xl lg:text-2xl text-gray-700 leading-relaxed text-center mb-8 font-medium"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    "{testimonials[currentIndex].text}"
                  </motion.blockquote>

                  {/* Customer info */}
                  <motion.div
                    className="flex items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <motion.img
                      src={
                        testimonials[currentIndex].image || "/placeholder.svg"
                      }
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                    />
                    <motion.div
                      className="text-center"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                    >
                      <p className="font-bold text-gray-900 text-lg">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-blue-600 font-medium">
                        {testimonials[currentIndex].role}
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot indicators */}
          <motion.div
            className="flex justify-center gap-3 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
