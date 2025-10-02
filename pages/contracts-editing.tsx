import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function ContractsEditing() {
  return (
    <>
      <Head>
        <title>Contracts Editing - Lalo Consult</title>
        <meta name="description" content="AI驅動的合約解決方案，提供合約開發、談判和風險管理服務" />
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
                <Link href="/contracts-editing" className="text-white bg-gray-700 px-3 py-1 rounded transition-colors">
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
                AI-powered Contracts solution
              </h1>
              <p className="text-xl text-gray-600 text-center">
                Contracts development, negotiation and risk management
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="space-y-12">
                {/* Problem Statement */}
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    The Challenge in Design Industry
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                    The design industry faces inherent contractual risks due to fluid project scopes and complex deliverable definitions. 
                    Most design professionals lack formal legal training, creating additional vulnerability.
                  </p>
                </div>

                {/* Solution */}
                <div className="bg-gray-50 rounded-lg p-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                    Our AI-Powered Solution
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed text-center mb-8">
                    Through our partnership with{' '}
                    <a 
                      href="https://www.docgility.com" 
                      className="text-blue-600 underline font-semibold hover:text-blue-800" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Docgility
                    </a>
                    {' '} - a leader in AI-driven contract management - we help you identify contractual risks and produce finalized agreements with unprecedented speed and accuracy.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-8 mt-8">
                    <div className="text-center">
                      <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Risk Identification</h3>
                      <p className="text-gray-600">AI-powered analysis to identify potential contractual risks</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Speed & Accuracy</h3>
                      <p className="text-gray-600">Unprecedented speed and accuracy in contract generation</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-language Support</h3>
                      <p className="text-gray-600">AI platform works in multiple languages for international projects</p>
                    </div>
                  </div>
                </div>

                {/* Docgility Platform */}
                <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                    Docgility Virtual Collaboration Network (VCN)
                  </h2>
                  
                  <div className="bg-gray-900 text-white rounded-lg p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                          <div className="w-4 h-4 bg-black rounded-full"></div>
                        </div>
                        <span className="text-xl font-bold">DOCGILITY</span>
                      </div>
                      <span className="text-gray-300 italic">Accelerate Contracts!</span>
                    </div>
                    
                    <div className="text-sm text-gray-300 mb-4">
                      <div className="flex space-x-4">
                        <span>FILE</span>
                        <span>EDIT</span>
                        <span>ACT</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 rounded p-4">
                      <div className="text-sm text-gray-300 mb-2">User: John Owens - Owner, Premium</div>
                      <div className="text-sm text-gray-300 mb-4">
                        Name: -doc4.docx | Type: procurement contract playbook | Group: Auto Procurement
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">×</span>
                          </div>
                          <span className="text-sm">TERMINATION - 30 or 60 days notice</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">×</span>
                          </div>
                          <span className="text-sm">INDEMNIFICATION - Auto Procurement, Borrower, Lender</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">×</span>
                          </div>
                          <span className="text-sm">CHILD LABOR PRACTICES</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">×</span>
                          </div>
                          <span className="text-sm">MANUFACTURER'S DEFECT</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-center">
                    Click on any flagged item to launch detailed analysis and recommendations
                  </p>
                </div>

                {/* Benefits */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900">For Design Professionals</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• No formal legal training required</li>
                      <li>• Automated risk identification</li>
                      <li>• Standardized contract templates</li>
                      <li>• Multi-language support</li>
                      <li>• Real-time collaboration</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900">For International Projects</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Cross-border contract management</li>
                      <li>• Local legal compliance</li>
                      <li>• Cultural barrier elimination</li>
                      <li>• Time zone coordination</li>
                      <li>• Cost-effective solutions</li>
                    </ul>
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
              Transform your contract management process
            </h2>
            <p className="text-xl mb-8">
              Discover how our AI-powered solutions can optimize your project delivery and risk management.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
