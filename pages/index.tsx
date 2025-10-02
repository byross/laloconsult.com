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
        <style jsx global>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #374151;
            background-color: #f9fafb;
          }
          
          .container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 1rem;
          }
          
          .nav {
            background: white;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            border-bottom: 1px solid #e5e7eb;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          
          .nav-brand {
            font-size: 1.5rem;
            font-weight: bold;
            color: #111827;
            text-decoration: none;
          }
          
          .nav-links {
            display: flex;
            gap: 2rem;
          }
          
          .nav-link {
            color: #374151;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
          }
          
          .nav-link:hover {
            color: #2563eb;
          }
          
          .hero {
            background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
            padding: 5rem 0;
            text-align: center;
          }
          
          .hero h1 {
            font-size: 3.5rem;
            font-weight: bold;
            color: #111827;
            margin-bottom: 2rem;
            line-height: 1.2;
          }
          
          .hero p {
            font-size: 1.25rem;
            color: #4b5563;
            margin-bottom: 3rem;
            max-width: 64rem;
            margin-left: auto;
            margin-right: auto;
          }
          
          .cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            max-width: 80rem;
            margin: 0 auto;
          }
          
          .card {
            background: white;
            border-radius: 1rem;
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
            padding: 2rem;
            transition: all 0.3s;
            transform: translateY(0);
          }
          
          .card:hover {
            box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
            transform: translateY(-4px);
          }
          
          .card-icon {
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
          }
          
          .card-icon.blue {
            background-color: #dbeafe;
            color: #2563eb;
          }
          
          .card-icon.green {
            background-color: #dcfce7;
            color: #16a34a;
          }
          
          .card h3 {
            font-size: 1.5rem;
            font-weight: 600;
            color: #111827;
            margin-bottom: 1rem;
          }
          
          .card p {
            color: #4b5563;
            line-height: 1.7;
          }
          
          .highlight-box {
            background: white;
            border-radius: 1rem;
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
            padding: 2rem;
            max-width: 64rem;
            margin: 4rem auto 0;
          }
          
          .highlight-box p {
            font-size: 1.125rem;
            color: #374151;
            line-height: 1.7;
          }
          
          .section {
            padding: 5rem 0;
          }
          
          .section.white {
            background: white;
          }
          
          .section.gray {
            background: #f9fafb;
          }
          
          .section-title {
            text-align: center;
            margin-bottom: 4rem;
          }
          
          .section-title h2 {
            font-size: 2.5rem;
            font-weight: bold;
            color: #111827;
            margin-bottom: 1.5rem;
          }
          
          .section-title .divider {
            width: 6rem;
            height: 0.25rem;
            background: #2563eb;
            border-radius: 9999px;
            margin: 0 auto;
          }
          
          .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
            gap: 4rem;
          }
          
          .service-card {
            background: #f9fafb;
            border-radius: 1rem;
            padding: 2rem;
          }
          
          .service-card h3 {
            font-size: 1.875rem;
            font-weight: 600;
            color: #111827;
            margin-bottom: 1.5rem;
          }
          
          .service-item {
            background: white;
            border-radius: 0.75rem;
            padding: 1.5rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            margin-bottom: 1.5rem;
          }
          
          .service-item h4 {
            font-size: 1.25rem;
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 0.75rem;
          }
          
          .service-item p {
            color: #4b5563;
            line-height: 1.7;
          }
          
          .capabilities-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
          }
          
          .capability-card {
            background: white;
            border-radius: 0.75rem;
            padding: 1.5rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            transition: box-shadow 0.3s;
          }
          
          .capability-card:hover {
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
          }
          
          .capability-icon {
            width: 3rem;
            height: 3rem;
            border-radius: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1rem;
          }
          
          .capability-icon.blue { background-color: #dbeafe; color: #2563eb; }
          .capability-icon.green { background-color: #dcfce7; color: #16a34a; }
          .capability-icon.purple { background-color: #e9d5ff; color: #9333ea; }
          .capability-icon.orange { background-color: #fed7aa; color: #ea580c; }
          .capability-icon.red { background-color: #fecaca; color: #dc2626; }
          .capability-icon.indigo { background-color: #c7d2fe; color: #4f46e5; }
          
          .capability-card h3 {
            font-size: 1.125rem;
            font-weight: 600;
            color: #111827;
            margin-bottom: 0.5rem;
          }
          
          .capability-card p {
            color: #4b5563;
          }
          
          .cta {
            background: linear-gradient(90deg, #2563eb 0%, #4f46e5 100%);
            padding: 5rem 0;
            text-align: center;
            color: white;
          }
          
          .cta h2 {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 1.5rem;
          }
          
          .cta p {
            font-size: 1.25rem;
            color: #bfdbfe;
            margin-bottom: 2rem;
            max-width: 48rem;
            margin-left: auto;
            margin-right: auto;
          }
          
          .cta-button {
            display: inline-block;
            background: white;
            color: #2563eb;
            padding: 1rem 2rem;
            border-radius: 0.75rem;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.125rem;
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
            transition: all 0.3s;
            transform: translateY(0);
          }
          
          .cta-button:hover {
            background: #f9fafb;
            box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
            transform: translateY(-4px);
          }
          
          .footer {
            background: #111827;
            color: white;
            padding: 3rem 0;
            text-align: center;
          }
          
          .footer h3 {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
          }
          
          .footer p {
            color: #9ca3af;
            margin-bottom: 1rem;
          }
          
          .footer .copyright {
            color: #6b7280;
          }
          
          @media (max-width: 768px) {
            .nav-links {
              display: none;
            }
            
            .hero h1 {
              font-size: 2.5rem;
            }
            
            .cards {
              grid-template-columns: 1fr;
            }
            
            .services-grid {
              grid-template-columns: 1fr;
            }
            
            .capabilities-grid {
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            }
          }
        `}</style>
      </Head>
      
      <main>
        {/* Navigation */}
        <nav className="nav">
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
              <Link href="/" className="nav-brand">
                Lalo Consult
              </Link>
              
              <div className="nav-links">
                <Link href="/" className="nav-link">
                  About us
                </Link>
                <Link href="/drawings-spec" className="nav-link">
                  Drawings and Spec
                </Link>
                <Link href="/contracts-editing" className="nav-link">
                  Contracts editing
                </Link>
                <Link href="/contact" className="nav-link">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <h1>We are New York registered architects</h1>
            <p>
              Specializing in architectural detailing and specifications. We help architectural/ interior design firms worldwide in two aspects:
            </p>
            
            <div className="cards">
              <div className="card">
                <div className="card-icon blue">
                  <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3>Drawing and Spec production</h3>
                <p>
                  Outsource your labor-intensive production work to our curated network of production facilities in China.
                </p>
              </div>
              
              <div className="card">
                <div className="card-icon green">
                  <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3>AI-powered Contracts solution</h3>
                <p>
                  Through our partnership with Docgility, we help you identify contractual risks and produce finalized agreements.
                </p>
              </div>
            </div>
            
            <div className="highlight-box">
              <p>
                In other words, we are a just-in-time resource focusing on the non-creative aspect of your business, 
                freeing you to focus on innovative design and client relationships.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section white">
          <div className="container">
            <div className="section-title">
              <h2>Our Specialized Services</h2>
              <div className="divider"></div>
            </div>
            
            <div className="services-grid">
              {/* Drawing and Spec */}
              <div>
                <div className="service-card">
                  <h3>Drawing and Spec production</h3>
                  
                  <div className="service-item">
                    <h4>Working Drawing production</h4>
                    <p>
                      Outsource your labor-intensive production work to our curated network of production facilities in China. 
                      We act as the single-source coordinator, so you do not deal with language and cultural barriers. 
                      We deliver to you drawing packages that adhere to American (Imperial) or European (Metric) conventions. 
                      Our output will be in English and will match your style and terminologies.
                    </p>
                  </div>
                  
                  <div className="service-item">
                    <h4>Building products research and spec</h4>
                    <p>
                      We research on building materials and then generate an Outline Spec based on the research. 
                      China offers an extensive catalog of unique building products that can provide your clients with 
                      distinctive alternatives and potential cost savings. We serve as your dedicated gateway to this valuable resource.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* AI Contracts */}
              <div>
                <div className="service-card">
                  <h3>AI-powered Contracts solution</h3>
                  
                  <div className="service-item">
                    <h4>Contracts development, negotiation and risk management</h4>
                    <p>
                      The design industry faces inherent contractual risks due to fluid project scopes and complex deliverable definitions. 
                      Most design professionals lack formal legal training, creating additional vulnerability.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                      Through our partnership with{' '}
                      <a href="https://www.docgility.com" style={{ color: '#2563eb', textDecoration: 'underline', fontWeight: '600' }} target="_blank" rel="noopener noreferrer">
                        Docgility
                      </a>
                      {' '} - a leader in AI-driven contract management - we help you identify contractual risks and produce finalized agreements 
                      with unprecedented speed and accuracy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Capabilities */}
        <section className="section gray">
          <div className="container">
            <div className="section-title">
              <h2>Technical Capabilities</h2>
              <div className="divider"></div>
            </div>
            
            <div className="capabilities-grid">
              <div className="capability-card">
                <div className="capability-icon blue">
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <h3>Language</h3>
                <p>For regular communication, product research and drawings production: English only.</p>
              </div>
              
              <div className="capability-card">
                <div className="capability-icon green">
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <h3>Multi-language Support</h3>
                <p>For work on contracts, our AI platform works in multiple languages. This is of particular importance for international projects.</p>
              </div>
              
              <div className="capability-card">
                <div className="capability-icon purple">
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3>Drawing platform</h3>
                <p>Latest AutoCAD versions.</p>
              </div>
              
              <div className="capability-card">
                <div className="capability-icon orange">
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3>AI platform</h3>
                <p>Docgility's Virtual Collaboration Network (VCN).</p>
              </div>
              
              <div className="capability-card">
                <div className="capability-icon red">
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3>Design standards</h3>
                <p>American (MasterSpec, ASTM etc.) and European (EN, BS etc.)</p>
              </div>
              
              <div className="capability-card">
                <div className="capability-icon indigo">
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3>Locations</h3>
                <p>Drawing production in Hong Kong and Shenzhen of China. Our AI partner is a Palo Alto company.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta">
          <div className="container">
            <h2>Transform your practice efficiency while maintaining design excellence.</h2>
            <p>To discover how our specialized services can optimize your project delivery and risk management,</p>
            <Link href="/contact" className="cta-button">
              CONTACT US
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <h3>Lalo Consult</h3>
            <p>Stephen Chiang AIA - Production Director</p>
            <p className="copyright">&copy; 2024 Lalo Consult. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  )
}
