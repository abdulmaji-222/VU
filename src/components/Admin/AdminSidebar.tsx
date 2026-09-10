import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ASSETS } from '../../mockData';

export const AdminSidebar: React.FC = () => {
  const { setActiveView, architectTagline, showToast } = useApp();
  const [activeAdminTab, setActiveAdminTab] = useState('terminal');

  const navItems = [
    { id: 'terminal', label: 'Command Terminal', icon: 'terminal' },
    { id: 'metrics', label: 'Resource Metrics', icon: 'query_stats' },
    { id: 'vip-registry', label: 'VIP Access Registry', icon: 'shield_person' },
    { id: 'vaults', label: 'Content Vaults', icon: 'folder_special' },
    { id: 'broadcasts', label: 'VIP Broadcasts', icon: 'campaign' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-lowest/90 backdrop-blur-2xl z-50 flex flex-col justify-between py-space-lg shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-r border-outline-variant/30">
      <div className="flex flex-col gap-space-lg px-space-md">
        {/* Logo & Version */}
        <div className="flex items-center gap-space-sm px-space-sm">
          <img
            alt="VU INSIGHT CREW 3D Emblem"
            className="h-9 w-auto object-contain"
            src={ASSETS.emblem}
          />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-primary font-bold">
              INSIGHT CORE
            </span>
            <span className="font-label-sm text-label-sm text-secondary font-mono">
              TELEMETRY v4.2
            </span>
          </div>
        </div>

        {/* Protocol Badge */}
        <div className="px-space-sm py-space-xs rounded-xl bg-surface-container-low shadow-[inset_0_1px_3px_rgba(0,0,0,0.4)] border border-outline-variant/20">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-mono">
              Protocol
            </span>
            <span className="font-label-sm text-label-sm text-primary font-semibold font-mono">
              AB-MAJID-VIP
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-space-xs">
          {navItems.map((item) => {
            const isActive = activeAdminTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveAdminTab(item.id);
                  showToast(`Command matrix routed: ${item.label}`, 'dns');
                }}
                className={`flex items-center gap-space-sm px-space-md py-space-sm rounded-xl transition-all cursor-pointer text-left ${
                  isActive
                    ? 'bg-primary-container text-on-primary-container font-bold shadow-[0_0_16px_rgba(0,240,255,0.4)]'
                    : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-lg">{item.icon}</span>
                <span className="font-body-md text-body-md">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Architect Signature & Exit to Portal */}
      <div className="px-space-md flex flex-col gap-space-sm">
        <div className="p-space-sm rounded-xl bg-surface-container-low shadow-[0_0_20px_rgba(0,240,255,0.06)] border border-outline-variant/30">
          <p className="font-label-sm text-label-sm text-on-surface-variant font-mono">
            Lead Architect Signature
          </p>
          <p className="font-body-sm text-body-sm text-primary font-bold mt-0.5">Abdul Majid</p>
          <p className="font-label-sm text-label-sm text-secondary font-mono mt-1 leading-tight">
            {architectTagline}
          </p>
        </div>

        <button
          onClick={() => {
            setActiveView('portal');
            showToast('Returned to Scholar Portal interface.', 'home');
          }}
          className="flex items-center gap-space-sm px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-all border border-outline-variant/30 cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg text-primary">exit_to_app</span>
          <span className="font-body-md text-body-md font-semibold">Exit to Portal</span>
        </button>
      </div>
    </aside>
  );
};
