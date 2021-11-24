import * as React from 'react';
import "./caroverview.css";
import BasicTableOverview from './tableoverview';
import "./CarPrem.css";

export default function CarOverview() {

    return(

        <div className="flexbox-container">
            <div className="flexbox-item carlist" >
                <BasicTableOverview/>
            </div>
            {/* Parkinglot overview to be implemented */}
            {/* <div className="flexbox-item parkinglot1"></div>
            <div className="flexbox-item parkinglot2"></div>
            <div className="flexbox-item parkinglot3"></div> */}
        </div>

    );

}   
