import React, { Component } from 'react';
import { ListaDeProductos } from './index.js';
import axios from 'axios';

class Productos extends Component {
	constructor(props) {
    super(props) 
      this.state = {
        productos: []
      };
    }

  componentDidMount() {
    axios.get('http://localhost:1337/api/productos')
      .then(({data}) => {
        let nProductos = data
        this.setState({productos: nProductos})
      })
      .catch((error) => {
        console.log('hubo un error recuperando los productos', error);
        alert('No se recuperaron los productos');
      })
  }

  render() {
    return (
      <ListaDeProductos productos={this.state.productos} />
    )
  };
}

export default Productos;