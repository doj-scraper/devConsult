import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, ShieldAlert, Cpu, Code2 } from 'lucide-react';
import { SEO } from '@/components/SEO';

export function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "CRODA AI Consulting",
    "description": "Secure Agentic AI Consulting & Certification | Quantum-Hardened AI Agents",
    "url": "https://croda-ai.com",
    "areaServed": "Worldwide",
    "founder": {
      "@type": "Person",
      "name": "CRODA",
      "jobTitle": "Seattle-based AI agent & quantum security consultant"
    }
  };

  return (
    <div className="flex flex-col w-full relative">
      <SEO 
        title="Secure Agentic AI Consulting & Certification | Quantum-Hardened AI Agents"
        description="Build, deploy, and harden secure agentic AI. Expert consulting and the Secure Agentic AI Practitioner certification for enterprise teams."
        schema={schema}
      />
      {/* Hero Section */}
      <section className="px-8 md:px-16 py-20 md:py-32 border-b border-gold/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
        
        <div className="max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 border border-gold/30 mb-8 shadow-[0_0_10px_rgba(245,196,0,0.2)]">
            <span className="w-2 h-2 bg-primary animate-pulse shadow-[0_0_8px_rgba(245,196,0,0.8)]" />
            <span className="text-xs font-mono text-gold uppercase tracking-widest">Enterprise AI Infrastructure</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold text-text-main leading-tight mb-6 tracking-widest uppercase cyber-glitch-text">
            Build, Deploy & Harden <br className="hidden md:block" />
            <span className="text-primary">Secure Agentic AI</span>
          </h1>
          
          <p className="text-lg text-text-muted mb-10 leading-relaxed max-w-2xl font-mono">
            Masterful AI education, secure agent creation, and quantum compute hardening for technical teams. We build precision tools and robust AI infrastructure security, not brochures.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Link to="/secure-agentic-ai-practitioner-certification" className="cyber-button px-8 py-4 text-sm font-bold flex items-center gap-2 group">
              Enroll in Certification
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/ai-agent-creation-consulting" className="font-mono text-sm uppercase tracking-widest text-secondary hover:text-primary transition-colors flex items-center gap-2">
              Explore Consulting
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="px-8 md:px-16 py-20">
        <div className="flex items-center justify-between mb-12 border-b border-gold/20 pb-4">
          <h2 className="text-2xl font-display font-bold text-text-main uppercase tracking-widest text-gold cyber-glitch-text">Core Capabilities</h2>
          <Link to="/ai-agent-creation-consulting" className="text-sm font-mono text-primary hover:text-text-main transition-colors flex items-center gap-1 uppercase tracking-widest">
            View All <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service Card 1 */}
          <div className="cyber-panel group p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
              <Terminal className="w-32 h-32 text-secondary" />
            </div>
            <div className="w-12 h-12 bg-charcoal border border-gold/30 flex items-center justify-center mb-6 group-hover:border-primary transition-colors shadow-[0_0_10px_rgba(245,196,0,0.1)]">
              <Terminal className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-display font-bold text-text-main mb-3 uppercase tracking-widest group-hover:text-primary transition-colors">AI Agent Creation & Agentic Deployment</h3>
            <p className="text-sm text-text-muted leading-relaxed mb-6 font-mono">
              Custom autonomous agents designed for your specific enterprise workflows. Built with strict boundaries and deployed securely.
            </p>
            <Link to="/ai-agent-creation-consulting" className="text-sm font-mono font-bold text-primary flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 uppercase tracking-widest">
              Explore Architecture <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Service Card 2 */}
          <div className="cyber-panel group p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
              <ShieldAlert className="w-32 h-32 text-secondary" />
            </div>
            <div className="w-12 h-12 bg-charcoal border border-gold/30 flex items-center justify-center mb-6 group-hover:border-primary transition-colors shadow-[0_0_10px_rgba(245,196,0,0.1)]">
              <ShieldAlert className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-display font-bold text-text-main mb-3 uppercase tracking-widest group-hover:text-primary transition-colors">Quantum Hardening for AI Infrastructure</h3>
            <p className="text-sm text-text-muted leading-relaxed mb-6 font-mono">
              NIST-aligned post-quantum cryptographic implementations and infrastructure hardening for high-stakes AI deployments.
            </p>
            <Link to="/ai-agent-creation-consulting" className="text-sm font-mono font-bold text-primary flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 uppercase tracking-widest">
              View Security Protocols <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Service Card 3 */}
          <div className="cyber-panel group p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
              <Cpu className="w-32 h-32 text-secondary" />
            </div>
            <div className="w-12 h-12 bg-charcoal border border-gold/30 flex items-center justify-center mb-6 group-hover:border-primary transition-colors shadow-[0_0_10px_rgba(245,196,0,0.1)]">
              <Cpu className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-display font-bold text-text-main mb-3 uppercase tracking-widest group-hover:text-primary transition-colors">AI Infrastructure Security Consulting</h3>
            <p className="text-sm text-text-muted leading-relaxed mb-6 font-mono">
              Scalable, monitored, and secure deployment pipelines for multi-agent systems. From local testing to cloud-native production.
            </p>
            <Link to="/ai-agent-creation-consulting" className="text-sm font-mono font-bold text-primary flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 uppercase tracking-widest">
              Deployment Specs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Service Card 4 */}
          <div className="cyber-panel group p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
              <Code2 className="w-32 h-32 text-secondary" />
            </div>
            <div className="w-12 h-12 bg-charcoal border border-gold/30 flex items-center justify-center mb-6 group-hover:border-primary transition-colors shadow-[0_0_10px_rgba(245,196,0,0.1)]">
              <Code2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-display font-bold text-text-main mb-3 uppercase tracking-widest group-hover:text-primary transition-colors">Web Application Refactor for AI Agents</h3>
            <p className="text-sm text-text-muted leading-relaxed mb-6 font-mono">
              Modernization of legacy interfaces into precision workspaces. High-performance React/Vite architectures with strict typing.
            </p>
            <Link to="/ai-agent-creation-consulting" className="text-sm font-mono font-bold text-primary flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 uppercase tracking-widest">
              Review Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="px-8 md:px-16 py-20 bg-charcoal-light border-y border-gold/20 relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(245,196,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,196,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="max-w-4xl relative z-10">
          <h2 className="text-2xl font-display font-bold text-text-main mb-8 uppercase tracking-widest text-gold cyber-glitch-text">Why Now in 2026</h2>
          <div className="space-y-6 text-text-muted leading-relaxed font-mono">
            <p>
              The era of experimental AI wrappers has ended. Mid-sized enterprises now require <strong className="text-primary font-bold">deterministic, secure, and deeply integrated agentic systems</strong>. 
            </p>
            <p>
              As quantum computing advances threaten traditional cryptographic standards, the infrastructure supporting these AI agents must be hardened today. CRODA AI bridges the gap between cutting-edge LLM capabilities and rigorous enterprise security standards.
            </p>
            <div className="cyber-panel p-6 mt-8 font-mono text-sm">
              <div className="flex items-center gap-2 text-success mb-4 border-b border-success/20 pb-2">
                <span className="w-2 h-2 bg-success animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
                <span className="uppercase tracking-widest">System Status: Ready for Deployment</span>
              </div>
              <div className="text-text-muted space-y-2">
                <div><span className="text-secondary mr-2">&gt;</span> Initialize quantum-safe protocols... <span className="text-success">[OK]</span></div>
                <div><span className="text-secondary mr-2">&gt;</span> Verify agent boundaries... <span className="text-success">[OK]</span></div>
                <div className="animate-pulse"><span className="text-secondary mr-2">&gt;</span> Awaiting command_</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
