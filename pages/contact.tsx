import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact us - Lalo Consult</title>
        <meta name="description" content="聯絡 Lalo Consult 獲取專業建築外包和AI合約解決方案服務" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="text-2xl font-bold">
                Lalo Consult
              </Link>
              
              <div className="space-x-6">
                <Link href="/" className="text-white hover:text-gray-300 transition-colors">
                  About us
                </Link>
                <Link href="/drawings-spec" className="text-white hover:text-gray-300 transition-colors">
                  Drawings and Spec
                </Link>
                <Link href="/contracts-editing" className="text-white hover:text-gray-300 transition-colors">
                  Contracts editing
                </Link>
                <Link href="/contact" className="text-white bg-gray-700 px-3 py-1 rounded transition-colors">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Contact us
              </h1>
              <p className="text-xl text-gray-600">
                Transform your practice efficiency while maintaining design excellence. 
                To discover how our specialized services can optimize your project delivery and risk management,
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Details */}
                <div className="space-y-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 rounded-full p-3">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                        <a href="mailto:info@laloconsult.com" className="text-blue-600 hover:text-blue-800">
                          info@laloconsult.com
                        </a>
                        <br />
                        <a href="mailto:stephenchiang@laloconsult.com" className="text-blue-600 hover:text-blue-800">
                          stephenchiang@laloconsult.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 rounded-full p-3">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                        <p className="text-gray-600">
                          Hong Kong: <a href="tel:+85256615516" className="text-blue-600 hover:text-blue-800">+852 5661 5516</a>
                        </p>
                        <p className="text-gray-600">
                          US: <a href="tel:+17253186515" className="text-blue-600 hover:text-blue-800">+1 725 318 6515</a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-100 rounded-full p-3">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Locations</h3>
                        <p className="text-gray-600">Drawing production: Hong Kong and Shenzhen, China</p>
                        <p className="text-gray-600">AI partner: Palo Alto, California</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* QR Codes */}
                  <div className="mt-8">
                    <h3 className="font-semibold text-gray-900 mb-4">Connect with us</h3>
                    <div className="flex space-x-6">
                      <div className="text-center">
                        <div className="bg-gray-200 rounded-lg p-4 w-24 h-24 flex items-center justify-center mb-2">
                          <span className="text-xs text-gray-500">WhatsApp QR Code</span>
                        </div>
                        <p className="text-sm text-gray-600">WhatsApp</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-gray-200 rounded-lg p-4 w-24 h-24 flex items-center justify-center mb-2">
                          <span className="text-xs text-gray-500">WeChat QR Code</span>
                        </div>
                        <p className="text-sm text-gray-600">WeChat</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Contact Form */}
                <div className="bg-gray-50 rounded-lg p-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h2>
                  
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        <option value="drawings-spec">Drawings and Spec production</option>
                        <option value="contracts-editing">AI-powered Contracts solution</option>
                        <option value="both">Both services</option>
                        <option value="consultation">General consultation</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tell us about your project requirements..."
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Lalo Consult. All rights reserved.</p>
            <p className="mt-2 text-gray-400">Stephen Chiang AIA - Production Director</p>
          </div>
        </footer>
      </main>
    </>
  )
}
