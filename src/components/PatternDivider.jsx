import React from 'react';

export default function PatternDivider({ className = '' }) {
  return (
    <div 
      className={`w-full bg-[#00173d] overflow-hidden py-3 sm:py-3.5 flex items-center justify-center relative shadow-inner select-none ${className}`}
      aria-hidden="true"
    >
      <div className="w-full h-9 sm:h-11 flex items-center overflow-hidden">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="crown-divider-pattern"
              width="92"
              height="58"
              patternUnits="userSpaceOnUse"
            >
              {/* Cercle gauche (creux) */}
              <circle
                cx="10"
                cy="12"
                r="4.2"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="3.2"
              />
              {/* Cercle central surélevé (creux) */}
              <circle
                cx="46"
                cy="7"
                r="4.2"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="3.2"
              />
              {/* Cercle droit (creux) */}
              <circle
                cx="82"
                cy="12"
                r="4.2"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="3.2"
              />
              {/* Silhouette Couronne en W inversé / M avec pointes arrondies */}
              <path
                d="M 10 22 L 22 52 L 46 19 L 70 52 L 82 22"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="3.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#crown-divider-pattern)" />
        </svg>
      </div>
    </div>
  );
}
