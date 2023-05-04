import axios from 'axios';
import Title from '../Title';
import { Button } from "@material-ui/core"

import {
  Container,
  makeStyles,
  Grid,
  TextField,
} from "@material-ui/core";

function FormEvento() {
   
    const classes = useStyles();
    
    const handleSubmit = (result) => {
      if (result) {
        console.log(result)
        axios.post("http://localhost:3000/qr_scanner/create", { data: result })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      }
    };
  

    return (
      
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Title>Crear Evento</Title>

       <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField name="nombre"  label="Nombre" />
        </Grid>
        <Grid item xs={12}>
          <TextField name="direccion"  label="Dirección" />
        </Grid>
        <Grid item xs={12}>
          <TextField name="descipcion"  label="Descripción" />
        </Grid>
        <Grid item xs={12}>
          <TextField name="fecha" label="Fecha" />
        </Grid>
        <Grid item xs={12}>
          <TextField name="imagen"  label="imagen" />
        </Grid>
        </Grid>
        <Button
                  className={classes.btn}
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Enviar
        </Button>
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
      background: "#3f51b5",
      color: "#fff",
      padding: 20,
    },
    btn: {
      marginTop: 10,
      marginBottom: 20,
    },
  }));
  export default FormEvento;
  