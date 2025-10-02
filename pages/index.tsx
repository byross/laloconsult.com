import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lalo Consult - 專業建築外包服務</title>
        <meta name="description" content="紐約註冊建築師，專精建築細部設計和規範，提供圖紙製作和AI驅動合約解決方案" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <main className="min-h-screen bg-gray-50 font-montserrat">
        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-gray-900">
                  Lalo Consult
                </Link>
              </div>
              
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  About us
                </Link>
                <Link href="/drawings-spec" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Drawings and Spec
                </Link>
                <Link href="/contracts-editing" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Contracts editing
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                We are New York registered architects
              </h1>
              <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                Specializing in architectural detailing and specifications. We help architectural/ interior design firms worldwide in two aspects:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Drawing and Spec production</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Outsource your labor-intensive production work to our curated network of production facilities in China.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">AI-powered Contracts solution</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Through our partnership with Docgility, we help you identify contractual risks and produce finalized agreements.
                  </p>
                </div>
              </div>
              
              <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 leading-relaxed">
                  In other words, we are a just-in-time resource focusing on the non-creative aspect of your business, 
                  freeing you to focus on innovative design and client relationships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Specialized Services
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Drawing and Spec */}
              <div className="space-y-8">
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-3xl font-semibold text-gray-900 mb-6">Drawing and Spec production</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">Working Drawing production</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Outsource your labor-intensive production work to our curated network of production facilities in China. 
                        We act as the single-source coordinator, so you do not deal with language and cultural barriers. 
                        We deliver to you drawing packages that adhere to American (Imperial) or European (Metric) conventions. 
                        Our output will be in English and will match your style and terminologies.
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">Building products research and spec</h4>
                      <p className="text-gray-600 leading-relaxed">
                        We research on building materials and then generate an Outline Spec based on the research. 
                        China offers an extensive catalog of unique building products that can provide your clients with 
                        distinctive alternatives and potential cost savings. We serve as your dedicated gateway to this valuable resource.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* AI Contracts */}
              <div className="space-y-8">
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-3xl font-semibold text-gray-900 mb-6">AI-powered Contracts solution</h3>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Contracts development, negotiation and risk management</h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      The design industry faces inherent contractual risks due to fluid project scopes and complex deliverable definitions. 
                      Most design professionals lack formal legal training, creating additional vulnerability.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Through our partnership with{' '}
                      <a href="https://www.docgility.com" className="text-blue-600 underline font-semibold hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                        Docgility
                      </a>
                      {' '} - a leader in AI-driven contract management - we help you identify contractual risks and produce finalized agreements 
                      with unprecedented speed and accuracy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Capabilities */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Technical Capabilities
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Language</h3>
                <p className="text-gray-600">For regular communication, product research and drawings production: English only.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-language Support</h3>
                <p className="text-gray-600">For work on contracts, our AI platform works in multiple languages. This is of particular importance for international projects.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Drawing platform</h3>
                <p className="text-gray-600">Latest AutoCAD versions.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI platform</h3>
                <p className="text-gray-600">Docgility's Virtual Collaboration Network (VCN).</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Design standards</h3>
                <p className="text-gray-600">American (MasterSpec, ASTM etc.) and European (EN, BS etc.)</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Locations</h3>
                <p className="text-gray-600">Drawing production in Hong Kong and Shenzhen of China. Our AI partner is a Palo Alto company.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Transform your practice efficiency while maintaining design excellence.
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              To discover how our specialized services can optimize your project delivery and risk management,
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              CONTACT US
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Lalo Consult</h3>
              <p className="text-gray-400 mb-4">Stephen Chiang AIA - Production Director</p>
              <p className="text-gray-500">&copy; 2024 Lalo Consult. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
