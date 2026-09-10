import React from 'react';

export const StatsTelemetry: React.FC = () => {
  return (
    <section className="w-full px-gutter py-space-lg">
      <div className="max-w-7xl mx-auto rounded-3xl bg-surface-container-lowest/90 backdrop-blur-2xl p-space-lg shadow-[0_10px_40px_rgba(0,0,0,0.6)] border border-outline-variant/30">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-md divide-y lg:divide-y-0 lg:divide-x divide-outline-variant/20">
          <div className="flex flex-col items-center text-center p-space-sm">
            <span className="font-display-hero text-display-hero text-primary font-bold drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">
              25,000+
            </span>
            <span className="font-label-lg text-label-lg text-on-surface font-semibold font-mono">
              Active VU Scholars
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Synchronized Nationwide
            </span>
          </div>

          <div className="flex flex-col items-center text-center p-space-sm">
            <span className="font-display-hero text-display-hero text-secondary font-bold drop-shadow-[0_0_15px_rgba(221,183,255,0.4)]">
              1,400+
            </span>
            <span className="font-label-lg text-label-lg text-on-surface font-semibold font-mono">
              Highlighted Handouts
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Verified by Senior Faculty
            </span>
          </div>

          <div className="flex flex-col items-center text-center p-space-sm">
            <span className="font-display-hero text-display-hero text-tertiary-container font-bold drop-shadow-[0_0_15px_rgba(245,158,11,0.4)]">
              99.4%
            </span>
            <span className="font-label-lg text-label-lg text-on-surface font-semibold font-mono">
              Grand Quiz Accuracy
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Documented Hit-Rate
            </span>
          </div>

          <div className="flex flex-col items-center text-center p-space-sm">
            <span className="font-display-hero text-display-hero text-primary font-bold drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">
              24/7
            </span>
            <span className="font-label-lg text-label-lg text-on-surface font-semibold font-mono">
              Telemetry Uptime
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Engineered by Abdul Majid
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
