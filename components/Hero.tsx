'use client';

import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Diagonal Background - Jevelin Style */}
      <div className="absolute inset-0">
        {/* Base pink background */}
        <div className="absolute inset-0 bg-pink-200"></div>
        {/* Beige diagonal section */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, #fef3c7 0%, #fef3c7 50%, transparent 50%)'
        }}></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container-max w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-screen py-20">
          
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            {/* Logo Frame */}
            <div className="relative">
              <div className="w-32 h-32 border-2 border-gray-900 flex items-center justify-center mb-8">
                <span className="font-playfair text-4xl font-bold text-gray-900">BL</span>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full opacity-60"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full opacity-60"></div>
            </div>

            {/* Spaced Letters */}
            <div className="space-y-2">
              <p className="font-playfair text-lg tracking-[0.3em] text-gray-700">𝓑𝓮𝓪𝓾𝓽𝔂 𝓛𝓲𝓷𝓭𝓮𝓷</p>
            </div>

            {/* Main Headings */}
            <div className="space-y-4">
              <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight">
                𝑌𝑜𝑢𝑟 𝐵𝑒𝑎𝑢𝑡𝑦
              </h1>
              <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                𝑜𝑢𝑟 𝑃𝑎𝑠𝑠𝑖𝑜𝑛
              </h2>
            </div>

            {/* Scroll Text */}
            <div className="pt-8">
              <p className="text-sm tracking-widest text-gray-600 uppercase">
                SCROLL DOWN FOR SOME MAGIC.
              </p>
            </div>
          </div>

          {/* Right Side - Placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl bg-gradient-to-br from-pink-100 to-amber-100">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-40 h-40 bg-gradient-to-br from-pink-200 to-amber-200 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <span className="text-6xl">👩</span>
                  </div>
                  <p className="text-gray-600 font-medium">Elegant Beauty Model</p>
                  <p className="text-sm text-gray-500">Professional Portrait</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full opacity-70"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full opacity-70"></div>
          </div>
        </div>
      </div>

    </section>
  )
}
