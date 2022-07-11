import React, { useEffect, useState } from "react";
import axios from "axios";

function PokeCard(props) {
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    pegaPokemon(props.pokemon)
  }, [props.pokeName])

  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        setPokemon(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

    return (
      <figure>
        <p>{pokemon.name && pokemon.name.toUpperCase()}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </figure>
    );
}

export default PokeCard;