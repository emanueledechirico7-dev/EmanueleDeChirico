import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;