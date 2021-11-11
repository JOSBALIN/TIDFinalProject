import * as React from 'react';
import "./checkboxes.css"

export default function CheckBoxes() {

    return(

        <><div className="checkboxes">
            <p>
                <input type="checkbox" id="checkboxA"></input> <label>A</label>
                <input type="checkbox" id="checkboxD"></input> <label>D</label>
                <input type="checkbox" id="checkboxB"></input> <label>B</label>
            </p>
        </div>
        <div className="checkboxes">
                <p>
                    <input type="checkbox" id="checkboxC"></input> <label>C</label>
                    <input type="checkbox" id="checkboxF"></input> <label>F</label>
                    <input type="checkbox" id="checkboxE"></input> <label>E</label>
                </p>
            </div></>
    );

}