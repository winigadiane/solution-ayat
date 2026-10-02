import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Send, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare
} from 'lucide-react';

/* =========================================================================
   COMPOSANT PRINCIPAL : ContactSection
   (Style exact de la maquette de référence :
    - Titre Glancyr "Contact" + Sous-titre
    - Colonne gauche : Carte WhatsApp directe avec bouton vert & bouton canal, 
      Carte Email, et Capsule slogan
    - Colonne droite : Formulaire 2 colonnes, Sélecteur d'objet, Textarea et 
      Bouton d'envoi avec icône Send)
   ========================================================================= */

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    subject: 'Question générale ou demande d’information',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.contact || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        contact: '',
        subject: 'Question générale ou demande d’information',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-white relative overflow-hidden border-t border-slate-100">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================
            1. EN-TÊTE EXACT DE LA RÉFÉRENCE
           ========================================================= */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002157] font-title tracking-tight leading-tight">
            Contact
          </h2>

          <p className="mt-2 text-base sm:text-lg text-[#606060] font-body leading-relaxed">
            Une question ou un projet ? Envoyez-nous un message ou contactez-nous directement.
          </p>
        </div>

        {/* =========================================================
            2. GRILLE PRINCIPALE (Gauche: Canaux directs, Droite: Formulaire)
           ========================================================= */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* =========================================================
              COLONNE GAUCHE : Cartes Directes (Style exact)
             ========================================================= */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* CARTE 1 : WHATSAPP / TÉLÉPHONE DIRECT */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-4">
              
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#002157] flex items-center justify-center shrink-0 border border-blue-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-body">
                    WHATSAPP & TÉLÉPHONE
                  </div>
                  <div className="font-mono text-sm sm:text-base font-bold text-[#002157]">
                    +228 90 49 80 56
                  </div>
                </div>
              </div>

              {/* Bouton Rouge Officiel (#ED1C24) */}
              <a
                href="https://wa.me/22890498056?text=Bonjour%20Association%20Solution%20Hayathe,%20je%20souhaite%20vous%20contacter."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#ED1C24] hover:bg-[#c9141b] text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 font-body"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Écrire sur WhatsApp</span>
              </a>

              {/* Bouton Secondaire Canal / Communauté */}
              <a
                href="https://wa.me/22896183811"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#002157] font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer font-body"
              >
                <span>Rejoindre la communauté WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

            </div>

            {/* CARTE 2 : EMAIL OFFICIEL */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#002157] flex items-center justify-center shrink-0 border border-blue-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-body">
                    EMAIL
                  </div>
                  <a 
                    href="mailto:solutionhayathe@gmail.com"
                    className="font-body text-xs sm:text-sm font-bold text-[#002157] hover:text-[#ED1C24] transition-colors truncate block"
                  >
                    solutionhayathe@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* CAPSULE SLOGAN OFFICIELLE */}
            <div className="rounded-2xl py-3.5 px-5 text-center bg-[#002157] text-white shadow-xs">
              <p className="text-xs sm:text-[13px] font-medium font-body text-blue-100">
                « Pour Chaque vie, une Solution. »
              </p>
            </div>

          </div>

          {/* =========================================================
              COLONNE DROITE : Formulaire Épuré (Style exact)
             ========================================================= */}
          <div className="lg:col-span-8 bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-xs">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-red-50 text-[#ED1C24] flex items-center justify-center mx-auto border border-red-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-title font-bold text-xl text-[#002157]">
                  Message envoyé avec succès !
                </h3>
                <p className="font-body text-sm text-[#606060] max-w-md mx-auto leading-relaxed">
                  Merci de votre engagement. L’équipe de l’Association Solution Hayathe vous répondra dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Ligne 1 : Nom complet + Email/WhatsApp (2 colonnes) */}
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#002157] font-body block">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-xs sm:text-sm font-body text-[#002157] placeholder:text-slate-400 focus:bg-white focus:border-[#002157] focus:ring-1 focus:ring-[#002157] outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#002157] font-body block">
                      Email ou WhatsApp
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="koffi@email.com ou 90 49..."
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-xs sm:text-sm font-body text-[#002157] placeholder:text-slate-400 focus:bg-white focus:border-[#002157] focus:ring-1 focus:ring-[#002157] outline-none transition-all"
                    />
                  </div>

                </div>

                {/* Ligne 2 : Objet du message (Select) */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#002157] font-body block">
                    Objet
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-xs sm:text-sm font-body text-[#002157] focus:bg-white focus:border-[#002157] focus:ring-1 focus:ring-[#002157] outline-none transition-all cursor-pointer"
                  >
                    <option value="Question générale ou demande d’information">
                      Question générale ou demande d’information
                    </option>
                    <option value="Devenir bénévole / Rejoindre l'équipe terrain">
                      Devenir bénévole / Rejoindre l'équipe terrain
                    </option>
                    <option value="Partenariat, Mécénat ou Don institutionnel">
                      Partenariat, Mécénat ou Don institutionnel
                    </option>
                    <option value="Accompagnement / Cellule d'Écoute & Soutien VBG">
                      Accompagnement / Cellule d'Écoute & Soutien VBG
                    </option>
                    <option value="Déploiement d’un Espace Promoteur de Santé (EPS)">
                      Déploiement d’un Espace Promoteur de Santé (EPS)
                    </option>
                    <option value="Webinaires, Plaidoyer et Formations">
                      Webinaires, Plaidoyer et Formations
                    </option>
                  </select>
                </div>

                {/* Ligne 3 : Message (Textarea) */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#002157] font-body block">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Votre message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-xs sm:text-sm font-body text-[#002157] placeholder:text-slate-400 focus:bg-white focus:border-[#002157] focus:ring-1 focus:ring-[#002157] outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {/* Bouton d'envoi officiel style référence */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="py-3.5 px-6 rounded-xl bg-[#002157] hover:bg-[#ED1C24] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-98 font-body"
                  >
                    <Send className="w-4 h-4" />
                    <span>Envoyer le message</span>
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>

    </section>
  );
}
