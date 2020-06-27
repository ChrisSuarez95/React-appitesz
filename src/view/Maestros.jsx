import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import { Fab, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PersonIcon from '@material-ui/icons/Person';

import {
  Button,
  Container,
  List,
  ListItem,
  ListSubheader,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';

class Maestros extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      idMaestro: 0,
      maestros1: [],
    };
  }
  state = {};

  titulo = 'LISTA DE MAESTROS';

  frmNoDocente = React.createRef();
  frmNombreDoc = React.createRef();

  addMaestro = (event) => {
    event.preventDefault();

    const data = {
      noDocente: this.frmNoDocente.value,
      nomDocente: this.frmNombreDoc.value,
    };

    if (!this.state.edit) {
      const url = 'http://localhost:5000/api/maestros';

      axios.post(url, data).then((res) => console.log(res.data));

      this.frmNoDocente.value = '';
      this.frmNombreDoc.value = '';
      this.frmNoDocente.focus();
      this.frmNombreDoc.focus();
    } else {
      const url = 'http://localhost:5000/api/maestros/' + this.state.id;

      const data = {
        noDocente: this.frmNoDocente.value,
        nomDocente: this.frmNombreDoc.value,
      };

      axios.put(url, data).then((res) => console.log(res.data));
    }

    this.loadMaestro();
  };

  viewMaestro = (id) => (event) => {
    event.preventDefault();

    this.frmNoDocente.value = '';
    this.frmNombreDoc.value = '';
    this.frmNoDocente.focus();
    this.frmNombreDoc.focus();
    this.frmNombreDoc.value = this.state.maestros[id];
  };

  editMaestro = (id, row) => (event) => {
    event.preventDefault();

    var newState = this.state;
    newState.edit = true;
    newState.id = id;

    this.setState(newState);

    this.frmNoDocente.focus();
    this.frmNoDocente.value = this.state.maestros1[row].noDocente;
    this.frmNombreDoc.focus();
    this.frmNombreDoc.value = this.state.maestros1[row].nomDocente;
  };

  deleteMaestro = (id) => (event) => {
    event.preventDefault();

    const url = 'http://localhost:5000/api/maestros/' + id;

    axios.delete(url).then((res) => console.log(res.data));

    this.loadMaestro();

    console.log(url);
  };

  loadMaestro() {
    axios.get('http://localhost:5000/api/maestros').then((res) => {
      //const emps = res.data;
      this.setState({ maestros1: res.data });
      console.log(res.data);
    });
  }

  componentDidMount() {
    this.loadMaestro();
  }

  render() {
    return (
      <div className="App-maestros">
        <Container maxWidth="xs">
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
        </Container>
        <form autoComplete="off" onSubmit={this.addMaestro}>
          <TextField
            label="No. Docente"
            type="text"
            margin="normal"
            variant="outlined"
            inputRef={(e) => (this.frmNoDocente = e)}
          />
          <TextField
            label="Nombre Docente"
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
          {this.state.maestros1.map((maestro, index) => (
            <ListItem button key={index}>
              <ListItemIcon onClick={this.viewMaestro(index)}>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText inset primary={maestro.noDocente} />
              <ListItemText inset primary={maestro.nomDocente} />
              <ListItemIcon onClick={this.editMaestro(maestro.id, index)}>
                <EditIcon />
              </ListItemIcon>
              <ListItemIcon onClick={this.deleteMaestro(maestro.id)}>
                <DeleteIcon />
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default Maestros;
