// components/PromoOffer.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Tag, Gift, AlertCircle, CheckCircle, } from "lucide-react";

const PromoOffer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const newSeconds = prev.seconds - 1;
        if (newSeconds >= 0) {
          return { ...prev, seconds: newSeconds };
        }

        const newMinutes = prev.minutes - 1;
        if (newMinutes >= 0) {
          return { ...prev, minutes: newMinutes, seconds: 59 };
        }

        const newHours = prev.hours - 1;
        if (newHours >= 0) {
          return { hours: newHours, minutes: 59, seconds: 59 };
        }

        return { hours: 0, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-cyan-500/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Floating elements */}
            <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-4">
                    <AlertCircle className="w-4 h-4 text-red-400" />
                    <span className="text-sm font-medium text-red-300">
                      Limited Time Offer
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Special Launch <span className="text-cyan-400">Offer</span>
                  </h2>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <Tag className="w-5 h-5 text-cyan-400" />
                      <span className="text-lg">
                        50% OFF All Portfolio Packages
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-cyan-400" />
                      <span className="text-lg">Priority 72hours Delivery</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      // ✅ Meta Pixel Lead event
                      if (window.fbq) {
                        window.fbq("track", "Lead", {
                          source: "promo_offer_whatsapp",
                        });
                      }

                      // Open WhatsApp link
                      window.open(
                        `https://wa.me/2348034910529?text=${encodeURIComponent(
                          `Hi, I just came across your portfolio website offer. I’m interested in building a custom professional website and would like to claim the 50% discount slot. My name is`,
                        )}`,
                        "_blank",
                        "noopener,noreferrer",
                      );
                    }}
                    className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 cursor-pointer"
                  >
                    Get My Portfolio Website
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PromoOffer;
