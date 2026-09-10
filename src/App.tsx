import React from 'react';
import { AppProvider, useApp } from './context/AppContext';

// Portal Components
import { Navbar } from './components/Navbar';
import { MarqueeAlert } from './components/MarqueeAlert';
import { HeroSection } from './components/HeroSection';
import { FounderShowcase } from './components/FounderShowcase';
import { AcademicGrid } from './components/AcademicGrid';
import { StatsTelemetry } from './components/StatsTelemetry';
import { PaperReviewsTerminal } from './components/PaperReviewsTerminal';
import { WhatsAppChannels } from './components/WhatsAppChannels';
import { Footer } from './components/Footer';

// Admin Components
import { AdminSidebar } from './components/Admin/AdminSidebar';
import { AdminHeader } from './components/Admin/AdminHeader';
import { AdminTelemetryBanner } from './components/Admin/AdminTelemetryBanner';
import { AdminStatsGrid } from './components/Admin/AdminStatsGrid';
import { MasterSiteCustomizer } from './components/Admin/MasterSiteCustomizer';
import { CommunityChannelsHub } from './components/Admin/CommunityChannelsHub';
import { ContentRepositoryManager } from './components/Admin/ContentRepositoryManager';
import { ReviewModerationHub } from './components/Admin/ReviewModerationHub';

// Modals & Feedback
import { InjectResourceModal } from './components/Modals/InjectResourceModal';
import { SearchMatrixModal } from './components/Modals/SearchMatrixModal';
import { WhatsAppVIPModal } from './components/Modals/WhatsAppVIPModal';
import { AdminQuickModal } from './components/Modals/AdminQuickModal';
import { SupportModal } from './components/Modals/SupportModal';
import { ToastNotification } from './components/Modals/ToastNotification';

const AppLayout: React.FC = () => {
  const { activeView, themePreset } = useApp();

  // Map theme preset to subtle CSS tint variables or custom atmospheric classes
  const themeClass =
    themePreset === 'violet'
      ? 'theme-violet'
      : themePreset === 'gold'
      ? 'theme-gold'
      : 'theme-cyan';

  return (
    <div className={`min-h-screen bg-surface text-on-surface flex flex-col ${themeClass}`}>
      {activeView === 'portal' ? (
        <>
          {/* Top Fixed Portal Header */}
          <Navbar />

          <main className="flex-1 pt-20 flex flex-col gap-space-md">
            <MarqueeAlert />
            <HeroSection />
            <FounderShowcase />
            <AcademicGrid />
            <StatsTelemetry />
            <PaperReviewsTerminal />
            <WhatsAppChannels />
          </main>

          <Footer />
        </>
      ) : (
        /* Admin Command Matrix View */
        <div className="flex min-h-screen w-full bg-surface">
          {/* Admin Sidebar */}
          <AdminSidebar />

          {/* Admin Main Operating Area */}
          <div className="flex-1 lg:pl-72 flex flex-col">
            <AdminHeader />

            <main className="flex-1 pt-24 pb-16 px-gutter max-w-[1600px] w-full mx-auto space-y-space-lg">
              <AdminTelemetryBanner />
              <AdminStatsGrid />

              {/* 2-Column Operational Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
                {/* Left Column (5 Cols) */}
                <div className="lg:col-span-5 space-y-space-lg">
                  <MasterSiteCustomizer />
                  <CommunityChannelsHub />
                </div>

                {/* Right Column (7 Cols) */}
                <div className="lg:col-span-7 space-y-space-lg">
                  <ContentRepositoryManager />
                  <ReviewModerationHub />
                </div>
              </div>
            </main>
          </div>
        </div>
      )}

      {/* Global Interactive Modals & Telemetry */}
      <InjectResourceModal />
      <SearchMatrixModal />
      <WhatsAppVIPModal />
      <AdminQuickModal />
      <SupportModal />
      <ToastNotification />
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <AppLayout />
    </AppProvider>
  );
}

export default App;
