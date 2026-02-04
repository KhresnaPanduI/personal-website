"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const WHATSAPP_LINK =
  "https://wa.me/6281770984731?text=Hi%20Pandu,%20I'd%20like%20to%20discuss%20a%20project";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32 px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        >
          <div className="max-w-3xl">
            <p className="text-[#666666] text-sm uppercase tracking-wide mb-4">
              Contact
            </p>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[56px] font-bold text-[#1a1a1a] leading-[1.1] mb-8">
              Got a problem?
              <br />
              <span className="text-[#e63946]">Let&apos;s talk.</span>
            </h2>

            <p className="text-[#666666] text-lg leading-relaxed mb-10 max-w-xl">
              I offer free consultations to understand your needs. No pressure,
              just a friendly chat about how AI can help your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-[#e63946] text-white text-sm font-medium uppercase tracking-wide hover:bg-[#c62f3b] transition-colors"
              >
                Start a Conversation
              </a>
              <a
                href="mailto:khresna.pandu10@gmail.com"
                className="inline-block px-8 py-4 border border-[#1a1a1a] text-[#1a1a1a] text-sm font-medium uppercase tracking-wide hover:bg-[#1a1a1a] hover:text-white transition-colors"
              >
                Send an Email
              </a>
            </div>

            <p className="mt-10 text-[#666666] text-sm">
              or email directly:{" "}
              <a
                href="mailto:khresna.pandu10@gmail.com"
                className="text-[#1a1a1a] hover:text-[#e63946] transition-colors underline underline-offset-4"
              >
                khresna.pandu10@gmail.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
