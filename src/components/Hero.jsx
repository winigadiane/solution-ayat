import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowRight, X, Heart } from 'lucide-react';

export default function Hero() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Photos réelles de terrain de Solution Hayathe
  const heroImages = [
    {
      url: '/images/Accueil3.png',
      alt: 'Animatrice Solution Hayathe en atelier de sensibilisation communautaire',
      focus: 'object-center lg:object-[20%_center]',
      legend: 'Atelier communautaire sur l’égalité et la santé'
    },
    {
      url: '/images/Accueil1.png',
      alt: 'Atelier de leadership et cercles de parole pour jeunes filles',
      focus: 'object-center lg:object-[25%_center]',
      legend: 'Formation des jeunes femmes leaders de demain'
    },
    {
      url: '/images/Accueil2.png',
      alt: 'Distribution de kits de dignité à la salle IPPF',
      focus: 'object-center lg:object-[30%_center]',
      legend: 'Distribution de kits hygiéniques et éducation DSSR'
    }
  ];

  // Défilement automatique des photos toutes les 5 secondes
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, heroImages.length]);

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 pt-1 pb-12 sm:pb-16 max-w-[1440px] mx-auto select-none bg-white">
      
      {/* Conteneur Hero Principal : Grande carte arrondie au style exact du mockup Granter
          Aux couleurs officielles : Fond Bleu Nuit #002157 et Dégradé Institutionnel */}
      <div 
        className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden min-h-[560px] sm:min-h-[600px] lg:min-h-[640px] flex flex-col justify-between shadow-2xl bg-[#00173d]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* 1. Images de fond avec transition douce et défilement automatique */}
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence>
            <motion.img 
              key={selectedImage}
              src={heroImages[selectedImage].url} 
              alt={heroImages[selectedImage].alt}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className={`absolute inset-0 w-full h-full object-cover ${heroImages[selectedImage].focus}`}
            />
          </AnimatePresence>

          {/* 2. Gradient de superposition allégé pour laisser transparaître la photo :
              - Très transparent sur le sujet à gauche
              - Voile doux et translucide sur la droite pour assurer le contraste sans assombrir l'image */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(to right, transparent 0%, rgba(0, 33, 87, 0.12) 35%, rgba(0, 23, 61, 0.38) 65%, rgba(0, 15, 41, 0.58) 100%)'
            }}
          ></div>

          {/* Fondu très léger en bas pour les statistiques */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none"></div>
        </div>

        {/* 3. Espace supérieur avec puces de progression automatique aux couleurs de la charte */}
        <div className="relative z-10 p-6 sm:p-8 flex justify-end">
          <div className="flex items-center gap-1.5 bg-black/35 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 shadow-sm">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`relative h-2 rounded-full overflow-hidden transition-all duration-300 cursor-pointer ${
                  selectedImage === idx ? 'w-7 bg-[#FFCD00]' : 'w-2 bg-white/40 hover:bg-white/80'
                }`}
                title={`Photo ${idx + 1}`}
                aria-label={`Afficher photo ${idx + 1}`}
              >
                {selectedImage === idx && !isPaused && (
                  <motion.div
                    key={`progress-${selectedImage}`}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 5, ease: 'linear' }}
                    className="absolute inset-0 bg-[#ED1C24]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Bloc de contenu principal aligné à droite (Exactement comme dans le mockup) */}
        <div className="relative z-10 px-6 sm:px-12 lg:px-16 py-4 flex flex-col items-end">
          <div className="max-w-xl lg:max-w-2xl text-left w-full ml-auto">
            
            {/* Grand Titre en 3 lignes en police Glancyr */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] font-title drop-shadow-md"
            >
              Éduquer, accompagner <br />
              et sauver des vies <br />
              au cœur du Togo.
            </motion.h1>

            {/* Paragraphe descriptif en police Metropolis */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white/85 text-sm sm:text-base leading-relaxed font-body mt-5 max-w-lg drop-shadow-xs"
            >
              Depuis 2021, l'Association Solution Hayathe conçoit des solutions sociales innovantes, défend les droits en santé sexuelle et reproductive (DSSR) et combat les violences de genre au plus près des besoins des populations.
            </motion.p>

            {/* 5. Les deux boutons d'action aux couleurs officielles (RÉPLIQUE EXACTE DU MOCKUP) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              {/* Bouton 1 : Rouge vif officiel #ED1C24 avec flèche */}
              <a
                href="#don"
                className="px-7 py-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#ED1C24] hover:bg-[#c9141b] text-white transition-all duration-200 shadow-lg hover:shadow-red-500/30 active:scale-95 flex items-center gap-3 cursor-pointer group font-body"
              >
                <span>Faire un don</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Bouton 2 : Style exact WATCH A VIDEO (Carte blanche avec texte Bleu Nuit #002157 et miniature photo) */}
              <button
                onClick={() => setVideoModalOpen(true)}
                className="bg-white hover:bg-slate-50 text-[#002157] rounded-xl py-2 px-4 sm:px-5 flex items-center gap-4 shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 cursor-pointer group"
                aria-label="Voir la vidéo de présentation"
              >
                <span className="text-xs font-bold uppercase tracking-wider font-body">
                  Voir nos actions
                </span>

                {/* Miniature vidéo avec bouton play circulaire superposé */}
                <div className="relative w-12 h-10 rounded-lg overflow-hidden shrink-0 border border-slate-200 shadow-inner group-hover:scale-105 transition-transform">
                  <img 
                    src="/images/Accueil2.png" 
                    alt="Miniature vidéo terrain" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-xs">
                      <Play className="w-2.5 h-2.5 text-[#ED1C24] fill-[#ED1C24] ml-0.5" />
                    </div>
                  </div>
                </div>
              </button>
            </motion.div>

          </div>
        </div>

        {/* 6. Bandeau inférieur des 3 Statistiques en superposition (Exactement comme dans le mockup) */}
        <div className="relative z-10 px-6 sm:px-12 lg:px-16 pb-10 sm:pb-12 pt-4">
          <div className="max-w-xl lg:max-w-2xl ml-auto grid grid-cols-3 gap-6 sm:gap-10">
            
            {/* Stat 1 : 2021+ */}
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-title tracking-tight">
                2021+
              </div>
              <div className="text-xs text-white/75 font-body mt-1 leading-snug">
                Initiative citoyenne au Togo
              </div>
            </div>

            {/* Stat 2 : +677K */}
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-title tracking-tight">
                +677K
              </div>
              <div className="text-xs text-white/75 font-body mt-1 leading-snug">
                Personnes sensibilisées
              </div>
            </div>

            {/* Stat 3 : ★ 100% avec l'étoile Jaune Or #FFCD00 */}
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#FFCD00] font-title tracking-tight flex items-center gap-1.5">
                <span>★</span>
                <span className="text-white">100%</span>
              </div>
              <div className="text-xs text-white/75 font-body mt-1 leading-snug">
                Engagement terrain & DSSR
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Modal vidéo interactif */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative space-y-4">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-[#002157] rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Fermer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#ED1C24] flex items-center justify-center">
                <Heart className="w-5 h-5 fill-[#ED1C24]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#002157] font-title">
                  Au cœur des actions de Solution Hayathe
                </h3>
                <p className="text-xs text-[#606060] font-body">
                  Région Centrale (Sokodé) & ensemble des régions du Togo
                </p>
              </div>
            </div>

            {/* Image d'action en grand */}
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-900 border border-slate-200">
              <img 
                src={heroImages[selectedImage].url} 
                alt={heroImages[selectedImage].alt} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <p className="text-white text-xs sm:text-sm font-body">
                  {heroImages[selectedImage].legend}
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-mono">Récépissé N° 0352 MATGLA-SG-DLPAP-DOCA</span>
              <a
                href="#don"
                onClick={() => setVideoModalOpen(false)}
                className="px-5 py-2.5 rounded-xl bg-[#ED1C24] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#c9141b] transition-colors shadow-sm"
              >
                Soutenir cette mission
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
