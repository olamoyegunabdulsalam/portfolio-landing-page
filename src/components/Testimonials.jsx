// components/Testimonials.jsx
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Abdul basit ",
      role: "STR Manager & Guest Experience Specialist",
      content:
        "My new portfolio landed me three major clients within a month. The investment paid for itself 10x over.",
      rating: 5,
      result: "+300% client inquiries",
      image: "/Img/testimonial-1.jpeg",
    },
    {
      id: 2,
      name: "Zaniab",
      role: "Sales therapist",
      content:
        "The credibility boost was immediate. My consultation bookings tripled, and I could raise my rates by 40%.",
      rating: 5,
      result: "40% higher rates",
      image: "/Img/testimonial-2.webp",
    },
    {
      id: 3,
      name: "Alex Johnson",
      role: "UI/UX Designer",
      content:
        "From invisible to undeniable. Our website now converts visitors at 12% - something we never thought possible.",
      rating: 5,
      result: "12% conversion rate",
      image: "/Img/testimonial-4.jpeg",
    },
    {
      id: 4,
      name: "Richard Kolawole",
      role: "Executive Coach",
      content:
        "The professional presentation immediately established authority. I now attract Fortune 500 clients.",
      rating: 5,
      result: "Enterprise clients",
      image: "/Img/testimonial-5.jpeg",
    },
    {
      id: 5,
      name: "Peter Adedokun",
      role: "Tech Consultant",
      content:
        "Best business decision I made. The portfolio showcases my expertise better than any resume ever could.",
      rating: 5,
      result: "6-figure contract",
      image: "/Img/testimonial-3.jpeg",
    },
  ];

const nextSlide = useCallback(() => {
  setCurrentIndex((prev) => (prev + 1) % testimonials.length);
}, [testimonials.length]);


  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);


  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Client <span className="text-cyan-400">Success Stories</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto"
        >
          Don't just take our word for it - see what our clients say
        </motion.p>
      </div>

      <div
        className="relative max-w-5xl mx-auto overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-cyan-500/20 rounded-2xl p-6 md:p-10"
          >
            <Quote className="w-10 h-10 text-cyan-500/30 mb-4 md:mb-6" />
            <div className="grid md:grid-cols-2 gap-6 items-start">
              {/* Testimonial Text */}
              <div>
                <p className="text-lg md:text-xl text-gray-300 italic mb-4 md:mb-6 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>

                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 md:w-5 md:h-5 fill-yellow-500 text-yellow-500"
                      />
                    ))}
                  </div>
                  <span className="px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-semibold">
                    {testimonials[currentIndex].result}
                  </span>
                </div>

                <div>
                  <h4 className="text-lg md:text-xl font-bold">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-400 text-sm md:text-base">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>

              {/* Avatar */}
              <div className="flex justify-center md:justify-end">
                <div className="w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 rounded-full overflow-hidden border border-cyan-500/30 bg-gray-800 flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800/80 border border-gray-700 flex items-center justify-center hover:bg-gray-700 hover:border-cyan-500/50 transition-all"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800/80 border border-gray-700 flex items-center justify-center hover:bg-gray-700 hover:border-cyan-500/50 transition-all"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6 md:mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentIndex
                  ? "bg-cyan-500 w-8"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-10 md:mt-12"
      >
        <p className="text-lg md:text-xl text-gray-300 mb-4 md:mb-6">
          Ready to become our next success story?
        </p>
        <a
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
          className="px-6 md:px-8 py-2 md:py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer"
        >
          Get My Portfolio Website
        </a>
      </motion.div>
    </section>
  );
};

export default Testimonials;
