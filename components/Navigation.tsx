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
    <header className={`w-full transition-all duration-300 ease-in-out fixed top-0 left-0 right-0 z-50 ${
      isScrolled ? 'backdrop-blur-sm' : ''
    }`} style={{ backgroundColor: '#6D0E25' }}>
      <div className="container mx-auto px-4 pt-4">
        <div className="flex items-start justify-between">
          {/* Logo */}
          <Link href="/" className="text-4xl font-bold tracking-tight hover:opacity-80 transition-opacity text-white -mt-1">
            LaLo Consult
          </Link>
          
          {/* Navigation Links */}
          <nav className="hidden md:flex items-end space-x-2">
            <Link 
              href="/" 
              className={`text-lg font-medium px-4 py-3 rounded-t-lg transition-all ${
                isActive('/') 
                  ? 'bg-white text-gray-900 -mb-px' 
                  : 'text-white/80 hover:text-white hover:bg-white/10 rounded-lg'
              }`}
            >
              About us
            </Link>
            <Link 
              href="/drawings-spec" 
              className={`text-lg font-medium px-4 py-3 rounded-t-lg transition-all ${
                isActive('/drawings-spec') 
                  ? 'bg-white text-gray-900 -mb-px' 
                  : 'text-white/80 hover:text-white hover:bg-white/10 rounded-lg'
              }`}
            >
              Drawings and Spec
            </Link>
            <Link 
              href="/contracts-editing" 
              className={`text-lg font-medium px-4 py-3 rounded-t-lg transition-all ${
                isActive('/contracts-editing') 
                  ? 'bg-white text-gray-900 -mb-px' 
                  : 'text-white/80 hover:text-white hover:bg-white/10 rounded-lg'
              }`}
            >
              Contracts editing
            </Link>
            <Link 
              href="/contact" 
              className={`text-lg font-medium px-4 py-3 rounded-t-lg transition-all ${
                isActive('/contact') 
                  ? 'bg-white text-gray-900 -mb-px' 
                  : 'text-white/80 hover:text-white hover:bg-white/10 rounded-lg'
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

