import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-charcoal/90 backdrop-blur-sm border-b border-gold/20 shadow-[0_0_15px_rgba(245,196,0,0.1)]">
      <div className="max-w-[1180px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="font-display font-bold text-2xl tracking-widest text-text-main group-hover:text-primary transition-colors cyber-glitch-text">
            CRODA<span className="text-gold">_</span>AI
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-sm uppercase tracking-widest">
          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 text-text-main hover:text-primary transition-colors py-2">
              Services <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", activeMenu === 'services' ? "rotate-180 text-primary" : "opacity-50")} />
            </button>
            <AnimatePresence>
              {activeMenu === 'services' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-0 pt-2 w-64 z-50 origin-top-left"
                >
                  <div className="cyber-panel p-2 flex flex-col gap-1">
                    <Link to="/ai-agent-creation-consulting" className="px-4 py-2 text-xs text-text-main hover:bg-charcoal hover:text-primary transition-colors">AI Agent Creation</Link>
                    <Link to="/ai-agent-creation-consulting" className="px-4 py-2 text-xs text-text-main hover:bg-charcoal hover:text-primary transition-colors">Agentic Deployment</Link>
                    <Link to="/ai-agent-creation-consulting" className="px-4 py-2 text-xs text-text-main hover:bg-charcoal hover:text-primary transition-colors">Security & Quantum Hardening</Link>
                    <Link to="/ai-agent-creation-consulting" className="px-4 py-2 text-xs text-text-main hover:bg-charcoal hover:text-primary transition-colors">AI Infrastructure Security</Link>
                    <Link to="/ai-agent-creation-consulting" className="px-4 py-2 text-xs text-text-main hover:bg-charcoal hover:text-primary transition-colors">Web App Design & Refactor</Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter('training')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 text-text-main hover:text-primary transition-colors py-2">
              Training <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", activeMenu === 'training' ? "rotate-180 text-primary" : "opacity-50")} />
            </button>
            <AnimatePresence>
              {activeMenu === 'training' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-0 pt-2 w-72 z-50 origin-top-left"
                >
                  <div className="cyber-panel p-2 flex flex-col gap-1">
                    <Link to="/secure-agentic-ai-practitioner-certification" className="px-4 py-2 text-xs text-text-main hover:bg-charcoal hover:text-primary transition-colors flex items-center justify-between">
                      <span>Secure Agentic AI Practitioner</span>
                      <span className="text-[9px] uppercase tracking-widest text-gold border border-gold/30 px-1.5 py-0.5">Cert</span>
                    </Link>
                    <Link to="/secure-agentic-ai-practitioner-certification" className="px-4 py-2 text-xs text-text-main hover:bg-charcoal hover:text-primary transition-colors">Workshops</Link>
                    <Link to="/capstone-projects" className="px-4 py-2 text-xs text-text-main hover:bg-charcoal hover:text-primary transition-colors">Capstone Projects</Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/secure-agentic-ai-practitioner-certification" className="text-text-main hover:text-primary transition-colors">Resources</Link>
          <Link to="/about" className="text-text-main hover:text-primary transition-colors">About</Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/secure-agentic-ai-practitioner-certification" className="font-mono text-xs uppercase tracking-widest text-secondary hover:text-secondary/80 transition-colors">
            Enroll Now
          </Link>
          <Link to="/contact" className="cyber-button px-5 py-2 text-xs font-bold">
            Book Discovery Call
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-text-main hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 w-full bg-charcoal-light border-b border-gold/20 shadow-xl overflow-hidden font-mono uppercase tracking-widest"
          >
            <div className="flex flex-col p-4 gap-4">
              <Link to="/ai-agent-creation-consulting" className="text-sm text-text-main hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
              <Link to="/secure-agentic-ai-practitioner-certification" className="text-sm text-text-main hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Training & Certification</Link>
              <Link to="/secure-agentic-ai-practitioner-certification" className="text-sm text-text-main hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Resources</Link>
              <Link to="/about" className="text-sm text-text-main hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <div className="h-px bg-gold/20 my-2" />
              <Link to="/secure-agentic-ai-practitioner-certification" className="text-sm text-secondary hover:text-secondary/80" onClick={() => setIsMobileMenuOpen(false)}>Enroll Now</Link>
              <Link to="/contact" className="cyber-button text-center py-3 text-sm font-bold" onClick={() => setIsMobileMenuOpen(false)}>
                Book Discovery Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
