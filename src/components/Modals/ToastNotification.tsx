import React from 'react';
import { useApp } from '../../context/AppContext';

export const ToastNotification: React.FC = () => {
  const { toast } = useApp();

  if (!toast.visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce">
      <div className="flex items-center gap-space-sm px-space-md py-space-sm rounded-2xl bg-surface-container-high/95 backdrop-blur-2xl shadow-[0_10px_35px_rgba(0,0,0,0.8)] border border-primary-container/40 text-on-surface">
        <div className="w-8 h-8 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary-container shadow-[0_0_12px_rgba(0,240,255,0.4)]">
          <span className="material-symbols-outlined text-lg">{toast.icon || 'check_circle'}</span>
        </div>
        <span className="font-body-sm text-body-sm font-medium font-mono max-w-sm">
          {toast.message}
        </span>
      </div>
    </div>
  );
};
