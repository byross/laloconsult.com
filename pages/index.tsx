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
      </Head>
      
      <main className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <div className="text-2xl font-bold">
                Lalo Consult
              </div>
              
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
                <Link href="/contact" className="text-white hover:text-gray-300 transition-colors">
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
                We are New York registered architects specializing in architectural detailing and specifications.
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We help architectural/ interior design firms worldwide in two aspects:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Drawing and Spec production</h3>
                  <p className="text-gray-600">
                    Outsource your labor-intensive production work to our curated network of production facilities in China.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">AI-powered Contracts solution</h3>
                  <p className="text-gray-600">
                    Through our partnership with Docgility, we help you identify contractual risks and produce finalized agreements.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  In other words, we are a just-in-time resource focusing on the non-creative aspect of your business, 
                  freeing you to focus on innovative design and client relationships.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Our Specialized Services
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                {/* Drawing and Spec */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-900">Drawing and Spec production</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium text-gray-800 mb-2">Working Drawing production</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Outsource your labor-intensive production work to our curated network of production facilities in China. 
                        We act as the single-source coordinator, so you do not deal with language and cultural barriers. 
                        We deliver to you drawing packages that adhere to American (Imperial) or European (Metric) conventions. 
                        Our output will be in English and will match your style and terminologies.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-gray-800 mb-2">Building products research and spec</h4>
                      <p className="text-gray-600 leading-relaxed">
                        We research on building materials and then generate an Outline Spec based on the research. 
                        China offers an extensive catalog of unique building products that can provide your clients with 
                        distinctive alternatives and potential cost savings. We serve as your dedicated gateway to this valuable resource.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* AI Contracts */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-900">AI-powered Contracts solution</h3>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium text-gray-800 mb-2">Contracts development, negotiation and risk management</h4>
                    <p className="text-gray-600 leading-relaxed">
                      The design industry faces inherent contractual risks due to fluid project scopes and complex deliverable definitions. 
                      Most design professionals lack formal legal training, creating additional vulnerability. Through our partnership with 
                      <a href="https://www.docgility.com" className="text-blue-600 underline font-semibold" target="_blank" rel="noopener noreferrer">Docgility</a> - 
                      a leader in AI-driven contract management - we help you identify contractual risks and produce finalized agreements 
                      with unprecedented speed and accuracy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Capabilities */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Technical Capabilities
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Language</h4>
                    <p className="text-gray-600">For regular communication, product research and drawings production: English only.</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Language</h4>
                    <p className="text-gray-600">For work on contracts, our AI platform works in multiple languages. This is of particular importance for international projects.</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Drawing platform</h4>
                    <p className="text-gray-600">Latest AutoCAD versions.</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">AI platform</h4>
                    <p className="text-gray-600">Docgility's Virtual Collaboration Network (VCN).</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Design standards</h4>
                    <p className="text-gray-600">American (MasterSpec, ASTM etc.) and European (EN, BS etc.)</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Locations</h4>
                    <p className="text-gray-600">Drawing production in Hong Kong and Shenzhen of China. Our AI partner is a Palo Alto company.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Transform your practice efficiency while maintaining design excellence.
            </h2>
            <p className="text-xl mb-8">
              To discover how our specialized services can optimize your project delivery and risk management,
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
