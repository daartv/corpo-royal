import React from 'react';
import { Col, Card, Button } from 'antd';
import 'antd/lib/grid/style/css';

class DisponibleIndividual extends React.Component {

	agregar() {
		this.props.onClick(this.props.producto);
	}

	render () {
		return (
			<div>
				<Card title={this.props.producto.nombre} style={{ width: 200 }}>
					<p>Precio: {this.props.producto.precio}</p>
					<p>Descripcion: {this.props.producto.descripcion}</p>
					<p>Cantidad: {this.props.producto.unidades}</p>
					<Button type='primary' onClick={this.agregar.bind(this)}> Agregar </Button>
				</Card>
			</div>
		)
	}
}

export default DisponibleIndividual;