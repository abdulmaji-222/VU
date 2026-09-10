import React from 'react';
import { useApp } from '../../context/AppContext';

export const WhatsAppVIPModal: React.FC = () => {
  const { isWhatsAppModalOpen, setIsWhatsAppModalOpen, selectedWhatsAppGroup, showToast } =
    useApp();

  if (!isWhatsAppModalOpen) return null;

  const handleLaunch = () => {
    showToast(`Launching secure connection to ${selectedWhatsAppGroup}...`, 'cell_tower');
    window.open('https://whatsapp.com', '_blank');
    setIsWhatsAppModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md rounded-3xl bg-surface-container-low p-space-lg shadow-2xl border border-primary-container/40 flex flex-col gap-space-md">
        <div className="flex items-center justify-between pb-space-xs border-b border-outline-variant/20">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-primary text-2xl">podcasts</span>
            <h3 className="font-title-md text-title-md text-on-surface font-bold">
              VIP Channel Admission
            </h3>
          </div>
          <button
            onClick={() => setIsWhatsAppModalOpen(false)}
            className="p-1 text-on-surface-variant hover:text-on-surface cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        <div className="p-space-md rounded-2xl bg-surface-container-highest/60 border border-outline-variant/30 flex flex-col items-center text-center gap-space-xs">
          <div className="w-14 h-14 rounded-2xl bg-primary-container/20 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(0,240,255,0.4)]">
            <span className="material-symbols-outlined text-3xl">chat</span>
          </div>
          <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container text-tertiary-container font-mono font-bold uppercase mt-1">
            Official Network Node
          </span>
          <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
            {selectedWhatsAppGroup}
          </h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Supervised by Abdul Majid. Instant real-time alerts for handouts, date sheets, midterm
            paper uploads, and 100% verified solutions.
          </p>
        </div>

        <div className="space-y-space-xs font-label-sm text-label-sm text-on-surface-variant font-mono">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-primary text-base">check_circle</span>
            <span>Zero Spam Policy enforced with automated bots</span>
          </div>
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-primary text-base">check_circle</span>
            <span>Direct access to senior batch toppers & Abdul Majid</span>
          </div>
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-primary text-base">check_circle</span>
            <span>Instant push notifications during exam halls active hours</span>
          </div>
        </div>

        <div className="flex items-center justify-end gap-space-sm pt-space-xs border-t border-outline-variant/20">
          <button
            onClick={() => setIsWhatsAppModalOpen(false)}
            className="px-space-md py-2 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-bright cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={handleLaunch}
            className="px-space-lg py-2 rounded-xl bg-primary-container text-on-primary-container font-headline-sm text-headline-sm font-bold shadow-[0_0_20px_rgba(0,240,255,0.5)] hover:shadow-[0_0_30px_rgba(0,240,255,0.8)] transition-all cursor-pointer flex items-center gap-1"
          >
            <span>Launch WhatsApp Web / App</span>
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </button>
        </div>
      </div>
    </div>
  );
};
