import React from 'react';
import { Col } from 'antd';
import { Card } from 'antd';
import 'antd/lib/grid/style/css';
import 'antd/lib/card/style/css';

class ProductoIndividual extends React.Component {

	render () {
		return (
			<Col span={6} >
				<Card title={this.props.producto.nombre} style={{ width: 300, fontSize: '125%' }}>
				  <p><b>Descripcion:</b> {this.props.producto.descripcion} </p>
				  <p><b>Precio:</b> {this.props.producto.precio} BsF</p>
				  <p><b>Unidades:</b> {this.props.producto.unidades}</p>
				</Card>
			</Col>
		)
	}
}

export default ProductoIndividual;

