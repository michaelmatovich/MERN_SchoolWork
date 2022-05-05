import React, { Component } from 'react';


const mainStyle = {
    width: "760px",
    background: "lightcoral",
    height: "600px",
    border: "2px solid black",
    display: "inline-block",    
    verticalAlign: "top",
    padding: "20px 0 20px 20px"     
}

class Main extends Component{

render(){
    return(
        <div style = { mainStyle }>
            {this.props.children}
        </div>
    );
    }
}

export default Main;