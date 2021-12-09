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


export default function BasicTableOverview(props) {
  console.log(props.listOfCars);
  return (
    
    <div className="flexbox-container">
      <div className="flexbox-item-vertical carlist">
      <TableContainer>
        <Table aria-label="simple table" sx={{ minWidth: 550, borderCollapse: 'separate', borderSpacing: '0px 8px'}}>
          <TableHead>
            <TableRow id="tableHeader">
              <TableCell style={{borderBottom:"none"}} align="left"> <p className="headings"> Group </p> </TableCell>
              <TableCell style={{borderBottom:"none"}} align="left"> <p className="headings"> Make </p> </TableCell>
              <TableCell style={{borderBottom:"none"}} align="left"> <p className="headings"> lot no. </p> </TableCell>
              <TableCell style={{borderBottom:"none"}} align="left"> <p className="headings"> License plate no. </p> </TableCell>
              <TableCell style={{borderBottom:"none"}} align="left"> <p className="headings"> Status </p> </TableCell>
            </TableRow>
          </TableHead>
            <TableBody className="body" >
              {props.listOfCars.map((car) => (
                <TableRow className="tablerow" key={car.carLicenseplateno} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell style={{borderBottom:"none"}} align="left" className="tablecell">{car.carGroup}</TableCell>
                  <TableCell style={{borderBottom:"none"}} align="left" className="tablecell">{car.carMake}</TableCell>
                  <TableCell style={{borderBottom:"none"}} align="left" className="tablecell">{car.carModel}</TableCell>
                  <TableCell style={{borderBottom:"none"}} align="left" className="tablecell">{car.carLicenseplateno}</TableCell>
                  <TableCell style={{borderBottom:"none"}} align="left" className="tablecell">{car.status}</TableCell>
                  <TableCell style={{borderBottom:"none"}} align="left" className="tablecellright"/>           
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}