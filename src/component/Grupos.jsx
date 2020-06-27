import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

import Header from './Header';
import GruposView from '../view/Grupos';
import Footer from './Footer';

class Grupos extends Component {
  state = {};

  gruposArray = ['A', 'B', 'C', 'D', 'E'];

  render() {
    return (
      <div>
        <Header name="GRUPOS" />
        <GruposView data={this.gruposArray} />
        <Footer />
      </div>
    );
  }
}

export default Grupos;
