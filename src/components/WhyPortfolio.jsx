// components/WhyPortfolio.jsx
import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, Target } from "lucide-react";

const WhyPortfolio = () => {
  const stats = [
    { icon: <TrendingUp />, value: "74%", label: "More job offers" },
    { icon: <Users />, value: "3x", label: "More clients" },
    { icon: <DollarSign />, value: "40%", label: "Higher rates" },
    { icon: <Target />, value: "12%", label: "Conversion rate" },
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why a Professional Portfolio{" "}
              <span className="text-cyan-400">Matters</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              In today's digital world, your online presence is your business
              card, your storefront, and your sales team - all in one.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Builds Instant Credibility</h4>
                  <p className="text-gray-400">
                    A professional portfolio establishes trust before you even
                    meet clients.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Attracts Premium Clients</h4>
                  <p className="text-gray-400">
                    Quality presentation attracts quality clients willing to pay
                    premium rates.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Works 24/7</h4>
                  <p className="text-gray-400">
                    Your portfolio continues to attract and convert while you
                    sleep.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-cyan-500/20"
              >
                <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4 text-cyan-400">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyPortfolio;
