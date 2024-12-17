import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Home() {
  const [topMovies, setTopMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getTopRatedMovies = async (url: string) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("Erro ao buscar os filmes");
      }

      const data = await res.json();
      setTopMovies(data.results);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const topRatedUrl = `${moviesUrl}/top_rated?${apiKey}`;
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Melhores filmes:
      </h2>

      {error && (
        <p className="text-red-500 font-semibold">
          Ocorreu um erro: {error}
        </p>
      )}

      {isLoading && (
        <p className="text-gray-500 italic">Carregando...</p>
      )}

      {!isLoading && !error && topMovies.length > 0 && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {topMovies.map((movie) => (
            <li key={movie.id} className="list-none">
              <MovieCard movie={movie} showLink={true} />
            </li>
          ))}
        </ul>
      )}

      {!isLoading && !error && topMovies.length === 0 && (
        <p className="text-gray-500 italic">Nenhum filme encontrado.</p>
      )}
    </div>
  );
}
