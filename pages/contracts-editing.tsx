import React, { useState } from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function ContractsEditing() {
  const [showVideo, setShowVideo] = useState(false)

  const handleVideoClick = () => {
    setShowVideo(true)
  }

  const handleVideoClose = () => {
    setShowVideo(false)
  }

  return (
    <>
      <Head>
        <title>Contracts Editing - LaLo Consult</title>
        <meta name="description" content="AI-powered contract solutions. Partnership with Docgility for risk management and contract development." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-primary">
        <Navigation />

        {/* Main Content with Burgundy Background */}
        <div className="pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-12">
              
              {/* Page Title */}
              <div className="bg-white rounded-lg p-8 md:p-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  AI-powered Contracts solution
                </h1>
              </div>

              {/* Contracts Development Section */}
              <div className="bg-white rounded-lg p-8 md:p-12">
                <h2 className="text-2xl font-bold mb-6">
                  Contracts development, negotiation and risk management
                </h2>
                
                <p className="text-lg leading-relaxed mb-6">
                  The design industry faces inherent contractual risks due to fluid project scopes and complex deliverable definitions. 
                  Most design professionals lack formal legal training, creating additional vulnerability. Through our partnership with{' '}
                  <a 
                    href="https://www.docgility.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bold underline decoration-2 hover:text-primary transition-colors"
                  >
                    Docgility
                  </a>
                  {' '}- a leader in AI-driven contract management—we help you identify contractual risks and produce finalized agreements with 
                  unprecedented speed and accuracy.
                </p>

                {/* Docgility Platform Screenshot - Clickable to play video */}
                <div className="mt-8 cursor-pointer group" onClick={handleVideoClick}>
                  <div className="relative rounded-lg overflow-hidden aspect-video">
                    <img 
                      src="/video/Docgility_cover.jpg" 
                      alt="Docgility Platform Preview" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/40 rounded-full flex items-center justify-center group-hover:bg-white/50 transition-colors">
                        <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-2">
                    Click to play demo video
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Video Modal */}
        {showVideo && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative w-full max-w-4xl">
              {/* Close button */}
              <button
                onClick={handleVideoClose}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Video player */}
              <div className="bg-black rounded-lg overflow-hidden aspect-video">
                <video
                  controls
                  autoPlay
                  className="w-full h-full"
                  onEnded={handleVideoClose}
                  poster="/video/Docgility_cover.jpg"
                >
                  <source src="/video/Docgility.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        )}
        
        <Footer />
      </div>
    </>
  )
}
