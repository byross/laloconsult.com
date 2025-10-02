import React from 'react'
import Head from 'next/head'

export default function _app({ Component, pageProps }: { Component: any, pageProps: any }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
