import React from 'react';
import { ArrowRight } from 'lucide-react';

/* =========================================================================
   ICÔNES SUR-MESURE HAUT DE GAMME (Bespoke Vector Icons pour Solution Hayathe)
   ========================================================================= */

// 1. Icône Custom : Valeurs, Droits Humains & Justice Genre (DSSR)
function IconValuesBespoke({ className = "w-12 h-12" }) {
  return (
    <div className={`${className} rounded-full bg-[#ED1C24] text-white flex items-center justify-center shadow-md shadow-[#ED1C24]/25 shrink-0 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#ED1C24]/40 transition-all duration-300`}>
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        {/* Cœur et ailes de liberté / protection */}
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        {/* Égalité & balance centrale */}
        <path d="M8.5 11h7" strokeWidth="2.2" />
        <path d="M9.5 14h5" strokeWidth="2.2" />
      </svg>
    </div>
  );
}

// 2. Icône Custom : Mission, Approche One Health & Proximité
function IconMissionBespoke({ className = "w-12 h-12" }) {
  return (
    <div className={`${className} rounded-full bg-[#002157] text-white flex items-center justify-center shadow-md shadow-[#002157]/25 shrink-0 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#002157]/40 transition-all duration-300`}>
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        {/* Sphère One Health interconnectée */}
        <circle cx="12" cy="12" r="9" />
        {/* Courbes orbitales de synergie (Santé humaine, animale, végétale) */}
        <path d="M3.6 9h16.8" />
        <path d="M3.6 15h16.8" />
        <path d="M12 3a14 14 0 0 1 0 18" />
        <path d="M12 3a14 14 0 0 0 0 18" />
        <circle cx="12" cy="12" r="2.5" fill="white" stroke="none" />
      </svg>
    </div>
  );
}

// 3. Icône Custom : Trophée d'expérience (Badge 4+ ans)
function CustomTrophyIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2" />
      <path d="M18 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2" />
      <path d="M6 3h12v7a6 6 0 0 1-12 0V3z" fill="#FFCD00" fillOpacity="0.2" />
      <path d="M12 16v4" />
      <path d="M8 20h8" />
    </svg>
  );
}

/* =========================================================================
   COMPOSANT PRINCIPAL : AboutSection
   ========================================================================= */

export default function AboutSection() {
  return (
    <section id="association" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Fond subtil épuré */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-50/50 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* =========================================================
              COLONNE GAUCHE : Composition Asymétrique 3 Photos + Badge
             ========================================================= */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[500px] h-[480px] sm:h-[540px]">

              {/* 1. Petite photo flottante en haut à gauche (0° inclinaison / parfaitement droite) */}
              <div className="absolute top-0 left-2 sm:left-4 w-36 sm:w-44 h-28 sm:h-36 rounded-2xl overflow-hidden shadow-lg border-4 border-white z-10">
                <img
                  src="/images/Accueil1.png"
                  alt="Atelier terrain Solution Hayathe"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 2. Grande photo centrale verticale (0° inclinaison / parfaitement droite) */}
              <div className="absolute top-6 left-16 sm:left-20 right-4 sm:right-8 h-[400px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-0">
                <img
                  src="/images/association2.png"
                  alt="Équipe et leadership Solution Hayathe"
                  className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002157]/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* 3. Photo superposée en bas à droite (0° inclinaison / parfaitement droite) */}
              <div className="absolute bottom-4 sm:bottom-2 right-0 w-44 sm:w-56 h-32 sm:h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white z-20">
                <img
                  src="/images/association.png"
                  alt="Rencontre institutionnelle et plaidoyer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 4. Badge flottant d'expérience en bas à gauche */}
              <div className="absolute -bottom-2 sm:bottom-2 left-0 sm:left-2 z-30 bg-[#002157] text-white px-5 py-4 sm:px-6 sm:py-5 rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-white/20 flex items-center gap-3.5 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 shrink-0 text-[#FFCD00]">
                  <CustomTrophyIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-title text-2xl sm:text-3xl font-extrabold tracking-tight text-white flex items-center">
                    4<span className="text-[#ED1C24]">+</span>
                  </div>
                  <div className="text-[11px] sm:text-xs text-white/80 font-body font-medium leading-tight">
                    Années d'action terrain<br />
                    <span className="text-[#FFCD00] font-semibold">Depuis 2021</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* =========================================================
              COLONNE DROITE : Contenus Épurés Sans Contenants & Icônes Custom
             ========================================================= */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">

            {/* Tag officiel moderne et épuré */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/90 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ED1C24] opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ED1C24]"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#002157] font-body">
                À Propos de Solution Hayathe
              </span>
            </div>

            {/* Grand Titre en Glancyr */}
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#002157] font-title tracking-tight leading-[1.15]">
              Nous Bâtissons des Solutions Durables pour la Santé & l'Égalité
            </h2>

            {/* Paragraphe descriptif en Metropolis */}
            <p className="text-base text-[#606060] font-body leading-relaxed">
              Initiative citoyenne née en 2021 au Togo, l’<strong>Association Solution Hayathe</strong> (<em>« Solution de Vie »</em>) œuvre pour un accès équitable aux soins, l'autonomie des jeunes filles et la justice sociale grâce au renforcement des compétences psychosociales (CPS) et à la santé communautaire.
            </p>

            {/* =========================================================
                CONTENUS PURS SANS CONTENANTS (Cards retirées, Icônes Custom)
               ========================================================= */}
            <div className="space-y-6 pt-2">

              {/* Item 1 : Valeurs & Droits Humains */}
              <div className="flex items-start gap-4 sm:gap-5 group">
                <IconValuesBespoke className="w-12 h-12 shrink-0" />
                <div className="space-y-1 pt-0.5">
                  <h3 className="text-lg sm:text-xl font-bold text-[#002157] font-title group-hover:text-[#ED1C24] transition-colors">
                    Nos Valeurs & Droits Humains
                  </h3>
                  <p className="text-sm sm:text-base text-[#606060] font-body leading-relaxed">
                    Défense intransigeante des Droits en Santé Sexuelle et Reproductive (DSSR), équité de genre et tolérance zéro face aux violences basées sur le genre (VBG).
                  </p>
                </div>
              </div>

              {/* Item 2 : Mission & One Health */}
              <div className="flex items-start gap-4 sm:gap-5 group">
                <IconMissionBespoke className="w-12 h-12 shrink-0" />
                <div className="space-y-1 pt-0.5">
                  <h3 className="text-lg sm:text-xl font-bold text-[#002157] font-title group-hover:text-[#002157] transition-colors">
                    Notre Mission & One Health
                  </h3>
                  <p className="text-sm sm:text-base text-[#606060] font-body leading-relaxed">
                    Promotion de la santé globale appliquée aux milieux de vie (écoles, foyers, quartiers), recherche participative et développement des compétences de vie.
                  </p>
                </div>
              </div>

            </div>

            {/* Rangée Direction / Leader & Bouton CTA (Pill Button) */}
            <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">

              {/* Leader Avatar & Titre */}
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#002157]/20 shadow-sm shrink-0 bg-slate-100">
                  <img
                    src="/images/logo.png"
                    alt="Direction Solution Hayathe"
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#002157] font-title">
                    Direction & Équipe
                  </div>
                  <div className="text-xs text-[#606060] font-body">
                    Association Solution Hayathe · Togo
                  </div>
                </div>
              </div>

              {/* Bouton Pill "En savoir plus" */}
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#002157] hover:bg-[#ED1C24] shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer shrink-0 active:scale-95"
              >
                <span>En Savoir Plus</span>
                <ArrowRight className="w-4 h-4" />
              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
