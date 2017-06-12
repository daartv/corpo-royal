import React, { Component } from 'react';
import { Form, Input, Button, Select } from 'antd';
import 'antd/lib/select/style/css';
import 'antd/lib/button/style/css';


const FormItem = Form.Item;
const Option = Select.Option;

class Contactanos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tema: '',
      nombre: '',
      email: '',
      telefono: '',
      mensaje: ''
    }
  }

  enviar() {
    console.log(this.state);
  }

  manejoSelect(str) {
    this.setState({tema: str});
  }

  manejoInput(estado, str) {
    let nuevoEstado = {};
    nuevoEstado[estado] = str.target.value;
    this.setState(nuevoEstado)
  }

  render() {

    return (
    	<Form style={{fontSize: '125%'}}>
    		<Select defaultValue="¿En qué lo podemos ayudar?" style={{ width: 200 }} onChange={this.manejoSelect.bind(this)}>
    		  <Option value="presupuesto">Presupuesto</Option>
    		  <Option value="personalizado">Pedido Personalizado</Option>
    		  <Option value="otro">Otro</Option>
    		</Select>

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

    		<FormItem label='Háganos llegar su mensaje' style={{ width: 400 }}>
	    		<Input type='textarea' value={this.state.mensaje} onChange={str => this.manejoInput('mensaje', str)}>
	    		</Input>
    		</FormItem>
    		<Button type='primary' icon='message' onClick={this.enviar.bind(this)}>
    		  Enviar 
    		</Button>
    	</Form>
    )
  }
}

export default Contactanos;