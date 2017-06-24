import React, { Component } from 'react';
import { ProductosDisponibles, Carrito, DatosModal } from './index.js'
import { notification, Layout } from 'antd';
import axios from 'axios';

import 'antd/lib/button/style/css';
import 'antd/lib/notification/style/css';
import 'antd/lib/layout/style/css';


const { Footer, Sider, Content } = Layout;

class Presupuesto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disponibles: [],
      carrito: [],
      subTotal: 0,
      IVA: 0
    };
  }

  componentDidMount() {
    axios.get('http://localhost:1337/api/productos')
      .then(({data}) => {
        let nProductos = data
        this.setState({disponibles: nProductos})
      })
      .catch((error) => {
        console.log('hubo un error recuperando los productos', error);
        alert('No se recuperaron los productos');
      })
  }

  cambioCarrito(nuevoCarrito) {
    let nuevoSubTotal = 0;
    for (let compra of nuevoCarrito) {
      nuevoSubTotal += compra.precio * compra.cantidad;
    }
    let nuevoIVA = nuevoSubTotal * 0.12;
    this.setState({
      carrito: nuevoCarrito,
      subTotal: nuevoSubTotal,
      IVA: nuevoIVA
    });
  }

  notificacionCantidad() {
    notification.open({
        message: 'Ya agregó este producto al carrito',
        description: 'Si desea cambiar la cantidad, hágalo directamente en el carrito, bajo la columna "Cantidad"',
    });
  }

  clickAgregar(producto) {
    let esDuplicado = false;
    let nuevoCarrito = this.state.carrito;
    for (let compra of nuevoCarrito) {
      if (compra.id === producto.id) {
        esDuplicado = true;
      }
    }
    if (esDuplicado) {
      this.notificacionCantidad()
    } else {
      nuevoCarrito.push(producto);
      this.cambioCarrito(nuevoCarrito);
    }
  }

  clickBorrar(nombre, e) {
    let nuevoCarrito = this.state.carrito.filter(compra => compra.nombre !== nombre);
    this.cambioCarrito(nuevoCarrito);
  }

  render() {
    return (
      <Layout style={{ height: '100vh', fontSize: '125%' }}>
        <Sider style={{ overflow: 'auto' }} width={290}>
          <ProductosDisponibles productos={this.state.disponibles} onClick={this.clickAgregar.bind(this)} />
        </Sider>
        <Content>
          <Carrito 
            montos={{subTotal: this.state.subTotal, IVA: this.state.IVA}} 
            compras={this.state.carrito} onClick={this.clickBorrar.bind(this)}
            cambioCarrito={this.cambioCarrito.bind(this)}/>
        </Content>
        <Footer>
        <DatosModal presupuesto={this.state}/>
        </Footer>
      </Layout>
    );
  }
}

export default Presupuesto;