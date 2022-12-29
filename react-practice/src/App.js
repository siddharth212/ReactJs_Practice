import './App.css';
import React,{Component } from 'react';
import Person from './Person/Person';

class App extends Component {
  render(){
    return (
      <div className="App">
       <h1>Hi I'm New React App</h1>
       <p>This is Really Working</p>
       <Person name ="sid" age="24"/>
       <Person name ="Raj" age="23"/>
       <Person name ="Emily" age="26"/>
      </div>
    );
   // return React.createElement('div',null,React.createElement('h1',null,'Hi I\'m New React App'))
   //Restriction - one single root element, className instead of class.
  }
}

export default App;
