import React, { Component } from 'react';
import NavBar from './components/NavBar.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Inicio, MisionVision, Productos, QuienesSomos, Contactanos, Presupuesto } from './components/index.js';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Route exact path='/' component={Inicio} />
          <Route path='/inicio' component={Inicio} />
          <Route path='/mv' component={MisionVision} />
          <Route path='/quienessomos' component={QuienesSomos} />
          <Route path='/productos' component={Productos}/>
          <Route path='/presupuesto' component={Presupuesto}/>
          <Route path='/contactanos' component={Contactanos} />
        </div>
      </Router>
    );
  }
}

export default App;
