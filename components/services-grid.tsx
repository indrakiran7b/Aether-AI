"use client"

import { Brain, Zap, Cog, BarChart3 } from "lucide-react"

export default function ServicesGrid() {
  const services = [
    {
      icon: Brain,
      title: "AI Agent Development",
      description: "Build custom AI agents tailored to your business processes",
      items: ["Internal AI Assistants", "Data Analysis Bots", "Workflow AI Agents"],
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: Cog,
      title: "Process Automation",
      description: "Streamline operations with intelligent automation",
      items: ["Sales & Marketing", "HR & Recruitment", "Finance & Workflows"],
      color: "from-blue-400 to-purple-500",
    },
    {
      icon: Zap,
      title: "Tools & Integrations",
      description: "Connect your favorite platforms seamlessly",
      items: ["n8n", "Odoo ERP", "Data Pipeline"],
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: BarChart3,
      title: "Consulting Services",
      description: "Expert guidance for AI transformation",
      items: ["Automation Audit", "Strategy Planning", "ROI Optimization"],
      color: "from-pink-400 to-rose-500",
    },
  ]

  return (
    <section id="services" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-in-up">Our Services</h2>
          <p className="text-xl text-slate-400 animate-slide-in-up stagger-1">
            Comprehensive AI solutions for every business need
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={i}
                className="group glass hover-glow p-8 rounded-2xl cursor-pointer animate-slide-in-up hover-lift"
                style={{ animationDelay: `${0.1 * i}s` }}
              >
                {/* Animated icon background */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-full h-full text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400 mb-6">{service.description}</p>

                <div className="space-y-2">
                  {service.items.map((item, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-2 text-slate-300 group-hover:text-cyan-400 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
