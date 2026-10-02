import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white select-none">
      {/* Conteneur Navbar aligné sur la largeur de la carte Hero */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo Officiel Solution Hayathe */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/images/logo.png"
            alt="Logo officiel Association Solution Hayathe"
            className="h-12 sm:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </a>

        {/* Liens Centraux — En police Metropolis avec interactions aux couleurs officielles */}
        <nav className="hidden md:flex items-center gap-7 text-[14px] font-medium font-body text-[#002157]">
          <a href="#association" className="hover:text-[#ED1C24] transition-colors">
            L'Association
          </a>
          <a href="#axes" className="hover:text-[#ED1C24] transition-colors">
            Nos 6 Axes
          </a>
          <a href="#terrain" className="hover:text-[#ED1C24] transition-colors">
            Nos Projets
          </a>
          <a href="#blog" className="hover:text-[#ED1C24] transition-colors">
            Blog & Décryptages
          </a>
          <a href="#contact" className="hover:text-[#ED1C24] transition-colors">
            Contact
          </a>
        </nav>

        {/* Bouton Droite : Style pilule aux couleurs officielles (#ED1C24 / #FFCD00) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#ED1C24] hover:bg-[#c9141b] text-white transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 font-body flex items-center gap-1.5"
          >
            <Heart className="w-3.5 h-3.5 fill-white text-white" />
            <span>NOUS SOUTENIR</span>
          </a>
        </div>

        {/* Toggle Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href="#contact"
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
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3 font-body text-sm">
          <a
            href="#association"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#002157] font-semibold border-b border-slate-100"
          >
            L'Association
          </a>
          <a
            href="#axes"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#002157] font-semibold border-b border-slate-100"
          >
            Nos 6 Axes
          </a>
          <a
            href="#terrain"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#002157] font-semibold border-b border-slate-100"
          >
            Nos Projets
          </a>
          <a
            href="#blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#002157] font-semibold border-b border-slate-100"
          >
            Blog & Décryptages
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#002157] font-semibold border-b border-slate-100"
          >
            Contact
          </a>
          <a
            href="#don"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full py-3 bg-[#ED1C24] text-white font-bold text-center rounded-xl uppercase tracking-wider text-xs shadow-sm"
          >
            Faire un don
          </a>
        </div>
      )}
    </header>
  );
}
