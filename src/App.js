import React,{useContext} from 'react';

import {MovieContext} from "./MovieContext"

function App() {

  const [movies, setMovies] = useContext(MovieContext)
  return (
    <div className="App">
{movies.map(movie => (
<h1>{movie.name}, {movie.price}, {movie.id}</h1>
))}


    </div>
  );
}

export default App;
