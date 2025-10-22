export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-gray-100">
      <div className="container-max">
        {/* Main Contact Block */}
        <div className="bg-white  shadow-sm border border-gray-200 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            
            {/* Left Column - Contact Info */}
            <div className="p-12 lg:p-16">
              <div className="mb-12">
                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Kontaktieren Sie uns
                </h2>
                <h3 className="text-lg text-gray-600 mb-8">
                  oder füllen Sie unser Kontaktformular online aus
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Adresse:</h4>
                  <p className="text-gray-600">Musterstraße 123, 12345 Musterstadt</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Telefon:</h4>
                  <p className="text-gray-600">
                    <a href="tel:01234567890" className="hover:text-gray-800 transition-colors">
                      0123/4567890
                    </a>
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Öffnungszeiten:</h4>
                  <div className="text-gray-600 space-y-1">
                    <p>Montag - Freitag: 9:00 - 19:00</p>
                    <p>Samstag: 9:00 - 16:00</p>
                    <p>Sonntag: Geschlossen</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="p-12 lg:p-16 bg-gray-50">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Vorname" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-none bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Nachname" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-none bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <input 
                    type="email" 
                    placeholder="E-Mail Adresse" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-none bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
                  />
                </div>
                
                <div className="relative">
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-none bg-white text-gray-900 focus:outline-none focus:border-gray-400 transition-colors appearance-none">
                    <option value="">Leistung</option>
                    <option value="hairdresser">Friseur</option>
                    <option value="manicure">Maniküre & Pediküre</option>
                    <option value="massage">Massagen</option>
                    <option value="skincare">Hautpflege</option>
                    <option value="consultation">Beratung</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                <div>
                  <textarea 
                    placeholder="Hier können Sie Ihren bevorzugten Termin oder zusätzliche Informationen zur gewählten Leistung angeben"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-none bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors resize-none"
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit"
                    className="w-full px-6 py-3 border border-gray-300 bg-white text-gray-900 font-semibold hover:bg-gray-50 transition-colors"
                  >
                    SENDEN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Booking CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white  p-8 border border-gray-200">
            <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">Termin buchen</h3>
            <p className="text-gray-600 mb-6">
              Buchen Sie Ihren Termin ganz einfach online
            </p>
            <a 
              href="https://planity.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gray-900 text-white px-8 py-3 font-semibold hover:bg-gray-800 transition-colors "
            >
              Termin online buchen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
