import MovieCard from "./MovieCard";

const MovieList = ({ titles, movies }) => {
    if (!movies || movies.length === 0) {
        return null; // Or show a loading spinner
    }

    return (
        <div className="px-6 py-4 bg-[#0f172a] mb-8">
            <h1 className="text-xl font-bold mb-4 text-white">{titles}</h1>
            <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};


export default MovieList;