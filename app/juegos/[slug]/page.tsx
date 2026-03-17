import { notFound } from "next/navigation";
import { Metadata } from "next";
import { games, getGameBySlug } from "@/data/games";
import GameDetail from "@/components/game-detail/GameDetail";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const game = getGameBySlug(params.slug);
  if (!game) return { title: "Juego no encontrado" };

  return {
    title: `${game.name} | Estratagema`,
    description: game.description,
    openGraph: {
      title: `${game.name} | Estratagema`,
      description: game.description,
      type: "website",
    },
  };
}

export default function GamePage({ params }: Props) {
  const game = getGameBySlug(params.slug);
  if (!game) notFound();

  return (
    <main>
      <Navbar />
      <GameDetail game={game} />
      <Footer />
    </main>
  );
}
