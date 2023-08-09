
import React, { useState } from 'react'

const PokeApi = () => {
    const [pokemon, setPokemon] = useState([])

    const getPoke = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                console.log(responseJson.results)
                setPokemon(responseJson.results)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <h1>Get Pokemon</h1>
            <ul>
                {pokemon.map((pokemonList, idx) =>
                    <li key={idx}> {pokemonList.name} </li>
                )}
            </ul>


            <button onClick={getPoke}> Get All Poke </button>
        </div>
    )
}

export default PokeApi