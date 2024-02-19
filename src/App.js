import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MoviePage from './components/MoviePage';
import Favourites from './components/Favourites';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MovieDetailPage from './components/MovieDetailPage';
import { useState } from 'react';
import AddMovie from './components/AddMovie';
import AddMovieWithRef from './components/AddMovieWithRef';
function App() {
  const [favourites,setFavourites]=useState([]);
  return (
    <div className="container">
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<MoviePage favourites={favourites} setFavourites={setFavourites}/>}></Route>
            <Route path="/favourites" element={<Favourites favourites={favourites}/>}></Route>
            <Route path="/detail/:movieId" element={<MovieDetailPage/>}></Route>
            <Route path="/addmovie" element={<AddMovieWithRef/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
