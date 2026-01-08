import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Smartphone,
  Search,
  Rocket,
  Shield,
  CheckCircle,
} from "lucide-react";

const WhatYouGetAndHowFast = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast & Optimized",
      description: "Loads instantly and performs smoothly on all devices",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile-First Design",
      description: "Looks perfect on phones, tablets, and desktops",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "SEO Ready",
      description: "Built to be discoverable and rank on search engines",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Built to Convert",
      description: "Designed to turn visitors into real opportunities",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Reliable",
      description: "Protected, stable, and ready for real-world use",
    },
  ];

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-primary-background to-gray-900/40">
      <div className="container mx-auto max-w-6xl">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need.{" "}
            <span className="text-cyan-400">Delivered in 72 Hours.</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A complete, professional portfolio designed, built, and launched
            fast so you can start showing up confidently online.
          </p>
        </motion.div>

        {/* Value Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gray-800/30 border border-gray-700 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* 72-Hour Process (Ultra-Simple) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-8 p-10 rounded-2xl bg-gradient-to-r from-gray-800/40 to-gray-900/40 border border-cyan-500/20">
            <h3 className="text-2xl md:text-3xl font-bold">How It Works</h3>

            <div className="flex flex-col md:flex-row gap-6 md:gap-10 text-lg text-gray-200">
              {[
                "You share your details",
                "We design & build your portfolio",
                "Your site goes live in 72 hours",
              ].map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span>{step}</span>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/2348034910529?text=${encodeURIComponent(
                `Hi, I just came across your portfolio website offer.I’m interested in building a custom professional website and would like to claim the 50% discount slot. My name is`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-10 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
            >
              Get My Portfolio Website
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatYouGetAndHowFast;
