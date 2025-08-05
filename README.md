# Bantu Hotel Libreville - Site Web

Un site web moderne et responsive pour l'Hôtel Bantu situé dans le quartier Glass à Libreville, Gabon.

## 🏨 À Propos du Projet

Ce site web a été développé selon le cahier des charges pour créer une présence en ligne élégante et fonctionnelle pour l'Hôtel Bantu. Il reflète l'identité culturelle gabonaise tout en offrant une expérience utilisateur moderne.

## ✨ Fonctionnalités

### Pages Principales
- **Accueil** : Slider héro, présentation de l'hôtel, témoignages clients
- **L'Hôtel** : Histoire, architecture, philosophie d'accueil, équipe
- **Chambres & Suites** : 4 types de chambres avec détails, prix et réservation
- **Restaurant & Bar** : Menu, réservation de table, présentation du bar
- **Services** : Spa, salle de sport, salles de réunion, excursions, transferts
- **Galerie** : Photos avec filtres par catégorie, visite virtuelle
- **Réservation** : Formulaire complet avec validation et API
- **Contact** : Formulaire, carte, informations de contact

### Fonctionnalités Techniques
- ✅ **Responsive Design** : Compatible mobile, tablette, desktop
- ✅ **Navigation Moderne** : Menu responsive avec animations
- ✅ **Système de Réservation** : API REST avec validation complète
- ✅ **Galerie Interactive** : Filtres par catégorie, modal d'agrandissement
- ✅ **Formulaires Validés** : Validation côté client et serveur
- ✅ **SEO Optimisé** : Meta tags, structure sémantique
- ✅ **Performance** : Images optimisées, chargement rapide

## 🛠 Technologies Utilisées

- **Framework** : Next.js 15.3.2 avec App Router
- **Langage** : TypeScript
- **Styling** : Tailwind CSS 4.1.6
- **Composants UI** : shadcn/ui avec Radix UI
- **Formulaires** : React Hook Form + Zod validation
- **Polices** : Google Fonts (Playfair Display, Inter)
- **Animations** : Transitions CSS natives

## 🚀 Installation et Démarrage

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone [url-du-repo]
cd bantu-hotel-website

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:8000`

### Scripts Disponibles
```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Serveur de production
npm run lint     # Vérification du code
```

## 📋 Structure du Projet

```
src/
├── app/                    # Pages Next.js App Router
│   ├── api/               # API Routes
│   │   └── reservation/   # API de réservation
│   ├── contact/           # Page contact
│   ├── gallery/           # Page galerie
│   ├── hotel/             # Page hôtel
│   ├── reservation/       # Page réservation
│   ├── restaurant/        # Page restaurant
│   ├── rooms/             # Page chambres
│   ├── services/          # Page services
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Page d'accueil
├── components/            # Composants réutilisables
│   ├── ui/               # Composants shadcn/ui
│   ├── BookingForm.tsx   # Formulaire de réservation
│   ├── Footer.tsx        # Pied de page
│   ├── Header.tsx        # En-tête et navigation
│   ├── Layout.tsx        # Wrapper de layout
│   └── Slider.tsx        # Carrousel héro
└── lib/                  # Utilitaires
    └── utils.ts          # Fonctions utilitaires
```

## 🎨 Design et UX

### Palette de Couleurs
- **Primaire** : Noir (#000000) - Élégance et sophistication
- **Secondaire** : Blanc (#FFFFFF) - Pureté et clarté
- **Accents** : Nuances de gris pour la hiérarchie

### Typographie
- **Titres** : Playfair Display (serif élégant)
- **Corps** : Inter (sans-serif moderne et lisible)

### Principes UX
- Navigation intuitive et cohérente
- Contenu accessible et bien structuré
- Temps de chargement optimisés
- Expérience mobile-first

## 🔧 API de Réservation

### Endpoint POST `/api/reservation`

**Données requises :**
```json
{
  "firstName": "string",
  "lastName": "string", 
  "email": "string",
  "roomType": "1|2|3|4",
  "checkIn": "YYYY-MM-DD",
  "checkOut": "YYYY-MM-DD",
  "guests": "string"
}
```

**Réponse de succès :**
```json
{
  "success": true,
  "message": "Réservation confirmée avec succès",
  "reservationId": "BH...",
  "data": {
    "reservationId": "BH...",
    "nights": 3,
    "total": 255000,
    "status": "confirmed",
    ...
  }
}
```

### Test de l'API
```bash
curl -X POST http://localhost:8000/api/reservation \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Jean",
    "lastName": "Dupont", 
    "email": "jean.dupont@email.com",
    "roomType": "1",
    "checkIn": "2025-08-10",
    "checkOut": "2025-08-13",
    "guests": "2"
  }'
```

## 🏨 Types de Chambres

| Type | Prix/Nuit | Superficie | Capacité |
|------|-----------|------------|----------|
| Standard | 85 000 FCFA | 25 m² | 2 personnes |
| Deluxe | 120 000 FCFA | 35 m² | 2-3 personnes |
| Suite Junior | 180 000 FCFA | 50 m² | 2-4 personnes |
| Suite Présidentielle | 350 000 FCFA | 80 m² | 2-6 personnes |

## 📱 Responsive Design

- **Mobile** : < 768px - Navigation hamburger, layout vertical
- **Tablette** : 768px - 1024px - Layout adaptatif
- **Desktop** : > 1024px - Layout complet avec sidebar

## 🔒 Sécurité et Validation

- Validation des formulaires côté client (React Hook Form + Zod)
- Validation des données API côté serveur
- Protection contre les injections
- Validation des formats email et dates
- Gestion d'erreurs complète

## 🌐 SEO et Performance

- Meta tags optimisés pour chaque page
- Structure HTML sémantique
- Images avec alt text descriptifs
- Sitemap automatique (Next.js)
- Temps de chargement optimisés

## 📞 Contact et Support

- **Hôtel** : Quartier Glass, Libreville, Gabon
- **Téléphone** : +241 01 XX XX XX
- **Email** : contact@hotelbantugabon.com
- **Site Web** : [À définir]

## 🚀 Déploiement

Le site peut être déployé sur :
- **Vercel** (recommandé pour Next.js)
- **Netlify**
- **AWS Amplify**
- **Serveur VPS** avec Node.js

### Variables d'Environnement
```env
# À configurer pour la production
NEXT_PUBLIC_SITE_URL=https://hotelbantugabon.com
GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

## 📄 Licence

© 2024 Bantu Hotel Libreville. Tous droits réservés.

---

**Développé avec ❤️ pour l'Hôtel Bantu Libreville**
