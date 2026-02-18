"use client"

import { CheckCircle2 } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    "Personalized AI strategy assessment",
    "ROI projections for your business",
    "Implementation roadmap and timeline",
    "Dedicated support and success team",
    "Real-time monitoring and analytics",
    "Continuous optimization and updates",
  ]

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What to Expect</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Our comprehensive consultation process is designed to unlock your organization&apos;s full potential
              through AI-driven transformation.
            </p>

            <div className="space-y-4">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 animate-slide-in-up"
                  style={{ animationDelay: `${0.05 * i}s` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-300 text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative animate-fade-in-scale">
            <div className="glass rounded-2xl p-8 hover-glow">
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl animate-shimmer"
                    style={{ animationDelay: `${0.2 * i}s` }}
                  />
                ))}
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/5 to-transparent pointer-events-none" />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl animate-float" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-float" />
          </div>
        </div>
      </div>
    </section>
  )
}
