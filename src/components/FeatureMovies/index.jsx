import { useEffect, useState } from "react";
import Movie from "./Movie";
import PageinateIndicator from "./PaginateIndicator";

const FeatureMovie = () => {
  const [movies, setMovies] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState(null);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTQ2MDE1NTNiMGM5OGViYzE2NmVmZTMxYmIzMDJjNyIsIm5iZiI6MTczNTI4OTQ4OC43ODQsInN1YiI6IjY3NmU2YTkwMGM0NDAyYjYzMTkyOTYyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R8yuaI0PWtIOq8Ds510DVIINFLM7UybAEUa6I_I_F10",
      },
    }).then(async (res) => {
      const data = await res.json();
      const popularMovies = data.results.slice(0, 4);
      setMovies(popularMovies);
      setActiveMovieId(popularMovies[0].id);
    });
  }, []);

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

      <PageinateIndicator
        movies={movies}
        activeMovieId={activeMovieId}
        setActiveMovieId={setActiveMovieId}
      />
    </div>
  );
};

export default FeatureMovie;
