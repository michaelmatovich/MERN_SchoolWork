import React, { useState } from 'react';

const Box = ()=>{ 

const [color, setColor] = useState("");

const [boxList, setBoxList] = useState([]);


    const GenerateBox = () =>{
        let box = {color}
        
        let boxListCopy = [...boxList];

        boxListCopy.push(box);

        console.log(boxListCopy)

        setBoxList(boxListCopy)

        setColor("")


}




return(
    <>
        <label htmlFor="">Color: </label>
        <input onChange = {(e)=> setColor(e.target.value) } type="text" value = {color}/>
        <button onClick = {GenerateBox}>Add</button>
        <div className="container">
            {
                boxList.map( (item, idx) => 
                <div className="box" style = {{backgroundColor: item.color}}></div> )               
            }
        </div>  
    
    </>
)
}

export default Box;



