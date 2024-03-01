import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import { movies as movieData } from "../mockData/movieData";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage, setMoviePageStore } from "../store/productReducer";
const MovieList = () => {
    //const [movies,setMovies]= useState();
    // const [activePage,setActivePage]= useState(1);
    // const [moviePageStore,setMoviePageStore]=useState({});

    const { activePage, moviePageStore } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    // we use this fetch in js generally
    const fetchMovieData = () => {
       // dispatch(setActivePage(activePage));
        const pageWiseMovie = moviePageStore[activePage];
        if (!pageWiseMovie) {
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=0fb3a14219996b3060f6bef1a34a1f38&language=en-US&page=${activePage}`)
                .then(res => res.json())
                .then(data => {
                    //setMovies(data);
                    //dispatch(setActivePage(pageNumber));
                    //should not mutate state directly
                    //moviePageStore[pageNumber] = data
                    dispatch(setMoviePageStore(data));
                });
        }
    }
    useEffect(() => {
        fetchMovieData();
    }, [activePage])
    return (
        <div className="movie-list">
            {
                moviePageStore?.[activePage]?.results?.map((movie) => {
                    return (<MovieCard movie={movie} />)
                })
            }
            {
                moviePageStore?.[activePage]?.total_pages &&
                <Pagination totalPages={moviePageStore?.[activePage]?.total_pages} />
            }

        </div>
    )
}
export default MovieList;