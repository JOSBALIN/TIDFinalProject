import * as React from "react";
//import logo from "../logo.svg";
import "../App.css";
import BasicTable from "../components/table";
import CheckBoxes from "../components/checkboxes";
import GridTable from "../components/gridtable";
import "../components/popup.tsx";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import { Link } from "react-router-dom";
import { render } from "@testing-library/react";

function Home() {
  const [visible, setVisible] = React.useState(false);



  return (
    <div className="Background">
      <div className="navbar">
        <h1>ScanCar</h1>
      </div>

      <div>
        <div className="canvas">
          <div className="moduletitle" id="bookingOverview">
            <h2>Booking Overview</h2>
          </div>
          <div className="module" id="filtersmodule">
            <h3>Filter bookings</h3>
            <div>
              <form id="filterform">
                <p>
                  <label>Booking ID</label>
                  <input type="text" name="Booking ID" />
                </p>
                <p>
                  <label>Phone Number</label>
                  <input type="text" name="Phone Number" />
                </p>
                <p>
                  <label>Name</label>
                  <input type="text" name="Name" />
                </p>
                <p>
                  <label>Address</label>
                  <input type="text" name="Address" />
                </p>
              </form>
            </div>
            <button onClick={() => setVisible(!visible)} id="advfilters">
              {visible ? "v   Advanced Filters" : ">   Advanced Filters"}
            </button>
          </div>
          {visible && (
            <div className="module" id="advfiltersmodule">
              <form id="advfilterform">
                <p>
                  <label>License Plate</label>
                  <input type="text" name="License Plate" />
                </p>
                <p>
                  <label>Customer ID</label>
                  <input type="text" name="Customer ID" />
                </p>
                <p>
                  <label>Driver's License</label>
                  <input type="text" name="Driver's License" />
                </p>
              </form>

              <CheckBoxes />
            </div>
          )}
          <div className="module" id="listmodule">
            <BasicTable />
            {/* <GridTable /> 
            Experimental table using datagrid from MUI. To be developed for editing and displaying data. Commented out for visuals.
            */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;