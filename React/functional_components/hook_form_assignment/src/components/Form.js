import React, { useState } from 'react';
import './style.css';

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmation, setConfirmation] = useState("");    

    return (

        <div className = "flex App-style">
            <div className = "left-column box">            
            <form>
                <h3>First Name</h3>
                    <input type="text" onChange={ (e) => setFirstName(e.target.value) }></input>
                <h3>Last Name</h3>
                    <input type = "text" onChange={ (e) => setLastName(e.target.value) }></input>
                <h3>Email</h3>
                    <input type = "text" onChange={ (e) => setEmail(e.target.value) }></input>
                <h3>Password</h3>
                    <input type = "password" onChange={ (e) => setPassword(e.target.value) }></input>
                <h3>Confirmation</h3>
                    <input type = "password" onChange={ (e) => setConfirmation(e.target.value) }></input>
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