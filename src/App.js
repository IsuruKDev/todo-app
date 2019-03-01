import React from 'react';
import CheckboxItem from './CheckboxItem'
import './App.css'
import todoData from './todoData'

const App = ()=>{

  const firstName = "Derick"
  const lastName = "The Iceman"
  const date = new Date();
  const hours = date.getHours();
  let timeOfTheDay;

  if(hours<12)
    timeOfTheDay = "Good Morning"
  else if(12<hours && hours>17)
    timeOfTheDay = "Good Evening"
  else
    timeOfTheDay = "Good Night"

  const  todoList = todoData.map((todo)=>{
    return <CheckboxItem key={todo.id} detail={{id:"check-"+todo.id, value:todo.text, checked:todo.completed}} />
  })

  return(
    <div className="wrap">

      <div className="header"><span>{`Todo List, ${timeOfTheDay}`}</span> </div>
      <div className="wrap-list">
      <ol className="list">

          {todoList}
      
      </ol>
      </div>
    </div>

  )
}

export default App;
