import React, { useState } from 'react';
import Navbar from './components/Components/NavigationBar';
import Footer from './components/Components/Footer';
import HomePage from './components/Components/HomePage';
import ProjectsPage from './components/Components/ProjectPage';
import AboutUsPage from './components/Components/Aboutus';
import ContactUsPage from './components/Components/ContactUs';
import ProjectDetailsPage from './components/Components/ProjectDetailsPage';
import FloatingButtons from './components/Components/FloatingButton';
import ModernSolarStore from './components/Components/SolarItemPage';

const App = () =>
{
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  const renderPage = () =>
  {
    switch (currentPage)
    {
      case 'home':
        return <HomePage />;
      case 'projects':
        return <ProjectsPage setCurrentPage={setCurrentPage} setSelectedProject={setSelectedProject} />;
      case 'project-detail':
        return <ProjectDetailsPage project={selectedProject} setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutUsPage />;
      case 'contact':
        return <ContactUsPage />;
      case 'Items':
        return <ModernSolarStore />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <FloatingButtons />
      <Footer />
    </div>
  );
};

export default App;



