import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);
    return (
       <div className="space-y-10 px-6 py-8 bg-[#0f172a]">
            <MovieList titles="Now Playing" movies={movies.nowPlayingMovies} />
            <MovieList titles="Popular" movies={movies.popularMovies} />
            <MovieList titles="Up Coming" movies={movies.upComingMovies} />
            <MovieList titles="Top Rated" movies={movies.topRatedMovies} />
        </div>

    );
};

export default SecondaryContainer;