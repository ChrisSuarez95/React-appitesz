import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button } from '@material-ui/core';

class Content extends Component {
  state = {};
  render() {
    return (
      <div className="App-content">
        <Container maxWidth="xs">
          <Link to="/alumnos">
            <Button variant="contained" color="default">
              Alumnos
            </Button>
          </Link>
          &nbsp;&nbsp;
          <Link to="/maestros">
            <Button variant="contained" color="default">
              Maestros
            </Button>
          </Link>
          &nbsp;&nbsp;
          <Link to="/materias">
            <Button variant="contained" color="default">
              Materias
            </Button>
          </Link>
          &nbsp;&nbsp;
          <Link to="/grupos">
            <Button variant="contained" color="default">
              Grupos
            </Button>
          </Link>
          &nbsp;&nbsp;
          <Link to="/semestres">
            <Button variant="contained" color="default">
              Semestres
            </Button>
          </Link>
        </Container>
      </div>
    );
  }
}

export default Content;
