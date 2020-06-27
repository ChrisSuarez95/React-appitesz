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

class Materias extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      idMateria: 0,
      materias1: [],
    };
  }
  state = {};

  titulo = 'LISTA DE MATERIAS';

  frmCveMateria = React.createRef();
  frmNombreMat = React.createRef();

  addMateria = (event) => {
    event.preventDefault();

    const data = {
      cveMateria: this.frmCveMateria.value,
      nomMateria: this.frmNombreMat.value,
    };

    if (!this.state.edit) {
      const url = 'http://localhost:5000/api/materias';

      axios.post(url, data).then((res) => console.log(res.data));

      this.frmCveMateria.value = '';
      this.frmNombreMat.value = '';
      this.frmCveMateria.focus();
      this.frmNombreMat.focus();
    } else {
      const url = 'http://localhost:5000/api/materias/' + this.state.id;

      const data = {
        cveMateria: this.frmCveMateria.value,
        nomMateria: this.frmNombreMat.value,
      };

      axios.put(url, data).then((res) => console.log(res.data));
    }

    this.loadMateria();
  };

  viewMateria = (id) => (event) => {
    event.preventDefault();

    this.frmCveMateria.value = '';
    this.frmNombreMat.value = '';
    this.frmCveMateria.focus();
    this.frmNombreMat.focus();
    this.frmNombreMat.value = this.state.materias[id];
  };

  editMateria = (id, row) => (event) => {
    event.preventDefault();

    var newState = this.state;
    newState.edit = true;
    newState.id = id;

    this.setState(newState);

    this.frmCveMateria.focus();
    this.frmCveMateria.value = this.state.materias1[row].cveMateria;
    this.frmNombreMat.focus();
    this.frmNombreMat.value = this.state.materias1[row].nomMateria;
  };

  deleteMateria = (id) => (event) => {
    event.preventDefault();

    const url = 'http://localhost:5000/api/materias/' + id;

    axios.delete(url).then((res) => console.log(res.data));

    this.loadMateria();

    console.log(url);
  };

  loadMateria() {
    axios.get('http://localhost:5000/api/materias').then((res) => {
      //const emps = res.data;
      this.setState({ materias1: res.data });
      console.log(res.data);
    });
  }

  componentDidMount() {
    this.loadMateria();
  }

  render() {
    return (
      <div className="App-materias">
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
        <form autoComplete="off" onSubmit={this.addAlumno}>
          <TextField
            label="Cve. Materia"
            type="text"
            margin="normal"
            variant="outlined"
            inputRef={(e) => (this.frmCveMateria = e)}
          />
          <TextField
            label="Nombre Materia "
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
          {this.state.materias1.map((materia, index) => (
            <ListItem button key={index}>
              <ListItemIcon onClick={this.viewMateria(index)}>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText inset primary={materia.cveMateria} />
              <ListItemText inset primary={materia.nomMateria} />
              <ListItemIcon onClick={this.editMateria(materia.id, index)}>
                <EditIcon />
              </ListItemIcon>
              <ListItemIcon onClick={this.deleteMateria(materia.id)}>
                <DeleteIcon />
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default Materias;
