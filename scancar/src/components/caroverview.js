import "./parkingLotSpot.js";
import "./caroverviewgrid.css";
import "./CarPrem.css";
import ParkingLotSpot from "./parkingLotSpot.js";
import { StayCurrentLandscapeTwoTone } from "@mui/icons-material";
import { render } from "@testing-library/react";


let parkingSpots = new Array(42);

for (let i = 1; i <= 42; i++) {
  let lotName = "";
  if(i <= 14 ){ lotName = "a"+i}
  if(i > 14 && i <= 28 ){ lotName = "b"+(i-14)} 
  if(i > 28 ){ lotName = "c"+(i-28)} 
  parkingSpots[i] = {
    id:lotName,
    status:"",
    licenseplate:"",
  }
} 




export default function LotOverview(props) {

  function check(){
    for (let i = 0; i < props.listOfCars.length; i++) {
      let currentCar = props.listOfCars[i];
      // Iterate over parking spaces
      for (let j = 1; j < parkingSpots.length; j++) {
        // check for match between car location and parking space
        if (currentCar.carParkingLotno.localeCompare(parkingSpots[j].id) == 0) {
          // update parking spot with information to match car
          parkingSpots[j].status = currentCar.carStatus;
          parkingSpots[j].licenseplate = currentCar.carLicenseplateno;
        }
      }
    }
    console.log(parkingSpots)
    return parkingSpots
  }



const aSpots = []
function drawA(props){
  for(let i = 1; i <= 14; i++){
    let currentSpot = props[i]
    let className = "small-grid-box " + currentSpot.status
    aSpots.push(
      <ParkingLotSpot id={currentSpot.id} className={className}/>
    )
  }
  return aSpots
}

  const bSpots = []
  for(let i = 1; i <= 14; i++){
    let currentSpot = parkingSpots[i+14]
    let test = JSON.stringify(currentSpot.status)
    console.log(test)
    console.log(currentSpot)
    bSpots.push(
      <ParkingLotSpot id={currentSpot.id} className={` ${test} small-grid-box`}/>
    )
  }

  const cSpots = []
  for(let i = 1; i <= 14; i++){

    let currentSpot = parkingSpots[i+28]
    let className = "small-grid-box " + currentSpot.status

    cSpots.push(
      <ParkingLotSpot id={currentSpot.id} className={className}/>
    )
  }

  

  return (
    <div className="grid-container">
      <div className="grid-item grid-item-1">
      <div className="small-grid-box-container-horizontal">
        {cSpots}
      </div>
      </div>
      <div className="grid-item grid-item-2">
      <div className="small-grid-box-container-vertical">
        {drawA(check())}
        </div>
      </div>
      <div className="grid-item grid-item-3">
      <div className="small-grid-box-container-vertical">
        {bSpots}
        </div>
      </div>
    </div>
  );
}
