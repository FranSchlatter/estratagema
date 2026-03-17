"use client";

import { motion } from "framer-motion";
import { Star, Users, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Game } from "@/data/games";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function RelatedGames({
  games,
  currentGameName,
}: {
  games: Game[];
  currentGameName: string;
}) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <span className="text-gold/60 text-sm font-raleway tracking-[0.3em] uppercase block mb-3">
          Si te gusta {currentGameName}
        </span>
        <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-white">
          También te puede interesar
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {games.map((game, i) => (
          <motion.div
            key={game.slug}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
          >
            <Link
              href={`/juegos/${game.slug}`}
              className="group block bg-dark-card rounded-2xl overflow-hidden border border-white/5 hover:border-gold/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(26,35,126,0.3)]"
            >
              {/* Image */}
              <div
                className={`aspect-[4/3] bg-gradient-to-br ${game.color} relative overflow-hidden`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-cinzel text-gold/20 text-6xl font-bold select-none group-hover:text-gold/30 transition-colors duration-500">
                    {game.name.charAt(0)}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent" />

                {/* Category */}
                <div className="absolute top-3 left-3">
                  <span className="bg-dark/70 backdrop-blur-md text-gold text-[10px] font-raleway tracking-wider uppercase px-2.5 py-1 rounded-full border border-gold/20">
                    {game.category}
                  </span>
                </div>

                {/* Players */}
                <div className="absolute top-3 right-3">
                  <span className="bg-dark/70 backdrop-blur-md text-white/60 text-[10px] font-inter px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1">
                    <Users size={10} />
                    {game.players}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="bg-gold text-dark font-raleway font-bold px-5 py-2 rounded-lg text-xs transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    Ver detalle
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center gap-1 mb-1.5">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={10}
                      className={
                        j < Math.floor(game.rating)
                          ? "fill-gold text-gold"
                          : "text-white/10"
                      }
                    />
                  ))}
                  <span className="text-white/30 text-[10px] ml-1">
                    {game.rating}
                  </span>
                </div>
                <h3 className="font-raleway font-bold text-white text-sm mb-1 group-hover:text-gold transition-colors duration-300">
                  {game.name}
                </h3>
                <span className="font-cinzel text-gold text-lg font-bold">
                  {game.price}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
