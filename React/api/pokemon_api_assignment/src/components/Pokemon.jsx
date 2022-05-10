import React, { useState } from 'react'

const Pokemon = () => {
    let [pokemonList, setPokemonList] = useState([]);

    const getPokemon = ()=>{
        
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then(response => { 
                return response.json() 
            })
            .then(newResponse => {
                console.log("response is: ", newResponse.results)
                console.log("Can you use response twice?", newResponse)
                setPokemonList(newResponse.results)
                console.log("Pokemon List is: ", pokemonList)
                // Could not use the response twice? Had to rename to newReponse. Ask later
            })
            .catch(err=>{ 
                console.log("Error is: ",err)
            })
    }

    return (
        <div>
            {pokemonList.length > 0 && pokemonList.map((name, idx)=>{
                return (<div key={idx}>{name.name}</div>)
            })}
            <button onClick = { getPokemon }>Click me to get Pokemon</button>
        </div>
    );
}

export default Pokemon;

