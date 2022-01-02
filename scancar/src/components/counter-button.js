import React, { Component } from 'react';
import "./counter-button.css"


const counter = <input></input>

class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: false
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    if(this.state.clicks > 0){
    this.setState({ clicks: this.state.clicks - 1 });
    }
  }

  render() {
    return (
      <div>
        <h2 id="carGroup">A</h2>
        <h2 id="decrementButton" onClick={this.DecreaseItem}>-</h2>
        { this.state.show ? <h2 id="counter">{ this.state.clicks }</h2> : counter }
        <h2 id="incrementButton" onClick={this.IncrementItem}>+</h2>
      </div>
    );
  }
}

export default CounterButton;