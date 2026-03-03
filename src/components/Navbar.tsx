import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Theme } from '../types';

export const Navbar = ({ theme, toggleTheme }: { theme: Theme; toggleTheme: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash scrolling if on the same page, or navigation if on a different page
  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      const elementId = href.replace('/#', '');
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href === '/') {
       window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'サービス', href: '/#services' },
    { name: '企業理念', href: '/#philosophy' },
    { name: '制作の流れ', href: '/#process' },
    { name: '会社概要', href: '/#company' },
    { name: 'お問い合わせ', href: '/#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? theme === 'dark' ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-white/80 backdrop-blur-md border-b border-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" onClick={() => handleNavClick('/')} className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'}`}>
            <span className="font-serif italic">O</span>
          </div>
          <span>Orinova</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
             // If we are on the home page, we can scroll. If not, we link to home with hash.
             // React Router's HashLink is useful here but standard Link with hash works if we handle it.
             // Since we are using standard Link, let's just use the href.
             // Actually, for hash links to work from other pages, we need to navigate to / then scroll.
             // The simple <a href="/#id"> works for navigation, but smooth scroll needs JS if already on page.
             
             return (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  theme === 'dark' ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              theme === 'dark' ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/5 hover:bg-black/10 text-black'
            }`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              theme === 'dark' ? 'bg-white/10 text-white' : 'bg-black/5 text-black'
            }`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={theme === 'dark' ? 'text-white' : 'text-black'}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute top-20 left-0 right-0 p-6 shadow-xl md:hidden ${
              theme === 'dark' ? 'bg-black border-b border-white/10' : 'bg-white border-b border-black/5'
            }`}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
