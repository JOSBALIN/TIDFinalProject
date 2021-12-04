import * as React from "react";
import { DataGrid, GridRowsProp, GridColDef, GridCellParams, MuiEvent, GridApi, GridCellValue } from "@mui/x-data-grid";
import type {} from '@mui/x-data-grid/themeAugmentation';
import { Button } from "@mui/material";
import SimpleModal from "./SimpleModal";
import { makeStyles } from "@mui/styles";

import "./SimpleModal.css"
import "./gridtable.css"
import { ClassNames } from "@emotion/react";
import { borderBottom } from "@mui/system";
import { nodeModuleNameResolver } from "typescript";

const useStyles = makeStyles({
  root: {
  "& .styledrows": {
  backgroundColor: "#EBEBEB",  
  }
  }
  });


const rows: GridRowsProp = [
  { id: 1, name: "Johan Larsen", phoneNum: "20304050", carGroup: "A", pickup: "01/01/2022", return: "10/01/2022", carStatus: "delivered"},
  { id: 2, name: "Stine Frederiksen", phoneNum: "24543796", carGroup: "D", pickup: "01/01/2022", return: "10/01/2022", carStatus: "delivered"},
  { id: 3, name: "Lars Bohn", phoneNum: "10593768", carGroup: "B", pickup: "01/01/2022", return: "10/01/2022", carStatus: "delivered"},
  { id: 4, name: "Lisette Markussen", phoneNum: "19504837", carGroup: "C", pickup: "01/01/2022", return: "10/01/2022", carStatus: "delivered"},
  { id: 5, name: "Frederik Fabricius", phoneNum: "21894567", carGroup: "D", pickup: "01/01/2022", return: "10/01/2022", carStatus: "delivered"},
  { id: 6, name: "Simone Seier", phoneNum: "15702498", carGroup: "A", pickup: "01/01/2022", return: "10/01/2022", carStatus: "delivered"},
];



const columns: GridColDef[] = [
  { field: "id",  headerName: "Booking ID", minWidth: 110, align: "center" },
  { field: "name",  headerName: "Full Name", minWidth: 140,  },
  { field: "phoneNum",  headerName: "Phone", width: 120 },
  { field: "carGroup",  headerName: "Group", width: 90, align: "center" },
  { field: "pickup",  headerName: "Pick-up", width: 100, align: "center" },
  { field: "return",  headerName: "Return", width: 100, align: "center" },
  { field: "carStatus",  headerName: "Status", width: 90 },

  
  // Button in grid adapted from https://stackoverflow.com/questions/64331095/how-to-add-a-button-to-every-row-in-mui-datagrid
  {
    field: "edit",
    headerName: "",
    sortable: false,
    align: "center",
    minWidth: 50,
    renderCell: (params) => {

      const onClick = () => {
        //e.stopPropagation(); // don't select this row after clicking

        const api: GridApi = params.api;
        const thisRow: Record<string, GridCellValue> = {};

        api
          .getAllColumns()
          .filter((c) => c.field !== "__check__" && !!c)
          .forEach(
            (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
          );

          const rowValues = thisRow; // ThisRow contains all data on current row
          console.log(rowValues);
          params.value = 2;
          return thisRow
      };
     

      return <SimpleModal o={onClick()} isOpen={false}/>
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




export default function GridTable() {

  const classes = useStyles();

  return (
    <div className={classes.root} style={{height: 500, outlineColor: 'white', borderColor: 'white', outline: 0}}>
      <DataGrid
        disableColumnMenu={true}
        scrollbarSize={100}
        disableColumnSelector={true}
        rowHeight={70}
        pageSize={5}
        showColumnRightBorder={true}
        disableSelectionOnClick
        rows={rows}
        columns={columns}
        headerHeight={50}
        getRowClassName={(params) => "styledrows"}

      />
      <div></div>
    </div>

  );
}
