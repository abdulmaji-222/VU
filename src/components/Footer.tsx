import React from 'react';
import { useApp } from '../context/AppContext';

export const Footer: React.FC = () => {
  const { portalName } = useApp();

  return (
    <footer className="w-full bg-surface-container-lowest py-space-lg shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-t border-outline-variant/20 mt-space-xl">
      <div className="w-full max-w-7xl mx-auto px-gutter flex flex-col md:flex-row items-center justify-between gap-space-md">
        <div className="flex flex-col sm:flex-row items-center gap-space-md">
          <div className="flex items-center gap-space-xs">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse shadow-[0_0_8px_#00f0ff]"></span>
            <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
              LIVE MATRIX: <span className="text-primary font-bold">4,821</span> Active Scholars
            </span>
          </div>
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-sm text-secondary">bolt</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
              VIP SYNC: <span className="text-secondary font-semibold">99.98% Telemetry Node</span>
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-space-xs">
          <p className="font-label-sm text-label-sm text-on-surface-variant text-center md:text-right font-mono">
            © 2025 {portalName}. Engineered for Virtual University Scholars.
          </p>
          <p className="font-label-sm text-label-sm text-on-surface-variant/70 font-mono">
            Architected & Supervised with Distinction by{' '}
            <span className="text-primary font-semibold">Abdul Majid</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
