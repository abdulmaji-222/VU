import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const SearchMatrixModal: React.FC = () => {
  const { isSearchModalOpen, setIsSearchModalOpen, repositories, showToast, setSearchQuery } =
    useApp();
  const [query, setQuery] = useState('');

  if (!isSearchModalOpen) return null;

  const results = repositories.filter(
    (item) =>
      item.status !== 'hidden' &&
      (item.courseCode.toLowerCase().includes(query.toLowerCase()) ||
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()))
  );

  const handleSelect = (courseCode: string) => {
    setSearchQuery(courseCode);
    setIsSearchModalOpen(false);
    showToast(`Focused Matrix Vault onto ${courseCode}.`, 'search');
    const target = document.getElementById('academicGridSection');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-2xl rounded-3xl bg-surface-container-low p-space-md shadow-2xl border border-primary-container/30 flex flex-col gap-space-sm">
        <div className="flex items-center gap-space-sm px-space-sm py-2 rounded-2xl bg-surface-container-highest border border-outline-variant/30">
          <span className="material-symbols-outlined text-primary text-xl">search</span>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search courses (CS504, MTH101), handouts, past papers, quizzes..."
            className="w-full bg-transparent text-on-surface font-body-md text-body-md outline-none placeholder:text-on-surface-variant/40"
          />
          <button
            onClick={() => setIsSearchModalOpen(false)}
            className="font-label-sm text-label-sm bg-surface-container px-2 py-1 rounded text-on-surface-variant hover:text-on-surface cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Quick Hot Vectors */}
        <div className="flex items-center gap-space-xs px-space-xs">
          <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
            Suggestions:
          </span>
          {['CS504', 'CS601', 'MTH101', 'CS201', 'CS304', 'ENG101'].map((code) => (
            <button
              key={code}
              onClick={() => setQuery(code)}
              className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-highest text-primary hover:bg-primary-container hover:text-on-primary font-mono cursor-pointer transition-colors"
            >
              {code}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto space-y-1 divide-y divide-outline-variant/10">
          {results.length === 0 ? (
            <div className="p-space-lg text-center text-on-surface-variant font-mono text-sm">
              No matching files found in the matrix. Try searching with course code format like
              "CS" or "MTH".
            </div>
          ) : (
            results.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelect(item.courseCode)}
                className="p-space-sm rounded-xl hover:bg-surface-container-highest flex items-center justify-between cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-space-sm">
                  <span className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary font-mono text-xs font-bold">
                    {item.fileType}
                  </span>
                  <div className="flex flex-col">
                    <span className="font-body-md text-body-md text-on-surface font-semibold">
                      {item.title}
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                      {item.description} • {item.size}
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-sm text-primary">arrow_forward</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
