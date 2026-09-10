import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const CommunityChannelsHub: React.FC = () => {
  const { marqueeAlert, setMarqueeAlert, showToast } = useApp();
  const [waBroadcast, setWaBroadcast] = useState(
    'https://whatsapp.com/channel/0029VaAbdulMajidVUCrew'
  );
  const [waStudyGroup, setWaStudyGroup] = useState(
    'https://chat.whatsapp.com/invite/VUCrewDiscussionAlpha'
  );
  const [telegramCloud, setTelegramCloud] = useState('https://t.me/vu_insight_master_vault');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Community node coordinates and marquee headline synchronized!', 'podcasts');
  };

  return (
    <div className="rounded-2xl bg-surface-container-low p-space-lg shadow-md flex flex-col gap-space-md border border-outline-variant/30">
      <div className="flex items-center justify-between pb-space-xs border-b border-outline-variant/20">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-secondary text-xl">hub</span>
          <h2 className="font-title-md text-title-md text-on-surface font-bold">
            VIP Community & Direct Routing Nodes
          </h2>
        </div>
        <span className="font-label-sm text-label-sm text-secondary bg-surface-container-highest px-space-xs py-0.5 rounded font-mono font-bold">
          High Bandwidth
        </span>
      </div>

      <form onSubmit={handleSave} className="flex flex-col gap-space-md">
        {/* WhatsApp VIP Channel URL */}
        <div className="flex flex-col gap-space-xs">
          <div className="flex justify-between items-center">
            <label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-mono">
              Official WhatsApp VIP Broadcast Channel
            </label>
            <span className="font-label-sm text-label-sm text-primary font-mono">
              18.4K Members
            </span>
          </div>
          <div className="flex items-center rounded-xl bg-surface-container-highest px-space-sm py-space-xs shadow-inner border border-outline-variant/30">
            <span className="material-symbols-outlined text-on-surface-variant mr-space-xs text-base">
              cell_tower
            </span>
            <input
              type="url"
              value={waBroadcast}
              onChange={(e) => setWaBroadcast(e.target.value)}
              className="bg-transparent text-on-surface font-body-sm text-body-sm w-full outline-none font-mono"
            />
          </div>
        </div>

        {/* WhatsApp Main Study Group */}
        <div className="flex flex-col gap-space-xs">
          <div className="flex justify-between items-center">
            <label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-mono">
              Main Study Discussion Group #1
            </label>
            <span className="font-label-sm text-label-sm text-secondary font-mono font-semibold">
              Active (1,024 / 1,024 FULL)
            </span>
          </div>
          <div className="flex items-center rounded-xl bg-surface-container-highest px-space-sm py-space-xs shadow-inner border border-outline-variant/30">
            <span className="material-symbols-outlined text-on-surface-variant mr-space-xs text-base">
              groups
            </span>
            <input
              type="url"
              value={waStudyGroup}
              onChange={(e) => setWaStudyGroup(e.target.value)}
              className="bg-transparent text-on-surface font-body-sm text-body-sm w-full outline-none font-mono"
            />
          </div>
        </div>

        {/* Telegram Direct Mirror */}
        <div className="flex flex-col gap-space-xs">
          <label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-mono">
            Telegram Uncensored Handouts Cloud
          </label>
          <div className="flex items-center rounded-xl bg-surface-container-highest px-space-sm py-space-xs shadow-inner border border-outline-variant/30">
            <span className="material-symbols-outlined text-on-surface-variant mr-space-xs text-base">
              send
            </span>
            <input
              type="url"
              value={telegramCloud}
              onChange={(e) => setTelegramCloud(e.target.value)}
              className="bg-transparent text-on-surface font-body-sm text-body-sm w-full outline-none font-mono"
            />
          </div>
        </div>

        {/* Broadcast Marquee Ticker */}
        <div className="flex flex-col gap-space-xs">
          <label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-mono">
            Live Ticker Headline (Banner Marquee)
          </label>
          <textarea
            rows={2}
            value={marqueeAlert}
            onChange={(e) => setMarqueeAlert(e.target.value)}
            placeholder="Announce midterm papers or assignment solution releases..."
            className="w-full rounded-xl bg-surface-container-highest p-space-sm font-body-sm text-body-sm text-primary outline-none resize-none border border-outline-variant/30 font-mono"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-space-sm rounded-xl bg-secondary text-on-secondary font-headline-sm text-headline-sm font-bold shadow-[0_0_15px_rgba(221,183,255,0.4)] hover:shadow-[0_0_25px_rgba(221,183,255,0.7)] transition-all flex items-center justify-center gap-space-xs cursor-pointer active:scale-95"
        >
          <span className="material-symbols-outlined text-base">save</span>
          <span>Update Community Node Coordinates</span>
        </button>
      </form>
    </div>
  );
};
