import React from 'react'

export default function Footer() {
  return (
    <footer className="py-8 bg-white border-t-4" style={{ borderTopColor: '#6D0E25' }}>
      <div className="container mx-auto px-4 text-center">
        <div className="text-sm" style={{ color: '#6D0E25' }}>
          <p>© Copyright LaLo Consult.</p>
          <br />
          <p style={{ color: '#aaaaaa' }}>
            Powered by{' '}
            <a 
              href="https://byross.mo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:no-underline"
              style={{ color: '#aaaaaa' }}
            >
              byRoss Design & Tech.
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
