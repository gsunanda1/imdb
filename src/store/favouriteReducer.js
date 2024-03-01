import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
    name:'favourites',
    initialState:{
       favourites:[],
       selectedGenre:'',
       favouriteList:[],
       searchedFavourites:[]
    },
    reducers:{
        setFavourites:(state,action)=>{
            // add duplicate check here
            const checkIfExists = state.favourites.find((fav)=> fav.id == action.payload.id);
            if(!checkIfExists)
            state.favourites.push(action.payload);
        },
        setSelectedGenre:(state,action)=>{
            state.selectedGenre = action.payload;
        },
        setFavouriteList:(state,action)=>{
            switch(action.payload.type){
                case 'search':
                    state.favouriteList = state.searchedFavourites?.filter((favourite)=> favourite.title.toLowerCase().includes(action.payload.val.toLowerCase()));
                    break;
                case 'sortasc':
                    state.favouriteList = [...state.searchedFavourites].sort((a,b)=> a.popularity - b.popularity);
                    break;
                case 'sortdesc':
                    state.favouriteList = [...state.searchedFavourites].sort((a,b)=> b.popularity - a.popularity);
                    break;
                case 'categorise':
                    state.favouriteList = state.searchedFavourites;
                    break;
                default:
                    break;
            }
            
        },
        setSearchedFavourites:(state,action)=>{
            state.searchedFavourites = state.favourites.filter((favourite)=> favourite.genre_ids[0] == state.selectedGenre);
        }
    }
})
export const {setFavourites,setSelectedGenre,setFavouriteList,setSearchedFavourites} = favouriteSlice.actions;
export default favouriteSlice.reducer;