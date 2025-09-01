"use client"

import Link from 'next/link'
import { useState } from 'react'
import Button from '@/components/Button'

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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
              backgroundImage: `url('/images/B49.jpg')`
            }}
          />
          {/* Preload critical images */}
          <link rel="preload" as="image" href="/images/B49.jpg" />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 text-white">
              Tier One Special Mission Units. $65bn+ hedge funds. Multiple World Champion Athletes.
            </h1>
            <div className="text-sm text-gray-300 uppercase tracking-wider mb-4">#1 Bestselling Author</div>
            <p className="text-xl md:text-2xl text-gray-200 mb-12">
              When failure isn't an option, they call James A. King. From special operations selection to billion-dollar returns and a bestselling book, James lives the standards he installs.
            </p>
            <Button
              href="/enquire"
              size="lg"
              variant="secondary"
            >
              Enquire Now
            </Button>
          </div>
        </div>
      </section>

      {/* Outcomes Across Arenas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-light mb-8 text-gray-900">Different worlds. One system.</h2>
              <div className="border-l-4 border-gray-300 pl-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  "Built and led trading teams that delivered $2bn+ net profit and 4,000% risk-adjusted returns."
                </p>
              </div>
              <div className="border-l-4 border-gray-300 pl-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  "Designed and directed performance programs inside Tier One Special Mission Units."
                </p>
              </div>
              <div className="border-l-4 border-gray-300 pl-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  "Coached athletes to Champions Leagues, Majors, Olympic Gold, and World Championships."
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src="/images/A12.JPG" 
                alt="Performance across arenas" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Forged Under Fire */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed">
            <p className="text-xl text-gray-700 leading-relaxed">
              James walked the walk — then built the system. Performance architecture forged in the most unforgiving arenas: from the kill house to the trading floor, from world titles to Olympic podiums. The system scales. The results hold.
            </p>
          </div>
        </div>
      </section>

      {/* Authority & Thought Leadership */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-light mb-8 text-gray-900">More than a practitioner — a builder of frameworks.</h2>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-600">Bestselling author of Accelerating Excellence</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-600">Case studies delivered at Oxford, Harvard, MIT, Princeton</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-600">Featured by Sky Sports, TEDx, Men's Health</p>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src="/images/A21.jpg" 
                alt="Thought leadership and frameworks" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Offer */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-gray-900">
            James delivers the operating systems you can't Google.
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Category Five in human form. Available by application only.
          </p>
                      <Button
              href="/enquire"
              size="lg"
              variant="primary"
            >
              Request Access
            </Button>
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
