'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Diagonal Background - Jevelin Style */}
      <div className="absolute inset-0">
        {/* Base pink background */}
        <div className="absolute inset-0" style={{ backgroundColor: '#f5c8ca' }}></div>
        {/* Beige diagonal section */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(45deg, #f1e9e3 0%, #f1e9e3 50%, transparent 50%)'
        }}></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container-max w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center justify-center h-screen py-20">
          
          {/* Text Content - Centered on Mobile */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 w-full lg:w-auto">
            {/* Logo Frame */}
            <div className={`relative transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="w-48 h-48 lg:w-32 lg:h-32 border-2 border-gray-900 flex items-center justify-center mb-6 lg:mb-8 mx-auto lg:mx-0">
                <span className="font-playfair text-6xl lg:text-4xl font-bold text-gray-900">BH</span>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-4 h-4 lg:w-8 lg:h-8 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full opacity-60"></div>
              <div className="absolute -bottom-1 -left-1 lg:-bottom-2 lg:-left-2 w-3 h-3 lg:w-6 lg:h-6 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full opacity-60"></div>
            </div>

            {/* Spaced Letters */}
            <div className={`space-y-2 transition-all duration-1000 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8' 
            }`}>
              <p className="font-playfair text-3xl lg:text-3xl xl:text-4xl tracking-[0.2em] lg:tracking-[0.3em] text-gray-700">𝓑𝓮𝓪𝓾𝓽𝔂 𝓗𝓪𝓷𝓷𝓸𝓿𝓮𝓻</p>
            </div>

            {/* Main Headings */}
            <div className="space-y-2 lg:space-y-4">
              <h1 className={`font-playfair text-3xl sm:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-gray-900 leading-tight transition-all duration-1000 ease-out delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                𝑌𝑜𝑢𝑟 𝐵𝑒𝑎𝑢𝑡𝑦
              </h1>
              <h2 className={`font-playfair text-2xl sm:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 leading-tight transition-all duration-1000 ease-out delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                𝑜𝑢𝑟 𝑃𝑎𝑠𝑠𝑖𝑜𝑛
              </h2>
            </div>

            {/* Scroll Text */}
            <div className={`pt-8 transition-all duration-1000 ease-out delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <p className="text-sm tracking-widest text-gray-600 uppercase">
                SCROLL DOWN FOR SOME MAGIC.
              </p>
            </div>
          </div>

          {/* Right Side - Spacer for Grid Layout */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Hero Image - Positioned at bottom of section - Desktop only */}
      <div className="absolute bottom-0 right-0 z-10 hidden lg:block w-full max-w-2xl xl:max-w-3xl 2xl:max-w-4xl px-8">
        <div className="relative w-full" style={{ height: '90vh' }}>
          <Image
            src="/images/hero-img.png"
            alt="Beauty Hannover"
            fill
            className="object-contain"
            style={{ objectPosition: 'bottom right' }}
            priority
          />
        </div>
      </div>

    </section>
  )
}
