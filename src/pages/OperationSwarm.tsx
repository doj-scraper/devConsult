import React, { useState, useEffect } from 'react';
import { SEO } from '@/components/SEO';
import './OperationSwarm.css';

const DEFAULT_TOOLTIP = {
  label: '// HOVER A NODE TO INSPECT',
  body: 'Each agent in the swarm operates asynchronously, writing outputs to the shared coordination layer. Scrutineer gates all commits before Chronicler synthesizes the final artifact.'
};

export function OperationSwarm() {
  const [tooltip, setTooltip] = useState(DEFAULT_TOOLTIP);
  const [activeStage, setActiveStage] = useState(0);
  const [lockedNode, setLockedNode] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 6);
    }, 1400);
    return () => clearInterval(interval);
  }, []);

  const handleMouseEnter = (id: string, label: string, body: string) => {
    if (!lockedNode) {
      setTooltip({ label: `// ${label}`, body });
    }
  };

  const handleMouseLeave = () => {
    if (!lockedNode) {
      setTooltip(DEFAULT_TOOLTIP);
    }
  };

  const handleClick = (id: string, label: string, body: string) => {
    if (lockedNode === id) {
      setLockedNode(null);
      setTooltip(DEFAULT_TOOLTIP);
    } else {
      setLockedNode(id);
      setTooltip({ label: `// ${label} [ID: ${id}]`, body });
    }
  };

  return (
    <div className="swarm-container">
      <SEO 
        title="OPERATION SWARM // Agentic CI/CD Pipeline | CRODA AI"
        description="Interactive visualization of the OPERATION SWARM local agentic CI/CD documentation pipeline."
      />
      
      <div className="swarm-canvas">
        {/* HEADER */}
        <div className="swarm-header">
          <div className="swarm-header-left">
            <div className="swarm-sys-tag">SYSTEM_MAP // AGENTIC PIPELINE // ACTIVE</div>
            <h1>OPERATION <span>SWARM</span></h1>
            <div className="swarm-subtitle">Local Agentic CI/CD Documentation Pipeline</div>
          </div>
          <div className="swarm-header-right">
            <div className="swarm-version">v2.4.1-stable</div>
            <div>AGENTS: 5 // ASYNC</div>
            <div>SHARED_STATE: ENABLED</div>
            <div>OUTPUT: CASESTUDY.md</div>
            <div style={{ marginTop: '8px', color: 'rgba(255,42,42,0.6)' }}>⬤ PIPELINE RUNNING</div>
          </div>
        </div>

        {/* STAGE TRACK */}
        <div className="swarm-stage-track">
          <div className={`swarm-stage ${activeStage === 0 ? 'active' : ''}`}>00 // INPUT</div>
          <div className="swarm-stage-sep"></div>
          <div className={`swarm-stage ${activeStage === 1 ? 'active' : ''}`}>01 // DISPATCH</div>
          <div className="swarm-stage-sep"></div>
          <div className={`swarm-stage ${activeStage === 2 ? 'active' : ''}`}>02 // SWARM</div>
          <div className="swarm-stage-sep"></div>
          <div className={`swarm-stage ${activeStage === 3 ? 'active' : ''}`}>03 // SHARED_STATE</div>
          <div className="swarm-stage-sep"></div>
          <div className={`swarm-stage ${activeStage === 4 ? 'active' : ''}`}>04 // SYNTHESIS</div>
          <div className="swarm-stage-sep"></div>
          <div className={`swarm-stage ${activeStage === 5 ? 'active' : ''}`}>05 // ARTIFACT</div>
        </div>

        {/* PIPELINE */}
        <div className="swarm-pipeline">
          {/* NODE 0: INPUT */}
          <div className="swarm-col swarm-input-col">
            <div className="swarm-col-label">[ INPUT ]</div>
            <div 
              className={`swarm-input-node swarm-node ${lockedNode === 'NODE_00' ? 'locked' : ''}`}
              data-id="NODE_00"
              onClick={() => handleClick('NODE_00', 'INPUT // PROJECT_SUMMARY.txt', 'Raw project brief injected as seed prompt. Triggers the agent dispatch sequence.')}
              onMouseEnter={() => handleMouseEnter('NODE_00', 'INPUT // PROJECT_SUMMARY.txt', 'Raw project brief injected as seed prompt. Triggers the agent dispatch sequence.')}
              onMouseLeave={handleMouseLeave}
            >
              <span className="swarm-node-icon">📄</span>
              <div className="swarm-node-title">PROJECT_<br />SUMMARY</div>
              <div className="swarm-node-role red">.txt // SEED_INPUT</div>
              <div className="swarm-filename"><span className="swarm-blink-dot"></span>READING...</div>
              <div className="swarm-hex-data">
                0x4150 0x524F<br />
                0x4A45 0x4354<br />
                0x5F42 0x5249<br />
                0x4546 0x2E2E
              </div>
              <span className="swarm-node-tag red">TRIGGER</span>
            </div>
          </div>

          {/* CONNECTOR 1 */}
          <div className="swarm-connector">
            <svg viewBox="0 0 64 480" preserveAspectRatio="none">
              <line className="swarm-dash-line red" x1="32" y1="0" x2="32" y2="480"/>
              <polygon className="swarm-arrow-head red" points="32,460 26,440 38,440"/>
            </svg>
          </div>

          {/* SWARM NODES */}
          <div className="swarm-col swarm-swarm-col">
            <div className="swarm-col-label">[ AGENT SWARM // ASYNC EXECUTION ]</div>

            <div 
              className={`swarm-node ${lockedNode === 'AGT_01' ? 'locked' : ''}`}
              data-id="AGT_01"
              onClick={() => handleClick('AGT_01', 'WEAVER // Project Manager Agent', 'Decomposes project brief and assigns tasks to downstream agents.')}
              onMouseEnter={() => handleMouseEnter('AGT_01', 'WEAVER // Project Manager Agent', 'Decomposes project brief and assigns tasks to downstream agents.')}
              onMouseLeave={handleMouseLeave}
            >
              <span className="swarm-orbit-badge">↔ NAV</span>
              <span className="swarm-node-icon">🕸</span>
              <div className="swarm-node-title">WEAVER</div>
              <div className="swarm-node-role">PM Agent // Orchestrator</div>
              <div className="swarm-node-desc">Decomposes project brief and assigns tasks to downstream agents.</div>
              <span className="swarm-node-tag yellow">DISPATCH</span>
            </div>

            <div 
              className={`swarm-node ${lockedNode === 'AGT_02' ? 'locked' : ''}`}
              data-id="AGT_02"
              onClick={() => handleClick('AGT_02', 'NAVIGATOR // Architecture Agent', 'Analyzes system topology and validates technical stack decisions.')}
              onMouseEnter={() => handleMouseEnter('AGT_02', 'NAVIGATOR // Architecture Agent', 'Analyzes system topology and validates technical stack decisions.')}
              onMouseLeave={handleMouseLeave}
            >
              <span className="swarm-orbit-badge">↔ WVR</span>
              <span className="swarm-node-icon">🧭</span>
              <div className="swarm-node-title">NAVIGATOR</div>
              <div className="swarm-node-role">Architecture Agent</div>
              <div className="swarm-node-desc">Analyzes system topology and validates technical stack decisions.</div>
              <span className="swarm-node-tag yellow">ARCHITECTURE</span>
            </div>

            <div 
              className={`swarm-node red-accent ${lockedNode === 'AGT_03' ? 'locked' : ''}`}
              data-id="AGT_03"
              onClick={() => handleClick('AGT_03', 'SCRUTINEER // QA Agent', 'Reviews all agent outputs and runs contradiction checks before commit.')}
              onMouseEnter={() => handleMouseEnter('AGT_03', 'SCRUTINEER // QA Agent', 'Reviews all agent outputs and runs contradiction checks before commit.')}
              onMouseLeave={handleMouseLeave}
            >
              <span className="swarm-orbit-badge">↔ ALL</span>
              <span className="swarm-node-icon">🔬</span>
              <div className="swarm-node-title">SCRUTINEER</div>
              <div className="swarm-node-role red">QA Agent // Gatekeeper</div>
              <div className="swarm-node-desc">Reviews all agent outputs and runs contradiction checks before commit.</div>
              <span className="swarm-node-tag red">QA_GATE</span>
            </div>

            <div 
              className={`swarm-node ${lockedNode === 'AGT_04' ? 'locked' : ''}`}
              data-id="AGT_04"
              onClick={() => handleClick('AGT_04', 'LEDGER // Data Agent', 'Extracts metrics and schemas into machine-readable JSON fragments.')}
              onMouseEnter={() => handleMouseEnter('AGT_04', 'LEDGER // Data Agent', 'Extracts metrics and schemas into machine-readable JSON fragments.')}
              onMouseLeave={handleMouseLeave}
            >
              <span className="swarm-node-icon">📊</span>
              <div className="swarm-node-title">LEDGER</div>
              <div className="swarm-node-role">Data Agent</div>
              <div className="swarm-node-desc">Extracts metrics and schemas into machine-readable JSON fragments.</div>
              <span className="swarm-node-tag yellow">DATA_EXTRACT</span>
            </div>

            <div 
              className={`swarm-node red-accent ${lockedNode === 'AGT_05' ? 'locked' : ''}`}
              data-id="AGT_05"
              onClick={() => handleClick('AGT_05', 'CHRONICLER // Synthesis Agent', 'Synthesizes shared state data into the final CASESTUDY.md artifact.')}
              onMouseEnter={() => handleMouseEnter('AGT_05', 'CHRONICLER // Synthesis Agent', 'Synthesizes shared state data into the final CASESTUDY.md artifact.')}
              onMouseLeave={handleMouseLeave}
            >
              <span className="swarm-node-icon">📜</span>
              <div className="swarm-node-title">CHRONICLER</div>
              <div className="swarm-node-role red">Synthesis Agent // Final</div>
              <div className="swarm-node-desc">Synthesizes shared state data into the final CASESTUDY.md artifact.</div>
              <span className="swarm-node-tag red">TERMINAL</span>
            </div>
          </div>

          {/* CONNECTOR 2 */}
          <div className="swarm-connector">
            <svg viewBox="0 0 64 480" preserveAspectRatio="none">
              <line className="swarm-dash-line" x1="32" y1="0" x2="32" y2="480"/>
              <polygon className="swarm-arrow-head" points="32,460 26,440 38,440"/>
            </svg>
          </div>

          {/* SHARED STATE */}
          <div className="swarm-col swarm-state-col">
            <div className="swarm-col-label">[ SHARED STATE ]</div>
            <div 
              className={`swarm-node swarm-state-node ${lockedNode === 'SHR_STATE' ? 'locked' : ''}`}
              data-id="SHR_STATE"
              onClick={() => handleClick('SHR_STATE', 'SHARED_STATE // Coordination Layer', 'Central coordination bus. Persistent memory for asynchronous agent read/writes.')}
              onMouseEnter={() => handleMouseEnter('SHR_STATE', 'SHARED_STATE // Coordination Layer', 'Central coordination bus. Persistent memory for asynchronous agent read/writes.')}
              onMouseLeave={handleMouseLeave}
            >
              <span className="swarm-node-icon">🗄</span>
              <div className="swarm-node-title">SHARED<br />STATE</div>
              <div className="swarm-node-role">coordination.js</div>
              <div className="swarm-node-desc">Central async bus. Agents read/write concurrently via defined contracts.</div>
              <div className="swarm-state-files">
                <div className="swarm-state-file">BACKENDREPORT.md</div>
                <div className="swarm-state-file">FRONTENDREPORT.md</div>
                <div className="swarm-state-file">ARCHITECTURE.md</div>
                <div className="swarm-state-file">AGENTS.md</div>
                <div className="swarm-state-file">metrics.json</div>
              </div>
              <span className="swarm-node-tag yellow">PERSISTENT</span>
            </div>
          </div>

          {/* CONNECTOR 3 */}
          <div className="swarm-connector">
            <svg viewBox="0 0 64 480" preserveAspectRatio="none">
              <line className="swarm-dash-line" x1="32" y1="0" x2="32" y2="480"/>
              <polygon className="swarm-arrow-head" points="32,460 26,440 38,440"/>
            </svg>
          </div>

          {/* OUTPUT */}
          <div className="swarm-col swarm-output-col">
            <div className="swarm-col-label">[ ARTIFACT ]</div>
            <div 
              className={`swarm-node swarm-output-node ${lockedNode === 'OUT_01' ? 'locked' : ''}`}
              data-id="OUT_01"
              onClick={() => handleClick('OUT_01', 'OUTPUT // CASESTUDY.md', 'Final deterministic artifact. Agent-confirmed and ready for RAG ingestion.')}
              onMouseEnter={() => handleMouseEnter('OUT_01', 'OUTPUT // CASESTUDY.md', 'Final deterministic artifact. Agent-confirmed and ready for RAG ingestion.')}
              onMouseLeave={handleMouseLeave}
            >
              <span className="swarm-node-icon">📋</span>
              <div className="swarm-node-title">CASESTUDY<br />.md</div>
              <div className="swarm-node-role">Chronicler Output</div>
              <div className="swarm-node-desc">Final artifact. Agent-confirmed. RAG-ready.</div>
              <div className="swarm-scroll-stream">
                <div className="swarm-scroll-inner">
                  # Project Overview<br />
                  ## Tech Stack<br />
                  ## Architecture<br />
                  ## Agent Log<br />
                  ## QA Sign-off<br />
                  ## Dependencies<br />
                  ## Decisions<br />
                  # Project Overview<br />
                  ## Tech Stack<br />
                  ## Architecture<br />
                  ## Agent Log<br />
                  ## QA Sign-off<br />
                  ## Dependencies<br />
                  ## Decisions<br />
                </div>
              </div>
              <span className="swarm-node-tag yellow">COMMITTED</span>
            </div>
          </div>
        </div>{/* /pipeline */}

        {/* TOOLTIP PANEL */}
        <div className="swarm-tooltip-panel" id="tooltipPanel">
          <div className="swarm-tooltip-content" id="tooltipContent">
            <span className="swarm-label">{tooltip.label}</span>
            {tooltip.body}
          </div>
        </div>

        {/* LEGEND */}
        <div className="swarm-legend">
          <div className="swarm-legend-item">
            <div className="swarm-legend-line red"></div>
            INPUT STREAM
          </div>
          <div className="swarm-legend-item">
            <div className="swarm-legend-line"></div>
            ASYNC COMM STREAM
          </div>
          <div className="swarm-legend-item">
            <div className="swarm-legend-dot"></div>
            SHARED_STATE WRITE
          </div>
          <div className="swarm-legend-item">
            <div className="swarm-legend-dot red"></div>
            QA_GATE / TERMINAL
          </div>
          <div className="swarm-legend-item" style={{ marginLeft: 'auto', color: 'rgba(245,196,0,0.4)', fontSize: '9px' }}>
            CLICK NODES TO LOCK DETAIL ↑
          </div>
        </div>

        {/* FOOTER */}
        <div className="swarm-footer">
          <div>SYS // OPERATION_SWARM // LOCAL_AGENTIC_PIPELINE</div>
          <div>AGENTS.md // coordination.js // BACKENDREPORT.md</div>
          <div className="swarm-footer-sig">BUILT BY CHRIS // DUAL-REPO RAG ORCHESTRATION SYSTEM</div>
        </div>

      </div>{/* /canvas */}
    </div>
  );
}
