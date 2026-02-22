"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Free consultation to understand your business, pain points, and goals. No jargon—just a focused conversation about where AI can add real value.",
  },
  {
    number: "02",
    title: "Proposal",
    description:
      "Clear scope, timeline, and pricing delivered upfront. You'll know exactly what you're getting before we start. No surprises.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Iterative development with regular updates. You see progress at every stage, not just a final handoff.",
  },
  {
    number: "04",
    title: "Deploy",
    description:
      "Production deployment with monitoring, documentation, and knowledge transfer. I make sure it runs smoothly after launch.",
  },
];

export default function HowIWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 md:py-32 px-6 lg:px-8 bg-[#f8f8f8]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        >
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 mb-16">
            <div className="lg:col-span-5">
              <p className="text-[#666666] text-sm uppercase tracking-wide mb-4">
                Process
              </p>
              <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#1a1a1a] leading-[1.1]">
                How I Work
              </h2>
            </div>
            <div className="lg:col-span-7 lg:flex lg:items-end">
              <p className="text-[#666666] text-lg leading-relaxed">
                A straightforward process designed to get you from idea to
                production with minimal friction.
              </p>
            </div>
          </div>

          <div className="border-t border-[#e5e5e5]">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group grid md:grid-cols-12 gap-4 md:gap-8 py-8 border-b border-[#e5e5e5] hover:bg-white transition-colors -mx-6 px-6"
              >
                <div className="md:col-span-1">
                  <span className="text-[#e63946] text-sm font-medium">
                    {step.number}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-xl font-semibold text-[#1a1a1a] group-hover:text-[#e63946] transition-colors">
                    {step.title}
                  </h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-[#666666] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
