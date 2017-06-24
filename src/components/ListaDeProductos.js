import React from 'react';
import { Row } from 'antd';
import { ProductoIndividual } from './index.js'
import 'antd/lib/card/style/css';

const ListaDeProductos = (props) => (
  <Row gutter={8}>
    {props.productos.map(producto => <ProductoIndividual producto={producto} />)}
  </Row>
	)

export default ListaDeProductos;
