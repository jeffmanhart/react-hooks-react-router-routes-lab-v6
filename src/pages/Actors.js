import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([])

  useEffect(() =>{
    fetch("http://localhost:4000/actors")
    .then(r => r.json())
    .then(data => setActors(data))
    .catch(error => console.error(error))
  }, [])


  const actorList = actors.map(actor => 
  <article key={actor.id}  movies={actor.movies}>
    <h2>{actor.name}</h2>
    <ul>
    {actor.movies.map((m)=> <li>{m}</li>)}
    </ul>
  </article>)
  
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
      <h1>Actors Page</h1>
        {actorList}
      </main>
    </>
  );
};

export default Actors;
