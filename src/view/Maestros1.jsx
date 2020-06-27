import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import { Fab, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import PersonIcon from '@material-ui/icons/Person';

import {
  Button,
  List,
  ListItem,
  ListSubheader,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';

var maestrosList = [
  'RICARDO GARCIA CRUZ',
  'ROBERTO SUAREZ',
  'ANA CELIA SEGUNDO',
  'ALICIA HERNANDEZ',
  'BRUNO BARBOZA',
  'CLAUDIA',
  'PACO RODRIGUEZ',
  'JORGE EDGAR MAGDALENO',
  'JORGE',
  'RODRIGO GOVEA',
  'HUGO LUA',
  'OZIEL',
];

class Maestros extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maestros: maestrosList,
    };
  }
  state = {};

  titulo = 'LISTA DE MAESTROS';

  frmNoDocente = React.createRef();
  frmNombreDoc = React.createRef();

  addMaestro = (event) => {
    event.preventDefault();

    var newMaestros = this.state.maestros;
    newMaestros.push(this.frmNombreDoc.value);
    newMaestros.sort();

    this.setState({ maestros: newMaestros });
  };

  render() {
    return (
      <div className="App-maestros">
        <Link to="/">
          <Button
            variant="contained"
            color="default"
            size="small"
            startIcon={<HomeIcon />}
          >
            Regresar
          </Button>
        </Link>
        <form autoComplete="off" onSubmit={this.addMaestro}>
          <TextField
            label="Nombre"
            type="text"
            margin="normal"
            variant="outlined"
            inputRef={(e) => (this.frmNombreDoc = e)}
          />
          <Fab
            color="primary"
            size="medium"
            //className="dish-form-icon"
            onClick={this.addMaestro}
          >
            <AddIcon />
          </Fab>
        </form>

        <List
          component="nav"
          subheader={
            <ListSubheader component="div">{this.titulo}</ListSubheader>
          }
        >
          {this.state.maestros.map((maestro) => (
            <ListItem button key={maestro}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText inset primary={maestro} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default Maestros;
