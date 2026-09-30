import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

/* =========================================================================
   ILLUSTRATIONS VECTORIELLES ROUGES SUR-MESURE (Bottom-Right Line Art)
   ========================================================================= */

// 1. Illustration : Santé Sexuelle & Droits Reproductifs (DSSR / Kits / Prévention)
function IllustDSSR({ className = "w-12 h-12" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} stroke="#ED1C24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Trousse de santé et cœur */}
      <rect x="8" y="14" width="32" height="24" rx="4" fill="#ED1C24" fillOpacity="0.08" />
      <path d="M18 14V10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" />
      <path d="M24 20v12M18 26h12" strokeWidth="2.2" />
      <circle cx="34" cy="32" r="6" fill="white" stroke="#ED1C24" strokeWidth="1.5" />
      <path d="M34 29.5l.6.9 1.1.2-.8.8.2 1.1-1.1-.6-1.1.6.2-1.1-.8-.8 1.1-.2.6-.9z" fill="#ED1C24" stroke="none" />
    </svg>
  );
}

// 2. Illustration : Féminisme, Genre & Lutte contre les VBG (Justice / Protection)
function IllustVBG({ className = "w-12 h-12" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} stroke="#ED1C24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Bouclier et balance de justice / égalité */}
      <path d="M24 6l14 6v12c0 10-8 16-14 18-6-2-14-8-14-18V12l14-6z" fill="#ED1C24" fillOpacity="0.08" />
      <path d="M24 14v16" strokeWidth="2" />
      <path d="M16 20h16" strokeWidth="2" />
      <path d="M14 26l4-6 4 6a4 4 0 0 1-8 0z" fill="#ED1C24" fillOpacity="0.15" />
      <path d="M26 26l4-6 4 6a4 4 0 0 1-8 0z" fill="#ED1C24" fillOpacity="0.15" />
    </svg>
  );
}

// 3. Illustration : Concept One Health & Espaces Promoteurs (Santé Globale & Écoles)
function IllustOneHealth({ className = "w-12 h-12" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} stroke="#ED1C24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Globe & feuille entrelacée */}
      <circle cx="24" cy="24" r="16" fill="#ED1C24" fillOpacity="0.08" />
      <path d="M8 24h32" />
      <path d="M24 8c4 4 6.5 10 6.5 16s-2.5 12-6.5 16c-4-4-6.5-10-6.5-16s2.5-12 6.5-12z" />
      <path d="M24 16c0 0 8 4 8 9s-4 7-8 7-8-2-8-7 8-9 8-9z" fill="#ED1C24" fillOpacity="0.2" />
    </svg>
  );
}

// 4. Illustration : Compétences Psychosociales (CPS & Émancipation des Filles)
function IllustCPS({ className = "w-12 h-12" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} stroke="#ED1C24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Esprit, cœur et épanouissement */}
      <circle cx="24" cy="18" r="8" fill="#ED1C24" fillOpacity="0.08" />
      <path d="M16 38c0-5 3.5-9 8-9s8 4 8 9" strokeWidth="2" />
      <path d="M24 14l1.2 2.5 2.8.4-2 2 .5 2.8-2.5-1.3-2.5 1.3.5-2.8-2-2 2.8-.4L24 14z" fill="#ED1C24" stroke="none" />
      <circle cx="35" cy="14" r="4" fill="white" stroke="#ED1C24" strokeWidth="1.5" />
      <path d="M35 12v4M33 14h4" strokeWidth="1.5" />
    </svg>
  );
}

// 5. Illustration : Engagement Communautaire (EES & Clinique Mobile JAMOH)
function IllustCommunity({ className = "w-12 h-12" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} stroke="#ED1C24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Mégaphone & mobilisation de proximité */}
      <path d="M34 14l-12 5H10a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4l4 7h4l-2-7h4l12 5V14z" fill="#ED1C24" fillOpacity="0.08" />
      <path d="M38 18a6 6 0 0 1 0 12" strokeWidth="2" />
      <path d="M42 14a12 12 0 0 1 0 20" strokeWidth="1.5" />
    </svg>
  );
}

// 6. Illustration : Recherche-Action & Innovation Sociale
function IllustResearch({ className = "w-12 h-12" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} stroke="#ED1C24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Fiole d'expérimentation, données & innovation */}
      <path d="M20 8h8M24 8v8l8 16a3 3 0 0 1-2.7 4H18.7A3 3 0 0 1 16 32l8-16V8z" fill="#ED1C24" fillOpacity="0.08" />
      <path d="M19 26h10" />
      <circle cx="22" cy="30" r="1.5" fill="#ED1C24" stroke="none" />
      <circle cx="26" cy="28" r="1" fill="#ED1C24" stroke="none" />
    </svg>
  );
}

/* =========================================================================
   DONNÉES DES 6 DOMAINES DE SERVICES
   ========================================================================= */

const SERVICES_DATA = [
  {
    id: 'dssr',
    title: 'Santé Sexuelle & DSSR',
    description: 'Sensibilisation en milieu scolaire et communautaire, accès à l’information éclairée et distribution de kits d’hygiène menstruelle lavables.',
    featured: false,
    illustration: IllustDSSR
  },
  {
    id: 'vbg',
    title: 'Genre & Lutte contre les VBG',
    description: 'Accompagnement holistique des survivantes de violences basées sur le genre, plaidoyer pour l’égalité des droits et leadership féminin.',
    featured: true, // carte active au style rouge comme dans la maquette
    illustration: IllustVBG
  },
  {
    id: 'onehealth',
    title: 'Approche One Health',
    description: 'Déploiement d’espaces promoteurs de santé (EPS) reliant santé humaine, santé animale et préservation de l’environnement.',
    featured: false,
    illustration: IllustOneHealth
  },
  {
    id: 'cps',
    title: 'Compétences Psychosociales',
    description: 'Ateliers d’autonomisation et renforcement de la résilience, prise de parole et estime de soi auprès des adolescentes et jeunes filles.',
    featured: false,
    illustration: IllustCPS
  },
  {
    id: 'community',
    title: 'Engagement & JAMOH',
    description: 'Animation d’Espaces d’Écoute et de Soutien (EES) et organisation de Journées d’Action Médicale et d’Orientation Hayathe.',
    featured: false,
    illustration: IllustCommunity
  },
  {
    id: 'research',
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
      {/* Halo subtil de fond */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-red-50/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================
            1. EN-TÊTE CENTRÉ
           ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Grand Titre Glancyr */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002157] font-title tracking-tight leading-[1.15]">
            Des solutions concrètes au service de nos communautés
          </h2>
        </div>

        {/* =========================================================
            2. GRILLE DE CARTES (3 Colonnes - Style fidèle à la maquette)
           ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service) => {
            const isSelected = activeCard === service.id;
            const IllustrationComponent = service.illustration;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveCard(service.id)}
                className={`group bg-white rounded-3xl p-7 sm:p-8 border transition-all duration-300 relative overflow-hidden flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'border-slate-300 shadow-xl shadow-slate-200/80 -translate-y-1'
                    : 'border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-lg hover:-translate-y-0.5'
                }`}
              >
                {/* Haut de la carte : Titre & Description */}
                <div className="space-y-3 relative z-10 mb-8">
                  <h3 className="font-title font-bold text-xl sm:text-2xl text-[#002157] group-hover:text-[#ED1C24] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm sm:text-base text-[#606060] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bas de la carte : Bouton rond d'action + Illustration en coin */}
                <div className="flex items-end justify-between relative pt-4 mt-auto">
                  
                  {/* Bouton flèche gauche + Libellé "En savoir plus" */}
                  <div className="flex items-center gap-3 relative z-10">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? 'bg-[#ED1C24] text-white shadow-md shadow-[#ED1C24]/30 scale-105'
                          : 'bg-slate-100 text-slate-700 group-hover:bg-[#ED1C24] group-hover:text-white group-hover:scale-105'
                      }`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-[#606060] group-hover:text-[#002157] transition-colors">
                      En savoir plus
                    </span>
                  </div>

                  {/* Découpe circulaire fond + Illustration vectorielle rouge en bas à droite */}
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-slate-50/90 group-hover:bg-red-50/60 border border-slate-100 group-hover:border-red-100 absolute -bottom-6 -right-6 flex items-center justify-center transition-all duration-300 pointer-events-none">
                    <div className="transform translate-x-1 translate-y-1 group-hover:scale-110 transition-transform duration-300">
                      <IllustrationComponent className="w-12 h-12 sm:w-14 sm:h-14" />
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================
            3. BANNIÈRE PILL INFÉRIEURE (Exactement comme dans la maquette)
           ========================================================= */}
        <div className="mt-14 max-w-3xl mx-auto rounded-2xl sm:rounded-full bg-slate-50 border border-slate-200/90 p-3 sm:p-3.5 px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          
          <p className="text-xs sm:text-sm font-medium text-[#002157] font-body text-center sm:text-left">
            Faites confiance à notre engagement terrain pour vos projets de santé et d'égalité.
          </p>

          <a
            href="#don"
            className="px-6 py-2.5 rounded-xl sm:rounded-full bg-[#ED1C24] hover:bg-[#c9141b] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer shrink-0 active:scale-95"
          >
            Explorer nos actions
          </a>

        </div>

      </div>
    </section>
  );
}
