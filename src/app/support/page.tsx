"use client"

import { useState } from 'react'
import Button from '@/components/Button'
import Footer from '@/components/Footer'

export default function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website: '' // Honeypot field for spam protection
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [showForm, setShowForm] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Honeypot spam protection - silently reject if filled
    if (formData.website) {
      return
    }
    
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
          message: formData.message,
          subject: `Tier 1 App Support Request from ${formData.name}`,
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
          message: '',
          website: ''
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

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Full-bleed Background Image Section with Overlay Content */}
      <section className="relative w-full min-h-screen flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-no-repeat transition-all duration-700 ease-in-out"
          style={{
            backgroundImage: `url('/images/Mockup.png')`,
            backgroundSize: '22%',
            backgroundPosition: showForm ? 'center center' : '85% center'
          }}
        />
        {/* Overlay when form is visible */}
        {showForm && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70 transition-opacity duration-500 z-5"></div>
        )}
        
        {/* Mock Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-30 w-full px-4 sm:px-6 lg:px-8 py-4 bg-black/20 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center">
              <img 
                src="/images/TIER1.png" 
                alt="Tier 1" 
                className="h-6 w-auto"
              />
            </div>
          </div>
        </nav>
        
        {/* Content Overlay */}
        <div className="relative z-10 w-full pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            {/* Left-Right Container */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Side - Description */}
              <div className="space-y-8">
                <div className="flex flex-col items-center lg:items-start">
                  <div className="space-y-8 md:space-y-12 text-center lg:text-left">
                    <div className="space-y-6 md:space-y-8">
                      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[0.9] md:leading-tight">
                        Beta user?
                      </h1>
                      <div className="text-body-lg space-y-3 text-white">
                        <p>Use the contact box to raise any support requests.</p>
                        <p>We&apos;re here to help.</p>
                      </div>
                    </div>
                    {!showForm && (
                      <div className="pt-4">
                        <Button
                          onClick={() => setShowForm(true)}
                          size="lg"
                          variant="primary"
                        >
                          Raise a support request
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form Overlay */}
              <div className={`lg:sticky lg:top-20 transition-all duration-500 ease-in-out ${showForm ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-8 lg:p-10 shadow-2xl relative">
                  <button
                    onClick={() => setShowForm(false)}
                    className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                    aria-label="Close form"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <h3 className="text-2xl font-light text-white mb-6">Get Support</h3>
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-500/20 border border-green-400/30 rounded-lg backdrop-blur-sm">
                      <p className="text-green-100 text-sm text-center">
                        Thank you for your message. We&apos;ll be in touch shortly.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-500/20 border border-red-400/30 rounded-lg backdrop-blur-sm">
                      <p className="text-red-100 text-sm text-center">
                        There was an error submitting your message. Please try again.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input type="hidden" name="access_key" value="45b4fa22-77c7-4d25-8526-a8d76a5bbceb" />
                    {/* Honeypot field - hidden from users but visible to bots */}
                    <input
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      tabIndex={-1}
                      autoComplete="off"
                      style={{
                        position: 'absolute',
                        left: '-9999px',
                        width: '1px',
                        height: '1px',
                        opacity: 0,
                        pointerEvents: 'none'
                      }}
                      aria-hidden="true"
                    />
                    
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-white/20 rounded-lg bg-white/95 backdrop-blur-sm text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:border-white/40 transition-all duration-200"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-white/20 rounded-lg bg-white/95 backdrop-blur-sm text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:border-white/40 transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-white/20 rounded-lg bg-white/95 backdrop-blur-sm text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:border-white/40 transition-all duration-200 resize-none"
                        placeholder="Describe your issue or question..."
                      />
                    </div>

                    <div>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        size="lg"
                        variant="primary"
                        className="w-full"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

