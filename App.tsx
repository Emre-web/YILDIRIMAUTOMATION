
import React from 'react';
import { Hero } from './components/Hero';
import { Expertise } from './components/Expertise';
import { TechStack } from './components/TechStack';
import { Solutions } from './components/Solutions';
import { CTASection } from './components/CTASection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-purple-500/30">
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <TechStack />
        <Solutions />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
