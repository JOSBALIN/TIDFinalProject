import * as React from "react";
import "./managementmodules.css"
import DatePicker from './date-picker';
import CounterButton from './counter-button';



export default function Request() {
    return(
        <div className="module" id="mrequestmodule">
          <div className="moduletitle" id="mrequeststatus">
            <h3>Request</h3>
          </div>
          <div>
            <CounterButton A/>
            <DatePicker/>
          </div>
        </div>
        
      );
}