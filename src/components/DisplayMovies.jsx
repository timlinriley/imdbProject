import React from 'react'

function DisplayMovies({ favMovies }) {
    const loaded = () => {
        return (
          <>
            <h1>{favMovies.Title}</h1>
            <h2>{favMovies.Genre}</h2>
            <img src={favMovies.Poster} alt={favMovies.Title} />
            <h2>{favMovies.Year}</h2>
          </>
        );
      };

      const loading = () => {
        return <h1>No Movie to Display</h1>;
      };

      return favMovies ? loaded() : loading(); 
  

}

export default DisplayMovies