"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 px-6 lg:px-8 bg-[#f8f8f8]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        >
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-5">
              <p className="text-[#666666] text-sm uppercase tracking-wide mb-4">
                About
              </p>
              <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#1a1a1a] leading-[1.1] mb-8">
                Hey, I&apos;m Pandu
              </h2>

              <div className="relative w-48 h-48 lg:w-64 lg:h-64">
                <Image
                  src="/images/profile.jpg"
                  alt="Khresna Pandu"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 192px, 256px"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-6 text-[#666666] text-lg leading-relaxed">
                <p>
                  I&apos;m an AI Engineer with <strong className="text-[#1a1a1a]">4+ years of experience</strong> turning
                  complex problems into elegant, automated solutions. I
                  specialize in building systems that actually work in
                  production—not just impressive demos.
                </p>

                <hr className="border-[#e5e5e5]" />

                <p>
                  My approach is simple: understand the real problem, find the
                  most practical solution, and <strong className="text-[#1a1a1a]">deliver measurable results</strong>.
                  I&apos;ve helped companies save millions, automate tedious
                  workflows, and build AI products that serve millions of users.
                </p>

                <hr className="border-[#e5e5e5]" />

                <p>
                  When I&apos;m not building AI systems, I&apos;m probably exploring the
                  latest in LLMs, fine-tuning models, or helping businesses
                  figure out where AI can actually add value (and where it
                  can&apos;t).
                </p>
              </div>

              <blockquote className="mt-12 pl-6 border-l-2 border-[#e63946]">
                <p className="text-[24px] sm:text-[28px] font-bold text-[#1a1a1a] leading-snug">
                  &ldquo;I measure success by the impact delivered, not just
                  code shipped.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
