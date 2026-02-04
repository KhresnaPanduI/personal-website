"use client";

import { motion } from "framer-motion";

const WHATSAPP_LINK =
  "https://wa.me/6281770984731?text=Hi%20Pandu,%20I'd%20like%20to%20discuss%20a%20project";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 lg:px-8 pt-20">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-[#666666] text-sm uppercase tracking-wide mb-6"
            >
              AI Engineer & Automation Specialist
            </motion.p>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-[40px] sm:text-[56px] lg:text-[72px] font-bold text-[#1a1a1a] leading-[1.1] mb-8"
            >
              Building Intelligent
              <br />
              Systems That
              <br />
              <span className="text-[#e63946]">Deliver Results</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-[#666666] text-lg sm:text-xl max-w-xl mb-10 leading-relaxed"
            >
              I help businesses automate workflows, integrate AI, and build
              production-ready systems that save time and money.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-[#1a1a1a] text-white text-sm font-medium uppercase tracking-wide hover:bg-[#333333] transition-colors"
              >
                Start a Conversation
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="border-l-2 border-[#e5e5e5] pl-8">
              <div className="mb-8">
                <span className="text-[80px] font-bold text-[#1a1a1a] leading-none">
                  4+
                </span>
                <p className="text-[#666666] text-sm uppercase tracking-wide mt-2">
                  Years Experience
                </p>
              </div>
              <div>
                <span className="text-[80px] font-bold text-[#1a1a1a] leading-none">
                  200M
                </span>
                <p className="text-[#666666] text-sm uppercase tracking-wide mt-2">
                  IDR Saved Annually
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
