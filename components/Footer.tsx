"use client";

import { Instagram, Facebook, MessageCircle, MapPin, Clock, Mail, ExternalLink } from "lucide-react";

const quickLinks = [
  { label: "Juegos", href: "#juegos" },
  { label: "Eventos", href: "#eventos" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "#contacto" },
];

const shopLinks = [
  { label: "Catálogo completo", href: "https://estratagema.com.ar/#!/categoria/0/pagina/0/" },
  { label: "Puzzles", href: "https://estratagema.com.ar/#!/categoria/55/pagina/0/" },
  { label: "Ludoteca Ludigema", href: "https://ludigema.com.ar" },
  { label: "Recomendanos un juego", href: "https://forms.gle/KG9mezNVEGQF7R4x8" },
];

export default function Footer() {
  return (
    <footer id="contacto" className="relative bg-dark-footer">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Col 1: Brand */}
          <div className="lg:col-span-1">
            <span className="font-cinzel text-gold text-2xl font-bold tracking-[0.15em] block mb-4">
              ESTRATAGEMA
            </span>
            <p className="text-white/30 text-sm font-inter leading-relaxed mb-6">
              Tu tienda de juegos de mesa en Santa Fe. Juegos de mesa modernos,
              puzzles, rol y mucho más desde hace más de 10 años.
            </p>
            <div className="flex gap-2">
              <a
                href="https://www.instagram.com/estratagema.juegos/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-white/40 hover:bg-gold/10 hover:text-gold border border-white/5 hover:border-gold/20 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/estratagema.juegos/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-white/40 hover:bg-gold/10 hover:text-gold border border-white/5 hover:border-gold/20 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://wa.me/5493425064651"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-white/40 hover:bg-green-500/10 hover:text-green-400 border border-white/5 hover:border-green-500/20 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="font-raleway font-bold text-white text-sm tracking-wider uppercase mb-5">
              Navegación
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/30 hover:text-gold text-sm font-inter transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-white/10 rounded-full group-hover:bg-gold transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Shop */}
          <div>
            <h3 className="font-raleway font-bold text-white text-sm tracking-wider uppercase mb-5">
              Tienda
            </h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/30 hover:text-gold text-sm font-inter transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ExternalLink size={10} className="text-white/10 group-hover:text-gold transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="font-raleway font-bold text-white text-sm tracking-wider uppercase mb-5">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-gold/60 flex-shrink-0 mt-0.5" size={14} />
                <span className="text-white/30 text-sm font-inter">
                  4 de Enero 2520, Santa Fe
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-gold/60 flex-shrink-0 mt-0.5" size={14} />
                <div className="text-white/30 text-sm font-inter">
                  <p>Lun-Vie: 9:30-13:30 / 16-20</p>
                  <p>Sáb: 10-13 / 17-20</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-gold/60 flex-shrink-0 mt-0.5" size={14} />
                <span className="text-white/30 text-sm font-inter">
                  contacto@estratagema.com.ar
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/15 text-xs font-inter">
            &copy; 2026 Estratagema. Todos los derechos reservados.
          </p>
          <p className="text-white/10 text-xs font-inter">
            Diseñado con pasión por los juegos de mesa
          </p>
        </div>
      </div>
    </footer>
  );
}
