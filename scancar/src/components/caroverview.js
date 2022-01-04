import "./parkingLotSpot.js";
import "./caroverviewgrid.css";
import "./CarPrem.css";
import ParkingLotSpot from "./parkingLotSpot.js";


let parkingSpots = new Array(42);

for (let i = 1; i <= 42; i++) {
  let lotName = "";
  if(i <= 14 ){ lotName = "A"+i}
  if(i > 14 && i <= 28 ){ lotName = "B"+(i-14)} 
  if(i > 28 ){ lotName = "C"+(i-28)} 
  parkingSpots[i] = {
    "id":lotName,
    "status":"",
    "licenseplate":"",
  }
} 





export default function LotOverview(props) {
  function renderCSpots(){
    return(
      <div className="small-grid-box-container-horizontal">
  
      <ParkingLotSpot id={"C1"} className={"small-grid-box ready"} />
      <ParkingLotSpot id={"C2"} className={"small-grid-box"} />
      <ParkingLotSpot id={"C3"} className={"small-grid-box"} />
      <ParkingLotSpot id={"C4"} className={"small-grid-box"} />
      <ParkingLotSpot id={"C5"} className={"small-grid-box"} />
      <ParkingLotSpot id={"C6"} className={"small-grid-box"} />
      <ParkingLotSpot id={"C7"} className={"small-grid-box"} />
      <ParkingLotSpot id={"C8"} className={"small-grid-box"} />
      <ParkingLotSpot id={"C9"} className={"small-grid-box"} />
      <ParkingLotSpot id={"C10"} className={"small-grid-box"} />
      <ParkingLotSpot id={"C11"} className={"small-grid-box"} />
      <ParkingLotSpot id={"C12"} className={"small-grid-box"} />
      <ParkingLotSpot id={"C13"} className={"small-grid-box"} />
      <ParkingLotSpot id={"C14"} className={"small-grid-box maintenance"} />
    </div>
    )
  }

  function renderASpots(){
    return(
    <div className="small-grid-box-container-vertical">
    <ParkingLotSpot id={"A1"} className={"small-grid-box ready"} />
    <ParkingLotSpot id={"A2"} className={"small-grid-box"} />
    <ParkingLotSpot id={"A3"} className={"small-grid-box"} />
    <ParkingLotSpot id={"A4"} className={"small-grid-box"} />
    <ParkingLotSpot id={"A5"} className={"small-grid-box"} />
    <ParkingLotSpot id={"A6"} className={"small-grid-box"} />
    <ParkingLotSpot id={"A7"} className={"small-grid-box"} />
    <ParkingLotSpot id={"A8"} className={"small-grid-box"} />
    <ParkingLotSpot id={"A9"} className={"small-grid-box"} />
    <ParkingLotSpot id={"A10"} className={"small-grid-box"} />
    <ParkingLotSpot id={"A11"} className={"small-grid-box"} />
    <ParkingLotSpot id={"A12"} className={"small-grid-box"} />
    <ParkingLotSpot id={"A13"} className={"small-grid-box"} />
    <ParkingLotSpot id={"A14"} className={"small-grid-box maintenance"} />
  </div>
    )
  }

  function renderBSpots(){
    return(
      <div className="small-grid-box-container-vertical">
      <ParkingLotSpot id={"B1"} className={"small-grid-box ready"} />
      <ParkingLotSpot id={"B2"} className={"small-grid-box"} />
      <ParkingLotSpot id={"B3"} className={"small-grid-box"} />
      <ParkingLotSpot id={"B4"} className={"small-grid-box"} />
      <ParkingLotSpot id={"B5"} className={"small-grid-box"} />
      <ParkingLotSpot id={"B6"} className={"small-grid-box"} />
      <ParkingLotSpot id={"B7"} className={"small-grid-box"} />
      <ParkingLotSpot id={"B8"} className={"small-grid-box"} />
      <ParkingLotSpot id={"B9"} className={"small-grid-box"} />
      <ParkingLotSpot id={"B10"} className={"small-grid-box"} />
      <ParkingLotSpot id={"B11"} className={"small-grid-box"} />
      <ParkingLotSpot id={"B12"} className={"small-grid-box"} />
      <ParkingLotSpot id={"B13"} className={"small-grid-box"} />
      <ParkingLotSpot id={"B14"} className={"small-grid-box maintenance"} />
    </div>
    )
  }

  return (
    <div className="grid-container">
      <div className="grid-item grid-item-1">
        {renderCSpots()}
      </div>
      <div className="grid-item grid-item-2">
        {renderASpots()}
      </div>
      <div className="grid-item grid-item-3">
        {renderBSpots()}
      </div>
    </div>
  );
}
