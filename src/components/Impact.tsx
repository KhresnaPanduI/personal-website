"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Banknote, Clock, Users } from "lucide-react";

const impacts = [
  {
    icon: Clock,
    metric: "99%",
    label: "Faster Response Time",
    description: "AI chatbot vs human support agents",
  },
  {
    icon: Banknote,
    metric: "200M+",
    label: "IDR Saved Annually",
    description: "Face recognition attendance system",
  },
  {
    icon: TrendingUp,
    metric: "95%",
    label: "Processing Time Reduced",
    description: "Automated OCR document system",
  },
  {
    icon: Users,
    metric: "2M+",
    label: "Users Served",
    description: "Indo Premier trading platform",
  },
];

export default function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="py-24 px-4 bg-[#f1f5f9]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
            Results That Matter
          </h2>
          <p className="text-[#64748b] max-w-2xl mx-auto">
            Real metrics from real projects. I measure success by the impact
            delivered, not just code shipped.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-white rounded-xl border border-slate-200 shadow-sm"
            >
              <div className="w-12 h-12 bg-[#8b5cf6]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <impact.icon className="text-[#8b5cf6]" size={24} />
              </div>
              <div className="text-4xl font-bold text-[#8b5cf6] mb-2">
                {impact.metric}
              </div>
              <div className="text-[#0f172a] font-medium mb-1">
                {impact.label}
              </div>
              <div className="text-[#64748b] text-sm">
                {impact.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
