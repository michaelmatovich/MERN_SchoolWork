import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { Link } from "react-router-dom";


const SearchContent = props => {
    
    
    const { searchField, id } = useParams();

    // console.log("Search Field is: ", searchField);
    // console.log("ID is: ", id);

    let [searchResult, setSearchResult] = useState({});

    let [count, setCount] = useState(0);

    let [planetId, setPlanetId] = useState();

    console.log("Searchfield and ID is: ", searchField, id);

    const history = useHistory();


    useEffect(()=>{        
        console.log("UseEffect is Running.");

        axios.get(`https://swapi.dev/api/${searchField}/${id}`)
        .then( response=>{
            console.log("Always log the response:", response);
            console.log("Response.data is: ", response.data)
            setSearchResult(response.data)
            console.log("SearchResult is: ", searchResult);

            if(searchField === "people"){
                console.log("If statement is running...");
                let homeworld = response.data.homeworld;        
                let index = homeworld.length-2;       
                let planet = "";
        
                console.log("homeworld is: ", response.data.homeworld);
                console.log("Index is: ", index)
                while(homeworld[index] !== "/")
                {
                    console.log("In while loop");
                    console.log(homeworld[index]);
                    planet += homeworld[index];
                    index--;
                }
                console.log("Planet is: ", planet)
                planet = [...planet].reverse().join("");
                console.log("Planet flipped is: ", planet)
                setPlanetId(planet);
                console.log("Planet Id is: ", planetId)                
            }   
        })
        .catch(err=>{
            console.log("Rut Roh",err);
            history.push('/error');
        })
        
    },[searchField, id])

    

    

    return (
        <>
        {
            searchField == "people"?
            <div>
            <h1>{searchResult.name}</h1>
            <table>
            <thead>
                <tr>
                    <th>Birth Year</th>
                    <th>Hair Color</th>
                    <th>Eye Color</th>
                    <th>Home World</th>                                     
                </tr>
            </thead>
            <tbody>                
                <tr>
                    <td>{searchResult.birth_year}</td>
                    <td>{searchResult.hair_color}</td>
                    <td>{searchResult.eye_color}</td>                    
                    <td><Link to={`/planets/${planetId}/`}>{searchResult.homeworld}</Link></td>
                </tr>                
            </tbody>
        </table>
        </div>
        :
        <div>
        <h1>{searchResult.name}</h1>
            <table>
            <thead>
                <tr>
                    <th>Climate</th>
                    <th>Gravity</th>
                    <th>Terrain</th>
                    <th>Population</th>                                     
                </tr>
            </thead>
            <tbody>                
                <tr>
                    <td>{searchResult.climate}</td>
                    <td>{searchResult.gravity}</td>
                    <td>{searchResult.terrain}</td>
                    <td>{searchResult.population}</td>
                </tr>                
            </tbody>
        </table>
        </div>
        }
        <button><Link  id = "return" to={"/"}>Return</Link></button>
    </>
        
    )
}

export default SearchContent;
