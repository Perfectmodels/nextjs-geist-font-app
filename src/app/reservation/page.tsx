"use client"

import Layout from '@/components/Layout'
import BookingForm from '@/components/BookingForm'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function ReservationContent() {
  const searchParams = useSearchParams()
  const preselectedRoom = searchParams.get('room')

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-64 bg-gray-900">
        <img
          src="https://placehold.co/1920x400?text=Hotel+reservation+booking+with+elegant+reception+desk"
          alt="Réservation Bantu Hotel"
          className="w-full h-full object-cover opacity-70"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://placehold.co/1920x400?text=Hotel+Reservation';
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Réservation
            </h1>
            <p className="text-xl">
              Réservez votre séjour au Bantu Hotel
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Complétez Votre Réservation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Remplissez le formulaire ci-dessous pour réserver votre chambre. 
              Nous vous confirmerons votre réservation par email dans les plus brefs délais.
            </p>
          </div>

          <BookingForm preselectedRoom={preselectedRoom || undefined} />
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Remplissez le formulaire
              </h3>
              <p className="text-gray-600">
                Complétez vos informations personnelles et les détails de votre séjour
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Confirmation
              </h3>
              <p className="text-gray-600">
                Recevez une confirmation immédiate avec votre numéro de réservation
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Paiement sécurisé
              </h3>
              <p className="text-gray-600">
                Procédez au paiement sécurisé pour finaliser votre réservation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Conditions de Réservation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Politique d'Annulation
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Annulation gratuite jusqu'à 48h avant l'arrivée</li>
                <li>• Annulation entre 24h-48h : 50% du montant total</li>
                <li>• Annulation moins de 24h : 100% du montant total</li>
                <li>• Modification gratuite jusqu'à 24h avant l'arrivée</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Informations Importantes
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Check-in : 15h00 - Check-out : 12h00</li>
                <li>• Petit-déjeuner inclus dans certaines suites</li>
                <li>• WiFi gratuit dans tout l'hôtel</li>
                <li>• Parking gratuit pour les clients</li>
                <li>• Service de conciergerie 24h/24</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Besoin d'Aide ?
            </h3>
            <p className="text-gray-600 mb-4">
              Notre équipe est disponible 24h/24 pour vous assister dans votre réservation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div>
                <strong>Téléphone :</strong> +241 01 XX XX XX
              </div>
              <div>
                <strong>Email :</strong> reservations@hotelbantugabon.com
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default function ReservationPage() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <ReservationContent />
    </Suspense>
  )
}
