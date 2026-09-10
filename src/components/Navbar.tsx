import React, { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';
import { ASSETS } from '../mockData';

export const Navbar: React.FC = () => {
  const {
    portalName,
    activeLogo,
    themePreset,
    setThemePreset,
    setActiveView,
    setIsSearchModalOpen,
    setIsSupportModalOpen,
    setSelectedCategoryFilter,
    showToast,
  } = useApp();

  const [activeTab, setActiveTab] = useState('handouts');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchModalOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsSearchModalOpen]);

  const handleNavClick = (tabId: string, categoryFilter?: string) => {
    setActiveTab(tabId);
    if (categoryFilter) {
      setSelectedCategoryFilter(categoryFilter);
      const target = document.getElementById('academicGridSection');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (tabId === 'paper-reviews') {
      const target = document.getElementById('liveStreamSection');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (tabId === 'whatsapp-vip') {
      const target = document.getElementById('vipChannels');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/80 backdrop-blur-2xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-outline-variant/20">
      <div className="h-20 w-full px-gutter flex items-center justify-between gap-space-md">
        {/* Brand & Creator Attribution */}
        <div className="flex items-center gap-space-md shrink-0">
          <img
            alt="VU INSIGHT CREW 3D Emblem"
            className="h-10 w-auto object-contain cursor-pointer hover:scale-105 transition-transform"
            src={activeLogo || ASSETS.emblem}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-space-xs">
              <span
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold drop-shadow-[0_0_12px_rgba(0,240,255,0.4)] cursor-pointer"
              >
                {portalName}
              </span>
              <span className="font-label-sm text-label-sm bg-tertiary-container text-on-tertiary-container px-space-xs py-0.5 rounded-full font-bold uppercase shadow-[0_0_10px_rgba(245,158,11,0.25)]">
                VIP Mode
              </span>
            </div>
            <div className="flex items-center gap-space-xs">
              <span className="font-label-sm text-label-sm text-on-surface-variant/80">
                Crafted with Excellence by
              </span>
              <span className="font-label-sm text-label-sm text-secondary font-semibold">
                Abdul Majid
              </span>
            </div>
          </div>
        </div>

        {/* Search Matrix (Ctrl+K) */}
        <div className="hidden xl:flex items-center flex-1 max-w-xs mx-space-md">
          <div
            onClick={() => setIsSearchModalOpen(true)}
            className="w-full flex items-center justify-between px-space-md py-space-xs rounded-xl bg-surface-container-low text-on-surface-variant shadow-[inset_0_1px_4px_rgba(0,0,0,0.6)] cursor-pointer group hover:text-on-surface hover:bg-surface-container transition-all"
          >
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-container text-sm">
                search
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Search matrix resources...
              </span>
            </div>
            <kbd className="font-label-sm text-label-sm bg-surface-container px-space-xs py-0.5 rounded text-on-surface-variant border-0 shadow-sm">
              Ctrl + K
            </kbd>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden lg:flex items-center gap-space-xs">
          <button
            onClick={() => handleNavClick('handouts', 'handouts')}
            className={`px-space-sm py-space-xs transition-all font-label-lg text-label-lg rounded-lg ${
              activeTab === 'handouts'
                ? 'bg-primary-container text-on-primary-container font-bold shadow-[0_0_16px_rgba(0,240,255,0.4)]'
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
            }`}
          >
            Handouts
          </button>
          <button
            onClick={() => handleNavClick('past-papers', 'pastpapers')}
            className={`px-space-sm py-space-xs transition-all font-label-lg text-label-lg rounded-lg ${
              activeTab === 'past-papers'
                ? 'bg-primary-container text-on-primary-container font-bold shadow-[0_0_16px_rgba(0,240,255,0.4)]'
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
            }`}
          >
            Past Papers
          </button>
          <button
            onClick={() => handleNavClick('quizzes-and-solved', 'quizzes')}
            className={`px-space-sm py-space-xs transition-all font-label-lg text-label-lg rounded-lg ${
              activeTab === 'quizzes-and-solved'
                ? 'bg-primary-container text-on-primary-container font-bold shadow-[0_0_16px_rgba(0,240,255,0.4)]'
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
            }`}
          >
            Quizzes & Solved
          </button>
          <button
            onClick={() => handleNavClick('assignments-and-gdbs', 'assignments')}
            className={`px-space-sm py-space-xs transition-all font-label-lg text-label-lg rounded-lg ${
              activeTab === 'assignments-and-gdbs'
                ? 'bg-primary-container text-on-primary-container font-bold shadow-[0_0_16px_rgba(0,240,255,0.4)]'
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
            }`}
          >
            Assignments & GDBs
          </button>
          <button
            onClick={() => handleNavClick('paper-reviews')}
            className={`px-space-sm py-space-xs transition-all font-label-lg text-label-lg rounded-lg ${
              activeTab === 'paper-reviews'
                ? 'bg-primary-container text-on-primary-container font-bold shadow-[0_0_16px_rgba(0,240,255,0.4)]'
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
            }`}
          >
            Paper Reviews
          </button>
          <button
            onClick={() => handleNavClick('whatsapp-vip')}
            className={`px-space-sm py-space-xs transition-all font-label-lg text-label-lg rounded-lg ${
              activeTab === 'whatsapp-vip'
                ? 'bg-primary-container text-on-primary-container font-bold shadow-[0_0_16px_rgba(0,240,255,0.4)]'
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
            }`}
          >
            WhatsApp VIP
          </button>
          <button
            onClick={() => {
              setActiveView('admin');
              showToast('Switched to Admin Command Matrix | Root Directive Level 0', 'admin_panel_settings');
            }}
            className="px-space-sm py-space-xs rounded-lg font-label-lg text-label-lg text-secondary hover:text-on-surface hover:bg-secondary-container/30 transition-all font-semibold flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-sm">terminal</span>
            <span>Admin Center</span>
          </button>
        </nav>

        {/* Right Tools, VIP 3D Theme Switcher & Profile */}
        <div className="flex items-center gap-space-sm sm:gap-space-md shrink-0">
          {/* Quick VIP 3D Theme Selector */}
          <div className="flex items-center gap-1 p-1 rounded-full bg-surface-container-high/90 border border-outline-variant/40 shadow-inner">
            <button
              type="button"
              title="VIP Cyber Cyan Theme"
              onClick={() => {
                setThemePreset('cyan');
                showToast('VIP Cyan Theme Engaged', 'palette');
              }}
              className={`w-6 h-6 rounded-full transition-all flex items-center justify-center cursor-pointer ${
                themePreset === 'cyan'
                  ? 'bg-primary-container shadow-[0_0_12px_#00f0ff] ring-2 ring-primary-container scale-110'
                  : 'bg-cyan-500/40 hover:bg-cyan-400'
              }`}
            >
              {themePreset === 'cyan' && (
                <span className="w-1.5 h-1.5 rounded-full bg-surface-container-lowest"></span>
              )}
            </button>

            <button
              type="button"
              title="VIP Sovereign Gold Theme"
              onClick={() => {
                setThemePreset('gold');
                showToast('VIP Sovereign Gold Theme Engaged', 'workspace_premium');
              }}
              className={`w-6 h-6 rounded-full transition-all flex items-center justify-center cursor-pointer ${
                themePreset === 'gold'
                  ? 'bg-amber-400 shadow-[0_0_12px_#fbbf24] ring-2 ring-amber-300 scale-110'
                  : 'bg-amber-500/40 hover:bg-amber-400'
              }`}
            >
              {themePreset === 'gold' && (
                <span className="w-1.5 h-1.5 rounded-full bg-surface-container-lowest"></span>
              )}
            </button>

            <button
              type="button"
              title="VIP Neon Violet Theme"
              onClick={() => {
                setThemePreset('violet');
                showToast('VIP Neon Violet Theme Engaged', 'auto_awesome');
              }}
              className={`w-6 h-6 rounded-full transition-all flex items-center justify-center cursor-pointer ${
                themePreset === 'violet'
                  ? 'bg-purple-400 shadow-[0_0_12px_#c084fc] ring-2 ring-purple-300 scale-110'
                  : 'bg-purple-500/40 hover:bg-purple-400'
              }`}
            >
              {themePreset === 'violet' && (
                <span className="w-1.5 h-1.5 rounded-full bg-surface-container-lowest"></span>
              )}
            </button>
          </div>

          <button
            onClick={() => setIsSupportModalOpen(true)}
            className="flex items-center gap-space-xs px-space-sm py-1.5 rounded-xl bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors cursor-pointer border border-outline-variant/30"
          >
            <span className="material-symbols-outlined text-base text-primary">headset_mic</span>
            <span className="font-label-sm text-label-sm hidden sm:inline">Support</span>
          </button>
          <div
            onClick={() => {
              setActiveView('admin');
              showToast('Super-Admin profile recognized: Abdul Majid', 'badge');
            }}
            className="flex items-center gap-space-sm pl-space-xs cursor-pointer group"
            title="Abdul Majid (Super-Admin Profile) - Click to Open Admin Center"
          >
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover shadow-[0_0_12px_rgba(0,240,255,0.3)] ring-2 ring-primary-container/40 group-hover:ring-primary-container transition-all"
              src={ASSETS.profileUser}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
