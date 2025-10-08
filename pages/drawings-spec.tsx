import React from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function DrawingsSpec() {

  return (
    <>
      <Head>
        <title>Drawings and Spec - LaLo Consult</title>
        <meta name="description" content="Professional drawing and specification services. Outsource your production work to our curated network in China." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen">
        <Navigation />

        {/* Main Content with Burgundy Background */}
        <div className="pt-8 pb-0 md:pt-12 md:pb-0">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-0">
              
              {/* Page Title */}
              <div className="bg-white rounded-lg px-8 pt-8 md:px-12 md:pt-12" style={{ paddingBottom: '0px' }}>
                <h1 className="text-3xl md:text-4xl font-bold mb-1">
                  Drawing and Spec production
                </h1>
              </div>

              {/* Combined Working Drawing Production and Building Products Section */}
              <div className="bg-white rounded-lg p-8 md:p-12">
                <h2 className="text-2xl font-bold mb-2">Working Drawing production</h2>
                
                <p className="text-xl leading-relaxed mb-6">
                  Outsource your labor-intensive production work to our curated network of production facilities in China. 
                  We act as the single-source coordinator, so you do not deal with language and cultural barriers. 
                  We deliver to you drawing packages that adhere to American (Imperial) or European (Metric) conventions. 
                  Our output will be in English and will match your style and terminologies.
                </p>

                {/* Building Products Research Section - moved up */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Building products research and spec</h2>
                  
                  <p className="text-xl leading-relaxed">
                    We research on building materials and then generate an Outline Spec based on the research. 
                    China offers an extensive catalog of unique building products that can provide your clients with 
                    distinctive alternatives and potential cost savings. We serve as your dedicated gateway to this valuable resource.
                  </p>
                </div>

                {/* Photo Grid - All images with thin borders, no click functionality */}
                <div className="space-y-4">
                  {/* Office Photos Row - 3:2 aspect ratio */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-[3/2] bg-gray-200 rounded-lg overflow-hidden border border-gray-300">
                      <img 
                        src="/images/Office Photo 1.jpg" 
                        alt="Office environment in China" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-[3/2] bg-gray-200 rounded-lg overflow-hidden border border-gray-300">
                      <img 
                        src="/images/Office Photo 2.jpg" 
                        alt="Office workspace in China" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Technical Photos Row - All with same aspect ratio and borders */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-[3/2] bg-gray-200 rounded-lg overflow-hidden border border-gray-300">
                      <img 
                        src="/images/Technical Drawing 1.jpg" 
                        alt="Technical drawing example" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="aspect-[3/2] bg-gray-200 rounded-lg overflow-hidden border-t-2 border-b-2 border-gray-400">
                      <img 
                        src="/images/Product Catalog.jpg" 
                        alt="Building products catalog interface" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  )
}
