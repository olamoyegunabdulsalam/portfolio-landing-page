// components/Footer.jsx
import React from "react";
import { Linkedin, MessageCircle, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 text-center">
        {/* Name */}
        <h3 className="text-lg font-semibold tracking-wide">
          Abdul<span className="text-cyan-400">Qoyyum</span>
        </h3>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@abqoyyum?_r=1&_t=ZS-92FXrRmJzom"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="p-2 rounded-full bg-gray-800 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M16.5 1c.8 3.4 3.3 5.9 6.7 6.7v3.2c-1.9 0-3.7-.6-5.2-1.6v7.2c0 4.1-3.3 7.5-7.5 7.5S3 20.7 3 16.6s3.3-7.5 7.5-7.5c.5 0 1 .1 1.5.2v3.4c-.5-.2-1-.3-1.5-.3-2.3 0-4.1 1.9-4.1 4.2s1.9 4.2 4.1 4.2 4.1-1.9 4.1-4.2V1h2.9z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/abdul-qoyyum-761599266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-full bg-gray-800 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.link/d1eedz`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="p-2 rounded-full bg-gray-800 text-gray-400 hover:text-green-400 hover:bg-green-500/10 transition"
          >
            <MessageCircle className="w-5 h-5" />
          </a>

          {/* X / Twitter */}
          <a
            href="https://x.com/abqoyyum?s=09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="p-2 rounded-full bg-gray-800 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © 2026 Abdul Qoyyum. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
