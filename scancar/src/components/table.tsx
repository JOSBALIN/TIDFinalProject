import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import "./table.css"

// Table is from MUI, edited by jbal

function createData(
  bookingid: number,
  name: string,
  phone: string,
  group: string,
  pickuptime: string,
  returntime: string,
  carstatus: string,
) {
  return { bookingid, name, phone, group, pickuptime, returntime, carstatus };
}



const rows = [
  createData(150, "Johan Larsen", "+45 3140 1103", "A", "30/10/2021\n20:00", "05/11/2021\n10:00", "Returned"),
  createData(150, "Johan Larsen", "+45 3140 1103", "A", "30/10/2021\n20:00", "05/11/2021\n10:00", "Returned"),
  createData(150, "Johan Larsen", "+45 3140 1103", "A", "30/10/2021\n20:00", "05/11/2021\n10:00", "Returned"),
  createData(150, "Johan Larsen", "+45 3140 1103", "A", "30/10/2021\n20:00", "05/11/2021\n10:00", "Returned"),
  createData(150, "Johan Larsen", "+45 3140 1103", "A", "30/10/2021\n20:00", "05/11/2021\n10:00", "Returned"),
  createData(150, "Johan Larsen", "+45 3140 1103", "A", "30/10/2021\n20:00", "05/11/2021\n10:00", "Returned")
];

export default function BasicTable() {
  return (
    <TableContainer>
      <Table aria-label="simple table" sx={{ minWidth: 650, borderCollapse: 'separate', borderSpacing: '0px 8px'}}>
        <TableHead>
          <TableRow id="tableHeader">
            <TableCell style={{borderBottom:"none"}} >Booking ID</TableCell>
            <TableCell style={{borderBottom:"none"}} align="right">Name</TableCell>
            <TableCell style={{borderBottom:"none"}} align="right">Phone</TableCell>
            <TableCell style={{borderBottom:"none"}} align="right">Group</TableCell>
            <TableCell style={{borderBottom:"none"}} align="right">Pick-up</TableCell>
            <TableCell style={{borderBottom:"none"}} align="right">Return</TableCell>
            <TableCell style={{borderBottom:"none"}} align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="body" >
          {rows.map((row) => (
            <TableRow className="tablerow"
              key={row.bookingid}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell style={{borderBottom:"none"}} component="th" scope="row" className="tablecellleft">{row.bookingid}</TableCell>
              <TableCell style={{borderBottom:"none"}} align="right" className="tablecell">{row.name}</TableCell>
              <TableCell style={{borderBottom:"none"}} align="right" className="tablecell">{row.phone}</TableCell>
              <TableCell style={{borderBottom:"none"}} align="right" className="tablecell">{row.group}</TableCell>
              <TableCell style={{borderBottom:"none"}} align="right" className="tablecell">{row.pickuptime}</TableCell>
              <TableCell style={{borderBottom:"none"}} align="right" className="tablecell">{row.returntime}</TableCell>
              <TableCell style={{borderBottom:"none"}} align="right" className="tablecell">{row.carstatus}</TableCell>
              <TableCell style={{borderBottom:"none"}} align="right" className="tablecellright"><button className="editbutton">EDIT</button></TableCell>           
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}