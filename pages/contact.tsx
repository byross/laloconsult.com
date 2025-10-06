import React from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - LaLo Consult</title>
        <meta name="description" content="Get in touch with LaLo Consult. Transform your practice efficiency while maintaining design excellence." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen">
        <Navigation />

        {/* Main Content with Burgundy Background */}
        <div className="pt-8 pb-16 md:pt-12 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-12">
              
              {/* Summary Section */}
              <div className="bg-white rounded-lg p-8 md:p-12">
                <p className="text-lg leading-relaxed mb-6">
                  While numerous architectural outsourcing companies exist, few combine deep expertise in architectural 
                  detailing and specification with cutting-edge AI and legal contract management. In other words, we systematize 
                  your technical operations so you can concentrate on creativity and client development.
                </p>

                {/* Technical Specifications */}
                <div className="space-y-6 py-6 border-t">
                  <h2 className="text-2xl font-bold">Technical Specifications</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Language</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• For regular communication, product research and drawings production: English only.</li>
                        <li>• For work on contracts, our AI platform works in multiple languages. This is of particular importance for international projects.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Platforms</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Drawing platform – latest AutoCAD versions.</li>
                        <li>• AI platform – Docgility's Virtual Collaboration Network (VCN).</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Design Standards</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• American (MasterSpec, ASTM etc.) and European (EN, BS etc.)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Locations</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Drawing production in Hong Kong and Shenzhen of China.</li>
                        <li>• Our AI partner is a Palo Alto company.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="py-6 border-t">
                  <p className="text-lg leading-relaxed mb-6">
                    Transform your practice efficiency while maintaining design excellence. To discover how our specialized 
                    services can optimize your project delivery and risk management, <strong>CONTACT US:</strong>
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-lg p-8 md:p-12">
                <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Email Section */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2 text-muted-foreground">Email</h3>
                      <a 
                        href="mailto:info@laloconsult.com" 
                        className="text-lg text-primary hover:underline block"
                      >
                        info@laloconsult.com
                      </a>
                      <a 
                        href="mailto:stephenchiang@laloconsult.com" 
                        className="text-lg text-primary hover:underline block"
                      >
                        stephenchiang@laloconsult.com
                      </a>
                    </div>
                  </div>

                  {/* QR Codes Section */}
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <div className="aspect-square rounded-lg overflow-hidden bg-white border">
                          <img 
                            src="/images/qr-codes/WhatsApp.jpg" 
                            alt="WhatsApp QR Code" 
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <p className="text-sm text-center text-muted-foreground">WhatsApp</p>
                      </div>
                      <div className="space-y-2">
                        <div className="aspect-square rounded-lg overflow-hidden bg-white border">
                          <img 
                            src="/images/qr-codes/WeChat.jpg" 
                            alt="WeChat QR Code" 
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <p className="text-sm text-center text-muted-foreground">WeChat</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Note */}
                <div className="mt-12 pt-8 border-t text-center">
                  <p className="text-muted-foreground">
                    <strong>Stephen Chiang AIA</strong> - Production Director
                  </p>
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
