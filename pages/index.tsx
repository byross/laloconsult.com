import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>LaLo Consult - New York Registered Architects</title>
        <meta name="description" content="We are New York registered architects specializing in architectural detailing and specifications. We help architectural/interior design firms worldwide." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section - Simple and Clean */}
        <section className="pt-24 pb-20 md:pt-32 md:pb-32 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-8 leading-tight">
                We are New York registered architects
              </h1>
              
              <div className="bg-white rounded-lg p-8 md:p-12 space-y-6">
                <p className="text-lg leading-relaxed text-foreground">
                  We are New York registered architects specializing in architectural detailing and specifications. 
                  We help architectural/ interior design firms worldwide in two aspects:
                </p>
                
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>Drawing and Spec production.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>AI-powered Contracts solution.</span>
                  </li>
                </ul>
                
                <p className="text-lg leading-relaxed text-foreground pt-4 border-t">
                  In other words, we are a just-in-time resource focusing on the non-creative aspect of your business, 
                  freeing you to focus on innovative design and client relationships.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}