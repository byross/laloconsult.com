import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navigation() {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  
  const isActive = (path: string) => {
    return router.pathname === path
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <header className={`w-full border-b transition-all duration-300 ease-in-out fixed top-0 left-0 right-0 z-50 ${
      isScrolled ? 'shadow-lg backdrop-blur-sm' : 'shadow-none'
    }`} style={{ backgroundColor: '#6D0E25' }}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity text-white">
            LaLo Consult
          </Link>
          
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-sm font-medium transition-colors hover:text-white/80 ${
                isActive('/') ? 'text-white' : 'text-white/80'
              }`}
            >
              About us
            </Link>
            <Link 
              href="/drawings-spec" 
              className={`text-sm font-medium transition-colors hover:text-white/80 ${
                isActive('/drawings-spec') ? 'text-white' : 'text-white/80'
              }`}
            >
              Drawings and Spec
            </Link>
            <Link 
              href="/contracts-editing" 
              className={`text-sm font-medium transition-colors hover:text-white/80 ${
                isActive('/contracts-editing') ? 'text-white' : 'text-white/80'
              }`}
            >
              Contracts editing
            </Link>
            <Link 
              href="/contact" 
              className={`text-sm font-medium transition-colors hover:text-white/80 ${
                isActive('/contact') ? 'text-white' : 'text-white/80'
              }`}
            >
              Contact us
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

