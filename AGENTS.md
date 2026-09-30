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
