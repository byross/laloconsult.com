import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navigation() {
  const router = useRouter()
  
  const isActive = (path: string) => {
    return router.pathname === path
  }
  
  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity">
            LaLo Consult
          </Link>
          
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              About us
            </Link>
            <Link 
              href="/drawings-spec" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/drawings-spec') ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              Drawings and Spec
            </Link>
            <Link 
              href="/contracts-editing" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/contracts-editing') ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              Contracts editing
            </Link>
            <Link 
              href="/contact" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/contact') ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              Contact us
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

