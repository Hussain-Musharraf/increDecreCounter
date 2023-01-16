import React from "react";
import { render } from "react-dom";
//import "../index.css";
class Counter extends React.Component { 
  render() {
    return (
      <div style={this.props.style}>
        <h1 className="changeColor">{this.props.counterValue}</h1>
        <button onClick={this.props.incrementCounter}>Increment</button>
        <button onClick={this.props.decrementCounter}>Decrement</button>
      </div>
    );
  }
}
export default Counter;
