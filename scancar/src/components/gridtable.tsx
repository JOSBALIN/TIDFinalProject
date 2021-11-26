import * as React from "react";
import { DataGrid, GridRowsProp, GridColDef, GridCellParams, MuiEvent, GridApi, GridCellValue } from "@mui/x-data-grid";
import type {} from '@mui/x-data-grid/themeAugmentation';
import { Button } from "@mui/material";

const rows: GridRowsProp = [
  { id: 1, col1: "Hello", col2: "World", col3:     <label>Booking ID</label> },
  { id: 2, col1: "XGrid", col2: "is Awesome", col3: "test" },
  { id: 3, col1: "Material-UI", col2: "is Amazing", col3: "test" },
  { id: 4, col1: "Hello", col2: "World", col3: "test" },
  { id: 5, col1: "XGrid", col2: "is Awesome", col3: "test" },
  { id: 6, col1: "Material-UI", col2: "is Amazing", col3: "test" }
];


const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  
  // Button in grid adapted from https://stackoverflow.com/questions/64331095/how-to-add-a-button-to-every-row-in-mui-datagrid
  {
    field: "action",
    headerName: "Action",
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

        return <p>TEEEST</p>
      };

      return <Button onClick={onClick}>Click</Button>;
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
      <DataGrid rows={rows} columns={columns} 
      onCellClick={(params: GridCellParams, event: MuiEvent<React.MouseEvent>) => {
        event.defaultMuiPrevented = true;
      }}
      />
    
    <div>
    <label>Booking ID</label>
    <input type="text" name="Booking ID" />
    <button> submit</button>
    </div>
    </div>
  );
}
