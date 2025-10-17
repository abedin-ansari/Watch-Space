import React from "react";

/**
 * Animated "WATCH SPACE" logo using ONLY standard, built-in Tailwind CSS utility classes.
 * FINAL CHANGE: Core text color set to 'text-gray-900' for maximum visibility on light backgrounds.
 */
const AnimatedLogo = ({ className = "h-12 w-auto" }) => {
  return (
    // Container: Added 'pl-4' for distance from the hamburger menu
    <div className={`flex items-center ${className} pl-4`}>
      <div className="flex items-center relative font-extrabold text-3xl">

        {/* LEFT WORD: WATCH (Core text is now dark) */}
        {/* Core text color: text-gray-900 */}
        <span className="relative z-10 text-gray-900 tracking-tighter mr-0.5"> 
          WATCH
          {/* Glow Layer 1: Bright Blue */}
          <span 
            className="absolute inset-0 block text-blue-400 z-0 opacity-75 shadow-lg shadow-blue-500/70"
            aria-hidden="true"
          >
            WATCH
          </span>
          {/* Glow Layer 2: Maximum standard blur and shadow for aura */}
          <span 
            className="absolute inset-0 block text-blue-200 z-0 opacity-50 blur-xl shadow-2xl shadow-blue-500/50"
            aria-hidden="true"
          >
            WATCH
          </span>
        </span>

        {/* CENTER BADGE: Planet with Orbit */}
        <div className="relative h-9 w-9 mx-0.5 flex items-center justify-center"> 
          
          {/* Outer Orbit Ring: Using default 'animate-spin' */}
          <div className="absolute inset-0 border-2 border-fuchsia-400 rounded-full animate-spin border-opacity-80"></div>
          
          {/* Inner Rotating Container: Spins to create the orbital motion */}
          <div className="absolute inset-0 animate-spin"> 
            
            {/* Planet: Positioned to orbit around the center */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 h-3.5 w-3.5 bg-fuchsia-600 rounded-full shadow-lg shadow-fuchsia-400 z-20"></div>
          </div>
        </div>

        {/* RIGHT WORD: SPACE (Core text is now dark) */}
        {/* Core text color: text-gray-900 */}
        <span className="relative z-10 text-gray-900 tracking-tighter ml-0.5">
          SPACE
          {/* Glow Layer 1: Bright Teal */}
          <span 
            className="absolute inset-0 block text-teal-400 z-0 opacity-75 shadow-lg shadow-teal-500/70"
            aria-hidden="true"
          >
            SPACE
          </span>
          {/* Glow Layer 2: Maximum standard blur and shadow for aura */}
          <span 
            className="absolute inset-0 block text-teal-200 z-0 opacity-50 blur-xl shadow-2xl shadow-teal-500/50"
            aria-hidden="true"
          >
            SPACE
          </span>
        </span>
      </div>
    </div>
  );
};

export default AnimatedLogo;