// components/WhoFor.jsx
import React from "react";
import { motion } from "framer-motion";
import { User, Briefcase, Building2, Palette, Mic, Code } from "lucide-react";

const WhoFor = () => {
  const niches = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Creators",
      description:
        "Artists, photographers, designers who need to showcase their work",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Professionals",
      description: "Consultants, coaches, experts building authority",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Business Owners",
      description: "Small business owners needing credibility online",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "Freelancers",
      description: "Independent professionals attracting premium clients",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Personal Brands",
      description: "Influencers and thought leaders growing their audience",
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Tech Professionals",
      description: "Developers, engineers showcasing projects and skills",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Who This Is <span className="text-cyan-400">For</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            If you're in any of these categories, a professional portfolio is
            your secret weapon
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {niches.map((niche, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"
                style={{
                  background: `linear-gradient(135deg, ${
                    niche.color.split(" ")[1]
                  }, ${niche.color.split(" ")[3]})`,
                }}
              ></div>

              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${niche.color} p-3 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="text-white">{niche.icon}</div>
              </div>

              <h3 className="text-xl font-semibold mb-3">{niche.title}</h3>
              <p className="text-gray-400">{niche.description}</p>

              <div className="mt-6 pt-4 border-t border-gray-700 group-hover:border-cyan-500/30 transition-colors duration-300"></div>
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
          <p className="text-lg text-gray-300 mb-6">
            Don't see your exact niche? We create custom solutions for everyone.
          </p>
          <a
            href={`https://wa.me/2348034910529?text=${encodeURIComponent(
              `Hi, I just came across your portfolio website offer.I’m interested in building a custom professional website and would like to claim the 50% discount slot. My name is`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500
            to-cyan-600 text-white font-semibold hover:shadow-lg
            hover:shadow-cyan-500/25 transition-all duration-300"
          >
            Get My Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoFor;
