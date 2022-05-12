import React, { useEffect, useState } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link 
} from "react-router-dom";


const Search = () => {

    let [id, setId] = useState(1);
    let [searchField, setSearchField] = useState("people");

    const tester = "";
    const test = "";

    const changeId = (e)=>{
        setId(e.target.value);
    }
    const changeSearchField = (e)=>{
        setSearchField(e.target.value);
    }



    return (
        <>
            <div className = "searchbar flex">
                <label>Search for: </label>
                <select value = {searchField} onChange = { changeSearchField }>
                    <option>people</option>
                    <option>planets</option>                    
                </select>
                <label>ID: </label>
                <input value = {id} onChange = { changeId } type = "number"></input>
                <button><Link id = "searchbtn" to={`/${searchField}/${id}`}>Search</Link></button>
                
            </div>
        {/* <img src = "https://usercontent2.hubstatic.com/14497829_f520.jpg"></img> */}
        </>
    )
}

export default Search;

