import * as React from "react";
import { DataGrid, GridRowsProp, GridColDef, GridCellParams, MuiEvent, GridApi, GridCellValue } from "@mui/x-data-grid";
import type {} from '@mui/x-data-grid/themeAugmentation';
import { Button } from "@mui/material";
import SimpleModal from "./SimpleModal";
import "./SimpleModal.css"

const rows: GridRowsProp = [
  { id: 1, col1: "Hello", col2: "World", col3: "test" },
  { id: 2, col1: "XGrid", col2: "is Awesome", col3: "test" },
  { id: 3, col1: "Material-UI", col2: "is Amazing", col3: "test" },
  { id: 4, col1: "Hello", col2: "World", col3: "test" },
  { id: 5, col1: "XGrid", col2: "is Awesome", col3: "test" },
  { id: 6, col1: "Material-UI", col2: "is Amazing", col3: "test" }
];


const columns: GridColDef[] = [
  { field: "id",  headerName: "Booking ID", width: 120 },
  { field: "name",  headerName: "Full Name", width: 120 },
  { field: "phoneNum",  headerName: "Phone", width: 120 },
  { field: "carGroup",  headerName: "Group", width: 90 },
  { field: "pick-up",  headerName: "Pick-up", width: 100 },
  { field: "return",  headerName: "Return", width: 100 },
  { field: "status",  headerName: "Status", width: 90 },

  
  // Button in grid adapted from https://stackoverflow.com/questions/64331095/how-to-add-a-button-to-every-row-in-mui-datagrid
  {
    field: "edit",
    headerName: "",
    sortable: false,
    renderCell: (params) => {
      const onClick = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation(); // don't select this row after clicking

        const api: GridApi = params.api;
        const thisRow: Record<string, GridCellValue> = {};

        api
          .getAllColumns()
          .filter((c) => c.field !== "__check__" && !!c)
          .forEach(
            (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
          );

          return alert(JSON.stringify(thisRow, null, 4));
      };

      return <div><SimpleModal/></div>;
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
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid disableSelectionOnClick rows={rows} columns={columns} 
      onCellClick={(params: GridCellParams, event: MuiEvent<React.MouseEvent>) => {
        event.defaultMuiPrevented = true;
      }}
      />
          <div></div>
    </div>
  );
}
