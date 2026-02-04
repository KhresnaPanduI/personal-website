"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const impacts = [
  {
    metric: "99%",
    label: "Faster Response",
    description: "AI chatbot vs human support",
  },
  {
    metric: "200M+",
    label: "IDR Saved",
    description: "Face recognition attendance",
  },
  {
    metric: "95%",
    label: "Time Reduced",
    description: "Automated OCR system",
  },
  {
    metric: "2M+",
    label: "Users Served",
    description: "Trading platform",
  },
];

export default function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="py-24 md:py-32 px-6 lg:px-8 bg-[#f8f8f8]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-16">
            <p className="text-[#666666] text-sm uppercase tracking-wide mb-4">
              Impact
            </p>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#1a1a1a] leading-[1.1] max-w-2xl">
              Results That Matter
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-[#e5e5e5]">
            {impacts.map((impact, index) => (
              <motion.div
                key={impact.label}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-6 sm:p-8 lg:p-10 border-r border-b border-[#e5e5e5] overflow-hidden"
              >
                <div className="text-[48px] sm:text-[56px] lg:text-[72px] font-bold text-[#1a1a1a] leading-none tracking-tight">
                  {impact.metric}
                </div>
                <div className="mt-4">
                  <div className="text-[#1a1a1a] font-medium uppercase text-sm tracking-wide">
                    {impact.label}
                  </div>
                  <div className="text-[#666666] text-sm mt-1">
                    {impact.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
