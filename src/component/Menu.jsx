import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

// Importar Componentes
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

var alumnos = [
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

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alumnos: alumnos,
    };
  }
  state = {};

  render() {
    return (
      <div>
        <Header name="MENU PRINCIPAL" />
        <Content data={this.state.data} />
        <Footer />
      </div>
    );
  }
}

export default Menu;
