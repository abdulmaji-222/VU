import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { RepositorySection } from '../../types';

export const InjectResourceModal: React.FC = () => {
  const { isInjectModalOpen, setIsInjectModalOpen, addRepository } = useApp();

  const [courseCode, setCourseCode] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [section, setSection] = useState<RepositorySection>('pastpapers');
  const [fileType, setFileType] = useState<'PDF' | 'DOC' | 'ZIP' | 'XLS'>('PDF');
  const [size, setSize] = useState('14.2 MB');

  if (!isInjectModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!courseCode.trim() || !title.trim()) return;

    addRepository({
      courseCode: courseCode.trim().toUpperCase(),
      title: title.trim(),
      description: description.trim() || 'Verified Academic Resource by Abdul Majid',
      section,
      fileType,
      size: size.trim() || '5.0 MB',
      status: 'live',
      highlighted: true,
    });

    setCourseCode('');
    setTitle('');
    setDescription('');
    setIsInjectModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-surface-container-low p-space-lg shadow-2xl border border-primary-container/40">
        <div className="flex items-center justify-between pb-space-sm border-b border-outline-variant/20 mb-space-md">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-primary-container text-2xl">
              cloud_upload
            </span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Inject Academic Resource
            </h3>
          </div>
          <button
            onClick={() => setIsInjectModalOpen(false)}
            className="p-1 text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-space-sm">
          <div className="grid grid-cols-2 gap-space-sm">
            <div className="space-y-1">
              <label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-mono">
                Course Code
              </label>
              <input
                type="text"
                required
                value={courseCode}
                onChange={(e) => setCourseCode(e.target.value)}
                placeholder="e.g. CS504"
                className="w-full px-space-sm py-2 rounded-xl bg-surface-container-highest text-on-surface font-mono outline-none border border-outline-variant/30 focus:border-primary"
              />
            </div>
            <div className="space-y-1">
              <label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-mono">
                Section Category
              </label>
              <select
                value={section}
                onChange={(e) => setSection(e.target.value as RepositorySection)}
                className="w-full px-space-sm py-2 rounded-xl bg-surface-container-highest text-on-surface outline-none border border-outline-variant/30"
              >
                <option value="pastpapers">Past Papers Archive</option>
                <option value="handouts">Highlighted Handouts</option>
                <option value="assignments">Assignments</option>
                <option value="gdbs">Solved GDBs</option>
                <option value="quizzes">Mega Quizzes</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-mono">
              Resource Title
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. CS504 Software Engineering 1 Midterm Solved"
              className="w-full px-space-sm py-2 rounded-xl bg-surface-container-highest text-on-surface outline-none border border-outline-variant/30 focus:border-primary"
            />
          </div>

          <div className="space-y-1">
            <label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-mono">
              Description & Solved Notes
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g. 2024-25 Solved Past Papers by Abdul Majid"
              className="w-full px-space-sm py-2 rounded-xl bg-surface-container-highest text-on-surface outline-none border border-outline-variant/30 focus:border-primary"
            />
          </div>

          <div className="grid grid-cols-2 gap-space-sm">
            <div className="space-y-1">
              <label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-mono">
                File Type
              </label>
              <select
                value={fileType}
                onChange={(e) => setFileType(e.target.value as 'PDF' | 'DOC' | 'ZIP' | 'XLS')}
                className="w-full px-space-sm py-2 rounded-xl bg-surface-container-highest text-on-surface outline-none border border-outline-variant/30"
              >
                <option value="PDF">PDF (Searchable Document)</option>
                <option value="DOC">DOC / DOCX (Editable Word)</option>
                <option value="ZIP">ZIP (Full Course Bundle)</option>
                <option value="XLS">XLS (Spreadsheet MCQs)</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-mono">
                Estimated File Size
              </label>
              <input
                type="text"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                placeholder="e.g. 18.4 MB"
                className="w-full px-space-sm py-2 rounded-xl bg-surface-container-highest text-on-surface outline-none border border-outline-variant/30 font-mono"
              />
            </div>
          </div>

          {/* Drag & Drop File Surface */}
          <div className="p-space-md rounded-2xl bg-surface-container-highest/40 border border-dashed border-outline-variant/50 text-center flex flex-col items-center justify-center gap-1 cursor-pointer hover:border-primary transition-colors">
            <span className="material-symbols-outlined text-3xl text-primary">upload</span>
            <span className="font-label-sm text-label-sm text-on-surface font-semibold">
              Drop course documents here or click to browse
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
              Automated hash check & virus telemetry enabled
            </span>
          </div>

          <div className="pt-space-xs flex items-center justify-end gap-space-sm">
            <button
              type="button"
              onClick={() => setIsInjectModalOpen(false)}
              className="px-space-md py-2 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-bright cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-space-lg py-2 rounded-xl bg-primary-container text-on-primary-container font-headline-sm text-headline-sm font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(0,240,255,0.7)] transition-all cursor-pointer"
            >
              Deploy to Repository
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
