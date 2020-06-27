import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

import Header from './Header';
import SemestresView from '../view/Semestres';
import Footer from './Footer';
import { Component } from 'react';

class Semestres extends Component {
  state = {};

  semestresArray = [
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

  render() {
    return (
      <div>
        <Header name="SEMESTRES" />
        <SemestresView data={this.semestresArray} />
        <Footer />
      </div>
    );
  }
}

export default Semestres;
