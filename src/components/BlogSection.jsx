import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  X, 
  Clock, 
  Calendar, 
  Share2, 
  Check, 
  User, 
  Video,
  BookOpen
} from 'lucide-react';

/* =========================================================================
   PUBLICATIONS, WEBINAIRES ET DÉCRYPTAGES RÉELS — SOLUTION HAYATHE
   ========================================================================= */

const BLOG_CATEGORIES = [
  { id: 'all', label: 'Tous les décryptages' },
  { id: 'dssr', label: 'DSSR & Contraception' },
  { id: 'mgf', label: 'Lutte contre les MGF' },
  { id: 'sante', label: 'Santé Féminine & Maternité' },
  { id: 'droits', label: 'Droits & Avortement Sécurisé' }
];

const BLOG_ARTICLES = [
  {
    id: 'webinaire-pilule-contraception',
    category: 'dssr',
    categoryBadge: 'CONTRACEPTION & DSSR',
    date: '25 JUILLET 2026',
    formattedDate: '25 Juillet 2026',
    readTime: '4 min de lecture',
    author: 'Mensah Komla Miranda (Technicien Supérieur de Pharmacie)',
    format: 'Webinaire & Analyse',
    title: 'La pilule du lendemain n’est pas un bonbon : Décryptage des fausses informations contraceptives',
    shortDesc: 'Démystification des idées reçues sur la contraception d’urgence, les posologies et les alternatives durables pour la jeunesse.',
    image: '/images/blog.png',
    fullContent: `
      La désinformation autour de la contraception d'urgence représente un enjeu de santé publique majeur au Togo et dans la sous-région. Lors de notre webinaire mensuel, Mensah Komla Miranda, technicien supérieur de pharmacie, a déconstruit les mythes persistants sur la prise répétée de la pilule du lendemain.

      La contraception d'urgence ne doit en aucun cas se substituer à une méthode contraceptive régulière et éclairée. Les abus de prise sans suivi médical entraînent des dérèglements hormonaux sévères et n'offrent aucune protection contre les infections sexuellement transmissibles (IST/VIH).

      Solution Hayathe intensifie ses sessions de sensibilisation en français et en langue locale (Éwé) pour garantir un accès équitable aux informations scientifiques et médicales fiables.
    `,
    highlights: [
      'Explication des différences fondamentales entre contraception régulière et contraception d’urgence',
      'Sensibilisation aux effets secondaires des prises rapprochées et anarchiques',
      'Orientation vers les centres de santé communautaires partenaires pour un suivi gynécologique sécurisé'
    ]
  },
  {
    id: 'webinaire-endometriose',
    category: 'sante',
    categoryBadge: 'SANTÉ DES FEMMES',
    date: '29 AOÛT 2026',
    formattedDate: '29 Août 2026',
    readTime: '5 min de lecture',
    author: 'Méschak Gnaro & Manon Clavel (Santé Publique & Genre)',
    format: 'Webinaire & Témoignages',
    title: 'Vivre avec l’endométriose : Deux voix expertes pour briser le silence et la douleur',
    shortDesc: 'Regards croisés entre consultante en santé sexuelle et experte en éducation à la santé pour lever le tabou des règles douloureuses.',
    image: '/images/blog1.png',
    fullContent: `
      Longtemps banalisée ou ignorée, l'endométriose touche une femme en âge de procréer sur dix à l'échelle mondiale, avec un retard diagnostique particulièrement alarmant en Afrique de l'Ouest (souvent supérieur à 7 ans).

      Méschak GNARO (Consultante en genre et santé reproductive) et Manon CLAVEL (Master en Éducation à la Santé) ont uni leurs voix pour expliquer les symptômes d'alerte, les mécanismes inflammatoires et la prise en charge globale nécessaire.

      Souffrir pendant ses règles n'est pas normal. Briser le silence permet d'orienter précocement les jeunes filles vers des bilans échographiques adaptés et d'adapter leur scolarité et vie professionnelle.
    `,
    highlights: [
      'Identification des signaux d’alerte : dysménorrhées intenses, douleurs pelviennes chroniques',
      'Plaidoyer pour la formation des personnels de santé de première ligne au diagnostic précoce',
      'Accompagnement psychologique et nutritionnel des patientes diagnostiquées'
    ]
  },
  {
    id: 'live-mgf-excision-bilan',
    category: 'mgf',
    categoryBadge: 'LUTTE CONTRE LES MGF',
    date: '11 SEPTEMBRE 2026',
    formattedDate: '11 Septembre 2026',
    readTime: '6 min de lecture',
    author: 'Hayathe Ayeva & Coalition Ouest-Africaine',
    format: '48H de Live Synchro',
    title: 'Mutilations Génitales Féminines : 20 350+ personnes mobilisées pour l’Opération Zéro MGF',
    shortDesc: 'Bilan d’impact de la grande mobilisation transfrontalière (Togo, Mali, Côte d’Ivoire, Cameroun) pour l’intégrité physique des filles.',
    image: '/images/blog2.png',
    fullContent: `
      L'Opération "Zéro MGF, Zéro Fille Mutilée, Zéro Excuse" a franchi une étape historique avec plus de 20 350 personnes touchées en direct lors du marathon 48H de Live Synchro sur TikTok, Facebook et WhatsApp.

      Sous la modération de Hayathe AYEVA (Co-fondatrice de Solution Hayathe), des leaders féministes et spécialistes de santé publique du Togo, du Mali (Sira Sojourner Touré), de Côte d'Ivoire (Julienne Gbato) et du Cameroun (Awawou Mandunh Mbohou) ont confronté les réalités locales pour bâtir des réponses coordonnées.

      Le corps de chaque fille lui appartient. Les MGF ne sont ni une fatalité, ni une prescription religieuse, mais une violation grave des droits humains et un risque vital immédiat et à long terme.
    `,
    highlights: [
      '+20 350 personnes sensibilisées en direct à travers 4 pays d’Afrique de l’Ouest et Centrale',
      'Appel solennel aux États pour l’application stricte des lois pénales anti-excision',
      'Mise en place de réseaux communautaires d’alerte précoce dans les cantons ruraux'
    ]
  },
  {
    id: 'webinaire-avortement-securise',
    category: 'droits',
    categoryBadge: 'DROITS EN AFRIQUE',
    date: '28 SEPTEMBRE 2026',
    formattedDate: '28 Septembre 2026',
    readTime: '5 min de lecture',
    author: 'Hayathe Ayeva & Collectif CDVC',
    format: 'Journée Internationale SASC',
    title: 'Entre droit et réalité : Où en est réellement l’accès aux soins d’avortement sécurisé en Afrique ?',
    shortDesc: 'Regards croisés entre le Togo, le Bénin, le Burkina Faso, le Cameroun, le Tchad et la RDC à l’occasion du 28 Septembre.',
    image: '/images/blog11.png',
    fullContent: `
      À l'occasion de la Journée Mondiale pour le Droit à l'Avortement Sécurisé, le Cercle des Voix Courageuses et Solution Hayathe ont réuni des juristes, sages-femmes et activistes de six nations africaines.

      Malgré les avancées du Protocole de Maputo et de certaines législations nationales, l'accès réel et effectif à des soins sécurisés reste entravé par la stigmatisation sociale, le manque d'équipements et les barrières financières.

      Les avortements clandestins demeurent l'une des causes majeures de mortalité maternelle évitable en Afrique. Garantir des soins sécurisés, c'est avant tout sauver des vies humaines.
    `,
    highlights: [
      'Analyse comparative des cadres légaux du Togo, Bénin, Cameroun, RDC, Tchad et Burkina Faso',
      'Témoignages de sages-femmes sur la gestion des urgences obstétricales post-avortement clandestin',
      'Recommandations pour la déstigmatisation des soins de santé reproductive en milieu hospitalier'
    ]
  },
  {
    id: 'webinaire-droits-togo-iyawo',
    category: 'droits',
    categoryBadge: 'SANTÉ & DROITS AU TOGO',
    date: '28 SEPTEMBRE 2026',
    formattedDate: '28 Septembre 2026',
    readTime: '5 min de lecture',
    author: 'Eslie M’Belou (Juriste Solution Hayathe) & IYAWO',
    format: 'Table Ronde Numérique',
    title: 'Égalité d’accès aux services DSSR au Togo : Prévention des risques et évolution des récits',
    shortDesc: 'Débat juridique et médical avec les acteurs institutionnels togolais pour un accès équitable aux soins de santé génésique.',
    image: '/images/blog10.png',
    fullContent: `
      Organisée conjointement par IYAWO, Rosci-SR/PF et Solution Hayathe, cette session de haut niveau a réuni juristes et professionnels de santé pour faire le point sur la réalité des droits reproductifs au Togo.

      Eslie M'BELOU, juriste au sein de Solution Hayathe, a rappelé la nécessité d'harmoniser les textes juridiques et de sensibiliser les soignants aux protocoles de prise en charge d'urgence sans jugement moral.

      La transformation des récits communautaires est la clé pour que chaque femme et jeune fille puisse exercer son droit fondamental à la santé et à la vie dans la dignité.
    `,
    highlights: [
      'Clarification des dispositions légales togolaises en matière de santé reproductive',
      'Rôle clé des organisations de la société civile dans l’assistance juridique des patientes',
      'Plan d’action conjoint pour la vulgarisation des droits auprès des populations vulnérables'
    ]
  },
  {
    id: 'adzino-maternite-bien-etre',
    category: 'sante',
    categoryBadge: 'MATERNITÉ & BIEN-ÊTRE',
    date: '29 AOÛT 2026',
    formattedDate: '29 Août 2026',
    readTime: '4 min de lecture',
    author: 'Programme Adzinõ & Pôle Périnatal',
    format: 'Atelier & Conférence',
    title: 'Adzinõ : Mieux vivre la grossesse, préparer l’accouchement et retrouver son équilibre',
    shortDesc: 'Accompagnement périnatal global alliant kinésithérapie, santé mentale et bien-être maternel pour les futures mamans.',
    image: '/images/blog4.png',
    fullContent: `
      Le programme Adzinõ propose une approche bienveillante et moderne de la maternité. De la gestion des changements corporels aux exercices posturaux de préparation à la naissance, cette initiative met l'accent sur la prévention des complications périnatales.

      En associant kinésithérapeutes, sages-femmes et psychologues, Adzinõ offre aux femmes un espace sécurisé pour poser leurs questions sans tabou et aborder la maternité avec sérénité et confiance.
    `,
    highlights: [
      'Exercices de respiration et kinésithérapie prénatale adaptée',
      'Prévention des dépressions du post-partum et soutien psychologique',
      'Ateliers pratiques avec les conjoints pour un soutien familial actif'
    ]
  }
];

/* =========================================================================
   COMPOSANT PRINCIPAL : BlogSection
   ========================================================================= */

export default function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeArticle, setActiveArticle] = useState(null);
  const [copied, setCopied] = useState(false);

  const filteredArticles = selectedCategory === 'all'
    ? BLOG_ARTICLES
    : BLOG_ARTICLES.filter(a => a.category === selectedCategory);

  const handleShare = (article) => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.shortDesc,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="blog" className="py-20 lg:py-28 bg-white relative overflow-hidden border-t border-slate-100">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================
            1. EN-TÊTE EXACT DU STYLE DE RÉFÉRENCE
           ========================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-[#ED1C24] font-body block mb-2">
              BLOG & TERRAIN
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002157] font-title tracking-tight leading-[1.1]">
              Derniers Décryptages
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-medium text-slate-500 font-body">
              Publications officielles & webinaires
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-50 text-[#ED1C24] border border-red-200">
              {BLOG_ARTICLES.length} analyses
            </span>
          </div>

        </div>

        {/* =========================================================
            2. FILTRES DE CATÉGORIES MINIMALISTES
           ========================================================= */}
        <div className="flex items-center justify-start sm:justify-center flex-wrap gap-2 mb-10 overflow-x-auto pb-2 sm:pb-0">
          {BLOG_CATEGORIES.map(category => {
            const isActive = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold font-body transition-all duration-200 cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-[#002157] text-white shadow-sm'
                    : 'bg-slate-50 text-[#606060] hover:bg-slate-100 hover:text-[#002157] border border-slate-200/80'
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* =========================================================
            3. GRILLE DE CARTES RÉELLES (Style exact de la référence)
           ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className="group bg-white rounded-[28px] border border-slate-200/90 hover:border-slate-300 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              
              {/* Affiche réelle de l'événement avec badge flottant blanc en haut à gauche */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900 rounded-t-[28px]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter contrast-[1.02]"
                />
                
                {/* Voile léger au bas de l'image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Badge Pilule Blanc Flottant en haut à gauche */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-slate-900 shadow-md font-body backdrop-blur-xs">
                    {article.categoryBadge}
                  </span>
                </div>

                {/* Badge format en haut à droite */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-black/60 text-white backdrop-blur-md border border-white/20">
                    <Video className="w-3 h-3 text-[#FFCD00]" />
                    <span>{article.format}</span>
                  </span>
                </div>
              </div>

              {/* Contenu textuel épuré */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                
                <div>
                  {/* Ligne Méta : Date à gauche & Flèche ↗ à droite */}
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-400 font-body uppercase tracking-wider mb-3">
                    <span>{article.date}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#ED1C24] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  {/* Titre en Glancyr */}
                  <h3 className="font-title font-bold text-lg sm:text-xl text-[#002157] group-hover:text-[#ED1C24] transition-colors leading-snug line-clamp-2 mb-3">
                    {article.title}
                  </h3>

                  {/* Résumé en Metropolis (2 lignes) */}
                  <p className="font-body text-xs sm:text-sm text-[#606060] line-clamp-2 leading-relaxed">
                    {article.shortDesc}
                  </p>
                </div>

                {/* Pied de carte avec temps de lecture et CTA */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-body">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{article.readTime}</span>
                  </span>
                  <span className="font-bold text-[#002157] group-hover:text-[#ED1C24] transition-colors flex items-center gap-1">
                    <span>Lire le compte-rendu</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>

              </div>

            </article>
          ))}
        </div>

      </div>

      {/* =========================================================
          4. MODALE DE LECTURE INTÉGRALE & AFFICHE HD
         ========================================================= */}
      {activeArticle && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setActiveArticle(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200"
            onClick={e => e.stopPropagation()}
          >
            {/* Bouton Fermer */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/95 hover:bg-white text-[#002157] shadow-md flex items-center justify-center cursor-pointer transition-transform hover:scale-105"
              aria-label="Fermer la modale"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Affiche complète de l'événement */}
            <div className="relative w-full bg-slate-950 rounded-t-3xl overflow-hidden flex items-center justify-center max-h-80 sm:max-h-96">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-contain bg-slate-900"
              />
            </div>

            {/* Corps de lecture */}
            <div className="p-6 sm:p-8 space-y-6">
              
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-50 text-[#ED1C24] border border-red-200 mb-2 font-body">
                  {activeArticle.categoryBadge}
                </span>
                
                <h3 className="font-title font-black text-xl sm:text-2xl text-[#002157] leading-tight">
                  {activeArticle.title}
                </h3>
              </div>

              {/* Métadonnées */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100 text-xs text-[#606060] font-body">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 font-medium">
                    <User className="w-3.5 h-3.5 text-[#002157]" />
                    {activeArticle.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#ED1C24]" />
                    {activeArticle.formattedDate}
                  </span>
                </div>

                <span className="flex items-center gap-1 font-medium bg-slate-100 px-2.5 py-1 rounded-full text-[11px] text-slate-700">
                  <Clock className="w-3 h-3" />
                  {articleReadTime(activeArticle.readTime)}
                </span>
              </div>

              {/* Texte de l'analyse */}
              <div className="space-y-4 text-sm sm:text-base text-[#606060] font-body leading-relaxed whitespace-pre-line">
                {activeArticle.fullContent}
              </div>

              {/* Points clés & Enseignements */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
                <h4 className="font-title font-bold text-xs uppercase tracking-wider text-[#002157] flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#ED1C24]" />
                  Enseignements & Recommandations Clés
                </h4>
                <ul className="space-y-2">
                  {activeArticle.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-body">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24] mt-1.5 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pied de modale : Partage & Fermeture */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
                <button
                  onClick={() => handleShare(activeArticle)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-bold text-[#002157] flex items-center gap-2 cursor-pointer transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#ED1C24]" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Lien copié !' : 'Partager ce décryptage'}</span>
                </button>

                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-5 py-2.5 rounded-xl bg-[#002157] hover:bg-[#00173d] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all cursor-pointer"
                >
                  Fermer
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}

function articleReadTime(timeStr) {
  return timeStr || '4 min de lecture';
}
