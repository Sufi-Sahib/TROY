import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TokenSale } from './components/TokenSale';
import { Ecosystem } from './components/Ecosystem';
import { Roadmap } from './components/Roadmap';
import { Team } from './components/Team';
import { TokenDistribution } from './components/TokenDistribution';
import { Exchanges } from './components/Exchanges';
import { Community } from './components/Community';
import { Footer } from './components/Footer';
import { UpArrowIcon } from './components/Icons';

declare var WOW: any;

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 h-12 w-12 flex items-center justify-center rounded-full bg-[#64FFDA] text-[#020C1B] transition-all duration-300 hover:bg-opacity-80 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-label="Scroll to top"
    >
      <UpArrowIcon className="w-6 h-6" />
    </button>
  );
};


const App: React.FC = () => {
  useEffect(() => {
    if (typeof WOW !== 'undefined') {
      new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
      }).init();
    }
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#020C1B] text-white">
      <div className="absolute top-0 left-0 w-full h-[1200px] bg-[radial-gradient(ellipse_at_top,_rgba(100,255,218,0.1)_0%,_rgba(2,12,27,0)_40%)] z-0"></div>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <TokenSale />
          <Ecosystem />
          <Roadmap />
          <Team />
          <TokenDistribution />
          <Exchanges />
          <Community />
        </main>
        <Footer />
      </div>
       <ScrollToTopButton />
    </div>
  );
};

export default App;