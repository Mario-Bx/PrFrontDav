import { Button, Paper, TextField, Typography } from "@material-ui/core";
import { withRouter } from "react-router-dom";

function registry(props) {
    return (
      <div>
          <Paper elevation={3}>
              <Typography>
                  Bienenido al Registro
              </Typography>

              <TextField variant="outlined" label="Nombre" placeholder="pepito"/>
              <TextField variant="outlined" label="Apellidos" placeholder=" de tal"/>
              <TextField variant="outlined" label="Contraseña" placeholder="****"/>
              <TextField variant="outlined" label="Fecha de nacimiento" placeholder="06/07/1993"/>

              <Button color="primary" onClick="">Enviar</Button>
          </Paper>
      </div>
    );
  }

  export default withRouter (registry)