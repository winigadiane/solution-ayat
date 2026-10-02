import React, { useState } from 'react';
import { 
  Heart, 
  Copy, 
  Check, 
  Users, 
  Building2, 
  ShieldCheck, 
  ArrowUpRight,
  Phone,
  Mail
} from 'lucide-react';

/* =========================================================================
   PALIERS DE DONS ET IMPACT ASSOCIÉ
   ========================================================================= */

const DONATION_TIERS = [
  {
    amount: '5 000 F',
    label: '5 000 FCFA (~7,50 €)',
    impact: 'Finance 1 kit de dignité menstruelle lavable complet pour une élève.',
    recommended: false
  },
  {
    amount: '15 000 F',
    label: '15 000 FCFA (~23 €)',
    impact: 'Prend en charge les soins et médicaments d’un patient lors des JAMOH.',
    recommended: true
  },
  {
    amount: '30 000 F',
    label: '30 000 FCFA (~45 €)',
    impact: 'Assure le suivi psychologique et l’aide d’urgence d’une survivante de VBG.',
    recommended: false
  },
  {
    amount: '50 000 F',
    label: '50 000 FCFA (~76 €)',
    impact: 'Équipe un club scolaire de pairs-éducateurs en santé (Espace EPS).',
    recommended: false
  }
];

/* =========================================================================
   COMPOSANT PRINCIPAL : DonationSection
   ========================================================================= */

export default function DonationSection() {
  const [selectedTier, setSelectedTier] = useState(DONATION_TIERS[1]);
  const [customAmount, setCustomAmount] = useState('');
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id="don" className="py-20 lg:py-24 bg-white relative overflow-hidden border-t border-slate-100">
      
      {/* Fond épuré avec reflets subtils aux couleurs officielles */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-10 left-10 w-96 h-96 bg-red-50/50 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* En-tête Sobre */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 text-[#ED1C24] border border-red-200/80 mb-3">
            <Heart className="w-3.5 h-3.5 fill-[#ED1C24]" />
            <span>Soutien & Engagement Citoyen</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#002157] font-title tracking-tight leading-tight">
            Pour chaque vie, une solution
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#606060] font-body leading-relaxed">
            Vos contributions financent directement des actions concrètes auprès des communautés vulnérables au Togo.
          </p>
        </div>

        {/* Grille principale : Simulateur de Don & Coordonnées directes */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* =========================================================
              COLONNE GAUCHE : Simulateur et Sélection du Don
             ========================================================= */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#002157] font-body">
                  1. Choisissez un palier solidaire
                </span>
                <span className="text-[11px] font-medium text-slate-500 font-body">
                  Dons ponctuels ou récurrents
                </span>
              </div>

              {/* Paliers en grille 2x2 */}
              <div className="grid grid-cols-2 gap-3">
                {DONATION_TIERS.map((tier, idx) => {
                  const isSelected = selectedTier?.amount === tier.amount && !customAmount;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setSelectedTier(tier);
                        setCustomAmount('');
                      }}
                      className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer relative ${
                        isSelected
                          ? 'border-[#ED1C24] bg-red-50/40 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      {tier.recommended && (
                        <span className="absolute -top-2 right-3 px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#ED1C24] text-white uppercase tracking-wider">
                          Recommandé
                        </span>
                      )}
                      <div className={`font-title font-bold text-base sm:text-lg ${isSelected ? 'text-[#ED1C24]' : 'text-[#002157]'}`}>
                        {tier.amount}
                      </div>
                      <div className="text-[11px] text-[#606060] font-body mt-0.5 truncate">
                        {tier.label.split('(')[1]?.replace(')', '') || 'Francs CFA'}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Champ Montant Libre */}
              <div className="pt-1">
                <div className="relative">
                  <input
                    type="number"
                    placeholder="Ou saisissez un montant libre en FCFA..."
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedTier(null);
                    }}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#002157] focus:ring-1 focus:ring-[#002157] outline-none text-xs sm:text-sm font-body text-[#002157] placeholder:text-slate-400"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 font-body">
                    FCFA
                  </span>
                </div>
              </div>

              {/* Bloc explicatif de l'impact direct */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="text-xs font-bold text-[#002157] font-body flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#ED1C24]" />
                  <span>Impact direct de votre geste :</span>
                </div>
                <p className="text-xs text-[#606060] font-body leading-relaxed">
                  {customAmount 
                    ? `Votre don libre de ${Number(customAmount).toLocaleString()} FCFA financera directement le déploiement de kits et consultations sur le terrain.`
                    : selectedTier?.impact}
                </p>
              </div>

            </div>

            {/* Garanties et récépissé officiel */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 font-body gap-2">
              <span>Association Reconnue · Récépissé N° 0352</span>
              <span className="text-[#002157] font-semibold">100% alloué aux actions terrain</span>
            </div>

          </div>

          {/* =========================================================
              COLONNE DROITE : Canaux de Paiement & Contact Direct
             ========================================================= */}
          <div className="lg:col-span-5 bg-[#002157] text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FFCD00] font-body">
                2. Moyens de transfert directs
              </span>

              <h3 className="font-title font-bold text-xl text-white leading-tight">
                Paiement Mobile & Coordonnées
              </h3>

              <p className="text-xs text-blue-100/80 font-body leading-relaxed">
                Transférez directement votre don via nos comptes officiels au Togo ou contactez-nous pour un virement bancaire / convention de mécénat.
              </p>

              {/* Lignes de copie rapide */}
              <div className="space-y-2.5 pt-1">
                
                {/* T-Money */}
                <div className="p-3 rounded-xl bg-white/10 border border-white/15 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-[10px] uppercase font-bold text-blue-200">T-Money (Togocom)</div>
                    <div className="font-mono text-sm font-bold text-white">+228 90 49 80 56</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy('+22890498056', 'tmoney')}
                    className="px-2.5 py-1.5 rounded-lg bg-white/15 hover:bg-white/25 text-xs text-white font-medium flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    {copiedKey === 'tmoney' ? <Check className="w-3.5 h-3.5 text-[#FFCD00]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'tmoney' ? 'Copié' : 'Copier'}</span>
                  </button>
                </div>

                {/* Flooz / Moov Money */}
                <div className="p-3 rounded-xl bg-white/10 border border-white/15 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-[10px] uppercase font-bold text-blue-200">Flooz (Moov Africa)</div>
                    <div className="font-mono text-sm font-bold text-white">+228 96 18 38 11</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy('+22896183811', 'flooz')}
                    className="px-2.5 py-1.5 rounded-lg bg-white/15 hover:bg-white/25 text-xs text-white font-medium flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    {copiedKey === 'flooz' ? <Check className="w-3.5 h-3.5 text-[#FFCD00]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'flooz' ? 'Copié' : 'Copier'}</span>
                  </button>
                </div>

                {/* E-mail officiel */}
                <div className="p-3 rounded-xl bg-white/10 border border-white/15 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-[10px] uppercase font-bold text-blue-200">E-mail Officiel</div>
                    <div className="text-xs font-bold text-white truncate max-w-[170px]">solutionhayathe@gmail.com</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy('solutionhayathe@gmail.com', 'mail')}
                    className="px-2.5 py-1.5 rounded-lg bg-white/15 hover:bg-white/25 text-xs text-white font-medium flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    {copiedKey === 'mail' ? <Check className="w-3.5 h-3.5 text-[#FFCD00]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'mail' ? 'Copié' : 'Copier'}</span>
                  </button>
                </div>

              </div>
            </div>

            {/* Bouton d'action principal */}
            <div className="pt-2">
              <a
                href="mailto:solutionhayathe@gmail.com?subject=Confirmation%20de%20Don%20ou%20Mécénat%20-%20Solution%20Hayathe"
                className="w-full py-3.5 px-6 rounded-xl bg-[#ED1C24] hover:bg-[#c9141b] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Confirmer ou déclarer un don</span>
              </a>
            </div>

          </div>

        </div>

        {/* 3 Autres formes d'engagement (Bénévolat, Partenariats, Plaidoyer) */}
        <div className="grid sm:grid-cols-3 gap-6 mt-10">
          
          <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200/90 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#002157] flex items-center justify-center mb-3">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="font-title font-bold text-base text-[#002157]">
              Devenir Bénévole
            </h4>
            <p className="font-body text-xs text-[#606060] leading-relaxed">
              Rejoignez nos équipes médicales, psychologues et animateurs communautaires à Sokodé.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200/90 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-[#ED1C24] flex items-center justify-center mb-3">
              <Building2 className="w-5 h-5" />
            </div>
            <h4 className="font-title font-bold text-base text-[#002157]">
              Mécénat d'Entreprise
            </h4>
            <p className="font-body text-xs text-[#606060] leading-relaxed">
              Associez votre organisation à nos programmes de santé publique et d'égalité au Togo.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200/90 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-3">
              <ArrowUpRight className="w-5 h-5" />
            </div>
            <h4 className="font-title font-bold text-base text-[#002157]">
              Faire Rayonner
            </h4>
            <p className="font-body text-xs text-[#606060] leading-relaxed">
              Partagez nos campagnes de sensibilisation et donnez de la visibilité aux droits des femmes.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
