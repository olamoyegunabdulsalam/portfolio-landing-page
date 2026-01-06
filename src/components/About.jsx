// components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { Award, Zap } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-xl opacity-25" />

                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyan-500/30 bg-gray-900">
                  <img
                    src="/Img/profile.png"
                    alt="Your portrait"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating accents */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-2 -right-2 w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center border-4 border-primary-background"
                >
                  <Award className="w-7 h-7 text-white" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-2 -left-2 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center border-4 border-primary-background"
                >
                  <Zap className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                A Little <span className="text-cyan-400">About Me</span>
              </h2>

              <div className="space-y-4 text-lg text-gray-300">
                <p>
                  I’m Ogunremi Abdul Qoyyum, am a web developer who genuinely cares about how your
                  website represents you and your business.
                </p>

                <p>
                  I don’t just build “nice-looking” sites. I focus on clarity,
                  trust, and structure so visitors instantly understand who you
                  are, what you offer, and why they should choose you.
                </p>

                <p>
                  Whether you’re a freelancer, creator, or business owner, my
                  approach is simple: listen first, design with intention, and
                  build something you can confidently share.
                </p>

                <p>
                  I treat every project as a partnership, not a transaction.
                  Your goals matter, your brand matters, and your success is the
                  benchmark.
                </p>
              </div>

              {/* Quiet credibility stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                <div className="text-center p-4 rounded-lg bg-gray-800/40 border border-gray-700">
                  <div className="text-2xl font-bold text-cyan-400">100%</div>
                  <div className="text-sm text-gray-400">Client Focus</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-gray-800/40 border border-gray-700">
                  <div className="text-2xl font-bold text-cyan-400">Clean</div>
                  <div className="text-sm text-gray-400">Code Quality</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-gray-800/40 border border-gray-700">
                  <div className="text-2xl font-bold text-cyan-400">Modern</div>
                  <div className="text-sm text-gray-400">Design</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-gray-800/40 border border-gray-700">
                  <div className="text-2xl font-bold text-cyan-400">
                    Reliable
                  </div>
                  <div className="text-sm text-gray-400">Support</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
