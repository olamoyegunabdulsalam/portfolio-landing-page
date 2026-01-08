// components/Portfolio.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Eye, TrendingUp, Users } from "lucide-react";

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: "STR Manager & Guest Experience Specialist",
      niche: "STR Manager",
      description:
        "Increased client inquiries by 240% with a visually stunning showcase",
      results: "3x more leads",
      imageColor: "from-purple-600 to-pink-600",
      stats: {
        leads: "+240%",
        engagement: "+180%",
      },
      demoUrl: "https://abdulbasit-portfolio-wrbr.vercel.app/",
    },
    {
      id: 2,
      title: "Tech Consultant Platform",
      niche: "IT Consulting",
      description: "Converted 35% more visitors into consultation bookings",
      results: "Higher conversion rate",
      imageColor: "from-blue-600 to-cyan-600",
      stats: {
        leads: "+35%",
        engagement: "+120%",
      },
      demoUrl: "https://it-consultant-rho.vercel.app/",
    },
    {
      id: 3,
      title: "Freelance Designer Hub",
      niche: "UI/UX Design",
      description:
        "Landed 6-figure contracts through premium portfolio presentation",
      results: "Premium clients",
      imageColor: "from-green-600 to-emerald-600",
      stats: {
        leads: "+300%",
        engagement: "+150%",
      },
      demoUrl: "https://design-hub-teal.vercel.app/",
    },
    {
      id: 4,
      title: "Business Coach Website",
      niche: "Coaching",
      description: "Tripled email list growth and booking rate within 30 days",
      results: "3x faster growth",
      imageColor: "from-orange-600 to-amber-600",
      stats: {
        leads: "+200%",
        engagement: "+220%",
      },
      demoUrl: "https://elevate-coaching-eosin.vercel.app/",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-900/50 to-primary-background"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Portfolio <span className="text-cyan-400">Showcase</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how professional portfolios transform businesses and careers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative overflow-hidden rounded-2xl bg-gray-800/30 border border-gray-700 hover:border-cyan-500/30 transition-all duration-500"
            >
              {/* Image/Visual Container */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.imageColor} opacity-90`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 p-6">
                      {/* Mock website preview */}
                      <div className="h-4 w-3/4 bg-white/30 rounded mb-4"></div>
                      <div className="h-3 w-1/2 bg-white/20 rounded mb-6"></div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-20 bg-white/20 rounded"></div>
                        <div className="h-20 bg-white/20 rounded"></div>
                        <div className="h-20 bg-white/20 rounded"></div>
                        <div className="h-20 bg-white/20 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={false}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  className="absolute inset-0 bg-black/70 flex items-center justify-center"
                ></motion.div>

                {/* Result Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {item.results}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-700/50 text-cyan-300 text-sm">
                      {item.niche}
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>

                <p className="text-gray-300 mb-6">{item.description}</p>

                {/* Stats */}
                <div className="flex gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-gray-300">
                      Leads:{" "}
                      <span className="font-bold text-white">
                        {item.stats.leads}
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-gray-300">
                      Engagement:{" "}
                      <span className="font-bold text-white">
                        {item.stats.engagement}
                      </span>
                    </span>
                  </div>
                </div>

                <a
                  href={item.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex justify-center items-center gap-2 py-3 rounded-lg border border-cyan-500/30 text-cyan-400 font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                >
                  <Eye className="w-5 h-5" />
                  View Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-6 p-8 rounded-2xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-cyan-500/20">
            <h3 className="text-2xl font-bold">
              Ready for Your{" "}
              <span className="text-cyan-400">Transformation</span>?
            </h3>
            <p className="text-gray-300 max-w-2xl">
              Let's create a portfolio that gets you noticed, builds trust, and
              converts visitors into clients.
            </p>
            <a
              href={`https://wa.me/2348034910529?text=${encodeURIComponent(
                `Hi, I just came across your portfolio website offer.I’m interested in building a custom professional website and would like to claim the 50% discount slot. My name is`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Get My Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
