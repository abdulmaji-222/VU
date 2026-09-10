import React from 'react';
import { useApp } from '../context/AppContext';

export const AcademicGrid: React.FC = () => {
  const {
    repositories,
    searchQuery,
    setSearchQuery,
    selectedCategoryFilter,
    setSelectedCategoryFilter,
    showToast,
    openWhatsAppModal,
  } = useApp();

  const handleCategoryClick = (category: string) => {
    setSelectedCategoryFilter(category);
    showToast(`Loaded ${category.toUpperCase()} category from Matrix Vault.`, 'library_books');
  };

  // Filtered list of resources if scholar filtered or searched
  const filteredResources = repositories.filter((item) => {
    if (item.status === 'hidden') return false;
    const matchesCategory =
      selectedCategoryFilter === 'all' || item.section === selectedCategoryFilter;
    const matchesSearch =
      !searchQuery ||
      item.courseCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="w-full px-gutter py-space-xl" id="academicGridSection">
      <div className="max-w-7xl mx-auto space-y-space-lg">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <div className="flex items-center gap-space-xs">
              <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_6px_#00f0ff]"></span>
              <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider font-mono">
                ACADEMIC ARMORY
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold">
              The 6-Core Academic Vector Grid
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Curated and verified modules optimized for Midterm and Finalterm triumph with direct student
            synchronization.
          </p>
        </div>

        {/* Bento-style 6-Card High-Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {/* Grid Item 1: Highlighted Handouts */}
          <div className="p-space-lg rounded-2xl bg-surface-container/70 backdrop-blur-xl hover:bg-surface-container-high transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.5)] border border-outline-variant/30 group flex flex-col justify-between hover:shadow-[0_10px_35px_rgba(0,240,255,0.25)] hover:border-primary-container/40">
            <div className="space-y-space-sm">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary-container shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                  <span className="material-symbols-outlined text-2xl">menu_book</span>
                </div>
                <span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-surface-container-highest text-primary font-bold font-mono">
                  1,400+ HANDOUTS
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
                Highlighted Handouts
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Every critical definition, theorem, formula, and repetitive exam question highlighted
                in neon yellow and cyan tags. Fully searchable and index-matched.
              </p>
            </div>
            <div className="pt-space-md flex items-center justify-between border-t border-outline-variant/20 mt-space-sm">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                PDF • Searchable OCR
              </span>
              <button
                onClick={() => handleCategoryClick('handouts')}
                className="flex items-center gap-space-xs font-label-md text-label-md text-primary font-bold hover:underline"
              >
                <span>EXPLORE DIRECTORY</span>
                <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Grid Item 2: Past Papers Archive */}
          <div className="p-space-lg rounded-2xl bg-surface-container/70 backdrop-blur-xl hover:bg-surface-container-high transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.5)] border border-outline-variant/30 group flex flex-col justify-between hover:shadow-[0_10px_35px_rgba(221,183,255,0.25)] hover:border-secondary/40">
            <div className="space-y-space-sm">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-secondary-container/20 flex items-center justify-center text-secondary shadow-[0_0_15px_rgba(221,183,255,0.3)]">
                  <span className="material-symbols-outlined text-2xl">history_edu</span>
                </div>
                <span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-surface-container-highest text-secondary font-bold font-mono">
                  MOAAZ + WAQAR SIDHU
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-secondary transition-colors">
                Past Papers Archive
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Exhaustive collection of solved midterms and finalterms spanning 2010 to 2024. All
                duplicates eliminated and verified with VU textbook references.
              </p>
            </div>
            <div className="pt-space-md flex items-center justify-between border-t border-outline-variant/20 mt-space-sm">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                Midterm & Finalterm
              </span>
              <button
                onClick={() => handleCategoryClick('pastpapers')}
                className="flex items-center gap-space-xs font-label-md text-label-md text-secondary font-bold hover:underline"
              >
                <span>RETRIEVE ARCHIVE</span>
                <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Grid Item 3: Assignment Solutions & Solved GDBs */}
          <div className="p-space-lg rounded-2xl bg-surface-container/70 backdrop-blur-xl hover:bg-surface-container-high transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.5)] border border-outline-variant/30 group flex flex-col justify-between hover:shadow-[0_10px_35px_rgba(245,158,11,0.25)] hover:border-tertiary-container/40">
            <div className="space-y-space-sm">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-tertiary-container/20 flex items-center justify-center text-tertiary-container shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                  <span className="material-symbols-outlined text-2xl">task_alt</span>
                </div>
                <span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-surface-container-highest text-tertiary-container font-bold font-mono">
                  100% VERIFIED DOCX
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-tertiary-container transition-colors">
                Assignment & Solved GDBs
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Plagiarism-conscious solutions formatted with clean source codes (C++, Java, Python,
                SQL) and editable .DOC files ready for scholar customization.
              </p>
            </div>
            <div className="pt-space-md flex items-center justify-between border-t border-outline-variant/20 mt-space-sm">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                Turnitin Compliant
              </span>
              <button
                onClick={() => handleCategoryClick('assignments')}
                className="flex items-center gap-space-xs font-label-md text-label-md text-tertiary-container font-bold hover:underline"
              >
                <span>GET SOLUTIONS</span>
                <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Grid Item 4: Grand Quizzes & Mega Files */}
          <div className="p-space-lg rounded-2xl bg-surface-container/70 backdrop-blur-xl hover:bg-surface-container-high transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.5)] border border-outline-variant/30 group flex flex-col justify-between hover:shadow-[0_10px_35px_rgba(0,240,255,0.25)] hover:border-primary-container/40">
            <div className="space-y-space-sm">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary-container shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                  <span className="material-symbols-outlined text-2xl">quiz</span>
                </div>
                <span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-surface-container-highest text-primary font-bold font-mono">
                  1000+ SOLVED MCQS
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
                Grand Quizzes & Mega Files
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Aggregated screen-grab verified questions from the latest LMS Quiz rounds.
                Supercharged for speedy recall during timed exams.
              </p>
            </div>
            <div className="pt-space-md flex items-center justify-between border-t border-outline-variant/20 mt-space-sm">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                Instant Search Format
              </span>
              <button
                onClick={() => handleCategoryClick('quizzes')}
                className="flex items-center gap-space-xs font-label-md text-label-md text-primary font-bold hover:underline"
              >
                <span>DUMP QUERY</span>
                <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Grid Item 5: Live Paper Reviews */}
          <div className="p-space-lg rounded-2xl bg-surface-container/70 backdrop-blur-xl hover:bg-surface-container-high transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.5)] border border-outline-variant/30 group flex flex-col justify-between hover:shadow-[0_10px_35px_rgba(221,183,255,0.25)] hover:border-secondary/40">
            <div className="space-y-space-sm">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-secondary-container/20 flex items-center justify-center text-secondary shadow-[0_0_15px_rgba(221,183,255,0.3)]">
                  <span className="material-symbols-outlined text-2xl">feed</span>
                </div>
                <span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-surface-container-highest text-secondary font-bold font-mono">
                  TODAY'S PAPERS
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-secondary transition-colors">
                Live Paper Reviews
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Real-time questions shared right after test center checkout. Know the exact
                subjective questions and subjective case patterns appearing this morning.
              </p>
            </div>
            <div className="pt-space-md flex items-center justify-between border-t border-outline-variant/20 mt-space-sm">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                Real-Time Sync
              </span>
              <a
                href="#liveStreamSection"
                className="flex items-center gap-space-xs font-label-md text-label-md text-secondary font-bold hover:underline"
              >
                <span>VIEW STREAM</span>
                <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Grid Item 6: Special Discussion & VIP Channels */}
          <div className="p-space-lg rounded-2xl bg-surface-container/70 backdrop-blur-xl hover:bg-surface-container-high transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.5)] border border-outline-variant/30 group flex flex-col justify-between hover:shadow-[0_10px_35px_rgba(0,240,255,0.25)] hover:border-primary-container/40">
            <div className="space-y-space-sm">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary-container shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                  <span className="material-symbols-outlined text-2xl">forum</span>
                </div>
                <span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-surface-container-highest text-primary font-bold font-mono">
                  VIP CHANNELS
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
                Subject Squads & VIP
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Direct telemetry into departmental WhatsApp VIP channels: Computer Science, Management
                Sciences, English, and Mathematics clusters.
              </p>
            </div>
            <div className="pt-space-md flex items-center justify-between border-t border-outline-variant/20 mt-space-sm">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                No Spam / Zero Noise
              </span>
              <button
                onClick={() => openWhatsAppModal('All Subject VIP Wings')}
                className="flex items-center gap-space-xs font-label-md text-label-md text-primary font-bold hover:underline"
              >
                <span>JOIN WINGS</span>
                <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Resource Tray (Shows items when user searches or filters) */}
        {(selectedCategoryFilter !== 'all' || searchQuery) && (
          <div className="p-space-lg rounded-2xl bg-surface-container-low/90 backdrop-blur-xl border border-primary-container/30 space-y-space-md animate-fadeIn">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-xl">database</span>
                <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                  Synchronized Academic Files ({filteredResources.length})
                </h4>
                {searchQuery && (
                  <span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-mono">
                    Query: "{searchQuery}"
                  </span>
                )}
              </div>
              <button
                onClick={() => {
                  setSelectedCategoryFilter('all');
                  setSearchQuery('');
                }}
                className="text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm flex items-center gap-1 font-mono"
              >
                <span className="material-symbols-outlined text-xs">close</span> Reset Filter
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm">
              {filteredResources.map((item) => (
                <div
                  key={item.id}
                  className="p-space-sm rounded-xl bg-surface-container-highest/60 hover:bg-surface-container-highest transition-colors flex items-center justify-between gap-space-sm border border-outline-variant/20"
                >
                  <div className="flex items-center gap-space-xs min-w-0">
                    <span className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary font-mono font-bold text-xs shrink-0">
                      {item.fileType}
                    </span>
                    <div className="flex flex-col min-w-0">
                      <span className="font-title-sm text-title-sm text-on-surface truncate font-semibold">
                        {item.title}
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-mono truncate">
                        {item.description}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      showToast(
                        `Decrypting & downloading ${item.courseCode} package (${item.size})...`,
                        'download_done'
                      )
                    }
                    className="px-space-sm py-1 rounded-lg bg-primary-container text-on-primary font-label-sm text-label-sm font-bold shrink-0 hover:shadow-[0_0_12px_rgba(0,240,255,0.5)] transition-all flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-xs">download</span>
                    <span>Download</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
