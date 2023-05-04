import React, { useState, useRef } from "react";
import axios from 'axios';
import {
  Container,
  Card,
  CardContent,
  makeStyles,
  Grid,
  Button,
} from "@material-ui/core";
import QrReader from "react-qr-reader";

function QrScanner() {
    const [scanResultFile, setScanResultFile] = useState([]);
    const [scanResultWebCam, setScanResultWebCam] = useState("");
    const [message, setMessage] = useState("");
    const classes = useStyles();
    const qrRef = useRef(null);
    
  

    const handleErrorFile = (error) => {
      console.log(error);
    };
    const handleScanFile = (result) => {
      console.log(result)

      const [nombre,apellido,dni,correo,telefono] = result.split(',');
      console.log(`Nombre: ${nombre}`);
      console.log(`DNI: ${dni}`);
      let data = dni
      if (result) {
        setScanResultFile(result);
        //get solicito nrode entrada 
        axios.post("http://https://192.168.1.45:3000/qr_scanner/asistencia", {nombre,apellido,data,correo,telefono })
        .then((response) => {
          console.log(response);
          if (response.data.message === "ATENCION LA ENTRADA YA INGRESO") {
            setMessage(response.data.message);
          }
        })
        .catch((error) => {
        console.log(error);
      });
      }
    };
    const onScanFile = () => {
      qrRef.current.openImageDialog();
    };
    const handleErrorWebCam = (error) => {
      console.log(error);
    };
    const handleScanWebCam = (result) => {
      if (result) {
        const [nombre,apellido,dni,correo,telefono] = result.split(',');
        let data = dni
        console.log(result)
        setScanResultWebCam(result);
        axios.post("http://192.168.1.45:3000/qr_scanner/asistencia", {nombre,apellido,data,correo,telefono })
        .then((response) => {
          console.log(response);
          if (response.data.message === "ATENCION LA ENTRADA YA INGRESO") {
            setMessage(response.data.message);
          }
        })
        .catch((error) => {
          console.log(error);
        });
      }
    };
  
    

    return (
      
      <Container className={classes.container}>
        <Card>
          <h2 className={classes.title}>Scanear Qr</h2>
          <h3 style={{ color: 'green' }}>{message}</h3>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                <Button
                  className={classes.btn}
                  variant="contained"
                  color="secondary"
                  onClick={onScanFile}
                >
                  Scanear Qr
                </Button>
                <QrReader
                  ref={qrRef}
                  delay={300}
                  style={{ width: "100%" }}
                  onError={handleErrorFile}
                  onScan={handleScanFile}
                  legacyMode
                />
                <h3>Resultado: {scanResultFile}</h3>
                <h3 style={{ color: 'green' }}>{message}</h3>
              </Grid>
              <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                {/* <h3>Qr Code Scanear por Web Cam</h3> */}
                <h3 style={{ color: 'green' }}>{message}</h3>
                <QrReader
                  delay={300}
                  style={{ width: "100%" }}
                  onError={handleErrorWebCam}
                  onScan={handleScanWebCam}
                />
                <h3 >Resultado: {scanResultWebCam}</h3>
                <h3 style={{ color: 'green' }}>{message}</h3>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
      
    );
  }
  
  const useStyles = makeStyles((theme) => ({
    container: {
      marginTop: 10,
    },
    title: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#2995ed",
      color: "#fff",
      padding: 20,
    },
    btn: {
      background: "#2995ed",
      marginTop: 10,
      marginBottom: 20,
    },
  }));
  export default QrScanner;
  