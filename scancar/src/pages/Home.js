import * as React from 'react';
//import logo from "../logo.svg";
import "../App.css";
import BasicTable from "../components/table.tsx";
import CheckBoxes from "../components/checkboxes.tsx";


import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';

function Home() {
    const [visible, setVisible] = React.useState(false);

    return (
    <div className="Background">
      <div class="navbar">
        <h1>ScanCar</h1>
        <Link to='/Management'>
            <button variant='outlined'>
                Management
            </button>
        </Link>
      </div>

      <div>
        <div class="canvas">
          <div class="moduletitle" id="bookingOverview">
            <h2>Booking Overview</h2>
          </div>
          <div class="module" id="filtersmodule">
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
            <div class="module" id="advfiltersmodule">
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
          <div class="module" id="listmodule">
            <BasicTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
