import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const AllAuthors = () => {

    const history = useHistory();

    let [allAuthors, setAllAuthors] = useState([]);

    let [deleteToggle, setDeleteToggle] = useState(false);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
        .then(res=>{
            // console.log("Response is: ", res);
            setAllAuthors(res.data.results);
        })
        .catch(err=>{
            console.log("Error is: ", err);
        })
    },[deleteToggle])

    const deleteAuthor = (id)=>{

        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(res=>{
                console.log("Response is: ", res);
                setDeleteToggle(!deleteToggle);
                history.push('/');
            })
            .catch(err=>{
                console.log(err);            
            })
    }

    return (        <>
            <div>
                <Link to = "/new">Add an author</Link>
                {
                    allAuthors.map((AuthorObj, idx)=>{
                        
                        return (
                                <div key = {AuthorObj._id} className = "box">
                                    <h2>{AuthorObj.name}</h2>
                                    <Link className = "linkage2" to ={`/edit/${AuthorObj._id}`}>Edit |</Link>
                                    <button onClick = {()=>{deleteAuthor(AuthorObj._id)}}>Delete</button>
                                </div>
                        )    
    
                    })
                }
                
            </div>
        
        </>
    );
};

export default AllAuthors;