import PaginateIndicator from "./PaginateIndicator";
import Movie from "./Movie";
import { useEffect, useState } from "react";
import useFetch from "@hooks/useFetch";

const FeatureMovies = () => {
  const [activeMovieId, setActiveMovieId] = useState();
  const { data: popularMoviesResponse } = useFetch({ url: "/movie/popular" });

  const movies = (popularMoviesResponse.results || []).slice(0, 4);

  useEffect(() => {
    if (movies[0]?.id) {
      setActiveMovieId(movies[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(movies)]);

  popularMoviesResponse.results || [];

  useEffect(() => {
    if (movies.length > 0) {
      const interval = setInterval(() => {
        setActiveMovieId((prevId) => {
          const currentIndex = movies.findIndex((movie) => movie.id === prevId);
          const nextIndex = (currentIndex + 1) % movies.length;
          return movies[nextIndex].id;
        });
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [movies]);
  
  return (
    <div className="relative text-white">
      {movies
        .filter((movie) => movie.id === activeMovieId)
        .map((movie) => (
          <Movie key={movie.id} data={movie} />
        ))}

      <PaginateIndicator
        movies={movies}
        activeMovieId={activeMovieId}
        setActiveMovieId={setActiveMovieId}
      />
    </div>
  );
};
export default FeatureMovies;
