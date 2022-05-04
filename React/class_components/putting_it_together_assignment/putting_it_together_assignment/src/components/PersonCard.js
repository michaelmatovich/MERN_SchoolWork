import React, { Component } from 'react';

class PersonCard extends Component{

    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }


birthday = () =>{
    let newage = this.state.age + 1;
    this.setState( { age: newage })
}
render(){
    return(
        <div>
            <h1>{this.props.firstName}, {this.props.lastName}</h1>
            <p>Age: {this.state.age}</p>
            <p>Hair Color: {this.props.hairColor}</p>
            <button onClick = { this.birthday }>BirthDay Button for {this.props.firstName} {this.props.lastName}</button>            
        </div>
    );
    }
}

export default PersonCard;