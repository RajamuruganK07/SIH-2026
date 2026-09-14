import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { Sidebar } from './components/layout/Sidebar';
import { Footer } from './components/layout/Footer';
import { ToastContainer } from './components/common/Toast';

// Views
import { LandingPageView } from './views/LandingPageView';
import { LoginView } from './views/LoginView';
import { LearnerDashboardView } from './views/LearnerDashboardView';
import { ManagerDashboardView } from './views/ManagerDashboardView';
import { AdminDashboardView } from './views/AdminDashboardView';
import { ProfileView } from './views/ProfileView';
import { SkillGapView } from './views/SkillGapView';
import { SkillEngineView } from './views/SkillEngineView';
import { LearningPathView } from './views/LearningPathView';
import { CoursesView } from './views/CoursesView';
import { CourseDetailView } from './views/CourseDetailView';
import { ContentHubView } from './views/ContentHubView';
import { QuizGeneratorView } from './views/QuizGeneratorView';
import { ActiveQuizView } from './views/ActiveQuizView';
import { QuizResultView } from './views/QuizResultView';
import { KnowledgeRepoView } from './views/KnowledgeRepoView';
import { AnalyticsView } from './views/AnalyticsView';
import { UserManagementView } from './views/UserManagementView';
import { CourseManagementView } from './views/CourseManagementView';
import { AssessmentManagementView } from './views/AssessmentManagementView';
import { SettingsView } from './views/SettingsView';

const MainContent: React.FC = () => {
  const { activeTab } = useApp();

  const renderView = () => {
    switch (activeTab) {
      case 'landing':
        return <LandingPageView />;
      case 'login':
        return <LoginView />;
      case 'learner-dashboard':
        return <LearnerDashboardView />;
      case 'manager-dashboard':
        return <ManagerDashboardView />;
      case 'admin-dashboard':
        return <AdminDashboardView />;
      case 'profile':
        return <ProfileView />;
      case 'skill-gap':
        return <SkillGapView />;
      case 'skill-engine':
        return <SkillEngineView />;
      case 'learning-path':
        return <LearningPathView />;
      case 'courses':
        return <CoursesView />;
      case 'course-detail':
        return <CourseDetailView />;
      case 'content-hub':
        return <ContentHubView />;
      case 'quiz-generator':
        return <QuizGeneratorView />;
      case 'active-quiz':
        return <ActiveQuizView />;
      case 'quiz-result':
        return <QuizResultView />;
      case 'knowledge-repo':
        return <KnowledgeRepoView />;
      case 'analytics':
        return <AnalyticsView />;
      case 'user-management':
        return <UserManagementView />;
      case 'course-management':
        return <CourseManagementView />;
      case 'assessment-management':
        return <AssessmentManagementView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <LandingPageView />;
    }
  };

  const isLandingOrLogin = activeTab === 'landing' || activeTab === 'login';

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">
      <Navbar />

      <div className="flex-1 flex w-full">
        <Sidebar />

        <main className={`flex-1 ${isLandingOrLogin ? 'p-0' : 'p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full'}`}>
          {renderView()}
        </main>
      </div>

      <Footer />
      <ToastContainer />
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}

export default App;
