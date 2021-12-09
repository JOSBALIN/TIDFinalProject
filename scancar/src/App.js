import * as React from 'react';



import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home.js';
import Management from './pages/Management.js';
import CarPrem from './pages/CarPrem.js';
import Sidebar from "./components/sidebar.tsx";

export default function App() {
  

    return (
      <Router>
        <div>
        <Sidebar/>
        <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route path='/management' element={<Management/>}></Route>
            <Route path='/carprem' element={<CarPrem/>}></Route>
        </Routes>
        </div>
      </Router>
    );
}







//     <div className="Background">
//       <div class="navbar">
//         <h1>ScanCar</h1>
//         <button></button>
//       </div>

//       <div>
//         <div class="canvas">
//           <div class="moduletitle" id="bookingOverview">
//             <h2>Booking Overview</h2>
//           </div>
//           <div class="module" id="filtersmodule">
//             <h3>Filter bookings</h3>
//             <div>
//               <form id="filterform">
//                 <p>
//                   <label>Booking ID</label>
//                   <input type="text" name="Booking ID" />
//                 </p>
//                 <p>
//                   <label>Phone Number</label>
//                   <input type="text" name="Phone Number" />
//                 </p>
//                 <p>
//                   <label>Name</label>
//                   <input type="text" name="Name" />
//                 </p>
//                 <p>
//                   <label>Address</label>
//                   <input type="text" name="Address" />
//                 </p>
//               </form>
//             </div>
//             <button onClick={() => setVisible(!visible)} id="advfilters">
//               {visible ? "v   Advanced Filters" : ">   Advanced Filters"}
//             </button>
//           </div>
//           {visible && (
//             <div class="module" id="advfiltersmodule">
//               <form id="advfilterform">
//                 <p>
//                   <label>License Plate</label>
//                   <input type="text" name="License Plate" />
//                 </p>
//                 <p>
//                   <label>Customer ID</label>
//                   <input type="text" name="Customer ID" />
//                 </p>
//                 <p>
//                   <label>Driver's License</label>
//                   <input type="text" name="Driver's License" />
//                 </p>
//               </form>

//               <CheckBoxes />
//             </div>
//           )}
//           <div class="module" id="listmodule">
//             <BasicTable />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

