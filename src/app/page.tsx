"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Button from '@/components/Button'

export default function Home() {
  // James A. King website homepage
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  
  const testimonials = [
    {
      quote: "Practical, but not obvious, keys to getting the most from teams. Truly brilliant.",
      role: "General Stanley A. McChrystal",
      organization: "Former CO, Joint Special Operations Command"
    },
    {
      quote: "James transformed selection and training and an exponential increase in revenue followed immediately.",
      role: "Muwaffaq Salti",
      organization: "Founder & Chairman, Mandara Capital"
    },
    {
      quote: "One of the world's leading performance experts. James will teach you everything you need to know about elite performance.",
      role: "Joe De Sena",
      organization: "Founder & CEO, Spartan Race; 3× NYT Bestselling Author"
    },
    {
      quote: "James provides unique insight into cultivating elite performance — a true route map to excellence.",
      role: "Senior Member",
      organization: "MI5 – The Security Service"
    },
    {
      quote: "James combines energy, ingenuity, an elite mindset and highly actionable principles.",
      role: "Gorm Thomassen",
      organization: "CIO, AKO Capital"
    },
    {
      quote: "Delivering at the leading edge of special operations… James insights have revolutionised my approach in the most demanding circumstances.",
      role: "Former CO",
      organization: "UK Special Mission Unit"
    },
    {
      quote: "Greatness is not achieved accidentally… James has a deliberate and accessible roadmap for maximising elite performance.",
      role: "Mark Shapiro",
      organization: "President & CEO, Toronto Blue Jays"
    },
    {
      quote: "I have seen first-hand how James builds elite performance individuals and organisations… His strategies are unique, innovative and proven.",
      role: "Jason Henderson",
      organization: "Master Chief, Navy SEAL NSWDG (Retired)"
    },
    {
      quote: "James has the veritable blueprint for building a high performance environment.",
      role: "Jerry Dipoto",
      organization: "EVP & GM, Seattle Mariners Baseball Club"
    },
    {
      quote: "I have watched and admired James design and build sustainable human performance programmes that deliver results.",
      role: "Former Command Sergeant Major",
      organization: "UK Special Mission Units"
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
      <section className="relative pt-44 pb-48 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/A1 (Home).jpg')`
            }}
          />
          {/* Preload critical images */}
          <link rel="preload" as="image" href="/images/A1 (Home).jpg" />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 text-white">
              One constant.
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12">
                The world's most profitable Hedge funds. Multiple No.1 ranked Athletes. Tier one Special Forces units. Different arenas. Different uniforms. One Constant. <span className="font-bold">James A. King.</span>
            </p>
            <Button
              href="/enquire"
              size="lg"
              variant="secondary"
            >
              Request a private briefing
            </Button>
          </div>
        </div>
      </section>

      {/* Worked With Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="w-full max-w-6xl mx-auto">
                      <div className="text-center mb-12">
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Worked With</p>
              <h2 className="text-2xl font-light text-gray-700">Elite organizations worldwide</h2>
            </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-8 lg:gap-12 items-center">
            {/* Additional Logo 2 */}
            <div className="flex justify-center p-2">
              <img 
                src="/images/trustedby/output-onlinepngtools (1).png" 
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
            
            {/* Additional Logo 1 */}
            <div className="flex justify-center p-2">
              <img 
                src="/images/trustedby/output-onlinepngtools.png" 
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
                src="/images/trustedby/output-onlinepngtools (2).png" 
                alt="Trusted Partner" 
                className="h-20 w-auto object-contain max-w-[150px]"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Bio */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="w-full max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2">
              <p className="text-lg text-gray-600 leading-relaxed">
                James A. King has spent over 15 years working with elite performers across military, sports, and business sectors. His systematic approach to performance optimization has been validated through measurable outcomes with special operations units, professional athletes, and Fortune 500 executives. King's methodology combines cutting-edge neuroscience with practical application, delivering results that transform how individuals and organizations approach peak performance.
              </p>
            </div>
            <div className="text-center">
              <img src="/images/B42.jpg" alt="James A. King" className="w-40 h-40 rounded-full mx-auto mb-4 object-cover" />
            </div>
          </div>
        </div>
      </section>


     

      {/* Content Section 1 - Image Left, Text Right */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src="/images/A22.jpg" 
                  alt="Performance optimization" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-light mb-6 text-gray-900">Excellence isn't discovered - it's engineered.</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Performance is never a coincidence. James specialises in building systems that weaponise potential - proven through profit, world titles, and mission success. Precision-built. Outcome obsessed.
              </p>
              <p className="text-gray-600 leading-relaxed font-medium">
                Application only.
              </p>
            </div>
          </div>
              </div>
      </section>

      {/* Content Section 2 - Text Left, Image Right */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light mb-6 text-gray-900">Elite Performance Systems</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                There's a war on excellence — in the boardroom, on the battlefield, in the mirror. Collapse isn't a risk. It's the default. James installs systems that win - Under pressure. At scale. Without fail.
              </p>
              <p className="text-gray-600 leading-relaxed font-medium">
                Application only.
              </p>
            </div>
            <div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src="/images/B32.jpg" 
                  alt="Elite performance systems" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

 {/* Testimonials */}
 <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="w-full max-w-6xl mx-auto">

          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-out" 
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-6">
                  <div className="max-w-2xl mx-auto">
                    <div className="relative">
                      <div className="absolute -top-4 left-0 text-6xl text-gray-200 font-light">"</div>
                      <p className="text-xl text-gray-700 leading-relaxed pt-8 pb-6 pl-8">
                        {testimonial.quote}
                      </p>
                      <div className="border-l-4 border-gray-300 pl-8">
                        <div className="text-sm text-gray-600">
                          <div className="font-medium text-gray-800">{testimonial.role}</div>
                          <div className="text-gray-500">{testimonial.organization}</div>
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
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200 focus:outline-none"
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
                        ? 'bg-gray-800 scale-110' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    onClick={() => showTestimonial(index)}
                  ></button>
                ))}
            </div>
              
              <button 
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200 focus:outline-none"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* The Book */}
            <div className="bg-gray-50 p-8 border border-gray-200 rounded-lg">
              <div className="text-center mb-6">
                <img src="/images/tools/book.jpg" alt="Accelerating Excellence Book" className="w-full h-32 object-cover mx-auto mb-4 rounded-lg" />
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">#1 International Bestseller</div>
              <h3 className="text-xl font-medium mb-4 text-gray-900">The Book — Accelerating Excellence</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                This isn't motivation. It's the operating system — codifying principles proven in profit, world titles, and mission success. No more guesswork. The system's in the book. Own it. Fix it. Finish it.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors border-b border-gray-300 hover:border-gray-900">Amazon</a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors border-b border-gray-300 hover:border-gray-900">Kindle</a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors border-b border-gray-300 hover:border-gray-900">Audible</a>
              </div>
            </div>

            {/* The Podcast */}
            <div className="bg-gray-50 p-8 border border-gray-200 rounded-lg">
              <div className="text-center mb-6">
                <img src="/images/tools/podcast.jpg" alt="Accelerating Excellence Podcast" className="w-full h-32 object-cover mx-auto mb-4 rounded-lg" />
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">The best don't guess — they run systems.</div>
              <h3 className="text-xl font-medium mb-4 text-gray-900">The Podcast — Accelerating Excellence with James A. King</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Gold medallists. Special forces commanders. Billion-dollar operators. From world title fights to covert ops to billion-dollar trades — where performance is non-negotiable. Raw conversations. Proven systems.
              </p>
              <div className="space-y-3">
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

            {/* The App */}
            <div className="bg-gray-50 p-8 border border-gray-200 rounded-lg">
              <div className="text-center mb-6">
                <img src="/images/tools/app.png" alt="Train the Operating System App" className="w-full h-32 object-cover mx-auto mb-4 rounded-lg" />
            </div>
              <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">The black box for your brain.</div>
              <h3 className="text-xl font-medium mb-4 text-gray-900">The App — Train the Operating System</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your mental gym. Always loaded. Built by the elite, for the elite. Every session is a rep. Every rep rewires your edge.
              </p>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">Join the waitlist →</span>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors border-b border-gray-300 hover:border-gray-900">Sign up</a>
            </div>
            </div>
          </div>
        </div>
      </section>


      {/* Credibility Line */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg text-gray-600">
            Special operations • Tier-one funds • Premier League • World champions • Fortune 500 CEOs
          </p>
        </div>
      </section>



      {/* Advisory CTA */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-8 text-gray-900">Ready to optimize your performance?</h2>
          <p className="text-lg text-gray-600 mb-12">
            Schedule a private briefing to discuss your specific performance challenges and objectives.
          </p>
          <Button
            href="/enquire"
            size="lg"
            variant="primary"
          >
            Contact James
          </Button>
          <p className="text-sm text-gray-500 mt-4">Response within 24 hours</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="w-full max-w-6xl mx-auto">
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
