import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import "./SimpleModal.css";
import { GridCellValue } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DateRangeIcon from "@mui/icons-material/DateRange";
import dateButton from "./date-button";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

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

export default function SimpleModal(props: {
  o: Record<string, GridCellValue>;
  isNew: boolean;
  isOpen: boolean;
}) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState<boolean>(props.isOpen);

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

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const test2 = props.o.name;
  const test = <p>test2</p>;
  console.log(test2);
  console.log(typeof test);
  console.log(date);

  return (
    <div className="backgroundDiv">
      <ModalButton />

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
        className="test"
      >
        <div className={classes.paper} id="modalDiv">
          <div className="modalTitle">
            {" "}
            <h3>{isNew ? "New Booking" : "Edit Booking"}</h3>
          </div>
          <div className="module">
            <div id="customerInformationTop">
              {" "}
              <h4>Customer information</h4> <h5>BookingID: {props.o.id}</h5>
            </div>
            <div></div>
            <div>
              <form id="bookinginformation">
                <p>
                  <label>Name</label>
                  <input type="text" name="Name" />
                </p>
                <p>
                  <label>Phone Number</label>
                  <input type="text" name="Phone Number" />
                </p>
                <p>
                  <label>Address</label>
                  <input type="text" name="Address" />
                </p>
                <p>
                  <label>License ID</label>
                  <input type="text" name="Phone Number" />
                </p>
              </form>
            </div>
          </div>
          <div className="module">
            <div id="customerInformationTop">
              {" "}
              <h4>Pick-up & return</h4> <h4>Car type</h4>
            </div>
            <div>
              <form id="bookinginformation">
                <p>
                  <label>Date</label>
                  <DateRangeIcon></DateRangeIcon>
                  <input type="date" name="date" defaultValue="10-10-2021" />
                </p>
                <p>
                  <label>Time</label>
                  <input type="number" name="hour" />
                </p>
                <p>
                  <label>Location</label>
                  <select name="location" id="location">
                    <option value="Nordhavn">Nordhavn</option>
                    <option value="Sydhavn">Sydhavn</option>
                    <option value="Amager">Amager</option>
                  </select>
                </p>
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
              </form>
            </div>
          </div>

          <div id="buttonDiv">
            <button className = "modalButton" id="cancelButton">Cancel</button>
            {isNew ? (
              ""
            ) : (
              <p onClick={alertDelete} id="deleteButton">
                Delete booking
              </p>
            )}
            <button className = "modalButton" id="confirmButton">{isNew ? "Confirm" : "Edit"}</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
