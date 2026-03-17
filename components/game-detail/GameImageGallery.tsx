"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { Game } from "@/data/games";

export default function GameImageGallery({ game }: { game: Game }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const goTo = (index: number) => {
    const total = game.images.length;
    setSelectedIndex(((index % total) + total) % total);
  };

  return (
    <>
      <div className="space-y-4">
        {/* Main Image */}
        <div
          className={`relative aspect-[4/3] bg-gradient-to-br ${game.color} rounded-2xl overflow-hidden border border-white/5 group cursor-pointer`}
          onClick={() => setLightboxOpen(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Placeholder - large initial with game name */}
              <div className="text-center">
                <span className="font-cinzel text-gold/15 text-[120px] md:text-[160px] font-bold leading-none select-none block">
                  {game.name.charAt(0)}
                </span>
                <span className="font-raleway text-white/10 text-sm tracking-[0.3em] uppercase mt-2 block">
                  {game.images[selectedIndex]?.alt || game.name}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />

          {/* Expand icon */}
          <div className="absolute top-4 right-4 bg-dark/50 backdrop-blur-md rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10">
            <Expand size={18} className="text-white/70" />
          </div>

          {/* Navigation arrows */}
          {game.images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goTo(selectedIndex - 1);
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-dark/50 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10 hover:border-gold/30"
              >
                <ChevronLeft size={20} className="text-white/70" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goTo(selectedIndex + 1);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-dark/50 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10 hover:border-gold/30"
              >
                <ChevronRight size={20} className="text-white/70" />
              </button>
            </>
          )}

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-dark/60 backdrop-blur-md rounded-full px-3 py-1 text-xs font-inter text-white/50 border border-white/10">
            {selectedIndex + 1} / {game.images.length}
          </div>
        </div>

        {/* Thumbnails */}
        {game.images.length > 1 && (
          <div className="grid grid-cols-4 gap-3">
            {game.images.map((image, i) => (
              <button
                key={i}
                onClick={() => setSelectedIndex(i)}
                className={`relative aspect-square bg-gradient-to-br ${game.color} rounded-xl overflow-hidden border transition-all duration-300 ${
                  selectedIndex === i
                    ? "border-gold/50 ring-2 ring-gold/20"
                    : "border-white/5 hover:border-white/20 opacity-60 hover:opacity-100"
                }`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-cinzel text-gold/15 text-2xl font-bold select-none">
                    {game.name.charAt(0)}
                  </span>
                </div>
                <span className="absolute bottom-1 left-1 right-1 text-[8px] text-white/20 font-inter text-center truncate">
                  {image.alt.split(" - ")[1] || `Imagen ${i + 1}`}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-dark/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`relative w-full max-w-4xl aspect-[4/3] bg-gradient-to-br ${game.color} rounded-2xl overflow-hidden border border-white/10`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="font-cinzel text-gold/20 text-[200px] font-bold leading-none select-none block">
                    {game.name.charAt(0)}
                  </span>
                  <span className="font-raleway text-white/15 text-lg tracking-[0.3em] uppercase block">
                    {game.images[selectedIndex]?.alt || game.name}
                  </span>
                </div>
              </div>

              {/* Navigation */}
              {game.images.length > 1 && (
                <>
                  <button
                    onClick={() => goTo(selectedIndex - 1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-dark/60 backdrop-blur-md rounded-full p-3 border border-white/10 hover:border-gold/30 transition-colors"
                  >
                    <ChevronLeft size={24} className="text-white/70" />
                  </button>
                  <button
                    onClick={() => goTo(selectedIndex + 1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-dark/60 backdrop-blur-md rounded-full p-3 border border-white/10 hover:border-gold/30 transition-colors"
                  >
                    <ChevronRight size={24} className="text-white/70" />
                  </button>
                </>
              )}

              {/* Close hint */}
              <div className="absolute top-4 right-4 text-white/30 text-sm font-inter">
                ESC para cerrar
              </div>

              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-dark/60 backdrop-blur-md rounded-full px-4 py-1.5 text-sm font-inter text-white/50 border border-white/10">
                {selectedIndex + 1} / {game.images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
