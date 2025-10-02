import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Lalo Consult
            </Link>
            
            <div className="space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                首頁
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                關於我們
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                聯絡我們
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      {children}
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Lalo Consult. 版權所有。</p>
        </div>
      </footer>
    </>
  )
}
