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

var semestresList = [
  'PRIMERO',
  'SEGUNDO',
  'TERCERO',
  'CUARTO',
  'QUINTO',
  'SEXTO',
  'SEPTIMO',
  'OCTAVO',
  'RESIDENCIAS',
];

class Semestres extends Component {
  constructor(props) {
    super(props);
    this.state = {
      semestres: semestresList,
    };
  }
  state = {};

  titulo = 'LISTA DE SEMESTRES';

  frmIdSemestre = React.createRef();
  frmNombreSem = React.createRef();

  addSemestre = (event) => {
    event.preventDefault();

    var newSemestres = this.state.semestres;
    newSemestres.push(this.frmNombreSem.value);
    newSemestres.sort();

    this.setState({ semestres: newSemestres });
  };

  render() {
    return (
      <div className="App-semestres">
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
        <form autoComplete="off" onSubmit={this.addSemestre}>
          <TextField
            label="Nombre"
            type="text"
            margin="normal"
            variant="outlined"
            inputRef={(e) => (this.frmNombreSem = e)}
          />
          <Fab
            color="primary"
            size="medium"
            //className="dish-form-icon"
            onClick={this.addSemestre}
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
          {this.state.semestres.map((semestre) => (
            <ListItem button key={semestre}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText inset primary={semestre} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default Semestres;
