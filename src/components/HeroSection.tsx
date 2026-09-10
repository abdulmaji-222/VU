import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ASSETS } from '../mockData';
import { Card3D } from './Card3D';

export const HeroSection: React.FC = () => {
  const { portalName, themePreset, showToast, setSearchQuery, setSelectedCategoryFilter } =
    useApp();
  const [courseInput, setCourseInput] = useState('');
  const [termFilter, setTermFilter] = useState('all');

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const query = courseInput.trim();
    if (!query) {
      showToast('Please type a course code like CS101, MTH101, or CS504', 'info');
      return;
    }
    setSearchQuery(query.toUpperCase());
    setSelectedCategoryFilter(termFilter);
    showToast(
      `Querying Matrix for ${query.toUpperCase()} [${termFilter.toUpperCase()}]... 34 Files Retrieved.`,
      'search'
    );
    const target = document.getElementById('academicGridSection');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const setHotVector = (code: string) => {
    setCourseInput(code);
    setSearchQuery(code);
    showToast(`Hot vector engaged: ${code} loaded into Matrix Vault`, 'bolt');
    const target = document.getElementById('academicGridSection');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 3D Title Gradient based on theme
  const titleGradientClass =
    themePreset === 'gold'
      ? 'text-gold-3d'
      : themePreset === 'violet'
      ? 'text-violet-3d'
      : 'text-cyan-3d';

  return (
    <section className="relative w-full px-gutter py-space-xl flex flex-col items-center justify-center overflow-hidden perspective-1200">
      {/* Dynamic 3D Atmospheric Glow Orbs */}
      <div className="absolute -top-40 -left-40 w-[650px] h-[650px] rounded-full bg-primary-container/15 blur-[150px] pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute top-1/4 -right-40 w-[700px] h-[700px] rounded-full bg-secondary-container/25 blur-[170px] pointer-events-none -z-10"></div>
      <div className="absolute top-2/3 left-1/3 w-[550px] h-[550px] rounded-full bg-tertiary-container/15 blur-[140px] pointer-events-none -z-10"></div>

      {/* Spatial 3D Container */}
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-space-xl relative z-10">
        {/* Left Column: Headline & 3D Vault Input */}
        <div className="flex-1 text-left space-y-space-md z-10">
          {/* Floating 3D Telemetry Pill */}
          <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container-high/90 shadow-[0_8px_20px_rgba(0,0,0,0.5)] border border-primary-container/30 backdrop-blur-xl transition-all transform hover:scale-105">
            <span className="w-2.5 h-2.5 rounded-full bg-primary-container shadow-[0_0_10px_#00f0ff] animate-ping"></span>
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-mono font-bold">
              VIP 3D ACADEMIC MATRIX V5.0
            </span>
            <span className="mx-1 text-outline-variant">|</span>
            <span className="font-label-sm text-label-sm text-tertiary-container font-extrabold uppercase font-mono tracking-wider">
              ABDUL MAJID EDITION
            </span>
          </div>

          {/* Hero Headline with 3D Metallic Relief */}
          <div className="space-y-space-xs">
            <h1
              className={`font-display-hero text-display-hero font-extrabold tracking-tight ${titleGradientClass}`}
              style={{
                fontFamily: "'Syne', 'Outfit', sans-serif",
                letterSpacing: '-0.02em',
              }}
            >
              {portalName}
            </h1>
            <p className="font-headline-lg text-headline-lg text-on-surface font-semibold leading-snug">
              Virtual University's Sovereign{' '}
              <span className="text-secondary font-bold drop-shadow-[0_0_20px_rgba(192,132,252,0.6)]">
                3D Academic Vault
              </span>{' '}
              & Exam Command Matrix
            </p>
          </div>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
            Engineered exclusively by <strong className="text-tertiary-container font-semibold">Abdul Majid</strong> for high-velocity VU scholars. Instant exam question feedback, 100% verified grand quiz dumps, highlighted handouts, and legendary Moaaz & Waqar Sidhu archives in full 3D fidelity.
          </p>

          {/* 3D Tactile Command Bar */}
          <form
            onSubmit={handleSearch}
            className="p-2 rounded-2xl bg-surface-container-high/80 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.15)] border border-primary-container/30 flex flex-col sm:flex-row items-stretch gap-space-xs max-w-2xl transform-gpu hover:border-primary-container/60 transition-all"
          >
            <div className="flex-1 flex items-center gap-space-xs px-space-sm py-2 rounded-xl bg-surface-container-lowest/90 border border-outline-variant/30 shadow-inner">
              <span className="material-symbols-outlined text-primary text-xl drop-shadow-[0_0_8px_#00f0ff]">
                search
              </span>
              <input
                id="matrixSearchInput"
                type="text"
                value={courseInput}
                onChange={(e) => setCourseInput(e.target.value)}
                placeholder="Enter Course: CS101, MTH101, CS504, ENG201..."
                className="w-full bg-transparent font-label-md text-label-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none font-mono"
              />
            </div>
            <select
              id="examFilter"
              value={termFilter}
              onChange={(e) => setTermFilter(e.target.value)}
              className="px-space-sm py-2 rounded-xl bg-surface-container-lowest/90 font-label-md text-label-md text-on-surface-variant focus:outline-none cursor-pointer border border-outline-variant/30 font-mono"
            >
              <option value="all">All Term Types</option>
              <option value="pastpapers">Midterm Exams</option>
              <option value="pastpapers">Finalterm Exams</option>
              <option value="gdbs">Solved GDBs</option>
              <option value="quizzes">Grand Quizzes</option>
              <option value="handouts">Highlighted Handouts</option>
            </select>
            <button
              type="submit"
              className="btn-3d-cyan px-space-lg py-2.5 flex items-center justify-center gap-space-xs cursor-pointer font-bold uppercase tracking-wider text-sm shrink-0"
            >
              <span>ACCESS VAULT</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
          </form>

          {/* Dynamic Quick Codes with 3D Hover Badges */}
          <div className="flex flex-wrap items-center gap-space-xs pt-space-xs">
            <span className="font-label-sm text-label-sm text-on-surface-variant font-mono flex items-center gap-1">
              <span className="material-symbols-outlined text-xs text-primary">bolt</span>
              Hot Vectors:
            </span>
            {['CS101', 'MTH101', 'ENG101', 'CS201', 'ECO401', 'CS504', 'CS601'].map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setHotVector(code)}
                className="px-2.5 py-1 rounded-lg bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container text-primary font-label-sm text-label-sm transition-all border border-outline-variant/40 font-mono shadow-[0_4px_12px_rgba(0,0,0,0.4)] hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:-translate-y-0.5 cursor-pointer font-bold"
              >
                {code}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Holographic Interactive 3D Stack */}
        <div className="flex-1 w-full relative flex items-center justify-center min-h-[460px] perspective-1000">
          {/* 3D Hologram Ambient Glow Core */}
          <div className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-primary-container/30 via-secondary-container/30 to-tertiary-container/20 filter blur-3xl animate-pulse pointer-events-none"></div>

          {/* 3D Rotating Holographic Matrix Diamond Ring */}
          <div className="absolute w-72 h-72 rounded-full border border-primary-container/20 animate-spin-slow pointer-events-none opacity-40 border-dashed"></div>
          <div className="absolute w-88 h-88 rounded-full border border-secondary/20 animate-spin-slow pointer-events-none opacity-30 [animation-direction:reverse]"></div>

          {/* 3D Layer 1: Primary Interactive Tilt Card */}
          <Card3D
            className="w-full max-w-md z-20"
            glowColor="rgba(0, 240, 255, 0.45)"
            depth={20}
          >
            <div className="card-3d-vip p-space-lg">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-space-sm border-b border-outline-variant/30">
                <div className="flex items-center gap-space-xs">
                  <div className="w-3.5 h-3.5 rounded-full bg-primary-container shadow-[0_0_10px_#00f0ff] animate-pulse"></div>
                  <span className="font-label-sm text-label-sm text-primary font-bold font-mono">
                    3D NODE: CS504 ARCHITECTURE
                  </span>
                </div>
                <span className="font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-primary-container/20 text-primary-container border border-primary-container/40 font-bold uppercase font-mono shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                  LIVE 3D FEED
                </span>
              </div>

              {/* Sparkline & Solved Analytics Matrix */}
              <div className="rounded-xl bg-surface-container-lowest/90 overflow-hidden relative flex flex-col justify-between p-space-sm my-space-sm border border-outline-variant/30 shadow-inner">
                <div className="flex justify-between items-center text-on-surface-variant font-label-sm text-label-sm font-mono">
                  <span>MCQ Matrix Dump</span>
                  <span className="text-primary font-bold drop-shadow-[0_0_8px_#00f0ff]">
                    100% Solved & Verified
                  </span>
                </div>

                {/* 3D Dynamic Sparkline Vector */}
                <svg
                  className="w-full h-14 text-primary-container my-1 drop-shadow-[0_0_8px_rgba(0,240,255,0.7)]"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 25"
                >
                  <defs>
                    <linearGradient id="cyberGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00f0ff" />
                      <stop offset="50%" stopColor="#c084fc" />
                      <stop offset="100%" stopColor="#ffd700" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,18 L15,10 L30,22 L45,6 L60,15 L75,3 L90,14 L100,2"
                    fill="none"
                    stroke="url(#cyberGrad)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div className="flex justify-between font-label-sm text-label-sm text-on-surface font-mono">
                  <span className="text-on-surface-variant">Confidence: 99.8%</span>
                  <span className="text-tertiary-container font-bold">64 Papers Synced</span>
                </div>
              </div>

              {/* Card Footer Verification */}
              <div className="flex items-center justify-between pt-space-xs">
                <div className="flex items-center gap-space-xs">
                  <div className="w-8 h-8 rounded-full ring-2 ring-primary-container/80 overflow-hidden shadow-[0_0_12px_rgba(0,240,255,0.5)]">
                    <img
                      className="w-full h-full object-cover"
                      alt="Scholar Avatar"
                      src={ASSETS.profileScholar}
                    />
                  </div>
                  <div>
                    <p className="font-body-sm text-body-sm text-on-surface font-bold">
                      Abdul Majid VIP Protocol
                    </p>
                    <p className="font-label-sm text-label-sm text-tertiary-container font-mono text-[10px]">
                      SUPREME ARCHITECT APPROVED
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-tertiary-container/20 border border-tertiary-container/40 text-tertiary-container shadow-[0_0_12px_rgba(245,158,11,0.3)]">
                  <span className="material-symbols-outlined text-sm font-bold">verified</span>
                  <span className="font-label-sm text-label-sm font-bold font-mono">VIP</span>
                </div>
              </div>
            </div>
          </Card3D>

          {/* 3D Layer 2: Floating Secondary Holographic Card (Offset with Depth) */}
          <div className="absolute -bottom-8 -right-2 sm:right-2 w-72 p-space-md rounded-2xl bg-surface-container-high/90 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.95)] border border-secondary/40 transform rotate-3 hover:rotate-0 transition-all duration-300 z-30 group hover:shadow-[0_0_30px_rgba(192,132,252,0.4)]">
            <div className="flex items-center justify-between mb-space-xs">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-base">auto_stories</span>
                <span className="font-label-sm text-label-sm text-secondary font-bold font-mono">
                  Waqar Sidhu Mega Dump
                </span>
              </div>
              <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#c084fc]"></span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface font-bold group-hover:text-secondary transition-colors">
              MTH301 Calculus III Solved (2025)
            </p>
            <div className="flex items-center justify-between mt-space-xs pt-space-xs border-t border-outline-variant/30">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                2,410 Solved MCQs
              </span>
              <span className="px-2 py-0.5 rounded bg-secondary-container/40 text-secondary font-label-sm text-label-sm font-bold font-mono">
                Updated Today
              </span>
            </div>
          </div>

          {/* 3D Layer 3: Floating VIP Badge Medal Top Left */}
          <div className="absolute -top-6 -left-4 sm:left-0 px-3 py-1.5 rounded-xl bg-surface-container-low/95 backdrop-blur-xl border border-tertiary-container/50 shadow-[0_15px_30px_rgba(0,0,0,0.8),0_0_15px_rgba(245,158,11,0.3)] z-30 flex items-center gap-2 transform -rotate-3 hover:rotate-0 transition-transform">
            <span className="material-symbols-outlined text-tertiary-container text-base animate-pulse">
              military_tech
            </span>
            <span className="font-label-sm text-label-sm text-tertiary-container font-extrabold font-mono uppercase tracking-wider">
              AM-001 EXCLUSIVE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

