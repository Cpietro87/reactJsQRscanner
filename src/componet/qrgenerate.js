import React, { useState, useEffect } from "react";
import QRCode from "qrcode";
import {
  Container,
  Card,
  CardContent,
  makeStyles,
  Grid,
  TextField,
  Button
 
} from "@material-ui/core";
import qrLogo from "./maipu_crece.png";
import jsPDF from "jspdf";
import axios from 'axios';

function QrGenerate() {

const [nombre, setNombre] = useState("");
const [apellido, setApellido] = useState("");
const [dni, setDni] = useState("");
const [correo, setCorreo] = useState("");
const [telefono, setTelefono] = useState("");
const [imageUrl, setImageUrl] = useState("");
const classes = useStyles();

const handleClick = () => {
  const dato = { nombre,apellido,dni,correo,telefono };
  generateQrCode(dato);
  let data = dni
  axios.post("http://localhost:3000/qr_scanner/create", {nombre,apellido,data,correo,telefono })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};

const generateQrCode = async (data) => {
  const { nombre,apellido,dni,correo,telefono  } = data;
  const dato = `${nombre}, ${apellido}, ${dni}, ${correo}, ${telefono}`;
  try {
    const response = await QRCode.toDataURL(dato);
    setImageUrl(response);
  } catch (error) {
    console.log(error);
  }
};

const handleDownloadPDF = () => {
  var doc = new jsPDF('p', 'pt');

  var logo = new Image();
    logo.src = '../images/maipu_crece.png';
    doc.addImage(logo, 'PNG', 30, 80,50,100);
 

  doc.addImage(imageUrl, "PNG", 15, 15, 50, 50);

  // Descarga el archivo PDF
  doc.save("qrcode.pdf");
};




useEffect(() => {
  console.log(imageUrl);
}, [imageUrl]);


    return(
    <Container className={classes.container}>
            <Card>
                <h2 className={classes.title} >Generar Qr</h2>
                <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                        <TextField
                          label="Nombre"
                          onChange={(e) => setNombre(e.target.value)}
                        />
                         <TextField
                          label="Apellido"
                          onChange={(e) => setApellido(e.target.value)}
                        />
                        <TextField
                          label="Dni"
                          // type="number"
                          // inputProps={{
                          //   maxLength: 8,
                          //   min: 10000000,
                          //   max: 99999999,
                          // }}
                          onChange={(e) => setDni(e.target.value)}
                        />
                        <TextField
                          label="Correo electronico"
                          type="email"
                          onChange={(e) => setCorreo(e.target.value)}
                        />
                        <TextField
                          label="Telefono"
                          onChange={(e) => setTelefono(e.target.value)}
                        />
                        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                          <Button
                            className={classes.btn}
                            variant="contained"
                            color="primary"
                            onClick={() => handleClick()}
                          >
                            Generar Entrada
                          </Button>
                          <Button
                            className={classes.btn}
                            variant="contained"
                            color="primary"
                            onClick={() => handleDownloadPDF()}
                          >
                            Descargar PDF
                          </Button>
                          

                        </Grid >               
                        <div className="term-content"></div>
                        <br />
                        <br />
                        <br />
                        {imageUrl ? (
                          <div>

                            <a href={imageUrl} download="qrcode.png">
                              <img src={imageUrl} alt="img" />
                              <img src={qrLogo} alt="img" className={classes.Logo} />
                            </a>
                            <p>Nombre: {nombre}</p>
                            <p>Apellido: {apellido}</p>
                            <p>DNI: {dni}</p>
                            <p>Correo : {correo}</p>
                            <p>Teléfono: {telefono}</p>
                            
                          </div>
                        ) : null}
                      </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
}

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 50,
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
  logo: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 80,
    height: 80,
  }
}));

export default QrGenerate;