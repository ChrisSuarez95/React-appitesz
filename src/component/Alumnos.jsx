import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

import Header from './Header';
import AlumnosView from '../view/Alumnos';
import Footer from './Footer';

class Alumnos extends Component {
  state = {};

  alumnosArray = [
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

  render() {
    return (
      <div>
        <Header name="ALUMNOS" />
        <AlumnosView data={this.alumnosArray} />
        <Footer />
      </div>
    );
  }
}

export default Alumnos;
