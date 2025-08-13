//useUpComingMovies

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { addUpComingMovies } from "../utils/moviesSlices";

const useUpComingMovies = () => {
    const options = API_OPTION;
    const dispatch = useDispatch();
    const getUpComingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
        const json = await data.json();
        console.log(json.results);
        dispatch(addUpComingMovies(json.results));
    };

    useEffect(() => {
        getUpComingMovies();
    }, []);
};

export default useUpComingMovies;