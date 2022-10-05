import React from "react";

const PokemonsList = ({pokemons}) => {
  return (
    <div>
        {pokemons.map((pokemon) => {
          return(
            <div>{pokemon.name.english}</div>
          )
        })}
    </div>
  );
}

export default PokemonsList;