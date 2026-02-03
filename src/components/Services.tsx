"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  MessageSquare,
  Eye,
  Workflow,
  Bot,
  Server,
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "LLM Integration & Fine-tuning",
    description:
      "Integrate GPT, Claude, or open-source LLMs into your applications. Custom fine-tuning for domain-specific performance.",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbot Development",
    description:
      "Build intelligent chatbots that understand context, handle complex queries, and integrate with your existing systems.",
  },
  {
    icon: Eye,
    title: "Computer Vision Solutions",
    description:
      "From face recognition to document OCR, build systems that see and understand visual data at scale.",
  },
  {
    icon: Server,
    title: "MLOps & Infrastructure",
    description:
      "Design and deploy robust ML pipelines. From model training to production monitoring and scaling.",
  },
  {
    icon: Workflow,
    title: "Data Pipeline Automation",
    description:
      "Automate data collection, processing, and analysis. Build systems that turn raw data into actionable insights.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
            What I Can Build for You
          </h2>
          <p className="text-[#64748b] max-w-2xl mx-auto">
            From proof-of-concept to production-ready systems, I help businesses
            leverage AI to solve real problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-white rounded-xl border border-slate-200 hover:border-[#8b5cf6]/50 transition-all hover:-translate-y-1 shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 bg-[#8b5cf6]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#8b5cf6]/20 transition-colors">
                <service.icon className="text-[#8b5cf6]" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-2">
                {service.title}
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
