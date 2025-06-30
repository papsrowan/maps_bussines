import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'acces-pro',
    title: 'Accès Pro',
    paiementUrl:"https://square.link/u/dgVwkSEt",
    description: 'Accédez à des fonctionnalités exclusives pour professionnels avec notre service premium.',
    price: 150.00,
    image: '/service_acces_pro.webp',
    features: [
      'Accès à des outils professionnels exclusifs',
      'Analyses de données avancées',
      'Support prioritaire 24/7',
      'Mises à jour premium'
    ]
  },
  {
    id: 'cancelation-gbp',
    paiementUrl:"https://square.link/u/PhA1qTYw",
    title: 'Cancellation GBP',
    description: 'Service spécialisé pour la gestion et suppression des avis négatifs sur Google Business Profile.',
    price: 150.00,
    image: '/service_cancel_gbp.webp',
    features: [
      'Analyse complète des avis négatifs',
      'Procédures de suppression d\'avis',
      'suppression du profil GOOGLE'
    ]
  },
  {
    id: 'meta-guide-ads',
    paiementUrl:"https://square.link/u/LSrxuYib",
    title: 'Meta Guide ADS',
    description: 'Guide complet pour optimiser vos campagnes publicitaires sur Meta (Facebook et Instagram).',
    price: 350.00,
    image: '/service_meta_guide_ads.webp',
    features: [
      'Stratégies d\'optimisation publicitaire',
      'Analyse de ciblage avancée',
      'Modèles de campagnes performantes',
      'Techniques d\'optimisation du ROI'
    ]
  },
  {
    id: 'meta-guide-pro',
    paiementUrl:"https://square.link/u/dgVwkSEt",
    title: 'Meta Guide Professionnel',
    description: 'Guide avancé pour professionnels sur l\'écosystème Meta et son utilisation optimale.',
    price: 179.99,
    image: '/service_meta_guide_pro.webp',
    features: [
      'Stratégies de croissance professionnelle',
      'Optimisation multi-plateformes',
      'Techniques avancées d\'engagement',
      'Intégration avec systèmes CRM'
    ]
  },
  {
    id: 'meta-guide-assistance',
    paiementUrl:"https://square.link/u/gHQ708gE",
    title: 'Meta Guide + Assistance',
    description: 'Notre guide Meta complet avec assistance personnalisée pour maximiser vos résultats.',
    price: 250.00,
    image: '/service_meta_guide_pro_assistance.webp',
    features: [
      'Guide Meta complet avec documentation',
      'Sessions d\'assistance en direct',
      'Support par email prioritaire',
      'Audit mensuel de performance'
    ]
  },
  {
    id: 'profil-pro',
    paiementUrl:"https://square.link/u/u38qqF57",
    title: 'Profil Pro',
    description: 'Optimisation professionnelle de votre profil d\'entreprise sur toutes les plateformes pertinentes.',
    price: 179.99,
    image: '/service_profil_pro.webp',
    features: [
      'Audit de profil complet',
      'Optimisation multi-plateformes',
      'Mise en place de visuels professionnels',
      'Optimisation SEO du profil'
    ]
  },
  {
    id: 'profil-pro-assistance',
    paiementUrl:"https://square.link/u/DurODfbe",
    title: 'Profil Pro + Assistance',
    description: 'Service complet d\'optimisation de profil avec support dédié pour un accompagnement personnalisé.',
    price: 250.00,
    image: '/service_profil_pro_assistance.webp',
    features: [
      'Création et optimisation complète de profil',
      'Assistance dédiée pendant 3 mois',
      'Révisions illimitées',
      'Stratégie de contenu pour votre profil'
    ]
  },
  {
    id: 'seo-local',
    paiementUrl:"https://square.link/u/3lHJKBz3",
    title: 'SEO Local',
    description: 'Améliorez votre visibilité locale avec notre service d\'optimisation SEO spécialisé.',
    price: 320.00,
    image: '/service_seo_local.webp',
    features: [
      'Optimisation Google My Business',
      'Création de citations locales',
      'Stratégie de mots-clés locaux',
      'Analyse de la concurrence locale'
    ]
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};