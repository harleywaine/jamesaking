"use client"

import Link from 'next/link'
import { useState } from 'react'
import Button from '@/components/Button'
import Footer from '@/components/Footer'
import { useParallax } from '@/hooks/useParallax'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Movement() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const parallaxOffset = useParallax(0.3)
  
  // Scroll animation hooks
  const heroAnimation = useScrollAnimation(0.3)
  const manifestoAnimation = useScrollAnimation(0.2)
  const productsAnimation = useScrollAnimation(0.2)

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
            <h1 
              ref={heroAnimation.ref as React.RefObject<HTMLHeadingElement>}
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-4 text-white leading-[0.9] md:leading-tight scroll-animate ${heroAnimation.isVisible ? 'visible' : ''}`}
            >
              <span className="font-thin">This is a war on </span><span className="font-normal">mediocrity.</span><br />
              <span className="font-thin">Excellence is the </span><span className="font-normal">weapon.</span>
            </h1>
            <div className={`scroll-animate ${heroAnimation.isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <Button
              href="/access"
              size="lg"
              variant="secondary"
            >
              Join The Movement
            </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Forged Under Fire */}
      <section 
        ref={manifestoAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-zinc-800 dark:bg-zinc-900 scroll-animate ${manifestoAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-heading">
            The future won&apos;t be saved by average. It will be built by the excellent.
          </h2>
        </div>
      </section>



      {/* The book */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-light mb-6 text-heading"><span className="font-bold">The Book</span> - Accelerating Excellence</h2>
              <div className="text-body-lg mb-6 space-y-3">
                <p>
                Not theory. The operating system.
                </p>
                <p>
                The principles proven in profit, world titles, and mission success.
                </p>
                <p>
                Distilled. Codified. Released.
                </p>
              </div>
              <div>
                <p className="text-sm text-heading-muted mb-2">Available now:</p>
              <div className="flex items-center gap-3">
                  <a href="#" className="text-sm text-link-underline">Amazon</a>
                  <a href="#" className="text-sm text-link-underline">Kindle</a>
                  <a href="#" className="text-sm text-link-underline">Audible</a>
                </div>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src="/images/B5 .jpg" 
                alt="Performance across arenas" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/*The Podcast */}
      <section 
        ref={productsAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-zinc-800 scroll-animate ${productsAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
           
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src="/images/Podcast-collage.png" 
                alt="Thought leadership and frameworks" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl font-light mb-6 text-heading"><span className="font-bold">The Podcast</span> - Accelerating Excellence with James A. King</h2>
              <div className="text-body-lg mb-6 space-y-3">
                <p>The best don&apos;t guess - they run systems.</p>
                <p>From world titles to covert operations to billion-dollar trades - where performance is non-negotiable.</p>
                <p>Raw conversations. Proven systems.</p>
              </div>
                <div className="pt-4 space-y-3">
                  <div className="flex items-center gap-3">
                  <span className="text-sm text-heading-muted">Watch →</span>
                  <a href="#" className="text-sm text-link-underline">Access the channel</a>
                  </div>
                  <div className="flex items-center gap-3">
                  <span className="text-sm text-heading-muted">Listen →</span>
                  <a href="#" className="text-sm text-link-underline">Apple</a>
                  <span className="text-sm text-heading-muted">·</span>
                  <a href="#" className="text-sm text-link-underline">Spotify</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Outcomes Across Arenas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-light mb-6 text-heading"><span className="font-bold">The App</span> - Tier 1</h2>
              <div className="text-body-lg mb-6 space-y-3">
                <p>The black box for your brain.</p>
                <p>Every rep rewires your edge.</p>
                <p>If it&apos;s in your pocket, it&apos;s on you.</p>
              </div>
                <div className="pt-4 space-y-3">
                  <div className="flex items-center gap-3">
                  <span className="text-sm text-heading-muted">Be first to access →</span>
                  <a href="#" className="text-sm text-link-underline">Join the waitlist</a>
                </div>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src="/images/appmockup.png" 
                alt="The App - Tier 1" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Open Source Excellence */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-zinc-800 dark:bg-zinc-950">
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
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <h2 className="text-3xl font-light text-heading">The Operating System</h2>
              </div>
              <div className="text-body-lg mb-6 space-y-3">
                <p>Direct transmissions.</p>
                <p>Lectures. Systems. Signal.</p>
                <p>For those engineering excellence.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-heading-muted">Subscribe now →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-heading">
            Install systems that win. The world will follow.
          </h2>
        </div>
      </section>


      <Footer />
    </main>
  )
}
