import { Phone, Mail, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navigation() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-white border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 absolute left-4">
            <Image 
              className="h-12 w-12"
              src="/logo.png"
              alt="Stunning LCS Logo"
              width={50}
              height={50}
            />
            <div>
              <h1 className="text-xl font-bold text-primary">Stunning LCS</h1>
              <p className="text-xs text-primary">Premium Cleaning</p>
            </div>
          </div>

          {/* Centered Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-emerald-500 hover:text-emerald-600 transition-colors">
              Services
            </a>
            <a href="#process" className="text-emerald-500 hover:text-emerald-600 transition-colors">
              Process
            </a>
            <a href="#testimonials" className="text-emerald-500 hover:text-emerald-600 transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-emerald-500 hover:text-emerald-600 transition-colors">
              Contact
            </a>
          </div>

          {/* Contact Info & CTA */}
          <div className="flex items-center space-x-4 absolute right-4">
            <div className="hidden lg:flex items-center space-x-4 text-gray-600">
              {/* <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span className="text-sm">(555) 123-4567</span>
              </div> */}
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@stunninglcs.com</span>
              </div>
            </div>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 text-sm">
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}