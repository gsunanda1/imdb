import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MoviePage from './components/MoviePage';
import Favourites from './components/Favourites';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MovieDetailPage from './components/MovieDetailPage';
import AddMovie from './components/AddMovie';
import AddMovieWithRef from './components/AddMovieWithRef';
import FavouriteProvider from './context/favourite';
function App() {
  
  return (
    <div className="container">
      <BrowserRouter>
        <Header/>
        <FavouriteProvider>
        <Routes>
            <Route path="/" element={<MoviePage/>}></Route>
            <Route path="/favourites" element={<Favourites/>}></Route>
            <Route path="/detail/:movieId" element={<MovieDetailPage/>}></Route>
            <Route path="/addmovie" element={<AddMovieWithRef/>}></Route>
        </Routes>
        </FavouriteProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
