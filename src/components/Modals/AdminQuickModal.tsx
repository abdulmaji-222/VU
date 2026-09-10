import React from 'react';
import { useApp } from '../../context/AppContext';

export const AdminQuickModal: React.FC = () => {
  const {
    isAdminQuickModalOpen,
    setIsAdminQuickModalOpen,
    portalName,
    setPortalName,
    marqueeAlert,
    setMarqueeAlert,
    setActiveView,
    approveAllPendingReviews,
    showToast,
  } = useApp();

  if (!isAdminQuickModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl rounded-3xl bg-surface-container-low p-space-lg shadow-2xl border border-primary-container/40 flex flex-col gap-space-md">
        <div className="flex items-center justify-between pb-space-xs border-b border-outline-variant/20">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-primary text-2xl">
              admin_panel_settings
            </span>
            <h3 className="font-title-md text-title-md text-on-surface font-bold">
              Admin Quick Command Hub
            </h3>
          </div>
          <button
            onClick={() => setIsAdminQuickModalOpen(false)}
            className="p-1 text-on-surface-variant hover:text-on-surface cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        <div className="space-y-space-sm">
          <div className="space-y-1">
            <label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-mono">
              Live Portal Title
            </label>
            <input
              type="text"
              value={portalName}
              onChange={(e) => setPortalName(e.target.value)}
              className="w-full px-space-sm py-2 rounded-xl bg-surface-container-highest text-primary font-bold font-mono outline-none border border-outline-variant/30"
            />
          </div>

          <div className="space-y-1">
            <label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-mono">
              Live Alert Ticker (Marquee Banner)
            </label>
            <textarea
              rows={2}
              value={marqueeAlert}
              onChange={(e) => setMarqueeAlert(e.target.value)}
              className="w-full px-space-sm py-2 rounded-xl bg-surface-container-highest text-on-surface font-mono outline-none border border-outline-variant/30 text-sm resize-none"
            />
          </div>

          <div className="pt-space-xs flex flex-col sm:flex-row items-center gap-space-sm">
            <button
              onClick={() => {
                approveAllPendingReviews();
                showToast('All pending student submissions approved.', 'done_all');
              }}
              className="w-full sm:w-1/2 py-2 rounded-xl bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md text-label-md transition-all cursor-pointer font-bold border border-outline-variant/30 font-mono"
            >
              Approve All Pending Reviews
            </button>

            <button
              onClick={() => {
                setIsAdminQuickModalOpen(false);
                setActiveView('admin');
              }}
              className="w-full sm:w-1/2 py-2 rounded-xl bg-primary-container text-on-primary-container font-label-md text-label-md font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:brightness-110 transition-all cursor-pointer font-mono flex items-center justify-center gap-1"
            >
              <span>Full Admin Command Center</span>
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </button>
          </div>
        </div>

        <div className="flex justify-end pt-space-xs border-t border-outline-variant/20">
          <button
            onClick={() => setIsAdminQuickModalOpen(false)}
            className="px-space-lg py-1.5 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-bright cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
