"use client"

import { ChevronRight } from "lucide-react"

export default function HeroSection({ scrollY }: { scrollY: number }) {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          style={{
            left: "10%",
            top: "20%",
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
        <div
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          style={{
            right: "10%",
            top: "40%",
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-in-up leading-tight">
          Transform Your Business <br />
          <span className="gradient-text">with Aether AI</span>
        </h1>

        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto animate-slide-in-up stagger-1">
          Enterprise-grade AI automation platform designed to optimize your workflows, amplify productivity, and unlock
          intelligent decision-making at scale.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-in-up stagger-2">
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold hover-lift flex items-center justify-center gap-2 group">
            Schedule Consultation
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 rounded-full border-2 border-cyan-400/50 text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-all duration-300 hover-lift">
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto animate-fade-in-scale stagger-3">
          {[
            { number: "500+", label: "Enterprises" },
            { number: "10M+", label: "Workflows" },
            { number: "99.9%", label: "Uptime" },
          ].map((stat, i) => (
            <div key={i} className="p-4 rounded-lg glass hover-glow" style={{ animationDelay: `${0.1 * (i + 3)}s` }}>
              <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.number}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
