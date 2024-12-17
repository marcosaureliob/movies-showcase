import { Star } from "phosphor-react";
import { Link } from "react-router-dom";

const imageUrl = import.meta.env.VITE_IMG;

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

type MovieCardProps = {
  movie: Movie;
  showLink: boolean;
};

export default function MovieCard({ movie, showLink }: MovieCardProps) {
  return (
    <div className="bg-white w-fit rounded-lg shadow-md p-4 flex flex-col items-center">
      <img
        src={`${imageUrl}${movie.poster_path}`}
        alt={movie.title}
        className="w-2/3 h-2/3 rounded-md mb-4"
      />
      <h2 className="text-lg font-semibold text-gray-800 text-center mb-2">
        {movie.title}
      </h2>
      <p className="flex items-center text-yellow-500 font-medium mb-2">
        <Star size={20} weight="fill" className="mr-1" />
        {movie.vote_average.toFixed(1)}
      </p>
      {showLink && (
        <Link
          to={`/movie/${movie.id}`}
          className="mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Detalhes
        </Link>
      )}
    </div>
  );
}
