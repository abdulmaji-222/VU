export type ActiveView = 'portal' | 'admin';

export type ThemePreset = 'cyan' | 'violet' | 'gold';

export type RepositorySection = 'handouts' | 'pastpapers' | 'assignments' | 'gdbs' | 'quizzes';

export type RepositoryFileType = 'PDF' | 'DOC' | 'ZIP' | 'MCQ' | 'XLS';

export interface RepositoryItem {
  id: string;
  courseCode: string;
  title: string;
  description: string;
  section: RepositorySection;
  fileType: RepositoryFileType;
  downloads: number;
  status: 'live' | 'hidden';
  highlighted: boolean;
  uploadedAt: string;
  size: string;
}

export interface PaperReview {
  id: string;
  courseCode: string;
  examType: string;
  campus: string;
  difficulty: 'Easy' | 'Moderate' | 'Hard' | 'Extreme';
  rating: number;
  content: string;
  author: string;
  timeAgo: string;
  timestamp: number;
  helpfulCount: number;
  verified: boolean;
  featured: boolean;
  status: 'published' | 'pending' | 'flagged';
  hasAttachment?: boolean;
}

export interface CommunityChannel {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  url: string;
  members: string;
  accent: 'cyan' | 'violet' | 'gold';
}
