import * as React from 'react';
import "../components/CarPrem.css"
import { getAllCars } from "../api";
import BasicTableOverview from '../components/caroverview/tableoverview';
import LotOverview from "../components/caroverview/caroverview";

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
              <h2>Cars on Premises</h2>
            </div>
            <div className="row">
              <div className="column">
                <div className="module" id="overview">
                  <div className="moduletitle">
                  <h2>Overview</h2>
                  </div>
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
