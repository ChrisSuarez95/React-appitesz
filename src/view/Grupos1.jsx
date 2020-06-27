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

var gruposList = ['A', 'B', 'C', 'D', 'E'];

class Grupos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grupos: gruposList,
    };
  }
  state = {};

  titulo = 'LISTA DE GRUPOS';

  frmIdGrupo = React.createRef();
  frmNombreGru = React.createRef();

  addGrupo = (event) => {
    event.preventDefault();

    var newGrupos = this.state.grupos;
    newGrupos.push(this.frmNombreGru.value);
    newGrupos.sort();

    this.setState({ grupos: newGrupos });
  };

  render() {
    return (
      <div className="App-grupos">
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
        <form autoComplete="off" onSubmit={this.addGrupo}>
          <TextField
            label="Nombre"
            type="text"
            margin="normal"
            variant="outlined"
            inputRef={(e) => (this.frmNombreGru = e)}
          />
          <Fab
            color="primary"
            size="medium"
            //className="dish-form-icon"
            onClick={this.addGrupo}
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
          {this.state.grupos.map((grupo) => (
            <ListItem button key={grupo}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText inset primary={grupo} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default Grupos;
