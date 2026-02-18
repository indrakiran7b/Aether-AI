"use client"

import { useState, useEffect } from "react"
import { Menu, X, Zap } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Services", href: "/#services" },
    { label: "Features", href: "/#features" },
    { label: "Solutions", href: "/what-to-expect" },
    { label: "Pricing", href: "/#pricing" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-950/95 backdrop-blur-md border-b border-cyan-500/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - links to home */}
          <Link href="/" className="flex items-center gap-2 animate-slide-in-down hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <Zap className="w-6 h-6 text-slate-950" strokeWidth={3} />
            </div>
            <span className="text-xl font-bold gradient-text">Aether AI</span>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium animate-slide-in-down"
                style={{ animationDelay: `${0.1 * (i + 1)}s` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/sign-in"
              className="px-6 py-2 rounded-full border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 transition-all duration-300 text-sm font-medium hover-lift"
            >
              Sign In
            </Link>
            <Link
              href="/#cta"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 text-sm font-medium hover-lift"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-4">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-slate-300 hover:text-cyan-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-4">
              <Link
                href="/sign-in"
                className="flex-1 px-4 py-2 rounded-full border border-cyan-400/50 text-cyan-400 text-sm font-medium text-center"
              >
                Sign In
              </Link>
              <Link
                href="/#cta"
                className="flex-1 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 text-sm font-medium text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
