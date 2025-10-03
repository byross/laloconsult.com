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
        <section className="py-24 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  We are New York registered architects
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Specializing in architectural detailing and specifications. We help architectural and interior design firms worldwide with professional outsourcing services.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Get Started
                </Link>
                <Link
                  href="/drawings-spec"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 md:py-32 lg:py-40 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Specialized Services
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We provide comprehensive architectural outsourcing services to help you focus on design while we handle the technical aspects.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Drawing and Spec Production</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Outsource your labor-intensive production work to our curated network of production facilities in China. We act as the single-source coordinator, so you do not deal with language and cultural barriers.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">Working Drawing Production</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    We deliver drawing packages that adhere to American (Imperial) or European (Metric) conventions. Our output will be in English and will match your style and terminologies.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">Building Products Research</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    We research building materials and generate Outline Specs. China offers an extensive catalog of unique building products that can provide distinctive alternatives and cost savings.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">AI-Powered Contracts Solution</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Through our partnership with Docgility - a leader in AI-driven contract management - we help you identify contractual risks and produce finalized agreements with unprecedented speed and accuracy.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">Contract Development & Risk Management</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    The design industry faces inherent contractual risks due to fluid project scopes and complex deliverable definitions. Most design professionals lack formal legal training, creating additional vulnerability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-24 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Technical Capabilities
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our comprehensive technical expertise ensures high-quality deliverables that meet international standards.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  🌐
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Language</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    English communication for all regular operations and drawings production.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  🗣️
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Multi-language Support</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    AI platform works in multiple languages for international contract projects.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  📐
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Drawing Platform</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Latest AutoCAD versions for professional drawing production.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  🤖
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">AI Platform</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Docgility's Virtual Collaboration Network (VCN) for contract management.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  ✅
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Design Standards</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    American (MasterSpec, ASTM) and European (EN, BS) standards compliance.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  📍
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Locations</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Production in Hong Kong and Shenzhen, AI partner in Palo Alto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 lg:py-40 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Transform Your Practice Efficiency
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Discover how our specialized services can optimize your project delivery and risk management while maintaining design excellence.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Contact Us
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