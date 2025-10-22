'use client';

import React, { useState } from 'react';

export default function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      title: "Friseur",
      description: "Professionelle Haarpflege und Styling für jeden Anlass. Von Schnitt bis Färbung - wir verwandeln Ihr Haar.",
      prices: [
        { service: "Langhaarschnitt", price: "20€" },
        { service: "Kurzhaarschnitt", price: "25€" },
        { service: "Färbung", price: "46€" },
        { service: "Ombre Färbung", price: "50€" }
      ]
    },
    {
      title: "Maniküre & Pediküre",
      description: "Gepflegte Hände und Füße mit modernen Nageldesigns. French Style, Gelish und individuelle Designs.",
      prices: [
        { service: "French Style", price: "10€" },
        { service: "Gelish mit Akzenten", price: "20€" },
        { service: "Klassische Färbung", price: "30€" }
      ]
    },
    {
      title: "Massagen",
      description: "Entspannende Massagen für Körper und Geist. Von Gesichtsmassage bis Ganzkörpermassage.",
      prices: [
        { service: "Arme und Beine", price: "20€" },
        { service: "Gesichtsmassage", price: "20€" },
        { service: "Ganzkörpermassage", price: "30€" }
      ]
    },
    {
      title: "Hautpflege",
      description: "Professionelle Gesichtsbehandlungen für strahlende und gesunde Haut. Individuelle Pflege für jeden Hauttyp.",
      prices: [
        { service: "Basis Gesichtsbehandlung", price: "35€" },
        { service: "Tiefenreinigung", price: "45€" },
        { service: "Anti-Aging Behandlung", price: "55€" }
      ]
    }
  ]

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        
        {/* Services Overview - Jevelin Style */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Service Card 1 - Hair */}
            <div className="group cursor-pointer">
              <div className="bg-gray-100 p-8 text-center transition-all duration-300 hover:bg-gray-50">
                <div className="mb-4">
                  <svg className="w-12 h-12 mx-auto text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Friseur</h3>
                <p className="text-sm text-gray-600">Professionelle Haarpflege und Styling für jeden Anlass</p>
              </div>
            </div>

            {/* Service Card 2 - Nails */}
            <div className="group cursor-pointer">
              <div className="bg-gray-100 p-8 text-center transition-all duration-300 hover:bg-gray-50">
                <div className="mb-4">
                  <svg className="w-12 h-12 mx-auto text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Maniküre</h3>
                <p className="text-sm text-gray-600">Elegante Nagelpflege und kreative Nageldesigns</p>
              </div>
            </div>

            {/* Service Card 3 - Make-up */}
            <div className="group cursor-pointer">
              <div className="bg-gray-100 p-8 text-center transition-all duration-300 hover:bg-gray-50 relative overflow-hidden">
                <div className="mb-4">
                  <svg className="w-12 h-12 mx-auto text-gray-900 group-hover:opacity-0 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Make-up</h3>
                <p className="text-sm text-gray-600">Professionelle Make-up-Anwendung für jeden Anlass</p>
                
                {/* Hover Image */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Make-up Tools"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Service Card 4 - Wellness */}
            <div className="group cursor-pointer">
              <div className="bg-gray-100 p-8 text-center transition-all duration-300 hover:bg-gray-50">
                <div className="mb-4">
                  <svg className="w-12 h-12 mx-auto text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Wellness</h3>
                <p className="text-sm text-gray-600">Entspannung und Wohlbefinden für Körper und Geist</p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Services */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Title and Description */}
          <div>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Unsere Leistungen
            </h2>
            <h3 className="font-playfair text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
              Preise und Services
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Die Leistungen, die wir in Bochum anbieten. Klicken Sie auf eine Leistung, um Details und Preise zu sehen.
            </p>
          </div>

          {/* Right Column - Services Dropdown */}
          <div>
            <div className="bg-white border border-gray-200 overflow-hidden">
              {/* Services List */}
              <div className="divide-y divide-gray-200">
                {services.map((service, index) => (
                  <div key={index}>
                    {/* Service Header - Clickable */}
                    <button
                      onClick={() => toggleService(index)}
                      className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
                    >
                      <span className="font-semibold text-gray-900">{service.title}</span>
                      <svg 
                        className={`w-5 h-5 text-gray-400 transition-transform ${
                          expandedService === index ? 'rotate-180' : ''
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Service Details - Expandable */}
                    {expandedService === index && (
                      <div className="px-6 pb-6 bg-gray-50">
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        
                        {/* Price List */}
                        <div className="space-y-2">
                          {service.prices.map((item, priceIndex) => (
                            <div key={priceIndex} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                              <span className="text-gray-700">{item.service}</span>
                              <span className="font-semibold text-gray-900">{item.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Elegant Section Divider */}
      <div className="mt-20 mb-0">
        <div className="flex items-center justify-center">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          <div className="mx-8">
            <div className="w-3 h-3 bg-pink-200 rounded-full"></div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}
