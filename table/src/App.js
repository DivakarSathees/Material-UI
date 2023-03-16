import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";

function App() {
  const rows = [
    { name: "John", age: 25, gender: "Male" },
    { name: "Jane", age: 32, gender: "Female" },
    { name: "Bob", age: 45, gender: "Male" },
    { name: "Alice", age: 18, gender: "Female" }
  ];

  return (
    <div ><h1 style={{ display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop:'10rem'}} >Students Details</h1>
          <TableContainer component={Paper}
    style={{ display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // marginTop:'10rem',
    marginLeft:'20rem',
    width:'50%' }}>
      
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Gender</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.gender}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>    
    </div>
  );
}

export default App;
