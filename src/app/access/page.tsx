"use client"

import Link from 'next/link'
import { useState, useRef } from 'react'
import Button from '@/components/Button'
import Footer from '@/components/Footer'
import { useParallax } from '@/hooks/useParallax'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Access() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const parallaxOffset = useParallax(0.3)
  
  // Scroll animation hooks
  const heroAnimation = useScrollAnimation(0.3)
  const advisoryAnimation = useScrollAnimation(0.2)
  const keynotesAnimation = useScrollAnimation(0.2)
  const mediaAnimation = useScrollAnimation(0.2)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
    service: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const formRef = useRef<HTMLElement>(null)

  const handleServiceSelect = (service: string) => {
    setSelectedService(service)
    setFormData(prev => ({ ...prev, service }))
    setShowForm(true)
    
    // Auto-scroll to form after a brief delay to ensure it's rendered
    setTimeout(() => {
      formRef.current?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      })
    }, 100)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '45b4fa22-77c7-4d25-8526-a8d76a5bbceb',
          name: formData.name,
          email: formData.email,
          company: formData.company,
          role: formData.role,
          message: formData.message,
          service: selectedService,
          subject: `${selectedService} Enquiry from ${formData.name}`,
          from_name: formData.name,
          reply_to: formData.email,
        }),
      })

      const result = await response.json()
      
      if (result.success) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          role: '',
          message: '',
          service: selectedService
        })
      } else {
        throw new Error(result.message || 'Form submission failed')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBackToCards = () => {
    setShowForm(false)
    setSelectedService('')
    setSubmitStatus('idle')
  }

  const scrollToAdvisory = () => {
    // Use setTimeout to ensure the element is rendered
    setTimeout(() => {
      const element = document.getElementById('advisory-section')
      if (element) {
        const elementPosition = element.offsetTop
        const offsetPosition = elementPosition - 100 // Account for fixed navbar
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      } else {
        // Fallback: scroll to a known position
        window.scrollTo({
          top: 800, // Approximate position of first section
          behavior: 'smooth'
        })
      }
    }, 100)
  }

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
              backgroundImage: `url('/images/A5.jpg')`,
              transform: `translateY(${parallaxOffset}px)`
            }}
          />
          {/* Preload critical images */}
          <link rel="preload" as="image" href="/images/A5.jpg" />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <div className="max-w-4xl">
            <h1 
              ref={heroAnimation.ref as React.RefObject<HTMLHeadingElement>}
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-8 md:mb-12 text-white leading-[0.9] md:leading-tight scroll-animate ${heroAnimation.isVisible ? 'visible' : ''}`}
            >
              <span className="font-thin">Access is by design.</span><br /> <span className="font-normal">Few, not many.</span>
            </h1>
            <div className={`scroll-animate ${heroAnimation.isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <div onClick={scrollToAdvisory}>
              <Button
                size="lg"
                variant="secondary"
              >
                Request a private briefing
              </Button>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Advisory Partnerships */}
      <section 
        ref={advisoryAnimation.ref as React.RefObject<HTMLElement>}
        id="advisory-section"
        className={`py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-zinc-800 dark:bg-zinc-900 scroll-animate ${advisoryAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="text-sm text-heading-muted uppercase tracking-wider mb-2">TALENT STARTS THE RACE. OUR SYSTEMS DECIDE IT.</div>
              <h2 className="text-3xl font-light mb-8 text-heading">Private Advisory Partnerships</h2>
              <div>
                <p className="text-body-lg">Not a service. A system.</p>
              </div>
              <div>
                <p className="text-body-lg">Installed inside the world&apos;s most demanding arenas.</p>
              </div>
              <div>
                <p className="text-body-lg">Outcomes measured in billions. Teams scaled to number one. Arenas disrupted.</p>
              </div>
              <div>
                <p className="text-body-lg">Owner, board, and command-level only.</p>
              </div>
              <div className="pt-4">
                <Button
                  onClick={() => handleServiceSelect('Private Advisory Partnerships')}
                  size="lg"
                  variant="secondary"
                >
                  For Consideration
                </Button>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src="/images/B16.jpg" 
                alt="Private Advisory Partnerships" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Speaking Engagements */}
      <section 
        ref={keynotesAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-zinc-800 dark:bg-zinc-950 scroll-animate ${keynotesAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src="/images/A2 (Movement).png" 
                alt="Strategic Speaking Engagements" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-8">
              <div className="text-sm text-heading-muted uppercase tracking-wider mb-2">The operating systems you can&apos;t Google.</div>
              <h2 className="text-3xl font-light mb-8 text-heading">Keynotes - Application Only</h2>
              <div>
                <p className="text-body-lg">War rooms. Boardrooms. Global stages.</p>
              </div>
              <div>
                <p className="text-body-lg">Excellence. Non-negotiable.</p>
              </div>
              <div>
                <p className="text-body-lg">Not inspiration. Installation.</p>
              </div>
              <div>
                <p className="text-body-lg">No Margin. No Failure.</p>
              </div>
              <div className="pt-4">
                <Button
                  onClick={() => handleServiceSelect('Strategic Speaking Engagements')}
                  size="lg"
                  variant="secondary"
                >
                  Apply for Consideration →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Movement & Media */}
      <section 
        ref={mediaAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-zinc-800 dark:bg-zinc-900 scroll-animate ${mediaAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="text-sm text-heading-muted uppercase tracking-wider mb-2">partnerships that sharpen impact.</div>
              <h2 className="text-3xl font-light mb-8 text-heading">The Movement & Media</h2>
              <div>
                <p className="text-body-lg">Sponsorships: Aligned brands only.</p>
              </div>
              <div>
                <p className="text-body-lg">Media: Platforms where performance is the currency.</p>
              </div>
              <div>
                <p className="text-body-lg">Alliances: Partnerships that extend reach and sharpen impact.</p>
              </div>
              <div>
                <p className="text-body-lg">Proven. Global. Selective.</p>
              </div>
              <div className="pt-4">
                <Button
                  onClick={() => handleServiceSelect('The Movement & Media')}
                  size="lg"
                  variant="secondary"
                >
                  Apply to Align →
                </Button>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src="/images/A16.jpg" 
                alt="The Movement & Media" 
                className="w-full h-full object-cover object-left"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      {showForm && (
        <section ref={formRef} className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900">
        <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-light text-heading">
                {selectedService} Enquiry
              </h2>
              <button
                onClick={handleBackToCards}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Services
              </button>
            </div>
          
          {submitStatus === 'success' && (
            <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 text-center">
                Thank you for your enquiry. We&apos;ll be in touch to discuss your requirements.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 text-center">
                There was an error submitting your enquiry. Please try again or contact us directly at james@jamesaking.com
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="access_key" value="45b4fa22-77c7-4d25-8526-a8d76a5bbceb" />
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-heading mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-gray-900 dark:focus:ring-zinc-600 focus:border-transparent transition-colors duration-200"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-heading mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-gray-900 dark:focus:ring-zinc-600 focus:border-transparent transition-colors duration-200"
                  placeholder="your.email@company.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-heading mb-2">
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-gray-900 dark:focus:ring-zinc-600 focus:border-transparent transition-colors duration-200"
                  placeholder="Your company or organization"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-heading mb-2">
                  Role / Position
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-gray-900 dark:focus:ring-zinc-600 focus:border-transparent transition-colors duration-200"
                  placeholder="Your role or position"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-heading mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-gray-900 dark:focus:ring-zinc-600 focus:border-transparent transition-colors duration-200 resize-none"
                placeholder="Please describe your enquiry and how we can help accelerate your pursuit of excellence..."
              />
            </div>

            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                  variant="primary"
              >
                  {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
              </Button>
            </div>
          </form>
          </div>
        </section>
      )}

      {/* Closing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-heading">
          Impact. Nothing else.
          </h2>
        </div>
      </section>


      <Footer />
    </main>
  )
}
