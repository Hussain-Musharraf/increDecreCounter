import React from 'react'
import Counter from './components/Counter';
import Navbar from './components/Navbar';
class App extends React.Component{
  constructor() {
    super();
    this.state = {
      counter: 0
    }; 
  }
  render(){
    const incrementCounter = () => {
      this.setState({
        counter: this.state.counter + 1 
      });
    };
    const decrementCounter = () => {
      if (this.state.counter > 0) {
        this.setState({
          counter: this.state.counter - 1 
        });
      }
    };
    return(
     <>
     <Counter counterValue={this.state.counter} incrementCounter={incrementCounter} decrementCounter={decrementCounter} style={{background:"red",color:"white"}}/>
     <Counter counterValue={this.state.counter} incrementCounter={incrementCounter} decrementCounter={decrementCounter} style={{background:"white",color:"black"}}/>
     <Navbar counterValue={this.state.counter} />
    </>
    )
  }
}
export default App;