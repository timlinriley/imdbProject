import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import Form from './components/Form'
import DisplayMovies from './components/DisplayMovies';
import Display from './components/Display';

function App() {

const apiKey = "9011f3c8";
  const [movie, setMovie] = useState(null);
  // {let favMovies = []};
  const [favMovies, setFavMovies] = useState([])
  // const addFavMovies = (movie) => {
  //   setFavMovies([...favMovies, {movie}])
  //   console.log(addFavMovies)
  // };
  const getMovie = async (entry) => {
    // make fetch request and store response
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${entry}`
    );
    // Parse JSON response into a javascript object
    const data = await response.json();
    //set the Movie state to the movie
    setMovie(data);
    // setFavMovies([...favMovies, data]);
    // Try this:
    setFavMovies((prev) => [...prev, data]);
 
    console.log(movie, '**')
    console.log(favMovies, 'favMovies Array')

  
  };



  return (
    <div className="App">
      <Form favMovie={getMovie}  />
      {/* favMovies={addFavMovies} */}
      <DisplayMovies favMovies={favMovies} />
    </div>
  );
}
export default App;
