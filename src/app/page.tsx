"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Button from '@/components/Button'
import ThemeToggle from '@/components/ThemeToggle'
import { useParallax } from '@/hooks/useParallax'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Home() {
  // James A. King website homepage - v2
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const parallaxOffset = useParallax(0.3)
  
  // Scroll animation hooks
  const heroAnimation = useScrollAnimation(0.3)
  const credibilityAnimation = useScrollAnimation(0.2)
  const resultsAnimation = useScrollAnimation(0.2)
  const testimonialsAnimation = useScrollAnimation(0.2)
  const productsAnimation = useScrollAnimation(0.2)
  
  const testimonials = [
    {
      quote: "Practical, but not obvious, keys to getting the most from teams. Truly brilliant.",
      role: "General Stanley A. McChrystal",
      organization: "Former CO, Joint Special Operations Command",
      logo: "/images/testimonials/Navy_SEAL_logo.png"
    },
    {
      quote: "James transformed selection and training and an exponential increase in revenue followed immediately.",
      role: "Muwaffaq Salti",
      organization: "Founder & Chairman, Mandara Capital",
      logo: "/images/testimonials/Mandara.png"
    },
    {
      quote: "One of the world's leading performance experts. James will teach you everything you need to know about elite performance.",
      role: "Joe De Sena",
      organization: "Founder & CEO, Spartan Race; 3× NYT Bestselling Author",
      logo: "/images/testimonials/Spartan race logo.png"
    },
    {
      quote: "James provides unique insight into cultivating elite performance — a true route map to excellence.",
      role: "Senior Member",
      organization: "MI5 – The Security Service",
      logo: "/images/testimonials/MI5.jpg"
    },
    {
      quote: "James combines energy, ingenuity, an elite mindset and highly actionable principles.",
      role: "Gorm Thomassen",
      organization: "CIO, AKO Capital",
      logo: "/images/testimonials/AKO Capital logo.png"
    },
    {
      quote: "Delivering at the leading edge of special operations… James insights have revolutionised my approach in the most demanding circumstances.",
      role: "Former CO",
      organization: "UK Special Mission Unit",
      logo: "/images/trustedby/SAS Blurred.png"
    },
    {
      quote: "Greatness is not achieved accidentally… James has a deliberate and accessible roadmap for maximising elite performance.",
      role: "Mark Shapiro",
      organization: "President & CEO, Toronto Blue Jays",
      logo: "/images/testimonials/bluejays.png"
    },
    {
      quote: "I have seen first-hand how James builds elite performance individuals and organisations… His strategies are unique, innovative and proven.",
      role: "Jason Henderson",
      organization: "Master Chief, Navy SEAL NSWDG (Retired)",
      logo: "/images/testimonials/Navy_SEAL_logo.png"
    },
    {
      quote: "James has the veritable blueprint for building a high performance environment.",
      role: "Jerry Dipoto",
      organization: "EVP & GM, Seattle Mariners Baseball Club",
      logo: "/images/testimonials/Seattle mariner baseball logo.png"
    },
    {
      quote: "I have watched and admired James design and build sustainable human performance programmes that deliver results.",
      role: "Former Command Sergeant Major",
      organization: "UK Special Mission Units",
      logo: "/images/trustedby/SAS Blurred.png"
    }
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [testimonials.length])
  
  const showTestimonial = (index: number) => {
    setCurrentTestimonial(index)
  }
  
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }
  
  const previousTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

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
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/A1 (Home).jpg')`,
              transform: `translateY(${parallaxOffset}px)`
            }}
          />
          {/* Preload critical images */}
          <link rel="preload" as="image" href="/images/A1 (Home).jpg" />
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
              <span className="font-thin">Excellence isn&apos;t discovered -</span> <span className="font-normal">it&apos;s engineered</span>
            </h1>
            <div className={`scroll-animate ${heroAnimation.isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <Button
                href="/access"
                size="lg"
                variant="secondary"
              >
                Request access
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Full Width Image & Text Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              ref={credibilityAnimation.ref as React.RefObject<HTMLDivElement>}
              className={`space-y-6 scroll-animate-left ${credibilityAnimation.isVisible ? 'visible' : ''}`}
            >
              <div className="text-body-lg space-y-2">
                <p>The world&apos;s most profitable Hedge funds.</p>
                <p>Multiple no.1 ranked athletes.</p>
                <p>Tier one Special Forces units.</p>
                <br />
                <p>Different arenas. Different uniforms.</p>
                <p className="font-bold">One constant. James A. King.</p>
              </div>
              <div className="pt-4">
                <a href="/james" className="text-sm text-link-underline">
                Why the elite call James →
                </a>
              </div>
            </div>
            <div 
              ref={credibilityAnimation.ref as React.RefObject<HTMLDivElement>}
              className={`aspect-[4/3] rounded-lg overflow-hidden scroll-animate-right ${credibilityAnimation.isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: '0.2s' }}
            >
              <img 
                src="/images/A49.jpg" 
                alt="Performance across arenas" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Content Section 1 - Image Left, Text Right */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-slate-800">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              ref={resultsAnimation.ref as React.RefObject<HTMLDivElement>}
              className={`order-2 md:order-1 scroll-animate-left ${resultsAnimation.isVisible ? 'visible' : ''}`}
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src="/images/A11.jpg" 
                  alt="Performance optimization" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div 
              ref={resultsAnimation.ref as React.RefObject<HTMLDivElement>}
              className={`order-1 md:order-2 scroll-animate-right ${resultsAnimation.isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: '0.2s' }}
            >
              <h2 className="text-3xl font-light mb-6 text-heading">There&apos;s a war on excellence</h2>
              <div className="text-body-lg mb-6 space-y-3">
                <p>In the boardroom, on the battlefield, in the mirror.</p> 
                <p>Collapse isn&apos;t a risk. It&apos;s the default.</p>
                <p><span className="font-bold">James A. King</span> installs systems that win.</p>
                <p>Under pressure. At scale. Without fail.</p>
                <p className="italic">Application only</p>
                <div className="pt-4">
                  <a href="/movement" className="text-sm text-link-underline">
                    Join the movement →
                  </a>
                </div>
              </div>
            </div>
          </div>
              </div>
      </section>

      {/* Content Section 2 - Text Left, Image Right */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-slate-800">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light mb-6 text-heading">Performance is never a coincidence</h2>
              <div className="text-body-lg mb-6 space-y-3">
                <p>Systems that weaponise potential - Diagnose. Rewire. Win.</p>
                <p>Measured in profit, world titles, and mission success.</p>
                <p>Precision-built. Outcome obsessed.</p>
              </div>
              <div className="pt-4">
                <a href="/access" className="text-sm text-link-underline">
                  Request Consideration →
                </a>
              </div>
            </div>
            <div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src="/images/A22.jpg" 
                  alt="Elite performance systems" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Worked With Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-white">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm text-heading-muted uppercase tracking-wider mb-2">Trusted where failure is not an option</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-8 lg:gap-12 items-center">
            {/* Additional Logo 2 */}
            <div className="flex justify-center p-2">
              <img 
                src="/images/trustedby/Citadel Blurred.png" 
                alt="Trusted Partner" 
                className="h-20 w-auto object-contain max-w-[150px]"
              />
              </div>
            
            {/* Harvard Logo */}
            <div className="flex justify-center p-2">
              <img 
                src="/images/trustedby/Hardvard-logo-200-1.png" 
                alt="Harvard" 
                className="h-20 w-auto object-contain max-w-[150px]"
              />
            </div>
            
            {/* Oxford Logo */}
            <div className="flex justify-center p-2">
              <img 
                src="/images/trustedby/Oxford-logo-200-1.png" 
                alt="Oxford" 
                className="h-20 w-auto object-contain max-w-[150px]"
              />
            </div>
            
            {/* Citadel Logo 1 */}
            <div className="flex justify-center p-2">
              <img 
                src="/images/trustedby/SAS Blurred.png" 
                alt="Trusted Partner" 
                className="h-16 w-auto object-contain max-w-[120px]"
              />
            </div>
            
            {/* Premier League Logo */}
            <div className="flex justify-center p-2">
              <img 
                src="/images/trustedby/new_premier_league_logo_2016-17.svg" 
                alt="Premier League" 
                className="h-14 w-auto object-contain max-w-[100px]"
              />
            </div>
            
            {/* Olympic Rings Logo */}
            <div className="flex justify-center p-2">
              <img 
                src="/images/trustedby/toppng.com-olympic-rings-standard-color-png-1020x495.png" 
                alt="Olympic Rings" 
                className="h-14 w-auto object-contain max-w-[100px]"
              />
            </div>
            
            {/* Additional Logo 3 */}
            <div className="flex justify-center p-2">
              <img 
                src="/images/trustedby/NBIM Blurred.png" 
                alt="Trusted Partner" 
                className="h-20 w-auto object-contain max-w-[150px]"
              />
            </div>
          </div>
        </div>
      </section>



 {/* Testimonials */}
 <section 
   ref={testimonialsAnimation.ref as React.RefObject<HTMLElement>}
   className={`py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-slate-800 scroll-animate ${testimonialsAnimation.isVisible ? 'visible' : ''}`}
 >
        <div className="w-full max-w-6xl mx-auto">

          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-out" 
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-6">
                  <div className="max-w-3xl mx-auto">
                    <div className="relative">
                      <div className="absolute -top-4 left-0 text-6xl text-gray-200 dark:text-gray-600 font-light">&ldquo;</div>
                      <p className="text-body-xl pt-8 pb-6 pl-8">
                        {testimonial.quote}
                      </p>
                      <div className="flex items-center space-x-4 pl-8">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                          {testimonial.logo.startsWith('/') ? (
                            <img 
                              src={testimonial.logo} 
                              alt="Logo" 
                              className="w-full h-full object-cover rounded-lg"
                            />
                          ) : (
                            testimonial.logo
                          )}
                        </div>
                        <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-4">
                        <div className="text-sm text-body">
                          <div className="font-medium text-heading">{testimonial.role}</div>
                          <div className="text-heading-muted">{testimonial.organization}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              ))}
            </div>
            
            {/* Navigation */}
            <div className="flex justify-center items-center mt-12 space-x-6">
              <button 
                className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 focus:outline-none"
                onClick={previousTestimonial}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <button 
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
                      index === currentTestimonial 
                        ? 'bg-gray-800 dark:bg-white scale-110' 
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                    onClick={() => showTestimonial(index)}
                  ></button>
                ))}
            </div>
              
              <button 
                className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 focus:outline-none"
                onClick={nextTestimonial}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Product Sections */}
      <section 
        ref={productsAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-slate-800 scroll-animate ${productsAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6 text-heading">The future won&apos;t be saved by average. It&apos;ll be built by the excellent.</h2>
            <p className="text-body-xl">
              Accelerating Excellence. Three delivery systems. <span className="font-bold">One mission.</span>
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {/* The Book */}
            <div className="bg-gray-50 p-8 border border-gray-200 rounded-lg flex flex-col">
              <div className="text-center mb-2">
                <img src="/images/tools/book.jpg" alt="Accelerating Excellence Book" className="w-full h-32 object-cover mx-auto mb-2 rounded-lg" />
              </div>
                             <h3 className="text-xl font-medium mb-2 text-heading text-center">The Book</h3>
               <p className="text-body-xl mb-6 flex-grow text-center">
               The blueprint. In print and out loud.</p>
              <div className="flex justify-center items-center gap-4 mt-auto">
                <a href="#" className="text-sm text-link-underline">Amazon</a>
                <a href="#" className="text-sm text-link-underline">Kindle</a>
                <a href="#" className="text-sm text-link-underline">Audible</a>
              </div>
            </div>

            {/* The Podcast */}
            <div className="bg-gray-50 p-8 border border-gray-200 rounded-lg flex flex-col">
              <div className="text-center mb-2">
                <img src="/images/A17 (Podcast).JPG" alt="Accelerating Excellence Podcast" className="w-full h-32 object-cover mx-auto mb-2 rounded-lg" />
              </div>
                             <h3 className="text-xl font-medium mb-2 text-heading text-center">The Podcast</h3>
               <p className="text-body-xl mb-6 flex-grow text-center">
               The Elite. Thinking out loud.</p>
              <div className="flex justify-center items-center gap-4 mt-auto">
                  <a href="#" className="text-sm text-link-underline">YouTube</a>
                  <a href="#" className="text-sm text-link-underline">Apple</a>
                  <a href="#" className="text-sm text-link-underline">Spotify</a>
        </div>
            </div>

            {/* The App */}
            <div className="bg-gray-50 p-8 border border-gray-200 rounded-lg flex flex-col">
              <div className="text-center mb-2">
                <img src="/images/tools/app.png" alt="Train the Operating System App" className="w-full h-32 object-cover mx-auto mb-2 rounded-lg" />
            </div>
                                                            <h3 className="text-xl font-medium mb-2 text-heading text-center">The App</h3>
                <p className="text-body-xl mb-6 flex-grow text-center">
                Mindset. Discipline. Action. Rewire daily.</p>
              <div className="flex justify-center items-center mt-auto">
                <a href="#" className="text-sm text-link-underline">Apply for access</a>
            </div>
            </div>
          </div>
        </div>
      </section>


      {/* The Offer */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-heading">
            James delivers the operating systems you can&apos;t Google.
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
              <Link href="/" className="text-xl font-light tracking-tight text-gray-900 dark:text-white">
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
