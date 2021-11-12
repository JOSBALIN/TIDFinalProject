import * as React from 'react';
//import logo from "../logo.svg";
import "./CarPrem.css"
import CarOverview from "../components/caroverview.tsx";

import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';

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
            <h3>Overview</h3>
            <CarOverview></CarOverview>
          </div>
          <div class="module" id="parkingmodule">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
