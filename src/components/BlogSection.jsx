import React, { useState } from 'react';
import { Calendar, User, ArrowRight, BookOpen, Tag, X } from 'lucide-react';

const ARTICLES = [
  {
    id: 1,
    title: "Atelier pratique : Confection de serviettes hygiéniques lavables et réutilisables",
    excerpt: "Sensibilisation et formation des jeunes filles et mères à Sokodé pour lutter contre la précarité menstruelle et favoriser l'autonomie.",
    category: "Hygiène & Dignité",
    date: "14 Septembre 2024",
    author: "Équipe Solution Hayathe",
    image: "/images/blog.png",
    readTime: "4 min",
    content: "Face au coût élevé des protections périodiques à usage unique et aux risques d'infections, l'Association Solution Hayathe a organisé des sessions intensives d'apprentissage de confection de serviettes hygiéniques lavables en tissu local. Plus de 120 jeunes filles ont été dotées de kits de confection et formées à la gestion de leur hygiène menstruelle dans la dignité."
  },
  {
    id: 2,
    title: "Webinaire & Plaidoyer : Briser le tabou des règles et des VBG en milieu scolaire",
    excerpt: "Mobilisation des éducateurs, parents et acteurs associatifs autour de l'éducation complète à la sexualité et de la protection des adolescentes.",
    category: "Plaidoyer & DSSR",
    date: "28 Août 2024",
    author: "Pôle Plaidoyer",
    image: "/images/blog1.png",
    readTime: "5 min",
    content: "Un espace d'échange ouvert et bienveillant réunissant des spécialistes en santé publique, des psychologues et des jeunes leaders pour déconstruire les mythes liés aux menstruations et promouvoir des protocoles de signalement des violences basées sur le genre dans les collèges et lycées de la région Centrale."
  },
  {
    id: 3,
    title: "Caravane d'information et causeries éducatives au cœur des communautés",
    excerpt: "L'Aller-Vers en action : nos pairs-éducateurs sillonnent les quartiers pour dialoguer sans tabou sur la santé reproductive et l'égalité des genres.",
    category: "Action Terrain",
    date: "10 Juillet 2024",
    author: "Volontaires Terrain",
    image: "/images/blog2.png",
    readTime: "3 min",
    content: "La proximité est le cœur de notre méthode d'intervention. En allant directement à la rencontre des populations sur les marchés, places publiques et centres de jeunes, Solution Hayathe instaure un climat de confiance indispensable pour aborder la planification familiale et le dépistage."
  },
  {
    id: 4,
    title: "Programme JAMOH : Jeunes Acteurs Mobilisés pour l'Hygiène et la Santé",
    excerpt: "Renforcement des capacités des jeunes ambassadeurs pour porter les messages de prévention et de civisme sanitaire dans leurs pairs.",
    category: "Jeunesse & Leadership",
    date: "22 Juin 2024",
    author: "Coordination Projets",
    image: "/images/blog10.png",
    readTime: "6 min",
    content: "Le projet JAMOH valorise l'engagement citoyen de la jeunesse togolaise en formant des relais d'information certifiés capables d'animer des cercles de discussion et de référer les cas vulnérables vers les structures de santé partenaires."
  },
  {
    id: 5,
    title: "Santé Communautaire & Concept One Health dans les écoles primaires",
    excerpt: "Lier la santé humaine, l'hygiène environnementale et le bien-être animal dès le plus jeune âge pour prévenir les épidémies locales.",
    category: "One Health",
    date: "15 Mai 2024",
    author: "Dr. Responsable Santé",
    image: "/images/blog11.png",
    readTime: "4 min",
    content: "À travers des jeux pédagogiques, le lavage des mains guidé et des cours interactifs sur l'assainissement, nos équipes inculquent les réflexes de santé préventive qui protègent durablement toute la communauté scolaire."
  },
  {
    id: 6,
    title: "L'Art et le Théâtre Forum au service de la lutte contre les violences faites aux filles",
    excerpt: "Des scénettes immersives pour éveiller les consciences collectives et libérer la parole des victimes dans les villages partenaires.",
    category: "Culture & Sensibilisation",
    date: "04 Avril 2024",
    author: "Cellule Sensibilisation",
    image: "/images/blog4.png",
    readTime: "5 min",
    content: "Le théâtre participatif permet de mettre en scène les réalités du mariage précoce, du harcèlement et des discriminations. Les spectateurs montent sur scène pour proposer des solutions concrètes et transformer les mentalités."
  }
];

const CATEGORIES = ["Tous", "Hygiène & Dignité", "Plaidoyer & DSSR", "Action Terrain", "Jeunesse & Leadership", "One Health"];

export default function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [activeArticle, setActiveArticle] = useState(null);

  const filteredArticles = selectedCategory === "Tous"
    ? ARTICLES
    : ARTICLES.filter(a => a.category === selectedCategory);

  return (
    <section id="blog" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 text-[#ED1C24] border border-red-200">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Actualités & Plaidoyer</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002157] font-title tracking-tight">
            Nos Dernières Publications & Récits de Terrain
          </h2>

          <p className="text-base text-[#606060] font-body leading-relaxed">
            Découvrez nos actions récentes, nos articles d'analyse et les témoignages de celles et ceux qui font vivre l'Association Solution Hayathe au Togo.
          </p>

          {/* Filtres de catégories */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-body transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#002157] text-white shadow-md'
                    : 'bg-slate-100 text-[#606060] hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grille des articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Image d'illustration réelle */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#002157]/90 text-white backdrop-blur-xs shadow-xs">
                    <Tag className="w-3 h-3 text-[#FFCD00]" />
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Contenu textuel */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {/* Métadonnées : Date */}
                  <div className="flex items-center gap-1.5 text-xs text-[#606060]">
                    <Calendar className="w-3.5 h-3.5 text-[#ED1C24]" />
                    <span>{article.date}</span>
                  </div>

                  {/* Titre */}
                  <h3 className="text-lg font-bold text-[#002157] font-title leading-snug line-clamp-2 group-hover:text-[#ED1C24] transition-colors">
                    {article.title}
                  </h3>

                  {/* Extrait */}
                  <p className="text-xs text-[#606060] font-body leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                {/* Bouton de lecture */}
                <button
                  onClick={() => setActiveArticle(article)}
                  className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#ED1C24] group-hover:text-[#c9141b] transition-colors cursor-pointer w-full text-left"
                >
                  <span>Lire l'article complet</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Modal d'article complet */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#00173d]/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col relative">
            
            {/* Bouton fermer */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 text-[#002157] hover:bg-[#ED1C24] hover:text-white flex items-center justify-center transition-colors shadow-md cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image de tête */}
            <div className="relative h-64 w-full bg-slate-100">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#ED1C24] text-white">
                  {activeArticle.category}
                </span>
              </div>
            </div>

            {/* Corps du modal */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-4 text-xs text-[#606060]">
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>Par {activeArticle.author}</span>
              </div>

              <h3 className="text-2xl font-black text-[#002157] font-title leading-tight">
                {activeArticle.title}
              </h3>

              <div className="text-sm text-[#606060] font-body leading-relaxed space-y-3 pt-2">
                <p className="font-semibold text-[#002157]">
                  {activeArticle.excerpt}
                </p>
                <p>
                  {activeArticle.content}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold bg-[#002157] text-white hover:bg-[#00173d] transition-colors cursor-pointer"
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
