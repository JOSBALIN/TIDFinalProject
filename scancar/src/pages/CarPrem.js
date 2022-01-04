import * as React from 'react';
import "../components/CarPrem.css"
import { getAllCars } from "../api";
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';
import BasicTableOverview from '../components/tableoverview';
import LotOverview from "../components/caroverview";

function Home() {
    const [listOfCars, setListOfCars] = React.useState([]); 
    

    React.useEffect(async() => { 
      const allCars = await getAllCars();
      console.log(allCars);
      setListOfCars(allCars); 
    }, [])


    return (
      <div className="Background">
        <div>
          <div className="canvas">
            <div className="moduletitle" id="carprem">
              <h2>Cars on premises</h2>
            </div>
            <div className="row">
              <div className="column">
                <div className="module" id="overview">
                  <h2>Overview</h2>
                  <BasicTableOverview listOfCars={listOfCars} />
                </div>
              </div>
              <div className="columns">
                <LotOverview listOfCars={listOfCars}/>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Home;
