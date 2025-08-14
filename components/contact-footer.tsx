"use client";

import type React from "react";

import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Star } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
const emailSchema = z
  .string()
  .refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
    message: "Please enter a valid email address",
  });

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: emailSchema,
  phone: z.string().min(1, "Phone number is required"),
  serviceInterest: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
});

export function ContactFooter() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    serviceInterest: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = contactSchema.parse(formData);
      console.log("Contact form submitted:", validatedData);

      // Reset form on success
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        serviceInterest: "",
      });

      // Show success message
      alert("Thank you! Your message has been sent successfully.");
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};

        error.issues.forEach((issue) => {
          if (issue.path[0]) {
            fieldErrors[issue.path[0] as string] = issue.message;
          }
        });

        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-sky-500/20 to-teal-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>

        {/* Logo Background Overlay */}
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-[0.03]"
          style={{
            backgroundImage: `url('/logo-lite.png')`,
            backgroundSize: "1000px",
          }}
        ></div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info - moved to left */}
          <div>
            <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text text-transparent">
              Get In Touch
            </h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Call Us Now</p>
                  <p className="text-gray-300">(555) 123-CLEAN</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-gray-300">info@stunninglcs.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Service Areas</p>
                  <p className="text-gray-300">
                    Downtown, Midtown, Suburbs & Surrounding Areas
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Business Hours</p>
                  <p className="text-gray-300">
                    Mon-Fri: 7AM-7PM | Sat-Sun: 8AM-5PM
                  </p>
                  <p className="text-sky-300 text-sm">
                    Emergency service available 24/7
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">
                Follow Us & Reviews
              </h4>
              <div className="flex gap-4 mb-6">
                <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg"
                >
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-br from-pink-600 to-pink-700 rounded-full flex items-center justify-center hover:from-pink-700 hover:to-pink-800 transition-all shadow-lg"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center hover:from-yellow-600 hover:to-yellow-700 transition-all shadow-lg"
                >
                  <Star className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-400 text-sm">
                Check out our 5-star reviews on Google and Facebook!
              </p>
            </div>
          </div>

          {/* Contact Form - moved to right */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h4 className="text-2xl font-bold mb-6">Send Us a Message</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className={`bg-white/10 border-white/20 text-white placeholder:text-gray-400 ${
                      errors.name ? "border-red-500" : ""
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <Input
                    placeholder="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={`bg-white/10 border-white/20 text-white placeholder:text-gray-400 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <Input
                  placeholder="Phone Number"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className={`bg-white/10 border-white/20 text-white placeholder:text-gray-400 ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, serviceInterest: value })
                  }
                  value={formData.serviceInterest}
                >
                  <SelectTrigger
                    className={`bg-white/10 border-white/20 text-white w-full ${
                      errors.serviceInterest ? "border-red-500" : ""
                    }`}
                  >
                    <SelectValue placeholder="Service Interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="office">Office Cleaning</SelectItem>
                    <SelectItem value="medical">Medical Facility</SelectItem>
                    <SelectItem value="retail">Retail Space</SelectItem>
                    <SelectItem value="residential">Residential</SelectItem>
                    <SelectItem value="industrial">Industrial</SelectItem>
                  </SelectContent>
                </Select>
                {errors.serviceInterest && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.serviceInterest}
                  </p>
                )}
              </div>

              <Textarea
                placeholder="Tell us about your cleaning needs... (Optional)"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-32"
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Stunning LCS. All rights reserved. Licensed, Bonded &
            Insured.
          </p>
        </div>
      </div>
    </footer>
  );
}
