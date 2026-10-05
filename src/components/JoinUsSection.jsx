import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Handshake, 
  Target, 
  Users, 
  Share2, 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  X,
  Phone,
  Send,
  Building,
  DollarSign
} from 'lucide-react';

/* =========================================================================
   OPTIONS D'ENGAGEMENT
   ========================================================================= */

const ENGAGEMENT_OPTIONS = [
  {
    id: 'don',
    number: '01',
    theme: 'red',
    icon: Heart,
    badge: 'Impact Direct',
    title: 'Faire un don',
    shortDesc: 'Financez directement nos kits de dignité menstruelle lavables, les soins médicaux et l’éducation en santé.',
    actionText: 'Remplir le formulaire de don',
    isPrimary: true
  },
  {
    id: 'partenaire',
    number: '02',
    theme: 'navy',
    icon: Handshake,
    badge: 'Coopération & Synergie',
    title: 'Devenir partenaire',
    shortDesc: 'Institutions, ONG internationales, fondations et entreprises : bâtissons ensemble des programmes durables.',
    actionText: 'Proposer un partenariat',
    isPrimary: false
  },
  {
    id: 'sponsor',
    number: '03',
    theme: 'yellow',
    icon: Target,
    badge: 'Parrainage Thématique',
    title: 'Sponsoriser un projet en cours',
    shortDesc: 'Adoptez un programme spécifique : Espaces Promoteurs de Santé (EPS), caravanes DSSR ou ateliers JAMOH.',
    actionText: 'Sponsoriser un projet',
    isPrimary: false
  },
  {
    id: 'membre',
    number: '04',
    theme: 'red',
    icon: Users,
    badge: 'Bénévolat & Action',
    title: 'Devenir membre & Bénévole',
    shortDesc: 'Rejoignez nos équipes sur le terrain à Sokodé et dans les régions du Togo. Devenez pair-éducateur/trice.',
    actionText: 'Postuler comme bénévole',
    isPrimary: false
  },
  {
    id: 'reseaux',
    number: '05',
    theme: 'navy',
    icon: Share2,
    badge: 'Communauté & Rayonnement',
    title: 'Suivre nos réseaux sociaux',
    shortDesc: 'Faites entendre notre voix en partageant nos campagnes de prévention, webinaires et plaidoyers en ligne.',
    actionText: 'Rejoindre la communauté',
    isPrimary: false
  }
];

export default function JoinUsSection() {
  const [activeFormType, setActiveFormType] = useState(null); // 'don' | 'partenaire' | 'sponsor' | 'membre' | 'reseaux' | null
  const [submitted, setSubmitted] = useState(false);

  // Écoute des ancres pour ouvrir le formulaire spécifique depuis la Navbar ou d'autres sections
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#rejoindre-don') setActiveFormType('don');
      else if (hash === '#rejoindre-partenaire') setActiveFormType('partenaire');
      else if (hash === '#rejoindre-sponsor') setActiveFormType('sponsor');
      else if (hash === '#rejoindre-membre') setActiveFormType('membre');
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Données de formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '15000',
    customAmount: '',
    paymentMethod: 'T-Money (+228 90 49 80 56)',
    organization: '',
    orgType: 'ONG / Association',
    projectChoice: 'Espaces Promoteurs de Santé (EPS)',
    skills: 'Santé & Pair-éducation',
    city: 'Sokodé',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setActiveFormType(null);
    }, 4500);
  };

  return (
    <section id="rejoindre" className="py-24 lg:py-32 bg-slate-50/60 relative overflow-hidden border-t border-slate-200">
      {/* Halos subtils de fond */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-red-50/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#002157]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================
            1. EN-TÊTE CENTRÉ
           ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 text-[#ED1C24] border border-red-200">
            <Heart className="w-3.5 h-3.5 fill-[#ED1C24]" />
            <span>Engagez-vous à nos côtés</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002157] font-title tracking-tight">
            Nous Rejoindre & Agir Ensemble
          </h2>

          <p className="text-base text-[#606060] font-body leading-relaxed">
            Chacun et chacune peut contribuer à transformer des vies. Choisissez la modalité d’action qui vous correspond et complétez votre formulaire d’engagement.
          </p>
        </div>

        {/* =========================================================
            2. GRILLE DES 5 VOIES D'ENGAGEMENT
           ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ENGAGEMENT_OPTIONS.map((option) => {
            const IconComp = option.icon;
            const isRed = option.theme === 'red';
            const isYellow = option.theme === 'yellow';

            return (
              <div
                key={option.id}
                className={`bg-white rounded-3xl p-7 sm:p-8 border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden shadow-xs hover:shadow-xl ${
                  option.isPrimary
                    ? 'border-[#ED1C24]/40 shadow-lg shadow-red-500/10'
                    : isYellow
                      ? 'hover:border-[#FFCD00] hover:shadow-[#FFCD00]/25'
                      : 'hover:border-[#002157]/30'
                }`}
              >
                {/* Numéro filigrane en haut à droite */}
                <div className="absolute top-4 right-6 text-4xl font-black font-title text-slate-100 group-hover:text-slate-200 transition-colors select-none">
                  {option.number}
                </div>

                <div className="space-y-4 relative z-10">
                  {/* Icône & Badge */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isRed
                          ? 'bg-red-50 text-[#ED1C24] group-hover:bg-[#ED1C24] group-hover:text-white group-hover:scale-110 shadow-xs'
                          : isYellow
                            ? 'bg-[#FFCD00]/20 text-[#735600] group-hover:bg-[#FFCD00] group-hover:text-[#002157] group-hover:scale-110 shadow-xs'
                            : 'bg-blue-50 text-[#002157] group-hover:bg-[#002157] group-hover:text-white group-hover:scale-110 shadow-xs'
                      }`}
                    >
                      <IconComp className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-[#002157]">
                      {option.badge}
                    </span>
                  </div>

                  {/* Titre */}
                  <h3 className="text-xl font-bold font-title text-[#002157] group-hover:text-[#ED1C24] transition-colors leading-snug">
                    {option.title}
                  </h3>

                  {/* Description courte */}
                  <p className="text-xs sm:text-sm text-[#606060] font-body leading-relaxed">
                    {option.shortDesc}
                  </p>
                </div>

                {/* Bouton d'action ouvrant le formulaire */}
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <button
                    onClick={() => {
                      setActiveFormType(option.id);
                      setSubmitted(false);
                    }}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold font-body transition-all duration-200 flex items-center justify-between cursor-pointer active:scale-98 ${
                      option.isPrimary
                        ? 'bg-[#ED1C24] hover:bg-[#c9141b] text-white shadow-md'
                        : isYellow
                          ? 'bg-[#FFCD00]/20 hover:bg-[#FFCD00] text-[#002157] font-bold'
                          : 'bg-slate-100 hover:bg-[#002157] text-[#002157] hover:text-white'
                    }`}
                  >
                    <span>{option.actionText}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================
            3. BANDEAU DE DON RAPIDE MOBILE MONEY
           ========================================================= */}
        <div className="mt-14 bg-gradient-to-br from-[#002157] to-[#001438] rounded-3xl p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FFCD00] font-body">
                Lignes directes de solidarité
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-title leading-tight">
                Envie d’apporter une contribution immédiate ?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-body leading-relaxed max-w-2xl">
                Effectuez un don direct par <strong>T-Money</strong> (+228 90 49 80 56) ou <strong>Flooz</strong> (+228 96 18 38 11), ou écrivez à notre secrétariat pour formaliser une convention.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <button
                onClick={() => {
                  setActiveFormType('don');
                  setSubmitted(false);
                }}
                className="w-full py-3.5 px-6 rounded-xl bg-[#ED1C24] hover:bg-[#c9141b] text-white font-bold text-xs uppercase tracking-wider text-center shadow-lg transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Ouvrir le formulaire de don</span>
              </button>
              <a
                href="https://wa.me/22890498056?text=Bonjour%20Solution%20Hayathe,%20je%20souhaite%20soutenir%20vos%20actions."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-white/10 hover:bg-white text-white hover:text-[#002157] font-bold text-xs uppercase tracking-wider text-center border border-white/20 transition-all active:scale-98"
              >
                Échanger sur WhatsApp
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* =========================================================
          4. MODAL AVEC LE FORMULAIRE INTERACTIF DÉDIÉ
         ========================================================= */}
      {activeFormType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#00173d]/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-9 shadow-2xl border border-slate-200 relative max-h-[92vh] overflow-y-auto">
            
            {/* Bouton Fermer */}
            <button
              onClick={() => setActiveFormType(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-[#ED1C24] hover:text-white flex items-center justify-center text-[#002157] transition-colors cursor-pointer z-10"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Onglets de sélection du formulaire dans le modal */}
            <div className="flex items-center gap-2 pb-5 border-b border-slate-100 overflow-x-auto">
              <button
                type="button"
                onClick={() => { setActiveFormType('don'); setSubmitted(false); }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap cursor-pointer transition-all ${
                  activeFormType === 'don' ? 'bg-[#ED1C24] text-white shadow-xs' : 'bg-slate-100 text-[#002157] hover:bg-slate-200'
                }`}
              >
                Faire un don
              </button>
              <button
                type="button"
                onClick={() => { setActiveFormType('partenaire'); setSubmitted(false); }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap cursor-pointer transition-all ${
                  activeFormType === 'partenaire' ? 'bg-[#002157] text-white shadow-xs' : 'bg-slate-100 text-[#002157] hover:bg-slate-200'
                }`}
              >
                Devenir partenaire
              </button>
              <button
                type="button"
                onClick={() => { setActiveFormType('sponsor'); setSubmitted(false); }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap cursor-pointer transition-all ${
                  activeFormType === 'sponsor' ? 'bg-[#FFCD00] text-[#002157] shadow-xs' : 'bg-slate-100 text-[#002157] hover:bg-slate-200'
                }`}
              >
                Sponsoriser un projet
              </button>
              <button
                type="button"
                onClick={() => { setActiveFormType('membre'); setSubmitted(false); }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap cursor-pointer transition-all ${
                  activeFormType === 'membre' ? 'bg-[#ED1C24] text-white shadow-xs' : 'bg-slate-100 text-[#002157] hover:bg-slate-200'
                }`}
              >
                Devenir membre
              </button>
            </div>

            {/* Écran de confirmation si soumis */}
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-red-50 text-[#ED1C24] flex items-center justify-center mx-auto border-2 border-red-100 shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-title text-[#002157]">
                  Votre engagement a bien été enregistré !
                </h3>
                <p className="text-xs sm:text-sm text-[#606060] font-body max-w-md mx-auto leading-relaxed">
                  Merci pour votre confiance envers l’Association Solution Hayathe. Notre équipe de coordination prendra contact avec vous sous 24 à 48 heures.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setActiveFormType(null)}
                    className="px-6 py-2.5 rounded-xl bg-[#002157] text-white text-xs font-bold hover:bg-[#00173d] transition-colors cursor-pointer"
                  >
                    Fermer cette fenêtre
                  </button>
                </div>
              </div>
            ) : (
              /* FORMULAIRE ACTIF SELON LE TYPE CHOISI */
              <form onSubmit={handleSubmit} className="space-y-5 pt-4">
                
                {/* 1. Cas particulier : Faire un don */}
                {activeFormType === 'don' && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold font-title text-[#002157]">Formulaire de Don Solidaire</h3>
                      <p className="text-xs text-[#606060] font-body mt-0.5">
                        Vos contributions financent directement les serviettes hygiéniques lavables et la santé des jeunes filles.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#002157] font-body">Montant de votre don (FCFA) :</label>
                      <div className="grid grid-cols-4 gap-2">
                        {['5000', '15000', '50000', 'Autre'].map((amt) => (
                          <button
                            type="button"
                            key={amt}
                            onClick={() => setFormData({ ...formData, amount: amt })}
                            className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                              formData.amount === amt
                                ? 'bg-[#ED1C24] text-white border-[#ED1C24]'
                                : 'bg-slate-50 text-[#002157] border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            {amt === 'Autre' ? 'Autre' : `${amt} F`}
                          </button>
                        ))}
                      </div>
                      {formData.amount === 'Autre' && (
                        <input
                          type="number"
                          placeholder="Indiquez le montant en FCFA"
                          value={formData.customAmount}
                          onChange={(e) => setFormData({ ...formData, customAmount: e.target.value })}
                          className="w-full mt-2 px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#002157] focus:outline-none focus:ring-2 focus:ring-[#ED1C24]"
                        />
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#002157] font-body">Mode de versement préféré :</label>
                      <select
                        value={formData.paymentMethod}
                        onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#002157] focus:outline-none focus:ring-2 focus:ring-[#ED1C24]"
                      >
                        <option value="T-Money (+228 90 49 80 56)">T-Money (+228 90 49 80 56)</option>
                        <option value="Flooz (+228 96 18 38 11)">Flooz (+228 96 18 38 11)</option>
                        <option value="Virement bancaire / Mécénat">Virement bancaire / Mécénat officiel</option>
                        <option value="Don de matériel (Kits / Tissus)">Don de matériel en nature</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* 2. Cas particulier : Devenir partenaire */}
                {activeFormType === 'partenaire' && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold font-title text-[#002157]">Proposition de Partenariat</h3>
                      <p className="text-xs text-[#606060] font-body mt-0.5">
                        Associons nos forces pour concevoir et déployer des initiatives communes au Togo.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-[#002157] font-body">Nom de votre organisation <span className="text-[#ED1C24]">*</span></label>
                        <input
                          type="text"
                          required
                          placeholder="Ex: Fondation Santé & Vie"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#002157] focus:outline-none focus:ring-2 focus:ring-[#002157]"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-[#002157] font-body">Type de structure</label>
                        <select
                          value={formData.orgType}
                          onChange={(e) => setFormData({ ...formData, orgType: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#002157] focus:outline-none focus:ring-2 focus:ring-[#002157]"
                        >
                          <option value="ONG / Association">ONG / Association</option>
                          <option value="Entreprise / RSE">Entreprise / Mécénat RSE</option>
                          <option value="Institution publique">Institution publique / Ministère</option>
                          <option value="Bailleur international">Bailleur international</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. Cas particulier : Sponsoriser un projet */}
                {activeFormType === 'sponsor' && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold font-title text-[#002157]">Sponsoriser un Projet Spécifique</h3>
                      <p className="text-xs text-[#606060] font-body mt-0.5">
                        Parrainez une action concrète et recevez des indicateurs d’impact vérifiables.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#002157] font-body">Projet souhaité :</label>
                      <select
                        value={formData.projectChoice}
                        onChange={(e) => setFormData({ ...formData, projectChoice: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#002157] focus:outline-none focus:ring-2 focus:ring-[#FFCD00]"
                      >
                        <option value="Espaces Promoteurs de Santé (EPS)">Espaces Promoteurs de Santé en milieu scolaire (EPS)</option>
                        <option value="Kits d'Hygiène Menstruelle Lavables">Distribution de kits hygiéniques lavables (Dignité)</option>
                        <option value="Prise en charge des survivantes de VBG">Accompagnement & prise en charge survivantes VBG</option>
                        <option value="Caravanes JAMOH">Caravanes communautaires de santé JAMOH</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* 4. Cas particulier : Devenir membre & bénévole */}
                {activeFormType === 'membre' && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold font-title text-[#002157]">Candidature Membre & Bénévole</h3>
                      <p className="text-xs text-[#606060] font-body mt-0.5">
                        Rejoignez notre réseau de volontaires engagés pour la santé publique et les droits humains.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-[#002157] font-body">Votre ville / Région <span className="text-[#ED1C24]">*</span></label>
                        <input
                          type="text"
                          required
                          placeholder="Ex: Sokodé, Lomé, Kara..."
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#002157] focus:outline-none focus:ring-2 focus:ring-[#ED1C24]"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-[#002157] font-body">Domaine de compétence souhaité</label>
                        <select
                          value={formData.skills}
                          onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#002157] focus:outline-none focus:ring-2 focus:ring-[#ED1C24]"
                        >
                          <option value="Santé & Pair-éducation">Santé & Pair-éducation DSSR</option>
                          <option value="Animation & Théâtre Forum">Animation communautaire & Théâtre</option>
                          <option value="Communication & Réseaux">Communication & Création de contenu</option>
                          <option value="Logistique & Distribution">Logistique & Caravanes de terrain</option>
                          <option value="Recherche & Données">Recherche-action & Enquêtes</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. Cas particulier : Réseaux sociaux */}
                {activeFormType === 'reseaux' && (
                  <div className="space-y-3 pb-2">
                    <h3 className="text-lg font-bold font-title text-[#002157]">Rejoindre notre communauté en ligne</h3>
                    <p className="text-xs text-[#606060] font-body">
                      Suivez nos actualités en direct et recevez nos rapports par e-mail ou WhatsApp.
                    </p>
                  </div>
                )}

                {/* CHAMPS COMMUNS À TOUS LES FORMULAIRES */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#002157] font-body">Nom & Prénoms <span className="text-[#ED1C24]">*</span></label>
                    <input
                      type="text"
                      required
                      placeholder="Votre nom complet"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#002157] focus:outline-none focus:ring-2 focus:ring-[#ED1C24]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#002157] font-body">Adresse E-mail <span className="text-[#ED1C24]">*</span></label>
                    <input
                      type="email"
                      required
                      placeholder="votre.email@exemple.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#002157] focus:outline-none focus:ring-2 focus:ring-[#ED1C24]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#002157] font-body">Numéro Téléphone / WhatsApp <span className="text-[#ED1C24]">*</span></label>
                  <input
                    type="tel"
                    required
                    placeholder="+228 XX XX XX XX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#002157] focus:outline-none focus:ring-2 focus:ring-[#ED1C24]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#002157] font-body">Votre message ou précisions (optionnel) :</label>
                  <textarea
                    rows={3}
                    placeholder="Précisez votre demande, vos disponibilités ou vos motivations..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#002157] focus:outline-none focus:ring-2 focus:ring-[#ED1C24] resize-none"
                  ></textarea>
                </div>

                {/* Bouton de Soumission */}
                <div className="pt-2 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveFormType(null)}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer"
                  >
                    Annuler
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-[#ED1C24] hover:bg-[#c9141b] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer flex items-center gap-2 active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Envoyer ma demande</span>
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
