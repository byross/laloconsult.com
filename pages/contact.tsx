import React from 'react'
import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Lalo Consult</title>
        <meta name="description" content="Contact Lalo Consult for architectural outsourcing services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <a href="/" className="text-2xl font-bold text-primary">
                Lalo Consult
              </a>
            </div>
            <div className="flex items-center space-x-6">
              <a href="/" className="text-sm font-medium transition-colors hover:text-primary">
                Home
              </a>
              <a href="/drawings-spec" className="text-sm font-medium transition-colors hover:text-primary">
                Drawings
              </a>
              <a href="/contracts-editing" className="text-sm font-medium transition-colors hover:text-primary">
                Contracts
              </a>
              <a href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
                Contact
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-24 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Contact Us
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Get in touch with our team to discuss your architectural outsourcing needs and how we can help streamline your design practice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 md:py-32 lg:py-40 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <div className="space-y-8">
                <div className="space-y-2 text-center">
                  <h2 className="text-3xl font-bold tracking-tighter">Get In Touch</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        placeholder="Enter your first name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        placeholder="Enter your last name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      placeholder="Enter your company name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Tell us about your project requirements"
                      rows={6}
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-24 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Contact Information</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Reach out to us for professional architectural services and consultation.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        📧
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">info@laloconsult.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        📞
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        📍
                      </div>
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">New York, NY</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Stephen Chiang AIA</h3>
                    <p className="text-lg text-primary">Production Director</p>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-500 dark:text-gray-400">
                      Stephen is a New York registered architect with extensive experience in architectural detailing and specifications. He leads our production team and ensures the highest quality deliverables for our clients.
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold">Specializations:</h4>
                      <ul className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
                        <li>• Architectural Detailing</li>
                        <li>• Specification Writing</li>
                        <li>• Project Coordination</li>
                        <li>• Quality Control</li>
                      </ul>
                    </div>
                  </div>
                </div>
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