import React from 'react'
import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>關於我們 - Lalo Consult</title>
        <meta name="description" content="了解 Lalo Consult 的專業團隊和服務理念" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              關於我們
            </h1>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">我們的使命</h2>
              <p className="text-gray-600 leading-relaxed">
                Lalo Consult 致力於為企業提供專業的顧問服務，協助客戶在快速變化的商業環境中保持競爭優勢。
                我們相信每個企業都有其獨特的價值和潛力，透過專業的分析和策略規劃，
                我們能夠幫助客戶實現可持續的成長和成功。
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">專業團隊</h2>
              <p className="text-gray-600 leading-relaxed">
                我們的團隊由經驗豐富的商業顧問組成，擁有多年在不同行業的實戰經驗。
                我們持續學習最新的商業趨勢和技術，確保能夠為客戶提供最前沿的解決方案。
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">服務理念</h2>
              <p className="text-gray-600 leading-relaxed">
                我們堅持以客戶為中心的服務理念，深入了解客戶的需求和挑戰，
                提供量身定制的解決方案。我們注重長期合作關係的建立，
                與客戶攜手共創美好未來。
              </p>
            </div>
            
            <div className="text-center mt-8">
              <a 
                href="/"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                返回首頁
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
