const MovieCard = ({ movie }) => {
    return (
        <div className="w-48 flex-shrink-0">
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded-lg shadow-lg"
            />
        </div>
    );
};


export default MovieCard;