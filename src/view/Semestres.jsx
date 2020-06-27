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

class Semestres extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      idSemestre: 0,
      semestres1: [],
    };
  }
  state = {};

  titulo = 'LISTA DE SEMESTRES';

  frmIdSemestre = React.createRef();
  frmNombreSem = React.createRef();

  addSemestre = (event) => {
    event.preventDefault();

    const data = {
      idSemestre: this.frmIdSemestre.value,
      nomSemestre: this.frmNombreSem.value,
    };

    if (!this.state.edit) {
      const url = 'http://localhost:5000/api/semestres';

      axios.post(url, data).then((res) => console.log(res.data));

      this.frmIdSemestre.value = '';
      this.frmNombreSem.value = '';
      this.frmIdSemestre.focus();
      this.frmNombreSem.focus();
    } else {
      const url = 'http://localhost:5000/api/semestres/' + this.state.id;

      const data = {
        idSemestre: this.frmIdSemestre.value,
        nomSemestre: this.frmNombreSem.value,
      };

      axios.put(url, data).then((res) => console.log(res.data));
    }

    this.loadSemestre();
  };

  viewSemestre = (id) => (event) => {
    event.preventDefault();

    this.frmIdSemestre.value = '';
    this.frmNombreSem.value = '';
    this.frmIdSemestre.focus();
    this.frmNombreSem.focus();
    this.frmNombreSem.value = this.state.semestres[id];
  };

  editSemestre = (id, row) => (event) => {
    event.preventDefault();

    var newState = this.state;
    newState.edit = true;
    newState.id = id;

    this.setState(newState);

    this.frmIdSemestre.focus();
    this.frmIdSemestre.value = this.state.semestres1[row].idSemestre;
    this.frmNombreSem.focus();
    this.frmNombreSem.value = this.state.semestres1[row].nomSemestre;
  };

  deleteSemestre = (id) => (event) => {
    event.preventDefault();

    const url = 'http://localhost:5000/api/semestres/' + id;

    axios.delete(url).then((res) => console.log(res.data));

    this.loadSemestre();

    console.log(url);
  };

  loadSemestre() {
    axios.get('http://localhost:5000/api/semestres').then((res) => {
      //const emps = res.data;
      this.setState({ semestres1: res.data });
      console.log(res.data);
    });
  }

  componentDidMount() {
    this.loadSemestre();
  }

  render() {
    return (
      <div className="App-semestres">
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
        <form autoComplete="off" onSubmit={this.addSemestre}>
          <TextField
            label="Id. Semestre"
            type="text"
            margin="normal"
            variant="outlined"
            inputRef={(e) => (this.frmIdSemestre = e)}
          />
          <TextField
            label="Nombre Semestre "
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
          {this.state.semestres1.map((semestre, index) => (
            <ListItem button key={index}>
              <ListItemIcon onClick={this.viewSemestre(index)}>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText inset primary={semestre.idSemestre} />
              <ListItemText inset primary={semestre.nomSemestre} />
              <ListItemIcon onClick={this.editSemestre(semestre.id, index)}>
                <EditIcon />
              </ListItemIcon>
              <ListItemIcon onClick={this.deleteSemestre(semestre.id)}>
                <DeleteIcon />
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default Semestres;
