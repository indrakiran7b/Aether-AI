"use client"

import { ArrowRight, BarChart3, Users, Zap, TrendingUp } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900">
      <Header />

      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="glass rounded-2xl p-12 border-2 border-cyan-400/20 hover-glow mb-12 animate-slide-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Welcome to Your Dashboard</h1>
            <p className="text-xl text-slate-300 mb-6">
              You've successfully signed in to Aether AI. Your transformation journey begins here.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold hover-lift"
            >
              Explore Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Zap, label: "Active Projects", value: "3" },
              { icon: Users, label: "Team Members", value: "12" },
              { icon: TrendingUp, label: "ROI Increase", value: "45%" },
              { icon: BarChart3, label: "Tasks Automated", value: "487" },
            ].map((stat, i) => {
              const Icon = stat.icon
              return (
                <div
                  key={i}
                  className="glass rounded-xl p-6 border border-cyan-400/20 hover-glow animate-slide-in-up hover-lift"
                  style={{ animationDelay: `${0.1 * i}s` }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-slate-400 text-sm mb-2">{stat.label}</p>
                      <p className="text-3xl font-bold text-cyan-400">{stat.value}</p>
                    </div>
                    <Icon className="w-8 h-8 text-cyan-400/50" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
