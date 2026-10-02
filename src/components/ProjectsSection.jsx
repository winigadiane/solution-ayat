import React, { useState } from 'react';
import { 
  MapPin, 
  ArrowRight, 
  X, 
  Heart, 
  Calendar, 
  Target, 
  CheckCircle2
} from 'lucide-react';

/* =========================================================================
   DONNÉES ÉPURÉES & SYNTHÉTIQUES DES PROJETS — SOLUTION HAYATHE
   ========================================================================= */

const PROJECT_CATEGORIES = [
  { id: 'all', label: 'Tous les projets' },
  { id: 'onehealth', label: 'Santé & One Health' },
  { id: 'dssr', label: 'DSSR & Hygiène' },
  { id: 'genre', label: 'Genre & VBG' },
  { id: 'leadership', label: 'Jeunesse & CPS' }
];

const PROJECTS_DATA = [
  {
    id: 'eps-ecoles',
    title: 'Espaces Promoteurs de Santé (EPS)',
    category: 'onehealth',
    categoryLabel: 'One Health & Éducation',
    tag: 'Milieu Scolaire',
    image: '/images/Accueil1.png',
    location: 'Lycées & Collèges · Togo',
    date: 'Depuis 2022',
    stat: '6 500+',
    statLabel: 'Élèves bénéficiaires',
    shortDesc: 'Déploiement d’environnements scolaires sains alliant hygiène, écologie et écoute bienveillante.',
    fullDesc: 'Le projet des Espaces Promoteurs de Santé (EPS) applique le concept One Health dans les collèges et lycées togolais. Il garantit l’accès à l’eau potable, forme des pairs-éducateurs et améliore durablement la santé globale des élèves.',
    objectives: [
      'Points d’eau potable et assainissement scolaire',
      'Clubs de pairs-éducateurs en santé et hygiène',
      'Sensibilisation à l’écologie et gestion des déchets'
    ],
    results: [
      '12 établissements scolaires accompagnés',
      'Baisse de 35% de l’absentéisme pour maladies courantes',
      '120 pairs-éducateurs certifiés'
    ]
  },
  {
    id: 'dignite-menstruelle',
    title: 'Dignité & Hygiène Menstruelle',
    category: 'dssr',
    categoryLabel: 'DSSR & Santé Féminine',
    tag: 'DSSR & Dignité',
    image: '/images/Accueil2.png',
    location: 'Sokodé & Région Centrale',
    date: '2023 - 2026',
    stat: '3 500+',
    statLabel: 'Kits lavables offerts',
    shortDesc: 'Distribution de protections réutilisables écologiques et éducation pour briser les tabous.',
    fullDesc: 'Lutte contre la précarité menstruelle et l’absentéisme scolaire des adolescentes par la confection et distribution gratuite de kits durables, accompagnés d’ateliers d’éducation à la santé reproductive.',
    objectives: [
      'Distribution de kits lavables complets et durables',
      'Déconstruction des tabous et stéréotypes de genre',
      'Ateliers de dialogue avec parents et enseignants'
    ],
    results: [
      '3 500+ jeunes filles équipées durablement',
      '94% de réduction des abandons scolaires liés aux règles',
      '28 ateliers communautaires organisés'
    ]
  },
  {
    id: 'jamoh-sante',
    title: 'Caravanes Médicales JAMOH',
    category: 'onehealth',
    categoryLabel: 'Soins de Proximité',
    tag: 'Action Mobile',
    image: '/images/Accueil3.png',
    location: 'Villages & Cantons enclavés',
    date: 'Trimestriel',
    stat: '4 800+',
    statLabel: 'Soins gratuits dispensés',
    shortDesc: 'Cliniques mobiles apportant consultations, dépistages et médicaments dans les zones isolées.',
    fullDesc: 'Les Journées d’Action Médicale et d’Orientation Hayathe mobilisent soignants et bénévoles directement auprès des populations rurales privées d’accès direct aux centres de santé.',
    objectives: [
      'Consultations pédiatriques et prénatales gratuites',
      'Dépistage précoce des pathologies chroniques',
      'Dons de médicaments essentiels'
    ],
    results: [
      '4 800+ patients examinés sans frais',
      '600 bilans de santé reproductive réalisés',
      '45 soignants bénévoles mobilisés'
    ]
  },
  {
    id: 'ees-vbg',
    title: 'Cellule d’Écoute & Réponse aux VBG',
    category: 'genre',
    categoryLabel: 'Protection & Droits',
    tag: 'Espace Sûr 7j/7',
    image: '/images/association2.png',
    location: 'Centre Hayathe · Sokodé',
    date: 'Permanence continue',
    stat: '420+',
    statLabel: 'Survivantes protégées',
    shortDesc: 'Accompagnement holistique, confidentiel et gratuit des survivantes de violences basées sur le genre.',
    fullDesc: 'Prise en charge globale des femmes et jeunes filles victimes de violences : premiers soins, soutien psychologique, assistance juridique et accompagnement vers l’autonomie économique.',
    objectives: [
      'Soutien psychologique d’urgence et hébergement sécurisé',
      'Assistance juridique et défense des droits',
      'Insertion socio-professionnelle et micro-crédits'
    ],
    results: [
      '420+ femmes et filles accompagnées avec succès',
      '85 dossiers juridiques défendus',
      '140 formations professionnelles dispensées'
    ]
  },
  {
    id: 'leadership-cps',
    title: 'Académie du Leadership Féminin & CPS',
    category: 'leadership',
    categoryLabel: 'Empowerment Jeunesse',
    tag: 'Compétences de Vie',
    image: '/images/association.png',
    location: 'Centres communautaires',
    date: 'Cohortes annuelles',
    stat: '850+',
    statLabel: 'Filles formées au leadership',
    shortDesc: 'Développement de l’estime de soi, de la prise de parole et du leadership pour les adolescentes.',
    fullDesc: 'Programme immersif renforçant les compétences psychosociales (CPS), la capacité d’affirmation et l’esprit critique des jeunes filles pour en faire les actrices de leur communauté.',
    objectives: [
      'Ateliers d’art oratoire et négociation',
      'Sensibilisation aux droits fondamentaux',
      'Mentorat par des femmes inspirantes'
    ],
    results: [
      '850+ diplômées de l’Académie',
      '45 micro-projets citoyens initiés par les filles',
      'Réseau d’entraide actif dans toute la région'
    ]
  },
  {
    id: 'plaidoyer-recherche',
    title: 'Observatoire & Plaidoyer Santé',
    category: 'genre',
    categoryLabel: 'Recherche-Action',
    tag: 'Plaidoyer National',
    image: '/images/association1.png',
    location: 'Togo & Afrique de l’Ouest',
    date: '2024 - 2027',
    stat: '4',
    statLabel: 'Études d’impact publiées',
    shortDesc: 'Production de données probantes pour faire évoluer les politiques publiques de santé et d’égalité.',
    fullDesc: 'Capitalisation des réalités de terrain et diffusion de rapports stratégiques pour influencer les décisions ministérielles et pérenniser le droit à la santé pour toutes et tous.',
    objectives: [
      'Enquêtes de terrain rigoureuses et participatives',
      'Publications de notes pour les décideurs',
      'Campagnes citoyennes de sensibilisation'
    ],
    results: [
      '4 rapports thématiques de référence',
      'Auditions régulières auprès des instances publiques',
      '+200 000 personnes touchées par nos campagnes'
    ]
  }
];

/* =========================================================================
   COMPTEURS CLÉS
   ========================================================================= */

const STATS_DATA = [
  { value: '15 000+', label: 'Bénéficiaires touchés' },
  { value: '12+', label: 'Espaces Santé labellisés' },
  { value: '3 500+', label: 'Kits hygiéniques distribués' },
  { value: '100%', label: 'Engagement bénévole & terrain' }
];

/* =========================================================================
   COMPOSANT PRINCIPAL : ProjectsSection (Épuré & Percutant)
   ========================================================================= */

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === selectedCategory);

  return (
    <section id="terrain" className="py-20 lg:py-24 bg-white relative overflow-hidden border-t border-slate-100">
      
      {/* Fond épuré */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-50/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* En-tête Sobre & Direct */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 text-[#ED1C24] border border-red-200/80 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#ED1C24]" />
            <span>Nos Projets & Impact</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#002157] font-title tracking-tight leading-tight">
            Des actions concrètes au service du terrain
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#606060] font-body leading-relaxed">
            Programmes phares déployés par Solution Hayathe au Togo pour la santé, l'égalité et l'autonomie.
          </p>
        </div>

        {/* Filtres de catégories minimalistes */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {PROJECT_CATEGORIES.map(category => {
            const isActive = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold font-body transition-all duration-200 cursor-pointer ${
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

        {/* Grille de cartes épurées (3 Colonnes, visuelles et aérées) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="group bg-white rounded-2xl border border-slate-200/90 hover:border-[#002157]/30 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              {/* Image d'en-tête */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Badge Tag thématique */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-white/95 text-[#002157] shadow-xs uppercase tracking-wider backdrop-blur-xs">
                    {project.tag}
                  </span>
                </div>

                {/* Localisation concise */}
                <div className="absolute bottom-2.5 left-3 flex items-center gap-1 text-white text-[11px] font-medium drop-shadow-sm">
                  <MapPin className="w-3 h-3 text-[#FFCD00]" />
                  <span>{project.location}</span>
                </div>
              </div>

              {/* Contenu sobre & respirant */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                
                <div className="space-y-2">
                  <h3 className="font-title font-bold text-lg text-[#002157] group-hover:text-[#ED1C24] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-[#606060] line-clamp-2 leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Chiffre clé d'impact + Bouton d'action épuré */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-base font-black font-title text-[#ED1C24] leading-none">
                      {project.stat}
                    </div>
                    <div className="text-[10px] text-slate-500 font-body font-medium uppercase tracking-tight">
                      {project.statLabel}
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-[#002157] text-[#002157] group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bandeau de Chiffres Clés Synthétique */}
        <div className="mt-14 bg-[#002157] text-white rounded-2xl p-6 sm:p-8 shadow-lg">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {STATS_DATA.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="font-title font-black text-2xl sm:text-3xl text-[#FFCD00]">
                  {stat.value}
                </div>
                <div className="font-body text-xs text-blue-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* MODALE DÉTAILLÉE (Pour ceux qui veulent approfondir) */}
      {activeModalProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          onClick={() => setActiveModalProject(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-200 relative"
            onClick={e => e.stopPropagation()}
          >
            {/* Bouton fermer */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/90 text-[#002157] shadow flex items-center justify-center cursor-pointer hover:bg-white"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Photo & Titre Modale */}
            <div className="relative h-44 w-full bg-slate-900">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFCD00] mb-0.5 block">
                  {activeModalProject.categoryLabel}
                </span>
                <h3 className="font-title font-bold text-lg text-white leading-tight">
                  {activeModalProject.title}
                </h3>
              </div>
            </div>

            {/* Contenu modale */}
            <div className="p-5 space-y-4 text-xs sm:text-sm">
              <p className="text-[#606060] font-body leading-relaxed">
                {activeModalProject.fullDesc}
              </p>

              {/* Objectifs synthétiques */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                <h4 className="font-title font-bold text-xs uppercase tracking-wider text-[#002157]">
                  Actions Clés
                </h4>
                <ul className="space-y-1.5">
                  {activeModalProject.objectives.map((obj, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ED1C24] shrink-0" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Résultats */}
              <div className="p-3.5 rounded-xl bg-red-50/40 border border-red-200/60 space-y-1.5">
                <h4 className="font-title font-bold text-xs uppercase tracking-wider text-[#ED1C24]">
                  Résultats Obtenus
                </h4>
                <ul className="space-y-1 text-slate-700">
                  {activeModalProject.results.map((res, i) => (
                    <li key={i}>• {res}</li>
                  ))}
                </ul>
              </div>

              {/* CTA Modale */}
              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  Fermer
                </button>
                <a
                  href="#don"
                  onClick={() => setActiveModalProject(null)}
                  className="px-5 py-2 rounded-lg bg-[#ED1C24] hover:bg-[#c9141b] text-white text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5 cursor-pointer active:scale-95"
                >
                  <Heart className="w-3.5 h-3.5 fill-white" />
                  <span>Soutenir ce projet</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
