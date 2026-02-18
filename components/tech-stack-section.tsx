"use client"

import { useRef, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function TechStackSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const techStacks = [
    {
      category: "AI & ML",
      items: ["OpenAI GPT-4", "Claude AI", "LLaMA", "Hugging Face", "TensorFlow"],
      color: "from-cyan-400 to-blue-500",
    },
    {
      category: "Process Automation",
      items: ["n8n", "Zapier", "Make", "Automation.io", "RPA Tools"],
      color: "from-blue-400 to-purple-500",
    },
    {
      category: "CRM & ERP",
      items: ["Salesforce", "HubSpot", "Odoo", "SAP", "NetSuite"],
      color: "from-purple-400 to-pink-500",
    },
    {
      category: "Data & Analytics",
      items: ["Tableau", "Power BI", "Looker", "Mixpanel", "Segment"],
      color: "from-pink-400 to-rose-500",
    },
    {
      category: "Integration Platforms",
      items: ["MuleSoft", "Boomi", "Jitterbit", "Dell Boomi", "Apache Kafka"],
      color: "from-rose-400 to-orange-500",
    },
    {
      category: "Cloud Services",
      items: ["AWS", "Google Cloud", "Azure", "Heroku", "DigitalOcean"],
      color: "from-orange-400 to-yellow-500",
    },
  ]

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", checkScroll)
      window.addEventListener("resize", checkScroll)
      return () => {
        container.removeEventListener("scroll", checkScroll)
        window.removeEventListener("resize", checkScroll)
      }
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-in-up">
            Tech Stack & Integrations
          </h2>
          <p className="text-xl text-slate-400 animate-slide-in-up stagger-1">
            We work with industry-leading platforms and tools
          </p>
        </div>

        {/* Scrollable Container */}
        <div className="relative group">
          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-slate-950 to-transparent p-3 text-cyan-400 hover:text-cyan-300 transition-all hover-lift"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Right Arrow */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-l from-slate-950 to-transparent p-3 text-cyan-400 hover:text-cyan-300 transition-all hover-lift"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-2"
            style={{
              scrollBehavior: "smooth",
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(34, 197, 94, 0.5) rgba(15, 23, 42, 0.5)",
            }}
          >
            {techStacks.map((stack, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-72 glass rounded-2xl p-6 border-2 border-cyan-400/20 hover-glow animate-slide-in-up hover-lift group/card"
                style={{ animationDelay: `${0.05 * i}s` }}
              >
                {/* Header */}
                <div
                  className={`h-12 rounded-lg bg-gradient-to-br ${stack.color} p-3 mb-4 flex items-center group-hover/card:scale-110 transition-transform`}
                >
                  <span className="text-white font-bold text-sm">{stack.category}</span>
                </div>

                {/* Tech Items */}
                <div className="space-y-3">
                  {stack.items.map((item, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-2 text-slate-300 group-hover/card:text-cyan-400 transition-colors"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Footer Badge */}
                <div className="mt-6 pt-4 border-t border-cyan-400/20">
                  <span className="text-xs text-cyan-400/70 group-hover/card:text-cyan-400 transition-colors font-semibold">
                    → Ready to integrate
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Text */}
        <div className="text-center mt-8 animate-slide-in-up stagger-3">
          <p className="text-slate-400">
            Don't see your tool? We can integrate with custom APIs and private platforms too.{" "}
            <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">
              Contact us
            </a>
          </p>
        </div>
      </div>

      {/* Custom scrollbar styling */}
      <style>{`
        div::-webkit-scrollbar {
          height: 8px;
        }
        div::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
          border-radius: 4px;
        }
        div::-webkit-scrollbar-thumb {
          background: rgba(34, 197, 94, 0.5);
          border-radius: 4px;
        }
        div::-webkit-scrollbar-thumb:hover {
          background: rgba(34, 197, 94, 0.8);
        }
      `}</style>
    </section>
  )
}
