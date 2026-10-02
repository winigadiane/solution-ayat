import React from 'react';
import { MapPin, Phone, Mail, Heart, ChevronRight } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

/* =========================================================================
   ICÔNES VECTORIELLES DES RÉSEAUX SOCIAUX (Couleurs officielles : Blanc / Or / Rouge)
   ========================================================================= */

function IconFacebook({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function IconTikTok({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  );
}

function IconWhatsApp({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.301-.15-1.777-.877-2.052-.978-.276-.1-.476-.15-.676.15s-.777.978-.952 1.179-.351.226-.652.075c-.301-.15-1.27-.468-2.42-1.493-.894-.798-1.498-1.784-1.674-2.085s-.019-.464.132-.614c.135-.134.301-.351.451-.527.151-.176.201-.301.301-.502.1-.2.05-.376-.025-.526s-.676-1.63-1.026-2.233c-.276-.628-.551-.551-.752-.551h-.651c-.226 0-.576.075-.877.401s-1.153 1.128-1.153 2.757 1.178 3.208 1.328 3.409c.15.2 2.306 3.523 5.589 4.941.781.338 1.39.54 1.865.69.784.248 1.497.213 2.06.129.627-.094 1.777-.727 2.027-1.429.251-.702.251-1.304.176-1.43-.076-.125-.276-.201-.577-.351zM12.042.02c-6.618 0-11.98 5.362-11.98 11.98 0 2.112.552 4.175 1.602 5.992L.034 23.98l6.177-1.62c1.758.959 3.743 1.464 5.831 1.464 6.618 0 11.98-5.362 11.98-11.98S18.66.02 12.042.02z"/>
    </svg>
  );
}

function IconLinkedIn({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

function IconInstagram({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function IconYouTube({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    Icon: IconFacebook,
    handle: "Solution Hayathe"
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com",
    Icon: IconTikTok,
    handle: "@solutionhayathe"
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/22890498056",
    Icon: IconWhatsApp,
    handle: "+228 90 49 80 56"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com",
    Icon: IconLinkedIn,
    handle: "Association Solution Hayathe"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com",
    Icon: IconInstagram,
    handle: "@solutionhayathe"
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com",
    Icon: IconYouTube,
    handle: "@solutionhayathe"
  }
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#002157] to-[#001438] text-white pt-16 pb-12 relative overflow-hidden border-t-4 border-[#ED1C24]">
      {/* Halo lumineux de fond subtil */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ED1C24]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#FFCD00]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Grille principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Colonne 1 : Marque, Mission & Réseaux Sociaux */}
          <div className="space-y-5">
            <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-xs p-3 rounded-2xl border border-white/15 w-fit">
              <img
                src="/images/logo.png"
                alt="Logo Solution Hayathe"
                className="h-10 w-auto object-contain bg-white rounded-lg p-1"
              />
              <div className="flex items-center gap-1 font-title text-xl">
                <span className="font-bold text-white">Solution</span>
                <span className="font-extrabold text-[#ED1C24]">Hayathe</span>
              </div>
            </div>
            
            <p className="text-xs text-slate-300 font-body leading-relaxed">
              Association citoyenne et féministe de santé publique et justice sociale au Togo. Éduquer, accompagner et sauver des vies depuis 2021.
            </p>

            {/* Réseaux Sociaux : Pastilles interactives */}
            <div className="space-y-2 pt-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFCD00] font-body block">
                Rejoignez notre communauté :
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                {SOCIAL_LINKS.map((social, sIdx) => {
                  const IconComp = social.Icon;
                  return (
                    <a
                      key={sIdx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#ED1C24] text-white hover:text-white border border-white/15 flex items-center justify-center transition-all duration-200 shadow-xs hover:scale-110 active:scale-95"
                      title={social.name}
                      aria-label={`Suivez-nous sur ${social.name}`}
                    >
                      <IconComp className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Colonne 2 : Navigation Rapide */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFCD00] font-body mb-4">
              Navigation Rapide
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-body">
              <li>
                <a href="#accueil" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#ED1C24] group-hover:translate-x-0.5 transition-transform" />
                  <span>Accueil</span>
                </a>
              </li>
              <li>
                <a href="#association" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#ED1C24] group-hover:translate-x-0.5 transition-transform" />
                  <span>À Propos de l'Association</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#ED1C24] group-hover:translate-x-0.5 transition-transform" />
                  <span>Domaines d'Intervention</span>
                </a>
              </li>
              <li>
                <a href="#terrain" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#ED1C24] group-hover:translate-x-0.5 transition-transform" />
                  <span>Nos Projets de Terrain</span>
                </a>
              </li>
              <li>
                <a href="#partenaires" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#ED1C24] group-hover:translate-x-0.5 transition-transform" />
                  <span>Partenaires & Réseau</span>
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#ED1C24] group-hover:translate-x-0.5 transition-transform" />
                  <span>Actualités & Publications</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#ED1C24] group-hover:translate-x-0.5 transition-transform" />
                  <span>Contact & Dons</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Piliers Stratégiques */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFCD00] font-body mb-4">
              Nos Engagements
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-body">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24] mt-1.5 shrink-0"></span>
                <span>Santé Sexuelle & Reproductive (DSSR)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFCD00] mt-1.5 shrink-0"></span>
                <span>Lutte contre les VBG & Violences Sexistes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24] mt-1.5 shrink-0"></span>
                <span>Approche One Health en Milieu Scolaire</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFCD00] mt-1.5 shrink-0"></span>
                <span>Autonomie & Hygiène Menstruelle</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24] mt-1.5 shrink-0"></span>
                <span>Stratégie d'Aller-Vers & Justice Sociale</span>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Coordonnées Directes */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFCD00] font-body mb-4">
              Siège & Contact
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-300 font-body">
              <li className="flex items-start gap-3 group">
                <div className="w-7 h-7 rounded-lg bg-white/10 group-hover:bg-[#ED1C24] flex items-center justify-center shrink-0 border border-white/15 transition-all duration-300">
                  <MapPin className="w-3.5 h-3.5 text-[#ED1C24] group-hover:text-white anim-pin" />
                </div>
                <span className="group-hover:text-white transition-colors pt-0.5">
                  Sokodé, Région Centrale, République Togolaise
                </span>
              </li>

              <li className="flex items-start gap-3 group">
                <div className="w-7 h-7 rounded-lg bg-white/10 group-hover:bg-[#FFCD00] flex items-center justify-center shrink-0 border border-white/15 transition-all duration-300">
                  <Phone className="w-3.5 h-3.5 text-[#FFCD00] group-hover:text-[#002157] anim-phone" />
                </div>
                <div className="font-mono space-y-0.5 text-white pt-0.5">
                  <div>
                    <a href="tel:+22890498056" className="hover:text-[#FFCD00] transition-colors">+228 90 49 80 56</a>
                  </div>
                  <div>
                    <a href="tel:+22896183811" className="hover:text-[#FFCD00] transition-colors">+228 96 18 38 11</a>
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3 group">
                <div className="w-7 h-7 rounded-lg bg-white/10 group-hover:bg-[#ED1C24] flex items-center justify-center shrink-0 border border-white/15 transition-all duration-300">
                  <Mail className="w-3.5 h-3.5 text-[#ED1C24] group-hover:text-white anim-mail" />
                </div>
                <a href="mailto:solutionhayathe@gmail.com" className="hover:text-white transition-colors text-slate-200 pt-0.5">
                  solutionhayathe@gmail.com
                </a>
              </li>

              <li className="pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold bg-[#ED1C24] text-white shadow-md">
                  <Heart className="w-3.5 h-3.5 fill-white" />
                  <span>Pour Chaque vie, une Solution.</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Barre inférieure de copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-body gap-4">
          <div>
            © {CURRENT_YEAR} <strong className="text-white font-title">Association Solution Hayathe</strong>. Tous droits réservés.
          </div>
          <div className="flex items-center gap-6">
            <a href="#association" className="hover:text-white transition-colors">À Propos</a>
            <a href="#terrain" className="hover:text-white transition-colors">Projets</a>
            <a href="#partenaires" className="hover:text-white transition-colors">Partenaires</a>
            <a href="#blog" className="hover:text-white transition-colors">Blog</a>
            <a href="#contact" className="hover:text-[#FFCD00] transition-colors">Nous Contacter</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
