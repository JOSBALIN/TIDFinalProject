import * as React from "react";
import "./managementmodules.css";
import "./mtransfer.css";

import DatePicker from "./date-picker";
import CounterButton from "./counter-button";

export default function CarTransfer(props) {
  return (
    <div className="module" id="mrequestmodule">
      <div className="moduletitle" id="mrequeststatus">
        <h3>{props.type}</h3>
      </div>
      <div className="counterbuttonAndCalendarDiv">
        <div className="counterbuttonDiv">
          <CounterButton label={"A"} />
          <CounterButton label={"B"} />
          <CounterButton label={"C"} />
          <CounterButton label={"D"} />
          <CounterButton label={"E"} />
          <CounterButton label={"F"} />
        </div>
        <div className="calendarDiv">
          <DatePicker />
        </div>
      </div>
    </div>
  );
}
