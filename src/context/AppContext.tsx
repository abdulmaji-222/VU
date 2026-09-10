import React, { createContext, useContext, useState } from 'react';
import { ActiveView, ThemePreset, RepositoryItem, PaperReview } from '../types';
import { INITIAL_REPOSITORIES, INITIAL_REVIEWS, ASSETS } from '../mockData';

interface ToastState {
  message: string;
  icon: string;
  visible: boolean;
}

interface AppContextType {
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
  portalName: string;
  setPortalName: (name: string) => void;
  architectTagline: string;
  setArchitectTagline: (tagline: string) => void;
  themePreset: ThemePreset;
  setThemePreset: (theme: ThemePreset) => void;
  marqueeAlert: string;
  setMarqueeAlert: (alert: string) => void;
  activeLogo: string;
  setActiveLogo: (url: string) => void;
  repositories: RepositoryItem[];
  addRepository: (item: Omit<RepositoryItem, 'id' | 'downloads' | 'uploadedAt'>) => void;
  toggleRepositoryStatus: (id: string) => void;
  deleteRepository: (id: string) => void;
  reviews: PaperReview[];
  addReview: (reviewData: {
    courseCode: string;
    examType: string;
    difficulty: 'Easy' | 'Moderate' | 'Hard' | 'Extreme';
    content: string;
    author: string;
  }) => void;
  upvoteReview: (id: string) => void;
  verifyReview: (id: string) => void;
  flagReview: (id: string) => void;
  approveAllPendingReviews: () => void;
  
  // Modals
  isInjectModalOpen: boolean;
  setIsInjectModalOpen: (open: boolean) => void;
  isAdminQuickModalOpen: boolean;
  setIsAdminQuickModalOpen: (open: boolean) => void;
  isSearchModalOpen: boolean;
  setIsSearchModalOpen: (open: boolean) => void;
  isSupportModalOpen: boolean;
  setIsSupportModalOpen: (open: boolean) => void;
  isWhatsAppModalOpen: boolean;
  setIsWhatsAppModalOpen: (open: boolean) => void;
  selectedWhatsAppGroup: string;
  openWhatsAppModal: (groupTitle: string) => void;
  
  // Quick course search target
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategoryFilter: string;
  setSelectedCategoryFilter: (cat: string) => void;

  // Toast
  toast: ToastState;
  showToast: (message: string, icon?: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeView, setActiveView] = useState<ActiveView>('portal');
  const [portalName, setPortalName] = useState<string>('VU INSIGHT CREW');
  const [architectTagline, setArchitectTagline] = useState<string>(
    'Engineered by Abdul Majid • VU Insight Master Directive'
  );
  const [themePreset, setThemePreset] = useState<ThemePreset>('cyan');
  const [marqueeAlert, setMarqueeAlert] = useState<string>(
    '🚨 MIDTERM PAST PAPERS 2025 UPDATED: CS504, CS601, and MTH101 verified papers now downloadable without wait queue!'
  );
  const [activeLogo, setActiveLogo] = useState<string>(ASSETS.emblem);

  const [repositories, setRepositories] = useState<RepositoryItem[]>(INITIAL_REPOSITORIES);
  const [reviews, setReviews] = useState<PaperReview[]>(INITIAL_REVIEWS);

  // Modals
  const [isInjectModalOpen, setIsInjectModalOpen] = useState(false);
  const [isAdminQuickModalOpen, setIsAdminQuickModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [selectedWhatsAppGroup, setSelectedWhatsAppGroup] = useState('VU INSIGHT Elite Broadcast');

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('all');

  // Toast
  const [toast, setToast] = useState<ToastState>({
    message: '',
    icon: 'check_circle',
    visible: false,
  });

  const showToast = (message: string, icon: string = 'check_circle') => {
    setToast({ message, icon, visible: true });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 4000);
  };

  const addRepository = (item: Omit<RepositoryItem, 'id' | 'downloads' | 'uploadedAt'>) => {
    const newItem: RepositoryItem = {
      ...item,
      id: `res-${Date.now()}`,
      downloads: 0,
      uploadedAt: 'Just now',
    };
    setRepositories((prev) => [newItem, ...prev]);
    showToast(`Resource "${item.courseCode}" deployed live to repository!`, 'cloud_done');
  };

  const toggleRepositoryStatus = (id: string) => {
    setRepositories((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: item.status === 'live' ? 'hidden' : 'live' }
          : item
      )
    );
    showToast('Repository item status updated.', 'visibility');
  };

  const deleteRepository = (id: string) => {
    setRepositories((prev) => prev.filter((item) => item.id !== id));
    showToast('Resource removed from repository.', 'delete');
  };

  const addReview = (data: {
    courseCode: string;
    examType: string;
    difficulty: 'Easy' | 'Moderate' | 'Hard' | 'Extreme';
    content: string;
    author: string;
  }) => {
    const newRev: PaperReview = {
      id: `rev-${Date.now()}`,
      courseCode: data.courseCode.toUpperCase(),
      examType: data.examType,
      campus: 'Live Synchronized Terminal',
      difficulty: data.difficulty,
      rating: data.difficulty === 'Easy' ? 4.0 : data.difficulty === 'Hard' ? 4.8 : 4.5,
      content: data.content,
      author: data.author.trim() || 'Anonymous Scholar',
      timeAgo: 'Just now',
      timestamp: Date.now(),
      helpfulCount: 1,
      verified: true,
      featured: true,
      status: 'published',
    };
    setReviews((prev) => [newRev, ...prev]);
    showToast(`Paper review for ${newRev.courseCode} broadcasted live to matrix!`, 'bolt');
  };

  const upvoteReview = (id: string) => {
    setReviews((prev) =>
      prev.map((rev) =>
        rev.id === id ? { ...rev, helpfulCount: rev.helpfulCount + 1 } : rev
      )
    );
    showToast('Telemetry endorsement registered (+1 Scholar Found Helpful).', 'thumb_up');
  };

  const verifyReview = (id: string) => {
    setReviews((prev) =>
      prev.map((rev) =>
        rev.id === id
          ? { ...rev, verified: true, featured: true, status: 'published' }
          : rev
      )
    );
    showToast('Review verified and featured by Abdul Majid.', 'verified');
  };

  const flagReview = (id: string) => {
    setReviews((prev) =>
      prev.map((rev) =>
        rev.id === id ? { ...rev, status: 'flagged' } : rev
      )
    );
    showToast('Review flagged for content compliance.', 'flag');
  };

  const approveAllPendingReviews = () => {
    setReviews((prev) =>
      prev.map((rev) => ({
        ...rev,
        verified: true,
        status: 'published',
      }))
    );
    showToast('All pending student paper reviews approved and synchronized.', 'done_all');
  };

  const openWhatsAppModal = (groupTitle: string) => {
    setSelectedWhatsAppGroup(groupTitle);
    setIsWhatsAppModalOpen(true);
  };

  return (
    <AppContext.Provider
      value={{
        activeView,
        setActiveView,
        portalName,
        setPortalName,
        architectTagline,
        setArchitectTagline,
        themePreset,
        setThemePreset,
        marqueeAlert,
        setMarqueeAlert,
        activeLogo,
        setActiveLogo,
        repositories,
        addRepository,
        toggleRepositoryStatus,
        deleteRepository,
        reviews,
        addReview,
        upvoteReview,
        verifyReview,
        flagReview,
        approveAllPendingReviews,
        isInjectModalOpen,
        setIsInjectModalOpen,
        isAdminQuickModalOpen,
        setIsAdminQuickModalOpen,
        isSearchModalOpen,
        setIsSearchModalOpen,
        isSupportModalOpen,
        setIsSupportModalOpen,
        isWhatsAppModalOpen,
        setIsWhatsAppModalOpen,
        selectedWhatsAppGroup,
        openWhatsAppModal,
        searchQuery,
        setSearchQuery,
        selectedCategoryFilter,
        setSelectedCategoryFilter,
        toast,
        showToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
