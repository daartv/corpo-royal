import React from 'react';
import { Card, Button } from 'antd';
import 'antd/lib/grid/style/css';

class DisponibleIndividual extends React.Component {

	agregar() {
		this.props.onClick(this.props.producto);
	}

	render () {
		return (
			<div>
				<Card title={this.props.producto.nombre} style={{ width: 280 }}>
					<p><b>Precio:</b> {this.props.producto.precio}</p>
					<p><b>Descripcion:</b> {this.props.producto.descripcion}</p>
					<p><b>Cantidad:</b> {this.props.producto.unidades}</p>
					<Button type='primary' onClick={this.agregar.bind(this)}> Agregar </Button>
				</Card>
			</div>
		)
	}
}

export default DisponibleIndividual;