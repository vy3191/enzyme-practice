import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
   constructor() {
     super();
     this.state ={

     };
   };

   render() {
    return (
      <div className="App" data-test="component-app">
        <h1>App</h1>
      </div>
    );
   }
}

export default App;
