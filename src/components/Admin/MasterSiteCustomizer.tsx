import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ASSETS } from '../../mockData';

export const MasterSiteCustomizer: React.FC = () => {
  const {
    portalName,
    setPortalName,
    architectTagline,
    setArchitectTagline,
    themePreset,
    setThemePreset,
    activeLogo,
    setActiveLogo,
    showToast,
  } = useApp();

  const [isBroadcasting, setIsBroadcasting] = useState(false);

  const handleBroadcast = () => {
    setIsBroadcasting(true);
    showToast('Broadcasting portal customization to active nodes...', 'campaign');
    setTimeout(() => {
      setIsBroadcasting(false);
      showToast('Live WebSocket Broadcast Complete across 25,000+ client nodes!', 'done_all');
    }, 900);
  };

  const handleResetLogo = () => {
    setActiveLogo(ASSETS.emblem);
    showToast('Default 3D Emblem restored.', 'restart_alt');
  };

  const handleUploadLogo = () => {
    // Switch between emblem variants
    setActiveLogo(
      activeLogo === ASSETS.emblem ? ASSETS.adminEmblem : ASSETS.emblem
    );
    showToast('Vector Crest loaded and verified.', 'check_circle');
  };

  return (
    <div className="rounded-2xl bg-surface-container-low p-space-lg shadow-md flex flex-col gap-space-md border border-outline-variant/30">
      <div className="flex items-center justify-between pb-space-xs border-b border-outline-variant/20">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-primary text-xl">tune</span>
          <h2 className="font-title-md text-title-md text-on-surface font-bold">
            Master Site Customizer
          </h2>
        </div>
        <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
          Live WebSocket Sync
        </span>
      </div>

      {/* Live Portal Name Config */}
      <div className="flex flex-col gap-space-xs">
        <label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-mono">
          Portal Name Display (Global Header)
        </label>
        <div className="flex items-center rounded-xl bg-surface-container-highest px-space-sm py-space-xs shadow-inner border border-outline-variant/30">
          <span className="material-symbols-outlined text-on-surface-variant mr-space-xs text-base">
            domain
          </span>
          <input
            type="text"
            value={portalName}
            onChange={(e) => setPortalName(e.target.value)}
            className="bg-transparent text-primary font-headline-sm text-headline-sm w-full outline-none font-bold placeholder-outline tracking-tight font-mono"
            placeholder="VU INSIGHT CREW"
          />
        </div>
      </div>

      {/* Logo Uploader & Emblem Settings */}
      <div className="flex flex-col gap-space-xs">
        <label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-mono">
          3D Emblem & Vector Crest
        </label>
        <div className="flex items-center gap-space-md p-space-sm rounded-xl bg-surface-container-highest border border-outline-variant/20">
          <div className="relative w-16 h-16 rounded-xl bg-surface-container-low flex items-center justify-center overflow-hidden flex-shrink-0 border border-outline-variant/30">
            <img
              alt="Crest Preview"
              className="w-full h-full object-cover"
              src={activeLogo || ASSETS.adminEmblem}
            />
          </div>
          <div className="flex flex-col gap-space-xs w-full">
            <div className="flex items-center gap-space-xs">
              <button
                type="button"
                onClick={handleUploadLogo}
                className="px-space-sm py-space-xs rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-bright transition-all cursor-pointer font-mono"
              >
                Toggle Custom Crest
              </button>
              <button
                type="button"
                onClick={handleResetLogo}
                className="px-space-sm py-space-xs rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-bright transition-all cursor-pointer font-mono"
              >
                Reset Default
              </button>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
              Format: SVG, WEBP or PNG (Max 2MB)
            </span>
          </div>
        </div>
      </div>

      {/* VIP Signature & Footer Tagline */}
      <div className="flex flex-col gap-space-xs">
        <label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-mono">
          Architect Signature (VIP Authority Tagline)
        </label>
        <div className="flex items-center rounded-xl bg-surface-container-highest px-space-sm py-space-xs shadow-inner border border-outline-variant/30">
          <span className="material-symbols-outlined text-on-surface-variant mr-space-xs text-base">
            fingerprint
          </span>
          <input
            type="text"
            value={architectTagline}
            onChange={(e) => setArchitectTagline(e.target.value)}
            className="bg-transparent text-secondary font-body-sm text-body-sm w-full outline-none font-medium font-mono"
          />
        </div>
      </div>

      {/* Master Color & Theme Palette Controller */}
      <div className="flex flex-col gap-space-xs">
        <label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-mono">
          Telemetry Theme Preset Override
        </label>
        <div className="grid grid-cols-3 gap-space-xs">
          <button
            type="button"
            onClick={() => {
              setThemePreset('cyan');
              showToast('Theme switched to Cyber Cyan (Active Main).', 'palette');
            }}
            className={`flex flex-col items-center gap-1 p-space-xs rounded-xl transition-all text-center border cursor-pointer ${
              themePreset === 'cyan'
                ? 'bg-surface-container-highest border-primary-container shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                : 'bg-surface-container border-transparent opacity-70 hover:opacity-100'
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-primary-container shadow-[0_0_12px_rgba(0,240,255,0.8)]"></span>
            <span className="font-label-sm text-label-sm text-primary font-bold font-mono">
              Cyber Cyan
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant font-mono text-[9px] uppercase">
              {themePreset === 'cyan' ? 'Active Main' : 'Preset 1'}
            </span>
          </button>

          <button
            type="button"
            onClick={() => {
              setThemePreset('violet');
              showToast('Theme switched to VIP Violet (Ultra Spec).', 'palette');
            }}
            className={`flex flex-col items-center gap-1 p-space-xs rounded-xl transition-all text-center border cursor-pointer ${
              themePreset === 'violet'
                ? 'bg-surface-container-highest border-secondary shadow-[0_0_12px_rgba(221,183,255,0.3)]'
                : 'bg-surface-container border-transparent opacity-70 hover:opacity-100'
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-secondary-fixed shadow-[0_0_12px_rgba(221,183,255,0.8)]"></span>
            <span className="font-label-sm text-label-sm text-secondary font-bold font-mono">
              VIP Violet
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant font-mono text-[9px] uppercase">
              {themePreset === 'violet' ? 'Active Spec' : 'Ultra Spec'}
            </span>
          </button>

          <button
            type="button"
            onClick={() => {
              setThemePreset('gold');
              showToast('Theme switched to Imperial Gold (Executive).', 'palette');
            }}
            className={`flex flex-col items-center gap-1 p-space-xs rounded-xl transition-all text-center border cursor-pointer ${
              themePreset === 'gold'
                ? 'bg-surface-container-highest border-tertiary-container shadow-[0_0_12px_rgba(255,185,95,0.3)]'
                : 'bg-surface-container border-transparent opacity-70 hover:opacity-100'
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-tertiary-fixed shadow-[0_0_12px_rgba(255,185,95,0.8)]"></span>
            <span className="font-label-sm text-label-sm text-tertiary font-bold font-mono">
              Imperial Gold
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant font-mono text-[9px] uppercase">
              {themePreset === 'gold' ? 'Active Exec' : 'Executive'}
            </span>
          </button>
        </div>
      </div>

      {/* Save Notification Feedback */}
      <div className="pt-space-xs flex items-center justify-between border-t border-outline-variant/20">
        <span className="font-label-sm text-label-sm text-primary flex items-center gap-1 font-mono">
          <span className="material-symbols-outlined text-xs">done_all</span> All adjustments saved
          in live memory
        </span>
        <button
          type="button"
          onClick={handleBroadcast}
          disabled={isBroadcasting}
          className="px-space-md py-space-xs rounded-lg bg-surface-container-high text-primary font-label-md text-label-md hover:bg-surface-bright transition-all cursor-pointer font-bold border border-outline-variant/30"
        >
          {isBroadcasting ? 'Broadcasting...' : 'Broadcast Real-Time'}
        </button>
      </div>
    </div>
  );
};
