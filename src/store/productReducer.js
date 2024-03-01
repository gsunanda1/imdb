import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:'products',
    initialState:{
        activePage:1,
        moviePageStore:{}
    },
    reducers:{
        setActivePage:(state,action)=>{
            state.activePage = action.payload;
        },
        setMoviePageStore:(state,action)=>{
            state.moviePageStore[state.activePage]= action.payload;
        }
    }
})
export const {setActivePage,setMoviePageStore} = productSlice.actions;
export default productSlice.reducer;