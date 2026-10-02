import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 text-[#ED1C24] border border-red-200">
            <Mail className="w-3.5 h-3.5" />
            <span>Contact & Partenariat</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002157] font-title tracking-tight">
            Échangeons pour Construire Ensemble des Solutions Durables
          </h2>

          <p className="text-base text-[#606060] font-body leading-relaxed">
            Vous souhaitez soutenir nos programmes, devenir bénévole, nouer un partenariat institutionnel ou nous poser une question ? Notre équipe vous répond avec écoute et diligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Colonne gauche : Coordonnées & Cartes d'accès rapide */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Carte WhatsApp & Téléphone direct (Rouge officiel) */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#002157] to-[#00173d] text-white shadow-xl space-y-4 relative overflow-hidden">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#FFCD00] border border-white/15 shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-title text-white">Ligne Directe & WhatsApp</h3>
                  <p className="text-xs text-slate-300 font-body">Réponse rapide du secrétariat général</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-sm font-body">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-xs">Ligne Principale / T-Money :</span>
                  <a href="tel:+22890498056" className="font-bold text-white hover:text-[#FFCD00] transition-colors font-mono">
                    +228 90 49 80 56
                  </a>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-xs">Ligne Secondaire / Flooz :</span>
                  <a href="tel:+22896183811" className="font-bold text-white hover:text-[#FFCD00] transition-colors font-mono">
                    +228 96 18 38 11
                  </a>
                </div>
              </div>

              <a
                href="https://wa.me/22890498056?text=Bonjour%20Association%20Solution%20Hayathe,%20je%20souhaite%20vous%20contacter."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#ED1C24] hover:bg-[#c9141b] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ouvrir une discussion WhatsApp</span>
              </a>
            </div>

            {/* Carte Email */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-[#ED1C24] border border-red-100 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-title text-[#002157]">Courrier Électronique</h3>
                  <a href="mailto:solutionhayathe@gmail.com" className="text-xs text-[#606060] font-body hover:text-[#ED1C24] transition-colors">
                    solutionhayathe@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Carte Siège & Horaires */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#002157] border border-blue-100 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-title text-[#002157]">Siège Social</h3>
                  <p className="text-xs text-[#606060] font-body">
                    Sokodé, Région Centrale · République Togolaise
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-[#606060]">
                <Clock className="w-4 h-4 text-[#002157] shrink-0" />
                <span>Du lundi au vendredi : 08h00 – 17h30 GMT</span>
              </div>
            </div>

            {/* Carte Réseaux Sociaux */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-sm font-bold font-title text-[#002157]">Suivez notre actualité en direct</h3>
              <p className="text-xs text-[#606060] font-body">Rejoignez nos communautés sur les réseaux officiels :</p>
              <div className="flex items-center gap-2 pt-1 flex-wrap">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#002157] text-[#002157] text-xs font-bold font-body transition-all hover:shadow-xs"
                >
                  Facebook
                </a>
                <a
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#002157] text-[#002157] text-xs font-bold font-body transition-all hover:shadow-xs"
                >
                  TikTok
                </a>
                <a
                  href="https://wa.me/22890498056"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#ED1C24] text-white text-xs font-bold font-body transition-all hover:bg-[#c9141b] shadow-xs"
                >
                  WhatsApp
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#002157] text-[#002157] text-xs font-bold font-body transition-all hover:shadow-xs"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#002157] text-[#002157] text-xs font-bold font-body transition-all hover:shadow-xs"
                >
                  Instagram
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#002157] text-[#002157] text-xs font-bold font-body transition-all hover:shadow-xs"
                >
                  YouTube
                </a>
              </div>
            </div>

          </div>

          {/* Colonne droite : Formulaire de contact moderne */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl">
            <h3 className="text-2xl font-bold font-title text-[#002157] mb-2">
              Envoyez-nous un Message
            </h3>
            <p className="text-xs text-[#606060] font-body mb-8">
              Remplissez le formulaire ci-dessous et nos coordinateurs vous répondront sous 24 à 48 heures.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-blue-50 border border-blue-200 text-center space-y-3 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-[#002157] text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold font-title text-[#002157]">Message transmis avec succès !</h4>
                <p className="text-xs text-[#606060] font-body">
                  Merci pour votre intérêt. L'équipe de Solution Hayathe prendra contact avec vous très rapidement.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#002157] font-body">
                      Nom & Prénoms <span className="text-[#ED1C24]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Diane KODJO"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#002157] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#ED1C24] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#002157] font-body">
                      Adresse E-mail <span className="text-[#ED1C24]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="votre.email@exemple.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#002157] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#ED1C24] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#002157] font-body">
                      Téléphone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="+228 XX XX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#002157] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#ED1C24] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#002157] font-body">
                      Objet du message <span className="text-[#ED1C24]">*</span>
                    </label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#002157] focus:outline-none focus:ring-2 focus:ring-[#ED1C24] focus:bg-white transition-all"
                    >
                      <option value="">Sélectionnez un sujet...</option>
                      <option value="Partenariat / Mécénat">Partenariat / Mécénat institutionnel</option>
                      <option value="Faire un don">Faire un don ou don de matériel</option>
                      <option value="Bénévolat">Devenir bénévole / Pair-éducateur</option>
                      <option value="Sensibilisation">Demande d'intervention en école / communauté</option>
                      <option value="Autre">Autre demande</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#002157] font-body">
                    Votre Message <span className="text-[#ED1C24]">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Écrivez votre message ici..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#002157] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#ED1C24] focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl font-bold text-sm text-white bg-[#ED1C24] hover:bg-[#c9141b] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Envoyer mon message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
