import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const PaperReviewsTerminal: React.FC = () => {
  const { reviews, addReview, upvoteReview, setIsAdminQuickModalOpen } = useApp();

  const [courseCode, setCourseCode] = useState('');
  const [examType, setExamType] = useState('Midterm Exam 2025');
  const [difficulty, setDifficulty] = useState<'Easy' | 'Moderate' | 'Hard' | 'Extreme'>('Moderate');
  const [content, setContent] = useState('');
  const [handle, setHandle] = useState('');
  const [isIncognito, setIsIncognito] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!courseCode.trim() || !content.trim()) return;

    addReview({
      courseCode: courseCode.trim().toUpperCase(),
      examType,
      difficulty,
      content: content.trim(),
      author: isIncognito || !handle.trim() ? 'Anonymous Scholar' : handle.trim(),
    });

    setCourseCode('');
    setContent('');
    setHandle('');
  };

  const publishedReviews = reviews.filter((r) => r.status !== 'flagged');

  return (
    <section className="w-full px-gutter py-space-xl" id="liveStreamSection">
      <div className="max-w-7xl mx-auto space-y-space-lg">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <div className="flex items-center gap-space-xs">
              <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#ddb7ff] animate-ping"></span>
              <span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider font-mono">
                COMMUNITY TELEMETRY
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold">
              Live Student Paper Reviews & Terminal
            </h2>
          </div>
          <button
            onClick={() => setIsAdminQuickModalOpen(true)}
            className="px-space-md py-space-xs rounded-xl bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md text-label-md flex items-center gap-space-xs transition-colors shadow-sm self-start md:self-auto border border-outline-variant/30 font-mono"
          >
            <span className="material-symbols-outlined text-sm text-primary">
              admin_panel_settings
            </span>
            <span>Admin Live Editor Preview</span>
          </button>
        </div>

        {/* Split Layout: Form Terminal (Left) & Real-time Live Review Feed (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
          {/* Review Submission Card (5 Cols) */}
          <div className="lg:col-span-5 p-space-lg rounded-3xl bg-surface-container-low/90 backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] border border-outline-variant/30">
            <div className="flex items-center justify-between pb-space-md border-b border-outline-variant/20 mb-space-sm">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary-container text-xl">
                  upload_file
                </span>
                <h3 className="font-title-md text-title-md text-on-surface font-bold">
                  Submit Today's Paper
                </h3>
              </div>
              <span className="font-label-sm text-label-sm text-primary font-semibold font-mono">
                Terminal #04
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-space-md">
              <div className="space-y-space-xs">
                <label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-mono">
                  Course Identifier
                </label>
                <input
                  type="text"
                  required
                  value={courseCode}
                  onChange={(e) => setCourseCode(e.target.value)}
                  placeholder="e.g. CS201, MTH302, ENG101"
                  className="w-full px-space-md py-space-sm rounded-xl bg-surface-container-lowest text-on-surface font-label-md text-label-md placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-1 focus:ring-primary-container font-mono border border-outline-variant/20"
                />
              </div>

              <div className="grid grid-cols-2 gap-space-sm">
                <div className="space-y-space-xs">
                  <label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-mono">
                    Exam Category
                  </label>
                  <select
                    value={examType}
                    onChange={(e) => setExamType(e.target.value)}
                    className="w-full px-space-md py-space-sm rounded-xl bg-surface-container-lowest text-on-surface font-label-md text-label-md focus:outline-none border border-outline-variant/20"
                  >
                    <option value="Midterm Exam 2025">Midterm Exam</option>
                    <option value="Finalterm Exam 2025">Finalterm Exam</option>
                    <option value="Grand Quiz 30 MCQs">Grand Quiz 30 MCQs</option>
                  </select>
                </div>

                <div className="space-y-space-xs">
                  <label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-mono">
                    Exam Difficulty
                  </label>
                  <select
                    value={difficulty}
                    onChange={(e) =>
                      setDifficulty(e.target.value as 'Easy' | 'Moderate' | 'Hard' | 'Extreme')
                    }
                    className="w-full px-space-md py-space-sm rounded-xl bg-surface-container-lowest text-on-surface font-label-md text-label-md focus:outline-none border border-outline-variant/20"
                  >
                    <option value="Moderate">Moderate (Past Papers)</option>
                    <option value="Easy">Easy (Handout direct)</option>
                    <option value="Hard">Hard (Conceptual)</option>
                    <option value="Extreme">Extreme (LMS Mix)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-space-xs">
                <label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-mono">
                  Questions & Topics Recalled
                </label>
                <textarea
                  required
                  rows={4}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Detail the 3-mark & 5-mark subjective topics, repeated MCQs from Moaaz/Waqar files, or specific code snippets..."
                  className="w-full px-space-md py-space-sm rounded-xl bg-surface-container-lowest text-on-surface font-body-sm text-body-sm placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-1 focus:ring-primary-container border border-outline-variant/20 resize-none"
                ></textarea>
              </div>

              <div className="space-y-space-xs">
                <label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-mono">
                  Contributor Identity
                </label>
                <div className="flex items-center gap-space-sm">
                  <input
                    type="text"
                    disabled={isIncognito}
                    value={isIncognito ? 'Incognito Mode' : handle}
                    onChange={(e) => setHandle(e.target.value)}
                    placeholder="Scholar Handle (Leave empty for Anonymous)"
                    className="flex-1 px-space-md py-space-sm rounded-xl bg-surface-container-lowest text-on-surface font-label-md text-label-md placeholder:text-on-surface-variant/40 focus:outline-none border border-outline-variant/20 disabled:opacity-50"
                  />
                  <label className="flex items-center gap-space-xs cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={isIncognito}
                      onChange={(e) => setIsIncognito(e.target.checked)}
                      className="w-4 h-4 rounded bg-surface-container-lowest accent-primary-container"
                    />
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                      Incognito
                    </span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-space-sm rounded-xl bg-primary-container text-on-primary-container font-headline-sm text-headline-sm font-bold shadow-[0_0_20px_rgba(0,240,255,0.5)] hover:shadow-[0_0_30px_rgba(0,240,255,0.8)] transition-all flex items-center justify-center gap-space-xs cursor-pointer active:scale-95"
              >
                <span className="material-symbols-outlined text-lg">bolt</span>
                <span>BROADCAST PAPER REVIEW</span>
              </button>

              <p className="font-label-sm text-label-sm text-center text-on-surface-variant/70 font-mono">
                Reviews undergo instant cryptographic hash verification before live matrix sync.
              </p>
            </form>
          </div>

          {/* Live Stream Feed (7 Cols) */}
          <div className="lg:col-span-7 space-y-space-md">
            <div className="flex items-center justify-between px-space-xs">
              <div className="flex items-center gap-space-xs">
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Real-Time Exam Stream
                </span>
                <span className="px-space-xs py-0.5 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm font-bold animate-pulse font-mono">
                  LIVE FEED
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                Auto-updating Every 15s
              </span>
            </div>

            {/* Reviews Container */}
            <div className="space-y-space-sm max-h-[700px] overflow-y-auto pr-1">
              {publishedReviews.map((rev) => (
                <div
                  key={rev.id}
                  className="p-space-md rounded-2xl bg-surface-container-high/80 backdrop-blur-xl shadow-md transition-all hover:bg-surface-container-highest border border-outline-variant/30"
                >
                  <div className="flex flex-wrap items-center justify-between gap-space-xs mb-space-xs">
                    <div className="flex items-center gap-space-xs">
                      <span className="px-space-xs py-0.5 rounded bg-primary-container text-on-primary-container font-label-md text-label-md font-bold font-mono">
                        {rev.courseCode}
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                        {rev.examType} • {rev.campus}
                      </span>
                    </div>
                    <div className="flex items-center gap-0.5 text-tertiary-container">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className="material-symbols-outlined text-sm"
                          style={{
                            fontVariationSettings: star <= Math.floor(rev.rating) ? "'FILL' 1" : "'FILL' 0",
                          }}
                        >
                          star
                        </span>
                      ))}
                      <span className="font-label-sm text-label-sm ml-1 text-on-surface-variant font-mono">
                        {rev.difficulty}
                      </span>
                    </div>
                  </div>

                  <p className="font-body-md text-body-md text-on-surface mb-space-sm leading-relaxed">
                    "{rev.content}"
                  </p>

                  <div className="flex items-center justify-between pt-space-xs font-label-sm text-label-sm text-on-surface-variant border-t border-outline-variant/20">
                    <div className="flex items-center gap-space-xs font-mono">
                      <span className="material-symbols-outlined text-primary-container text-xs">
                        {rev.author.includes('Anonymous') ? 'fingerprint' : 'verified'}
                      </span>
                      <span className="text-primary font-semibold">{rev.author}</span>
                      <span className="text-on-surface-variant/60">• {rev.timeAgo}</span>
                    </div>

                    <button
                      onClick={() => upvoteReview(rev.id)}
                      className="text-secondary font-medium hover:text-primary transition-colors flex items-center gap-1 cursor-pointer font-mono"
                      title="Endorse this student review"
                    >
                      <span className="material-symbols-outlined text-xs">thumb_up</span>
                      <span>{rev.helpfulCount} Scholars Found Helpful</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
