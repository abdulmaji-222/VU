import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const AdminTelemetryBanner: React.FC = () => {
  const { setIsInjectModalOpen, showToast } = useApp();
  const [isFlushing, setIsFlushing] = useState(false);

  const handleFlushCDN = () => {
    setIsFlushing(true);
    showToast('Flushing Cloudflare & AWS S3 Fast-Edge caches...', 'sync');
    setTimeout(() => {
      setIsFlushing(false);
      showToast('CDN Edge Cache Flushed successfully for VU INSIGHT scholars worldwide.', 'check_circle');
    }, 1200);
  };

  return (
    <div className="relative rounded-2xl bg-surface-container-low p-space-lg shadow-xl overflow-hidden border border-outline-variant/30">
      {/* Background glow halos */}
      <div className="absolute -right-16 -top-16 w-96 h-96 rounded-full bg-primary-container/10 blur-3xl pointer-events-none"></div>
      <div className="absolute left-1/3 -bottom-20 w-80 h-80 rounded-full bg-secondary/10 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
        <div className="flex items-start md:items-center gap-space-md">
          <div className="relative flex-shrink-0">
            <div className="w-14 h-14 rounded-xl bg-surface-container-high flex items-center justify-center text-primary-fixed shadow-[0_0_25px_rgba(0,240,255,0.35)] border border-primary-container/30">
              <span
                className="material-symbols-outlined text-3xl text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                admin_panel_settings
              </span>
            </div>
            <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-primary-container shadow-[0_0_10px_rgba(0,240,255,0.8)] animate-pulse"></span>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-space-xs">
              <span className="font-label-sm text-label-sm text-tertiary-fixed-dim bg-surface-container-highest px-space-xs py-0.5 rounded uppercase tracking-wider font-mono font-bold">
                Root Directive Level 0
              </span>
              <span className="font-label-sm text-label-sm text-primary font-mono bg-surface-container px-space-xs py-0.5 rounded">
                SESSION: ID-9082-ALPHA
              </span>
              <span className="font-label-sm text-label-sm text-secondary font-mono flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-primary-container inline-block"></span>
                BIOMETRICS VALIDATED
              </span>
            </div>

            <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-1">
              ADMIN COMMAND MATRIX{' '}
              <span className="font-headline-md text-headline-md text-on-surface-variant font-normal">
                | Welcome Abdul Majid
              </span>
            </h1>

            <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Super-Admin Master Access & Real-Time Content Hyper-Controller • VU Insight Operational
              Backbone
            </p>
          </div>
        </div>

        {/* Quick System Action Nodes */}
        <div className="flex flex-wrap items-center gap-space-xs">
          <button
            onClick={handleFlushCDN}
            disabled={isFlushing}
            className="flex items-center gap-space-xs px-space-sm py-space-xs rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-bright transition-all border border-outline-variant/30 cursor-pointer disabled:opacity-50"
          >
            <span
              className={`material-symbols-outlined text-base text-primary ${
                isFlushing ? 'animate-spin' : ''
              }`}
            >
              cached
            </span>
            <span>Flush CDN Edge</span>
          </button>

          <button
            onClick={() => setIsInjectModalOpen(true)}
            className="flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-primary-container text-on-primary font-label-md text-label-md shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:brightness-110 active:scale-95 transition-all font-bold cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">cloud_upload</span>
            <span>Inject Resource</span>
          </button>
        </div>
      </div>
    </div>
  );
};
