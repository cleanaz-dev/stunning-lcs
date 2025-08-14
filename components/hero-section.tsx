"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./navigation";
import Image from "next/image";

const heroImages = [
  "/modern-office-cleaning.png",
  "/luxury-hotel-lobby.png",
  "/medical-clean-room.png",
];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000); // 6 seconds to match scale duration
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <Navigation />

      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0"
            initial={{
              opacity: 0,
              scale: 1.1,
            }}
            animate={{
              opacity: 1,
              scale: 1.2,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              opacity: { duration: 3 },
              scale: { duration: 7, ease: "linear" },
            }}
          >
            <Image
              src={heroImages[currentImageIndex] || "/placeholder.svg"}
              alt="Professional cleaning services"
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-teal-700/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      <div className="relative container mx-auto px-4 py-16 lg:py-24 pt-32 min-h-screen flex items-center justify-center">
        <motion.div
          className="text-center max-w-4xl space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="space-y-4">
            <motion.h1
              className="text-5xl lg:text-6xl font-bold leading-tight text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Professional Cleaning
              <br />
              <motion.span
                className="text-sky-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                That Exceeds Expectations
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-blue-100 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Book in 60 seconds • Same-day availability • 100% satisfaction
              guaranteed
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Button
              size="xl"
              className="flex items-center justify-center"
            >
              Get Free Quote
            </Button>

            <Button
              size="xl"
              variant="outline"
              className="flex items-center justify-center"
            >
             Call Now
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}