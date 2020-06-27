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

class Grupos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      idGrupo: 0,
      grupos1: [],
    };
  }
  state = {};

  titulo = 'LISTA DE GRUPOS';

  frmIdGrupo = React.createRef();
  frmNombreGru = React.createRef();

  addGrupo = (event) => {
    event.preventDefault();

    const data = {
      idGrupo: this.frmIdGrupo.value,
      nomGrupo: this.frmNombreGru.value,
    };

    if (!this.state.edit) {
      const url = 'http://localhost:5000/api/grupos';

      axios.post(url, data).then((res) => console.log(res.data));

      this.frmIdGrupo.value = '';
      this.frmNombreGru.value = '';
      this.frmIdGrupo.focus();
      this.frmNombreGru.focus();
    } else {
      const url = 'http://localhost:5000/api/grupos/' + this.state.id;

      const data = {
        idGrupo: this.frmIdGrupo.value,
        nomGrupo: this.frmNombreGru.value,
      };

      axios.put(url, data).then((res) => console.log(res.data));
    }

    this.loadGrupo();
  };

  viewGrupo = (id) => (event) => {
    event.preventDefault();

    this.frmIdGrupo.value = '';
    this.frmNombreGru.value = '';
    this.frmIdGrupo.focus();
    this.frmNombreGru.focus();
    this.frmNombreGru.value = this.state.grupos[id];
  };

  editGrupo = (id, row) => (event) => {
    event.preventDefault();

    var newState = this.state;
    newState.edit = true;
    newState.id = id;

    this.setState(newState);

    this.frmIdGrupo.focus();
    this.frmIdGrupo.value = this.state.grupos1[row].idGrupo;
    this.frmNombreGru.focus();
    this.frmNombreGru.value = this.state.grupos1[row].nomGrupo;
  };

  deleteGrupo = (id) => (event) => {
    event.preventDefault();

    const url = 'http://localhost:5000/api/grupos/' + id;

    axios.delete(url).then((res) => console.log(res.data));

    this.loadGrupo();

    console.log(url);
  };

  loadGrupo() {
    axios.get('http://localhost:5000/api/grupos').then((res) => {
      //const emps = res.data;
      this.setState({ grupos1: res.data });
      console.log(res.data);
    });
  }

  componentDidMount() {
    this.loadGrupo();
  }

  render() {
    return (
      <div className="App-grupos">
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
        <form autoComplete="off" onSubmit={this.addGrupo}>
          <TextField
            label="Id. Grupo"
            type="numeric"
            margin="normal"
            variant="outlined"
            inputRef={(e) => (this.frmIdGrupo = e)}
          />
          <TextField
            label="Nombre Grupo "
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
          {this.state.grupos1.map((grupo, index) => (
            <ListItem button key={index}>
              <ListItemIcon onClick={this.viewGrupo(index)}>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText inset primary={grupo.idGrupo} />
              <ListItemText inset primary={grupo.nomGrupo} />
              <ListItemIcon onClick={this.editGrupo(grupo.id, index)}>
                <EditIcon />
              </ListItemIcon>
              <ListItemIcon onClick={this.deleteGrupo(grupo.id)}>
                <DeleteIcon />
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default Grupos;
