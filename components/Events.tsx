"use client";

import { motion } from "framer-motion";
import { Swords, Layers, Trophy, ArrowRight, CalendarDays, MapPin } from "lucide-react";

const events = [
  {
    date: "22",
    month: "MAR",
    name: "Noche de Catan",
    description: "Torneo familiar. Inscripción gratuita. Premios para los ganadores.",
    status: "Confirmado",
    icon: Swords,
    time: "19:00 hs",
    location: "Lisandro Café",
    address: "Lisandro de la Torre 2450, Santa Fe",
  },
  {
    date: "05",
    month: "ABR",
    name: "Pre-release Lairen",
    description: "Lanzamiento exclusivo del nuevo juego de cartas argentino.",
    status: "Confirmado",
    icon: Layers,
    time: "18:00 hs",
    location: "Showroom Estratagema",
    address: "4 de Enero 2520, Santa Fe",
  },
  {
    date: "19",
    month: "ABR",
    name: "Torneo Ticket to Ride",
    description: "Competencia con premios para los mejores jugadores.",
    status: "Próximamente",
    icon: Trophy,
    time: "17:00 hs",
    location: "Lisandro Café",
    address: "Lisandro de la Torre 2450, Santa Fe",
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function Events() {
  return (
    <section id="eventos" className="relative bg-dark-card py-24 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[200px] pointer-events-none" />

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
            No te los pierdas
          </span>
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-white mb-5">
            Próximos Eventos
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-gold/30" />
            <div className="w-3 h-3 border border-gold/50 rotate-45" />
            <div className="w-12 h-px bg-gold/30" />
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <motion.div
              key={event.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="group relative bg-gradient-to-br from-dark-event to-dark-event/50 rounded-2xl overflow-hidden border border-white/5 hover:border-gold/20 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Gold accent top line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0" />

              <div className="p-6 md:p-8">
                {/* Date block */}
                <div className="flex items-start gap-5 mb-5">
                  <div className="flex-shrink-0 bg-gold/10 border border-gold/20 rounded-xl w-20 h-20 flex flex-col items-center justify-center">
                    <span className="font-cinzel text-gold text-3xl font-bold leading-none">
                      {event.date}
                    </span>
                    <span className="font-raleway text-gold/60 text-xs tracking-wider uppercase">
                      {event.month}
                    </span>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-raleway font-bold text-white text-xl mb-1 group-hover:text-gold transition-colors duration-300">
                      {event.name}
                    </h3>
                    <div className="flex items-center gap-2 text-white/30 text-xs">
                      <CalendarDays size={12} />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-text text-sm font-inter leading-relaxed mb-4">
                  {event.description}
                </p>

                {/* Location */}
                <div className="flex items-start gap-2 mb-5 bg-white/[0.02] rounded-lg px-3 py-2.5 border border-white/5">
                  <MapPin size={14} className="text-gold/60 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-white/70 text-sm font-raleway font-semibold block">
                      {event.location}
                    </span>
                    <span className="text-white/30 text-xs font-inter">
                      {event.address}
                    </span>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-raleway font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full ${
                      event.status === "Confirmado"
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        : "bg-gold/10 text-gold border border-gold/20"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      event.status === "Confirmado" ? "bg-emerald-400" : "bg-gold"
                    }`} />
                    {event.status}
                  </span>
                  <event.icon className="text-white/10 group-hover:text-gold/30 transition-colors duration-500" size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href="https://www.instagram.com/estratagema.juegos/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border border-gold/40 text-gold font-raleway font-semibold px-10 py-4 rounded-lg hover:bg-gold hover:text-dark transition-all duration-300"
          >
            Ver todos los eventos
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
