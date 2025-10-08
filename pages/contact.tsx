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
        <div className="pt-8 pb-0 md:pt-12 md:pb-0">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-0">
              
              {/* Summary Section */}
              <div className="rounded-lg p-8 md:p-12">
                <p className="text-2xl leading-relaxed mb-6">
                While numerous architectural outsourcing companies exist, few can combine expertise in architectural detailing and specification with cutting-edge AI-powered contract management. In other words, we systematize your technical/ legal operations so you can concentrate on creativity and client development.
                </p>

                {/* Technical Specifications */}
                <div className="space-y-6 py-6 border-t">
                  <h2 className="text-2xl font-bold">Specifics</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2 text-xl">Language</h3>
                      <ul className="space-y-2 text-muted-foreground text-lg">
                        <li>• For regular communication, product research and drawings production: English only.</li>
                        <li>• For work on contracts, our AI platform works in multiple languages. This is of particular importance for international projects.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2 text-xl">Platforms</h3>
                      <ul className="space-y-2 text-muted-foreground text-lg">
                        <li>• Drawing platform – latest AutoCAD versions.</li>
                        <li>• AI platform – Docgility's Virtual Collaboration Network (VCN).</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2 text-xl">Design Standards</h3>
                      <ul className="space-y-2 text-muted-foreground text-lg">
                        <li>• American (MasterSpec, ASTM etc.) and European (EN, BS etc.)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2 text-xl">Locations</h3>
                      <ul className="space-y-2 text-muted-foreground text-lg">
                        <li>• Drawing production in Hong Kong and Shenzhen of China.</li>
                        <li>• Our AI partner is a Palo Alto company.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="py-6 border-t">
                  <p className="text-2xl leading-relaxed mb-6">
                  Our specialized services optimize your project delivery and contract management; thereby freeing you up for creative pursuits. <strong>Find out more...</strong>
                  </p>
                </div>

                {/* Contact Information */}
                <div className="py-6 border-t">
                  <h2 className="text-2xl font-bold mb-8">Contact</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Email Section */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2 text-xl">Email</h3>
                        <a 
                          href="mailto:info@laloconsult.com" 
                          className="text-xl text-primary hover:underline block"
                        >
                          info@laloconsult.com
                        </a>
                        <a 
                          href="mailto:stephenchiang@laloconsult.com" 
                          className="text-xl text-primary hover:underline block"
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
                          <p className="text-lg text-center text-muted-foreground">WhatsApp</p>
                        </div>
                        <div className="space-y-2">
                          <div className="aspect-square rounded-lg overflow-hidden bg-white border">
                            <img 
                              src="/images/qr-codes/WeChat.jpg" 
                              alt="WeChat QR Code" 
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <p className="text-lg text-center text-muted-foreground">WeChat</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer Note */}
                  <div className="mt-12 pt-8 border-t text-center">
                    <p className="text-xl text-muted-foreground">
                      <strong>Stephen Chiang AIA</strong> - Production Director
                    </p>
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
