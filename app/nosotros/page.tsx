"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Heart,
  Lightbulb,
  Users,
  Sparkles,
  Dice5,
  BookOpen,
  Calendar,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

const galleryImages = [
  {
    src: "/images/evento.png",
    alt: "Evento de juegos de mesa — partida de Catan en Estratagema",
    label: "Eventos y tardes lúdicas",
  },
  {
    src: "/images/juegos.webp",
    alt: "Estantes con juegos de mesa en la tienda Estratagema",
    label: "Nuestro catálogo",
  },
  {
    src: "/images/ludoteca.png",
    alt: "Ludoteca Estratagema — alquiler de juegos de mesa",
    label: "Ludoteca y alquileres",
  },
];

const faqs = [
  {
    question: "¿Cómo funciona la ludoteca?",
    answer:
      "Podés alquilar juegos de nuestra colección a través de Ludigema. Elegís el juego, lo retirás, lo disfrutás con tu grupo y lo devolvés cuando termines. Es como un videoclub, pero de juegos de mesa.",
  },
  {
    question: "¿Hacen envíos a otras ciudades?",
    answer:
      "Sí, realizamos envíos a todo el país a través de nuestra tienda online estratagema.com.ar. Los envíos dentro de Santa Fe capital pueden ser con entrega en el día.",
  },
  {
    question: "¿Puedo probar un juego antes de comprarlo?",
    answer:
      "¡Por supuesto! Podés alquilarlo a través de la ludoteca o venir a nuestros eventos donde siempre tenemos juegos abiertos para probar con explicación incluida.",
  },
  {
    question: "¿Cómo son los eventos y tardes lúdicas?",
    answer:
      "Organizamos encuentros en cafés aliados donde llevamos juegos, explicamos las reglas y acompañamos las partidas. Son abiertos a todos, no hace falta experiencia previa ni traer juego propio.",
  },
  {
    question: "¿Me pueden recomendar un juego para mi grupo?",
    answer:
      "¡Es lo que más nos gusta hacer! Contactanos por WhatsApp o Instagram, contanos cuántos son, qué tipo de experiencia buscan y cuánto tiempo tienen, y te recomendamos las mejores opciones.",
  },
  {
    question: "¿Tienen juegos para niños?",
    answer:
      "Sí, tenemos una selección curada de juegos infantiles pensados para distintas edades. Desde juegos de destreza y memoria para los más chiquitos hasta juegos de estrategia liviana para pre-adolescentes.",
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

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-white/5 rounded-xl overflow-hidden hover:border-gold/20 transition-all duration-500"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left group"
      >
        <span className="font-raleway font-semibold text-white text-sm md:text-base pr-4">
          {question}
        </span>
        <ChevronDown
          size={18}
          className={`text-gold/60 flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="px-5 pb-5 text-white/50 text-sm font-inter leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function NosotrosPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative bg-dark pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-navy/8 rounded-full blur-[200px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[200px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-gold/60 text-sm font-raleway tracking-[0.3em] uppercase block mb-3">
              Nuestra historia
            </span>
            <h1 className="font-cinzel text-3xl md:text-5xl font-bold text-white mb-5">
              Sobre Estratagema
            </h1>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-px bg-gold/30" />
              <div className="w-3 h-3 border border-gold/50 rotate-45" />
              <div className="w-12 h-px bg-gold/30" />
            </div>
          </motion.div>

          {/* Story + Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20 items-center">
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
                  Todo empezó con{" "}
                  <span className="text-white/80 italic">
                    The Last Night on Earth
                  </span>{" "}
                  — un juego que nos abrió las puertas a un universo de opciones
                  que iba mucho más allá del Monopoly y el TEG. Después vinieron{" "}
                  <span className="text-white/80">Dixit</span>,{" "}
                  <span className="text-white/80">Catan</span>,{" "}
                  <span className="text-white/80">Carcassonne</span>,{" "}
                  <span className="text-white/80">Dominion</span>... y ya no
                  hubo vuelta atrás.
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
                  Hoy somos una comunidad activa de más de 11.000 personas que
                  comparten la pasión por sentarse alrededor de una mesa y crear
                  recuerdos. Queremos seguir creciendo: más mesas, más eventos,
                  más comunidad.
                </p>
              </div>
            </motion.div>

            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/5 group">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/tienda.png"
                    alt="Frente de la tienda Estratagema en Santa Fe"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={90}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-raleway text-white/80 text-sm font-medium">
                    4 de Enero 2520, Santa Fe
                  </p>
                  <p className="text-white/40 text-xs font-inter mt-1">
                    Nuestra tienda desde 2020
                  </p>
                </div>
              </div>
              {/* Decorative frame */}
              <div className="absolute -top-3 -right-3 w-24 h-24 border-t-2 border-r-2 border-gold/20 rounded-tr-2xl pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-24 h-24 border-b-2 border-l-2 border-gold/20 rounded-bl-2xl pointer-events-none" />
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h3 className="font-cinzel text-2xl font-bold text-white text-center mb-10 flex items-center justify-center gap-3">
              Lo que nos mueve
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
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

          {/* Services - Checklist style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="font-cinzel text-2xl font-bold text-white text-center mb-3">
              ¿Qué hacemos?
            </h3>
            <p className="text-white/40 text-sm font-inter text-center max-w-lg mx-auto">
              Todo lo que necesitás para tu próxima partida, en un solo lugar.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-start gap-4 p-5 rounded-xl bg-dark-card/30 border border-white/5 hover:border-gold/15 transition-all duration-500 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <service.icon size={18} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-raleway font-bold text-white text-sm mb-1">
                    {service.title}
                  </h4>
                  <p className="text-white/40 text-xs font-inter leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden border border-white/5"
          >
            <div className="relative aspect-[21/6]">
              <Image
                src="/images/estratagema.png"
                alt="Estratagema - Tienda de juegos de mesa"
                fill
                sizes="100vw"
                quality={90}
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="relative bg-dark py-24 md:py-32 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-gold/60 text-sm font-raleway tracking-[0.3em] uppercase block mb-3">
              Conocé nuestro espacio
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white mb-5">
              La experiencia Estratagema
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-px bg-gold/30" />
              <div className="w-3 h-3 border border-gold/50 rotate-45" />
              <div className="w-12 h-px bg-gold/30" />
            </div>
          </motion.div>

          {/* Equal grid gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative rounded-2xl overflow-hidden border border-white/5 group"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={90}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-raleway text-white font-semibold text-sm">
                    {img.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative bg-dark py-24 md:py-32 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-navy/8 rounded-full blur-[200px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-gold/60 text-sm font-raleway tracking-[0.3em] uppercase block mb-3">
              Consultas frecuentes
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white mb-5">
              Preguntas frecuentes
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-px bg-gold/30" />
              <div className="w-3 h-3 border border-gold/50 rotate-45" />
              <div className="w-12 h-px bg-gold/30" />
            </div>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mt-14"
          >
            <p className="text-white/40 text-sm font-inter mb-4">
              ¿Tenés otra consulta?
            </p>
            <a
              href="https://wa.me/5493425064651"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold font-raleway font-semibold px-6 py-3 rounded-xl text-sm hover:bg-gold hover:text-dark transition-all duration-300"
            >
              <MessageCircle size={16} />
              Escribinos por WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
