export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-amber-50 text-gray-900">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 border-2 border-gray-900 flex items-center justify-center">
                <span className="text-gray-900 font-bold text-lg">BL</span>
              </div>
              <div>
                <span className="font-playfair text-2xl font-bold text-gray-900">Beauty Hannover</span>
                <p className="text-xs text-gray-600 -mt-1">Bochum</p>
              </div>
            </div>
            <p className="text-gray-700 mb-6 max-w-md leading-relaxed">
              Ihr vertrauensvoller Beauty-Salon in Hannover. Wir verwandeln Ihre Wünsche 
              in wunderschöne Realität mit Leidenschaft und Können.
            </p>
            <p className="text-lg font-playfair text-gray-900 italic">
              Your Beauty, our Passion
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-gradient-to-br from-pink-200 to-amber-200 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <span className="text-gray-700">📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-br from-amber-200 to-pink-200 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <span className="text-gray-700">📷</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-br from-pink-200 to-gray-200 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <span className="text-gray-700">🐦</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-playfair">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-700 hover:text-gray-900 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">Über uns</a></li>
              <li><a href="#services" className="text-gray-700 hover:text-gray-900 transition-colors">Leistungen</a></li>
              <li><a href="#gallery" className="text-gray-700 hover:text-gray-900 transition-colors">Galerie</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-playfair">Kontakt</h3>
            <div className="space-y-2 text-gray-700">
              <p>Musterstraße 123</p>
              <p>30167 Hannover</p>
              <p>
                <a href="tel:0123/4567890" className="hover:text-gray-900 transition-colors">
                  0123/4567890
                </a>
              </p>
              <p className="mt-4">
                <a 
                  href="https://planity.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-gray-700 transition-colors font-medium"
                >
                  Termin buchen →
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2024 Beauty Hannover. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Impressum</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Datenschutz</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
