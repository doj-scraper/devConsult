import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Shield, Zap, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SEO } from '@/components/SEO';

export function Services() {
  const [activeTab, setActiveTab] = useState('architecture');

  return (
    <div className="flex flex-col w-full relative">
      <SEO 
        title="AI Agent Creation & Agentic Deployment Consulting | CRODA AI"
        description="Expert consulting for secure AI agent creation, agentic deployment, and quantum compute hardening. Build deterministic, enterprise-grade AI infrastructure."
      />
      {/* Breadcrumbs */}
      <div className="px-8 md:px-16 py-6 border-b border-gold/20 flex items-center gap-2 text-xs font-mono uppercase tracking-widest bg-charcoal-light relative z-10">
        <Link to="/" className="text-text-muted hover:text-primary transition-colors">Home</Link>
        <span className="text-gold">/</span>
        <span className="text-text-muted">Services</span>
        <span className="text-gold">/</span>
        <span className="text-primary">AI Agent Creation</span>
      </div>

      {/* Hero */}
      <section className="px-8 md:px-16 py-16 border-b border-gold/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(245,196,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,196,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="max-w-3xl relative z-10">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-text-main leading-tight mb-6 uppercase tracking-widest cyber-glitch-text">
            AI Agent Creation & Agentic Deployment Consulting
          </h1>
          <p className="text-lg text-text-muted mb-8 leading-relaxed font-mono">
            We engineer custom autonomous agents designed for specific enterprise workflows. Built with strict boundaries, deterministic outputs, and seamless integration into your existing infrastructure.
          </p>
          <button className="cyber-button">
            Request Architecture Review
          </button>
        </div>
      </section>

      {/* Modular Tabs */}
      <section className="px-8 md:px-16 py-12 relative z-10">
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-gold/20 pb-4">
          <button 
            onClick={() => setActiveTab('architecture')}
            className={cn(
              "px-4 py-2 text-sm font-mono font-bold uppercase tracking-widest transition-colors flex items-center gap-2 border",
              activeTab === 'architecture' ? "bg-charcoal text-primary border-primary/50 shadow-[0_0_10px_rgba(245,196,0,0.1)]" : "border-transparent text-text-muted hover:text-text-main hover:border-gold/20"
            )}
          >
            <Terminal className="w-4 h-4" /> Architecture
          </button>
          <button 
            onClick={() => setActiveTab('security')}
            className={cn(
              "px-4 py-2 text-sm font-mono font-bold uppercase tracking-widest transition-colors flex items-center gap-2 border",
              activeTab === 'security' ? "bg-charcoal text-secondary border-secondary/50 shadow-[0_0_10px_rgba(255,42,42,0.1)]" : "border-transparent text-text-muted hover:text-text-main hover:border-gold/20"
            )}
          >
            <Shield className="w-4 h-4" /> Security Boundaries
          </button>
          <button 
            onClick={() => setActiveTab('performance')}
            className={cn(
              "px-4 py-2 text-sm font-mono font-bold uppercase tracking-widest transition-colors flex items-center gap-2 border",
              activeTab === 'performance' ? "bg-charcoal text-success border-success/50 shadow-[0_0_10px_rgba(74,222,128,0.1)]" : "border-transparent text-text-muted hover:text-text-main hover:border-gold/20"
            )}
          >
            <Zap className="w-4 h-4" /> Performance Metrics
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Tab Content */}
          <div className="space-y-6 cyber-panel p-8">
            {activeTab === 'architecture' && (
              <>
                <h3 className="text-xl font-display font-bold text-text-main uppercase tracking-widest">Deterministic Agent Architecture</h3>
                <p className="text-sm font-mono text-text-muted leading-relaxed">
                  Our agents are built on a deterministic state machine model, ensuring predictable behavior even in complex scenarios. We utilize specialized small language models (SLMs) for routing and massive LLMs only when deep reasoning is required.
                </p>
                <ul className="space-y-3 text-sm font-mono text-text-muted">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span><strong className="text-text-main">State-Driven Execution:</strong> Agents operate within strictly defined states, preventing hallucinated actions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span><strong className="text-text-main">Tool-Use Sandboxing:</strong> All external API calls are routed through a secure, rate-limited gateway.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span><strong className="text-text-main">Memory Management:</strong> Vector databases with automatic context pruning to maintain relevance and reduce token costs.</span>
                  </li>
                </ul>
              </>
            )}
            
            {activeTab === 'security' && (
              <>
                <h3 className="text-xl font-display font-bold text-text-main uppercase tracking-widest">Strict Security Boundaries</h3>
                <p className="text-sm font-mono text-text-muted leading-relaxed">
                  Security is not an afterthought. Every agent is deployed with zero-trust principles, requiring explicit authorization for every action it takes on behalf of a user.
                </p>
                <ul className="space-y-3 text-sm font-mono text-text-muted">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span><strong className="text-text-main">RBAC Integration:</strong> Agents inherit the exact permissions of the user invoking them.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span><strong className="text-text-main">Prompt Injection Defense:</strong> Multi-layered input sanitization and intent verification before execution.</span>
                  </li>
                </ul>
              </>
            )}

            {activeTab === 'performance' && (
              <>
                <h3 className="text-xl font-display font-bold text-text-main uppercase tracking-widest">Optimized for Speed & Cost</h3>
                <p className="text-sm font-mono text-text-muted leading-relaxed">
                  We engineer our systems to minimize latency and token usage, ensuring your AI infrastructure scales efficiently.
                </p>
                <ul className="space-y-3 text-sm font-mono text-text-muted">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-success shrink-0 mt-0.5" />
                    <span><strong className="text-text-main">Semantic Caching:</strong> 40% reduction in API calls for common queries.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-success shrink-0 mt-0.5" />
                    <span><strong className="text-text-main">Streaming Responses:</strong> Sub-500ms Time-To-First-Token (TTFT) for user-facing agents.</span>
                  </li>
                </ul>
              </>
            )}
          </div>

          {/* Code Snippet Area */}
          <div className="bg-charcoal border border-gold/30 relative shadow-[0_0_20px_rgba(245,196,0,0.1)] z-10 cyber-panel">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-gold to-secondary" />
            <div className="flex items-center justify-between px-4 py-2 bg-charcoal-light border-b border-gold/20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 border border-secondary/50 bg-secondary/20" />
                <div className="w-3 h-3 border border-primary/50 bg-primary/20" />
                <div className="w-3 h-3 border border-success/50 bg-success/20" />
              </div>
              <span className="text-xs font-mono text-text-muted uppercase tracking-widest">agent_config.yaml</span>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="text-sm font-mono leading-relaxed">
                <code className="text-text-main">
<span className="text-secondary">name:</span> <span className="text-success">"Enterprise_Support_Agent"</span><br/>
<span className="text-secondary">version:</span> <span className="text-success">"2.4.0"</span><br/>
<br/>
<span className="text-secondary">security:</span><br/>
&nbsp;&nbsp;<span className="text-secondary">level:</span> <span className="text-success">"strict"</span><br/>
&nbsp;&nbsp;<span className="text-secondary">quantum_safe:</span> <span className="text-primary">true</span><br/>
&nbsp;&nbsp;<span className="text-secondary">allowed_tools:</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;- <span className="text-success">"jira_read_only"</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;- <span className="text-success">"confluence_search"</span><br/>
<br/>
<span className="text-secondary">execution:</span><br/>
&nbsp;&nbsp;<span className="text-secondary">max_steps:</span> <span className="text-primary">15</span><br/>
&nbsp;&nbsp;<span className="text-secondary">timeout_ms:</span> <span className="text-primary">30000</span><br/>
&nbsp;&nbsp;<span className="text-secondary">fallback_model:</span> <span className="text-success">"gemini-3.1-flash"</span><br/>
<br/>
<span className="text-text-muted"># Secure line established</span><br/>
<span className="text-gold"># Signature: 0x8F9A...3B2C (Kyber-768)</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Link Section */}
      <section className="px-8 md:px-16 py-12 bg-charcoal border-t border-gold/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
        <div className="max-w-3xl flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 cyber-panel p-8">
          <div>
            <h3 className="text-lg font-display font-bold text-text-main mb-2 uppercase tracking-widest">Want to build this yourself?</h3>
            <p className="text-sm font-mono text-text-muted">Turn education into certified skills with our Secure Agentic AI Practitioner program.</p>
          </div>
          <Link to="/secure-agentic-ai-practitioner-certification" className="text-secondary hover:text-secondary/80 text-sm font-mono font-bold transition-colors flex items-center gap-2 whitespace-nowrap uppercase tracking-widest">
            View Certification <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
