import { DataGrid} from "@mui/x-data-grid";
import SimpleModal from "../SimpleModal";
import { makeStyles } from "@mui/styles";
import DeleteIcon from '@mui/icons-material/Delete';

import "../SimpleModal.css"
import "./gridtable.css"

function alertDelete() {
  window.confirm("Are you sure you want to delete this entry?\nThis cannot be undone");
}



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
  { field: "id",  headerName: "Booking ID", minWidth: 110, align: "center", headerAlign:"center" },
  { field: "name",  headerName: "Full Name", minWidth: 140, flex: 0.6,  },
  { field: "phoneNum",  headerName: "Phone", minWidth: 110, sortable:false },
  { field: "carGroup",  headerName: "Group", minWidth: 90, align: "center", headerAlign:"center" },
  { field: "pickup",  headerName: "Pick-up", minWidth: 100, sortable:false, flex: 0.3, align: "center", headerAlign:"center" },
  { field: "return",  headerName: "Return", minWidth: 100, sortable:false, flex: 0.3, align: "center", headerAlign:"center" },
  { field: "carStatus",  headerName: "Status", minWidth: 90, align: "left", headerAlign:"center" },
  { field: "licenseID",  headerName: "Driver's License", minWidth: 90, align: "left", headerAlign:"center", hide:true },
  { field: "address",  headerName: "Address", minWidth: 90, align: "left", headerAlign:"center", hide:true },
  { field: "pickupDate",  hide:true },
  { field: "pickupTime",  hide:true },
  { field: "returnDate",  hide:true },
  { field: "returnTime",  hide:true },


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

export default function GridTable(props) { 
    
  const classes = useStyles({m:400});
  
  // Vars and functions for formatting date, taken from W3 schools' articles on getMonths & getMinutes
  const months = ["01","02","03","04","05","06","07","08","09","10","11","12"];
  function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }

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
              name: booking.fullname,
              phoneNum: booking.phonenumber,
              carGroup: booking.cargroup,
              pickup: booking.pickupdate.getDate()+"/"+months[booking.pickupdate.getMonth()]+"/"+booking.pickupdate.getFullYear()+"  "+booking.pickupdate.getHours() +":"+addZero(booking.pickupdate.getMinutes()),
              return: booking.dropoffdate.getDate()+"/"+months[booking.dropoffdate.getMonth()]+"/"+booking.dropoffdate.getFullYear()+"  "+booking.dropoffdate.getHours() +":"+addZero(booking.dropoffdate.getMinutes()),
              carStatus: booking.status,
              licenseID: booking.driverlicenseno,
              address: booking.address,
              pickupDate: booking.pickupdate.getFullYear()+"-"+months[booking.pickupdate.getMonth()]+"-"+addZero(booking.pickupdate.getDate()),
              pickupTime: booking.pickupdate.getHours() +":"+addZero(booking.pickupdate.getMinutes()),
              returnDate: booking.dropoffdate.getFullYear()+"-"+months[booking.dropoffdate.getMonth()]+"-"+addZero(booking.dropoffdate.getDate()),
              returnTime: booking.dropoffdate.getHours() +":"+addZero(booking.dropoffdate.getMinutes()),
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
