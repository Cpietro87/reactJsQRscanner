import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Title from '../Title';

function Asistencia()  {
  const [qrscanner, setQrscanner] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios.get("http://192.168.1.45:3000/qr_scanner/index")
      .then(response => {
        setQrscanner(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <Grid item xs={12}>
    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>

      <React.Fragment>
      <Title>QrEscanner</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>DNI</TableCell>
            {/* <TableCell>Modo de pago</TableCell> */}
            {/* <TableCell align="right">Costo</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {qrscanner.map((qrscanner) => (
            <TableRow key={qrscanner.id}>
              <TableCell>{qrscanner.id}</TableCell>
              <TableCell>{qrscanner.nombre}</TableCell>
              <TableCell>{qrscanner.data}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="/home" sx={{ mt: 3 }}>
        Volver
      </Link>
    </React.Fragment>
    
    </Paper>
  </Grid>
  );
}

export default Asistencia;
