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

      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-2xl font-bold text-primary">
                Lalo Consult
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                About
              </Link>
              <Link href="/drawings-spec" className="text-sm font-medium transition-colors hover:text-primary">
                Drawings
              </Link>
              <Link href="/contracts-editing" className="text-sm font-medium transition-colors hover:text-primary">
                Contracts
              </Link>
              <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>
          
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                  🏗️ New York Registered Architects
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
                  We are New York registered architects
                </h1>
                <p className="mx-auto max-w-[700px] text-lg text-gray-600 md:text-xl dark:text-gray-300 leading-relaxed">
                  Specializing in architectural detailing and specifications. We help architectural and interior design firms worldwide with professional outsourcing services.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-8 text-sm font-semibold text-white shadow-lg transition-all hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  Get Started
                  <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/drawings-spec"
                  className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-gray-300 bg-white/80 backdrop-blur-sm px-8 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-50 hover:border-gray-400 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-100 text-blue-700 hover:bg-blue-200">
                  🚀 Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-gray-900 to-blue-900 dark:from-white dark:to-blue-100 bg-clip-text text-transparent">
                  Our Specialized Services
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-lg leading-relaxed dark:text-gray-300">
                  We provide comprehensive architectural outsourcing services to help you focus on design while we handle the technical aspects.
                </p>
              </div>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              {/* Service Card 1 */}
              <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-900/20 dark:to-indigo-900/20"></div>
                <div className="relative">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Drawing and Spec Production</h3>
                  <p className="mb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                    Outsource your labor-intensive production work to our curated network of production facilities in China. We act as the single-source coordinator, so you do not deal with language and cultural barriers.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Working Drawing Production</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          American (Imperial) or European (Metric) conventions with English output matching your style.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Building Products Research</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Research materials and generate Outline Specs with unique alternatives and cost savings.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Card 2 */}
              <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-purple-900/20 dark:to-pink-900/20"></div>
                <div className="relative">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-lg">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">AI-Powered Contracts Solution</h3>
                  <p className="mb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                    Through our partnership with Docgility - a leader in AI-driven contract management - we help you identify contractual risks and produce finalized agreements with unprecedented speed and accuracy.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Contract Development & Risk Management</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Identify risks and create finalized agreements with AI-powered precision and speed.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Multi-language Support</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          AI platform works in multiple languages for international contract projects.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-indigo-100 text-indigo-700 hover:bg-indigo-200">
                  ⚡ Technical Expertise
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-gray-900 to-indigo-900 dark:from-white dark:to-indigo-100 bg-clip-text text-transparent">
                  Technical Capabilities
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-lg leading-relaxed dark:text-gray-300">
                  Our comprehensive technical expertise ensures high-quality deliverables that meet international standards.
                </p>
              </div>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Capability Card 1 */}
              <div className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-white/20 dark:bg-gray-800/80 dark:border-gray-700/50">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Language</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      English communication for all regular operations and drawings production.
                    </p>
                  </div>
                </div>
              </div>

              {/* Capability Card 2 */}
              <div className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-white/20 dark:bg-gray-800/80 dark:border-gray-700/50">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Multi-language Support</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      AI platform works in multiple languages for international contract projects.
                    </p>
                  </div>
                </div>
              </div>

              {/* Capability Card 3 */}
              <div className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-white/20 dark:bg-gray-800/80 dark:border-gray-700/50">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Drawing Platform</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      Latest AutoCAD versions for professional drawing production.
                    </p>
                  </div>
                </div>
              </div>

              {/* Capability Card 4 */}
              <div className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-white/20 dark:bg-gray-800/80 dark:border-gray-700/50">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">AI Platform</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      Docgility's Virtual Collaboration Network (VCN) for contract management.
                    </p>
                  </div>
                </div>
              </div>

              {/* Capability Card 5 */}
              <div className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-white/20 dark:bg-gray-800/80 dark:border-gray-700/50">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Design Standards</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      American (MasterSpec, ASTM) and European (EN, BS) standards compliance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Capability Card 6 */}
              <div className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-white/20 dark:bg-gray-800/80 dark:border-gray-700/50">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Locations</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      Production in Hong Kong and Shenzhen, AI partner in Palo Alto.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000"></div>
          
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-white/20 bg-white/10 text-white backdrop-blur-sm">
                  🚀 Ready to Get Started?
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  Transform Your Practice Efficiency
                </h2>
                <p className="mx-auto max-w-[600px] text-lg text-blue-100 md:text-xl leading-relaxed">
                  Discover how our specialized services can optimize your project delivery and risk management while maintaining design excellence.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex h-14 items-center justify-center rounded-xl bg-white px-10 text-base font-semibold text-blue-600 shadow-2xl transition-all hover:bg-blue-50 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
                >
                  Contact Us Today
                  <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/drawings-spec"
                  className="inline-flex h-14 items-center justify-center rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-10 text-base font-semibold text-white transition-all hover:bg-white/20 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t bg-background">
          <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
            <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
              <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                &copy; 2024 Lalo Consult. All rights reserved.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
              <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                Stephen Chiang AIA - Production Director
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}