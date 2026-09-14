import React, { createContext, useContext, useState, ReactNode } from 'react';
import {
  User,
  Role,
  ActiveTab,
  Course,
  Assessment,
  KnowledgeItem,
  QuizSubmission,
  ToastMessage,
  SkillScore,
} from '../types';
import {
  MOCK_USERS,
  MOCK_COURSES,
  MOCK_ASSESSMENTS,
  MOCK_KNOWLEDGE_ITEMS,
} from '../mockData';

interface AppContextType {
  currentUser: User;
  currentRole: Role;
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  quickRoleSwitch: (role: Role) => void;
  courses: Course[];
  selectedCourse: Course | null;
  setSelectedCourse: (course: Course | null) => void;
  assessments: Assessment[];
  selectedAssessment: Assessment | null;
  setSelectedAssessment: (asm: Assessment | null) => void;
  activeQuizResult: QuizSubmission | null;
  setActiveQuizResult: (res: QuizSubmission | null) => void;
  knowledgeItems: KnowledgeItem[];
  addKnowledgeItem: (item: Omit<KnowledgeItem, 'id' | 'downloads' | 'views'>) => void;
  updateSkillScore: (skillId: string, addedDelta: number) => void;
  toasts: ToastMessage[];
  addToast: (title: string, message: string, type?: ToastMessage['type']) => void;
  removeToast: (id: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  startCourse: (courseId: string) => void;
  updateCourseProgress: (courseId: string, progress: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentRole, setCurrentRole] = useState<Role>('LEARNER');
  const [currentUser, setCurrentUser] = useState<User>(MOCK_USERS.learner);
  const [activeTab, setActiveTab] = useState<ActiveTab>('landing');
  const [courses, setCourses] = useState<Course[]>(MOCK_COURSES);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(MOCK_COURSES[0]);
  const [assessments] = useState<Assessment[]>(MOCK_ASSESSMENTS);
  const [selectedAssessment, setSelectedAssessment] = useState<Assessment | null>(MOCK_ASSESSMENTS[0]);
  const [activeQuizResult, setActiveQuizResult] = useState<QuizSubmission | null>(null);
  const [knowledgeItems, setKnowledgeItems] = useState<KnowledgeItem[]>(MOCK_KNOWLEDGE_ITEMS);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const addToast = (title: string, message: string, type: ToastMessage['type'] = 'info') => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    const newToast: ToastMessage = { id, title, message, type };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const quickRoleSwitch = (role: Role) => {
    setCurrentRole(role);
    if (role === 'LEARNER') {
      setCurrentUser(MOCK_USERS.learner);
      setActiveTab('learner-dashboard');
      addToast('Role Switched', 'Logged in as Rajamurugan (Founder & Lead)', 'info');
    } else if (role === 'MANAGER') {
      setCurrentUser(MOCK_USERS.manager);
      setActiveTab('manager-dashboard');
      addToast('Role Switched', 'Logged in as Manager (Priya Kumar)', 'info');
    } else if (role === 'ADMIN') {
      setCurrentUser(MOCK_USERS.admin);
      setActiveTab('admin-dashboard');
      addToast('Role Switched', 'Logged in as Enterprise Admin (Rahul Sharma)', 'info');
    }
  };

  const updateSkillScore = (skillId: string, addedDelta: number) => {
    setCurrentUser((prevUser) => {
      const updatedSkills = prevUser.skills.map((s): SkillScore => {
        if (s.skillId === skillId) {
          const newCurrent = Math.min(100, Math.max(0, s.current + addedDelta));
          const newPriority =
            newCurrent >= s.target ? 'LOW' : s.target - newCurrent > 20 ? 'HIGH' : 'MEDIUM';
          return {
            ...s,
            current: newCurrent,
            priority: newPriority,
          };
        }
        return s;
      });

      const totalCurrent = updatedSkills.reduce((acc, curr) => acc + curr.current, 0);
      const newOverallScore = Math.round(totalCurrent / updatedSkills.length);

      return {
        ...prevUser,
        skills: updatedSkills,
        overallSkillScore: newOverallScore,
      };
    });
  };

  const startCourse = (courseId: string) => {
    setCourses((prev) =>
      prev.map((c) => (c.id === courseId ? { ...c, enrolled: true, progress: Math.max(c.progress, 10) } : c))
    );
    const target = courses.find((c) => c.id === courseId);
    if (target) {
      setSelectedCourse({ ...target, enrolled: true, progress: Math.max(target.progress, 10) });
      setActiveTab('course-detail');
      addToast('Course Enrolled', `Started course "${target.title}"`, 'success');
    }
  };

  const updateCourseProgress = (courseId: string, progress: number) => {
    setCourses((prev) =>
      prev.map((c) => {
        if (c.id === courseId) {
          const completed = progress >= 100;
          return { ...c, progress, completed };
        }
        return c;
      })
    );
  };

  const addKnowledgeItem = (item: Omit<KnowledgeItem, 'id' | 'downloads' | 'views'>) => {
    const newItem: KnowledgeItem = {
      ...item,
      id: `knw-${Date.now()}`,
      downloads: 0,
      views: 1,
    };
    setKnowledgeItems((prev) => [newItem, ...prev]);
    addToast('Knowledge Shared', `"${newItem.title}" was published to repository`, 'success');
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        currentRole,
        activeTab,
        setActiveTab,
        quickRoleSwitch,
        courses,
        selectedCourse,
        setSelectedCourse,
        assessments,
        selectedAssessment,
        setSelectedAssessment,
        activeQuizResult,
        setActiveQuizResult,
        knowledgeItems,
        addKnowledgeItem,
        updateSkillScore,
        toasts,
        addToast,
        removeToast,
        searchQuery,
        setSearchQuery,
        startCourse,
        updateCourseProgress,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
