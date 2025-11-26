import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Process } from './components/Process';
import { Results } from './components/Results';
import { Audience } from './components/Audience';
import { About } from './components/About';
import { Benefits } from './components/Benefits';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream font-sans text-slate-900">
      <Header />
      <main>
        <Hero />
        <Results />
        <About />
        <Process />
        <Audience />
        <Benefits />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;