"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    number: "01",
    title: "LLM Customer Service Platform",
    client: "Financial Services",
    description:
      "End-to-end AI chatbot pipeline serving 2M+ users with sub-5 second responses, replacing human agents.",
    metrics: [
      "99% faster response time",
      "200+ concurrent requests",
      "15,000 vector knowledge base",
    ],
    tags: ["LLM", "Vector DB", "MLOps"],
  },
  {
    number: "02",
    title: "Automated Document Processing",
    client: "Financial Services",
    description:
      "OCR system for automated ID card processing, fully automating KYC verification workflows.",
    metrics: [
      "95% time reduction",
      "Replaced 6+ FTEs",
      "200+ daily requests",
    ],
    tags: ["Computer Vision", "OCR", "Automation"],
  },
  {
    number: "03",
    title: "Face Recognition System",
    client: "Financial Services",
    description:
      "In-house face similarity detection for identity verification, replacing expensive third-party services.",
    metrics: [
      "200M+ IDR saved annually",
      "Enhanced data security",
      "Sub-second processing",
    ],
    tags: ["Computer Vision", "Deep Learning"],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 px-6 lg:px-8 bg-[#f8f8f8]">
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
                Projects
              </p>
              <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#1a1a1a] leading-[1.1]">
                Past Work
              </h2>
            </div>
            <div className="lg:col-span-7 lg:flex lg:items-end">
              <p className="text-[#666666] text-lg leading-relaxed">
                Selected projects from my work with enterprise clients. Details
                limited due to confidentiality agreements.
              </p>
            </div>
          </div>

          <div className="space-y-0">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="border-t border-[#e5e5e5] py-10 lg:py-12"
              >
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-12">
                  <div className="lg:col-span-1">
                    <span className="text-[#e63946] text-sm font-medium">
                      {project.number}
                    </span>
                  </div>

                  <div className="lg:col-span-5">
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#1a1a1a] mb-2">
                      {project.title}
                    </h3>
                    <p className="text-[#666666] text-sm uppercase tracking-wide">
                      {project.client}
                    </p>
                  </div>

                  <div className="lg:col-span-6">
                    <p className="text-[#666666] leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-x-8 gap-y-2 mb-6">
                      {project.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="text-[#1a1a1a] font-medium"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs uppercase tracking-wide text-[#666666] border border-[#e5e5e5]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-[#e5e5e5]" />
        </motion.div>
      </div>
    </section>
  );
}
