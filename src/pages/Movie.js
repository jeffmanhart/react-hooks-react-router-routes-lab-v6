import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import NavBar from "../components/NavBar";

function Movie() {
  const [movieDetails, setMovieDetails] = useState({})
  const params = useParams();
  const movieId = params.id

  useEffect(() =>{
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(r => r.json())
    .then(data => setMovieDetails(data))
    .catch(error => console.error(error))
  }, [movieId])
  
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movieDetails.title}</h1>
        <p>{movieDetails.time}</p>
        <span>{movieDetails.genres}</span>
      </main>
    </>
  );
};

export default Movie;
