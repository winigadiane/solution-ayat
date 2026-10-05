import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import PartnersSection from './components/PartnersSection';
import BlogSection from './components/BlogSection';
import JoinUsSection from './components/JoinUsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PatternDivider from './components/PatternDivider';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#606060] font-body selection:bg-[#ED1C24] selection:text-white">
      {/* 1. Header & Navigation officielle */}
      <Navbar />

      <main id="main-content">
        {/* 2. Hero Section Principale (Accueil) */}
        <Hero />

        {/* Séparateur Motif Couronnes — Juste après la section Accueil */}
        <PatternDivider />

        {/* 3. Section À Propos & Vision */}
        <AboutSection />

        {/* 4. Section Nos Domaines d'Intervention & Services */}
        <ServicesSection />

        {/* 5. Section Nos Projets & Actions de Terrain */}
        <ProjectsSection />

        {/* 6. Section Partenaires & Réseau Institutionnel */}
        <PartnersSection />

        {/* 7. Section Blog & Publications */}
        <BlogSection />

        {/* 8. Section Nous Rejoindre (Faire un don, Partenariat, Sponsoring, Bénévolat, Réseaux) */}
        <JoinUsSection />

        {/* 9. Section Contact & Dons */}
        <ContactSection />

        {/* Séparateur Motif Couronnes — Juste en haut du Footer */}
        <PatternDivider />
      </main>

      {/* 10. Footer Institutionnel */}
      <Footer />
    </div>
  );
}
