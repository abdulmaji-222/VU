import React from 'react';
import { useApp } from '../context/AppContext';

export const MarqueeAlert: React.FC = () => {
  const { marqueeAlert } = useApp();

  if (!marqueeAlert) return null;

  return (
    <div className="w-full bg-gradient-to-r from-primary-container/20 via-surface-container-high to-secondary-container/20 border-b border-primary-container/20 py-1 px-gutter overflow-hidden flex items-center justify-between z-30">
      <div className="w-full max-w-7xl mx-auto flex items-center gap-space-sm">
        <span className="px-space-xs py-0.5 rounded bg-primary-container text-on-primary-container font-mono font-bold text-[10px] tracking-widest uppercase shrink-0 animate-pulse">
          LIVE TELEMETRY ALERT
        </span>
        <div className="overflow-hidden whitespace-nowrap w-full">
          <p className="font-label-sm text-label-sm text-primary font-mono inline-block">
            {marqueeAlert}
          </p>
        </div>
      </div>
    </div>
  );
};
