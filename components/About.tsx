export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Simple centered title like Jevelin */}
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-3xl font-light text-gray-700 tracking-wide">
            Unsere wunderbaren Spezialisten kümmern sich um Sie
          </h2>
        </div>

        {/* Three column team layout */}
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Team Member 1 */}
          <div className="text-center">
            <div className="mb-6">
              <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-5xl">👩‍💼</span>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2 tracking-wide">SARAH MÜLLER</h4>
            <p className="text-gray-600 font-medium">Erstaunliche Friseurin</p>
          </div>

          {/* Team Member 2 */}
          <div className="text-center">
            <div className="mb-6">
              <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-5xl">👩‍🎨</span>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2 tracking-wide">LISA WEBER</h4>
            <p className="text-gray-600 font-medium">Geniale Make-up-Künstlerin</p>
          </div>

          {/* Team Member 3 */}
          <div className="text-center">
            <div className="mb-6">
              <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-5xl">👩‍💻</span>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2 tracking-wide">ANNA SCHMIDT</h4>
            <p className="text-gray-600 font-medium">Meister-Masseurin</p>
          </div>
        </div>
      </div>
    </section>
  )
}