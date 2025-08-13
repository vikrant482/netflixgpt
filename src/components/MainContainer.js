// MainContainer.jsx
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if (!movies) return null;

    const mainMovie = movies[2];
    const { original_title, overview, id } = mainMovie;

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <VideoBackground movieId = {id} />
            
            {/* Dark overlay on video */}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-5" />
            
            {/* Gradient overlay for cinematic look */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-black z-5" />
            
            <VideoTitle title={original_title} overview={overview} />
        </div>
    );
};

export default MainContainer;
