import * as React from 'react';
//import logo from "../logo.svg";
import "../components/CarPrem.css"
import CarOverview from "../components/caroverview.tsx";

import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';
import BasicTableOverview from '../components/caroverview';

function Home() {
    const [visible, setVisible] = React.useState(false);

    return (
    <div className="Background">
      <div class="navbar">
        <h1>ScanCar</h1>
      </div>

    
      <div>
        <div class="canvas">
          <div class="moduletitle" id="carprem">
            <h2>Cars on Premises</h2>
          </div>
          
          <div class="module" id="overviewmodule">
            <h1>Overview</h1>
              <div class="module" id="filtersmodule">
                <form id="filterform">
                  <p>
                    <label className="label">Group</label>
                    <input type="text" name="Group"></input>
                  </p>
                  <p>
                    <label className="label">Car</label>
                    <input type="text" name="Car"></input>
                  </p>
                </form>
              </div>
            
            <CarOverview/>
          </div>
          <div class="module" id="overviewmodule">
          
          </div>
          <div class="module" id="listmodule">
            
            </div>


          
          {/* <div class="module" id="parkingmodule">
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
