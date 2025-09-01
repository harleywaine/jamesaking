"use client"

import Link from 'next/link'
import { useState } from 'react'
import Button from '@/components/Button'
import { useParallax } from '@/hooks/useParallax'

export default function Movement() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const parallaxOffset = useParallax(0.3)

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-light tracking-tight text-gray-900">
                James A. King
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center space-x-8">
              <Link href="/james" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm">
                James
              </Link>
              <Link href="/movement" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm">
                Movement
              </Link>
              <Link href="/enquire" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm">
                Enquire
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="sm:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu dropdown */}
          {mobileMenuOpen && (
            <div className="sm:hidden border-t border-gray-200 bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link 
                  href="/james" 
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  James
                </Link>
                <Link 
                  href="/movement" 
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Movement
                </Link>
                <Link 
                  href="/enquire" 
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Enquire
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-44 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/A4 .jpg')`,
              transform: `translateY(${parallaxOffset}px)`
            }}
          />
          {/* Preload critical images */}
          <link rel="preload" as="image" href="/images/A4 .jpg" />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 text-white">
              The Movement
            </h1>
            <div className="text-xl md:text-2xl text-gray-200 mb-12 space-y-4">
              <p>This is a war on mediocrity. Excellence is the weapon. You are the answer. You are the asset. Build the system — the world will follow.</p>
              <p>Excellence isn&apos;t optional. It&apos;s how we forge the future.</p>
            </div>
            <Button
              href="/enquire"
              size="lg"
              variant="secondary"
            >
              Join The Movement
            </Button>
          </div>
        </div>
      </section>

      {/* Open Source Excellence */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-6 text-gray-900">Excellence — Open Source</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Direct transmissions from James A. King. Pressure-tested frameworks. Long-form lectures. Decoded systems. For those serious about engineering excellence. If it&apos;s in your pocket, it&apos;s on you.
          </p>
          <div className="flex justify-center mb-8">
            <img src="/images/Screenshot 2025-08-29 at 17.17.49.png" alt="Open Source Excellence Content" className="w-64 h-36 object-cover rounded-lg" />
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="text-sm text-gray-600">Subscribe Now →</span>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors border-b border-gray-300 hover:border-gray-900">YouTube</a>
          </div>
        </div>
      </section>

      {/* Product Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* The Book */}
            <div className="bg-gray-50 p-8 border border-gray-200 rounded-lg">
              <div className="text-center mb-6">
                <img src="/images/tools/book.jpg" alt="Accelerating Excellence Book" className="w-full h-32 object-cover mx-auto mb-4 rounded-lg" />
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">#1 International Bestseller</div>
              <h3 className="text-xl font-medium mb-4 text-gray-900">The Book — Accelerating Excellence</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                This isn&apos;t motivation. It&apos;s the operating system — codifying principles proven in profit, world titles, and mission success. No more guesswork. The system&apos;s in the book. Own it. Fix it. Finish it.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors border-b border-gray-300 hover:border-gray-900">Amazon</a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors border-b border-gray-300 hover:border-gray-900">Kindle</a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors border-b border-gray-300 hover:border-gray-900">Audible</a>
              </div>
            </div>

            {/* The Podcast */}
            <div className="bg-gray-50 p-8 border border-gray-200 rounded-lg">
              <div className="text-center mb-6">
                <img src="/images/tools/podcast.jpg" alt="Accelerating Excellence Podcast" className="w-full h-32 object-cover mx-auto mb-4 rounded-lg" />
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">The best don&apos;t guess — they run systems.</div>
              <h3 className="text-xl font-medium mb-4 text-gray-900">The Podcast — Accelerating Excellence with James A. King</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Gold medallists. Special forces commanders. Billion-dollar operators. From world title fights to covert ops to billion-dollar trades — where performance is non-negotiable. Raw conversations. Proven systems.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">Watch →</span>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors border-b border-gray-300 hover:border-gray-900">YouTube</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">Listen →</span>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors border-b border-gray-300 hover:border-gray-900">Apple</a>
                  <span className="text-sm text-gray-600">·</span>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors border-b border-gray-300 hover:border-gray-900">Spotify</a>
                </div>
              </div>
            </div>

            {/* The App */}
            <div className="bg-gray-50 p-8 border border-gray-200 rounded-lg">
              <div className="text-center mb-6">
                <img src="/images/tools/app.png" alt="Train the Operating System App" className="w-full h-32 object-cover mx-auto mb-4 rounded-lg" />
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">The black box for your brain.</div>
              <h3 className="text-xl font-medium mb-4 text-gray-900">The App — Train the Operating System</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your mental gym. Always loaded. Built by the elite, for the elite. Every session is a rep. Every rep rewires your edge.
              </p>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">Join the waitlist →</span>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors border-b border-gray-300 hover:border-gray-900">Sign up</a>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 mb-4 md:mb-0">
              © 2024 James A. King. All rights reserved.
            </div>
            <div className="flex space-x-8 text-sm text-gray-500">
              <Link href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
