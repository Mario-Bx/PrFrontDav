import { Button, Paper, TextField, Typography } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import {goRegistry} from "../../apisManagent/userContex.js"

function login(props) {
    return (
      <div>
          <Paper elevation={3}>
              <Typography>
                  Bienenido 
              </Typography>

              <TextField variant="outlined" label="Correo" placeholder="ingre@correo.com"/>

              <Button color="primary" onClick={() => {alert('¿Usted ha ingresado')} }  >ingresar</Button>
              <Button color="secondary" onClick={() => goRegistry(props.history) } >REgistrarse</Button>
          </Paper>
      </div>
    );
  }

  export default withRouter (login)