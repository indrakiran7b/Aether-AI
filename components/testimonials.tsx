"use client"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "CEO, TechVentures Inc",
      quote: "Aether AI transformed our operations. We saw a 40% increase in efficiency within the first month.",
      company: "TechVentures",
    },
    {
      name: "Marcus Rodriguez",
      title: "CTO, Enterprise Solutions",
      quote: "The implementation was seamless and the support team was exceptional throughout the journey.",
      company: "Enterprise Solutions",
    },
    {
      name: "Elena Kovak",
      title: "Operations Director, FinanceHub",
      quote: "Best decision we made. The ROI was immediate and the team was incredibly responsive.",
      company: "FinanceHub",
    },
  ]

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-slate-400 text-lg">Trusted by leading enterprises worldwide</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-8 hover-lift hover-glow animate-slide-in-up"
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <div className="flex items-start gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <div key={j} className="w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                ))}
              </div>
              <p className="text-slate-300 mb-6 italic">{testimonial.quote}</p>
              <div className="border-t border-cyan-400/20 pt-4">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-slate-400">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
