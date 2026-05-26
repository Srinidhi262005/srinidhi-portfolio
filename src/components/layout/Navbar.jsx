import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { profile } from '../../data/profile';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import Button from '../ui/Button';

/** Fixed navigation with smooth scroll and mobile menu */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const sectionIds = profile.navLinks.map((l) => l.id);
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 2.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="section-container flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('home')}
          className="font-display text-xl font-bold tracking-tight group"
          aria-label="Go to home"
        >
          <span className="text-white group-hover:text-accent-cyan transition-colors">
            {profile.name}
          </span>
          <span className="text-accent-cyan">.</span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {profile.navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeId === link.id
                    ? 'text-accent-cyan bg-accent-cyan/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button
            href={profile.resumeUrl}
            download="Kaiytha_Srinidhi_Reddy_Resume.pdf"
            variant="primary"
            icon={Download}
            className="!py-2.5 !px-5 !text-sm"
          >
            Download Resume
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-gray-300 hover:text-white"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/5 overflow-hidden"
          >
            <ul className="section-container py-4 flex flex-col gap-1">
              {profile.navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium ${
                      activeId === link.id ? 'text-accent-cyan bg-accent-cyan/10' : 'text-gray-300'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <Button
                  href={profile.resumeUrl}
                  download="Kaiytha_Srinidhi_Reddy_Resume.pdf"
                  variant="primary"
                  icon={Download}
                  className="w-full"
                >
                  Download Resume
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
