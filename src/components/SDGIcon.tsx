import React from "react";

interface SDGIconProps {
  id: number;
  className?: string;
}

export default function SDGIcon({ id, className = "w-8 h-8" }: SDGIconProps) {
  switch (id) {
    case 1: // No Poverty - Family silhouette
      return (
        <svg viewBox="0 0 48 48" fill="currentColor" className={className}>
          <circle cx="16" cy="14" r="4" />
          <path d="M10 24c0-3.3 2.7-6 6-6s6 2.7 6 6v14h-4v-8h-4v8h-4V24z" />
          <circle cx="28" cy="16" r="3.5" />
          <path d="M23 25c0-2.8 2.2-5 5-5s5 2.2 5 5v13h-3v-7h-4v7h-3V25z" />
          <circle cx="37" cy="22" r="2.5" />
          <path d="M34 29c0-1.7 1.3-3 3-3s3 1.3 3 3v9h-2v-4h-2v4h-2V29z" />
        </svg>
      );
    case 2: // Zero Hunger - Bowl with rising steam
      return (
        <svg viewBox="0 0 48 48" fill="currentColor" className={className}>
          <path d="M8 24h32c0 8.8-7.2 16-16 16S8 32.8 8 24z" />
          <path d="M6 21h36v3H6z" />
          <path d="M16 16c-1-2-1-4 0-6s1-4 0-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M24 16c-1-2-1-4 0-6s1-4 0-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M32 16c-1-2-1-4 0-6s1-4 0-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </svg>
      );
    case 3: // Good Health - Heartbeat line
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M4 25h10l5-13 8 26 6-17 4 7h7" />
        </svg>
      );
    case 4: // Quality Education - Open book
      return (
        <svg viewBox="0 0 48 48" fill="currentColor" className={className}>
          <path d="M24 14c-4-4-10-5-18-5v23c8 0 14 1 18 5 4-4 10-5 18-5V9c-8 0-14 1-18 5z" />
          <path d="M24 14v23" stroke="#C5192D" strokeWidth="2" />
        </svg>
      );
    case 5: // Gender Equality - Interlinked female/male balance
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="24" cy="20" r="10" />
          <path d="M24 30v12M19 36h10" />
          <path d="M19 17h10M19 22h10" />
        </svg>
      );
    case 6: // Clean Water - Water droplet in cup/tap
      return (
        <svg viewBox="0 0 48 48" fill="currentColor" className={className}>
          <path d="M24 6c-6 8-12 14-12 21a12 12 0 0 0 24 0c0-7-6-13-12-21z" />
          <path d="M12 36h24v4H12z" />
        </svg>
      );
    case 7: // Clean Energy - Radiant Sun
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className={className}>
          <circle cx="24" cy="24" r="8" fill="currentColor" />
          <path d="M24 4v6M24 38v6M4 24h6M38 24h6M9.9 9.9l4.2 4.2M33.9 33.9l4.2 4.2M9.9 38.1l4.2-4.2M33.9 14.1l4.2-4.2" />
        </svg>
      );
    case 8: // Decent Work - Growth Chart with Arrow
      return (
        <svg viewBox="0 0 48 48" fill="currentColor" className={className}>
          <path d="M8 38h32v4H8z" />
          <path d="M12 34h5V22h-5zM21 34h5V16h-5zM30 34h5V10h-5z" />
          <path d="M12 18l10-8 10 5 6-7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
        </svg>
      );
    case 9: // Industry, Innovation - Interlinked Cubes
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" className={className}>
          {/* Central Cube */}
          <path d="M24 8l10 5v11l-10 5-10-5V13z" fill="currentColor" fillOpacity="0.3" />
          <path d="M24 8v16M24 24l10-5M24 24l-10-5" />
          {/* Bottom Left Cube */}
          <path d="M14 26l8 4v8l-8 4-8-4v-8z" />
          {/* Bottom Right Cube */}
          <path d="M34 26l8 4v8l-8 4-8-4v-8z" />
        </svg>
      );
    case 10: // Reduced Inequalities - Equal bars with arrows
      return (
        <svg viewBox="0 0 48 48" fill="currentColor" className={className}>
          <path d="M12 18h24v4H12zM12 26h24v4H12z" />
          <path d="M24 6l6 6h-12zM24 42l-6-6h12z" />
        </svg>
      );
    case 11: // Sustainable Cities - Buildings
      return (
        <svg viewBox="0 0 48 48" fill="currentColor" className={className}>
          <path d="M8 40V18l10-6v28H8z" />
          <path d="M18 12h12v28H18z" fillOpacity="0.8" />
          <path d="M30 22h10v18H30z" />
          <circle cx="24" cy="8" r="3" />
        </svg>
      );
    case 12: // Responsible Consumption - Infinity loop
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" className={className}>
          <path d="M16 30c-4.4 0-8-3.6-8-8s3.6-8 8-8c5 0 9 6 12 10 3 4 7 10 12 10 4.4 0 8-3.6 8-8s-3.6-8-8-8c-5 0-9 6-12 10-3-4-7-10-12-10z" />
        </svg>
      );
    case 13: // Climate Action - Eye on Earth / Cloud with Rain
      return (
        <svg viewBox="0 0 48 48" fill="currentColor" className={className}>
          <path d="M24 10C12 10 4 24 4 24s8 14 20 14 20-14 20-14-8-14-20-14zm0 22a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
          <circle cx="24" cy="24" r="4" fill="#3F7E44" />
        </svg>
      );
    case 14: // Life Below Water - Fish & Waves
      return (
        <svg viewBox="0 0 48 48" fill="currentColor" className={className}>
          <path d="M38 18c-6-4-16-4-24 2-3 2-6 5-8 5 4 0 7 2 9 4 7 4 17 3 23-1l4 2v-14l-4 2z" />
          <circle cx="16" cy="20" r="1.5" fill="#0A97D9" />
          <path d="M6 32c6-2 10 2 16 0s10-2 16 0M6 38c6-2 10 2 16 0s10-2 16 0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </svg>
      );
    case 15: // Life on Land - Tree & Bird
      return (
        <svg viewBox="0 0 48 48" fill="currentColor" className={className}>
          <path d="M24 6c-7 0-13 5-13 12 0 4 2 8 5 10v12h16V28c3-2 5-6 5-10 0-7-6-12-13-12z" />
          <path d="M22 28v12h4V28z" fill="#56C02B" />
        </svg>
      );
    case 16: // Peace & Justice - Dove / Gavel
      return (
        <svg viewBox="0 0 48 48" fill="currentColor" className={className}>
          <path d="M38 12c-4 0-8 2-10 5l-4-3-4 4 3 4c-3 2-5 6-5 10 0 2 1 4 2 6l-6 2v4l12-3c2 1 4 1 6 1 8 0 14-6 14-14 0-4-2-8-6-10l2-5h-4z" />
        </svg>
      );
    case 17: // Partnerships - Concentric linked circles
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
          <circle cx="24" cy="24" r="16" />
          <circle cx="24" cy="16" r="6" />
          <circle cx="16" cy="28" r="6" />
          <circle cx="32" cy="28" r="6" />
        </svg>
      );
    default:
      return null;
  }
}
