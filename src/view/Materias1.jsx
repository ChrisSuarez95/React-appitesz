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

var materiasList = [
  'PROGRAMACION',
  'BASE DE DATOS',
  'REDES',
  'CALCULO',
  'TALLER DE INVESTIGACION',
  'SISTEMAS OPERATIVOS',
  'DISPOSITIVOS MOVILES',
  'TALLER DE ETICA',
  'INLGES',
];

class Materias extends Component {
  constructor(props) {
    super(props);
    this.state = {
      materias: materiasList,
    };
  }
  state = {};

  titulo = 'LISTA DE MATERIAS';

  frmidMateria = React.createRef();
  frmNombreMat = React.createRef();

  addMateria = (event) => {
    event.preventDefault();

    var newMaterias = this.state.materias;
    newMaterias.push(this.frmNombreMat.value);
    newMaterias.sort();

    this.setState({ materias: newMaterias });
  };

  render() {
    return (
      <div className="App-materias">
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
        <form autoComplete="off" onSubmit={this.addMateria}>
          <TextField
            label="Nombre"
            type="text"
            margin="normal"
            variant="outlined"
            inputRef={(e) => (this.frmNombreMat = e)}
          />
          <Fab
            color="primary"
            size="medium"
            //className="dish-form-icon"
            onClick={this.addMateria}
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
          {this.state.materias.map((materia) => (
            <ListItem button key={materia}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText inset primary={materia} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default Materias;
