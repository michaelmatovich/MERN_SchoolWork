import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


const EditAuthor = () => {


    const history = useHistory();

    const { id } = useParams();

    let [oneAuthor, setOneAuthor] = useState({});

    let [errors, setErrors] = useState({})


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(res=>{
            console.log("Response is: ", res);
            setOneAuthor(res.data.results);         
        })
        .catch(err=>{
            console.log("Error is: ", err);
        })
    },[])

    const editAuthor = (e)=>{
        e.preventDefault();
    
        //create Author object       
    
        axios.put(`http://localhost:8000/api/authors/${id}`, oneAuthor)
            .then(res=>{
                console.log("Response is: ", res);
                if(res.data.error){
                    console.log("Here are the errors: ")
                    
                    //save validations messages
                    setErrors(res.data.error.errors);
                    console.log(errors.name.message);                
                }
                else{                    
                    history.push('/');
                }
                history.push('/');
            })
            .catch(err=>{
                console.log(err);            
            })
    }

    const changeHandler = (e)=>{
        
        setOneAuthor({
            ...oneAuthor,
            [e.target.name]: e.target.value
        })
    }

    const deleteAuthor = (e)=>{

        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(res=>{
                console.log("Response is: ", res);
                history.push('/');
            })
            .catch(err=>{
                console.log(err);            
            })
    }

        


    return (        <>
            <h1>Lets edit {id}</h1>
            <form className = "box" onSubmit = {editAuthor}>
                <div>
                    <p>Name:</p>
                    <input type = "text" name = "name" value = { oneAuthor.name } onChange = {changeHandler}></input>                    
                </div>
                <p className = "error">{errors.name? errors.name.message: null}</p>
                <br></br>
                <input id = "submitbtn" type = "submit" value = "Edit Author"></input>                
            </form>
            <button onClick = { deleteAuthor }>Delete Me</button><br></br>
            <Link className = "linkage" to={"/"}>Home</Link> 
        </>
    );
};

export default EditAuthor;