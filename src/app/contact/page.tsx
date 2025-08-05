"use client"

import Layout from '@/components/Layout'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    {
      title: "Adresse",
      details: [
        "Quartier Glass",
        "Libreville, Gabon",
        "BP 1234 Libreville"
      ],
      icon: "📍"
    },
    {
      title: "Téléphone",
      details: [
        "Réception : +241 01 XX XX XX",
        "Réservations : +241 01 XX XX XX",
        "Restaurant : +241 01 XX XX XX"
      ],
      icon: "📞"
    },
    {
      title: "Email",
      details: [
        "contact@hotelbantugabon.com",
        "reservations@hotelbantugabon.com",
        "restaurant@hotelbantugabon.com"
      ],
      icon: "✉️"
    },
    {
      title: "Horaires",
      details: [
        "Réception : 24h/24",
        "Restaurant : 19h00 - 23h00",
        "Bar : 17h00 - 01h00"
      ],
      icon: "🕐"
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      subject: value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log('Contact form data:', formData)
      alert('Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      console.error('Error:', error)
      alert('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900">
        <img
          src="https://placehold.co/1920x600?text=Hotel+contact+reception+desk+with+professional+staff+assistance"
          alt="Contact Bantu Hotel"
          className="w-full h-full object-cover opacity-70"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://placehold.co/1920x600?text=Hotel+Contact';
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Contactez-Nous
            </h1>
            <p className="text-xl md:text-2xl">
              Nous sommes à votre écoute 24h/24
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Nos Coordonnées
            </h2>
            <p className="text-lg text-gray-600">
              Plusieurs moyens de nous joindre pour tous vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-4xl mb-4">{info.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 
                className="text-3xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Envoyez-nous un Message
              </h2>
              <Card className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="+241 XX XX XX XX"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Sujet *</Label>
                    <Select onValueChange={handleSelectChange} value={formData.subject}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Sélectionner un sujet" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="reservation">Réservation</SelectItem>
                        <SelectItem value="information">Demande d'information</SelectItem>
                        <SelectItem value="restaurant">Restaurant</SelectItem>
                        <SelectItem value="services">Services</SelectItem>
                        <SelectItem value="complaint">Réclamation</SelectItem>
                        <SelectItem value="other">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Décrivez votre demande en détail..."
                      className="mt-1"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-black text-white hover:bg-gray-800 py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Map and Location Info */}
            <div>
              <h2 
                className="text-3xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Notre Emplacement
              </h2>
              
              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-lg overflow-hidden mb-6">
                <img
                  src="https://placehold.co/600x400?text=Interactive+Google+Maps+showing+Bantu+Hotel+location+in+Glass+district+Libreville"
                  alt="Carte de localisation du Bantu Hotel à Libreville"
                  className="w-full h-80 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://placehold.co/600x400?text=Hotel+Location+Map';
                  }}
                />
              </div>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Comment nous trouver
                </h3>
                <div className="space-y-4 text-gray-600">
                  <div>
                    <h4 className="font-semibold text-gray-900">Depuis l'Aéroport :</h4>
                    <p className="text-sm">
                      Prenez la route de l'aéroport en direction du centre-ville. 
                      Continuez jusqu'au quartier Glass. L'hôtel se trouve à 25 minutes de l'aéroport.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Transports en commun :</h4>
                    <p className="text-sm">
                      Plusieurs lignes de bus desservent le quartier Glass. 
                      Arrêt "Glass Centre" à 2 minutes à pied de l'hôtel.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">En voiture :</h4>
                    <p className="text-sm">
                      Parking gratuit disponible pour nos clients. 
                      Service de voiturier sur demande.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media and Additional Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Suivez-nous
            </h2>
            <p className="text-lg text-gray-600">
              Restez connectés avec nous sur les réseaux sociaux
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">f</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Facebook</h3>
                <p className="text-gray-600 mb-4">
                  Suivez nos actualités et promotions
                </p>
                <Button variant="outline" size="sm">
                  Suivre
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">📷</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Instagram</h3>
                <p className="text-gray-600 mb-4">
                  Découvrez nos plus belles photos
                </p>
                <Button variant="outline" size="sm">
                  Suivre
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">📱</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">
                  Contactez-nous directement
                </p>
                <Button variant="outline" size="sm">
                  Contacter
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  )
}
