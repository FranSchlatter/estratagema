"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { useRef } from "react";

function FloatingDice() {
  const diceSymbols = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
  const pieces = [
    { symbol: "♟", x: "10%", y: "20%", delay: 0, size: "text-3xl" },
    { symbol: "⚅", x: "85%", y: "15%", delay: 1.5, size: "text-4xl" },
    { symbol: "♜", x: "75%", y: "70%", delay: 0.8, size: "text-2xl" },
    { symbol: "⚂", x: "15%", y: "75%", delay: 2, size: "text-3xl" },
    { symbol: "♞", x: "90%", y: "45%", delay: 0.5, size: "text-2xl" },
    { symbol: "⚄", x: "5%", y: "50%", delay: 1.2, size: "text-4xl" },
    { symbol: "🎲", x: "50%", y: "85%", delay: 1.8, size: "text-2xl" },
    { symbol: "♛", x: "30%", y: "10%", delay: 0.3, size: "text-2xl" },
    { symbol: "⚃", x: "65%", y: "25%", delay: 2.5, size: "text-3xl" },
    { symbol: "♝", x: "40%", y: "80%", delay: 1, size: "text-xl" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {pieces.map((piece, i) => (
        <motion.div
          key={i}
          className={`absolute ${piece.size} text-gold/[0.07] select-none`}
          style={{ left: piece.x, top: piece.y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.05, 0.12, 0.05],
          }}
          transition={{
            duration: 6 + i * 0.5,
            repeat: Infinity,
            delay: piece.delay,
            ease: "easeInOut",
          }}
        >
          {piece.symbol}
        </motion.div>
      ))}
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=1920&q=80')`,
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-dark/75" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/40 to-dark" />
      </motion.div>

      {/* Ambient glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-navy/30 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gold/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-navy/20 rounded-full blur-[180px]" />
      </div>

      {/* Floating pieces */}
      <FloatingDice />

      {/* Grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 border border-gold/40 text-gold text-xs md:text-sm font-raleway tracking-[0.2em] uppercase px-5 py-2 rounded-full mb-8 bg-gold/5 backdrop-blur-sm">
            <Sparkles size={14} />
            Santa Fe, Argentina
            <Sparkles size={14} />
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-cinzel text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6"
        >
          Tu próxima{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-300 to-gold">
              partida
            </span>
            <span className="absolute -inset-1 bg-gold/10 blur-lg rounded-lg" />
          </span>
          <br />
          empieza acá
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-white/60 text-lg md:text-xl lg:text-2xl font-inter max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Más de <span className="text-gold font-semibold">500 juegos de mesa</span> te esperan.
          <br className="hidden sm:block" />
          Comprá online o visitanos en nuestra tienda.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#juegos"
            className="group relative bg-gradient-to-r from-gold to-yellow-500 text-dark font-raleway font-bold px-10 py-4 rounded-lg text-base md:text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(245,197,24,0.3)] hover:scale-105"
          >
            <span className="relative z-10">Ver catálogo</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="https://wa.me/5493425064651"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white/30 text-white font-raleway font-semibold px-10 py-4 rounded-lg text-base md:text-lg hover:bg-white/10 hover:border-white/60 backdrop-blur-sm transition-all duration-300"
          >
            Contactanos
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="flex items-center justify-center gap-6 md:gap-10 mt-14 text-white/30 text-xs md:text-sm font-inter"
        >
          <div className="flex items-center gap-2">
            <span className="text-gold font-cinzel font-bold text-lg">11K+</span>
            <span>seguidores</span>
          </div>
          <div className="w-px h-4 bg-white/20" />
          <div className="flex items-center gap-2">
            <span className="text-gold font-cinzel font-bold text-lg">500+</span>
            <span>juegos</span>
          </div>
          <div className="w-px h-4 bg-white/20" />
          <div className="flex items-center gap-2">
            <span className="text-gold font-cinzel font-bold text-lg">10+</span>
            <span>años</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-white/20 text-[10px] font-inter tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="text-gold/40" size={20} />
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
    </section>
  );
}
