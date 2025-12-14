import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AOS from 'aos';
import { Layout } from './components/Layout';
import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';
import { BlogSinglePage } from './pages/BlogSinglePage';
import { ContactPage } from './pages/ContactPage';
import { CoursesPage } from './pages/CoursesPage';
import { HomePage } from './pages/HomePage';
import { TeachersPage } from './pages/TeachersPage';
import { NotFoundPage } from './pages/NotFoundPage';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="teacher" element={<TeachersPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:id" element={<BlogSinglePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
