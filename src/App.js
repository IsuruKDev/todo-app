import React,{Component} from 'react';
import CheckboxItem from './CheckboxItem'
import './App.css'
import todoData from './todoData'

class App extends Component{

  constructor(){
    super();
    this.state = todoData;
    
  }

  render(){

    const  todoList = this.state.map((todo)=>{
      return <CheckboxItem key={todo.id} detail={{id:"check-"+todo.id, value:todo.text, checked:todo.completed}} />
    })

    return(
      <div className="wrap">
  
        <div className="header"><span>{`Todo List`}</span> </div>
        <div className="wrap-list">
        <ol className="list">
  
            {todoList}
        
        </ol>
        </div>
      </div>
  
    )
  }

  
}

export default App;
