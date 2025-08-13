import { useEffect, useState } from "react";
import { API_OPTION } from "../utils/constant";

const VideoBackground = ({ movieId }) => {
    const [trailer, setTrailer] = useState(null);

    const getMoviesVideos = async () => {
        try {
            if (!movieId) return; // prevent API call without ID

            const data = await fetch(
                `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
                API_OPTION
            );
            const json = await data.json();

            if (!json.results || !Array.isArray(json.results)) {
                console.error("Invalid API response:", json);
                return;
            }

            const filterData = json.results.filter((video) => video.type === "Trailer");
            const selectedTrailer = filterData.length ? filterData[0] : json.results[0];
            setTrailer(selectedTrailer);
        } catch (error) {
            console.error("Error fetching movie videos:", error);
        }
    };

    useEffect(() => {
        getMoviesVideos();
    }, [movieId]);

    if (!trailer) return null;

    return (
        <div className="w-full h-screen">
            <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1`}
                title={trailer?.name || "Movie Trailer"}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            />
        </div>
    );
};

export default VideoBackground;
