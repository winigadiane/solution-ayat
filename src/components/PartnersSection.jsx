import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Building2, Globe2, Users2, Award } from 'lucide-react';

/* =========================================================================
   LOGOS VECTORIELS DES PARTENAIRES INSTITUTIONNELS & INTERNATIONAUX
   ========================================================================= */

function LogoMSHP({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <circle cx="20" cy="20" r="18" fill="white" stroke="#002157" strokeWidth="1.5" />
      {/* Croix de santé rouge officielle */}
      <rect x="17" y="10" width="6" height="20" rx="1.5" fill="#ED1C24" />
      <rect x="10" y="17" width="20" height="6" rx="1.5" fill="#ED1C24" />
      {/* Étoile jaune Togo centrale */}
      <circle cx="20" cy="20" r="2.5" fill="#FFCD00" />
    </svg>
  );
}

function LogoUNFPA({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <circle cx="20" cy="20" r="18" fill="#002157" />
      {/* Lauriers et silhouette ONU */}
      <circle cx="20" cy="15" r="4.5" fill="#FFCD00" />
      <path d="M12 28c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M10 20c2-3 5-5 10-5s8 2 10 5" stroke="#FFCD00" strokeWidth="1.2" strokeDasharray="1 2" />
    </svg>
  );
}

function LogoMASPFA({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <circle cx="20" cy="20" r="18" fill="white" stroke="#ED1C24" strokeWidth="1.5" />
      {/* Symbole de protection et promotion du genre */}
      <path d="M20 9l8 4v8c0 5.5-4 9-8 10-4-1-8-4.5-8-10v-8l8-4z" fill="#002157" />
      <path d="M20 15v8M16 19h8" stroke="#FFCD00" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function LogoATBEF({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <circle cx="20" cy="20" r="18" fill="#002157" />
      {/* Cœur et famille IPPF */}
      <path d="M20 28l-6-6c-2.5-2.5-2.5-6.5 0-9 2.5-2.5 6.5-2.5 9 0 2.5-2.5 6.5-2.5 9 0 2.5 2.5 2.5 6.5 0 9l-12 6z" fill="#ED1C24" />
      <circle cx="17" cy="17" r="1.5" fill="white" />
      <circle cx="23" cy="17" r="1.5" fill="white" />
    </svg>
  );
}

function LogoOMS({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <circle cx="20" cy="20" r="18" fill="white" stroke="#002157" strokeWidth="1.5" />
      {/* Bâton d'Esculape mondial */}
      <circle cx="20" cy="20" r="12" stroke="#002157" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M20 8v24" stroke="#002157" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M16 13c3-1 6 1 7 4s-4 4-2 7 5 3 5 4" stroke="#ED1C24" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function LogoFeministe({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <circle cx="20" cy="20" r="18" fill="#002157" />
      {/* Symbole Vénus & égalité */}
      <circle cx="20" cy="16" r="6" stroke="#FFCD00" strokeWidth="2.2" />
      <path d="M20 22v10M16 27h8" stroke="#FFCD00" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="20" cy="16" r="2" fill="#ED1C24" />
    </svg>
  );
}

/* =========================================================================
   LISTE DES LOGOS OFFICIELS POUR LE BANDEAU DE PARTENAIRES
   ========================================================================= */

const PARTNER_LOGOS = [
  {
    name: "Ministère de la Santé & Hygiène Publique",
    acronym: "MSHP Togo",
    category: "Tutelle Nationale",
    Logo: LogoMSHP
  },
  {
    name: "Fonds des Nations Unies pour la Population",
    acronym: "UNFPA Togo",
    category: "Coopération DSSR",
    Logo: LogoUNFPA
  },
  {
    name: "Ministère de l'Action Sociale & Femme",
    acronym: "MASPFA",
    category: "Protection du Genre",
    Logo: LogoMASPFA
  },
  {
    name: "Association Togolaise Bien-Être Familial",
    acronym: "ATBEF / IPPF",
    category: "Santé Reproductive",
    Logo: LogoATBEF
  },
  {
    name: "Organisation Mondiale de la Santé",
    acronym: "OMS Afrique",
    category: "Santé Publique",
    Logo: LogoOMS
  },
  {
    name: "Coalitions & Collectifs Féministes",
    acronym: "Réseaux Genre",
    category: "Société Civile",
    Logo: LogoFeministe
  }
];

const PARTNERSHIP_FORMATS = [
  {
    number: "01",
    tag: "COOPÉRATION PUBLIQUE",
    titleMain: "Institutions &",
    titleAccent: "ministères",
    description: "Co-construction rigoureuse avec les autorités togolaises (Ministère de la Santé et de l'Hygiène Publique, Ministère de l'Action Sociale et de la Femme). Nous alignons nos interventions sur les priorités nationales pour garantir un ancrage durable et certifié.",
    badge: "MSHP Togo · MASPFA · DRS Centrale",
    image: "/images/association1.png",
    imageAlt: "Concertation institutionnelle et plaidoyer avec les acteurs publics",
    partners: [
      { name: "MSHP Togo", role: "Tutelle Santé Publique", Logo: LogoMSHP },
      { name: "MASPFA Togo", role: "Genre & Droits des Femmes", Logo: LogoMASPFA }
    ]
  },
  {
    number: "02",
    tag: "ALLIANCES INTERNATIONALES",
    titleMain: "Organisations &",
    titleAccent: "bailleurs",
    description: "Synergies techniques et programmes conjoints avec les agences internationales (UNFPA, réseaux IPPF / ATBEF et partenaires de développement). Ces alliances permettent de massifier la distribution de kits de dignité et de financer l'accompagnement des survivantes.",
    badge: "UNFPA Togo (Allié) · ATBEF / IPPF · Mécènes",
    image: "/images/Accueil3.png",
    imageAlt: "Déploiement de programmes techniques et sessions de formation",
    partners: [
      { name: "UNFPA Togo", role: "Fonds ONU Population", Logo: LogoUNFPA },
      { name: "ATBEF / IPPF", role: "Droits Reproductifs", Logo: LogoATBEF }
    ]
  },
  {
    number: "03",
    tag: "SOCIÉTÉ CIVILE & TERRAIN",
    titleMain: "Collectifs &",
    titleAccent: "communautés",
    description: "Mobilisation étroite avec les collectifs féministes francophones, les établissements scolaires et les leaders communautaires. Une approche d'aller-vers qui assure l'adhésion populaire et l'impact direct auprès des adolescentes et des familles.",
    badge: "Réseaux Féministes · Écoles EPS · JAMOH",
    image: "/images/association2.png",
    imageAlt: "Mobilisation citoyenne et engagement communautaire de terrain",
    partners: [
      { name: "Réseaux Genre", role: "Féminisme & Justice", Logo: LogoFeministe },
      { name: "OMS Afrique", role: "Santé Communautaire", Logo: LogoOMS }
    ]
  }
];

export default function PartnersSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentFormat = PARTNERSHIP_FORMATS[activeIndex];

  return (
    <section id="partenaires" className="py-24 lg:py-32 bg-gradient-to-br from-[#002157] via-[#00173d] to-[#00122e] text-white relative overflow-hidden select-none border-y border-white/10">
      {/* Halos subtils d'arrière-plan aux couleurs officielles */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#ED1C24]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#FFCD00]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 lg:space-y-20">
        
        {/* =========================================================
            1. EN-TÊTE CENTRÉ (Style exact de la maquette de référence)
           ========================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFCD00] font-body block">
            NOS PARTENARIATS
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-title text-white tracking-tight leading-tight">
            Agir ensemble pour un impact décuplé.
          </h2>

          {/* Sélecteur de format / onglets interactifs */}
          <div className="flex items-center justify-center gap-2 pt-6 flex-wrap">
            {PARTNERSHIP_FORMATS.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold font-body transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  activeIndex === idx
                    ? 'bg-white text-[#002157] shadow-xl shadow-black/20 scale-105'
                    : 'bg-white/10 text-white/70 hover:bg-white/15 hover:text-white border border-white/15'
                }`}
              >
                <span className="text-[#ED1C24] font-mono font-bold">{item.number}</span>
                <span>{item.tag}</span>
              </button>
            ))}
          </div>
        </div>

        {/* =========================================================
            2. CONTENU PRINCIPAL (Grille 2 Colonnes : Texte & Grande Image)
           ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Colonne Gauche : Grand numéro filigrane, Titre bicolore, Logos associés & Description */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${activeIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                {/* Grand chiffre filigrane "01", "02", "03" */}
                <div className="text-6xl sm:text-7xl lg:text-8xl font-black font-title text-white/15 leading-none select-none">
                  {currentFormat.number}
                </div>

                {/* Titre avec mot d'accent stylisé */}
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-title text-white tracking-tight leading-[1.08]">
                  {currentFormat.titleMain} <br />
                  <span className="text-[#FFCD00] italic font-serif font-normal">
                    {currentFormat.titleAccent}
                  </span>
                </h3>

                {/* Logos spécifiques de ce format de partenariat */}
                <div className="flex items-center gap-3 pt-1">
                  {currentFormat.partners.map((p, pIdx) => {
                    const PartnerLogo = p.Logo;
                    return (
                      <div
                        key={pIdx}
                        className="flex items-center gap-2.5 bg-white/10 backdrop-blur-xs px-3.5 py-2 rounded-xl border border-white/15 shadow-sm"
                      >
                        <PartnerLogo className="w-6 h-6 shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-white font-title">{p.name}</div>
                          <div className="text-[10px] text-[#FFCD00] font-body">{p.role}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Description fluide en police Metropolis */}
                <p className="text-sm sm:text-base text-slate-200 font-body leading-relaxed max-w-lg">
                  {currentFormat.description}
                </p>

                {/* Badge d'alliés clés */}
                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#FFCD00] shrink-0" />
                  <span className="text-xs text-white font-medium font-body">
                    {currentFormat.badge}
                  </span>
                </div>

                {/* Bouton d'action */}
                <div className="pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#ED1C24] hover:bg-[#c9141b] shadow-lg hover:shadow-red-600/30 transition-all cursor-pointer font-body group active:scale-95"
                  >
                    <span>Proposer une alliance</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Colonne Droite : Grande image élégante avec coins arrondis profonds */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={`img-${activeIndex}`}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-white/5 border border-white/15 shadow-2xl shadow-black/60 aspect-[4/3] sm:aspect-[16/10] w-full"
              >
                <img
                  src={currentFormat.image}
                  alt={currentFormat.imageAlt}
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Dégradé de fond subtil pour le contraste */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent pointer-events-none" />

                {/* Légende au bas de la photo */}
                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs text-white/90">
                  <span className="font-body font-medium bg-[#00173d]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                    {currentFormat.imageAlt}
                  </span>
                  <span className="hidden sm:inline-block font-mono text-[#FFCD00] font-bold">
                    {currentFormat.number} / 03
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* =========================================================
            3. BANDEAU DE LOGOS DE NOS PARTENAIRES (Grille Complète)
           ========================================================= */}
        <div className="pt-10 border-t border-white/15 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 font-body">
              <Award className="w-4 h-4 text-[#FFCD00]" />
              <span>Institutions & Organisations partenaires</span>
            </div>
            <span className="text-[11px] text-slate-400 font-body hidden sm:inline-block">
              Coopérations actives au Togo
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {PARTNER_LOGOS.map((partner, idx) => {
              const LogoComp = partner.Logo;
              return (
                <div
                  key={idx}
                  className="bg-white/5 hover:bg-white/10 rounded-2xl p-4 border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col items-center text-center space-y-2.5 group cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center p-2 group-hover:scale-110 transition-transform shadow-xs">
                    <LogoComp className="w-full h-full" />
                  </div>
                  <div>
                    <div className="font-title font-bold text-xs text-white group-hover:text-[#FFCD00] transition-colors leading-tight">
                      {partner.acronym}
                    </div>
                    <div className="text-[10px] text-slate-300 font-body line-clamp-1 mt-0.5">
                      {partner.category}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
