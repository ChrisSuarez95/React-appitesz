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

var alumnosList = [
  'JOSE ANGEL RODRIGUEZ',
  'MIGUEL ANGEL HERRERA',
  'JUAN OROPEZA SANCHEZ',
  'DANIEL GUZMAN',
  'CHRISTIAN GARCIA',
  'AMAIRANY MUÑOZ',
  'JOSE TORRES',
  'ROBERTO MERCADO',
  'ANTONIO MELCHOR',
  'GUADALUPE NUCI',
];

class Alumnos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alumnos: alumnosList,
    };
  }
  state = {};

  titulo = 'LISTA DE ALUMNOS';

  frmNoControl = React.createRef();
  frmNombre = React.createRef();

  addAlumno = (event) => {
    event.preventDefault();

    var newAlumnos = this.state.alumnos;
    newAlumnos.push(this.frmNombre.value);
    newAlumnos.sort();

    this.setState({ alumnos: newAlumnos });
  };

  render() {
    return (
      <div className="App-alumnos">
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
        <form autoComplete="off" onSubmit={this.addAlumno}>
          <TextField
            label="Nombre"
            type="text"
            margin="normal"
            variant="outlined"
            inputRef={(e) => (this.frmNombre = e)}
          />
          <Fab
            color="primary"
            size="medium"
            //className="dish-form-icon"
            onClick={this.addAlumno}
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
          {this.state.alumnos.map((alumno) => (
            <ListItem button key={alumno}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText inset primary={alumno} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default Alumnos;
