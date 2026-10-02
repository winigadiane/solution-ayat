import React from 'react';

/**
 * PatternDivider — Motif de séparation graphique officiel Solution Hayathe
 * Reproduit fidèlement la frise géométrique identitaire (couronne / solidarité / communauté)
 * Tiling SVG fluide et vectoriel sur 100% de la largeur d'écran.
 */
export default function PatternDivider({ 
  bgColor = "bg-[#002157]", 
  strokeColor = "stroke-white",
  height = "h-10 sm:h-12",
  className = ""
}) {
  const patternId = React.useId().replace(/:/g, '');

  return (
    <div className={`w-full overflow-hidden select-none ${bgColor} ${className}`}>
      <svg 
        className={`w-full ${height} block`} 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern 
            id={`hayathe-frieze-${patternId}`} 
            width="64" 
            height="44" 
            patternUnits="userSpaceOnUse"
          >
            {/* 3 Cercles supérieurs (rythme double aux jonctions : oo   o   oo) */}
            <circle 
              cx="6" 
              cy="9" 
              r="3.2" 
              fill="none" 
              className={strokeColor} 
              strokeWidth="2.4" 
            />
            <circle 
              cx="32" 
              cy="6" 
              r="3.2" 
              fill="none" 
              className={strokeColor} 
              strokeWidth="2.4" 
            />
            <circle 
              cx="58" 
              cy="9" 
              r="3.2" 
              fill="none" 
              className={strokeColor} 
              strokeWidth="2.4" 
            />

            {/* Tracé géométrique continu de la couronne / chaîne humaine */}
            <path
              d="M 6 18 L 19 38 L 32 14 L 45 38 L 58 18"
              fill="none"
              className={strokeColor}
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </pattern>
        </defs>

        <rect 
          width="100%" 
          height="100%" 
          fill={`url(#hayathe-frieze-${patternId})`} 
        />
      </svg>
    </div>
  );
}
