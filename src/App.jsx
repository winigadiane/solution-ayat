import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import PatternDivider from './components/PatternDivider';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#606060] font-body selection:bg-[#ED1C24] selection:text-white">
      {/* 1. Header & Navigation officielle */}
      <Navbar />

      {/* 2. Contenu Principal */}
      <main id="main-content">
        {/* Hero Section Principale */}
        <Hero />

        {/* Section À Propos & Engagement */}
        <AboutSection />

        {/* Section Nos Services & Domaines d'Intervention */}
        <ServicesSection />

        {/* Frise & Séparateur Géométrique Officiel */}
        <PatternDivider 
          bgColor="bg-[#002157]" 
          strokeColor="stroke-white"
          height="h-10 sm:h-12"
        />

        {/* Section Nos Projets & Actions de Terrain */}
        <ProjectsSection />

        {/* Section Blog & Derniers Décryptages (Style exact de la maquette de référence) */}
        <BlogSection />

        {/* Section Contact Direct & Formulaire (Style exact de la maquette de référence) */}
        <ContactSection />
      </main>

      {/* 3. Footer Institutionnel Officiel */}
      <Footer />
    </div>
  );
}

