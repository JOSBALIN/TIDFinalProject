import * as React from "react";
import { DataGrid, GridRowsProp, GridColDef, GridCellParams, MuiEvent, GridApi, GridCellValue } from "@mui/x-data-grid";
import SimpleModal from "./SimpleModal";
import { makeStyles } from "@mui/styles";
import DeleteIcon from '@mui/icons-material/Delete';
import { getOneBooking } from "../api";

import "./SimpleModal.css"
import "./gridtable.css"
import { NoEncryption } from "@mui/icons-material";

function alertDelete() {
  window.confirm("Are you sure you want to delete this entry?\nThis cannot be undone");
}



const oldRows = [
  { id: 1, name: "Jonathan Larsen", phoneNum: "20304050", carGroup: "A", pickup: "01/01/2022", return: "10/01/2022", carStatus: "delivered"},
  { id: 2, name: "Stine Frederiksen", phoneNum: "24543796", carGroup: "D", pickup: "01/01/2022", return: "10/01/2022", carStatus: "delivered"},
  { id: 3, name: "Lars Bohn", phoneNum: "10593768", carGroup: "B", pickup: "01/01/2022", return: "10/01/2022", carStatus: "delivered"},
  { id: 4, name: "Lisette Markussen", phoneNum: "19504837", carGroup: "C", pickup: "01/01/2022", return: "10/01/2022", carStatus: "delivered"},
  { id: 5, name: "Frederik Fabricius", phoneNum: "21894567", carGroup: "D", pickup: "01/01/2022", return: "10/01/2022", carStatus: "delivered"},
  { id: 6, name: "Simone Seier", phoneNum: "15702498", carGroup: "A", pickup: "01/01/2022", return: "10/01/2022", carStatus: "delivered"},
];

const useStyles = makeStyles({
  root: {
    "& .styledrows": {
      backgroundColor: "#EBEBEB",
    },
    border: "0px",
    outline: "none",
    marginTop: "1px",
    marginBottom: "1px",
    color: "red",
    margin:"0px",
    outline:"none",
    
  },
});


const columns = [
  { field: "id",  headerName: "Booking ID", minWidth: 110, align: "center" },
  // { field: "name",  headerName: "Full Name", minWidth: 140,  },
  // { field: "phoneNum",  headerName: "Phone", width: 110, sortable:false },
  // { field: "carGroup",  headerName: "Group", width: 90, align: "center" },
  { field: "pickup",  headerName: "Pick-up", width: 100, align: "center" },
  { field: "return",  headerName: "Return", width: 100, align: "center" },
  { field: "carStatus",  headerName: "Status", width: 90 },

  
  // Button in grid adapted from https://stackoverflow.com/questions/64331095/how-to-add-a-button-to-every-row-in-mui-datagrid
  {
    field: "edit",
    headerName: "",
    sortable: false,
    align: "center",
    width: 20,
    renderCell: (params) => {

      const onClick = () => {

        const api = params.api;
        const thisRow = {};

        api
          .getAllColumns()
          .filter((c) => c.field !== "__check__" && !!c)
          .forEach(
            (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
          );

          return thisRow
      };
     

      return <SimpleModal o={onClick()} isNew={false}/>
    }
  },

  {
    field: "delete",
    headerName: "",
    sortable: false,
    align: "center",
    width: 20,
    renderCell: (params) => {


      return <button className="deleteButton" onClick={alertDelete}  ><DeleteIcon/></button>
    }
  },


];

// const columns: GridColDef[] = [
//   { field: "id", hide: true },
//   { field: "col1", headerName: "Column 1", width: 150, editable: true},
//   { field: "col2", headerName: "Column 2", width: 150, editable: true },
//   { field: "col3", headerName: "Column 3", width: 150}
  
// ];

/**
  * Set the cellMode of a cell.
  * @param GridRowId
  * @param string
  * @param 'edit' | 'view'
  */





export default function GridTable(props) { 
    


  // console.log(props.listOfBookings);

  // props.listOfBookings.map((booking) => (
  //   console.log(booking.bookingBookingid)

  //   ))


  const classes = useStyles({m:400});

  const rows = [
    { id: 1, name: "Jonathan Larsen", phoneNum: "20304050", carGroup: "A", pickup: "01/01/2022", return: "10/01/2022", carStatus: "props.listOfBookings[0].bookingBookingid"},
    { id: 2, name: "Stine Frederiksen", phoneNum: "24543796", carGroup: "D", pickup: "01/01/2022", return: "10/01/2022", carStatus: "delivered"},
    { id: 3, name: "Lars Bohn", phoneNum: "10593768", carGroup: "B", pickup: "01/01/2022", return: "10/01/2022", carStatus: "delivered"},
    { id: 4, name: "Lisette Markussen", phoneNum: "19504837", carGroup: "C", pickup: "01/01/2022", return: "10/01/2022", carStatus: "delivered"},
    { id: 5, name: "Frederik Fabricius", phoneNum: "21894567", carGroup: "D", pickup: "01/01/2022", return: "10/01/2022", carStatus: "delivered"},
    { id: 6, name: "Simone Seier", phoneNum: "15702498", carGroup: "A", pickup: "01/01/2022", return: "10/01/2022", carStatus: "delivered"},
  ];

  return (
    <div className={classes.root} >
      <DataGrid
        autoHeight
        disableColumnMenu={true}
        scrollbarSize={100}
        disableColumnSelector={true}
        rowHeight={56}
        pageSize={10}
        showColumnRightBorder={true}
        disableSelectionOnClick
        columns={columns}
        sx={{useStyles}}
        rows={

          props.listOfBookings.map((booking) => (
            {
              id: booking.bookingid, 
              pickup: booking.bookingPickupdate,
              return: booking.bookingDropoffdate.toUTCString(),
              carStatus: booking.bookingStatus,
            }
          ))
        //   [
        //   { id: 1, carStatus: 'React' },
        //   { id: 2, carStatus: 'MUI' },
        // ]
      
      }
        headerHeight={50}
        getRowClassName={(params) => "styledrows"}

      />
      <div></div>
    </div>

  );
}
