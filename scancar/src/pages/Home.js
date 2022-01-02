import * as React from "react";
//import logo from "../logo.svg";
import "./Home.css";
import "../App.css";
import { getAllBookings } from "../api";
import BasicTable from "../components/table";
import CheckBoxes from "../components/checkboxes";
import GridTable from "../components/gridtable";
import "reactjs-popup/dist/index.css";
import SimpleModal from "../components/SimpleModal";
import DatePicker from '../components/date-picker';

import { Link } from "react-router-dom";
import { render } from "@testing-library/react";
import { GridCellValue } from "@mui/x-data-grid";

function Home() {
  const [visible, setVisible] = React.useState(false);

  const [listOfBookings, setListOfBookings] = React.useState([]); 
    

    React.useEffect(async() => { 
      const allBookings = await getAllBookings();
      console.log(allBookings);
      setListOfBookings(allBookings); 
    }, [])

  const emptyRecord = {
    0: {id: 0}
  };

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
                <p>
                  <SimpleModal o={emptyRecord} isNew={true} isOpen={false}/>
                </p>
              </form>
            </div>
            <button onClick={() => setVisible(!visible)} id="advfilters">
              {visible ? "v   Advanced Filters" : ">   Advanced Filters"}
            </button>
          </div>
          {visible && (
            <div className="module" id="advfiltersmodule">
                <div className="row">
                  <div className="column">
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
                  <div className="column">
                    <h2>Pick-up & Return</h2>
                    <div className="row">
                      <div className="column">
                      <label htmlFor="pickupDate">Pick-up date:</label>

                      <input type="date" id="pickupDate" name="rent-pickup"
                            value="2022-01-01"
                            min="2022-01-01" max="2023-12-31"/>
                      </div>
                      <div className="column">
                      <label htmlFor="pickupTime">Pick-up time:</label>

                      <input type="time" id="pickupTime" name="appt"
                            min="08:00" max="18:00" required/>
                      </div>
                      <div className="column">
                        Location
                        <div id="location1">
                          <select name="location" id="location">
                              <option value="Nordhavn">Nordhavn</option>
                            <option value="Sydhavn">Sydhavn</option>
                            <option value="Amager">Amager</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="column">
                      <label htmlFor="return">Return date:</label>

                      <input type="date" id="return" name="rent-return"
                            value="2022-01-01"
                            min="2022-01-01" max="2023-12-31"/>
                      </div>
                      <div className="column">
                         <label htmlFor="returnTime">Return time:</label>

                        <input type="time" id="returnTime" name="appt"
                              min="08:00" max="18:00" required/>
                      </div>
                      <div className="column">
                        Location
                        <div id="location1">
                          <select name="location" id="location">
                              <option value="Nordhavn">Nordhavn</option>
                            <option value="Sydhavn">Sydhavn</option>
                            <option value="Amager">Amager</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>  
            </div>
          )}
          <div className="module" id="listmodule">
             <GridTable listOfBookings={listOfBookings}/> 
          </div>
        </div>
      </div>
    </div>

  );
}

export default Home;
