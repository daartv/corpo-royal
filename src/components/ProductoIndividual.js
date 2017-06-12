import React from 'react';
import { Col } from 'antd';
import { Card } from 'antd';
import 'antd/lib/grid/style/css';

class ProductoIndividual extends React.Component {

	render () {
		return (
			<Col span={6}>
				<Card title={this.props.producto.nombre} style={{ width: 300 }}>
				  <p>Descripcion: {this.props.producto.descripcion} </p>
				  <p>Precio: {this.props.producto.precio}</p>
				  <p>Unidades: {this.props.producto.unidades}</p>
				</Card>
			</Col>
		)
	}
}

export default ProductoIndividual;

