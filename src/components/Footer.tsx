import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Bantu Hotel
            </h3>
            <p className="text-gray-300 mb-4">
              Découvrez l'élégance et le confort au cœur de Libreville, dans le quartier Glass. 
              Notre hôtel allie tradition gabonaise et modernité pour vous offrir une expérience unique.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>Quartier Glass, Libreville</p>
              <p>Gabon</p>
              <p>Tél: +241 01 XX XX XX</p>
              <p>Email: contact@hotelbantugabon.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li><Link href="/hotel" className="text-gray-300 hover:text-white transition-colors">L'Hôtel</Link></li>
              <li><Link href="/rooms" className="text-gray-300 hover:text-white transition-colors">Chambres</Link></li>
              <li><Link href="/restaurant" className="text-gray-300 hover:text-white transition-colors">Restaurant</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Réception 24h/24</li>
              <li>Restaurant gastronomique</li>
              <li>Salle de sport</li>
              <li>Salle de réunion</li>
              <li>Transfert aéroport</li>
              <li>Excursions</li>
            </ul>
          </div>
        </div>

        {/* Social Media & Legal */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">WhatsApp</a>
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
              <Link href="/politique-confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</Link>
              <span>&copy; 2024 Bantu Hotel. Tous droits réservés.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
