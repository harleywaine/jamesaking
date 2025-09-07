"use client"

import Link from 'next/link'
import { useState, useRef } from 'react'
import Button from '@/components/Button'
import { useParallax } from '@/hooks/useParallax'

export default function Access() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const parallaxOffset = useParallax(0.3)
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
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData)
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        message: '',
        service: selectedService
      })
    } catch {
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
      <section className="relative pt-44 pb-48 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/A13.jpg')`,
              transform: `translateY(${parallaxOffset}px)`
            }}
          />
          {/* Preload critical images */}
          <link rel="preload" as="image" href="/images/A13.jpg" />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-12 text-white leading-tight">
              <span className="font-thin">For missions </span> <span className="font-normal">that matter.</span>
            </h1>
            <Button
              href="/access"
              size="lg"
              variant="secondary"
            >
              Request a private briefing
            </Button>
          </div>
        </div>
      </section>

      {/* Private Advisory Partnerships */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">TALENT STARTS THE RACE. OUR SYSTEMS DECIDE IT.</div>
              <h2 className="text-3xl font-light mb-8 text-gray-900">Private Advisory Partnerships</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Embedded with Tier-One military commands. World championship teams. $65B+ hedge funds, and sovereign wealth institutions. A select portfolio of superstar athletes and leaders.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Proprietary performance architecture. Proven in the most unforgiving arenas — measured in profit, world titles, and mission success. Turning potential into winning machines. Owner, board, and command-level only.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We don&apos;t scale clients. We scale outcomes. By design.
              </p>
              <div className="pt-4">
                <Button
                  onClick={() => handleServiceSelect('Private Advisory Partnerships')}
                  size="lg"
                  variant="secondary"
                >
                  Request Consideration →
                </Button>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src="/images/access/advisory.jpg" 
                alt="Private Advisory Partnerships" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Speaking Engagements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src="/images/access/speaking.png" 
                alt="Strategic Speaking Engagements" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Operating systems you can&apos;t Google.</div>
              <h2 className="text-3xl font-light mb-8 text-gray-900">Keynotes - Application Only</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                War rooms. Boardrooms. Global stages. When performance is non-negotiable.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Impact over applause. First-hand over folklore. Category five in human form. Proven on international stages:
              </p>
              <ul className="text-lg text-gray-600 leading-relaxed space-y-2">
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Global Institutions: TEDx, Oxford, MIT, Harvard</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Elite Sport: Olympic teams, EPL, NFL</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Special Operations & Intelligence: Tier One units, UKIC leadership</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Finance: Hedge funds, sovereign institutions</span>
                </li>
              </ul>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Align with the mission. Amplify the reach.</div>
              <h2 className="text-3xl font-light mb-8 text-gray-900">The Movement & Media</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Sponsorships: Brand and podcast partners built on excellence, performance, and global impact.
              </p>
              <ul className="text-lg text-gray-600 leading-relaxed space-y-2">
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Media: TV, print, stage, and digital platforms where performance is the only currency.</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Strategic Partnerships: Projects that expand the mission and sharpen the impact.</span>
                </li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed">
                Past collaborations include Nike, Sky Sports, TEDx, Men&apos;s Health, Oxford, global conferences, and leading publications.
              </p>
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
                src="/images/A16.PNG" 
                alt="The Movement & Media" 
                className="w-full h-full object-cover object-left"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      {showForm && (
        <section ref={formRef} className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 bg-gray-50">
        <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-light text-gray-900">
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
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors duration-200"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors duration-200"
                  placeholder="your.email@company.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors duration-200"
                  placeholder="Your company or organization"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                  Role / Position
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors duration-200"
                  placeholder="Your role or position"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors duration-200 resize-none"
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

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              Alternatively, you can contact us directly at{' '}
              <a 
                href="mailto:james@jamesaking.com" 
                className="text-gray-900 hover:underline transition-colors duration-200"
              >
                james@jamesaking.com
              </a>
            </p>
          </div>
          </div>
        </section>
      )}

      {/* Closing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-8 text-gray-900">
          Impact First. Narrow by design. Alignment determines access.
          </h2>
          
          {/* Social Media Icons */}
          <div className="flex justify-center gap-6">
            <a 
              href="#" 
              className="p-3 rounded-full border border-gray-300 hover:border-gray-900 transition-colors group"
              aria-label="Instagram"
            >
              <svg 
                className="w-6 h-6 text-gray-600 group-hover:text-gray-900 transition-colors" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full border border-gray-300 hover:border-gray-900 transition-colors group"
              aria-label="LinkedIn"
            >
              <svg 
                className="w-6 h-6 text-gray-600 group-hover:text-gray-900 transition-colors" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
              <Link href="/" className="text-xl font-light tracking-tight text-gray-900 mb-4">
                JAMES A. KING
              </Link>
              <div className="flex gap-4">
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
              </div>
            </div>
            <div className="flex flex-col space-y-2 text-sm text-gray-500">
              <Link href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
              <a href="mailto:james@jamesaking.com" className="hover:text-gray-900 transition-colors">james@jamesaking.com</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
