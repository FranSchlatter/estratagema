"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Lightbulb,
  Users,
  Sparkles,
  Dice5,
  BookOpen,
  Calendar,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    icon: Dice5,
    title: "Venta de juegos",
    description:
      "Catálogo en expansión con énfasis en calidad de diseño. Familias, party games, eurogames y juegos infantiles.",
  },
  {
    icon: BookOpen,
    title: "Ludoteca & Alquileres",
    description:
      "Probá cientos de juegos antes de comprar. Revivimos la magia y la nostalgia del videoclub, pero con juegos de mesa.",
  },
  {
    icon: Calendar,
    title: "Eventos",
    description:
      "Tardes lúdicas en cafés aliados donde explicamos reglas y ofrecemos recomendaciones personalizadas.",
  },
  {
    icon: MessageCircle,
    title: "Asesoramiento",
    description:
      "Te ayudamos a encontrar el juego ideal según tu grupo, tiempo disponible y presupuesto.",
  },
];

const values = [
  {
    icon: Users,
    title: "Comunidad",
    description: "Espacios para encuentro, aprendizaje y compartir mesa.",
  },
  {
    icon: Lightbulb,
    title: "Accesibilidad",
    description:
      "Reglas explicadas rápidamente, respetando el tiempo de los jugadores.",
  },
  {
    icon: Sparkles,
    title: "Calidad",
    description:
      "Selección basada en diseño, rejugabilidad y experiencia de juego.",
  },
  {
    icon: Heart,
    title: "Diversión",
    description:
      "Recomendaciones honestas priorizando el ajuste perfecto con cada grupo.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function AboutUs() {
  return (
    <section
      id="nosotros"
      className="relative bg-dark py-24 md:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-navy/8 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[200px] pointer-events-none" />

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
            Nuestra historia
          </span>
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-white mb-5">
            Sobre Estratagema
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-gold/30" />
            <div className="w-3 h-3 border border-gold/50 rotate-45" />
            <div className="w-12 h-px bg-gold/30" />
          </div>
        </motion.div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-cinzel text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gold rounded-full" />
              La primera tienda de juegos de mesa modernos de Santa Fe
            </h3>
            <div className="space-y-4">
              <p className="text-white/60 font-inter leading-relaxed">
                Todo empezó con <span className="text-white/80 italic">The Last Night on Earth</span> — un juego que nos abrió las puertas a un universo de opciones que iba mucho más allá del Monopoly y el TEG. Después vinieron{" "}
                <span className="text-white/80">Dixit</span>,{" "}
                <span className="text-white/80">Catan</span>,{" "}
                <span className="text-white/80">Carcassonne</span>,{" "}
                <span className="text-white/80">Dominion</span>... y ya no hubo vuelta atrás.
              </p>
              <p className="text-white/60 font-inter leading-relaxed">
                Fundada en 2020, Estratagema nació con un propósito claro:{" "}
                <span className="text-gold/80 font-medium">
                  acercar experiencias increíbles a más personas
                </span>
                , con asesoramiento real para que encuentres los mejores juegos
                para vos y tus grupos.
              </p>
              <p className="text-white/60 font-inter leading-relaxed">
                Hoy somos una comunidad activa de más de 11.000 personas que comparten la pasión por sentarse alrededor de una mesa y crear recuerdos. Queremos seguir creciendo: más mesas, más eventos, más comunidad.
              </p>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="font-cinzel text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gold rounded-full" />
              Lo que nos mueve
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-dark-card/50 border border-white/5 rounded-xl p-5 hover:border-gold/20 transition-all duration-500 group"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gold/10 mb-3 group-hover:bg-gold/20 transition-colors">
                    <value.icon size={20} className="text-gold" />
                  </div>
                  <h4 className="font-raleway font-bold text-white text-sm mb-1">
                    {value.title}
                  </h4>
                  <p className="text-white/40 text-xs font-inter leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h3 className="font-cinzel text-2xl font-bold text-white text-center mb-10">
            ¿Qué hacemos?
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="group text-center p-6 rounded-2xl bg-dark-card/50 border border-white/5 hover:border-gold/20 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 mb-5 group-hover:from-gold/30 group-hover:to-gold/10 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(245,197,24,0.1)]">
                <service.icon className="text-gold" size={24} />
              </div>
              <h4 className="font-raleway font-bold text-white text-base mb-2">
                {service.title}
              </h4>
              <p className="text-gray-text text-sm font-inter leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
