import * as React from 'react';
import "../components/CarPrem.css"
import { getAllCars } from "../api";
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';
import LotOverview from '../components/caroverview';
import BasicTableOverview from '../components/tableoverview';


function Home() {
    const [listOfCars, setListOfCars] = React.useState([]); 
    

    React.useEffect(async() => { 
      const allCars = await getAllCars();
      console.log(allCars);
      setListOfCars(allCars); 
    }, [])

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
          <div className="flexbox-container">
            <div class="module" id="filtersmodule">
              <h1>Overview</h1>
                <form id="filterform">
                  <h4>
                    <label className="label">Group</label>
                    <input type="text" name="Group"></input>
                  </h4>
                  <h4>
                    <label className="label">Car</label>
                    <input type="text" name="Car"></input>
                  </h4>
                </form>
              <BasicTableOverview listOfCars={listOfCars} /> 
          </div>
            <form>
              <div class="module" id="overviewmodule">
                <LotOverview/>
              </div>  
            </form>
          </div>

          


          
          {/* <div class="module" id="parkingmodule">
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
