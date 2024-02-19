import MovieHeading from "./MovieHeading";
import MovieList from "./MovieList";

const MovieListWrapper=({favourites,setFavourites})=>{
    return(
        <div className="movie-list-wrapper">
            <MovieHeading/>
            <MovieList favourites={favourites} setFavourites={setFavourites}/>
        </div>
    )
}
export default MovieListWrapper;