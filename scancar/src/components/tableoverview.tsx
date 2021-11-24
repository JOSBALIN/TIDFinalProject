import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import "./tableoverview.css"
import "./CarPrem.css"


function createData(
  group: string,
  lotno: string,
  car: string,
  status: string,
  liscenseplate: string,
  fueltype: string,
  noofdoors: string,
  color: string,
) {
  return { group, lotno, car, status, liscenseplate, fueltype, noofdoors, color };
}



const rows = [
  createData("A", "Y9", "VW", "Ready", "VY 43 334", "diesel", "5 doors", "black"),
  createData("A", "X10", "Toyota", "Ready", "VY 43 334", "petrol", "3 doors", "silver"),
  createData("B", "Y3", "Nissan", "Returned", "VY 43 334", "diesel", "5 doors", "yellow"),
  createData("C", "Y4", "Peugeot", "Returned", "VY 43 334", "petrol", "4 doors", "white"),
];


export default function BasicTableOverview() {

  return (
    <TableContainer>
      <Table aria-label="simple table" sx={{ minWidth: 550, borderCollapse: 'separate', borderSpacing: '0px 8px'}}>
        <TableHead>
          <TableRow id="tableHeader">
            <TableCell style={{borderBottom:"none"}}> <p className="headings"> Group </p> </TableCell>
            <TableCell style={{borderBottom:"none"}} align="right"> <p className="headings">Lot no. </p> </TableCell>
            <TableCell style={{borderBottom:"none"}} align="right"> <p className="headings">Car </p> </TableCell>
            <TableCell style={{borderBottom:"none"}} align="right"> <p className="headings">Status </p> </TableCell>

          </TableRow>
        </TableHead>
        <TableBody className="body" >
          {rows.map((row) => (
            <TableRow className="tablerow" key={row.lotno} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell style={{borderBottom:"none"}} component="th" scope="row" className="tablecellleft">{row.lotno}</TableCell>
              <TableCell style={{borderBottom:"none"}} align="right" className="tablecell">{row.group}</TableCell>
              <TableCell style={{borderBottom:"none"}} align="right" className="tablecell">{row.car}</TableCell>
              <TableCell style={{borderBottom:"none"}} align="right" className="tablecell">{row.status}</TableCell>
              <TableCell style={{borderBottom:"none"}} align="right" className="tablecellright"/>           
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}