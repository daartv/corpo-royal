import React from 'react';
import { Row } from 'antd';
import { DisponibleIndividual } from './index.js'
import 'antd/lib/card/style/css';

const ProductosDisponibles = (props) => (
  <Row gutter={8}>
    {props.productos.map(producto => <DisponibleIndividual producto={producto} onClick={props.onClick} />)}
  </Row>
)

export default ProductosDisponibles;