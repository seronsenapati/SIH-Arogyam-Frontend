import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { UnifiedNavigation } from './components/UnifiedNavigation';
import { RegistrationPage } from './components/RegistrationPage';
import { PatientAuthPage } from './components/PatientAuthPage';
import { AboutUsPage } from './components/AboutUsPage';
import { AppointmentScheduler } from './components/AppointmentScheduler';
import { BlogPage } from './components/BlogPage';
import { ContactUsPage } from './components/ContactUsPage';
import { ConsultDoshaPage } from './components/ConsultDoshaPage';
import { ConsultantAuthPage } from './components/ConsultantAuthPage';
import { ConsultantDashboard } from './components/ConsultantDashboard';
import { DiagnosisPage } from './components/DiagnosisPage';
import { DoctorAccount } from './components/DoctorAccount';
import { DoctorAuthPage } from './components/DoctorAuthPage';
import { DoctorAvailability } from './components/DoctorAvailability';
import { DoctorDashboard } from './components/DoctorDashboard';
import { FeedbackPopup } from './components/FeedbackPopup';
import { PatientAccount } from './components/PatientAccount';
import { PatientDashboard } from './components/PatientDashboard';
import { PatientRecoveryGraph } from './components/PatientRecoveryGraph';
import { LoginPage } from './components/LoginPage';
import { SignupPage } from './components/SignupPage';
import { NewRegistrationPage } from './components/NewRegistrationPage';
import { SimpleRegistrationPage } from './components/SimpleRegistrationPage';

// Create a component to handle navigation state
function NavigationHandler({ setCurrentPage, currentPage, setUserRole, setUserProfile }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Map URL paths to page names
    const pathToPageMap = {
      '/': 'home',
      '/home': 'home',
      '/registration': 'registration',
      '/role-registration': 'role-registration',
      '/simple-registration': 'simple-registration',
      '/login': 'login',
      '/signup': 'signup',
      '/about': 'about',
      '/appointment': 'appointment',
      '/blog': 'blog',
      '/contact': 'contact',
      '/consult-dosha': 'consult-dosha',
      '/consultant-auth': 'consultant-auth',
      '/consultant-dashboard': 'consultant-dashboard',
      '/diagnosis': 'diagnosis',
      '/doctor-account': 'doctor-account',
      '/doctor-auth': 'doctor-auth',
      '/doctor-availability': 'doctor-availability',
      '/doctor-dashboard': 'doctor-dashboard',
      '/patient-account': 'patient-account',
      '/patient-dashboard': 'patient-dashboard',
      '/recovery-graph': 'recovery-graph'
    };

    const page = pathToPageMap[location.pathname] || 'home';
    setCurrentPage(page);
  }, [location.pathname, setCurrentPage]);

  // Function to navigate to a specific page
  const navigateToPage = (page) => {
    const pageToPathMap = {
      'home': '/',
      'registration': '/registration',
      'role-registration': '/role-registration',
      'simple-registration': '/simple-registration',
      'login': '/login',
      'signup': '/signup',
      'about': '/about',
      'appointment': '/appointment',
      'blog': '/blog',
      'contact': '/contact',
      'consult-dosha': '/consult-dosha',
      'consultant-auth': '/consultant-auth',
      'consultant-dashboard': '/consultant-dashboard',
      'diagnosis': '/diagnosis',
      'doctor-account': '/doctor-account',
      'doctor-auth': '/doctor-auth',
      'doctor-availability': '/doctor-availability',
      'doctor-dashboard': '/doctor-dashboard',
      'patient-account': '/patient-account',
      'patient-dashboard': '/patient-dashboard',
      'recovery-graph': '/recovery-graph'
    };

    const path = pageToPathMap[page] || '/';
    navigate(path);
  };

  return null; // This component doesn't render anything
}

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const [userRole, setUserRole] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Sync currentPage with URL changes
  useEffect(() => {
    // Map URL paths to page names
    const pathToPageMap = {
      '/': 'home',
      '/home': 'home',
      '/registration': 'registration',
      '/role-registration': 'role-registration',
      '/simple-registration': 'simple-registration',
      '/login': 'login',
      '/signup': 'signup',
      '/about': 'about',
      '/appointment': 'appointment',
      '/blog': 'blog',
      '/contact': 'contact',
      '/consult-dosha': 'consult-dosha',
      '/consultant-auth': 'consultant-auth',
      '/consultant-dashboard': 'consultant-dashboard',
      '/diagnosis': 'diagnosis',
      '/doctor-account': 'doctor-account',
      '/doctor-auth': 'doctor-auth',
      '/doctor-availability': 'doctor-availability',
      '/doctor-dashboard': 'doctor-dashboard',
      '/patient-account': 'patient-account',
      '/patient-dashboard': 'patient-dashboard',
      '/recovery-graph': 'recovery-graph'
    };

    const page = pathToPageMap[location.pathname] || 'home';
    setCurrentPage(page);
  }, [location.pathname]);

  // Update the setCurrentPage function to use navigate
  const updateCurrentPage = (page) => {
    const pageToPathMap = {
      'home': '/',
      'registration': '/registration',
      'role-registration': '/role-registration',
      'simple-registration': '/simple-registration',
      'login': '/login',
      'signup': '/signup',
      'about': '/about',
      'appointment': '/appointment',
      'blog': '/blog',
      'contact': '/contact',
      'consult-dosha': '/consult-dosha',
      'consultant-auth': '/consultant-auth',
      'consultant-dashboard': '/consultant-dashboard',
      'diagnosis': '/diagnosis',
      'doctor-account': '/doctor-account',
      'doctor-auth': '/doctor-auth',
      'doctor-availability': '/doctor-availability',
      'doctor-dashboard': '/doctor-dashboard',
      'patient-account': '/patient-account',
      'patient-dashboard': '/patient-dashboard',
      'recovery-graph': '/recovery-graph'
    };

    const path = pageToPathMap[page] || '/';
    navigate(path);
    setCurrentPage(page);
  };

  const handleLogin = (role, profile) => {
    setUserRole(role);
    setUserProfile(profile);
    // Route to the appropriate dashboard based on user role
    if (role === 'doctor') {
      updateCurrentPage('doctor-dashboard');
    } else if (role === 'consultant') {
      updateCurrentPage('consultant-dashboard');
    } else {
      updateCurrentPage('patient-dashboard');
    }
  };

  const handleLogout = () => {
    setUserRole(null);
    setUserProfile(null);
    updateCurrentPage('home');
  };

  const handleReturnToDashboard = () => {
    if (userRole === 'doctor') {
      updateCurrentPage('doctor-dashboard');
    } else if (userRole === 'consultant') {
      updateCurrentPage('consultant-dashboard');
    } else {
      updateCurrentPage('patient-dashboard');
    }
  };

  const handleShowAccount = () => {
    if (userRole === 'doctor') {
      updateCurrentPage('doctor-account');
    } else if (userRole === 'consultant') {
      // Consultant account page if exists, otherwise dashboard
      updateCurrentPage('consultant-dashboard');
    } else {
      updateCurrentPage('patient-account');
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={updateCurrentPage} onTakeDoshaAssessment={() => updateCurrentPage('consult-dosha')} />;
      case 'registration':
        return <RegistrationPage onNavigate={updateCurrentPage} onSelectRole={(role) => {
          setSelectedRole(role);
          updateCurrentPage('role-registration');
        }} />;
      case 'role-registration':
        return <NewRegistrationPage 
          onBack={() => updateCurrentPage('registration')} 
          onRegister={handleLogin} 
          selectedRole={selectedRole}
        />;
      case 'simple-registration':
        return <SimpleRegistrationPage 
          onBack={() => updateCurrentPage('home')} 
          onRegister={handleLogin} 
        />;
      case 'login':
        return <LoginPage onBack={() => updateCurrentPage('home')} onLogin={handleLogin} />;
      case 'signup':
        return <SignupPage onBack={() => updateCurrentPage('home')} onRegister={handleLogin} />;
      case 'about':
        return <AboutUsPage onBack={() => updateCurrentPage('home')} />;
      case 'appointment':
        return <AppointmentScheduler onBack={() => updateCurrentPage('home')} />;
      case 'blog':
        return <BlogPage onBack={() => updateCurrentPage('home')} />;
      case 'contact':
        return <ContactUsPage onBack={() => updateCurrentPage('home')} />;
      case 'consult-dosha':
        return <ConsultDoshaPage onBack={() => updateCurrentPage('home')} onConsult={handleLogin} />;
      case 'consultant-auth':
        return <ConsultantAuthPage onBack={() => updateCurrentPage('home')} onLogin={handleLogin} />;
      case 'consultant-dashboard':
        return <ConsultantDashboard userProfile={userProfile} onLogout={handleLogout} onBackToHome={() => updateCurrentPage('home')} />;
      case 'diagnosis':
        return <DiagnosisPage onBack={() => updateCurrentPage('home')} onBackToHome={() => updateCurrentPage('home')} />;
      case 'doctor-account':
        return <DoctorAccount onBack={() => updateCurrentPage('doctor-dashboard')} onLogout={handleLogout} userProfile={userProfile} onBackToHome={() => updateCurrentPage('home')} />;
      case 'doctor-auth':
        return <DoctorAuthPage onBack={() => updateCurrentPage('home')} onLogin={handleLogin} />;
      case 'doctor-availability':
        return <DoctorAvailability onBack={() => updateCurrentPage('home')} condition="Digestive Issues" onSelectDoctor={() => {}} />;
      case 'doctor-dashboard':
        return <DoctorDashboard userProfile={userProfile} onLogout={handleLogout} onBackToHome={() => updateCurrentPage('home')} />;
      case 'patient-account':
        return <PatientAccount onBack={() => updateCurrentPage('patient-dashboard')} onLogout={handleLogout} userProfile={userProfile} onUpdateProfile={() => {}} />;
      case 'patient-dashboard':
        return (
          <PatientDashboard 
            onConsultDosha={() => updateCurrentPage('consult-dosha')}
            onOpenCalendar={() => {}}
            onOpenUpcoming={() => {}}
            onViewAccount={() => updateCurrentPage('patient-account')}
            onShowFeedback={() => setShowFeedback(true)}
            userProfile={userProfile}
            onBackToHome={() => updateCurrentPage('home')}
          />
        );
      case 'recovery-graph':
        return <PatientRecoveryGraph />;
      default:
        return <HomePage onNavigate={updateCurrentPage} onTakeDoshaAssessment={() => updateCurrentPage('consult-dosha')} />;
    }
  };

  return (
    <div className="App">
      {/* Show unified navigation for all users on all pages */}
      <UnifiedNavigation 
        userRole={userRole}
        currentPage={currentPage}
        setCurrentPage={updateCurrentPage}
        onLogout={handleLogout}
        onReturnToDashboard={handleReturnToDashboard}
        onShowAccount={handleShowAccount}
        onBackToHome={() => updateCurrentPage('home')}
      />
      {renderPage()}
      {showFeedback && <FeedbackPopup onClose={() => setShowFeedback(false)} />}
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppContent />} />
      <Route path="/home" element={<AppContent />} />
      <Route path="/registration" element={<AppContent />} />
      <Route path="/role-registration" element={<AppContent />} />
      <Route path="/simple-registration" element={<AppContent />} />
      <Route path="/login" element={<AppContent />} />
      <Route path="/signup" element={<AppContent />} />
      <Route path="/about" element={<AppContent />} />
      <Route path="/appointment" element={<AppContent />} />
      <Route path="/blog" element={<AppContent />} />
      <Route path="/contact" element={<AppContent />} />
      <Route path="/consult-dosha" element={<AppContent />} />
      <Route path="/consultant-auth" element={<AppContent />} />
      <Route path="/consultant-dashboard" element={<AppContent />} />
      <Route path="/diagnosis" element={<AppContent />} />
      <Route path="/doctor-account" element={<AppContent />} />
      <Route path="/doctor-auth" element={<AppContent />} />
      <Route path="/doctor-availability" element={<AppContent />} />
      <Route path="/doctor-dashboard" element={<AppContent />} />
      <Route path="/patient-account" element={<AppContent />} />
      <Route path="/patient-dashboard" element={<AppContent />} />
      <Route path="/recovery-graph" element={<AppContent />} />
    </Routes>
  );
}

export default App;