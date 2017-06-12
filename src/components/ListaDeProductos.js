import React from 'react';
import { Row } from 'antd';
import { ProductoIndividual } from './index.js'
import 'antd/lib/card/style/css';

const productosFalsos = [
	{nombre: 'Bolsa roja', descripcion:'Bolsa de plastico de color rojo', precio: 1000, unidades: 1000000},
	{nombre: 'Bolsa negra', descripcion:'Bolsa de plastico de color negro', precio: 1001, unidades: 1000001},
	{nombre: 'Bolsa azul', descripcion:'Bolsa de plastico de color azul', precio: 1000, unidades: 1000000},
	{nombre: 'Bolsa verde', descripcion:'Bolsa de plastico de color verde', precio: 1000, unidades: 1000000},
	{nombre: 'Bolsa gris', descripcion:'Bolsa de plastico de color gris', precio: 1000, unidades: 1000000},
	{nombre: 'Bolsa amarilla', descripcion:'Bolsa de plastico de color amarillo', precio: 1000, unidades: 1000000},
	{nombre: 'Bolsa transparente', descripcion:'Bolsa de plastico de color gris', precio: 1000, unidades: 1000000},
	{nombre: 'Bolsa personalizada', descripcion:'Bolsa de plastico de color gris', precio: 1000, unidades: 1000000}
	]

const ListaDeProductos = () => (
  <Row gutter={8}>
    {productosFalsos.map(producto => <ProductoIndividual producto={producto} />)}
  </Row>
	)

export default ListaDeProductos;
