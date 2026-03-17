"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Truck, Users, Calendar } from "lucide-react";

const items = [
  {
    icon: ShoppingBag,
    stat: "+500",
    title: "Juegos disponibles",
    description: "Nacionales e importados. La colección más completa de Santa Fe.",
  },
  {
    icon: Truck,
    stat: "Envíos",
    title: "A todo el país",
    description: "Comprá desde donde estés. Envíos a todo Argentina.",
  },
  {
    icon: Users,
    stat: "11K+",
    title: "Comunidad",
    description: "Una comunidad activa y apasionada por los juegos de mesa.",
  },
  {
    icon: Calendar,
    stat: "Eventos",
    title: "Cada semana",
    description: "Torneos, noches de juego, lanzamientos y mucho más.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function WhyUs() {
  return (
    <section id="nosotros" className="relative bg-dark py-24 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-navy/8 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold/60 text-sm font-raleway tracking-[0.3em] uppercase block mb-3">
            Lo que nos hace diferentes
          </span>
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-white mb-5">
            ¿Por qué Estratagema?
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-gold/30" />
            <div className="w-3 h-3 border border-gold/50 rotate-45" />
            <div className="w-12 h-px bg-gold/30" />
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="group text-center p-8 rounded-2xl bg-dark-card/50 border border-white/5 hover:border-gold/20 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 mb-6 group-hover:from-gold/30 group-hover:to-gold/10 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(245,197,24,0.1)]">
                <item.icon className="text-gold" size={28} />
              </div>
              <div className="font-cinzel text-gold text-4xl font-bold mb-1">
                {item.stat}
              </div>
              <h3 className="font-raleway font-bold text-white text-lg mb-3">
                {item.title}
              </h3>
              <p className="text-gray-text text-sm font-inter leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
