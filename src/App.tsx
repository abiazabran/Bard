import { Route, Routes, useLocation } from 'react-router-dom';

import { HomePage } from './pages/home-page';
import { Investigation } from './pages/investigation';
import { ReportProjects } from './pages/Report-project';
import { Toaster } from 'sonner';
import { useEffect } from 'react';
function App() {
  const location = useLocation();
  function scrollOnMount() {
    setTimeout(() => {
      const hash = window.location.hash;
      if (hash) {
        window.scrollTo({
          top: document.getElementById(hash.slice(1))?.offsetTop,
          behavior: 'smooth',
        });
      } else {
        window.scrollTo(0, 0);
      }
    }, 200);
  }

  useEffect(() => {
    scrollOnMount();
    document.documentElement.style.overflow = 'unset';
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Investigation" element={<Investigation />} />
        <Route path="/ReportProjects" element={<ReportProjects />} />
      </Routes>
      <Toaster position="top-center" richColors />
    </>
  );
}

export default App;
