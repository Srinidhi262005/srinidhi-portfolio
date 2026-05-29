import { useState, lazy, Suspense } from 'react';
import ScrollProgress from './components/layout/ScrollProgress';
import CursorGlow from './components/layout/CursorGlow';
import LoadingScreen from './components/layout/LoadingScreen';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Footer from './components/layout/Footer';

// Lazy load below-fold sections for performance
const About = lazy(() => import('./components/sections/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Education = lazy(() => import('./components/sections/Education'));
const Achievements = lazy(() => import('./components/sections/Achievements'));
const GitHubStats = lazy(() => import('./components/sections/GitHubStats'));
const Contact = lazy(() => import('./components/sections/Contact'));

/** Minimal loading fallback for lazy sections */
function SectionLoader() {
  return (
    <div className="py-24 flex justify-center">
      <div className="w-8 h-8 border-2 border-accent-cyan/30 border-t-accent-cyan rounded-full animate-spin" />
    </div>
  );
}

/** Main application shell */
export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <ScrollProgress />
      <CursorGlow />
      <Navbar />

      <main className="overflow-x-hidden">
        <Hero />

        <Suspense fallback={<SectionLoader />}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Achievements />
          <GitHubStats />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}
