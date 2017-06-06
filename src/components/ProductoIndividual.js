import React from 'react';
import { Card } from 'antd';


class ProductoIndividual extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
			<Card title={this.props.producto.nombre} extra={<a href="#">Más</a>} style={{ width: 300 }}>
			  <p>Descripcion: {this.props.producto.descripcion} </p>
			  <p>Precio: {this.props.producto.precio}</p>
			  <p>Unidades: {this.props.producto.unidades}</p>
			</Card>
		)
	}
}

export default ProductoIndividual;

