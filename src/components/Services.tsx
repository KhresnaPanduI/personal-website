"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "LLM Integration & Fine-tuning",
    description:
      "Integrate GPT, Claude, or open-source LLMs into your applications. Custom fine-tuning for domain-specific performance.",
  },
  {
    number: "02",
    title: "AI Chatbot Development",
    description:
      "Build intelligent chatbots that understand context, handle complex queries, and integrate with your existing systems.",
  },
  {
    number: "03",
    title: "Computer Vision Solutions",
    description:
      "From face recognition to document OCR, build systems that see and understand visual data at scale.",
  },
  {
    number: "04",
    title: "MLOps & Infrastructure",
    description:
      "Design and deploy robust ML pipelines. From model training to production monitoring and scaling.",
  },
  {
    number: "05",
    title: "Data Pipeline Automation",
    description:
      "Automate data collection, processing, and analysis. Build systems that turn raw data into actionable insights.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 px-6 lg:px-8">
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
                Services
              </p>
              <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#1a1a1a] leading-[1.1]">
                What I Can Build for You
              </h2>
            </div>
            <div className="lg:col-span-7 lg:flex lg:items-end">
              <p className="text-[#666666] text-lg leading-relaxed">
                From proof-of-concept to production-ready systems, I help
                businesses leverage AI to solve real problems.
              </p>
            </div>
          </div>

          <div className="border-t border-[#e5e5e5]">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group grid md:grid-cols-12 gap-4 md:gap-8 py-8 border-b border-[#e5e5e5] hover:bg-[#f8f8f8] transition-colors -mx-6 px-6"
              >
                <div className="md:col-span-1">
                  <span className="text-[#e63946] text-sm font-medium">
                    {service.number}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-xl font-semibold text-[#1a1a1a] group-hover:text-[#e63946] transition-colors">
                    {service.title}
                  </h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-[#666666] leading-relaxed">
                    {service.description}
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
