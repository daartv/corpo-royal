import React, { Component } from 'react';
import NavBar from './components/NavBar.js';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Inicio, MisionVision, Productos, QuienesSomos, Contactanos, Presupuesto } from './components/index.js';
import 'antd/lib/layout/style/css';

const { Header } = Layout;

class App extends Component {

  render() {
    return (
      <Router>
        <div>
        <Layout style={{fontSize: '150%'}}>
          <Header>
            <NavBar/>
          </Header>
        </Layout>
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
