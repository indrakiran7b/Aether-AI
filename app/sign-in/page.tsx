"use client"

import type React from "react"

import { useState } from "react"
import { Zap, ArrowRight, Mail, Lock, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [redirecting, setRedirecting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false)
      setRedirecting(true)

      // Redirect after 2 seconds
      setTimeout(() => {
        window.location.href = "/dashboard"
      }, 2000)
    }, 1500)
  }

  if (redirecting) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="mb-8 animate-spin">
            <Zap className="w-16 h-16 text-cyan-400 mx-auto" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Redirecting...</h1>
          <p className="text-slate-300">Taking you to your dashboard</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900">
      <Header />

      <section className="pt-32 pb-16 px-4 flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="w-full max-w-md">
          {/* Form Container */}
          <div className="glass rounded-2xl p-8 border-2 border-cyan-400/20 hover-glow animate-slide-in-up">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 mb-4 animate-float">
                <Zap className="w-8 h-8 text-slate-950" strokeWidth={3} />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
              <p className="text-slate-400">Sign in to your Aether AI account</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Input */}
              <div className="animate-slide-in-up">
                <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-3 w-5 h-5 text-cyan-400/50 group-focus-within:text-cyan-400 transition-colors" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full bg-slate-900/50 border border-cyan-400/20 rounded-lg pl-12 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all hover:border-cyan-400/40"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="animate-slide-in-up stagger-1">
                <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-3 w-5 h-5 text-cyan-400/50 group-focus-within:text-cyan-400 transition-colors" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full bg-slate-900/50 border border-cyan-400/20 rounded-lg pl-12 pr-12 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all hover:border-cyan-400/40"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-3 text-cyan-400/50 hover:text-cyan-400 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Forgot Password Link */}
              <div className="text-right">
                <Link href="#" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 hover-lift disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2 group animate-slide-in-up stagger-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-slate-950/20 border-t-slate-950 rounded-full animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-cyan-400/20" />
              <span className="text-xs text-slate-500">OR</span>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-cyan-400/20" />
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button className="bg-slate-900/50 border border-cyan-400/20 rounded-lg py-2 text-white hover:border-cyan-400/50 transition-all hover:bg-slate-900/80">
                Google
              </button>
              <button className="bg-slate-900/50 border border-cyan-400/20 rounded-lg py-2 text-white hover:border-cyan-400/50 transition-all hover:bg-slate-900/80">
                GitHub
              </button>
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-slate-400">
              Don't have an account?{" "}
              <Link href="/sign-up" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
                Sign up
              </Link>
            </p>

            {/* Back to Home */}
            <Link
              href="/"
              className="block text-center mt-4 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
