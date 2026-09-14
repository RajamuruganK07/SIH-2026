export type Role = 'LEARNER' | 'MANAGER' | 'ADMIN';

export type PriorityLevel = 'HIGH' | 'MEDIUM' | 'LOW';

export interface SkillScore {
  skillId: string;
  skillName: string;
  current: number; // percentage (0-100)
  target: number; // percentage (0-100)
  priority: PriorityLevel;
  category: 'Technical' | 'Soft Skills' | 'Domain' | 'Leadership';
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  department: string;
  title: string;
  experience: string;
  avatar: string;
  streak: number;
  learningHours: number;
  coursesCompleted: number;
  overallSkillScore: number;
  skills: SkillScore[];
}

export interface ResourceModule {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'pdf' | 'article' | 'exercise';
  completed: boolean;
  contentUrl?: string;
  description?: string;
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  resources: ResourceModule[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  skillId: string;
  skillName: string;
  rating: number;
  image: string;
  progress: number;
  completed: boolean;
  enrolled: boolean;
  modules: CourseModule[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface Assessment {
  id: string;
  title: string;
  skillId: string;
  skillName: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  questionCount: number;
  passingScore: number;
  timeLimitMinutes: number;
  questions: QuizQuestion[];
}

export interface QuizSubmission {
  assessmentId: string;
  skillId: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  timeTakenSeconds: number;
  date: string;
  scoreBefore: number;
  scoreAfter: number;
}

export interface KnowledgeItem {
  id: string;
  title: string;
  description: string;
  category: 'Best Practices' | 'Technical Guides' | 'Project Knowledge' | 'Videos' | 'FAQs' | 'Documents';
  authorName: string;
  authorRole: string;
  department: string;
  date: string;
  type: 'pdf' | 'video' | 'article' | 'presentation';
  tags: string[];
  downloads: number;
  views: number;
  fileUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  avatar: string;
  department: string;
  title: string;
  overallScore: number;
  activeCourses: number;
  skills: Record<string, number>;
}

export interface OrgDepartmentMetrics {
  department: string;
  learnerCount: number;
  avgSkillScore: number;
  activeCourses: number;
  criticalGaps: number;
  skills: Record<string, number>;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  title: string;
  message: string;
}

export type ActiveTab =
  | 'landing'
  | 'login'
  | 'learner-dashboard'
  | 'manager-dashboard'
  | 'admin-dashboard'
  | 'profile'
  | 'skill-gap'
  | 'skill-engine'
  | 'learning-path'
  | 'courses'
  | 'course-detail'
  | 'content-hub'
  | 'quiz-generator'
  | 'active-quiz'
  | 'quiz-result'
  | 'knowledge-repo'
  | 'analytics'
  | 'user-management'
  | 'course-management'
  | 'assessment-management'
  | 'settings';
