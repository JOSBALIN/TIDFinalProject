import React, { Component } from "react";

/**
 * @params props.label, the label for the button (CarGroup)
 */
class ParkingLotSpot extends Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.className = props.className
  }

  /**
   * Renders counterbutton with +/-, input label
   */
  render() {
    return (
      <div className={this.className} id={this.id}>
        <h3>{this.id}</h3>
      </div>
    );
  }
}

export default ParkingLotSpot;
