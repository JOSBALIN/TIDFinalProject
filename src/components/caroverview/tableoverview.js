import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import "./tableoverview.css"
import "../CarPrem.css";


export default function BasicTableOverview(props) {
  console.log(props.listOfCars);
  return (
    <div className="flexbox-container">
      <TableContainer>
        <Table aria-label="simple table" sx={{ minWidth: 550, borderCollapse: 'separate', borderSpacing: '0px 8px'}}>
          <TableHead>
            <TableRow id="tableHeader">
              <TableCell style={{borderBottom:"none"}} align="left"> <p className="headings"> Group </p> </TableCell>
              <TableCell style={{borderBottom:"none"}} align="left"> <p className="headings"> Car </p> </TableCell>
              <TableCell style={{borderBottom:"none"}} align="left"> <p className="headings"> lot no. </p> </TableCell>
              <TableCell style={{borderBottom:"none"}} align="left"> <p className="headings"> Status </p> </TableCell>
            </TableRow>
          </TableHead>
            <TableBody className="body" >
              {props.listOfCars.map((car) => (
                <TableRow className="tablerow" key={car.carLicenseplateno} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell style={{borderBottom:"none"}} align="left" className="tablecell">{car.carGroup}</TableCell>
                  <TableCell style={{borderBottom:"none"}} align="left" className="tablecell">{car.carMake + " " + car.carModel}</TableCell>
                  <TableCell style={{borderBottom:"none"}} align="left" className="tablecell">{car.carParkingLotno}</TableCell>      
                  <TableCell style={{borderBottom:"none"}} align="left" className="tablecell">{car.carStatus}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
      
    
  );
}