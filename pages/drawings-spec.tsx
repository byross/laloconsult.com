import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function DrawingsSpec() {
  return (
    <>
      <Head>
        <title>Drawings and Spec - Lalo Consult</title>
        <meta name="description" content="專業建築圖紙製作和規範服務，提供施工圖製作和建築產品研究" />
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
                <Link href="/drawings-spec" className="text-white bg-gray-700 px-3 py-1 rounded transition-colors">
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
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Drawing and Spec production
              </h1>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Working Drawing Production */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900">Working Drawing production</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Outsource your labor-intensive production work to our curated network of production facilities in China. 
                    We act as the single-source coordinator, so you do not deal with language and cultural barriers. 
                    We deliver to you drawing packages that adhere to American (Imperial) or European (Metric) conventions. 
                    Our output will be in English and will match your style and terminologies.
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Benefits:</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Single-source coordination</li>
                      <li>• No language barriers</li>
                      <li>• American (Imperial) or European (Metric) standards</li>
                      <li>• English output matching your style</li>
                      <li>• Cost-effective production facilities</li>
                    </ul>
                  </div>
                </div>

                {/* Building Products Research */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900">Building products research and spec</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We research on building materials and then generate an Outline Spec based on the research. 
                    China offers an extensive catalog of unique building products that can provide your clients with 
                    distinctive alternatives and potential cost savings. We serve as your dedicated gateway to this valuable resource.
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Research Process:</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Comprehensive material research</li>
                      <li>• Outline Spec generation</li>
                      <li>• Access to unique Chinese products</li>
                      <li>• Cost-saving alternatives</li>
                      <li>• Dedicated resource gateway</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Technical Specifications
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Drawing Standards</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-800">American Standards</h4>
                      <p className="text-gray-600">MasterSpec, ASTM, and other US conventions</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">European Standards</h4>
                      <p className="text-gray-600">EN, BS, and other European conventions</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Software Platform</h4>
                      <p className="text-gray-600">Latest AutoCAD versions</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Production Locations</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-800">Hong Kong</h4>
                      <p className="text-gray-600">Primary production facility</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Shenzhen, China</h4>
                      <p className="text-gray-600">Extended production network</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Language</h4>
                      <p className="text-gray-600">English communication and output</p>
                    </div>
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
              Ready to streamline your drawing production?
            </h2>
            <p className="text-xl mb-8">
              Contact us to discuss your specific project requirements and how we can help optimize your workflow.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
            >
              GET STARTED
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
