import * as React from 'react';
//import logo from "../logo.svg";
import "../App.css";
import FleetStatus from "../components/fleetstatus";
import Request from '../components/mrequest';
import Release from '../components/mrelease';
import BasicTable from "../components/table";
import CheckBoxes from "../components/checkboxes";


import { Link } from 'react-router-dom';



export default function Management() {

    return (
    <>

    <div className="Background">
      <div>
        <div className="canvas">
          <div className="moduletitle" id="management">
            <h2>Management</h2> 
          </div> 
          <div>
            <FleetStatus/>
          </div>
          <div className="row">
            <div className="column">
              <Request/>
            </div>
            <div className="column">
              <Release/>
            </div>
          </div>
        </div>
      </div>
    </div>


    {/* <div class="au-card chart-percent-card">
        <div class="au-card-inner">
          <h3 class="title-2 tm-b-5">char by %</h3>
          <div class="row no-gutters">
            <div class="col-xl-6">
              <div class="chart-note-wrap">
                <div class="chart-note mr-0 d-block">
                  <span class="dot dot--blue"></span>
                  <span>products</span>
                </div>
                <div class="chart-note mr-0 d-block">
                  <span class="dot dot--red"></span>
                  <span>services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      
      </>
                
  );
}