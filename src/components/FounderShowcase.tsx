import React from 'react';
import { useApp } from '../context/AppContext';
import { Card3D } from './Card3D';

export const FounderShowcase: React.FC = () => {
  const { openWhatsAppModal } = useApp();

  return (
    <section className="w-full px-gutter py-space-lg perspective-1200">
      <div className="max-w-7xl mx-auto relative group">
        {/* Glow Perimeter Dynamic Aura */}
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500 via-cyan-400 to-purple-600 opacity-30 blur-2xl group-hover:opacity-60 transition duration-700 pointer-events-none animate-pulse"></div>

        {/* 3D Interactive Plaque Body */}
        <Card3D
          className="w-full"
          glowColor="rgba(245, 158, 11, 0.4)"
          depth={12}
        >
          <div className="relative px-space-lg py-space-xl sm:px-space-xl rounded-3xl bg-gradient-to-br from-surface-container-high/90 via-surface-container/95 to-surface-container-low/95 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.15)] border border-tertiary-container/30 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-space-lg">
            {/* Left Wing: 3D Medallion & Creator Identity */}
            <div className="flex flex-col sm:flex-row items-center gap-space-lg text-center sm:text-left z-10">
              {/* 3D Gold Medallion with Orbital Ring */}
              <div className="relative flex-shrink-0">
                {/* Rotating Cyber Ring */}
                <div className="absolute -inset-2.5 rounded-full border-2 border-dashed border-amber-400/40 animate-spin-slow pointer-events-none"></div>
                
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-amber-600 via-yellow-300 to-amber-500 p-[3px] shadow-[0_10px_35px_rgba(245,158,11,0.55),inset_0_2px_4px_rgba(255,255,255,0.6)] flex items-center justify-center transform -rotate-2 hover:rotate-0 transition-transform">
                  <div className="w-full h-full rounded-[22px] bg-gradient-to-b from-stone-900 to-black flex flex-col items-center justify-center border border-amber-400/50 shadow-inner relative overflow-hidden">
                    {/* Metallic Glare Line */}
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
                    
                    <span
                      className="material-symbols-outlined text-5xl text-amber-300 drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      workspace_premium
                    </span>
                    <span className="font-label-sm text-[10px] text-amber-200 font-extrabold uppercase tracking-widest font-mono mt-0.5">
                      SUPREME
                    </span>
                  </div>
                </div>

                {/* 3D Founder Badge Pill */}
                <span className="absolute -bottom-2 -right-2 px-space-sm py-1 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 text-stone-950 font-label-sm text-label-sm font-extrabold uppercase shadow-[0_4px_15px_rgba(245,158,11,0.7)] font-mono border border-yellow-200">
                  FOUNDER
                </span>
              </div>

              <div className="space-y-space-xs">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-space-xs">
                  <span className="px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-300 font-label-sm text-label-sm tracking-widest font-bold uppercase font-mono border border-amber-500/40 shadow-[0_0_10px_rgba(245,158,11,0.2)]">
                    SUPREME ARCHITECT SPECIFICATION
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                    | UID: AM-001-ALPHA
                  </span>
                </div>

                <h2 className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight">
                  VIP ARCHITECT & FOUNDER:{' '}
                  <span className="text-gold-3d block sm:inline">
                    MADE BY ABDUL MAJID
                  </span>
                </h2>

                <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
                  Engineered with uncompromising precision to liberate Virtual University scholars.
                  Providing zero-latency 3D study vectors, authentic solved matrices, and direct access to the elite VIP brotherhood network.
                </p>
              </div>
            </div>

            {/* Right Wing: Telemetry Action Nodes & 3D Tactile Button */}
            <div className="flex flex-col sm:flex-row items-center gap-space-md shrink-0 z-10 w-full sm:w-auto justify-end">
              <div className="px-space-md py-space-sm rounded-2xl bg-surface-container-highest/80 text-center border border-amber-400/20 shadow-lg backdrop-blur-xl">
                <p className="font-label-sm text-label-sm text-amber-300/80 uppercase font-mono font-bold">
                  Direct Line
                </p>
                <p className="font-headline-sm text-headline-sm text-amber-300 font-extrabold tracking-wide">
                  VIP Concierge
                </p>
              </div>

              <button
                onClick={() => openWhatsAppModal("Abdul Majid's VIP Master Network")}
                className="btn-3d-gold w-full sm:w-auto px-space-xl py-3 flex items-center justify-center gap-space-xs cursor-pointer tracking-wider uppercase text-sm shadow-[0_10px_30px_rgba(245,158,11,0.5)]"
              >
                <span className="material-symbols-outlined text-lg font-bold">military_tech</span>
                <span>JOIN ABDUL MAJID'S NETWORK</span>
              </button>
            </div>

            {/* Cyber Watermark 3D Line Art */}
            <div className="absolute -right-12 -bottom-12 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-[230px] text-amber-300">
                shield_with_heart
              </span>
            </div>
          </div>
        </Card3D>
      </div>
    </section>
  );
};

