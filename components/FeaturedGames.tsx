"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star, Eye } from "lucide-react";
import Link from "next/link";
import { games } from "@/data/games";

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function FeaturedGames() {
  return (
    <section id="juegos" className="relative bg-dark py-24 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-navy/10 rounded-full blur-[200px] pointer-events-none" />

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
            Nuestra selección
          </span>
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-white mb-5">
            Juegos Destacados
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-gold/30" />
            <div className="w-3 h-3 border border-gold/50 rotate-45" />
            <div className="w-12 h-px bg-gold/30" />
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {games.map((game, i) => (
            <motion.div
              key={game.slug}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="group relative bg-dark-card rounded-2xl overflow-hidden border border-white/5 hover:border-gold/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(26,35,126,0.3)]"
            >
              {/* Image placeholder with unique gradient */}
              <div className={`aspect-[4/3] bg-gradient-to-br ${game.color} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-cinzel text-gold/20 text-6xl md:text-7xl font-bold tracking-wider select-none group-hover:text-gold/30 transition-colors duration-500">
                    {game.name.charAt(0)}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-dark/70 backdrop-blur-md text-gold text-xs font-raleway tracking-wider uppercase px-3 py-1.5 rounded-full border border-gold/20">
                    {game.category}
                  </span>
                </div>

                {/* Players badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-dark/70 backdrop-blur-md text-white/70 text-xs font-inter px-3 py-1.5 rounded-full border border-white/10">
                    {game.players} jugadores
                  </span>
                </div>

                {/* Hover overlay */}
                <Link
                  href={`/juegos/${game.slug}`}
                  className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
                >
                  <span className="bg-gold text-dark font-raleway font-bold px-6 py-2.5 rounded-lg text-sm transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center gap-2">
                    <Eye size={14} />
                    Ver detalle
                  </span>
                </Link>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={12}
                      className={j < Math.floor(game.rating) ? "fill-gold text-gold" : "text-white/10"}
                    />
                  ))}
                  <span className="text-white/30 text-xs ml-1">{game.rating}</span>
                </div>
                <Link href={`/juegos/${game.slug}`}>
                  <h3 className="font-raleway font-bold text-white text-lg mb-1 group-hover:text-gold transition-colors duration-300">
                    {game.name}
                  </h3>
                </Link>
                <p className="text-white/40 text-xs font-inter mb-3 line-clamp-2">
                  {game.description}
                </p>
                <div className="flex items-center justify-between mt-3">
                  <span className="font-cinzel text-gold text-2xl font-bold">
                    {game.price}
                  </span>
                  <a
                    href="https://estratagema.com.ar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-white/40 hover:text-gold font-raleway transition-colors flex items-center gap-1"
                  >
                    Comprar
                    <ExternalLink size={10} />
                  </a>
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
            href="https://estratagema.com.ar/#!/categoria/0/pagina/0/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border border-gold/40 text-gold font-raleway font-semibold px-10 py-4 rounded-lg hover:bg-gold hover:text-dark transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,197,24,0.15)]"
          >
            Ver catálogo completo
            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
