import logo from "./logo.svg";
import "./App.css";
import BasicTable from "./components/table.tsx";

function App() {
  const data = [
    {
      BookingID: "146",
      Name: "video 1 text",
      PhoneNum: "10304050",
      Group: "A",
      Pickup: "01/11/2010",
      return: "20/11/2010",
      status: "picked up",
    },
    {
      BookingID: "147",
      Name: "video 2 text",
      PhoneNum: "10304050",
      Group: "A",
      Pickup: "01/11/2010",
      return: "20/11/2010",
      status: "picked up",
    },
    {
      BookingID: "148",
      Name: "video 3 text",
      PhoneNum: "10304050",
      Group: "A",
      Pickup: "01/11/2010",
      return: "20/11/2010",
      status: "picked up",
    },
  ];

  return (
    <div className="Background">
      <div class="navbar">
        <h1>ScanCar</h1>
      </div>

      <div>
        <div class="canvas">
          <div class="moduletitle" id="bookingOverview">
            <h2>Booking Overview</h2>
          </div>
          <div class="module" id="filtersmodule">
            <h3>Filter bookings</h3>
            <div>
              <form>
                <label>
                  Booking ID
                </label>
                  <input type="text" name="Booking ID" />
                <label>
                  Phone Number
                </label>
                  <input type="text" name="Phone Number" />
                <label>
                  Name
                  </label>
                  <input type="text" name="Name" />
                <label>
                  Address
                  </label>
                  <input type="text" name="Address" />
              </form>
            </div>
            <button id="advfilters">Advanced Filters</button>
          </div>
          <div class="module" id="advfiltersmodule">
            <form>
              <label>
                License Plate
                <input type="text" name="License Plate" />
              </label>
              <label>
                Customer ID
                <input type="text" name="Customer ID" />
              </label>
              <label>
                Driver's License
                <input type="text" name="Driver's License" />
              </label>
            </form>
            <input type="checkbox" id="checkboxA"></input> <label>A</label>
            <input type="checkbox" id="checkboxB"></input> <label>B</label>
            <input type="checkbox" id="checkboxC"></input> <label>C</label>
            <br></br>
            <input type="checkbox" id="checkboxD"></input> <label>D</label>
            <input type="checkbox" id="checkboxE"></input> <label>E</label>
            <input type="checkbox" id="checkboxF"></input> <label>F</label>
          </div>
          <div class="module" id="listmodule">
            <h3>Lists are to be here</h3>

            <BasicTable/>

            <table>
              {data.map((el) => (
                <tr>
                  <td>{el.BookingID}</td>
                  <td>{el.Name}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

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

export default App;
