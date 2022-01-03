import * as React from "react";
import "./managementmodules.css";
import DatePicker from './date-picker';

export default function Release() {
    return(
        <div className="module" id="mreleasemodule">
          <div className="moduletitle" id="mreleasestatus">
            <h3>Release</h3>
          </div>
          <div>
            <DatePicker/>
            
          </div>
        </div>
        
      );
}