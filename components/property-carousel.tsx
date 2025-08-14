"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import Image from "next/image"

export function PropertyCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const properties = [
    {
      image: "/modern-office-exterior.png",
      title: "Corporate Office Complex",
      location: "Downtown Business District",
      type: "Commercial",
    },
    {
      image: "/luxury-hotel-lobby.png",
      title: "Luxury Hotel Chain",
      location: "City Center",
      type: "Hospitality",
    },
    {
      image: "/medical-clean-room.png",
      title: "Medical Facility",
      location: "Healthcare District",
      type: "Healthcare",
    },
    {
      image: "/modern-residential-apartment.png",
      title: "Residential Complex",
      location: "Uptown Area",
      type: "Residential",
    },
    {
      image: "/retail-shopping-center.png",
      title: "Shopping Center",
      location: "Mall District",
      type: "Retail",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % properties.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + properties.length) % properties.length)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-cyan-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Properties We{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Transform</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover the diverse range of properties we've cleaned and maintained to perfection
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {properties.map((property, index) => (
                <div key={index} className="w-full flex-shrink-0 relative">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    className="w-full h-96 object-cover"
                    width={1000}
                    height={600}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">{property.title}</h3>
                    <div className="flex items-center text-blue-200 mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      {property.location}
                    </div>
                    <span className="inline-block bg-blue-500/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                      {property.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {properties.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
