import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="Background">
      <div class="navbar">
        <h1>ScanCar</h1>
      </div>

      <div class="canvas">
        <div class="moduletitle" id="bookingOverview">
          <h2>Booking Overview</h2>
        </div>
        <div class="module" id="filtersmodule">
          <h3>This is where the filters go</h3>

          <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
</form>
        </div>
        <div class="module" id="listmodule">
          <h3>Lists are to be here</h3>
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
