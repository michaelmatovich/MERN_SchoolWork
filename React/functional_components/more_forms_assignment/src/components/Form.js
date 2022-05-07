import React, { useState } from 'react';
import './style.css';

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmation, setConfirmation] = useState("");   
    
// const validateForm = (e) => {
//     e.preventDefault();
//     let is_valid = true;
//     if(firstName.length < 2){
//         is_valid = false;
//     }
//     if(lastName.length < 2){
//         alert("Last name must be at least 2 characters long.")
//         is_valid = false;        
//     }
//     if(email.length < 5){
//         alert("Email must be at least 5 characters long.")
//         is_valid = false;
//     }
//     if(password.length < 8 || confirmation.length < 8){
//         alert("Password must be at least 8 characters long.")
//         is_valid = false;
//     }
//     if(password !== confirmation){
//         alert("Password and Confirmation must match.")
//         is_valid = false;
//     }    
// }

    return (

        <div className = "flex App-style">
            <div className = "left-column box">            
            <form>
                <h3>First Name</h3>
                    <input type="text" onChange={ (e) => setFirstName(e.target.value) }></input>
                    {
                        firstName.length < 2 ? <p className = "error">First name must be at least 2 characters long.</p> :
                        <p></p>
                    }
                <h3>Last Name</h3>
                    <input type = "text" onChange={ (e) => setLastName(e.target.value) }></input>
                    {
                        lastName.length < 2 ? <p className = "error">Last name must be at least 2 characters long.</p> :
                        <p></p>
                    }
                <h3>Email</h3>
                    <input type = "text" onChange={ (e) => setEmail(e.target.value) }></input>
                    {
                        email.length <5 ? <p className = "error">Email must be at least 5 characters long.</p> :
                        <p></p>
                    }
                <h3>Password</h3>
                    <input type = "password" onChange={ (e) => setPassword(e.target.value) }></input>
                    {
                        password.length < 8 ? <p className = "error">Password must be at least 8 characters long.</p> :
                        <p></p>
                    }
                <h3>Confirmation</h3>
                    <input type = "password" onChange={ (e) => setConfirmation(e.target.value) }></input>
                    {
                        password.length < 8 ? <p className = "error">Password must be at least 2 characters long.</p> :
                        <p></p>
                    }
                    {
                        password !== confirmation ? <p className = "error">Password and Confirmation must match.</p> :
                        <p></p>
                    }
                <input type = "submit" id = "submit"></input>
            </form>
        </div>
        
        <div className = "right-column box">
            <h3>First Name</h3>
            <h4 className = "formData">{ firstName }</h4>
            <h3>Last Name</h3>
            <h4 className = "formData">{ lastName}</h4>
            <h3>Email</h3>
            <h4 className = "formData">{ email }</h4>
            <h3>Password</h3>
            <h4 className = "formData">{ password }</h4>
            <h3>Confirmation</h3>
            <h4 className = "formData">{ confirmation }</h4>
        </div>
    </div>
    );
};

export default Form;