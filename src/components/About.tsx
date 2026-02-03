"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  Code2,
  Database,
  Cloud,
  Cpu,
  GitBranch,
} from "lucide-react";

const techStack = [
  { name: "Python", icon: Code2 },
  { name: "TensorFlow", icon: Brain },
  { name: "PyTorch", icon: Cpu },
  { name: "LangChain", icon: GitBranch },
  { name: "PostgreSQL", icon: Database },
  { name: "AWS/GCP", icon: Cloud },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-4 bg-[#f1f5f9]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-6">
              Hey, I&apos;m Pandu
            </h2>
            <div className="space-y-4 text-[#64748b]">
              <p>
                I&apos;m an AI Engineer with 4+ years of experience turning complex
                problems into elegant, automated solutions. I specialize in
                building systems that actually work in production—not just
                impressive demos.
              </p>
              <p>
                My approach is simple: understand the real problem, find the
                most practical solution, and deliver measurable results. I&apos;ve
                helped companies save millions, automate tedious workflows, and
                build AI products that serve millions of users.
              </p>
              <p>
                When I&apos;m not building AI systems, I&apos;m probably exploring the
                latest in LLMs, fine-tuning models, or helping businesses figure
                out where AI can actually add value (and where it can&apos;t).
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#0f172a] mb-6">Tech Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg border border-slate-200 hover:border-[#8b5cf6]/50 transition-colors shadow-sm"
                >
                  <tech.icon className="text-[#8b5cf6]" size={24} />
                  <span className="text-[#0f172a] text-sm">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
