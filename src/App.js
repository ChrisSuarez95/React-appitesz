import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Alumnos from './component/Alumnos';
import Content from './component/Content';
import Footer from './component/Footer';
import Semestres from './component/Semestres';
import Grupos from './component/Grupos';
import Header from './component/Header';
import Materias from './component/Materias';
import Maestros from './component/Maestros';
import Menu from './component/Menu';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Menu} />
        <Route path="/alumnos" exact component={Alumnos} />
        <Route path="/materias" exact component={Materias} />
        <Route path="/semestres" exact component={Semestres} />
        <Route path="/maestros" exact component={Maestros} />
        <Route path="/grupos" exact component={Grupos} />
        <Route path="/test" exact component={() => <h1>Principal</h1>} />
        <Route
          path="/mantenimiento"
          exact
          component={() => <h1>ESTAMOS EN MANTENIMIENTO</h1>}
        />
        <Route path="*" component={() => <h1>404 Not FOUND</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
