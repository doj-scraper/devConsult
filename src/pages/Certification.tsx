import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ShieldCheck, Award, Lock, Cpu, Server } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SEO } from '@/components/SEO';

export function Certification() {
  const [openModule, setOpenModule] = useState<number | null>(0);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Secure Agentic AI Practitioner Certification",
    "description": "Master agentic AI creation, secure deployment, and quantum compute hardening. Earn your Secure Agentic AI Practitioner certification with hands-on capstones in post-quantum AI security.",
    "provider": {
      "@type": "Organization",
      "name": "CRODA AI Consulting",
      "sameAs": "https://croda-ai.com"
    }
  };

  const modules = [
    {
      title: "Module 1: Foundations of Agentic AI & AI Agent Creation",
      duration: "Week 1-2",
      icon: <Cpu className="w-5 h-5" />,
      content: "Deep dive into LLM architectures, prompt engineering for deterministic outputs, and the anatomy of an autonomous agent. Build your first single-purpose agent."
    },
    {
      title: "Module 2: Secure Infrastructure & Agentic Deployment",
      duration: "Week 3-4",
      icon: <Server className="w-5 h-5" />,
      content: "Containerization, secure API gateways, and CI/CD pipelines for AI agents. Learn to deploy agents in isolated, monitored environments."
    },
    {
      title: "Module 3: Post-Quantum Cryptography for AI Infrastructure Security",
      duration: "Week 5-6",
      icon: <Lock className="w-5 h-5" />,
      content: "Introduction to NIST post-quantum standards. Implementing lattice-based cryptography to secure agent communications and data storage."
    },
    {
      title: "Module 4: Multi-Agent Orchestration & Quantum Hardening",
      duration: "Week 7-8",
      icon: <ShieldCheck className="w-5 h-5" />,
      content: "Designing systems where multiple agents collaborate securely. Implementing consensus mechanisms, role-based access control, and audit logging."
    }
  ];

  return (
    <div className="flex flex-col w-full relative">
      <SEO 
        title="Secure Agentic AI Practitioner Certification | Agentic Deployment + Quantum Hardening"
        description="Master agentic AI creation, secure deployment, and quantum compute hardening. Earn your Secure Agentic AI Practitioner certification with hands-on capstones in post-quantum AI security."
        schema={schema}
      />
      {/* Breadcrumbs */}
      <div className="px-8 md:px-16 py-6 border-b border-gold/20 flex items-center gap-2 text-xs font-mono uppercase tracking-widest bg-charcoal-light relative z-10">
        <Link to="/" className="text-text-muted hover:text-primary transition-colors">Home</Link>
        <span className="text-gold">/</span>
        <span className="text-text-muted">Training</span>
        <span className="text-gold">/</span>
        <span className="text-primary">Secure Agentic AI Practitioner Certification</span>
      </div>

      {/* Hero Section */}
      <section className="px-8 md:px-16 py-16 border-b border-gold/20 flex flex-col md:flex-row gap-12 items-start justify-between relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(245,196,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,196,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 border border-gold/30 mb-6 shadow-[0_0_10px_rgba(245,196,0,0.1)]">
            <Award className="w-4 h-4 text-gold" />
            <span className="text-xs font-mono text-gold uppercase tracking-widest">Professional Certification</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-display font-bold text-text-main leading-tight mb-6 uppercase tracking-widest cyber-glitch-text">
            Secure Agentic AI Practitioner Certification
          </h1>
          
          <p className="text-lg text-text-muted mb-8 leading-relaxed font-mono">
            Master the engineering of secure, autonomous AI systems. This intensive 8-week program covers agent creation, deployment, and quantum-hardened security protocols.
          </p>
          
          <div className="flex items-center gap-4">
            <button className="cyber-button">
              Enroll Now - $4,500
            </button>
            <button className="text-text-main hover:text-primary px-6 py-3 text-sm font-mono font-bold transition-colors border border-gold/30 hover:border-primary/50 bg-charcoal-light uppercase tracking-widest relative overflow-hidden group">
              <span className="relative z-10">Download Syllabus</span>
              <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Badge Preview */}
        <div className="hidden md:flex flex-col items-center justify-center p-8 bg-charcoal border border-gold/30 shadow-[0_0_30px_rgba(245,196,0,0.1)] relative z-10 cyber-panel">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,196,0,0.1)_0%,transparent_70%)]" />
          <ShieldCheck className="w-24 h-24 text-gold mb-4 relative z-10" />
          <div className="text-center relative z-10">
            <div className="font-display text-sm text-text-main font-bold tracking-widest uppercase mb-1">Quantum Hardened</div>
            <div className="text-xs font-mono text-primary uppercase tracking-widest">Production-Ready Agentic AI</div>
            <div className="mt-4 text-[10px] text-gold/50 font-mono">ID: SAAP-2026-XXXX</div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="px-8 md:px-16 py-16 relative z-10">
        <h2 className="text-2xl font-display font-bold text-text-main mb-10 flex items-center gap-3 uppercase tracking-widest">
          <span className="w-8 h-px bg-gold/50" />
          Curriculum Modules
        </h2>

        <div className="max-w-3xl space-y-4">
          {modules.map((mod, idx) => (
            <div 
              key={idx} 
              className={cn(
                "border transition-all duration-300 overflow-hidden",
                openModule === idx 
                  ? "bg-charcoal border-secondary/50 shadow-[0_0_15px_rgba(255,42,42,0.1)]" 
                  : "bg-charcoal-light border-gold/20 hover:border-gold/40"
              )}
            >
              <button 
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenModule(openModule === idx ? null : idx)}
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-10 h-10 flex items-center justify-center transition-colors border",
                    openModule === idx ? "bg-secondary/10 text-secondary border-secondary/50" : "bg-charcoal border-gold/20 text-text-muted"
                  )}>
                    {mod.icon}
                  </div>
                  <div>
                    <div className="text-xs font-mono text-gold mb-1 uppercase tracking-widest">{mod.duration}</div>
                    <h3 className={cn(
                      "text-lg font-display font-bold uppercase tracking-widest transition-colors",
                      openModule === idx ? "text-text-main" : "text-text-muted"
                    )}>{mod.title}</h3>
                  </div>
                </div>
                <ChevronDown className={cn(
                  "w-5 h-5 transition-transform duration-300",
                  openModule === idx ? "text-secondary rotate-180" : "text-text-muted"
                )} />
              </button>
              
              <div className={cn(
                "grid transition-all duration-300 ease-in-out",
                openModule === idx ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}>
                <div className="overflow-hidden">
                  <div className="p-6 pt-0 text-sm font-mono text-text-muted leading-relaxed border-t border-gold/10 mt-2">
                    {mod.content}
                    
                    {/* Progress Bar Mockup */}
                    <div className="mt-6">
                      <div className="flex justify-between text-xs font-mono mb-2 uppercase tracking-widest">
                        <span className="text-text-main">Completion Requirements</span>
                        <span className="text-primary">0%</span>
                      </div>
                      <div className="w-full h-1 bg-charcoal border border-gold/10 overflow-hidden">
                        <div className="w-0 h-full bg-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capstone Projects Section */}
      <section className="px-8 md:px-16 py-16 bg-charcoal border-t border-gold/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
        <h2 className="text-2xl font-display font-bold text-text-main mb-10 flex items-center gap-3 uppercase tracking-widest relative z-10">
          <span className="w-8 h-px bg-gold/50" />
          Real-World Capstones
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          <div className="cyber-panel p-8">
            <h3 className="text-lg font-display font-bold text-text-main mb-2 uppercase tracking-widest">Secure Autonomous IT Helpdesk Agent</h3>
            <p className="text-sm font-mono text-text-muted mb-6">Build an autonomous agent capable of resolving tier-1 IT tickets with strict RBAC enforcement.</p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest">
                <span className="text-text-muted">Before: Human-only</span>
                <span className="text-secondary">Avg Resolution: 4h</span>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-gold/10 via-gold/30 to-gold/10" />
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest">
                <span className="text-text-main">After: Agentic</span>
                <span className="text-success">Avg Resolution: 2m</span>
              </div>
            </div>
          </div>

          <div className="cyber-panel p-8">
            <h3 className="text-lg font-display font-bold text-text-main mb-2 uppercase tracking-widest">Quantum-Hardened Research Agent</h3>
            <p className="text-sm font-mono text-text-muted mb-6">Deploy a research agent that aggregates sensitive data using post-quantum encryption standards.</p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest">
                <span className="text-text-muted">Before: Standard TLS</span>
                <span className="text-secondary">Vulnerable to SNDL</span>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-gold/10 via-gold/30 to-gold/10" />
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest">
                <span className="text-text-main">After: Kyber-768</span>
                <span className="text-success">Quantum-Resistant</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
