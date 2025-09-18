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
                JAMES A. KING
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm">
                Home
              </Link>
              <Link href="/james" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm">
                James
              </Link>
              <Link href="/movement" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm">
                Movement
              </Link>
                              <Link href="/access" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm">
                  Access
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
                  href="/" 
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
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
                    href="/access" 
                    className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Access
                  </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center">
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
        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-12 text-white leading-tight">
              <span className="font-thin">This is a war on mediocrity. </span> <span className="font-normal">Excellence is the weapon.</span>
            </h1>
            <Button
              href="/access"
              size="lg"
              variant="secondary"
            >
              Join The Movement
            </Button>
          </div>
        </div>
      </section>


      {/* Forged Under Fire */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed text-centre">
          <h2 className="text-4xl font-light mb-6 text-gray-900">Open Source Excellence.</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
            You are the answer. You are the asset. The future won’t be saved by average. It will be built by the excellent. Install systems that win - the world will follow.
            </p>
          </div>
        </div>
      </section>



      {/* The book */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-light mb-8 text-gray-900"><span className="font-bold">The Book</span> - Accelerating Excellence</h2>
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                This is not motivation. This is the operating system.
                </p>
              </div>
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                Codifying the principles proven in profit, world titles, and mission success.                </p>
              </div>
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                No more guesswork. The system’s in the book.                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Available now:</p>
                <div className="flex items-center gap-3">
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors border-b border-gray-300 hover:border-gray-900">Amazon</a>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors border-b border-gray-300 hover:border-gray-900">Kindle</a>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors border-b border-gray-300 hover:border-gray-900">Audible</a>
                </div>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src="/images/JK - 61.jpg" 
                alt="Performance across arenas" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/*The Podcast */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
           
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src="/images/Podcast-collage.png" 
                alt="Thought leadership and frameworks" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-light mb-8 text-gray-900"><span className="font-bold">The Podcast</span> - Accelerating Excellence with James A. King</h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-600">The best don&apos;t guess - they run systems.</p>
                <p className="text-lg text-gray-600">From world title fights to covert operations to billion-dollar trades - where performance is non-negotiable.</p>
                <p className="text-lg text-gray-600">Raw conversations. Proven systems.</p>
                <div className="pt-4 space-y-3">
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
            </div>
          </div>
        </div>
      </section>


      {/* Outcomes Across Arenas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-light mb-8 text-gray-900"><span className="font-bold">The App</span> - Tier 1</h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Train the Operating System. The black box for your brain.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Your mental gym. Always loaded. Every session, a rep. Every rep, rewires your edge.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Built by the elite, for the elite. If it&apos;s in your pocket, it&apos;s on you.
                </p>
                <div className="pt-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600">Be first to access →</span>
                    <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors border-b border-gray-300 hover:border-gray-900">Join the waitlist</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src="/images/C40.jpg" 
                alt="Performance across arenas" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Open Source Excellence */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                <img 
                  src="/images/A25.jpg" 
                  alt="Latest YouTube Content" 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <h2 className="text-3xl font-light text-gray-900">The Operating System</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">Direct transmissions from James A. King.
                </p>
              <p className="text-lg text-gray-600 leading-relaxed">Pressure-tested frameworks. Long-form lectures. Decoded systems. </p>
              <p className="text-lg text-gray-600 leading-relaxed">For those serious about engineering excellence.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">Subscribe now →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-gray-900">
            Excellence isn&apos;t optional. It&apos;s how we forge the future.
          </h2>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo */}
            <div className="mb-4 md:mb-0">
              <Link href="/" className="text-xl font-light tracking-tight text-gray-900">
                JAMES A. KING
              </Link>
            </div>
            
            {/* Social Icons - Centered */}
            <div className="flex gap-4 mb-4 md:mb-0">
              <a 
                href="#" 
                className="p-2 rounded-full border border-gray-300 hover:border-gray-900 transition-colors group"
                aria-label="Instagram"
              >
                <svg 
                  className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full border border-gray-300 hover:border-gray-900 transition-colors group"
                aria-label="LinkedIn"
              >
                <svg 
                  className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full border border-gray-300 hover:border-gray-900 transition-colors group"
                aria-label="YouTube"
              >
                <svg 
                  className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
            
            {/* Links */}
            <div className="flex flex-col space-y-2 text-sm text-gray-500">
              <Link href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
