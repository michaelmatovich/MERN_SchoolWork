import React, { useState } from 'react'
import axios from 'axios'

const Pokemon = () => {
    let [pokemonList, setPokemonList] = useState([]);

    const getPokemon = ()=>{
        
        //Using Axios

        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then( newresponse=>{
            console.log("Response is: ", newresponse)
            console.log("Response 0 index", newresponse[0])
            console.log("Response . data is: ", newresponse.data)
            console.log("Response . results is: ", newresponse.data.results)
            setPokemonList(newresponse.data.results)
            console.log("Pokemon list is: ", pokemonList)
            //Once again had to change response to newresponse, why is that???
        })
        .catch(err=>{
            console.log("Error is: ", err)
        })

        //Using fetch in JS
        // fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        //     .then(response => { 
        //         return response.json() 
        //     })
        //     .then(newResponse => {
        //         console.log("response is: ", newResponse.results)
        //         console.log("Can you use response twice?", newResponse)
        //         setPokemonList(newResponse.results)
        //         console.log("Pokemon List is: ", pokemonList)
        //         // Could not use the response twice? Had to rename to newReponse. Ask later
        //     })
        //     .catch(err=>{ 
        //         console.log("Error is: ",err)
        //     })
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

