import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import "./SimpleModal.css";

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

export default function SimpleModal() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="backgroundDiv">
      <Button variant="contained" color="primary" onClick={handleOpen}>
        EDIT
      </Button>

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
            <h2> Edit Booking</h2>
          </div>
          <div className="module">
            <div id="customerInformationTop">
              {" "}
              <h4>Customer information</h4> <h5>BookingID: 001</h5>
            </div>
            <div></div>
            <div>
              <form id="editbooking">
                <p>
                  <label>Booking ID</label>
                  <input type="text" name="Booking ID" value="Tester" />
                </p>
                <p>
                  <label>Phone Number</label>
                  <input type="text" name="Phone Number" />
                </p>
                <p>
                  <label>Name</label>
                  <input type="text" name="Name" />
                </p>
                <p>
                  <label>Address</label>
                  <input type="text" name="Address" />
                </p>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
