import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-charcoal-light border-t border-gold/20 pt-16 pb-8 mt-auto relative overflow-hidden">
      {/* Decorative grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
      
      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="font-display font-bold text-2xl tracking-widest text-text-main cyber-glitch-text">
                CRODA<span className="text-gold">_</span>AI
              </div>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-md mb-6 font-mono">
              Precision AI education, agentic deployment, and quantum-hardened infrastructure for mid-sized enterprises and technical teams.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-success bg-success/10 px-3 py-1.5 border border-success/30 mb-6 w-fit shadow-[0_0_10px_rgba(74,222,128,0.2)]">
              <Shield className="w-3.5 h-3.5" />
              <span className="uppercase tracking-widest">NIST-aligned Quantum Practices</span>
            </div>
            
            {/* E-E-A-T Signal */}
            <div className="cyber-panel p-4 max-w-md">
              <p className="text-xs text-text-muted leading-relaxed font-mono">
                <strong className="text-primary font-bold">CRODA</strong> is a Seattle-based AI agent & quantum security consultant. We specialize in building deterministic, production-ready AI systems and providing industry-leading certification.
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-text-main font-display tracking-widest text-sm mb-4 uppercase text-gold">Services</h4>
            <ul className="flex flex-col gap-2 font-mono text-xs uppercase tracking-widest">
              <li><Link to="/ai-agent-creation-consulting" className="text-text-muted hover:text-primary transition-colors">AI Agent Creation</Link></li>
              <li><Link to="/ai-agent-creation-consulting" className="text-text-muted hover:text-primary transition-colors">Agentic Deployment</Link></li>
              <li><Link to="/ai-agent-creation-consulting" className="text-text-muted hover:text-primary transition-colors">Security Hardening</Link></li>
              <li><Link to="/ai-agent-creation-consulting" className="text-text-muted hover:text-primary transition-colors">Web App Refactor</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-text-main font-display tracking-widest text-sm mb-4 uppercase text-gold">Company</h4>
            <ul className="flex flex-col gap-2 font-mono text-xs uppercase tracking-widest">
              <li><Link to="/secure-agentic-ai-practitioner-certification" className="text-text-muted hover:text-primary transition-colors">Certification</Link></li>
              <li><Link to="/capstone-projects" className="text-text-muted hover:text-primary transition-colors">Capstone Projects</Link></li>
              <li><Link to="/about" className="text-text-muted hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-text-muted hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono uppercase tracking-widest">
          <p className="text-text-muted text-[10px]">
            &copy; {new Date().getFullYear()} CRODA AI Consulting. All rights reserved.
          </p>
          <p className="text-text-muted text-[10px] text-gold">
            Seattle-based • Global Reach
          </p>
        </div>
      </div>
    </footer>
  );
}
