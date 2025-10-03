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
          body {
            font-family: 'Montserrat', sans-serif;
            margin: 0;
            padding: 0;
            background: #141414;
            color: #B9B9B9;
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

          .light-mode {
            background: #E8E8E8;
            color: #2C2C2C;
          }

          .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 15px;
          }

          .black-120-bg {
            background: #101010;
          }

          .black-110-bg {
            background: #121212;
          }

          .py-128 {
            padding: 128px 0;
          }

          .mb-96 {
            margin-bottom: 96px;
          }

          .mb-32 {
            margin-bottom: 32px;
          }

          .mb-16 {
            margin-bottom: 16px;
          }

          .mt-92 {
            margin-top: 92px;
          }

          .pb-64 {
            padding-bottom: 64px;
          }

          .text-center {
            text-align: center;
          }

          .d-flex {
            display: flex;
          }

          .align-items-center {
            align-items: center;
          }

          .justify-content-center {
            justify-content: center;
          }

          .rel {
            position: relative;
          }

          .z-1 {
            z-index: 1;
          }

          .clearfix::after {
            content: "";
            display: table;
            clear: both;
          }

          /* Header Styles */
          .main-header {
            position: relative;
            z-index: 999;
          }

          .header-upper {
            padding: 20px 0;
          }

          .header-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
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

          .navigation {
            display: flex;
            list-style: none;
            gap: 3rem;
            margin: 0;
            padding: 0;
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

          .search-btns .search-icon {
            color: #FFFFFF;
            font-size: 18px;
            cursor: pointer;
            transition: color 0.3s ease;
          }

          .search-btns .search-icon:hover {
            color: #E1B78C;
          }

          /* Hero Section */
          .hero-area {
            padding: 92px 0 64px;
          }

          .carousel {
            position: relative;
          }

          .carousel-indicators {
            position: absolute;
            right: 0;
            bottom: 0;
            left: auto;
            z-index: 15;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0;
            margin: 0;
            list-style: none;
            gap: 16px;
          }

          .carousel-indicators button {
            width: 8px;
            height: 8px;
            border: 1px solid #FFFFFF;
            border-radius: 50%;
            background: transparent;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .carousel-indicators button.active {
            background: #E1B78C;
            border-color: #E1B78C;
          }

          .carousel-item {
            display: none;
          }

          .carousel-item.active {
            display: block;
          }

          .rotate-hero {
            color: #B9B9B9;
            font-size: 220px;
            font-weight: 900;
            text-transform: uppercase;
            transform: rotate(-90deg);
            transform-origin: center;
            position: absolute;
            left: -100px;
            top: 50%;
            white-space: nowrap;
            text-shadow: 2px 0 #B9B9B9;
            letter-spacing: -10px;
          }

          .light-mode .rotate-hero {
            color: #141414;
            text-shadow: 2px 0 #141414;
          }

          .hero-text-img {
            margin-left: 200px;
            gap: 4rem;
          }

          .hero-content h6 {
            color: #B9B9B9;
            font-size: 24px;
            font-weight: 600;
            line-height: 1.4;
            margin-bottom: 2rem;
          }

          .light-mode .hero-content h6 {
            color: #2C2C2C;
          }

          .hero-btn {
            display: inline-flex;
            align-items: center;
            background: transparent;
            color: #FFFFFF;
            text-decoration: none;
            font-weight: 600;
            font-size: 16px;
            text-transform: uppercase;
            letter-spacing: 1px;
            border: 2px solid #FFFFFF;
            padding: 16px 32px;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }

          .light-mode .hero-btn {
            color: #141414;
            border-color: #141414;
          }

          .hero-btn:hover {
            background: #E1B78C;
            border-color: #E1B78C;
            color: #141414;
          }

          .hero-btn .btn-icon {
            margin-left: 12px;
          }

          .bg-img {
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

          .hero-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px;
          }

          /* About Section */
          .about-area {
            background: #E8E8E8;
          }

          .light-mode .about-area {
            background: #E8E8E8;
          }

          .nav-tabs {
            border-bottom: none;
            width: 100%;
          }

          .nav-link {
            border: none;
            padding: 0;
            background: transparent;
          }

          .nav-link.active {
            background: transparent;
            border: none;
          }

          .about-content {
            display: flex;
            align-items: center;
            gap: 4rem;
            min-height: 400px;
          }

          .h4-rotate {
            transform: rotate(-90deg);
            width: 350px;
            position: absolute;
            height: 45.6px;
            left: -159px;
            top: 151px;
            text-align: end;
            color: #141414;
            font-size: 18px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;
          }

          .text {
            flex: 1;
          }

          .text p {
            color: #2C2C2C;
            font-size: 16px;
            line-height: 1.7;
            margin-bottom: 1.5rem;
          }

          .big-image {
            width: 300px;
            height: 200px;
            background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            margin-bottom: 1rem;
          }

          .p-rotate {
            transform: rotate(-90deg);
            position: absolute;
            left: -50px;
            top: 50%;
            color: #141414;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;
          }

          .number {
            position: absolute;
            bottom: -12px;
            right: 14px;
            color: #141414;
            font-size: 120px;
            font-weight: 900;
            line-height: 1;
            text-shadow: 2px 0 #141414;
          }

          .small-image {
            width: 100px;
            height: 80px;
            background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
            border-radius: 10px;
            cursor: pointer;
          }

          /* Services Section */
          .service-area {
            background: #101010;
            color: #FFFFFF;
          }

          .section-heading {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .section-title h2 {
            color: #FFFFFF;
            font-size: 80px;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: -3px;
            line-height: 1;
            text-shadow: 2px 0 #FFFFFF;
            margin: 0;
          }

          .carousel-buttons {
            display: flex;
            gap: 1rem;
          }

          .carousel-buttons button {
            width: 50px;
            height: 50px;
            border: 1px solid #FFFFFF;
            background: transparent;
            color: #FFFFFF;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .carousel-buttons button:hover {
            background: #E1B78C;
            border-color: #E1B78C;
          }

          .service-act {
            position: relative;
            height: 500px;
            background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .service-act img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px;
          }

          .carousel-caption {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 2rem;
            background: linear-gradient(transparent, rgba(0,0,0,0.8));
            border-radius: 0 0 20px 20px;
            color: #FFFFFF;
          }

          .big-text {
            color: #E1B78C;
            font-size: 48px;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: -2px;
            margin-bottom: 16px;
          }

          .carousel-caption p {
            color: #FFFFFF;
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 32px;
          }

          .right-arrow {
            color: #E1B78C;
            font-size: 24px;
            text-decoration: none;
          }

          /* Projects Section */
          .architecture-area {
            background: #E8E8E8;
          }

          .light-mode .architecture-area {
            background: #E8E8E8;
          }

          .sub-title {
            color: #E1B78C;
            font-size: 16px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 16px;
          }

          .architecture-area h2 {
            color: #141414;
            font-size: 60px;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: -2px;
            line-height: 1;
            text-shadow: 2px 0 #141414;
            margin-bottom: 96px;
          }

          .project-filter {
            display: flex;
            list-style: none;
            gap: 2rem;
            margin-bottom: 96px;
            justify-content: center;
          }

          .project-filter a {
            color: #2C2C2C;
            text-decoration: none;
            font-weight: 600;
            font-size: 16px;
            text-transform: uppercase;
            letter-spacing: 1px;
            padding: 10px 20px;
            border-bottom: 2px solid transparent;
            transition: all 0.3s ease;
          }

          .project-filter a:hover,
          .project-filter .current a {
            color: #E1B78C;
            border-bottom-color: #E1B78C;
          }

          .project-active {
            margin-bottom: 4rem;
          }

          .apartment-image {
            margin-bottom: 2rem;
          }

          .apartment-image img {
            width: 100%;
            height: 400px;
            object-fit: cover;
            border-radius: 20px;
          }

          .apartment-content {
            display: flex;
            align-items: center;
            gap: 2rem;
          }

          .pro-title h3 {
            color: #141414;
            font-size: 36px;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: -1px;
            margin-bottom: 1rem;
          }

          .pro-title h3 a {
            color: #141414;
            text-decoration: none;
          }

          .category {
            color: #E1B78C;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;
          }

          .pro-desc p {
            color: #2C2C2C;
            font-size: 16px;
            line-height: 1.7;
            margin-bottom: 1rem;
          }

          .pro-title-haft {
            flex: 1;
          }

          .pro-desc-haft {
            flex: 1;
          }

          .loadmore {
            background: #E1B78C;
            color: #141414;
            border: 2px solid #E1B78C;
            padding: 16px 32px;
            font-weight: 600;
            font-size: 16px;
            text-transform: uppercase;
            letter-spacing: 1px;
            cursor: pointer;
            transition: all 0.3s ease;
            border-radius: 0;
          }

          .loadmore:hover {
            background: transparent;
            color: #E1B78C;
          }

          /* Interior Section */
          .interior-area {
            background: #121212;
            color: #FFFFFF;
          }

          .interior-area h2 {
            color: #FFFFFF;
            font-size: 60px;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: -2px;
            line-height: 1;
            text-shadow: 2px 0 #FFFFFF;
            margin-bottom: 96px;
          }

          .interior-nav {
            margin-bottom: 4rem;
          }

          .interior-act {
            position: relative;
            height: 500px;
            background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .interior-act img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px;
          }

          .interior-act .carousel-caption {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 2rem;
            background: linear-gradient(transparent, rgba(0,0,0,0.8));
            border-radius: 0 0 20px 20px;
            color: #FFFFFF;
          }

          .interior-act h5 {
            color: #FFFFFF;
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 32px;
          }

          .interior-act h5 a {
            color: #FFFFFF;
            text-decoration: none;
          }

          .interior-act p {
            color: #FFFFFF;
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 32px;
          }

          /* CTA Section */
          .cta-area {
            background: #101010;
            color: #FFFFFF;
            padding: 100px 0;
            text-align: center;
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
              font-size: 150px;
              left: -80px;
            }
            
            .section-title h2 {
              font-size: 60px;
            }
            
            .architecture-area h2,
            .interior-area h2 {
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
            
            .hero-text-img {
              flex-direction: column;
              margin-left: 0;
              gap: 2rem;
            }
            
            .rotate-hero {
              position: static;
              transform: none;
              font-size: 60px;
              margin-bottom: 2rem;
            }
            
            .bg-img {
              flex: none;
              width: 100%;
              max-width: 400px;
              height: 300px;
            }
            
            .about-content {
              flex-direction: column;
              gap: 2rem;
            }
            
            .h4-rotate {
              position: static;
              transform: none;
              width: auto;
              margin-bottom: 1rem;
            }
            
            .big-image {
              width: 100%;
              max-width: 300px;
              height: 200px;
            }
            
            .number {
              position: static;
              font-size: 80px;
              margin-top: 1rem;
            }
            
            .section-title h2,
            .architecture-area h2,
            .interior-area h2,
            .cta-content h2 {
              font-size: 40px;
            }
            
            .project-filter {
              flex-wrap: wrap;
              gap: 1rem;
            }
            
            .apartment-content {
              flex-direction: column;
              gap: 1rem;
            }
          }
        `}</style>
      </Head>
      
      <div className="page-wrapper light-mode">
        {/* Header */}
        <header className="main-header">
          <div className="header-upper black-120-bg">
            <div className="container clearfix">
              <div className="header-inner rel d-flex align-items-center">
                <div className="logo-outer">
                  <div className="logo">
                    <Link href="/">Lalo Consult</Link>
                  </div>
                </div>

                <div className="nav-outer ms-auto clearfix">
                  <nav className="main-menu navbar-expand-lg">
                    <div className="navbar-header py-10">
                      <div className="mobile-logo">
                        <Link href="/">Lalo Consult</Link>
                      </div>
                      
                      <button type="button" className="navbar-toggle" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                    </div>

                    <div className="navbar-collapse collapse clearfix">
                      <ul className="navigation clearfix">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/">About</Link></li>
                        <li><Link href="/drawings-spec">Drawings</Link></li>
                        <li><Link href="/contracts-editing">Contracts</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                      </ul>
                    </div>
                  </nav>
                </div>
                
                <div className="search-btns">
                  <span className="search-icon"><i className="far fa-search"></i></span>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Hero Section */}
        <section className="hero-area mt-92 pb-64 black-120-bg">
          <div className="container pb-64">
            <div className="carousel slide" id="recipeCarousel" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#recipeCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#recipeCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#recipeCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner" role="listbox">
                <div className="row carousel-item active">
                  <div className="d-flex">
                    <div className="col-lg-2">
                      <h1 className="rotate-hero">Design</h1>
                    </div>
                    <div className="col-lg-10 d-flex hero-text-img">
                      <div className="hero-content">
                        <div className="wow fadeInUp delay-0-1s">
                          <h6>We are New York registered architects specializing in architectural detailing and specifications</h6>
                          <Link href="/contact" className="hero-btn wow fadeInUp delay-0-1s">
                            Get Started
                            <span className="btn-icon">
                              <i className="fa fa-long-arrow-right"></i>
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="bg-img">
                        <Link href="/contact">
                          <div style={{ 
                            width: '100%', 
                            height: '100%', 
                            background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)',
                            borderRadius: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#8A8A8A',
                            fontSize: '18px',
                            fontWeight: '500'
                          }}>
                            Architecture Excellence
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row carousel-item">
                  <div className="d-flex">
                    <div className="col-lg-2">
                      <h1 className="rotate-hero">Spec</h1>
                    </div>
                    <div className="col-lg-10 d-flex hero-text-img">
                      <div className="hero-content">
                        <div className="wow fadeInUp delay-0-2s">
                          <h6>Professional drawing and specification production services for architectural firms worldwide</h6>
                          <Link href="/drawings-spec" className="hero-btn wow fadeInUp delay-0-1s">
                            Learn More
                            <span className="btn-icon">
                              <i className="fa fa-long-arrow-right"></i>
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="bg-img">
                        <Link href="/drawings-spec">
                          <div style={{ 
                            width: '100%', 
                            height: '100%', 
                            background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)',
                            borderRadius: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#8A8A8A',
                            fontSize: '18px',
                            fontWeight: '500'
                          }}>
                            Drawing Production
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row carousel-item">
                  <div className="d-flex">
                    <div className="col-lg-2">
                      <h1 className="rotate-hero">AI</h1>
                    </div>
                    <div className="col-lg-10 d-flex hero-text-img">
                      <div className="hero-content">
                        <div className="wow fadeInUp delay-0-2s">
                          <h6>AI-powered contract solutions to identify risks and produce finalized agreements</h6>
                          <Link href="/contracts-editing" className="hero-btn wow fadeInUp delay-0-1s">
                            Explore
                            <span className="btn-icon">
                              <i className="fa fa-long-arrow-right"></i>
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="bg-img">
                        <Link href="/contracts-editing">
                          <div style={{ 
                            width: '100%', 
                            height: '100%', 
                            background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)',
                            borderRadius: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#8A8A8A',
                            fontSize: '18px',
                            fontWeight: '500'
                          }}>
                            AI Contracts
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Area */}
        <section className="about-area py-128">
          <div className="container d-flex">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <div className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" role="tab" aria-selected="true">
                  <div className="about-content">
                    <div className="text">
                      <h4 className="h4-rotate">1 - WHO WE ARE</h4>
                      <p className="wow fadeInUp delay-0-2s">We are New York registered architects specializing in architectural detailing and specifications. We help architectural and interior design firms worldwide in two key aspects: Drawing and Spec production, and AI-powered Contracts solutions.</p>
                      <p className="wow fadeInUp delay-0-3s">In other words, we are a just-in-time resource focusing on the non-creative aspect of your business, freeing you to focus on innovative design and client relationships.</p>
                    </div>
                    <div>
                      <div className="big-image wow zoomIn">
                        <div style={{ color: '#8A8A8A', fontSize: '16px', fontWeight: '500' }}>Professional Services</div>
                      </div>
                      <p className="p-rotate">WHO WE ARE</p>
                      <h1 className="number">1</h1>
                    </div>
                    <div className="small-image"></div>
                  </div>
                </div>
              </li>
              <li className="nav-item" role="presentation">
                <div className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" role="tab" aria-selected="false">
                  <div className="about-content">
                    <div className="text">
                      <h4 className="h4-rotate">2 - OUR MISSION</h4>
                      <p className="fadeInUp delay-0-2s animated">We provide comprehensive architectural outsourcing services that enable design firms to focus on their core creative work while we handle the technical production aspects.</p>
                      <p className="fadeInUp delay-0-2s animated">Our mission is to bridge the gap between design creativity and technical execution, delivering high-quality drawings and specifications that meet international standards.</p>
                    </div>
                    <div>
                      <div className="big-image zoomIn animated">
                        <div style={{ color: '#8A8A8A', fontSize: '16px', fontWeight: '500' }}>Technical Excellence</div>
                      </div>
                      <p className="p-rotate">OUR MISSION</p>
                      <h1 className="number">2</h1>
                    </div>
                    <div className="small-image"></div>
                  </div>
                </div>
              </li>
              <li className="nav-item" role="presentation">
                <div className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" role="tab" aria-selected="false">
                  <div className="about-content">
                    <div className="text">
                      <h4 className="h4-rotate">3 - OUR VISION</h4>
                      <p className="fadeInUp delay-0-2s animated">We envision a future where architectural firms can seamlessly integrate AI-powered solutions with traditional design processes to enhance efficiency and reduce risks.</p>
                      <p className="fadeInUp delay-0-2s animated">Our vision is to become the leading provider of architectural outsourcing services, combining cutting-edge technology with traditional craftsmanship.</p>
                    </div>
                    <div>
                      <div className="big-image zoomIn animated">
                        <div style={{ color: '#8A8A8A', fontSize: '16px', fontWeight: '500' }}>Future Innovation</div>
                      </div>
                      <p className="p-rotate">OUR VISION</p>
                      <h1 className="number">3</h1>
                    </div>
                    <div className="small-image"></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        
        {/* Service Section */}
        <section className="service-area black-120-bg py-128 justify-content-center">
          <div className="container-fluid">
            <div className="container d-flex section-heading mb-96">
              <div className="section-title">
                <h2 className="wow fadeInUp delay-0-2s">SERVICES</h2>
              </div>
              <div className="carousel-buttons">
                <button className="prev" type="button" data-bs-target="#servicerecipeCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"><i className="fa fa-long-arrow-left"></i></span>
                </button>
                <button type="button" data-bs-target="#servicerecipeCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"><i className="fa fa-long-arrow-right"></i></span>
                </button>
              </div>
            </div>
            <div className="carousel slide justify-content-center" id="servicerecipeCarousel" data-bs-ride="carousel">
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <div className="col-lg-6 service-act">
                    <Link href="/drawings-spec">
                      <div style={{ 
                        width: '100%', 
                        height: '100%', 
                        background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#8A8A8A',
                        fontSize: '18px',
                        fontWeight: '500'
                      }}>
                        Drawing Production
                      </div>
                    </Link>
                    <div className="carousel-caption">
                      <div className="big-text mb-16">DRAWINGS</div>
                      <p className="mb-32">Outsource your labor-intensive production work to our curated network of production facilities in China.</p>
                      <Link href="/drawings-spec"><span className="right-arrow"><i className="fa fa-long-arrow-right"></i></span></Link>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col-lg-6 service-act">
                    <Link href="/contracts-editing">
                      <div style={{ 
                        width: '100%', 
                        height: '100%', 
                        background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#8A8A8A',
                        fontSize: '18px',
                        fontWeight: '500'
                      }}>
                        AI Contracts
                      </div>
                    </Link>
                    <div className="carousel-caption">
                      <div className="big-text mb-16">CONTRACTS</div>
                      <p className="mb-32">AI-powered contract solutions to identify risks and produce finalized agreements with unprecedented speed.</p>
                      <Link href="/contracts-editing"><span className="right-arrow"><i className="fa fa-long-arrow-right"></i></span></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Projects Area */}
        <section className="architecture-area py-128">
          <div className="container">
            <div className="row rel z-1 justify-content-center">
              <div className="section-title text-center mb-96 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-16">OUR CAPABILITIES</span>
                <h2>TECHNICAL EXPERTISE</h2>
              </div>
            </div>
            <ul className="project-filter tab-style-one justify-content-center nav nav-pills nav-fill mb-96 wow fadeInUp delay-0-4s">
              <li data-filter="*" className="nav-item current">
                <a className="nav-link">ALL</a>
              </li>
              <li className="nav-item" data-filter=".DRAWINGS">
                <a className="nav-link">DRAWINGS</a>
              </li>
              <li className="nav-item" data-filter=".CONTRACTS">
                <a className="nav-link">CONTRACTS</a>
              </li>
              <li className="nav-item" data-filter=".AI">
                <a className="nav-link">AI SOLUTIONS</a>
              </li>
            </ul>
            <div className="tab-content tab-pane project-active">
              <div className="col-lg-12 item DRAWINGS CONTRACTS">
                <div className="row apartment-image wow fadeInLeft delay-0-1s">
                  <Link href="/drawings-spec">
                    <div style={{ 
                      width: '100%', 
                      height: '400px', 
                      background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#8A8A8A',
                      fontSize: '18px',
                      fontWeight: '500'
                    }}>
                      Working Drawings & Specifications
                    </div>
                  </Link>
                </div>
                <div className="row apartment-content wow fadeInRight delay-0-1s rp-0">
                  <div className="col-lg-6 pro-title">
                    <Link href="/drawings-spec"><h3>DRAWING PRODUCTION</h3></Link>
                    <span className="category">DRAWINGS / SPECIFICATIONS</span>
                  </div>
                  <div className="col-lg-6 pro-desc">
                    <p>Outsource your labor-intensive production work to our curated network of production facilities in China. We act as the single-source coordinator, so you do not deal with language and cultural barriers.</p>
                    <p>We deliver drawing packages that adhere to American (Imperial) or European (Metric) conventions. Our output will be in English and will match your style and terminologies.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 item AI">
                <div className="row apartment-image wow fadeInLeft delay-0-1s">
                  <Link href="/contracts-editing">
                    <div style={{ 
                      width: '100%', 
                      height: '400px', 
                      background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#8A8A8A',
                      fontSize: '18px',
                      fontWeight: '500'
                    }}>
                      AI-Powered Contracts
                    </div>
                  </Link>
                </div>
                <div className="row apartment-content wow fadeInRight delay-0-1s rp-0">
                  <div className="pro-title-haft">
                    <Link href="/contracts-editing"><h3>AI CONTRACTS</h3></Link>
                    <span className="category">AI SOLUTIONS</span>
                  </div>
                  <div className="pro-desc-haft">
                    <p>AI-driven contract management to identify risks and produce finalized agreements.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 item CONTRACTS">
                <div className="row apartment-image wow fadeInLeft delay-0-1s">
                  <Link href="/contracts-editing">
                    <div style={{ 
                      width: '100%', 
                      height: '400px', 
                      background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#8A8A8A',
                      fontSize: '18px',
                      fontWeight: '500'
                    }}>
                      Risk Management
                    </div>
                  </Link>
                </div>
                <div className="row apartment-content wow fadeInRight delay-0-1s rp-0">
                  <div className="pro-title-haft">
                    <Link href="/contracts-editing"><h3>RISK MANAGEMENT</h3></Link>
                    <span className="category">CONTRACTS</span>
                  </div>
                  <div className="pro-desc-haft">
                    <p>Professional contract development and risk assessment services.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-area">
          <div className="container">
            <div className="cta-content">
              <h2>Transform Your Practice Efficiency</h2>
              <p>Discover how our specialized services can optimize your project delivery and risk management while maintaining design excellence.</p>
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
      </div>
    </>
  )
}