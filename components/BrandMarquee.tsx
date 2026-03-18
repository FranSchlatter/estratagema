"use client";

import { motion } from "framer-motion";

const brands = [
  "DEVIR", "ASMODEE", "CMON", "MALDON", "BURÓ", "RUIBAL",
  "TOP TOYS", "ZACATRUS", "MALDITO GAMES", "EDGE",
  "FANTASY FLIGHT", "DAYS OF WONDER",
];

export default function BrandMarquee() {
  return (
    <section className="relative bg-dark py-12 overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <p className="text-center text-white/20 text-xs font-raleway tracking-[0.3em] uppercase pl-[0.3em]">
          Trabajamos con las mejores editoriales
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {[...brands, ...brands].map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="font-raleway text-white/15 text-lg md:text-xl font-bold tracking-wider hover:text-gold/30 transition-colors duration-300 cursor-default select-none"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
