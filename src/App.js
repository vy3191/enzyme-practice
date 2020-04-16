import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
   constructor() {
     super();
     this.state ={
        counter: 0
     };
     this.increment = this.increment.bind(this);
     this.decrement = this.decrement.bind(this);
   };

   increment() {
      this.setState({
        counter: this.state.counter+1
      });
   }

   decrement() {
     if(this.state.counter >= 0) {
      this.setState({
        counter: this.state.counter-1
      });
    }
   }

   render() {
    return (
      <div className="App" data-test="component-app">
         { this.state.counter < 0 ? (<p data-test="warning-display">cannot go below zero</p>) :
        (<h1 data-test="counter-display">The counter is currently: {this.state.counter}</h1>)
         }
        <button 
          data-test="increment-button"
          onClick={() => this.increment()}
          >Increment counter</button>
        <button
          data-test="decrement-button"
          onClick={() => this.decrement() }
        >Decrement counter</button>  
      </div>
    );
   }
}

export default App;
