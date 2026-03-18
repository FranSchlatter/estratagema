import { notFound } from "next/navigation";
import { Metadata } from "next";
import { games, getGameBySlug } from "@/data/games";
import GameDetail from "@/components/game-detail/GameDetail";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);
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

export default async function GamePage({ params }: Props) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) notFound();

  return (
    <main>
      <Navbar />
      <GameDetail game={game} />
      <Footer />
    </main>
  );
}
