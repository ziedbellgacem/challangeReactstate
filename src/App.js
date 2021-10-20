
import React from 'react';
import './App.css';
import {FormControl,Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import ListItems from "./Listitems"
import Edit from './Edit';

class App extends React.Component {
  state={
    todos:[
      {
        id:1,
        text:"Learn Html",
        done:false
      },
      {
        id:2,
        text:"Learn Css",
        done:false
      }
    ],
    newtext:''
  };

delete=(id)=>{
  this.setState({todos:this.state.todos.filter((el,i)=>el.id!==id)})
        

}

  
Add=()=>{
  this.setState({todos: [...this.state.todos,{id:Math.random(),text:this.state.newtext,dond:false} ],newText:""})
}
handleChange=(e)=> this.setState({ newtext: e.target.value  })

 Done=(id)=>{
   this.setState({todos:this.state.todos.map((el,i)=> el.id===id ? {...el,done:!el.done}:el  )})
   
 }

edit=(id,newText)=>{
  this.setState({todos:this.state.todos.map((el,i)=>el.id===id ? {...el,text:newText}:el )})
}

  render(){
  
  return (
    <div >
      <div className="App">
      <FormControl type="text" placeholder="enter your text ..."  value={this.state.newText} onChange={ this.handleChange } />
      <Button variant="warning" onClick={this.Add}>Add</Button>
      </div>
      <ListItems todos={this.state.todos} Delete={this.delete} Done={this.Done} edit={this.edit} />
    </div>
  );
}
}
export default App;
