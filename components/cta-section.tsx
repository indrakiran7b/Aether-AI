"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CTASection() {
  return (
    <section id="cta" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5" />

      <div className="max-w-4xl mx-auto relative">
        <div className="glass rounded-3xl p-12 md:p-16 text-center border-2 border-cyan-400/20 hover-glow">
          {/* Animated background shapes */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-float" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-in-up">
              Ready to Transform Your Business?
            </h2>

            <p className="text-xl text-slate-300 mb-8 animate-slide-in-up stagger-1 max-w-2xl mx-auto">
              Discover how Aether AI can be tailored to your specific needs. Schedule a free consultation with our AI
              experts today and unlock your organization&apos;s full potential.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up stagger-2">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold hover-lift flex items-center justify-center gap-2 group shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-all"
              >
                Contact Sales
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/demo"
                className="px-8 py-4 rounded-full border-2 border-cyan-400/50 text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-all duration-300 hover-lift"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
