import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const SupportModal: React.FC = () => {
  const { isSupportModalOpen, setIsSupportModalOpen, showToast } = useApp();
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  if (!isSupportModalOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Telemetry dispatch sent to Abdul Majid & Support Core.', 'send');
    setIsSupportModalOpen(false);
    setSubject('');
    setMessage('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-surface-container-low p-space-lg shadow-2xl border border-primary-container/40 flex flex-col gap-space-md">
        <div className="flex items-center justify-between pb-space-xs border-b border-outline-variant/20">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-primary text-2xl">headset_mic</span>
            <h3 className="font-title-md text-title-md text-on-surface font-bold">
              VIP Scholar Support & Inquiries
            </h3>
          </div>
          <button
            onClick={() => setIsSupportModalOpen(false)}
            className="p-1 text-on-surface-variant hover:text-on-surface cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Direct communication line with Abdul Majid's engineering and student support core.
          Response time average: &lt; 15 minutes during midterm and finalterm weeks.
        </p>

        <form onSubmit={handleSend} className="space-y-space-sm">
          <div className="space-y-1">
            <label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-mono">
              Inquiry / Request Subject
            </label>
            <input
              type="text"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="e.g. Missing Past Paper for CS601 or Assignment Help"
              className="w-full px-space-sm py-2 rounded-xl bg-surface-container-highest text-on-surface outline-none border border-outline-variant/30 focus:border-primary font-mono"
            />
          </div>

          <div className="space-y-1">
            <label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-mono">
              Details & Course Code
            </label>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Explain what resource, solution, or guidance you require..."
              className="w-full px-space-sm py-2 rounded-xl bg-surface-container-highest text-on-surface outline-none border border-outline-variant/30 focus:border-primary resize-none text-sm"
            ></textarea>
          </div>

          <div className="flex items-center justify-end gap-space-sm pt-space-xs border-t border-outline-variant/20">
            <button
              type="button"
              onClick={() => setIsSupportModalOpen(false)}
              className="px-space-md py-2 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-bright cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-space-lg py-2 rounded-xl bg-primary-container text-on-primary-container font-headline-sm text-headline-sm font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(0,240,255,0.7)] transition-all cursor-pointer flex items-center gap-1"
            >
              <span>Dispatch Ticket</span>
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
