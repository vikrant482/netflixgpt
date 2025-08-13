import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/moviesSlices";

const useNowPlayingMovies = () => {
    const options = API_OPTION;
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
        const json = await data.json();
        console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, []);
};

export default useNowPlayingMovies;