import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function About() {
  const router = useRouter()
  
  // Redirect to home page since About content is on the home page
  React.useEffect(() => {
    router.push('/')
  }, [router])

  return (
    <>
      <Head>
        <title>About Us - LaLo Consult</title>
        <meta name="description" content="Redirecting to home page..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen flex items-center justify-center pt-8">
        <div className="text-center">
          <p className="text-muted-foreground">Redirecting...</p>
        </div>
        <Footer />
      </div>
    </>
  )
}
