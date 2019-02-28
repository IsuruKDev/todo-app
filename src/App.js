import React from 'react';
import CheckboxItem from './CheckboxItem'
import './App.css'

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

  return(
    <div className="wrap">

      <div className="header"><span>{`Todo List, ${timeOfTheDay}`}</span> </div>
      <div className="wrap-list">
      <ol className="list">
        <CheckboxItem detail={{id:"check-1", value:"shop" }} />
        <CheckboxItem detail={{id:"check-2", value:"practice"}} />
        <CheckboxItem detail={{id:"check-3", value:"life"}} />
        <CheckboxItem detail={{id:"check-4", value:"Do something"}}/>
        <CheckboxItem detail={{id:"check-5", value:"shower"}}/>
      </ol>
      </div>
    </div>

  )
}

export default App;
