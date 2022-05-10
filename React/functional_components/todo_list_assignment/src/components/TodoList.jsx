import React, { useState } from 'react';


const TodoList = () => {

const [listItem, setListItem] = useState();

const [isCompleted, setIsCompleted] = useState(false);

const [toDoList, setToDoList] = useState([]);




const changeHandler = (e) =>{
    setListItem(e.target.value)
}
const addListItem = ()=>{
    
    let copyToDoList = [...toDoList]

    let newListItem = {listItem, isCompleted}

    copyToDoList.push(newListItem)

    setToDoList(copyToDoList)

    console.log(toDoList)

    setListItem("")

}
const listItemCompleted = (e, idx) =>{
    let copyToDoList = [...toDoList];

    copyToDoList[idx].isCompleted = e.target.checked;

    setToDoList(copyToDoList);
}
const deleteListItem = (e, idx)=>{
    let copyToDoList = toDoList.filter((task, i)=> {
        return i != idx;
    })

    setToDoList(copyToDoList);
}






    return(
        <>
            <input type="text" onChange = {changeHandler} value = {listItem} />
            <button onClick = {addListItem}>Add</button>
            <div className="box">
                {
                    
                        toDoList.map( (item, idx) => 
                        <div className="listItems">
                            <p style = {{textDecoration: item.isCompleted? "line-through" : null}}>{ item.listItem }</p>
                            <span>Task Completed: </span><input type="checkbox" onChange ={(e)=>listItemCompleted(e,idx)}/><button onClick = {(e)=>{deleteListItem(e,idx)}}>Delete</button>
                        </div>
                        
                )}
            </div>
        </>
    )
}



export default TodoList;