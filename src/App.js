import { useEffect, useState } from 'react';
//d6f03d89
import '../src/App.css'
import searchIcon from '../src/search.svg'
import MovieCard from './movieCard'
const API_URL = 'http://www.omdbapi.com?apikey=d6f03d89'

// const movie1 = {
//   "Title": "Spiderman the Verse",
//   "Year": "2019–",
//   "imdbID": "tt12122034",
//   "Type": "series",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BNjA2NmZhOGEtZTQ5OS00MDI0LTg4N2UtYTRmOTllM2I2NDlhXkEyXkFqcGdeQXVyNTU4OTE5Nzc@._V1_SX300.jpg"
// }

function App() {
  
  const[movies, setMovies] = useState([]);
  const[searchTerm, setSearchTerm] =useState('')

  const SearchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);  //No space
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    SearchMovies('star wars')
  }, []);
  
  return (
    <div className="app">
      <h1>WatchMate</h1>
    
      <div className="search">
        <input
        placeholder='Search for movies'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}   
        />

        <img 
        src={searchIcon}
        alt='search'
        onClick={() => SearchMovies(searchTerm)}   
        />
      </div>

      {
        movies?.length > 0
        ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie = {movie}/>
          ))}
        </div>
        ) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )
      }
    </div>

     
  )
} 

export default App;
