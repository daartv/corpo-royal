import React, { Component } from 'react';
import { ProductosDisponibles, Carrito, DatosModal } from './index.js'
import { notification, Layout } from 'antd';
import 'antd/lib/button/style/css';
import 'antd/lib/notification/style/css';
import 'antd/lib/layout/style/css';


const { Footer, Sider, Content } = Layout;

const productosFalsos = [
  {cantidad: 1, nombre: 'Bolsa roja', descripcion:'Bolsa de plastico de color rojo', precio: 1000, unidades: 1000000, id: 1},
  {cantidad: 1, nombre: 'Bolsa negra', descripcion:'Bolsa de plastico de color negro', precio: 1001, unidades: 1000000, id: 2},
  {cantidad: 1, nombre: 'Bolsa azul', descripcion:'Bolsa de plastico de color azul', precio: 1000, unidades: 1000000, id: 3},
  {cantidad: 1, nombre: 'Bolsa verde', descripcion:'Bolsa de plastico de color verde', precio: 1000, unidades: 1000000, id: 4},
  {cantidad: 1, nombre: 'Bolsa gris', descripcion:'Bolsa de plastico de color gris', precio: 1000, unidades: 1000000, id: 5},
  {cantidad: 1, nombre: 'Bolsa amarilla', descripcion:'Bolsa de plastico de color amarillo', precio: 1000, unidades: 1000000, id: 6},
  {cantidad: 1, nombre: 'Bolsa transparente', descripcion:'Bolsa de plastico de color gris', precio: 1000, unidades: 1000000, id: 7},
  {cantidad: 1, nombre: 'Bolsa personalizada', descripcion:'Bolsa de plastico de color gris', precio: 1000, unidades: 1000000, id: 8}
  ]

class Presupuesto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disponibles: productosFalsos,
      carrito: [],
      subTotal: 0,
      IVA: 0
    };
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
        <Sider style={{ overflow: 'auto' }}>
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