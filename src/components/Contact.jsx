// components/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone, ArrowRight } from "lucide-react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const response = await axios.post("https://api.web3forms.com/submit", {
        access_key:
          "459a9e69-e773-465a-97df-1d187d9af05b",
        name: formData.name,
        email: formData.email,
        message: formData.message,
        projectType: formData.projectType,
      });

      if (response.data.success) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          projectType: "",
          message: "",
        });
      } else {
        setSuccess(false);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-primary-background to-gray-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="text-cyan-400">Transform</span> Your
              Online Presence?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let's create a portfolio that builds trust, attracts premium
              clients, and grows your business
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-cyan-500/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-2">Start Your Project</h3>
              <p className="text-gray-400 mb-8">
                Fill out the form and I'll get back to you within 24 hours
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="John Smith"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    required
                  >
                    <option value="">Select your project</option>
                    <option value="portfolio">Personal Portfolio</option>
                    <option value="business">Business Website</option>
                    <option value="redesign">Website Redesign</option>
                    <option value="consultation">Consultation Call</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Tell me about your project, goals, and timeline..."
                    required
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>{loading ? "Sending..." : "Send Message"}</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                {success === true && (
                  <p className="text-green-500 mt-2">
                    Message sent successfully!
                  </p>
                )}
                {success === false && (
                  <p className="text-red-500 mt-2">
                    Failed to send message. Please try again.
                  </p>
                )}
              </form>
            </motion.div>

            {/* Contact Options */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* WhatsApp */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-cyan-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Quick Connect</h3>
                <a
                  href={`https://wa.me/2348034910529?text=${encodeURIComponent(
                    `Hi, I just came across your portfolio website offer.

I’m interested in building a custom professional website and would like to claim the 50% discount slot.

My name is`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/30 border border-gray-700 hover:border-green-500/50 hover:bg-gray-800/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">WhatsApp Chat</div>
                    <div className="text-sm text-gray-400">
                      Fast response within 1 hour
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-400 group-hover:translate-x-1 transition-all" />
                </a>

                {/* Email */}
                <a
                  href="mailto:ogunmubo06@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/30 border border-gray-700 hover:border-blue-500/50 hover:bg-gray-800/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">Email</div>
                    <div className="text-sm text-gray-400">
                      ogunmubo06@gmail.com
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                </a>
              </div>

              {/* Assurance */}
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
                <h4 className="text-xl font-bold mb-4">Why Choose Us</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                    </div>
                    <span className="text-gray-300">
                      100% Custom Design - No Templates
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                    </div>
                    <span className="text-gray-300">
                      Conversion-Optimized from Day 1
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                    </div>
                    <span className="text-gray-300">
                      Full Support & Training
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
              <Phone className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">
                Have questions? Call us at{" "}
                <span className="text-cyan-400 font-semibold sm:inline-block block mt-1">
                  +234 (107) 882-613
                </span>
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
