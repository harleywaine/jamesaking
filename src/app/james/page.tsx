"use client"

import Link from 'next/link'
import { useState } from 'react'
import Button from '@/components/Button'
import ThemeToggle from '@/components/ThemeToggle'
import { useParallax } from '@/hooks/useParallax'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const parallaxOffset = useParallax(0.3)
  
  // Scroll animation hooks
  const heroAnimation = useScrollAnimation(0.3)
  const bioAnimation = useScrollAnimation(0.2)
  const achievementsAnimation = useScrollAnimation(0.2)
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-gray-200 dark:border-slate-700 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-light tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
                JAMES A. KING
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-sm">
                Home
              </Link>
              <Link href="/james" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-sm">
                James
              </Link>
              <Link href="/movement" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-sm">
                Movement
              </Link>
              <Link href="/access" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-sm">
                Access
              </Link>
              <ThemeToggle />
            </div>

            {/* Mobile menu button and theme toggle */}
            <div className="sm:hidden flex items-center space-x-4">
              <ThemeToggle />
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu dropdown */}
          {mobileMenuOpen && (
            <div className="sm:hidden border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-black">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link 
                  href="/" 
                  className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/james" 
                  className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  James
                </Link>
                <Link 
                  href="/movement" 
                  className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Movement
                </Link>
                <Link 
                  href="/access" 
                  className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-sm"
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
            className="w-full h-full bg-cover bg-left bg-no-repeat"
            style={{
              backgroundImage: `url('/images/A15.jpg')`,
              transform: `translateY(${parallaxOffset}px) scaleX(-1)`
            }}
          />
          {/* Preload critical images */}
          <link rel="preload" as="image" href="/images/A22.jpg" />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <div className="max-w-4xl">
            <h1 
              ref={heroAnimation.ref as React.RefObject<HTMLHeadingElement>}
              className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 md:mb-12 text-white leading-[0.9] md:leading-tight scroll-animate ${heroAnimation.isVisible ? 'visible' : ''}`}
            >
              <span className="font-thin">The operator</span> <span className="font-normal">behind the operators</span>
            </h1>
            <div className={`scroll-animate ${heroAnimation.isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <Button
                href="/access"
                size="lg"
                variant="secondary"
              >
              Request consideration
            </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Forged Under Fire */}
      <section 
        ref={bioAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-slate-800 scroll-animate ${bioAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto text-body leading-relaxed text-centre">
            <p className="text-body-xl">
            World Champions. Special Mission Units. $65bn+ hedge funds.
            </p>
            <p className="text-body-xl">
            When failure isn&apos;t an option, they call <span className="font-bold">James A. King.</span>
            </p>
          </div>
        </div>
      </section>


      {/* Outcomes Across Arenas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-light mb-8 text-heading">James lives the standards he installs.</h2>
              <div>
                <p className="text-body-lg">
                  From special operations selection to leading performance programs inside <span className="font-bold">Tier One Special Mission Units</span>.
                </p>
              </div>
              <div>
                <p className="text-body-lg">
                Designed, built and led trading teams that delivered <span className="font-bold">$2bn+ net profit and 4,000% risk-adjusted returns</span>.
                </p>
              </div>
              <div>
                <p className="text-body-lg">
                Coached athletes that have delivered <span className="font-bold">Champions Leagues, Majors, Olympic Gold, and World Championships</span>.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src="/images/A24.JPG" 
                alt="Performance across arenas" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Authority & Thought Leadership */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
           
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src="/images/A12.JPG"
                alt="Thought leadership and frameworks" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-light mb-8 text-heading">James doesn&apos;t visit the elite. He builds it.</h2>
              <div className="space-y-4">
                <p className="text-body-lg">Performance architecture forged in the most unforgiving arenas:</p> 
                <p className="text-body-lg">From the kill house to the cock-pit.</p>
                <p className="text-body-lg">World titles to Olympic Gold.</p> 
                <p className="text-body-lg">The trading floor to the boardroom.</p>
                <p className="text-body-lg"><span className="font-bold">Different worlds. One system.</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Outcomes Across Arenas */}
      <section 
        ref={achievementsAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-slate-800 scroll-animate ${achievementsAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-light mb-8 text-heading">King walked the walk - then built the system.</h2>
              <div>
                <p className="text-body-lg">
                <span className="font-bold">Number one Bestselling author</span> of Accelerating Excellence.</p>
              </div>
              <div>
                <p className="text-body-lg">
                Delivered case studies at <span className="font-bold">Oxford, Harvard, MIT, and Princeton</span>.                </p>
              </div>
              <div>
                <p className="text-body-lg">
                Featured on <span className="font-bold">Sky Sports, TEDx,</span> and Men&apos;s Health.                </p>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src="/images/A21.jpg" 
                alt="Performance across arenas" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Offer */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-heading">
          Category Five in human form.
          </h2>
                      <Button
              href="/access"
              size="lg"
              variant="primary"
            >
              Request Access
            </Button>
        </div>
      </section>



      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo */}
            <div className="mb-4 md:mb-0">
              <Link href="/" className="text-xl font-light tracking-tight text-heading">
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
                  className="w-5 h-5 text-gray-600 dark:text-white group-hover:text-gray-900 dark:group-hover:text-gray-300 transition-colors" 
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
                  className="w-5 h-5 text-gray-600 dark:text-white group-hover:text-gray-900 dark:group-hover:text-gray-300 transition-colors" 
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
                  className="w-5 h-5 text-gray-600 dark:text-white group-hover:text-gray-900 dark:group-hover:text-gray-300 transition-colors" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
            
            {/* Links */}
            <div className="flex flex-col space-y-2 text-sm text-heading-muted">
              <Link href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
