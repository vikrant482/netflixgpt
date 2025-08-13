import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { addTopRatedMovies } from "../utils/moviesSlices";

const useTopRatedMovies = () => {
    const options = API_OPTION;
    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
        const json = await data.json();
        console.log(json.results);
        dispatch(addTopRatedMovies(json.results));
    };

    useEffect(() => {
        getTopRatedMovies();
    }, []);
};

export default useTopRatedMovies;