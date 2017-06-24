import React from 'react';
import { Table, Button, InputNumber, Layout } from 'antd';
import 'antd/lib/button/style/css';
import 'antd/lib/table/style/css';
import 'antd/lib/input-number/style/css';
import 'antd/lib/layout/style/css';

const { Content } = Layout;

class Carrito extends React.Component {

  cambioCantidad(id, cantidad) {
    for (let compra of this.props.compras) {
      if (compra.id === id) {
        compra.cantidad = cantidad
      }
    }
    this.props.cambioCarrito(this.props.compras);
  }

  borrar (nombre, e) {
    this.props.onClick(nombre, e);
  }

  render() {
    const columns = [{
      title: 'Nombre',
      dataIndex: 'nombre',
      key: 'nombre',
    }, {
      title: 'Descripcion',
      dataIndex: 'descripcion',
      key: 'descripcion',
    }, {
      title: 'Unidades',
      dataIndex: 'unidades',
      key: 'unidades',
    }, {
      title: 'Precio',
      dataIndex: 'precio',
      key: 'precio',
    }, {
      title: 'Cantidad',
      key: 'cantidad',
      render: (text, record) => (
        <InputNumber min={1} defaultValue={1} onChange={cantidad => this.cambioCantidad(record.id, cantidad)} />
      )
    }, {
      title: '',
      key: 'borrar',
      render: (text, record) => (
        <Button type='danger' onClick={e => this.borrar(record.nombre, e)}>Borrar</Button>
      )
    }];
    return (
      <Layout>
      <Content>
        <Table dataSource={this.props.compras} columns={columns} />
      </Content>
        <p>Sub-Total: {this.props.montos.subTotal}</p>
        <p>IVA: {this.props.montos.IVA}</p>
        <p>Total a pagar: {this.props.montos.subTotal + this.props.montos.IVA}</p> 
      </Layout>
    )
  }
}

export default Carrito;