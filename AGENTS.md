# Charte Graphique & Règles du Projet — Solution AYAT

Ce document définit les règles de design et de développement obligatoires pour le projet Solution AYAT. Elles doivent être respectées à tout moment lors de la modification ou de l'ajout de composants, de styles ou de pages.

---

## 1. Typographie Officielle (À garder impérativement en mémoire)

Les polices sont stockées localement dans `public/font/` :

* **Titres & En-têtes** : **Glancyr** (`Glancyr Neue Demo.ttf`)
  * **Cible** : Toutes les balises de titres (`h1`, `h2`, `h3`, `h4`, `h5`, `h6`), le logo, les accroches visuelles et les classes `.font-title` / `.font-heading`.
  * **Famille CSS** : `'Glancyr'`, `'Glancyr Neue'`, system-ui, sans-serif.

* **Paragraphes & Textes courants** : **Metropolis** (`Metropolis-Regular.otf`, `Metropolis-Medium.otf`)
  * **Cible** : Tous les paragraphes (`p`), descriptions, corps de texte (`body`), listes, libellés de formulaires, badges, boutons et classes `.font-body` / `.font-sans`.
  * **Famille CSS** : `'Metropolis'`, system-ui, -apple-system, sans-serif.

---

## 2. Charte Chromatique & Thème

* **Thème du site** : **Thème blanc** (`#FFFFFF` en fond principal, surfaces blanches épurées, cartes lumineuses surélevées).
* **Couleurs Primaires** :
  * **#ED1C24** : Rouge vif officiel (Actions prioritaires, CTA, alertes et accents dynamiques).
  * **#002157** : Bleu nuit profond officiel (Typographies majeures, navigation, cartes contrastées, solidité institutionnelle).
* **Couleurs Secondaires** :
  * **#FFCD00** : Jaune or officiel (Étoiles, badges de performance, surlignages, points lumineux).
  * **#606060** : Gris neutre officiel (Textes de lecture, sous-titres, bordures fines de soutien).

---

## 3. Implémentation Technique

* Fichier de styles maître : `src/index.css`
* Moteur : **Tailwind CSS v4** (`@theme`) avec variables CSS `:root`
* Préchargement des polices : Déclaré dans `index.html` via `<link rel="preload">`

---

## 4. Règle Stricte d'Iconographie & Design

* **INTERDICTION ABSOLUE D'UTILISER L'ICÔNE SPARKLES / ÉTOILE SCINTILLANTE** : Ne jamais utiliser l'icône `Sparkles` (Lucide) ou tout pictogramme d'étincelles / étoiles à 4 branches. Utiliser à la place des puces épurées (`span` point couleur) ou des icônes contextuelles spécifiques et sobres.

---

## 5. Règle d'Exécution & Aperçu Navigateur

* **PAS D'APERÇU AUTOMATIQUE** : Ne jamais déclencher systématiquement d'agent navigateur ou de preview du site. Le faire **uniquement sur demande explicite** de l'utilisateur.

---

## 6. Règle Stricte de Palette Chromatique

* **AUCUN VERT AUTORISÉ DANS LE SITE** : Ne jamais utiliser de vert (ni `green`, `emerald`, `#25D366`, etc.), même pour WhatsApp, statuts ou validations. Utiliser exclusivement :
  * **#ED1C24** (Rouge officiel) pour les actions prioritaires, CTA et boutons d'action.
  * **#002157** (Bleu nuit officiel) pour les structures, textes majeurs et boutons secondaires.
  * **#FFCD00** (Jaune or officiel) pour les accents et validations.
  * **#606060** et teintes d'ardoise neutres pour le texte courant.
