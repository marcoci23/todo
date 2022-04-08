import React from 'react'
import "./TodoItem.css"

function ListItem (props){
    return(
        <div className='list-group-item  todo-item'>
            <input  type="checkbox" onChange={()=>console.log("changed")} className="form-check-input" ></input>
            <h5 >{props.item.text}</h5>
        </div>
    )
}
export default ListItem