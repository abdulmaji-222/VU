import React from 'react';
import { useApp } from '../context/AppContext';
import { COMMUNITY_CHANNELS } from '../mockData';
import { Card3D } from './Card3D';

export const WhatsAppChannels: React.FC = () => {
  const { openWhatsAppModal } = useApp();

  return (
    <section className="w-full px-gutter py-space-xl perspective-1200" id="vipChannels">
      <div className="max-w-7xl mx-auto space-y-space-lg">
        <div className="text-center max-w-3xl mx-auto space-y-space-xs">
          <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-high border border-primary-container/30 shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
            <span className="w-2.5 h-2.5 rounded-full bg-primary-container shadow-[0_0_8px_#00f0ff] animate-ping"></span>
            <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-widest font-mono">
              DIRECT 3D COMM INTERFACE
            </span>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight">
            WhatsApp VIP <span className="text-cyan-3d">Instant Direct Access</span>
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Connect immediately with Abdul Majid's hyper-focused academic networks. Zero spam,
            moderated study groups, and instantaneous exam question warnings.
          </p>
        </div>

        {/* 4 Specialized 3D Interactive Channel Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {COMMUNITY_CHANNELS.map((chan) => {
            const isCyan = chan.accent === 'cyan';
            const isViolet = chan.accent === 'violet';
            const glowColor = isCyan
              ? 'rgba(0, 240, 255, 0.45)'
              : isViolet
              ? 'rgba(192, 132, 252, 0.45)'
              : 'rgba(245, 158, 11, 0.45)';

            return (
              <Card3D
                key={chan.id}
                className="h-full"
                glowColor={glowColor}
                depth={16}
              >
                <div className="card-3d-vip p-space-lg flex flex-col justify-between h-full group">
                  <div className="space-y-space-sm">
                    {/* 3D Icon Emblem */}
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 border ${
                        isCyan
                          ? 'bg-gradient-to-br from-cyan-400/20 to-cyan-600/10 text-cyan-300 border-cyan-400/40 shadow-[0_0_20px_rgba(0,240,255,0.35)]'
                          : isViolet
                          ? 'bg-gradient-to-br from-purple-500/20 to-purple-700/10 text-purple-300 border-purple-400/40 shadow-[0_0_20px_rgba(192,132,252,0.35)]'
                          : 'bg-gradient-to-br from-amber-400/20 to-amber-600/10 text-amber-300 border-amber-400/40 shadow-[0_0_20px_rgba(245,158,11,0.35)]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-3xl">{chan.icon}</span>
                    </div>

                    <div className="space-y-1">
                      <span
                        className={`font-label-sm text-label-sm uppercase font-bold tracking-wider font-mono ${
                          isCyan
                            ? 'text-primary'
                            : isViolet
                            ? 'text-secondary'
                            : 'text-tertiary-container'
                        }`}
                      >
                        {chan.category}
                      </span>
                      <h3 className="font-title-md text-title-md text-on-surface font-bold group-hover:text-primary transition-colors">
                        {chan.title}
                      </h3>
                    </div>

                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {chan.description}
                    </p>
                  </div>

                  <div className="pt-space-md border-t border-outline-variant/30 mt-space-md space-y-2">
                    <button
                      onClick={() => openWhatsAppModal(chan.title)}
                      className={`w-full py-2.5 flex items-center justify-center gap-space-xs cursor-pointer text-sm font-bold tracking-wider uppercase ${
                        isCyan
                          ? 'btn-3d-cyan'
                          : isViolet
                          ? 'btn-3d-violet'
                          : 'btn-3d-gold'
                      }`}
                    >
                      <span className="material-symbols-outlined text-base">cell_tower</span>
                      <span>1-CLICK JOIN</span>
                    </button>
                    <p className="text-center font-label-sm text-label-sm text-on-surface-variant/80 font-mono text-[11px]">
                      {chan.members}
                    </p>
                  </div>
                </div>
              </Card3D>
            );
          })}
        </div>
      </div>
    </section>
  );
};

