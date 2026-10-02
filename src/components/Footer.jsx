import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-slate-200 pt-16 pb-12 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grille principale 4 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-10 pb-12 border-b border-slate-200">

          {/* Colonne 1 : Marque, Présentation & Récépissé Officiel */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <img
                src="/images/logo.png"
                alt="Logo Association Solution Hayathe"
                className="h-10 w-auto object-contain"
              />
              <div className="flex items-center gap-1 font-title text-lg">
                <span className="font-bold text-[#002157]">Solution</span>
                <span className="font-black text-[#ED1C24]">Hayathe</span>
              </div>
            </div>
            
            <p className="text-xs text-[#606060] font-body leading-relaxed">
              Solution de Vie · Association citoyenne et féministe de santé publique, de promotion des DSSR et de justice sociale au Togo.
            </p>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/90 text-[11px] font-body text-[#002157] space-y-1">
              <div className="font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#002157]" />
                <span>Agrément officiel Togo</span>
              </div>
              <div className="font-mono text-[10px] text-slate-500">
                N° 0352 MATGLA-SG-DLPAP-DOCA
              </div>
            </div>
          </div>

          {/* Colonne 2 : Engagements Fondamentaux */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#002157] font-body mb-4">
              Nos Engagements
            </h4>
            <ul className="space-y-2 text-xs text-[#606060] font-body">
              <li>• Santé Publique & DSSR</li>
              <li>• Approche One Health</li>
              <li>• Justice Sociale & Genre</li>
              <li>• Lutte contre les VBG</li>
              <li>• Empowerment des Filles (CPS)</li>
              <li>• L'Aller-Vers et la Proximité</li>
            </ul>
          </div>

          {/* Colonne 3 : Navigation Rapide */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#002157] font-body mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#606060] font-body">
              <li>
                <a href="#association" className="hover:text-[#ED1C24] transition-colors flex items-center gap-1">
                  <span>L'Association & Mission</span>
                  <ArrowUpRight className="w-3 h-3 opacity-50" />
                </a>
              </li>
              <li>
                <a href="#axes" className="hover:text-[#ED1C24] transition-colors flex items-center gap-1">
                  <span>Nos 6 Domaines d'Action</span>
                  <ArrowUpRight className="w-3 h-3 opacity-50" />
                </a>
              </li>
              <li>
                <a href="#terrain" className="hover:text-[#ED1C24] transition-colors flex items-center gap-1">
                  <span>Projets Phares & Résultats</span>
                  <ArrowUpRight className="w-3 h-3 opacity-50" />
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-[#ED1C24] transition-colors flex items-center gap-1">
                  <span>Derniers Décryptages</span>
                  <ArrowUpRight className="w-3 h-3 opacity-50" />
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#ED1C24] transition-colors flex items-center gap-1">
                  <span>Contact & Soutien</span>
                  <ArrowUpRight className="w-3 h-3 opacity-50" />
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Coordonnées Directes */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#002157] font-body mb-4">
              Siège & Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-[#606060] font-body">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#ED1C24] shrink-0 mt-0.5" />
                <span>Sokodé · Région Centrale · Togo</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#002157] shrink-0" />
                <span className="font-mono text-[11px]">+228 90 49 80 56 / 96 18 38 11</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#002157] shrink-0" />
                <span className="truncate">solutionhayathe@gmail.com</span>
              </li>
              <li className="pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFCD00]" />
                  <span>Pour Chaque vie, une Solution.</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Ligne inférieure de Copyright & Liens légaux */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-body gap-4">
          <div>
            © {CURRENT_YEAR} <strong className="text-[#002157] font-title">Association Solution Hayathe</strong>. Tous droits réservés.
          </div>
          <div className="flex items-center gap-6">
            <a href="#association" className="hover:text-[#002157] transition-colors">Notre Vision</a>
            <a href="#terrain" className="hover:text-[#ED1C24] transition-colors">Nos Actions</a>
            <a href="#contact" className="hover:text-[#002157] transition-colors">Contact</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
