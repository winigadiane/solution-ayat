import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

/* =========================================================================
   ILLUSTRATIONS VECTORIELLES BI-COLORES (#002157 Bleu Nuit & #ED1C24 Rouge)
   ========================================================================= */

// 1. Illustration : Santé Sexuelle & Droits Reproductifs (DSSR)
function IllustDSSR({ className = "w-12 h-12" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Trousse médicale en Bleu Nuit avec fond subtil */}
      <rect x="8" y="14" width="32" height="24" rx="4" stroke="#002157" fill="#002157" fillOpacity="0.05" />
      <path d="M18 14V10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" stroke="#002157" />
      
      {/* Croix centrale et cœur d'action en Rouge Officiel */}
      <path d="M24 20v12M18 26h12" stroke="#ED1C24" strokeWidth="2.4" />
      <circle cx="34" cy="32" r="5" fill="white" stroke="#ED1C24" strokeWidth="1.5" />
      <path d="M34 30v4M32 32h4" stroke="#ED1C24" strokeWidth="1.2" />
    </svg>
  );
}

// 2. Illustration : Féminisme, Genre & Lutte contre les VBG
function IllustVBG({ className = "w-12 h-12" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Bouclier protecteur en Bleu Nuit */}
      <path d="M24 6l14 6v12c0 10-8 16-14 18-6-2-14-8-14-18V12l14-6z" stroke="#002157" fill="#002157" fillOpacity="0.05" />
      
      {/* Balance de justice et cœur en Rouge Officiel */}
      <path d="M24 14v16" stroke="#ED1C24" strokeWidth="2.2" />
      <path d="M16 20h16" stroke="#ED1C24" strokeWidth="2.2" />
      <path d="M14 26l4-6 4 6a4 4 0 0 1-8 0z" stroke="#ED1C24" fill="#ED1C24" fillOpacity="0.15" />
      <path d="M26 26l4-6 4 6a4 4 0 0 1-8 0z" stroke="#ED1C24" fill="#ED1C24" fillOpacity="0.15" />
    </svg>
  );
}

// 3. Illustration : Concept One Health & Espaces Promoteurs
function IllustOneHealth({ className = "w-12 h-12" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Globe One Health en Bleu Nuit */}
      <circle cx="24" cy="24" r="16" stroke="#002157" fill="#002157" fillOpacity="0.05" />
      <path d="M8 24h32" stroke="#002157" />
      <path d="M24 8c4 4 6.5 10 6.5 16s-2.5 12-6.5 16c-4-4-6.5-10-6.5-16s2.5-12 6.5-12z" stroke="#002157" />
      
      {/* Feuille de vitalité au centre en Rouge Officiel */}
      <path d="M24 15c0 0 7 3.5 7 8s-3.5 6.5-7 6.5-7-2-7-6.5 7-8 7-8z" stroke="#ED1C24" fill="#ED1C24" fillOpacity="0.2" strokeWidth="1.8" />
    </svg>
  );
}

// 4. Illustration : Compétences Psychosociales (CPS)
function IllustCPS({ className = "w-12 h-12" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Silhouette & esprit en Bleu Nuit */}
      <circle cx="24" cy="18" r="8" stroke="#002157" fill="#002157" fillOpacity="0.05" />
      <path d="M15 38c0-5 4-9 9-9s9 4 9 9" stroke="#002157" strokeWidth="2" />
      
      {/* Étincelle d'émancipation et d'autonomie en Rouge & Jaune */}
      <path d="M24 13l1.2 2.5 2.8.4-2 2 .5 2.8-2.5-1.3-2.5 1.3.5-2.8-2-2 2.8-.4L24 13z" fill="#ED1C24" stroke="none" />
      <circle cx="35" cy="14" r="4" fill="white" stroke="#ED1C24" strokeWidth="1.5" />
      <path d="M35 12v4M33 14h4" stroke="#ED1C24" strokeWidth="1.5" />
    </svg>
  );
}

// 5. Illustration : Engagement Communautaire & JAMOH
function IllustCommunity({ className = "w-12 h-12" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Mégaphone en Bleu Nuit */}
      <path d="M34 14l-12 5H10a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4l4 7h4l-2-7h4l12 5V14z" stroke="#002157" fill="#002157" fillOpacity="0.05" />
      
      {/* Ondes sonores & énergie en Rouge */}
      <path d="M38 18a6 6 0 0 1 0 12" stroke="#ED1C24" strokeWidth="2.2" />
      <path d="M42 14a12 12 0 0 1 0 20" stroke="#ED1C24" strokeWidth="1.8" />
    </svg>
  );
}

// 6. Illustration : Recherche-Action & Innovation Sociale
function IllustResearch({ className = "w-12 h-12" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Éprouvette en Bleu Nuit */}
      <path d="M20 8h8M24 8v8l8 16a3 3 0 0 1-2.7 4H18.7A3 3 0 0 1 16 32l8-16V8z" stroke="#002157" fill="#002157" fillOpacity="0.05" />
      <path d="M19 26h10" stroke="#002157" strokeDasharray="2 2" />
      
      {/* Molécules et données probantes en Rouge */}
      <circle cx="22" cy="30" r="2" fill="#ED1C24" stroke="none" />
      <circle cx="26" cy="27" r="1.5" fill="#ED1C24" stroke="none" />
      <circle cx="24" cy="23" r="1" fill="#ED1C24" stroke="none" />
    </svg>
  );
}

/* =========================================================================
   DONNÉES DES 6 DOMAINES DE SERVICES (Avec Nuances Thème Bleu & Rouge)
   ========================================================================= */

const SERVICES_DATA = [
  {
    id: 'dssr',
    tag: 'Santé Publique',
    theme: 'red',
    title: 'Santé Sexuelle & DSSR',
    description: 'Sensibilisation en milieu scolaire et communautaire, accès à l’information éclairée et distribution de kits d’hygiène menstruelle lavables.',
    featured: false,
    illustration: IllustDSSR
  },
  {
    id: 'vbg',
    tag: 'Droits & Genre',
    theme: 'navy',
    title: 'Genre & Lutte contre les VBG',
    description: 'Accompagnement holistique des survivantes de violences basées sur le genre, plaidoyer pour l’égalité des droits et leadership féminin.',
    featured: true,
    illustration: IllustVBG
  },
  {
    id: 'onehealth',
    tag: 'Approche Globale',
    theme: 'navy',
    title: 'Approche One Health',
    description: 'Déploiement d’espaces promoteurs de santé (EPS) reliant santé humaine, santé animale et préservation de l’environnement.',
    featured: false,
    illustration: IllustOneHealth
  },
  {
    id: 'cps',
    tag: 'Autonomie & Jeunesse',
    theme: 'red',
    title: 'Compétences Psychosociales',
    description: 'Ateliers d’autonomisation et renforcement de la résilience, prise de parole et estime de soi auprès des adolescentes et jeunes filles.',
    featured: false,
    illustration: IllustCPS
  },
  {
    id: 'community',
    tag: 'Terrain & Proximité',
    theme: 'navy',
    title: 'Engagement & JAMOH',
    description: 'Animation d’Espaces d’Écoute et de Soutien (EES) et organisation de Journées d’Action Médicale et d’Orientation Hayathe.',
    featured: false,
    illustration: IllustCommunity
  },
  {
    id: 'research',
    tag: 'Plaidoyer Éclairé',
    theme: 'red',
    title: 'Recherche & Innovation',
    description: 'Enquêtes participatives de terrain, capitalisation des savoirs communautaires et élaboration de solutions durables et réplicables.',
    featured: false,
    illustration: IllustResearch
  }
];

/* =========================================================================
   COMPOSANT PRINCIPAL : ServicesSection
   ========================================================================= */

export default function ServicesSection() {
  const [activeCard, setActiveCard] = useState('vbg');

  return (
    <section id="axes" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Halos subtils du thème : Bleu Nuit à gauche, Rouge à droite */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-red-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================
            1. EN-TÊTE CENTRÉ (Grand Titre Glancyr)
           ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002157] font-title tracking-tight leading-[1.15]">
            Des solutions concrètes au service de nos communautés
          </h2>
        </div>

        {/* =========================================================
            2. GRILLE DE CARTES (3 Colonnes - Harmonie Bleu Nuit & Rouge)
           ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service) => {
            const isSelected = activeCard === service.id;
            const IllustrationComponent = service.illustration;
            const isNavy = service.theme === 'navy';

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveCard(service.id)}
                className={`group bg-white rounded-3xl p-7 sm:p-8 border transition-all duration-300 relative overflow-hidden flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? isNavy
                      ? 'border-[#002157]/40 shadow-xl shadow-blue-950/10 -translate-y-1'
                      : 'border-[#ED1C24]/40 shadow-xl shadow-red-500/10 -translate-y-1'
                    : 'border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-lg hover:-translate-y-0.5'
                }`}
              >
                {/* Haut de la carte : Tag, Titre & Description */}
                <div className="space-y-3 relative z-10 mb-8">
                  {/* Petit badge thématique Bleu Nuit / Rouge */}
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold font-body uppercase tracking-wider">
                    {isNavy ? (
                      <span className="text-[#002157] bg-blue-50 border border-blue-200/80 px-2 py-0.5 rounded-full">
                        {service.tag}
                      </span>
                    ) : (
                      <span className="text-[#ED1C24] bg-red-50 border border-red-200/80 px-2 py-0.5 rounded-full">
                        {service.tag}
                      </span>
                    )}
                  </div>

                  <h3
                    className={`font-title font-bold text-xl sm:text-2xl transition-colors leading-snug ${
                      isSelected
                        ? isNavy ? 'text-[#002157]' : 'text-[#ED1C24]'
                        : 'text-[#002157] group-hover:text-[#ED1C24]'
                    }`}
                  >
                    {service.title}
                  </h3>
                  
                  <p className="font-body text-sm sm:text-base text-[#606060] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bas de la carte : Bouton rond d'action + Illustration Bi-colore */}
                <div className="flex items-center justify-between pt-4 mt-auto border-t border-slate-100">
                  
                  {/* Bouton flèche gauche + Libellé "En savoir plus" */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? isNavy
                            ? 'bg-[#002157] text-white shadow-md shadow-[#002157]/30 scale-105'
                            : 'bg-[#ED1C24] text-white shadow-md shadow-[#ED1C24]/30 scale-105'
                          : isNavy
                            ? 'bg-blue-50 text-[#002157] group-hover:bg-[#002157] group-hover:text-white group-hover:scale-105'
                            : 'bg-slate-100 text-slate-700 group-hover:bg-[#ED1C24] group-hover:text-white group-hover:scale-105'
                      }`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    <span
                      className={`text-xs font-semibold transition-colors ${
                        isSelected
                          ? isNavy ? 'text-[#002157]' : 'text-[#ED1C24]'
                          : 'text-[#606060] group-hover:text-[#002157]'
                      }`}
                    >
                      En savoir plus
                    </span>
                  </div>

                  {/* Illustration Bi-Colore (#002157 & #ED1C24) sans contenant */}
                  <div className="shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                    <IllustrationComponent className="w-11 h-11 sm:w-12 sm:h-12" />
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================
            3. BANNIÈRE PILL INFÉRIEURE (Bleu Nuit & Rouge)
           ========================================================= */}
        <div className="mt-14 max-w-3xl mx-auto rounded-2xl sm:rounded-full bg-slate-50 border border-slate-200/90 p-3 sm:p-3.5 px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          
          <div className="flex items-center gap-2.5 text-center sm:text-left">
            <span className="w-2 h-2 rounded-full bg-[#002157] shrink-0 hidden sm:inline-block" />
            <p className="text-xs sm:text-sm font-medium text-[#002157] font-body">
              Faites confiance à notre engagement terrain pour vos projets de santé et d'égalité.
            </p>
          </div>

          <a
            href="#don"
            className="px-6 py-2.5 rounded-xl sm:rounded-full bg-[#002157] hover:bg-[#ED1C24] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer shrink-0 active:scale-95"
          >
            Explorer nos actions
          </a>

        </div>

      </div>
    </section>
  );
}
