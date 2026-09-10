import React from 'react';
import { useApp } from '../../context/AppContext';
import { ASSETS } from '../../mockData';

export const AdminHeader: React.FC = () => {
  const { portalName, setIsSearchModalOpen, setIsSupportModalOpen, setActiveView } = useApp();

  return (
    <header className="fixed top-0 left-0 lg:left-72 right-0 h-20 bg-surface-container-lowest/80 backdrop-blur-2xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-gutter border-b border-outline-variant/30">
      <div className="flex items-center gap-space-md">
        <img
          alt="VU INSIGHT CREW 3D Emblem"
          className="h-8 w-auto object-contain lg:hidden cursor-pointer"
          src={ASSETS.emblem}
          onClick={() => setActiveView('portal')}
        />
        <div className="flex items-center gap-space-xs">
          <span className="font-headline-sm text-headline-sm text-primary font-bold">
            {portalName}
          </span>
          <span className="font-label-sm text-label-sm bg-surface-container-high text-primary px-space-xs py-0.5 rounded font-mono font-bold">
            MATRIX CORE
          </span>
        </div>
      </div>

      <div className="flex items-center gap-space-md">
        <div
          onClick={() => setIsSearchModalOpen(true)}
          className="hidden md:flex items-center px-space-md py-space-xs rounded-xl bg-surface-container-low text-on-surface-variant shadow-[inset_0_1px_4px_rgba(0,0,0,0.5)] cursor-pointer hover:text-on-surface transition-colors border border-outline-variant/20"
        >
          <span className="material-symbols-outlined text-sm mr-space-xs text-primary">search</span>
          <span className="font-body-sm text-body-sm mr-space-md">Search telemetry...</span>
          <kbd className="font-label-sm text-label-sm bg-surface-container px-space-xs py-0.5 rounded text-on-surface-variant font-mono">
            Ctrl + K
          </kbd>
        </div>

        <span className="font-label-sm text-label-sm bg-tertiary-container text-on-tertiary-container px-space-xs py-0.5 rounded-full font-bold uppercase shadow-[0_0_12px_rgba(245,158,11,0.3)] font-mono">
          VIP Active
        </span>

        <button
          onClick={() => setIsSupportModalOpen(true)}
          className="flex items-center p-space-xs rounded-xl bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
          title="Super-Admin VIP Support"
        >
          <span className="material-symbols-outlined text-xl text-primary">headset_mic</span>
        </button>

        <div className="flex items-center gap-2 pl-space-xs">
          <img
            alt="Abdul Majid Profile"
            className="w-9 h-9 rounded-full object-cover shadow-[0_0_12px_rgba(0,240,255,0.4)] ring-2 ring-primary-container"
            src={ASSETS.profileUser}
          />
        </div>
      </div>
    </header>
  );
};
