"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ArrowLeft,
  Star,
  Users,
  Clock,
  Baby,
  BarChart3,
  Puzzle,
  Tag,
  ShoppingCart,
  ExternalLink,
  ChevronRight,
  Award,
  Package,
  CheckCircle2,
  Sparkles,
  Flame,
  HelpCircle,
  BookOpen,
  Percent,
  X,
  Banknote,
} from "lucide-react";
import Link from "next/link";
import { Game, getRelatedGames, getExpansionNames, getGamesByCategory } from "@/data/games";
import GameImageGallery from "./GameImageGallery";
import RelatedGames from "./RelatedGames";

function ComplexityBar({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={`h-2 w-6 rounded-full transition-colors ${
            i <= Math.round(level)
              ? "bg-gold"
              : "bg-white/10"
          }`}
        />
      ))}
      <span className="text-white/40 text-xs ml-2">{level.toFixed(1)}/5</span>
    </div>
  );
}

function StatBadge({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-dark-card/80 border border-white/5 rounded-xl p-4 flex flex-col items-center gap-2 text-center">
      <Icon size={20} className="text-gold" />
      <span className="text-white font-raleway font-semibold text-sm">{value}</span>
      <span className="text-white/40 text-xs font-inter">{label}</span>
    </div>
  );
}

function RentalBadge({ game }: { game: Game }) {
  const [showInfo, setShowInfo] = useState(false);
  const rentalPrice = Math.round(game.priceNumber * 0.1);
  const isRented = game.rental?.currentlyRented;

  return (
    <>
      <div className="border-t border-white/5 pt-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen size={16} className="text-purple-400" />
            <span className="text-white/60 text-sm font-inter">
              Alquilar por 1 semana
            </span>
            <button
              onClick={() => setShowInfo(true)}
              className="text-white/30 hover:text-gold transition-colors"
              aria-label="Info sobre alquiler"
            >
              <HelpCircle size={14} />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-cinzel text-purple-300 text-lg font-bold">
              ${rentalPrice.toLocaleString("es-AR")}
            </span>
            {isRented ? (
              <span className="text-orange-400/80 text-xs font-inter bg-orange-500/10 border border-orange-500/20 px-2 py-1 rounded-full">
                Alquilado
              </span>
            ) : (
              <a
                href={`https://wa.me/5493425064651?text=Hola! Quiero alquilar ${game.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-raleway font-semibold bg-purple-500/10 border border-purple-500/30 text-purple-300 px-3 py-1.5 rounded-lg hover:bg-purple-500/20 transition-colors"
              >
                Alquilar
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Rental Info Modal */}
      <AnimatePresence>
        {showInfo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-dark/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setShowInfo(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-dark-card border border-white/10 rounded-2xl p-6 md:p-8 max-w-lg w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowInfo(false)}
                className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                  <BookOpen size={20} className="text-purple-400" />
                </div>
                <h3 className="font-cinzel text-xl font-bold text-white">
                  Alquiler de juegos
                </h3>
              </div>

              <div className="space-y-4 text-sm font-inter">
                <div className="space-y-3">
                  {[
                    { step: "1", text: "Elegí los juegos que querés entre los disponibles" },
                    { step: "2", text: "Podés alquilar hasta 3 juegos por vez" },
                    { step: "3", text: "Retiralos por el showroom" },
                    { step: "4", text: "Disfrutalos por 5 o 10 días" },
                    { step: "5", text: "Devolvelos en el showroom" },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold text-xs font-bold shrink-0">
                        {item.step}
                      </span>
                      <span className="text-white/60 pt-0.5">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-emerald-500/5 border border-emerald-500/15 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Percent size={14} className="text-emerald-400" />
                    <span className="text-emerald-400 font-semibold text-xs">Beneficio</span>
                  </div>
                  <p className="text-white/50 text-xs">
                    10% de descuento en la compra del juego nuevo si antes lo alquilaste. Sin vencimiento.
                  </p>
                </div>

                <p className="text-white/30 text-xs">
                  Beneficio exclusivo para clientes de Santa Fe y alrededores.
                </p>

                <a
                  href="https://ludigema.com.ar/como-alquilar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold/70 hover:text-gold text-xs transition-colors"
                >
                  Ver toda la info en Ludigema
                  <ExternalLink size={10} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function GameDetail({ game }: { game: Game }) {
  const relatedGames = getRelatedGames(game);
  const sameCategoryGames = getGamesByCategory(game.category, game.slug);
  const expansionNames = getExpansionNames(game);

  const allRelated = [
    ...relatedGames,
    ...sameCategoryGames.filter(
      (g) => !relatedGames.find((r) => r.slug === g.slug)
    ),
  ].slice(0, 4);

  return (
    <div className="bg-dark min-h-screen pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <motion.nav
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-sm font-inter"
        >
          <Link
            href="/"
            className="text-white/40 hover:text-gold transition-colors"
          >
            Inicio
          </Link>
          <ChevronRight size={14} className="text-white/20" />
          <Link
            href="/#juegos"
            className="text-white/40 hover:text-gold transition-colors"
          >
            Juegos
          </Link>
          <ChevronRight size={14} className="text-white/20" />
          <span className="text-gold">{game.name}</span>
        </motion.nav>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <GameImageGallery game={game} />
          </motion.div>

          {/* Right: Game Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col"
          >
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="bg-gold/10 border border-gold/30 text-gold text-xs font-raleway tracking-wider uppercase px-3 py-1.5 rounded-full">
                {game.category}
              </span>
              {game.subcategory && (
                <span className="bg-white/5 border border-white/10 text-white/60 text-xs font-inter px-3 py-1.5 rounded-full">
                  {game.subcategory}
                </span>
              )}
              {game.isBestseller && (
                <span className="bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-raleway tracking-wider uppercase px-3 py-1.5 rounded-full flex items-center gap-1">
                  <Flame size={12} />
                  Bestseller
                </span>
              )}
              {game.isNew && (
                <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-raleway tracking-wider uppercase px-3 py-1.5 rounded-full flex items-center gap-1">
                  <Sparkles size={12} />
                  Novedad
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
              {game.name}
            </h1>

            {/* Designer & Publisher */}
            <p className="text-white/40 font-inter text-sm mb-4">
              Diseñado por{" "}
              <span className="text-white/70">{game.designer}</span>
              {" · "}
              Publicado por{" "}
              <span className="text-white/70">{game.publisher}</span>
              {" · "}
              <span className="text-white/70">{game.year}</span>
            </p>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className={
                      j < Math.floor(game.rating)
                        ? "fill-gold text-gold"
                        : j < game.rating
                        ? "fill-gold/50 text-gold/50"
                        : "text-white/10"
                    }
                  />
                ))}
              </div>
              <span className="text-gold font-raleway font-bold">
                {game.rating}
              </span>
              <span className="text-white/30 text-sm">
                ({game.reviewCount} reseñas)
              </span>
            </div>

            {/* Description */}
            <p className="text-white/60 font-inter leading-relaxed mb-8 text-base">
              {game.description}
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              <StatBadge icon={Users} label="Jugadores" value={game.players} />
              <StatBadge icon={Clock} label="Duración" value={game.playTime} />
              <StatBadge icon={Baby} label="Edad" value={game.age} />
              <div className="bg-dark-card/80 border border-white/5 rounded-xl p-4 flex flex-col items-center gap-2 text-center">
                <BarChart3 size={20} className="text-gold" />
                <ComplexityBar level={game.complexity} />
                <span className="text-white/40 text-xs font-inter">
                  Complejidad
                </span>
              </div>
            </div>

            {/* Price & CTA */}
            <div className="mt-auto bg-dark-card/60 border border-white/5 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="font-cinzel text-gold text-3xl md:text-4xl font-bold">
                    {game.price}
                  </span>
                  <span className="text-white/30 text-sm ml-2 font-inter">
                    ARS
                  </span>
                </div>
                {game.inStock ? (
                  <span className="flex items-center gap-1.5 text-emerald-400 text-sm font-inter">
                    <CheckCircle2 size={16} />
                    En stock
                  </span>
                ) : (
                  <span className="text-red-400 text-sm font-inter">
                    Sin stock
                  </span>
                )}
              </div>

              {/* Transfer discount */}
              {game.transferDiscount && (
                <div className="flex items-center gap-2 mb-4 bg-emerald-500/5 border border-emerald-500/15 rounded-lg px-3 py-2">
                  <Banknote size={14} className="text-emerald-400 shrink-0" />
                  <span className="text-emerald-400/80 text-xs font-inter">
                    <span className="font-semibold">10% OFF</span> pagando con transferencia bancaria —{" "}
                    <span className="text-emerald-300 font-semibold">
                      ${Math.round(game.priceNumber * 0.9).toLocaleString("es-AR")}
                    </span>
                  </span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 mb-3">
                <a
                  href="https://estratagema.com.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-gold text-dark font-raleway font-bold px-6 py-3.5 rounded-xl text-sm hover:bg-yellow-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,197,24,0.2)]"
                >
                  <ShoppingCart size={18} />
                  Comprar en tienda
                </a>
                <a
                  href={`https://wa.me/5493425064651?text=Hola! Me interesa el juego ${game.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-white/10 text-white/70 font-raleway font-semibold px-6 py-3.5 rounded-xl text-sm hover:border-gold/30 hover:text-gold transition-all duration-300"
                >
                  Consultar por WhatsApp
                </a>
              </div>

              {/* Rental section */}
              {game.rental?.available && (
                <RentalBadge game={game} />
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Info Section */}
      <section className="bg-dark-card/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left: Long Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-1 h-8 bg-gold rounded-full" />
                Acerca del juego
              </h2>
              <div className="prose prose-invert max-w-none">
                {game.longDescription.split("\n\n").map((paragraph, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="text-white/60 font-inter leading-relaxed mb-5 text-base"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-10"
              >
                <h3 className="font-raleway font-bold text-white text-lg mb-5 flex items-center gap-2">
                  <Award size={20} className="text-gold" />
                  Puntos destacados
                </h3>
                <ul className="space-y-3">
                  {game.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex items-start gap-3 text-white/60 font-inter text-sm"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-gold mt-0.5 shrink-0"
                      />
                      {highlight}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Right: Sidebar Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Mechanics */}
              <div className="bg-dark-card border border-white/5 rounded-2xl p-6">
                <h3 className="font-raleway font-bold text-white text-lg mb-4 flex items-center gap-2">
                  <Puzzle size={18} className="text-gold" />
                  Mecánicas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {game.mechanics.map((mechanic) => (
                    <span
                      key={mechanic}
                      className="bg-navy/30 border border-navy/50 text-white/70 text-xs font-inter px-3 py-1.5 rounded-lg"
                    >
                      {mechanic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Themes */}
              <div className="bg-dark-card border border-white/5 rounded-2xl p-6">
                <h3 className="font-raleway font-bold text-white text-lg mb-4 flex items-center gap-2">
                  <Tag size={18} className="text-gold" />
                  Temáticas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {game.themes.map((theme) => (
                    <span
                      key={theme}
                      className="bg-gold/5 border border-gold/20 text-gold/80 text-xs font-inter px-3 py-1.5 rounded-lg"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expansions */}
              {expansionNames.length > 0 && (
                <div className="bg-dark-card border border-white/5 rounded-2xl p-6">
                  <h3 className="font-raleway font-bold text-white text-lg mb-4 flex items-center gap-2">
                    <Package size={18} className="text-gold" />
                    Expansiones disponibles
                  </h3>
                  <ul className="space-y-2">
                    {expansionNames.map((name) => (
                      <li
                        key={name}
                        className="flex items-center gap-2 text-white/60 text-sm font-inter"
                      >
                        <ChevronRight size={14} className="text-gold/50" />
                        {name}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://estratagema.com.ar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-gold/60 hover:text-gold text-xs font-inter mt-4 transition-colors"
                  >
                    Ver en tienda
                    <ExternalLink size={10} />
                  </a>
                </div>
              )}

              {/* Game Details Table */}
              <div className="bg-dark-card border border-white/5 rounded-2xl p-6">
                <h3 className="font-raleway font-bold text-white text-lg mb-4">
                  Ficha técnica
                </h3>
                <dl className="space-y-3 text-sm font-inter">
                  {[
                    ["Diseñador", game.designer],
                    ["Editorial", game.publisher],
                    ["Año", game.year.toString()],
                    ["Jugadores", game.players],
                    ["Duración", game.playTime],
                    ["Edad mínima", game.age],
                    ["Categoría", game.category],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                    >
                      <dt className="text-white/40">{label}</dt>
                      <dd className="text-white/80 font-medium">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Games */}
      {allRelated.length > 0 && (
        <RelatedGames games={allRelated} currentGameName={game.name} />
      )}

      {/* Back to catalog CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link
            href="/#juegos"
            className="inline-flex items-center gap-2 text-white/40 hover:text-gold font-raleway text-sm transition-colors duration-300"
          >
            <ArrowLeft size={16} />
            Volver a juegos destacados
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
