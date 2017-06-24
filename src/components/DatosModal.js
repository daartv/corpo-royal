import React, { Component } from 'react';
import { Modal, Form, Input, Button, Tooltip, notification } from 'antd';
import axios from 'axios';

import 'antd/lib/modal/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/form/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/tooltip/style/css';
import 'antd/lib/notification/style/css';


const FormItem = Form.Item;

class DatosModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      nombre: '',
      email: '',
      telefono: ''
    }
  }

  procesarPresupuesto() {
    let presupuesto = {
      nombre: this.state.nombre,
      email: this.state.email,
      telefono: this.state.telefono,
      carrito: this.props.presupuesto.carrito,
      subTotal: this.props.presupuesto.subTotal,
      IVA: this.props.presupuesto.IVA,
      total: this.props.presupuesto.subTotal + this.props.presupuesto.IVA
    }
  axios({
    method: 'post',
    url: 'http://localhost:1337/api/presupuesto',
    data: presupuesto,
    header: {
      'Access-Control-Allow-Origin': '*'
    }
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      alert(error);
    })
  this.cambiarEstadoModal();
  }

  cambiarEstadoModal() {
    if (this.props.presupuesto.carrito.length === 0) {
      notification.open({
        message: 'Su carrito esta vacio',
        description: 'Agregue algo al carrito e intente de nuevo'
      })
    } else {
      this.setState({visible: !this.state.visible});
    }
  }

  manejoInput(estado, str) {
    let nuevoEstado = {};
    nuevoEstado[estado] = str.target.value;
    this.setState(nuevoEstado)
  }

  render () {
    return (
      <div>
        <Modal title='Proporcionanos tus datos de contacto' visible={this.state.visible} onCancel={this.cambiarEstadoModal.bind(this)} okText='Aceptar' cancelText='Cancelar' onOk={this.procesarPresupuesto.bind(this)} >
          <Form>
            <FormItem label='Nombre y Apellido' style={{ width: 200 }}>
              <Input value={this.state.nombre} onChange={str => this.manejoInput('nombre', str)}>
              </Input>
            </FormItem>
            <FormItem label='Correo Electrónico' style={{ width: 200}}>
              <Input value={this.state.email} onChange={str => this.manejoInput('email', str)}>
              </Input>
            </FormItem>
            <FormItem label='Número de Teléfono' style={{ width: 200}}>
              <Input value={this.state.telefono} onChange={str => this.manejoInput('telefono', str)}>
              </Input>
            </FormItem>
          </Form>
        </Modal>
        <Tooltip title='Descarga y mándanos una copia de este presupuesto' placement='right' >
          <Button type="primary" shape="circle" icon="download" size='large' onClick={this.cambiarEstadoModal.bind(this)} />
        </Tooltip>
      </div>
    )
  }
}

export default DatosModal;