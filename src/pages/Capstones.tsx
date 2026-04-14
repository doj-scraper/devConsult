import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Database, Server, Cpu, Network } from 'lucide-react';
import { SEO } from '@/components/SEO';

export function Capstones() {
  return (
    <div className="flex flex-col w-full relative">
      <SEO 
        title="Secure AI Agent Capstone Projects | Agentic Deployment & Quantum Hardening Examples"
        description="Explore real-world capstone projects from our Secure Agentic AI Practitioner certification. See examples of agentic deployment and quantum compute hardening."
      />
      
      {/* Breadcrumbs */}
      <div className="px-8 md:px-16 py-6 border-b border-gold/20 flex items-center gap-2 text-xs font-mono uppercase tracking-widest bg-charcoal-light relative z-10">
        <Link to="/" className="text-text-muted hover:text-primary transition-colors">Home</Link>
        <span className="text-gold">/</span>
        <span className="text-text-muted">Training</span>
        <span className="text-gold">/</span>
        <span className="text-primary">Capstone Projects</span>
      </div>

      {/* Hero */}
      <section className="px-8 md:px-16 py-16 border-b border-gold/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(245,196,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,196,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="max-w-3xl relative z-10">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-text-main leading-tight mb-6 uppercase tracking-widest cyber-glitch-text">
            Secure AI Agent Capstone Projects
          </h1>
          <p className="text-lg text-text-muted mb-8 leading-relaxed font-mono">
            Real-world implementations built by our certified practitioners. These projects demonstrate mastery of secure agent creation, web application refactoring, and post-quantum cryptography.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-8 md:px-16 py-16 relative z-10">
        <div className="grid grid-cols-1 gap-12">
          
          {/* Project 1: Operation Swarm */}
          <div className="cyber-panel overflow-hidden flex flex-col lg:flex-row">
            <div className="p-8 lg:w-1/2 border-b lg:border-b-0 lg:border-r border-gold/20">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 border border-gold/30 mb-6 shadow-[0_0_10px_rgba(245,196,0,0.1)]">
                <Network className="w-4 h-4 text-gold" />
                <span className="text-xs font-mono text-gold uppercase tracking-widest">Agentic CI/CD</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-text-main mb-4 uppercase tracking-widest">OPERATION SWARM // Local Agentic CI/CD Pipeline</h2>
              <p className="text-sm text-text-muted leading-relaxed mb-6 font-mono">
                An interactive visualization of a multi-agent orchestration system. This project demonstrates asynchronous agent communication, shared state management, and automated artifact synthesis for CI/CD documentation.
              </p>
              <Link to="/operation-swarm" className="text-sm font-mono font-bold text-primary flex items-center gap-2 hover:text-text-main transition-colors uppercase tracking-widest">
                View Interactive Pipeline <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="p-8 lg:w-1/2 bg-charcoal flex flex-col justify-center items-center relative overflow-hidden">
               <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
               <div className="w-full max-w-sm aspect-video bg-charcoal-light border border-gold/30 relative overflow-hidden group shadow-[0_0_20px_rgba(245,196,0,0.1)]">
                 <div className="absolute inset-0 flex items-center justify-center relative z-10">
                   <div className="flex gap-4 items-center">
                     <div className="w-12 h-12 border border-gold/50 bg-gold/10 flex items-center justify-center shadow-[0_0_15px_rgba(245,196,0,0.2)]">
                       <Network className="w-6 h-6 text-gold" />
                     </div>
                     <div className="w-16 h-px bg-gold/50 border-t border-dashed border-gold/50"></div>
                     <div className="w-12 h-12 border border-secondary/50 bg-secondary/10 flex items-center justify-center shadow-[0_0_15px_rgba(255,42,42,0.2)]">
                       <ShieldCheck className="w-6 h-6 text-secondary" />
                     </div>
                   </div>
                 </div>
               </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="cyber-panel overflow-hidden flex flex-col lg:flex-row-reverse">
            <div className="p-8 lg:w-1/2 border-b lg:border-b-0 lg:border-l border-gold/20">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 border border-gold/30 mb-6 shadow-[0_0_10px_rgba(245,196,0,0.1)]">
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span className="text-xs font-mono text-gold uppercase tracking-widest">Enterprise Security</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-text-main mb-4 uppercase tracking-widest">Secure Autonomous IT Helpdesk Agent</h2>
              <p className="text-sm text-text-muted leading-relaxed mb-6 font-mono">
                A complete overhaul of a legacy IT ticketing system. The new architecture features a React/Vite frontend interacting with a deterministic AI agent that resolves tier-1 tickets autonomously while enforcing strict RBAC.
              </p>
              <Link to="/secure-agentic-ai-practitioner-certification" className="text-sm font-mono font-bold text-primary flex items-center gap-2 hover:text-text-main transition-colors uppercase tracking-widest">
                Learn to build this <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="p-8 lg:w-1/2 bg-charcoal flex flex-col justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
               <div className="bg-charcoal-light border border-gold/30 relative shadow-[0_0_20px_rgba(245,196,0,0.1)] z-10">
                <div className="flex items-center justify-between px-4 py-2 bg-charcoal border-b border-gold/20">
                  <span className="text-xs font-mono text-text-muted uppercase tracking-widest">security_config.ts</span>
                </div>
                <div className="p-6 overflow-x-auto">
                  <pre className="text-sm font-mono leading-relaxed">
                    <code className="text-text-main">
<span className="text-secondary">import</span> {'{'} Kyber768 {'}'} <span className="text-secondary">from</span> <span className="text-success">'@croda/pqc'</span>;<br/>
<br/>
<span className="text-secondary">export const</span> secureAgentChannel = <span className="text-primary">async</span> (payload) =&gt; {'{'}<br/>
&nbsp;&nbsp;<span className="text-text-muted">// Initialize post-quantum cryptography</span><br/>
&nbsp;&nbsp;<span className="text-secondary">const</span> cipher = <span className="text-primary">new</span> Kyber768();<br/>
&nbsp;&nbsp;<span className="text-secondary">const</span> encryptedPayload = <span className="text-primary">await</span> cipher.encrypt(payload);<br/>
<br/>
&nbsp;&nbsp;<span className="text-primary">return</span> api.post(<span className="text-success">'/agent/execute'</span>, encryptedPayload);<br/>
{'}'};
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="cyber-panel overflow-hidden flex flex-col lg:flex-row">
            <div className="p-8 lg:w-1/2 border-b lg:border-b-0 lg:border-r border-gold/20">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 border border-gold/30 mb-6 shadow-[0_0_10px_rgba(245,196,0,0.1)]">
                <Database className="w-4 h-4 text-gold" />
                <span className="text-xs font-mono text-gold uppercase tracking-widest">Data Aggregation</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-text-main mb-4 uppercase tracking-widest">Financial Research Agent with Secure Enclave Deployment</h2>
              <p className="text-sm text-text-muted leading-relaxed mb-6 font-mono">
                An agentic system designed to aggregate and synthesize sensitive financial data. Deployed within a secure enclave, ensuring that even infrastructure administrators cannot access the unencrypted data or prompts.
              </p>
              <Link to="/ai-agent-creation-consulting" className="text-sm font-mono font-bold text-primary flex items-center gap-2 hover:text-text-main transition-colors uppercase tracking-widest">
                Consult with us on deployment <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="p-8 lg:w-1/2 bg-charcoal flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between p-4 bg-charcoal-light border border-gold/20 shadow-[0_0_10px_rgba(245,196,0,0.05)]">
                  <div className="flex items-center gap-3">
                    <Server className="w-5 h-5 text-primary" />
                    <span className="text-sm font-display font-bold text-text-main uppercase tracking-widest">Data Ingestion Pipeline</span>
                  </div>
                  <span className="text-[10px] font-mono text-success border border-success/30 px-2 py-1 uppercase tracking-widest shadow-[0_0_8px_rgba(74,222,128,0.2)]">Encrypted</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-charcoal-light border border-gold/20 shadow-[0_0_10px_rgba(245,196,0,0.05)]">
                  <div className="flex items-center gap-3">
                    <Cpu className="w-5 h-5 text-primary" />
                    <span className="text-sm font-display font-bold text-text-main uppercase tracking-widest">Agentic Reasoning Engine</span>
                  </div>
                  <span className="text-[10px] font-mono text-success border border-success/30 px-2 py-1 uppercase tracking-widest shadow-[0_0_8px_rgba(74,222,128,0.2)]">Isolated</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
