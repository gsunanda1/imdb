import { useParams } from "react-router-dom";
import Banner from "./Banner";
import { useEffect, useState } from "react";

const MovieDetailPage=()=>{
    const [movieDetail,setMovieDetail]=useState({});
    const {movieId}=useParams();
    useEffect(()=>{
        //fetch data for movieId
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=0b5415eb9bf023d556ef265b425e0e4a&language=en-US&page=1')
        .then(res=>res.json())
        .then(data=> {
            const result = data?.results?.find((movie)=> movie.id == movieId);
            return result;
        })
        .then(movie => setMovieDetail(movie));
    },[])
    return(
        <div>
            <h1>Movie Detail Page</h1>
            <Banner title={movieDetail?.title} description={movieDetail?.overview} image={movieDetail?.poster_path}/>
        </div>
    )
}
export default MovieDetailPage;