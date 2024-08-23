import './App.css';
import { Link, Navigate, Route,Routes, useNavigate } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Product from './components/product';
import Notfound from './components/notfound';
import MovieList from './components/product';
import AddMovie from './components/about';
import { useState } from 'react';

function App() {
  const [movies,setMovies]=useState([
    {movieName:"Raayan",pic:"https://m.media-amazon.com/images/M/MV5BNWNlMjZlN2EtNDY0Yi00YTZlLThhZGEtOGY3ZjllOWQzNTAyXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_.jpg"},
    {
      movieName:"Goat",pic:"https://images.filmibeat.com/img/popcorn/movie_posters/the-greatest-of-all-time-20231231182913-21804.jpg"
    },
    {
      movieName:"Andhagan",pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL_ZIimm1YhKoUeg0-1DhHPYjfvUs1HdOVUw&s"
    }

  ])
  

  const navigate=useNavigate()
  
  return (
    <div className="App">
      <div className='navbar'>
        <Link to="/product">Product</Link>
        <button onClick={()=>navigate("/")}>Home</button>
        <button onClick={()=>navigate("/add")}>AddMovie</button>
        <button onClick={()=>navigate("/movies")}>Movies</button>

      </div>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/add" element={<AddMovie movies={movies} setMovies={setMovies}/>}/>
          <Route path="/movies" element={<MovieList movies={movies} setMovies={setMovies}/>}/>
          <Route path="/movies/:id" element={<MovieList/>}/>
          <Route path="/films" element={<Navigate replace to="/movies"/>}/>
          <Route path="/404" element={<Notfound/>}/>
          <Route path="*" element={<Navigate replace to="/404"/>}/>
      </Routes>

    </div>
  );
}

export default App;
