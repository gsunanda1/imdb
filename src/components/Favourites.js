import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { FavouriteContext } from "../context/favourite";

let genreIds = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV",
    53: "Thriller",
    10752: "War",
    37: "Western",
}
const Favourites = () => {
    const {favourites} = useContext(FavouriteContext);
    //const [genres,setGenres]=useState([]);
    const [favouriteList,setFavouriteList]= useState(favourites);
    // useEffect(()=>{
    //     const genreIds = Array.from(new Set(favourites.map((fav)=> fav.genre_ids[0])));
    //     setGenres(genreIds);
    // },[favourites]);

   
    const genres = useMemo(()=>{
        return Array.from(new Set(favourites.map((fav)=> fav.genre_ids[0])))
    },[favourites]);

    const [selectedGenre,setSelectedGenre]= useState('');
    const [searchedFavourites, setSearchedFavourites] = useState(favourites);
    
    // search text
    const handleSearch=useCallback((e)=>{
        const searchText = e.target.value;
        setFavouriteList(()=>{
            const filteredList = searchedFavourites?.filter((favourite)=> favourite.title.toLowerCase().includes(searchText.toLowerCase()));
            return filteredList;
        });
    },[searchedFavourites]);

    // filter by genre
    const filterByGenre=useCallback((genreId)=>{
        setSearchedFavourites(()=>{
            const filteredList = favourites.filter((favourite)=> favourite.genre_ids[0] == genreId);
            setFavouriteList(filteredList);
            return filteredList;
        });
    },[favourites]);
    // sorting
    const handleAsc=useCallback(()=>{
        setFavouriteList(()=>{
            const filteredList = [...searchedFavourites].sort((a,b)=> a.popularity - b.popularity);
            return filteredList;
        });
    },[searchedFavourites]);

    const handleDesc=useCallback(()=>{
        setFavouriteList(()=>{
            const filteredList = [...searchedFavourites].sort((a,b)=> b.popularity - a.popularity);
            return filteredList;
        });
    },[searchedFavourites]);

    return (
        <div className="favourites">
            <div className="left-section">
                <div className="genres-wrapper">
                    <ul>
                        <li className={selectedGenre == ''? 'selected':''} onClick={()=> {setSelectedGenre('');setFavouriteList(favourites)}}>All Genres</li>
                        {
                            genres?.map((genreId)=>{
                                return(<li className={genreId == selectedGenre ? 'selected':''} onClick={()=> {setSelectedGenre(genreId);filterByGenre(genreId);}}>{genreIds[genreId]}</li>)
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="right-section">
                <input type="text" placeholder="Search" onChange={handleSearch}/>
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Genre</th>
                            <th><span onClick={handleAsc}>^</span>Popularity<span onClick={handleDesc}>v</span></th>
                            <th>Rating</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            favouriteList.map((favourite) => {
                                return (
                                    <tr>
                                        <td><img src={`https://image.tmdb.org/t/p/original${favourite.poster_path}`}/></td>
                                        <td>{favourite.title}</td>
                                        <td>{favourite.genre_ids && genreIds[favourite.genre_ids[0]]}</td>
                                        <td>{favourite.popularity}</td>
                                        <td>{favourite.vote_average}</td>
                                        <td><button>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Favourites;