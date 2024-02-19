import Banner from "./Banner"
import MovieListWrapper from "./MovieListWrapper"

const MoviePage=({favourites,setFavourites})=>{
    return(
        <div>
            <Banner title={'Время патриотов'} 
            description={"The brothers Sultan and Bekzat Ibrayev are serving faithfully in the Armed Forces of Kazakhstan, and at the same time they are in family disagreement. Sultan is a valiant intelligence officer and Bekzat is a talented fighter pilot. While an international terrorist organization prepares a carefully planned attack on the country's strategically important facilities, the brothers have to face not only a mortal threat, but also face a family confrontation related to their dead father. Circumstances force them to unite in order to save human lives, and the brothers eventually understand that their homeland and family are the most valuable thing they have."} 
            image={'/yrafAmPQgr5RWEe67BrbHu7jiB.jpg'}/>
            <MovieListWrapper favourites={favourites} setFavourites={setFavourites}/>
        </div>
    )
}
export default MoviePage;