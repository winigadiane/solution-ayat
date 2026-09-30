import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import {
  Heart,
  Sparkles,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#606060] font-body selection:bg-[#ED1C24] selection:text-white">
      {/* 1. Header & Navigation officielle */}
      <Navbar />

      {/* 2. Hero Section Principale */}
      <main id="main-content">
        <Hero />

        {/* 3. Section À Propos & Engagement (Style exact de la maquette de référence) */}
        <AboutSection />

        {/* 4. Section Nos Services & Domaines d'Intervention (Style exact de la maquette de référence) */}
        <ServicesSection />


        {/* Section Appel aux Dons & Engagement (Inspiration Iyawo) */}
        <section id="don" className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-white via-white to-red-50/40 rounded-3xl border-2 border-slate-200 p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
              {/* Liseré supérieur aux couleurs du thème */}
              <div className="absolute top-0 left-0 right-0 h-2 flex">
                <div className="w-1/3 bg-[#ED1C24]"></div>
                <div className="w-1/3 bg-[#002157]"></div>
                <div className="w-1/3 bg-[#FFCD00]"></div>
              </div>

              <div className="grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 text-[#ED1C24] border border-red-200">
                    <Heart className="w-3.5 h-3.5 fill-[#ED1C24]" />
                    Rejoins-nous et Soutiens-nous
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-black text-[#002157] font-title tracking-tight leading-tight">
                    Ensemble, on change les choses. Pour chaque vie, une solution.
                  </h2>

                  <p className="text-base text-[#606060] font-body leading-relaxed">
                    Vos dons financent directement nos actions auprès des adolescent·es vulnérables au Togo : distribution de kits d’hygiène menstruelle lavables, accompagnement psychologique des survivantes de VBG et éducation à la santé dans les écoles.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 pt-2">
                    <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                      <div className="font-bold text-[#002157] font-title text-base mb-1">Devenir Bénévole</div>
                      <p className="text-xs text-[#606060] font-body">Rejoignez nos équipes sur le terrain à Sokodé et dans les régions.</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-[#ED1C24]/30 shadow-xs bg-red-50/20">
                      <div className="font-bold text-[#ED1C24] font-title text-base mb-1">Faire un Don</div>
                      <p className="text-xs text-[#606060] font-body">Financer les kits de dignité et les prises en charge médicales.</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                      <div className="font-bold text-[#002157] font-title text-base mb-1">Partager</div>
                      <p className="text-xs text-[#606060] font-body">Faire rayonner nos campagnes de santé et nos webinaires.</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-lg text-center space-y-5">
                  <div className="w-14 h-14 rounded-2xl bg-red-50 text-[#ED1C24] flex items-center justify-center mx-auto border border-red-100">
                    <Heart className="w-7 h-7 fill-[#ED1C24]" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#002157] font-title">
                      Faire un Don Solidaire
                    </h3>
                    <p className="text-xs text-[#606060] font-body mt-1">
                      Soutenez l’Association Solution Hayathe au Togo
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left space-y-2 text-xs">
                    <div className="flex justify-between items-center text-[#002157]">
                      <span className="font-semibold">Téléphone / T-Money / Flooz :</span>
                      <span className="font-bold font-mono">+228 90 49 80 56</span>
                    </div>
                    <div className="flex justify-between items-center text-[#002157]">
                      <span className="font-semibold">Ligne secondaire :</span>
                      <span className="font-bold font-mono">+228 96 18 38 11</span>
                    </div>
                    <div className="flex justify-between items-center text-[#002157]">
                      <span className="font-semibold">E-mail officiel :</span>
                      <span className="font-bold">solutionhayathe@gmail.com</span>
                    </div>
                  </div>

                  <a
                    href="mailto:solutionhayathe@gmail.com?subject=Soutien%20et%20Don%20Solution%20Hayathe"
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-[#ED1C24] hover:bg-[#c9141b] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <Heart className="w-4 h-4 fill-white" />
                    <span>Contacter pour un don ou mécénat</span>
                  </a>

                  <p className="text-[11px] text-slate-400 font-body">
                    Récépissé Officiel N° 0352 MATGLA-SG-DLPAP-DOCA
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* 3. Footer Institutionnel Officiel */}
      <footer className="bg-white border-t border-slate-200 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-200">

            {/* Colonne 1 : Marque & Récépissé */}
            <div className="space-y-4 md:col-span-1">
              <div className="flex items-center gap-2.5">
                <img
                  src="/images/logo.png"
                  alt="Logo Solution Hayathe"
                  className="h-10 w-auto object-contain"
                />
                <div className="flex items-center gap-1 font-title text-lg">
                  <span className="font-bold text-[#002157]">Solution</span>
                  <span className="font-extrabold text-[#ED1C24]">Hayathe</span>
                </div>
              </div>
              <p className="text-xs text-[#606060] font-body leading-relaxed">
                Solution de Vie · Association citoyenne et féministe de santé publique et justice sociale au Togo (Depuis 2021).
              </p>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] font-body text-[#002157] space-y-0.5">
                <div className="font-semibold">Agrément officiel Togo :</div>
                <div className="font-mono text-slate-500">N° 0352 MATGLA-SG-DLPAP-DOCA</div>
              </div>
            </div>

            {/* Colonne 2 : Engagements */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#002157] font-body mb-3">
                Nos Engagements
              </h4>
              <ul className="space-y-2 text-xs text-[#606060] font-body">
                <li>• Santé Publique & DSSR</li>
                <li>• L'Innovation Sociale</li>
                <li>• Justice Sociale & Féminisme</li>
                <li>• L'Aller-Vers et la Proximité</li>
                <li>• Empowerment des Filles (CPS)</li>
                <li>• Réduction des Inégalités de Santé</li>
              </ul>
            </div>

            {/* Colonne 3 : Domaines Clés */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#002157] font-body mb-3">
                Axes d'Action
              </h4>
              <ul className="space-y-2 text-xs text-[#606060] font-body">
                <li>• Éducation et DSSR</li>
                <li>• Féminisme et Genre</li>
                <li>• Violences Basées sur le Genre (VBG)</li>
                <li>• Concept One Health (Écoles EPS)</li>
                <li>• Engagement Communautaire (EES, JAMOH)</li>
                <li>• Recherche & Innovation</li>
              </ul>
            </div>

            {/* Colonne 4 : Coordonnées */}
            <div id="contact">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#002157] font-body mb-3">
                Siège & Contact
              </h4>
              <ul className="space-y-2 text-xs text-[#606060] font-body">
                <li className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#ED1C24] shrink-0" />
                  <span>Sokodé · Région Centrale · Togo</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#002157] shrink-0" />
                  <span>+228 90 49 80 56 / +228 96 18 38 11</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#FFCD00] shrink-0" />
                  <span>solutionhayathe@gmail.com</span>
                </li>
                <li className="pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-[#FFCD00]/20 text-[#735600] border border-[#FFCD00]/30">
                    <Sparkles className="w-3 h-3 fill-[#FFCD00]" />
                    Pour Chaque vie, une Solution.
                  </span>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-body gap-4">
            <div>
              © {CURRENT_YEAR} <strong className="text-[#002157] font-title">Association Solution Hayathe</strong>. Tous droits réservés.
            </div>
            <div className="flex items-center gap-6">
              <a href="#association" className="hover:text-[#002157] transition-colors">Notre Vision</a>
              <a href="#don" className="hover:text-[#ED1C24] transition-colors">Faire un don</a>
              <a href="#contact" className="hover:text-[#002157] transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
