import React from "react";
import {Button} from 'react-bootstrap';
import Edit from "./Edit"

function ListItems({todos,Delete,Done,edit}){

    
    
    return (
<div>
        
                {
                    todos.map((el,i)=>
                    <div className="list"  key={el.id} >
                        <p  style={{textDecoration:el.done ? "line-through":"none"}} >{el.text} </p>
                       <Edit  edit={edit} el={el} />
                        <Button variant="success" onClick={()=>Done(el.id)}>Done</Button>
                        <Button variant="danger" onClick={()=>Delete(el.id)}>Delete</Button>
                    </div>
                    )
                }
            
            
            </div>
    )
    
  }
  export default ListItems;