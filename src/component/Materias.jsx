import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

import Header from './Header';
import MateriasView from '../view/Materias';
import Footer from './Footer';

class Materias extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Header name="MATERIAS" />
        <MateriasView />
        <Footer />
      </div>
    );
  }
}

export default Materias;
