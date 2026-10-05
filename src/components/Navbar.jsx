import React, { useState } from 'react';
import { Menu, X, Heart, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [joinDropdownOpen, setJoinDropdownOpen] = useState(false);

  return (
    <header className="w-full bg-white select-none sticky top-0 z-40 shadow-xs backdrop-blur-md bg-white/95">
      {/* Conteneur Navbar aligné sur la largeur de la carte Hero */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo Officiel Solution Hayathe */}
        <a href="#accueil" className="flex items-center gap-3 group">
          <img
            src="/images/logo.png"
            alt="Logo officiel Association Solution Hayathe"
            className="h-12 sm:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </a>

        {/* Liens Centraux — En police Metropolis avec interactions aux couleurs officielles */}
        <nav className="hidden lg:flex items-center gap-6 text-[14px] font-medium font-body text-[#002157]">
          <a href="#accueil" className="hover:text-[#ED1C24] transition-colors">
            Accueil
          </a>
          <a href="#association" className="hover:text-[#ED1C24] transition-colors">
            L'Association
          </a>
          <a href="#services" className="hover:text-[#ED1C24] transition-colors">
            Domaines d'Action
          </a>
          <a href="#terrain" className="hover:text-[#ED1C24] transition-colors">
            Nos Projets
          </a>
          <a href="#partenaires" className="hover:text-[#ED1C24] transition-colors">
            Partenaires
          </a>

          <a href="#blog" className="hover:text-[#ED1C24] transition-colors">
            Blog
          </a>

          {/* Menu Déroulant : NOUS REJOINDRE (Style exact de la référence) */}
          <div 
            className="relative"
            onMouseEnter={() => setJoinDropdownOpen(true)}
            onMouseLeave={() => setJoinDropdownOpen(false)}
          >
            <a 
              href="#rejoindre" 
              className={`hover:text-[#ED1C24] transition-colors flex items-center gap-1 py-2 ${
                joinDropdownOpen ? 'text-[#ED1C24]' : 'text-[#002157]'
              }`}
            >
              <span>Nous Rejoindre</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${joinDropdownOpen ? 'rotate-180' : ''}`} />
            </a>

            {joinDropdownOpen && (
              <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <a
                  href="#rejoindre-don"
                  onClick={() => setJoinDropdownOpen(false)}
                  className="block px-5 py-2.5 text-xs font-medium text-[#002157] hover:bg-red-50 hover:text-[#ED1C24] transition-colors"
                >
                  Faire un don
                </a>
                <a
                  href="#rejoindre-partenaire"
                  onClick={() => setJoinDropdownOpen(false)}
                  className="block px-5 py-2.5 text-xs font-medium text-[#002157] hover:bg-red-50 hover:text-[#ED1C24] transition-colors"
                >
                  Devenir partenaire
                </a>
                <a
                  href="#rejoindre-sponsor"
                  onClick={() => setJoinDropdownOpen(false)}
                  className="block px-5 py-2.5 text-xs font-medium text-[#002157] hover:bg-red-50 hover:text-[#ED1C24] transition-colors"
                >
                  Sponsoriser un projet en cours
                </a>
                <a
                  href="#rejoindre-membre"
                  onClick={() => setJoinDropdownOpen(false)}
                  className="block px-5 py-2.5 text-xs font-medium text-[#002157] hover:bg-red-50 hover:text-[#ED1C24] transition-colors"
                >
                  Devenir membre
                </a>
                <a
                  href="#contact"
                  onClick={() => setJoinDropdownOpen(false)}
                  className="block px-5 py-2.5 text-xs font-medium text-[#002157] hover:bg-red-50 hover:text-[#ED1C24] transition-colors border-t border-slate-100 mt-1"
                >
                  Suivre nos réseaux sociaux
                </a>
              </div>
            )}
          </div>

          <a href="#contact" className="hover:text-[#ED1C24] transition-colors">
            Contact
          </a>
        </nav>

        {/* Bouton Droite : Style pilule aux couleurs officielles (#ED1C24) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#rejoindre"
            className="px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#ED1C24] hover:bg-[#c9141b] text-white transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 font-body flex items-center gap-1.5 cursor-pointer"
          >
            <Heart className="w-3.5 h-3.5 fill-white text-white" />
            <span>NOUS SOUTENIR</span>
          </a>
        </div>

        {/* Toggle Mobile */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href="#rejoindre"
            className="px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#ED1C24] text-white"
          >
            Soutenir
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#002157] hover:bg-slate-100 rounded-lg cursor-pointer"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-2 font-body text-sm max-h-[85vh] overflow-y-auto">
          <a
            href="#accueil"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#002157] font-semibold border-b border-slate-100"
          >
            Accueil
          </a>
          <a
            href="#association"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#002157] font-semibold border-b border-slate-100"
          >
            L'Association
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#002157] font-semibold border-b border-slate-100"
          >
            Domaines d'Action
          </a>
          <a
            href="#terrain"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#002157] font-semibold border-b border-slate-100"
          >
            Nos Projets
          </a>
          <a
            href="#partenaires"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#002157] font-semibold border-b border-slate-100"
          >
            Partenaires
          </a>

          <a
            href="#blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#002157] font-semibold border-b border-slate-100"
          >
            Blog & Actualités
          </a>

          {/* Section NOUS REJOINDRE en mobile */}
          <div className="py-2 border-b border-slate-100">
            <div className="font-bold text-[#ED1C24] text-xs uppercase tracking-wider mb-2">
              Nous Rejoindre
            </div>
            <div className="pl-3 space-y-2 text-xs text-[#002157]">
              <a href="#rejoindre-don" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#ED1C24]">
                • Faire un don
              </a>
              <a href="#rejoindre-partenaire" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#ED1C24]">
                • Devenir partenaire
              </a>
              <a href="#rejoindre-sponsor" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#ED1C24]">
                • Sponsoriser un projet
              </a>
              <a href="#rejoindre-membre" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#ED1C24]">
                • Devenir membre / bénévole
              </a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#ED1C24]">
                • Réseaux sociaux
              </a>
            </div>
          </div>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#002157] font-semibold border-b border-slate-100"
          >
            Contact
          </a>
          <a
            href="#rejoindre"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full py-3 bg-[#ED1C24] text-white font-bold text-center rounded-xl uppercase tracking-wider text-xs shadow-sm mt-3"
          >
            Nous Soutenir
          </a>
        </div>
      )}
    </header>
  );
}
