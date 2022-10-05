import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const Pokemon = () => {
    const [pokemon, setPokemon] = useState();
    const { id } = useParams();

    useEffect(() => {
        axios
          .get(`http://localhost:3001/pokemons/${id}`)
          .then((response) => {
            setPokemon(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
    }, [id]);
    

  return (
    <div>
        {pokemon && (
        <>
          <h1>{pokemon.name.english}</h1>
          <ul>
            <li>{pokemon.name.japanese}</li>
            <li>{pokemon.name.chinese}</li>
            <li>{pokemon.name.french}</li>
          </ul>
          <div>{pokemon.type}</div>
          <ul>
            <li>{pokemon.base.HP}</li>
            <li>{pokemon.base.Attack}</li>
            <li>{pokemon.base["Sp. Attack"]}</li>
            <li>{pokemon.base["Sp. Defense"]}</li>
            <li>{pokemon.base.Speed}</li>
          </ul>
        </>
      )}
    </div>
  );
}

export default Pokemon;