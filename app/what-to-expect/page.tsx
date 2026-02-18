"use client"

import { ArrowRight, Database, Zap, TrendingUp, Users } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function WhatToExpect() {
  const expectations = [
    {
      icon: Zap,
      title: "Personalized AI strategy assessment",
    },
    {
      icon: TrendingUp,
      title: "ROI projections for your business",
    },
    {
      icon: Database,
      title: "Implementation roadmap and timeline",
    },
    {
      icon: Users,
      title: "Dedicated support and success team",
    },
    {
      icon: TrendingUp,
      title: "Real-time monitoring and analytics",
    },
    {
      icon: Zap,
      title: "Continuous optimization and updates",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-slide-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">What to Expect</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our comprehensive consultation process is designed to unlock your organization's full potential through
              AI-driven transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Checklist */}
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold text-white mb-8">During Your Consultation</h2>

              <div className="space-y-6">
                {expectations.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={index}
                      className="flex gap-4 items-start group cursor-pointer animate-slide-in-up hover-lift"
                      style={{ animationDelay: `${0.05 * index}s` }}
                    >
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 group-hover:scale-110 transition-transform">
                          <Icon className="h-5 w-5 text-slate-950" strokeWidth={3} />
                        </div>
                      </div>
                      <div>
                        <p className="text-lg text-slate-200 group-hover:text-cyan-400 transition-colors font-medium">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-10 flex flex-col gap-3">
                <Link
                  href="/sign-in"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold hover-lift shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-all group"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-cyan-400/50 text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-all"
                >
                  Back to Home
                </Link>
              </div>
            </div>

            {/* Right Column - Image/Visual */}
            <div className="animate-slide-in-right">
              <div className="glass rounded-2xl p-12 border-2 border-cyan-400/20 hover-glow min-h-96 flex flex-col items-center justify-center relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />
                <div className="absolute top-10 right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl animate-float" />
                <div
                  className="absolute bottom-10 left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-float"
                  style={{ animationDelay: "1s" }}
                />

                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">AI Transformation</h3>
                  <p className="text-slate-300">
                    Get insights into how AI can revolutionize your business processes and unlock new opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Aether AI</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Decades of combined experience in AI implementation and enterprise automation",
              },
              {
                title: "Proven Results",
                description: "100+ successful implementations with average 40% efficiency gains",
              },
              {
                title: "24/7 Support",
                description: "Dedicated support team available round-the-clock for your success",
              },
            ].map((benefit, i) => (
              <div
                key={i}
                className="glass rounded-xl p-8 border border-cyan-400/20 hover-glow animate-slide-in-up hover-lift"
                style={{ animationDelay: `${0.1 * i}s` }}
              >
                <h3 className="text-xl font-bold text-cyan-400 mb-3">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
