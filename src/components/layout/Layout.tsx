import type { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout(): ReactElement {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      
      {/* Centered Content Container */}
      <main className="flex-1 w-full max-w-[1180px] mx-auto bg-charcoal-light shadow-[0_0_30px_rgba(0,0,0,0.8)] border-x border-b border-gold/20 min-h-[calc(100vh-80px)] relative z-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
