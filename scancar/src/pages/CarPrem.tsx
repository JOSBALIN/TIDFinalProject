import React from 'react';
//import logo from "../logo.svg";
import "./CarPrem.css"
import BasicTable from "../components/table";

import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';

function Home() {
    const [visible, setVisible] = React.useState(false);

    return (
    <div className="Background">
      <div className="navbar">
        <h1>ScanCar</h1>
      </div>

    
      <div>
        <div className="canvas">
          <div className="moduletitle" id="carprem">
            <h2>Cars on Premises</h2>
          </div>
          <div className="module" id="overviewmodule">
            <h3>Overview</h3>
            <BasicTable></BasicTable>
          </div>
          <div className="module" id="parkingmodule">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
