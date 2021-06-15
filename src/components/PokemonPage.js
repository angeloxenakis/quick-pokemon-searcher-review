import React, {useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokeCollection, setPokeCollection] = useState([])
  const [filteredPokemon, setFilteredPokemon] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(res => res.json())
    .then(pokeData => {
      setPokeCollection(pokeData)
      setFilteredPokemon(pokeData)
    })
  }, [])

  const searchPokemon = (searchTerm) => {
    return setFilteredPokemon(pokeCollection.filter(pokemon => pokemon.name.includes(searchTerm)))
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search searchPokemon={searchPokemon}/>
      <br />
      <PokemonCollection filteredPokemon={filteredPokemon}/>
    </Container>
  );
}

export default PokemonPage;
