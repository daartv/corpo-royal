import React, { Component } from 'react';
import { ProductosDisponibles, Carrito } from './index.js'

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
    console.log('Nuevo Carrito al empezar cambioCarrito', nuevoCarrito);
    let nuevoSubTotal = 0;
    for (let compra of nuevoCarrito) {
      nuevoSubTotal += compra.precio * compra.cantidad;
    }
    let nuevoIVA = nuevoSubTotal * 0.12;
    this.setState({
      carrito: nuevoCarrito,
      subTotal: nuevoSubTotal,
      IVA: nuevoIVA
    }, () => console.log('Estado al finalizar la funcion y setState', this.state));
  }

  clickAgregar(producto) {
    let nuevoCarrito = this.state.carrito;
    nuevoCarrito.push(producto);
    this.cambioCarrito(nuevoCarrito);
  }

  clickBorrar(nombre, e) {
    let nuevoCarrito = this.state.carrito.filter(compra => compra.nombre !== nombre);
    this.cambioCarrito(nuevoCarrito);
  }

  render() {
    return (
      <div>
        <ProductosDisponibles productos={this.state.disponibles} onClick={this.clickAgregar.bind(this)} />
        <hr></hr>
        <Carrito 
        montos={{subTotal: this.state.subTotal, IVA: this.state.IVA}} 
        compras={this.state.carrito} onClick={this.clickBorrar.bind(this)}
        cambioCarrito={this.cambioCarrito.bind(this)}/>
      </div>
    );
  }
}

export default Presupuesto;