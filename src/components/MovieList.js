import MovieCard from "./MovieCard";
import {useEffect, useState} from "react";
import { movies as movieData } from "../mockData/movieData";
import Pagination from "./Pagination";
const MovieList=({favourites,setFavourites})=>{
    const [movies,setMovies]= useState();
    const [moviePageStore,setMoviePageStore]=useState({});
    // we use this fetch in js generally
    const fetchMovieData = (pageNumber = 1) => {
        const pageWiseMovie = moviePageStore[pageNumber];
        if (!pageWiseMovie) {
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=0b5415eb9bf023d556ef265b425e0e4a&language=en-US&page=${pageNumber}`)
                .then(res => res.json())
                .then(data => {
                    setMovies(data);
                    //should not mutate state directly
                    //moviePageStore[pageNumber] = data
                    setMoviePageStore((preValue)=>{
                        return {
                            ...preValue,
                            [pageNumber]:data
                        }
                    });
        }   );
    }
        else{
            setMovies(pageWiseMovie);
        }
    }
    useEffect(()=>{
        fetchMovieData();
    },[])
    return(
        <div className="movie-list">
            {
                movies?.results?.map((movie)=>{
                    return (<MovieCard movie={movie} favourites={favourites} setFavourites={setFavourites}/>)
                }) 
            }
            {
                movies?.total_pages && 
                <Pagination totalPages={movies?.total_pages} fetchMovieData={fetchMovieData}/>
            }
            
        </div>
    )
}
export default MovieList;