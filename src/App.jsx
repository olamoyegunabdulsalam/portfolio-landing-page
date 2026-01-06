// App.jsx
import React from "react";
import Hero from "./components/Hero";
import WhoFor from "./components/WhoFor";
import WhatYouGetAndHowFast from "./components/WhatYouGetAndHowFast";
import Portfolio from "./components/Portfolio";
import WhyPortfolio from "./components/WhyPortfolio";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PromoOffer from "./components/PromoOffer";

function App() {
  return (
    <div className="bg-primary-background text-white font-sans overflow-hidden">
      {/* Subtle noise/grain overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-10">
        <Hero />
        <WhoFor />
        <WhatYouGetAndHowFast />
        <Portfolio />
        <WhyPortfolio />
        <PromoOffer />
        <Testimonials />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
