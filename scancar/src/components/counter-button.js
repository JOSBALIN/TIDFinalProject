import React, { Component } from 'react';
import "./counter-button.css"

/**
 * @params props.label, the label for the button (CarGroup)
 */
class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true,
    };
    this.label = props.label
  }

 /**
 * increments this.state.clicks by one
 */
  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }

/**
 * decrements this.state.clicks by one
 */
  DecrementItem = () => {
    if(this.state.clicks > 0){
    this.setState({ clicks: this.state.clicks - 1 });
    }
  }

/**
 * Renders counterbutton with +/-, input label
 */
  render() {
    return (
      <div className="counterButton">
        <h2 id="carGroup">{this.label}</h2>
        <h2 id="decrementButton" onClick={this.DecrementItem}>-</h2>
        { this.state.show ? <h2 id="counter">{ this.state.clicks }</h2> : "" }
        <h2 id="incrementButton" onClick={this.IncrementItem}>+</h2>
      </div>
    );
  }
}

export default CounterButton;