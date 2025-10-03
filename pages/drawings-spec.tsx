import React, { useState } from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'

export default function DrawingsSpec() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc)
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  return (
    <>
      <Head>
        <title>Drawings and Spec - LaLo Consult</title>
        <meta name="description" content="Professional drawing and specification services. Outsource your production work to our curated network in China." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-primary">
        <Navigation />

        {/* Main Content with Burgundy Background */}
        <div className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-12">
              
              {/* Page Title */}
              <div className="bg-white rounded-lg p-8 md:p-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  Drawing and Spec production
                </h1>
              </div>

              {/* Working Drawing Production Section */}
              <div className="bg-white rounded-lg p-8 md:p-12">
                <h2 className="text-2xl font-bold mb-6">Working Drawing production</h2>
                
                <p className="text-lg leading-relaxed mb-8">
                  Outsource your labor-intensive production work to our curated network of production facilities in China. 
                  We act as the single-source coordinator, so you do not deal with language and cultural barriers. 
                  We deliver to you drawing packages that adhere to American (Imperial) or European (Metric) conventions. 
                  Our output will be in English and will match your style and terminologies.
                </p>

                {/* Photo Grid - Office photos on top, Technical photos in one row below */}
                <div className="space-y-4">
                  {/* Office Photos Row - 3:2 aspect ratio */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-[3/2] bg-muted rounded-lg overflow-hidden">
                      <img 
                        src="/images/Office Photo 1.jpg" 
                        alt="Office environment in China" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-[3/2] bg-muted rounded-lg overflow-hidden">
                      <img 
                        src="/images/Office Photo 2.jpg" 
                        alt="Office workspace in China" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Technical Photos Row - Natural aspect ratios, clickable for zoom */}
                  <div className="grid grid-cols-2 gap-4">
                    <div 
                      className="bg-muted overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => handleImageClick('/images/Technical Drawing 1.jpg')}
                    >
                      <img 
                        src="/images/Technical Drawing 1.jpg" 
                        alt="Technical drawing example" 
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <div 
                      className="bg-muted overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => handleImageClick('/images/Product Catalog.jpg')}
                    >
                      <img 
                        src="/images/Product Catalog.jpg" 
                        alt="Building products catalog interface" 
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Building Products Research Section */}
              <div className="bg-white rounded-lg p-8 md:p-12">
                <h2 className="text-2xl font-bold mb-6">Building products research and spec</h2>
                
                <p className="text-lg leading-relaxed">
                  We research on building materials and then generate an Outline Spec based on the research. 
                  China offers an extensive catalog of unique building products that can provide your clients with 
                  distinctive alternatives and potential cost savings. We serve as your dedicated gateway to this valuable resource.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Image Zoom Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={handleCloseModal}
          >
            <div className="relative max-w-6xl max-h-[90vh]">
              {/* Close button */}
              <button
                onClick={handleCloseModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Zoomed image */}
              <div className="bg-white rounded-lg overflow-hidden max-h-[90vh]">
                <img
                  src={selectedImage}
                  alt="Zoomed view"
                  className="max-w-full max-h-[90vh] object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
