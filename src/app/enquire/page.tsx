"use client"

import Link from 'next/link'
import { useState, useRef } from 'react'
import Button from '@/components/Button'
import { useParallax } from '@/hooks/useParallax'

export default function Enquire() {
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

      {/* Page Intro */}
      <section className="pt-44 pb-24 px-4 sm:px-6 lg:px-8">
        <div 
          className="max-w-4xl mx-auto text-center"
          style={{
            transform: `translateY(${parallaxOffset * 0.1}px)`
          }}
        >
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8">
            For missions that matter.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Choose the path that fits your mission. Every engagement is outcome-driven, high-stakes, and by design.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Private Advisory Partnerships */}
            <div className="bg-gray-50 p-8 border border-gray-200 rounded-lg flex flex-col h-full">
              <div className="text-center mb-6">
                <img src="/images/enquire/advisory.jpg" alt="Private Advisory Partnerships" className="w-full h-40 object-cover mx-auto mb-4 rounded-lg" />
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Embedded where the stakes allow no second place.</div>
              <h3 className="text-xl font-medium mb-4 text-gray-900">Private Advisory Partnerships</h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                Tier-One military commands. World championship teams. $65B+ hedge funds. Sovereign wealth institutions. Proprietary performance architecture proven in profit, world titles, and mission success. Small. Concentrated. Outcome-obsessed.
              </p>
              <div className="mt-auto">
                <Button
                  onClick={() => handleServiceSelect('Private Advisory Partnerships')}
                  size="lg"
                  variant="secondary"
                >
                  Request Consideration →
                </Button>
              </div>
            </div>

            {/* Strategic Speaking Engagements */}
            <div className="bg-gray-50 p-8 border border-gray-200 rounded-lg flex flex-col h-full">
              <div className="text-center mb-6">
                <img src="/images/enquire/speaking.png" alt="Strategic Speaking Engagements" className="w-full h-40 object-cover mx-auto mb-4 rounded-lg" />
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Operating systems you can&apos;t Google.</div>
              <h3 className="text-xl font-medium mb-4 text-gray-900">Strategic Speaking Engagements</h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                War rooms, boardrooms, and global stages where performance is non-negotiable. Impact over applause, first-hand over folklore. Proven at TEDx, Oxford, MIT, Harvard, Olympic teams, EPL, NFL, and Tier One commands.
              </p>
              <div className="mt-auto">
                <Button
                  onClick={() => handleServiceSelect('Strategic Speaking Engagements')}
                  size="lg"
                  variant="secondary"
                >
                  Apply for Consideration →
                </Button>
              </div>
            </div>

            {/* The Movement & Media */}
            <div className="bg-gray-50 p-8 border border-gray-200 rounded-lg flex flex-col h-full">
              <div className="text-center mb-6">
                <img src="/images/enquire/media.jpg" alt="The Movement & Media" className="w-full h-40 object-cover mx-auto mb-4 rounded-lg" />
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Align with the mission. Amplify the reach.</div>
              <h3 className="text-xl font-medium mb-4 text-gray-900">The Movement & Media</h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                Strategic sponsorships, media appearances, and partnerships that expand the mission and sharpen the impact. Past collaborations: Nike, Sky Sports, TEDx, Men&apos;s Health, Oxford, and global conferences.
              </p>
              <div className="mt-auto">
                <Button
                  onClick={() => handleServiceSelect('The Movement & Media')}
                  size="lg"
                  variant="secondary"
                >
                  Apply to Align →
                </Button>
              </div>
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
                Thank you for your enquiry. We&apos;ll be in touch within 48 hours to discuss your requirements.
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
          <h2 className="text-3xl font-light mb-4 text-gray-900">
            Every enquiry is reviewed personally. Excellence is by application, not by accident.
          </h2>
          <p className="text-lg text-gray-600">
            Submit only if you&apos;re ready to execute.
          </p>
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
