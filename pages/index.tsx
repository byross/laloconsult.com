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
            border: none;
            outline: none;
            box-shadow: none;
          }
          
          html {
            scroll-behavior: smooth;
          }
          
          body {
            font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-weight: 400;
            line-height: 28px;
            font-size: 16px;
            color: #2C2C2C;
            background: #E8E8E8;
            --primary-color: #E1B78C;
            --heading-color: #FFFFFF;
            --secondary-color: #141414;
            --black-120: #101010;
            --black-110: #121212;
            --black-100: #141414;
            --black-90: #2C2C2C;
            --black-80: #434343;
            --black-70: #5B5B5B;
            --black-60: #727272;
            --black-50: #8A8A8A;
            --black-40: #a1a1a1;
            --black-30: #B9B9B9;
            --black-20: #d0d0d0;
            --black-10: #E8E8E8;
            --border-color: #D9DFE7;
          }
          
          .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 1rem;
          }
          
          /* Header Styles */
          .main-header {
            position: relative;
            z-index: 999;
          }
          
          .header-upper {
            background: #101010;
            padding: 20px 0;
            position: relative;
          }
          
          .header-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
          }
          
          .logo a {
            font-size: 2rem;
            font-weight: 900;
            color: #E1B78C;
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 2px;
          }
          
          .nav-outer {
            flex: 1;
            display: flex;
            justify-content: center;
          }
          
          .main-menu {
            display: flex;
            align-items: center;
          }
          
          .navigation {
            display: flex;
            list-style: none;
            gap: 3rem;
            margin: 0;
            padding: 0;
          }
          
          .navigation li {
            position: relative;
          }
          
          .navigation a {
            color: #FFFFFF;
            text-decoration: none;
            font-weight: 500;
            font-size: 16px;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: color 0.3s ease;
          }
          
          .navigation a:hover {
            color: #E1B78C;
          }
          
          .search-btns {
            margin-left: 2rem;
          }
          
          .search-icon {
            color: #FFFFFF;
            font-size: 18px;
            cursor: pointer;
            transition: color 0.3s ease;
          }
          
          .search-icon:hover {
            color: #E1B78C;
          }
          
          /* Hero Section */
          .hero-area {
            background: #FFFFFF;
            padding: 80px 0 100px;
            position: relative;
          }
          
          .hero-content {
            display: flex;
            align-items: center;
            min-height: 600px;
          }
          
          .hero-left {
            flex: 0 0 200px;
            position: relative;
          }
          
          .rotate-hero {
            color: #141414;
            font-size: 120px;
            font-weight: 900;
            text-transform: uppercase;
            transform: rotate(-90deg);
            transform-origin: center;
            position: absolute;
            left: -50px;
            top: 50%;
            white-space: nowrap;
            text-shadow: 2px 0 #141414;
            letter-spacing: -5px;
          }
          
          .hero-right {
            flex: 1;
            margin-left: 100px;
          }
          
          .hero-main-content {
            display: flex;
            align-items: center;
            gap: 4rem;
          }
          
          .hero-text {
            flex: 1;
          }
          
          .hero-text h6 {
            color: #2C2C2C;
            font-size: 24px;
            font-weight: 600;
            line-height: 1.4;
            margin-bottom: 2rem;
          }
          
          .hero-btn {
            display: inline-flex;
            align-items: center;
            background: transparent;
            color: #141414;
            text-decoration: none;
            font-weight: 600;
            font-size: 16px;
            text-transform: uppercase;
            letter-spacing: 1px;
            border: 2px solid #141414;
            padding: 16px 32px;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }
          
          .hero-btn:hover {
            background: #141414;
            color: #FFFFFF;
          }
          
          .hero-btn .btn-icon {
            margin-left: 12px;
            display: flex;
            align-items: center;
          }
          
          .hero-image {
            flex: 0 0 500px;
            height: 500px;
            background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
          }
          
          .hero-image::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23ddd" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
            opacity: 0.3;
          }
          
          .hero-placeholder {
            color: #8A8A8A;
            font-size: 18px;
            font-weight: 500;
            text-align: center;
            z-index: 1;
            position: relative;
          }
          
          /* About Section */
          .about-area {
            background: #E8E8E8;
            padding: 100px 0;
          }
          
          .about-content {
            display: flex;
            align-items: center;
            gap: 4rem;
            min-height: 400px;
          }
          
          .about-text {
            flex: 1;
          }
          
          .about-text h4 {
            color: #141414;
            font-size: 18px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 1.5rem;
          }
          
          .about-text p {
            color: #2C2C2C;
            font-size: 16px;
            line-height: 1.7;
            margin-bottom: 1.5rem;
          }
          
          .about-image {
            flex: 0 0 400px;
            height: 300px;
            background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          }
          
          .about-placeholder {
            color: #8A8A8A;
            font-size: 16px;
            font-weight: 500;
          }
          
          /* Services Section */
          .service-area {
            background: #141414;
            padding: 100px 0;
            color: #FFFFFF;
          }
          
          .section-title {
            text-align: left;
            margin-bottom: 4rem;
          }
          
          .section-title h2 {
            color: #FFFFFF;
            font-size: 80px;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: -3px;
            line-height: 1;
            text-shadow: 2px 0 #FFFFFF;
          }
          
          .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 3rem;
          }
          
          .service-card {
            background: transparent;
            border: 1px solid #2C2C2C;
            padding: 3rem;
            transition: all 0.3s ease;
          }
          
          .service-card:hover {
            border-color: #E1B78C;
            transform: translateY(-5px);
          }
          
          .service-card h3 {
            color: #E1B78C;
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 1.5rem;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          
          .service-item {
            background: transparent;
            border: none;
            padding: 0;
            margin-bottom: 2rem;
            border-bottom: 1px solid #2C2C2C;
            padding-bottom: 1.5rem;
          }
          
          .service-item:last-child {
            border-bottom: none;
            margin-bottom: 0;
          }
          
          .service-item h4 {
            color: #FFFFFF;
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 1rem;
          }
          
          .service-item p {
            color: #B9B9B9;
            line-height: 1.7;
            font-size: 15px;
          }
          
          /* Capabilities Section */
          .capabilities-area {
            background: #E8E8E8;
            padding: 100px 0;
          }
          
          .capabilities-title {
            text-align: center;
            margin-bottom: 4rem;
          }
          
          .capabilities-title h2 {
            color: #141414;
            font-size: 60px;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: -2px;
            line-height: 1;
            text-shadow: 2px 0 #141414;
          }
          
          .capabilities-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
          }
          
          .capability-card {
            background: #FFFFFF;
            border: 1px solid #d0d0d0;
            padding: 2.5rem;
            transition: all 0.3s ease;
            position: relative;
          }
          
          .capability-card:hover {
            border-color: #E1B78C;
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          }
          
          .capability-icon {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
            font-size: 24px;
          }
          
          .capability-icon.blue { background: #dbeafe; color: #2563eb; }
          .capability-icon.green { background: #dcfce7; color: #16a34a; }
          .capability-icon.purple { background: #e9d5ff; color: #9333ea; }
          .capability-icon.orange { background: #fed7aa; color: #ea580c; }
          .capability-icon.red { background: #fecaca; color: #dc2626; }
          .capability-icon.indigo { background: #c7d2fe; color: #4f46e5; }
          
          .capability-card h3 {
            color: #141414;
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 1rem;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          
          .capability-card p {
            color: #2C2C2C;
            font-size: 15px;
            line-height: 1.6;
          }
          
          /* CTA Section */
          .cta-area {
            background: #141414;
            padding: 100px 0;
            text-align: center;
            color: #FFFFFF;
          }
          
          .cta-content h2 {
            color: #FFFFFF;
            font-size: 50px;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: -2px;
            line-height: 1.2;
            margin-bottom: 2rem;
            text-shadow: 2px 0 #FFFFFF;
          }
          
          .cta-content p {
            color: #B9B9B9;
            font-size: 18px;
            line-height: 1.6;
            margin-bottom: 3rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
          }
          
          .cta-button {
            display: inline-flex;
            align-items: center;
            background: #E1B78C;
            color: #141414;
            text-decoration: none;
            font-weight: 600;
            font-size: 16px;
            text-transform: uppercase;
            letter-spacing: 1px;
            padding: 20px 40px;
            transition: all 0.3s ease;
            border: 2px solid #E1B78C;
          }
          
          .cta-button:hover {
            background: transparent;
            color: #E1B78C;
          }
          
          /* Footer */
          .footer {
            background: #101010;
            color: #FFFFFF;
            padding: 60px 0;
            text-align: center;
          }
          
          .footer h3 {
            color: #E1B78C;
            font-size: 24px;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 1rem;
          }
          
          .footer p {
            color: #B9B9B9;
            margin-bottom: 0.5rem;
          }
          
          .footer .copyright {
            color: #727272;
            font-size: 14px;
          }
          
          /* Responsive Design */
          @media (max-width: 1200px) {
            .rotate-hero {
              font-size: 80px;
              left: -30px;
            }
            
            .section-title h2 {
              font-size: 60px;
            }
            
            .capabilities-title h2 {
              font-size: 50px;
            }
            
            .cta-content h2 {
              font-size: 40px;
            }
          }
          
          @media (max-width: 768px) {
            .navigation {
              display: none;
            }
            
            .hero-content {
              flex-direction: column;
              text-align: center;
            }
            
            .hero-left {
              flex: none;
              margin-bottom: 2rem;
            }
            
            .rotate-hero {
              position: static;
              transform: none;
              font-size: 40px;
              margin-bottom: 1rem;
            }
            
            .hero-main-content {
              flex-direction: column;
              gap: 2rem;
            }
            
            .hero-image {
              flex: none;
              width: 100%;
              max-width: 400px;
              height: 300px;
            }
            
            .about-content {
              flex-direction: column;
              gap: 2rem;
            }
            
            .about-image {
              flex: none;
              width: 100%;
              max-width: 400px;
              height: 250px;
            }
            
            .services-grid {
              grid-template-columns: 1fr;
            }
            
            .capabilities-grid {
              grid-template-columns: 1fr;
            }
            
            .section-title h2,
            .capabilities-title h2,
            .cta-content h2 {
              font-size: 40px;
            }
          }
        `}</style>
      </Head>
      
      <main>
        {/* Header */}
        <header className="main-header">
          <div className="header-upper">
            <div className="container">
              <div className="header-inner">
                <div className="logo">
                  <Link href="/">
                    Lalo Consult
                  </Link>
                </div>
                
                <div className="nav-outer">
                  <nav className="main-menu">
                    <ul className="navigation">
                      <li><Link href="/">Home</Link></li>
                      <li><Link href="/">About</Link></li>
                      <li><Link href="/drawings-spec">Drawings</Link></li>
                      <li><Link href="/contracts-editing">Contracts</Link></li>
                      <li><Link href="/contact">Contact</Link></li>
                    </ul>
                  </nav>
                </div>
                
                <div className="search-btns">
                  <span className="search-icon">🔍</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero-area">
          <div className="container">
            <div className="hero-content">
              <div className="hero-left">
                <h1 className="rotate-hero">Design</h1>
              </div>
              
              <div className="hero-right">
                <div className="hero-main-content">
                  <div className="hero-text">
                    <h6>We are New York registered architects specializing in architectural detailing and specifications</h6>
                    <Link href="/contact" className="hero-btn">
                      Get Started
                      <span className="btn-icon">→</span>
                    </Link>
                  </div>
                  
                  <div className="hero-image">
                    <div className="hero-placeholder">
                      Architecture Excellence
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about-area">
          <div className="container">
            <div className="about-content">
              <div className="about-text">
                <h4>Who We Are</h4>
                <p>
                  We help architectural and interior design firms worldwide in two key aspects: 
                  Drawing and Spec production, and AI-powered Contracts solutions.
                </p>
                <p>
                  In other words, we are a just-in-time resource focusing on the non-creative aspect of your business, 
                  freeing you to focus on innovative design and client relationships.
                </p>
              </div>
              
              <div className="about-image">
                <div className="about-placeholder">
                  Professional Services
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="service-area">
          <div className="container">
            <div className="section-title">
              <h2>Our Services</h2>
            </div>
            
            <div className="services-grid">
              <div className="service-card">
                <h3>Drawing and Spec Production</h3>
                
                <div className="service-item">
                  <h4>Working Drawing Production</h4>
                  <p>
                    Outsource your labor-intensive production work to our curated network of production facilities in China. 
                    We act as the single-source coordinator, so you do not deal with language and cultural barriers.
                  </p>
                </div>
                
                <div className="service-item">
                  <h4>Building Products Research</h4>
                  <p>
                    We research building materials and generate Outline Specs. China offers an extensive catalog of unique 
                    building products that can provide distinctive alternatives and cost savings.
                  </p>
                </div>
              </div>
              
              <div className="service-card">
                <h3>AI-Powered Contracts Solution</h3>
                
                <div className="service-item">
                  <h4>Contract Development & Risk Management</h4>
                  <p>
                    Through our partnership with{' '}
                    <a href="https://www.docgility.com" style={{ color: '#E1B78C', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                      Docgility
                    </a>
                    {' '} - a leader in AI-driven contract management - we help identify contractual risks and produce 
                    finalized agreements with unprecedented speed and accuracy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Capabilities */}
        <section className="capabilities-area">
          <div className="container">
            <div className="capabilities-title">
              <h2>Technical Capabilities</h2>
            </div>
            
            <div className="capabilities-grid">
              <div className="capability-card">
                <div className="capability-icon blue">🌐</div>
                <h3>Language</h3>
                <p>English communication for all regular operations and drawings production.</p>
              </div>
              
              <div className="capability-card">
                <div className="capability-icon green">🗣️</div>
                <h3>Multi-language Support</h3>
                <p>AI platform works in multiple languages for international contract projects.</p>
              </div>
              
              <div className="capability-card">
                <div className="capability-icon purple">📐</div>
                <h3>Drawing Platform</h3>
                <p>Latest AutoCAD versions for professional drawing production.</p>
              </div>
              
              <div className="capability-card">
                <div className="capability-icon orange">🤖</div>
                <h3>AI Platform</h3>
                <p>Docgility's Virtual Collaboration Network (VCN) for contract management.</p>
              </div>
              
              <div className="capability-card">
                <div className="capability-icon red">✅</div>
                <h3>Design Standards</h3>
                <p>American (MasterSpec, ASTM) and European (EN, BS) standards compliance.</p>
              </div>
              
              <div className="capability-card">
                <div className="capability-icon indigo">📍</div>
                <h3>Locations</h3>
                <p>Production in Hong Kong and Shenzhen, AI partner in Palo Alto.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-area">
          <div className="container">
            <div className="cta-content">
              <h2>Transform Your Practice Efficiency</h2>
              <p>Discover how our specialized services can optimize your project delivery and risk management</p>
              <Link href="/contact" className="cta-button">
                Contact Us
              </Link>
            </div>
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
