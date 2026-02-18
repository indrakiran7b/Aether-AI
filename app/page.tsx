"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import CTASection from "@/components/cta-section"
import ServicesGrid from "@/components/services-grid"
import TechStackSection from "@/components/tech-stack-section"
import FeaturesSection from "@/components/features-section"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900">
      <Header />
      <HeroSection scrollY={scrollY} />
      <ServicesGrid />
      <TechStackSection />
      <FeaturesSection />
      <CTASection />
      <Testimonials />
      <Footer />
    </main>
  )
}
