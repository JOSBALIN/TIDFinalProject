import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import "./SimpleModal.css";
import EditIcon from "@mui/icons-material/Edit";
import { getSpecificBooking, getAllCars, createBookingWithPersonAndExistingCar } from "../api";


const useStyles = makeStyles((theme) => ({
  modal: {
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: 800,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
}));


export default function SimpleModal(props) {


  const classes = useStyles();
  const [open, setOpen] = React.useState();

  const isNew = props.isNew;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function alertDelete() {
    window.confirm(
      "Are you sure you want to delete this entry?\nThis cannot be undone"
    );
  }


  function alertNoCar(props) {
    window.alert(
      "Unfortunately there is no car available in car group " + {props}
    );
  }

  function ModalButton() {
    if (isNew) {
      return (
        <Button id="newBooking" onClick={handleOpen}>
          + New Booking
        </Button>
      );
    } else {
      return (
        <Button id="editButton" onClick={handleOpen}>
          <EditIcon />
        </Button>
      );
    }
  }


  const [listOfBookings, setListOfBookings] = React.useState([]); 

  React.useEffect(async() => { 
    const allBookings = await getSpecificBooking(props.o.id);
    console.log(allBookings);
    setListOfBookings(allBookings); 
  }, [])

  const [listOfCars, setListOfCars] = React.useState([]); 
    
  React.useEffect(async() => { 
    const allCars = await getAllCars();
    console.log(allCars);
    setListOfCars(allCars); 
  }, [])

  function getCarInCarGroup(props){
  for (let i = 0; i < props.listOfCars.length; i++) {
    let currentCar = props.listOfCars[i];
      if (currentCar.carGroup.localeCompare(props.o.carGroup) == 0) {
        return currentCar
      }
    }
  return null
}

  return (

    <div className="backgroundDiv">
      <ModalButton />

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div className={classes.paper} id="modalDiv">
          <div className="modalTitle">
            {" "}
            <h3>{isNew ? "New Booking" : "Edit Booking"}</h3>
          </div>
          <div className="module">
            <div className="row" id="customerInformationTop">
              {" "}
              <div className="column">
                <h4>Customer information</h4>
              </div>
              <div className="column" id="cartype">
              { isNew ? "" : <h5>BookingID: {props.o.id}</h5> }
              </div>
            </div>
            <div>
              <form className="row" id="bookinginformation">
                <p>
                  <label>Name</label>
                  <input type="text" name="Name" defaultValue={props.o.name}/>
                </p>
                <p>
                  <label>Phone Number</label>
                  <input type="text" name="Phone Number" defaultValue={props.o.phoneNum} />
                </p>
                <p>
                  <label>Address</label>
                  <input type="text" name="Address" defaultValue={props.o.address}/>
                </p>
                <p>
                  <label>License ID</label>
                  <input type="text" name="License ID" defaultValue={props.o.licenseID}/>
                </p>
              </form>
            </div>
          </div>
          <div className="module">
            <div className="row" id="customerInformationTop">
              <div className="column">
                <h4>Pick-up & return</h4>
              </div>
              <div className="column" id="cartype">
                <h4>Car information</h4>
              </div>
            </div>
            <div>
              <form className="row" id="bookinginformation">
                  <div className="column">
                    <p>
                      <label>Date</label>
                      <input type="date" name="date" defaultValue={props.o.pickupDate} />
                    </p> 
                    <p>
                      <input type="date" name="date" defaultValue={props.o.returnDate} />
                    </p> 
                  </div>
                  <div className="column">
                    <p>
                      <label>Time</label>
                      <input type="time" step="3600000" className="time" name="appt" defaultValue={props.o.pickupTime}
                        min="07:00" max="21:00" required/>
                    </p>
                    <p>
                      <input type="time" step="3600000" className="time" name="appt" defaultValue={props.o.returnTime}
                        min="07:00" max="21:00" required/>
                    </p>
                  </div>
                  <div className="column">
                    <p>
                      <label>Location</label>
                      <select name="location" id="location">
                        <option value="Nordhavn">Nordhavn</option>
                        <option value="Sydhavn">Sydhavn</option>
                        <option value="Amager">Amager</option>
                      </select>
                    </p>
                    <p>
                      <select name="location" id="location">
                        <option value="Nordhavn">Nordhavn</option>
                        <option value="Sydhavn">Sydhavn</option>
                        <option value="Amager">Amager</option>
                      </select>
                    </p>
                  </div>
                  <div className="column" id="carinformation">
                    <p>
                      <label>Group</label>
                      <select name="location" id="location">
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                      </select>
                    </p>
                    <p id="licenseplateform">
                      <label>Plate #</label>
                      <input type="text"/>
                    </p>
                    {isNew ? (
                        ""
                      ) : (
                      <p>
                        <select name="status" id="status" defaultValue={props.o.carStatus}>
                          <option value="Awaiting Transfer">Delivered</option>
                          <option value="Ready">Ready</option>
                          <option value="Picked-up">Picked up</option>
                          <option value="Returned">Returned</option>
                          <option value="Not returned">Not returned</option>
                        </select>
                      </p>
                      )}
                  </div>
              </form>
            </div>
          </div>

          <div id="buttonDiv">
            <button className = "modalButton" id="cancelButton" onClick={handleClose}>Cancel</button>
            {isNew ? (
              <p onClick={
                
                createBookingWithPersonAndExistingCar()

              } id="deleteButton">
              CLICK TO CREATE BOOKING
            </p>
            ) : (
              <p onClick={alertDelete} id="deleteButton">
                Delete booking
              </p>
            )}
            <button className = "modalButton" id="confirmButton" 
            >
            {isNew ? "Confirm" : "Edit"}</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
