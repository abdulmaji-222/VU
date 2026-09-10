import React from 'react';
import { useApp } from '../../context/AppContext';

export const AdminStatsGrid: React.FC = () => {
  const { reviews } = useApp();
  const pendingCount = reviews.filter((r) => r.status === 'pending').length;
  const verifiedCount = reviews.filter((r) => r.verified).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
      {/* Metric 1: Cloud Storage */}
      <div className="rounded-xl bg-surface-container-low p-space-md shadow-md flex flex-col justify-between relative overflow-hidden group border border-outline-variant/30">
        <div className="flex items-center justify-between">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-mono">
            Cloud Storage Array
          </span>
          <span className="material-symbols-outlined text-primary text-xl">database</span>
        </div>

        <div className="my-space-sm">
          <div className="flex items-baseline gap-space-xs">
            <span className="font-headline-xl text-headline-xl text-primary font-bold">142.8</span>
            <span className="font-label-md text-label-md text-on-surface-variant font-mono">
              / 250 GB
            </span>
          </div>
          <div className="w-full bg-surface-container-high h-2 rounded-full mt-space-xs overflow-hidden">
            <div
              className="h-full bg-primary-container rounded-full shadow-[0_0_8px_#00f0ff]"
              style={{ width: '57.1%' }}
            ></div>
          </div>
        </div>

        <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm font-mono">
          <span>AWS S3 Frankfurt Fast-Edge</span>
          <span className="text-primary font-bold">57.1%</span>
        </div>
      </div>

      {/* Metric 2: Total File Downloads */}
      <div className="rounded-xl bg-surface-container-low p-space-md shadow-md flex flex-col justify-between relative overflow-hidden group border border-outline-variant/30">
        <div className="flex items-center justify-between">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-mono">
            Global Downloads
          </span>
          <span className="material-symbols-outlined text-secondary text-xl">downloading</span>
        </div>

        <div className="my-space-sm">
          <div className="flex items-baseline gap-space-xs">
            <span className="font-headline-xl text-headline-xl text-secondary font-bold">
              348,920
            </span>
            <span className="font-label-md text-label-md text-secondary font-mono">
              +1.4k today
            </span>
          </div>
          {/* Inline Sparkline Trend */}
          <svg
            className="w-full h-7 mt-space-xs text-secondary"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 200 30"
          >
            <path
              d="M0 24 Q 25 28 50 18 T 100 12 T 150 16 T 200 4"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2.5"
            />
          </svg>
        </div>

        <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm font-mono">
          <span>Bandwidth: 1.24 TB/mo</span>
          <span className="text-secondary font-bold">Peak: 14:00 PKT</span>
        </div>
      </div>

      {/* Metric 3: Active Virtual Scholars */}
      <div className="rounded-xl bg-surface-container-low p-space-md shadow-md flex flex-col justify-between relative overflow-hidden group border border-outline-variant/30">
        <div className="flex items-center justify-between">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-mono">
            Live Online Scholars
          </span>
          <span className="material-symbols-outlined text-primary-fixed-dim text-xl">
            satellite_alt
          </span>
        </div>

        <div className="my-space-sm">
          <div className="flex items-baseline gap-space-xs">
            <span className="font-headline-xl text-headline-xl text-primary font-bold">1,842</span>
            <span className="font-label-md text-label-md text-primary font-mono">Concurrent</span>
          </div>
          <div className="flex items-center gap-space-xs mt-space-xs text-on-surface-variant font-label-sm text-label-sm font-mono">
            <span className="inline-block w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
            <span>Across 42 Campuses & Distant Hubs</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm font-mono">
          <span>Avg dwell time</span>
          <span className="text-primary font-bold">24m 12s</span>
        </div>
      </div>

      {/* Metric 4: Daily Paper Submissions */}
      <div className="rounded-xl bg-surface-container-low p-space-md shadow-md flex flex-col justify-between relative overflow-hidden group border border-outline-variant/30">
        <div className="flex items-center justify-between">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-mono">
            Paper Submissions
          </span>
          <span className="material-symbols-outlined text-tertiary-container text-xl">
            rate_review
          </span>
        </div>

        <div className="my-space-sm">
          <div className="flex items-baseline gap-space-xs">
            <span className="font-headline-xl text-headline-xl text-tertiary font-bold">
              {reviews.length * 15 + 3}
            </span>
            <span className="font-label-md text-label-md text-tertiary font-mono">Midterm 2025</span>
          </div>
          <div className="flex items-center gap-2 mt-space-xs">
            <span className="font-label-sm text-label-sm text-tertiary-container bg-surface-container px-space-xs py-0.5 rounded font-mono font-bold">
              {pendingCount} Pending Review
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
              {verifiedCount} Verified
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm font-mono">
          <span>Auto-Filter Shield</span>
          <span className="text-tertiary font-bold">100% Active</span>
        </div>
      </div>
    </div>
  );
};
