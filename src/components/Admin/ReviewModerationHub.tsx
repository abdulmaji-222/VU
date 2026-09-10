import React from 'react';
import { useApp } from '../../context/AppContext';

export const ReviewModerationHub: React.FC = () => {
  const { reviews, verifyReview, flagReview, approveAllPendingReviews, showToast } = useApp();

  return (
    <div className="rounded-2xl bg-surface-container-low p-space-lg shadow-md flex flex-col gap-space-md border border-outline-variant/30">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs pb-space-xs border-b border-outline-variant/20">
        <div>
          <h2 className="font-title-md text-title-md text-on-surface font-bold">
            Live Student Paper Submissions
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant font-mono">
            Review & Verification Buffer
          </p>
        </div>

        <div className="flex items-center gap-space-xs">
          <span className="px-space-xs py-0.5 rounded bg-tertiary-container/30 text-tertiary-container font-label-sm text-label-sm font-bold font-mono">
            {reviews.filter((r) => r.status === 'pending').length} Live Unprocessed
          </span>
          <button
            onClick={approveAllPendingReviews}
            className="px-space-sm py-1 rounded-lg bg-surface-container-high text-primary font-label-sm text-label-sm hover:bg-surface-bright transition-all cursor-pointer font-bold border border-outline-variant/30"
          >
            Approve Clean Batch
          </button>
        </div>
      </div>

      {/* Pending Reviews Cards */}
      <div className="flex flex-col gap-space-sm">
        {reviews.slice(0, 4).map((rev) => {
          const initials = rev.author
            .split(' ')
            .map((n) => n[0])
            .join('')
            .slice(0, 2)
            .toUpperCase() || 'ST';

          return (
            <div
              key={rev.id}
              className="p-space-md rounded-xl bg-surface-container-highest/60 flex flex-col gap-space-xs border border-outline-variant/20"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-space-sm">
                  <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container font-mono font-bold text-xs flex items-center justify-center">
                    {initials}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-space-xs">
                      <span className="font-body-md text-body-md text-on-surface font-bold">
                        {rev.author}
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                        ({rev.courseCode})
                      </span>
                      {rev.verified && (
                        <span className="material-symbols-outlined text-primary-container text-sm">
                          verified
                        </span>
                      )}
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                      {rev.examType} • {rev.campus} • {rev.timeAgo}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <span className="px-space-xs py-0.5 rounded bg-surface-container text-primary font-mono text-xs font-bold">
                    Diff: {rev.difficulty}
                  </span>
                </div>
              </div>

              <p className="font-body-sm text-body-sm text-on-surface/90 italic pl-11">
                "{rev.content}"
              </p>

              <div className="flex items-center justify-between pl-11 pt-space-xs border-t border-outline-variant/10">
                <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant font-mono">
                  <span>Rating: {rev.rating}★</span>
                  <span>•</span>
                  <span>Status: {rev.status}</span>
                </div>

                <div className="flex items-center gap-space-xs">
                  <button
                    onClick={() => verifyReview(rev.id)}
                    className="px-space-sm py-0.5 rounded bg-primary-container text-on-primary-container font-label-sm text-label-sm font-bold hover:brightness-110 transition-all cursor-pointer font-mono"
                  >
                    Verify & Feature
                  </button>
                  <button
                    onClick={() =>
                      showToast(`Quick reply dispatched to scholar ${rev.author}.`, 'reply')
                    }
                    className="px-space-sm py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-bright transition-all cursor-pointer font-mono"
                  >
                    Quick Reply
                  </button>
                  <button
                    onClick={() => flagReview(rev.id)}
                    className="p-1 rounded text-on-surface-variant hover:text-error transition-colors cursor-pointer"
                    title="Flag Content"
                  >
                    <span className="material-symbols-outlined text-sm">flag</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center pt-space-xs border-t border-outline-variant/20">
        <button
          onClick={() => showToast('Displaying complete 78 paper transcripts.', 'article')}
          className="font-label-sm text-label-sm text-secondary hover:underline font-mono cursor-pointer"
        >
          View all 78 Paper Transcripts from Current Testing Window →
        </button>
      </div>
    </div>
  );
};
