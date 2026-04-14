/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Certification } from './pages/Certification';
import { Services } from './pages/Services';
import { Capstones } from './pages/Capstones';
import { OperationSwarm } from './pages/OperationSwarm';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="secure-agentic-ai-practitioner-certification" element={<Certification />} />
            <Route path="certification" element={<Certification />} />
            <Route path="services/*" element={<Services />} />
            <Route path="ai-agent-creation-consulting" element={<Services />} />
            <Route path="capstone-projects" element={<Capstones />} />
            {/* Fallback for other routes */}
            <Route path="*" element={<Home />} />
          </Route>
          {/* Standalone route for Operation Swarm (no standard layout) */}
          <Route path="/operation-swarm" element={<OperationSwarm />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}
