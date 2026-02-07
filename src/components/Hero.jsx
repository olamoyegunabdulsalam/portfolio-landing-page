// components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-300">
                Limited Time Offer
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Professional Portfolio
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                That Converts Visitors
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Stop losing opportunities. Get a custom, high-converting portfolio
              website that establishes{" "}
              <span className="font-semibold text-cyan-300">credibility</span>,
              builds <span className="font-semibold text-cyan-300">trust</span>,
              and attracts{" "}
              <span className="font-semibold text-cyan-300">
                premium clients
              </span>
              .
            </p>

            {/* Benefit Points */}
            <div className="space-y-3 mb-8">
              {[
                "100% Custom Design",
                "Mobile-Optimized",
                "SEO Ready",
                "Fast Loading",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-2">
                  <a
                    href={`https://wa.link/d1eedz`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get My Portfolio Website
                  </a>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.button>

              <button
                onClick={() => {
                  // Meta Pixel Event
                  if (window.fbq) {
                    window.fbq("track", "ViewContent");
                  }

                  // Scroll to portfolio section
                  const portfolioSection = document.getElementById("portfolio");
                  portfolioSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 rounded-lg border-2 border-cyan-500/30 text-cyan-300 font-semibold hover:bg-cyan-500/10 transition-all duration-300 cursor-pointer"
              >
                See Created Portfolio
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-gray-700/50">
              <p className="text-gray-400 text-sm mb-4">
                Trusted by professionals worldwide
              </p>
              <div className="flex flex-wrap items-center gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span>30+ Happy Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    <span className="text-xs font-bold">★</span>
                  </div>
                  <span>4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
              {/* Mockup browser window */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="h-8 bg-gray-800 flex items-center px-4 border-b border-gray-700">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                {/* Animated portfolio preview */}
                <div className="p-6">
                  <div className="animate-pulse bg-gradient-to-r from-cyan-500/20 to-transparent h-4 w-3/4 rounded mb-4"></div>
                  <div className="animate-pulse bg-gradient-to-r from-cyan-500/10 to-transparent h-4 w-1/2 rounded mb-8"></div>
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-32 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg"
                      ></div>
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 h-8 w-1/3 rounded"></div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl rotate-12 shadow-xl flex items-center justify-center"
              >
                <span className="text-lg font-bold">NEW</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-cyan-500/30 to-transparent rounded-full"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
