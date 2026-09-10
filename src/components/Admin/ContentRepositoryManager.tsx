import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const ContentRepositoryManager: React.FC = () => {
  const {
    repositories,
    toggleRepositoryStatus,
    deleteRepository,
    setIsInjectModalOpen,
    showToast,
  } = useApp();

  const [activeFilter, setActiveFilter] = useState('all');
  const [adminSearch, setAdminSearch] = useState('');

  const filterTabs = [
    { id: 'all', label: 'All', count: repositories.length },
    {
      id: 'handouts',
      label: 'Handouts',
      count: repositories.filter((r) => r.section === 'handouts').length,
    },
    {
      id: 'pastpapers',
      label: 'Past Papers',
      count: repositories.filter((r) => r.section === 'pastpapers').length,
    },
    {
      id: 'assignments',
      label: 'Assignments',
      count: repositories.filter((r) => r.section === 'assignments').length,
    },
    {
      id: 'gdbs',
      label: 'GDB Solutions',
      count: repositories.filter((r) => r.section === 'gdbs').length,
    },
    {
      id: 'quizzes',
      label: 'Mega Quizzes',
      count: repositories.filter((r) => r.section === 'quizzes').length,
    },
  ];

  const filteredItems = repositories.filter((item) => {
    const matchesFilter = activeFilter === 'all' || item.section === activeFilter;
    const matchesSearch =
      !adminSearch ||
      item.courseCode.toLowerCase().includes(adminSearch.toLowerCase()) ||
      item.title.toLowerCase().includes(adminSearch.toLowerCase()) ||
      item.description.toLowerCase().includes(adminSearch.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="rounded-2xl bg-surface-container-low p-space-lg shadow-md flex flex-col gap-space-md border border-outline-variant/30">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-xs border-b border-outline-variant/20">
        <div>
          <h2 className="font-title-md text-title-md text-on-surface font-bold">
            Content Repository Master Registry
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant font-mono">
            {repositories.length} Verified Academic Vectors Loaded
          </p>
        </div>

        <div className="flex items-center gap-space-xs">
          <div className="flex items-center rounded-lg bg-surface-container-highest px-space-sm py-1 border border-outline-variant/30">
            <span className="material-symbols-outlined text-on-surface-variant mr-1 text-sm">
              search
            </span>
            <input
              type="text"
              value={adminSearch}
              onChange={(e) => setAdminSearch(e.target.value)}
              placeholder="Filter CS, MTH, ENG..."
              className="bg-transparent text-on-surface font-label-sm text-label-sm outline-none w-32 md:w-44 font-mono"
            />
          </div>

          <button
            onClick={() => setIsInjectModalOpen(true)}
            className="flex items-center gap-1 px-space-sm py-1 rounded-lg bg-primary-container text-on-primary font-label-sm text-label-sm font-bold shadow-[0_0_12px_rgba(0,240,255,0.4)] hover:brightness-110 transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">add</span>
            <span>Upload</span>
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-space-xs overflow-x-auto pb-1 scrollbar-none">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id)}
            className={`px-space-sm py-1 rounded-lg font-label-sm text-label-sm whitespace-nowrap transition-all font-mono cursor-pointer ${
              activeFilter === tab.id
                ? 'bg-primary-container text-on-primary font-bold shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                : 'bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
            }`}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

      {/* Repository Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left font-label-sm text-label-sm">
          <thead>
            <tr className="text-on-surface-variant border-b border-outline-variant/20 uppercase font-mono">
              <th className="pb-space-xs">Course & File Title</th>
              <th className="pb-space-xs">Section</th>
              <th className="pb-space-xs">Downloads</th>
              <th className="pb-space-xs">Status</th>
              <th className="pb-space-xs text-right">Controls</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/10">
            {filteredItems.map((item) => (
              <tr key={item.id} className="hover:bg-surface-container-highest/40 transition-colors">
                <td className="py-space-sm">
                  <div className="flex items-center gap-space-xs">
                    <span className="px-space-xs py-0.5 rounded bg-surface-container-highest font-mono text-primary font-bold text-xs">
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
                </td>
                <td className="py-space-sm font-mono text-on-surface-variant uppercase text-xs">
                  {item.section}
                </td>
                <td className="py-space-sm font-mono text-on-surface">
                  {item.downloads.toLocaleString()}
                </td>
                <td className="py-space-sm">
                  <span
                    className={`inline-flex items-center gap-1 px-space-xs py-0.5 rounded font-mono text-xs font-bold ${
                      item.status === 'live'
                        ? 'bg-primary-container/20 text-primary'
                        : 'bg-surface-container text-on-surface-variant'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        item.status === 'live' ? 'bg-primary-container' : 'bg-outline'
                      }`}
                    ></span>
                    {item.status === 'live' ? 'Live' : 'Hidden'}
                  </span>
                </td>
                <td className="py-space-sm text-right">
                  <div className="flex items-center justify-end gap-1">
                    <button
                      onClick={() => toggleRepositoryStatus(item.id)}
                      className="p-1 rounded text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                      title={item.status === 'live' ? 'Hide Resource' : 'Make Resource Live'}
                    >
                      <span className="material-symbols-outlined text-base">
                        {item.status === 'live' ? 'visibility' : 'visibility_off'}
                      </span>
                    </button>
                    <button
                      onClick={() =>
                        showToast(`Quick editing metadata for ${item.courseCode}`, 'edit')
                      }
                      className="p-1 rounded text-on-surface-variant hover:text-secondary transition-colors cursor-pointer"
                      title="Quick Edit Metadata"
                    >
                      <span className="material-symbols-outlined text-base">edit_note</span>
                    </button>
                    <button
                      onClick={() => deleteRepository(item.id)}
                      className="p-1 rounded text-on-surface-variant hover:text-error transition-colors cursor-pointer"
                      title="Revoke and Purge from Array"
                    >
                      <span className="material-symbols-outlined text-base">delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination & Summary */}
      <div className="flex items-center justify-between pt-space-xs border-t border-outline-variant/20 text-on-surface-variant font-label-sm text-label-sm font-mono">
        <span>
          Showing {filteredItems.length} of {repositories.length} Indexed Modules
        </span>
        <div className="flex items-center gap-1">
          <button className="px-space-xs py-1 rounded bg-surface-container text-on-surface-variant hover:text-on-surface cursor-pointer">
            Prev
          </button>
          <span className="px-space-xs text-primary font-bold">1</span>
          <button className="px-space-xs py-1 rounded bg-surface-container text-on-surface-variant hover:text-on-surface cursor-pointer">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
