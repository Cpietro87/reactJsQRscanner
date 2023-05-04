import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function UserForm() {
  const [formValues, setFormValues] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    password: "",
    telefono: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: formValues }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="nombre"
        label="Nombre"
        value={formValues.nombre}
        onChange={handleChange}
      />
      <TextField
        name="apellido"
        label="Apellido"
        value={formValues.apellido}
        onChange={handleChange}
      />
      <TextField
        name="correo"
        label="Correo"
        value={formValues.correo}
        onChange={handleChange}
      />
      <TextField
        name="password"
        label="Contraseña"
        type="password"
        value={formValues.password}
        onChange={handleChange}
      />
      <TextField
        name="telefono"
        label="Teléfono"
        value={formValues.telefono}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
    </form>
  );
}
