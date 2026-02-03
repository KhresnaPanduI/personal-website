"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Mail } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/6281770984731?text=Hi%20Pandu,%20I'd%20like%20to%20discuss%20a%20project";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Got a Problem? Let&apos;s Talk
          </h2>
          <p className="text-[#a3a3a3] max-w-xl mx-auto mb-8">
            I offer free consultations to understand your needs. No pressure,
            just a friendly chat about how AI can help your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium rounded-lg transition-all hover:scale-105"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
            <a
              href="mailto:khresnapandu@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 text-white font-medium rounded-lg transition-all hover:bg-white/5"
            >
              <Mail size={20} />
              Send an Email
            </a>
          </div>

          <p className="mt-8 text-[#a3a3a3] text-sm">
            Prefer email?{" "}
            <a
              href="mailto:khresnapandu@gmail.com"
              className="text-[#a78bfa] hover:text-[#8b5cf6] transition-colors"
            >
              khresnapandu@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
