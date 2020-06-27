import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

import Header from './Header';
import MaestrosView from '../view/Maestros';
import Footer from './Footer';

class Maestros extends Component {
  state = {};

  maestrosArray = [
    'RICARDO GARCIA CRUZ',
    'ROBERTO SUAREZ',
    'ANA CELIA SEGUNDO',
    'ALICIA HERNANDEZ',
    'BRUNO BARBOZA',
    'CLAUDIA',
    'PACO RODRIGUEZ',
    'JORGE EDGAR MAGDALENO',
    'JORGE',
    'RODRIGO GOVEA',
    'HUGO LUA',
    'OZIEL',
  ];

  render() {
    return (
      <div>
        <Header name="MAESTROS" />
        <MaestrosView data={this.maestrosArray} />
        <Footer />
      </div>
    );
  }
}

export default Maestros;
