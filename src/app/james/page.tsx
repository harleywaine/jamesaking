"use client"

import Link from 'next/link'
import { useState } from 'react'
import Button from '@/components/Button'
import Footer from '@/components/Footer'
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
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-zinc-700 transition-colors duration-300">
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
            </div>

            {/* Mobile menu button */}
            <div className="sm:hidden flex items-center">
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
            <div className="sm:hidden border-t border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-950">
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
      <section className="relative h-[80vh] px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center pt-16 md:pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-left bg-no-repeat"
            style={{
              backgroundImage: `url('/images/A15.jpg')`,
              transform: `translateY(${parallaxOffset}px)`
            }}
          />
          {/* Preload critical images */}
          <link rel="preload" as="image" href="/images/A22.jpg" />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="max-w-5xl">
            <h1 
              ref={heroAnimation.ref as React.RefObject<HTMLHeadingElement>}
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-8 md:mb-12 text-white leading-[0.9] md:leading-tight scroll-animate ${heroAnimation.isVisible ? 'visible' : ''}`}
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
        className={`py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-zinc-800 dark:bg-zinc-900 scroll-animate ${bioAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-heading">
            World Champions. Special Mission Units. $65bn+ Hedge Funds.<br />
            <span className="text-2xl md:text-3xl font-light">When failure isn&apos;t an option, they call <span className="font-bold">James A. King.</span></span>
          </h2>
        </div>
      </section>


      {/* Outcomes Across Arenas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-light mb-6 text-heading">James lives the standards he installs.</h2>
              <div className="text-body-lg mb-6 space-y-3">
                <p>
                  From special operations selection to leading performance programs inside <span className="font-bold">Tier One Special Mission Units</span>.
                </p>
                <p>
                Designed, built and led trading teams that delivered <span className="font-bold">$2bn+ net profit and 4,000% risk-adjusted returns</span>.
                </p>
                <p>
                Coached athletes that have delivered <span className="font-bold">Champions Leagues, Majors, Olympic Gold, and World Championships</span>.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src="/images/A116.jpg" 
                alt="Performance across arenas" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Authority & Thought Leadership */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
           
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src="/images/A12.JPG"
                alt="Thought leadership and frameworks" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl font-light mb-6 text-heading">James doesn&apos;t visit the elite. He builds it.</h2>
              <div className="text-body-lg mb-6 space-y-3">
                <p>Performance architecture forged in the most unforgiving arenas:</p> 
                <p>From the kill house to the cock-pit.</p>
                <p>World titles to Olympic Gold.</p>
                <p>The trading floor to the boardroom.</p>
                <p className="font-bold">Different worlds. One system.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Outcomes Across Arenas */}
      <section 
        ref={achievementsAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-zinc-800 dark:bg-zinc-950 scroll-animate ${achievementsAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-light mb-6 text-heading">King walked the walk - then built the system.</h2>
              <div className="text-body-lg mb-6 space-y-3">
                <p>
                <span className="font-bold">Number one Bestselling author</span> of Accelerating Excellence.</p>
                <p>
                Delivered case studies at <span className="font-bold">Oxford, Harvard, MIT, and Princeton</span>.                </p>
                <p>
                Featured on <span className="font-bold">Sky Sports, TEDx,</span> and Men&apos;s Health.                </p>
                <p>
                First-Class BSc & MSc in <span className="font-bold">Performance Psychology</span>, University of Edinburgh.
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

      {/* The Offer */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-zinc-800 dark:bg-zinc-900">
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



      <Footer />
    </main>
  )
}
